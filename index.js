module.exports = {
  cache: {},
  registered: [],
  register: function (name) {
    if (this.registered.indexOf(name) !== -1) return false // Don't register if it's already done.
    else {
      this.cache[name] = {}
      this.registered.push(name)
      return true
    }
  },
  exists: function (space, key) {
    if (key in this.cache[space]) {
      this.cache[space][key].hits++
      return this.cache[space][key].data
    }
    return undefined
  },
  memoize: function (space, key, data) {
    if (this.cache[space] === undefined) return false
    this.cache[space][key] = { hits: 0, data: data }
    return data
  },
  invalidate: function (where, key) {
    if (key === undefined) {
      if (where === undefined) {
        this.cache = {}
        this.registered.forEach(item => {
          this.cache[item] = {}
        })
      }
      else this.cache[where] = {}
    }
    else delete this.cache[where][key]
  },
  data: function (key) {
    if (key === undefined) return this.cache
    else return this.cache[key]
  }
}
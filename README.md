# Nano-memo
## 450 bytes minified/gzipped.  1kb uncompressed/unminified.

Nano-memo is a simple key/value memory store that supports namespaces.
It probably doesn't get any simpler than this (unless you take out stores).
Nano-memo also keeps track of "hits" or the number of times the memoizer was utilized so that you can track metrics.

### Usage

`npm install nano-memo`

```javascript
const cache = require('nano-memo')

cache.register('resources') // Registers a namespace (like a section or area to store values, separate from others)

var myResource = { foo: '1', bar: 2 } // You can use arrays, objects, strings, numbers, any valid JavaScript variable.

cache.memoize('resources', 1, myResource) // Memoize myResource with the key 1 (the key can be a value or string or anything valid for JavaScript keys)

var retrievedResource = cache.exists('resources', 1) // Returns myResource from the store.

var letMeSeeASpace = cache.data('resources') // Returns the memoization structure for a single namespace

cache.invalidate('resources', 1) // Invalidate the key containing myResource
cache.invalidate('resources') // Invalidate the entire resources store.
cache.invalidate() // Invalidate all stores (clear everything)

var letMeSeeEverything = cache.data() // Returns the entire memoization structure (so you can save it to disk/debug/etc.
```

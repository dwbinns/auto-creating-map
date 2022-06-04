# Automatic value creating map

```js
import AutoMap from "auto-creating-map";

const resultsById = new AutoMap(() => []);

resultsById.get("key").push("hello");
resultsById.get("key").push("world");
console.log(resultsById.get("key"));
```

```js
import AutoMap from "auto-creating-map";

const asyncCache = new AutoMap(
    async (url, method, body) => 
        (
            await (
                await fetch(url, { method, body })
            ).json()
        ).data
);

// Only the first parameter - the URL - will be used as the map key
// The remaining parameters will be passed to the factory function
console.log(await asyncCache.get("https://httpbin.org/anything", 'POST', "hello"));
```

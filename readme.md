# urlr

provides an equivalent of `path.relative` for URLs

## usage

``` javascript

var urlr = require("urlr");

urlr("http://www.example.com/foo", "http://www.example.com/foo/bar/"); // 'bar'

```


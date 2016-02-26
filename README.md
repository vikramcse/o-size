# o-size
Returns size of an object

# Install
```sh
$ npm install --save o-size
```

## Examples

```js
var len = require('o-size');

console.log(len({one: 1, two: 2, three: 3}));
// -> 3
```

#### using array like objects
```js
var len = require('o-size');

function dummy () {
  console.log(len(arguments)).to.be.eql(3);
}

dummy(1, 2, 3);
// -> 3
```

## Usage

#### `require('o-size')( object )`

**Arguments**:
- `object`: any object

**Returns**: Returns size of an object

## License
&copy; 2016 vikram. MIT License


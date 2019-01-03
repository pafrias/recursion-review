// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

var stringifyJSON = function(obj) {
  if (obj === null) {
    return 'null';
  } else if (typeof obj === 'string') {
    return `"${obj}"`;
  } else if (typeof obj === 'boolean' || typeof obj === 'number') {
    return `${obj}`;
  } else if (typeof obj === 'object') {
    if (Array.isArray(obj)) {
      var result = '[';
      obj.map((arg)=>{
        result += stringifyJSON(arg) + ',';
      });
      if (obj.length > 0) {
        result = result.slice(0, result.length - 1);
      }
      result += ']';
      return result;
    } else {
      var result = '{';
      let keys = Object.keys(obj);
      keys.map((arg)=>{
        if (stringifyJSON(obj[arg])) {
          result += stringifyJSON(arg) + ':' + stringifyJSON(obj[arg]) + ',';
        }
      });
      if (result.length > 2) {
        result = result.slice(0, result.length - 1);
      }
      result += '}';
      return result;
    }
  }
};
  

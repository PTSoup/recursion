// this is what you would do if you liked things to be easy:
// var stringifyJSON = JSON.stringify;

// but you don't so you're going to write it from scratch:

// Pseudocode
  // var stringifyJSON = function(obj) {

    // if the object is just a value, return the value with quotes around it
    
    // if the object is an array
      // iterate through the array returning the values
      // strings should have quotes around them
      // if the values are null, undefined, or numbers, return without quotes
      // return all items in brackets, with quotes around them
    
    // if the object is an object
      // iterate through the object returning properties and keys.
      //strings should have quotes around them
      // if the keys are null, undefined, or numbers, return without quotes
      // return all items in curly brackets, with quotes around them
    
  // };


var stringifyJSON = function(obj) {

    if (typeof obj === 'string') {
        return "\"" + obj.replace(/'/gi, '"') + "\"";

    } else if (typeof obj === 'function' || typeof obj === 'symbol' || obj === undefined || obj === null) {
        return "" + null + "";

    } else if (typeof obj === 'number' || typeof obj === 'boolean') {
        return "" + obj + "";

    } else if (Array.isArray(obj)) {
        return '[' + obj.map(stringifyJSON) + ']';

    } else if (typeof obj === 'object') {
        var keys = Object.keys(obj).reduce((output, key) => {
            if (typeof obj[key] === 'function' || typeof obj[key] === 'undefined') {
                return output;
            } else {
                var keyValue = `"${key}":${stringifyJSON(obj[key])}`
                output.push(keyValue);
            }
            return output;
        }, []);
        return "{" + keys.join(',') + "}";
    }

};


// O - string
// I - string, object, or an array
// C - time, has to use recursion in the solution.
// E - what if there is an undefined?
//  what if there is a null?
//  what if there is a number?
//  what if the object or the array is empty?
//  what if the object or array is nested inside of another object/array?


//  Example: stringifyJSON([1,2,3]); // => [1,2,3]
//       stringifyJSON({ninja: 1, turtle:2}) // => {"ninja": 1, "turtle": 2};

// formats:

// if it's a string => "string"
// if it's a number by itself => "3"
// if it's a number in an object = 3
// if it's a number in an array = 3
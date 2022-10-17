/**
Given a URL with the following form, extract and return the key-value pairs in a single object.  

💡 **URL format:** `whatever#ld3=vafield1=value1&field2=value2&fielue3...`

The sequence of key-value pairs will always start after a # character and you can assume that is the only such character in the input string.

You can treat all of the parameter values as strings.

Don’t worry about the *order* of the key-value pairs when you display your output object.


psuedocode

function splitString(input string): string array

  keyValueString splitString(using # seperator)
  store keyValue = second element of string array

  splitString(keyValue using & as operator) => stringArray
  define new object type {}...

 */


function extractKeyValues(myString) {
  let keyValueString = myString.split('#');
  let allKeyValues = keyValueString[1];

  let arrayOfKeyValuePairs = allKeyValues.split('&');
  let objectOfKVpairs = {};

  for (let element of arrayOfKeyValuePairs) {
    let field = element.split('=')[0]
    let value = element.split('=')[1]
    //   console.log(field, value)
    objectOfKVpairs[field] = value    //adds key with matching value to object
  }

  return obj
}


//test cases

console.log(extractKeyValues('http://localhost:3000/#name=homer&food=floorpie'), 'should be { name: "homer", food: "floorpie" }')
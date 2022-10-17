/**
Given a URL with the following form, extract and return the key-value pairs in a single object.  

💡 **URL format:** `whatever#field1=value1&field2=value2&field3=value3...`


The sequence of key-value pairs will always start after a # character and you can assume that is the only such character in the input string.

You can treat all of the parameter values as strings.

Don’t worry about the *order* of the key-value pairs when you display your output object.

### Examples

### Example 1

Example input 1: 

```tsx
http://localhost:3000/#name=homer&food=floorpie
```

Expected output 1:

{
    name: "homer",
    food: "floorpie"
}

psuedocode

function splitString(input string): string array
  keyValueString splitString(using # seperator)
  store keyValue = second element of string array

  splitString(keyValue using & as operator) => stringArray
  define new object type {}



 */

let value1 = 'hello'
let value2 = 'hello again'
interface myObject{
  field1: string
  field2: string
}

let obj1: myObject = {field1:'abc', field2:'def'}
obj1.field1 = 'def'
console.log(obj1)




let myArray: myObject[] = []
myArray.push({field: 'field1', value: value1})

let obj = {
  key1: 'val1',
  key2: 'val2'
}


obj.key3 = 'val3'
console.log(obj)


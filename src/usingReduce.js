function extractParam(myString) {
    let keyValueString = myString.split('#');
    let allKeyValues = keyValueString[1];

    let arrayOfKeyValuePairs = allKeyValues.split('&');  
    let objectOfKVpairs = {};

    for (let element of arrayOfKeyValuePairs) {
        let field = element.split('=')[0]
        let value = element.split('=')[1]
        objectOfKVpairs[field] = value    //adds key with matching value to object
    }

   let obj = arrayOfKeyValuePairs.reduce(addKeyValue) 

    return obj

 }


 function addKeyValue(objectOfKVpairs, keyValueArray) {
    let field = keyValueArray.split('=')[0]
    let value = keyValueArray.split('=')[1]
    // console.log(field, value)
    return (value)
 }  

 //test cases

console.log( extractParam('http://localhost:3000/#name=homer&food=floorpie'), 'should be { name: "homer", food: "floorpie" }')
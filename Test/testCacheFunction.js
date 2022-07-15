const cacheFunction=require('../cacheFunction.js');

function callBack(value){
    return value+5;
}
let result=cacheFunction(callBack);
console.log(result(5));
//console.log(result(5));

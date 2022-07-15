const limitFunctionCallCount=require('../limitFunctionCallCount');
function callBack(){
    return "hello";
}
const n=5;
const result=limitFunctionCallCount(callBack,n);
console.log(result());
console.log(result());
console.log(result());
console.log(result());
console.log(result());

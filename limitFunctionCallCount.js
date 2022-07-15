function limitFunctionCallCount(callBack,n){
    let count=1;
    function invockCallBack(){
        if(count<=n){
            let callBackResult=callBack();
            //console.log(count);
            count++;
            return callBackResult;
        }
        else{
            return null;
        }
    }
    return invockCallBack;
}

module.exports=limitFunctionCallCount;

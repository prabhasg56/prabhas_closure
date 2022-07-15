function cacheFunction(callBack){
    let cacheObject={};
    function invokeCallBack(object){
        //console.log(object);
        //console.log(cacheObject)
        if(object in cacheObject){
            return cacheObject[object];
        }
        else{
            const val=callBack(object);
            cacheObject[object]=val;
            //console.log(cacheObject)
            return cacheObject;
        }
    }
    //console.log(cacheObject);
    return invokeCallBack;
}

module.exports=cacheFunction;

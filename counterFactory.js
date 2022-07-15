function counterFactory(){
    let count=1;
    return{
        incrementCount(){
            return ++count;
        },
       // return incrementCount();
        decrementCount(){
            return --count;
        }
        //return decrementCount();
    }
}

module.exports=counterFactory;

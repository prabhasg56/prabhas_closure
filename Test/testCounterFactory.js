const counterFactory=require('../counterFactory.js');

const result=counterFactory();
console.log(result.incrementCount());
console.log(result.decrementCount());

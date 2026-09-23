const promise = new Promise((resolve,reject )=>{
if(sucess){
    resolve("operation sucessful");
   }
   else {
    reject("operation failed");
   }
});
promise.then(result=>{
    console.log(result)
})
// not fully completed
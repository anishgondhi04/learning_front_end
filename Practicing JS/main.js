// syntax of promises

function promisifiedMyOwnSetTimeout(duration){
    const p = new Promise(function(resolve){
        setTimeout(resolve, duration)
    });
    return p;
 }
 const ans = promisifiedMyOwnSetTimeout(1000);
ans.then(function(){
    console.log("timeout is done")
})
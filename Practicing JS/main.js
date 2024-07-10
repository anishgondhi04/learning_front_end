function someSyncTask1() {
    console.log("some sync task 1");
}
function someSyncTask2() {
    console.log("some sync task 2");
}
setTimeout(function (data) {
    someSyncTask2(data)
}, 1000)
someSyncTask1();   
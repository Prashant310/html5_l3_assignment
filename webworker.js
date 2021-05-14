function startWebWorker(e) {

    e.preventDefault();


    var num = parseInt(document.getElementById("num").value);
    if (isNaN(num) ) { alert("Is not a number"+ typeof(num));return false; }
    if(num > 100){alert("Number cannot be greater than 100"); return false;}
    if (typeof (Worker) !== "undefined") {
        console.log("web worker availalbe");
        if (typeof (w) == "undefined") {
            document.getElementById("webworker_result").style.display = "block";
            document.getElementById("result_holder").innerHTML = "";
            w = new Worker("prime_number.js");
            w.postMessage(["", num])
            // console.log("Posted the message");
        } else {
            alert("Worker is already running. Please STOP the current web worker and START again");
            return false;
        }
        w.onmessage = function (event) {
            // console.log("Message recieved");            
            var node = document.createElement("span");
            var textnode = document.createTextNode(event.data);
            node.appendChild(textnode);
            document.getElementById("result_holder").appendChild(node);
        };
    } else {
        document.getElementById("result").innerHTML = "Sorry, your browser does not support Web Workers...";
    }
}
function stopWebWorker(e) {
    e.preventDefault();
    if (typeof (w) !== "undefined") {
        w.terminate();
        w = undefined;
        console.log("web worker terminated");
    }else{
        alert("Web Worker is not running currently");
    }
    

}

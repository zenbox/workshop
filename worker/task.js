
onmessage = function (event) { 

    console.log('worker runs ...');
    console.dir(event);

    console.dir(self);

    postMessage({ message: "yes, hello" });

    self.close();
}
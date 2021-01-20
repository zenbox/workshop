
onmessage = function (event) { 

    console.log('yes i\'m running');
    console.dir(event);

    console.dir(self);

    postMessage({ message: "yes, hello" });

    self.close();
}
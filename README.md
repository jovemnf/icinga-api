# icinga-api



```javascript

let Icinga = require("icinga-api").Icinga;

let host = new Icinga("https://127.0.0.1:5665","user","senha");


host.services.getOne("192.168.0.9!disk")
	.then((body) => console.log(body))
	.catch((err) => console.error(err));


```
window.addEventListener('message', onSmile);

function onSmile(e) {

	console.log("SAM MESSAGE TRIGGERED");
	console.log("e: " + e.toString());

	if (!e || !e.data) {
		console.error("Unexpected message received", e);
		return;
	}
	if (!Array.isArray(e.data)) {
		console.error("Error: CV.data not an array", e);
		return;
	}

	var faces = e.data[1].payload.currentFaces;
	if (faces[0] == null) {
		console.error("Error: no face data.", e);
		return;
	}
	console.log("gender of faces[0]" + faces[0].gender);
	var smiling = false;
	for (var i = 0; i < faces.length; i++) {
		if (faces[i].smile) {
			smiling = true;
			console.log("smiling");
		}
	}

	if (smiling) {
		var _www = _main._threeMain._worldList[0];

		_www.mOver();
	    window.setTimeout(function() {
	        _www.mOut();
	    }, 2000);

	}
}

//self explanatory
function resetLaptop() {
	expand(0);
	rotate(0);
	controls.expand = 0;
	controls.rotation = 0;
	effectController.fieldOfView = 40;
    effectController.expand = 0;
    effectController.rotation = 0;
}

//expands the pieces apart from each other based on a percent
function expand(percent) {
	topp.position.y = 3.5 * percent;
	cpu.position.y = 1 * percent;
	gpu.position.y = 1 * percent;
	ram.position.y = 2 * percent;
	ssd.position.y = 2 * percent;
	battery.position.y = -2 * percent;
	dvd.position.y = -1 * percent;
	bus.position.y = -2 * percent;
	bottom.position.y = -4 * percent;
}

function rotate(degree) {
  //  laptopFull.rotation.x = degree;
  laptopFull.rotation.y = degree + Math.PI / 2;
}

//onclick events
function onDocumentMouseDown( event ) {
	//ignore random mouse twitches
	event.preventDefault();
	//get the mouse postition
	var mouseX = (event.clientX / window.innerWidth)*2-1;
	var mouseY = -(event.clientY / window.innerHeight)*2+1;
	//create a 3d vector to shoot into the 3d space
	var vector = new THREE.Vector3(mouseX, mouseY, 0.5);
	//create a new projector
	projector = new THREE.Projector();
	//project out from camera position
	projector.unprojectVector(vector, camera);
	//create a raycaster that excludes the camera
	var raycaster = new THREE.Raycaster(camera.position, vector.sub(camera.position).normalize());

	//calculate the intersections
	var intersects = raycaster.intersectObjects(laptopFull.children, true );

	//unselect the last item
	unselectLast();
	//select the new item
	if (intersects.length > 0 && selected === null) {
		//save the color of the intersected object
		highlight = intersects[ 0 ].object.material.color.getHex();
		//console.log(highlight);
		//toggle change to show that the intersected object is selected
		intersects[ 0 ].object.material.color.setHex(0x78CBFD);
		//intersects[0].object.parent.parent.parent.position.x += 10;
		//store and log what is selected
		selected = laptopFull.getObjectById(intersects[ 0 ].object.id, true);
		console.log(selected.parent.parent);
	}
	getDescription(selected.parent.parent.parent.name);
}

//unselect
function unselectLast() {
	if(selected !== null){
		selected.parent.parent.parent.position.x = 0;
		selected.parent.parent.rotation.x = 0;
		selected.parent.parent.rotation.y = 0;
		selected.parent.parent.rotation.z= 0;
		selected.material.color.setHex(highlight);
		document.getElementById('descriptions').style.visibility = "hidden";
		selected = null;
	}
}

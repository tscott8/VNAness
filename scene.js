//setup all the lighting
function threePointLight() {
	var x, y, z;
	x = y = z = 3;
	var intense =.5;
	var color = 0xffffff;

	var directionalLight = new THREE.DirectionalLight( color );
	directionalLight.position.set(x, y, z).normalize();
	directionalLight.intensity = intense/2;
	scene.add(directionalLight);//top

	directionalLight = new THREE.DirectionalLight(color);
	directionalLight.position.set(-x, -y, -z).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight);//bottom

	directionalLight = new THREE.DirectionalLight(color);
	directionalLight.position.set(-x, 0, 0).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight); //left

	directionalLight = new THREE.DirectionalLight(color);
	directionalLight.position.set(x, 0, 0).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight); //right

	var light = new THREE.HemisphereLight( color, 0x000000, intense );
	scene.add( light );
}

//load all the pieces of the laptop, add them to a container, and add them to the scene
function loadObject() {
	topp = LoadTop(1,0,-.5);
	motherboard = LoadMotherboard(.505,0,0);
	cpu = LoadCPU(.85,0,-.25);
	gpu = LoadGPU(.85,0,-2.25);
	ram = LoadRAM(.25,0,-.25);
	ssd = LoadSSD(.4,0,0);
	battery = LoadBattery(.45,0,-.1);
	dvd = LoadDVD(.4,90,-.15);
   //bus = LoadBus(1,0,1);
   bottom = LoadBottom(.875,0,-.5);			
   laptopFull.add(topp,motherboard,cpu,gpu,ram,ssd,battery,dvd/*,bus*/,bottom);
   laptopFull.rotation.y = Math.PI / 2;
   laptopFull.position.y = -2;
   scene.add(laptopFull);			
}

//setup the GUI and controls
function setupGui() {
	effectController = {	fieldOfView:40 };
	controls = new function() {
		this.rotation = 0;
		this.expand = 0;
		this.reset = function() { resetLaptop() }
	}  

	gui.add(effectController, "fieldOfView", 1.0, 150.0).listen();
	gui.add(controls, 'rotation', 0.0, 10.0).listen();
	gui.add(controls, 'expand', 0, 5).listen();
	gui.add(controls, 'reset').name("Reset Laptop Parameters");
}

//initialize all the things
function init() {
	//create a scene
	scene = new THREE.Scene();
	//setup the camera
	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
	camera.position.z = -30;
	camera.position.y = 5;
	//load objects and light em up
	loadObject();
	threePointLight();
	//set up renderer
	renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true} );
	//renderer.shadowMapEnabled = true;
	renderer.setClearColor( 0x2f2f2f, 1 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.sortObjects = false;
	document.body.appendChild( renderer.domElement );
	// Add OrbitControls so that we can pan around with the mouse.
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.target.set(0,0,0);
	//add an event listener for mouse clicks
	document.addEventListener( 'mousedown', onDocumentMouseDown, false );
}

// This function is called many times a second.  You do anything that needs to be updated, changed, moved here
function animate() {
	requestAnimationFrame( animate );
    
    getKeyChange();

	//expand control
	expand(controls.expand);
	rotate(controls.rotation);
	
	
	if(selected != null) {

		selected.parent.parent.rotation.x += .01;
		selected.parent.parent.rotation.z += -.01;
		
	}

	// field of view controller updater
	camera.fov = effectController.fieldOfView;
	camera.updateProjectionMatrix();
	// must do these two statements
	renderer.render( scene, camera ); 
	//controls.update();
}
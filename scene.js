//setup all the lighting
function threePointLight() {
	var x, y, z;
	x = y = z = 3;
	var intense =.4;
	var color = 0x404040;

	var directionalLight = new THREE.DirectionalLight( color );
	directionalLight.position.set(-x, y, -z).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight);//topleftfront

	directionalLight = new THREE.DirectionalLight( color );
	directionalLight.position.set(0, y, 0).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight);//topcenter

	directionalLight = new THREE.DirectionalLight( color );
	directionalLight.position.set(x, y, -z).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight);//toprightfront
	
	directionalLight = new THREE.DirectionalLight( color );
	directionalLight.position.set(x, y, z).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight);//toprightback

	directionalLight = new THREE.DirectionalLight( color );
	directionalLight.position.set(-x, y, z).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight);//topleftback


	directionalLight = new THREE.DirectionalLight(color);
	directionalLight.position.set(-x, -y, -z).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight);//bottomleftfront
	
	directionalLight = new THREE.DirectionalLight(color);
	directionalLight.position.set(0, -y, 0).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight);//bottomcenter
	
	directionalLight = new THREE.DirectionalLight(color);
	directionalLight.position.set(x, -y, -z).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight);//bottomrightfront

	directionalLight = new THREE.DirectionalLight( color );
	directionalLight.position.set(x, -y, z).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight);//bottomrightback

	directionalLight = new THREE.DirectionalLight( color );
	directionalLight.position.set(-x, -y, z).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight);//bottomleftback
	
	directionalLight = new THREE.DirectionalLight(color);
	directionalLight.position.set(-x, 0, -z).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight); //left

	directionalLight = new THREE.DirectionalLight(color);
	directionalLight.position.set(x, 0, -z).normalize();
	directionalLight.intensity = intense;
	scene.add(directionalLight); //right
	
//	var spotLight = new THREE.SpotLight( color, intense, 100 );
//	spotLight.position.copy(camera.position).normalize();
//	spotLight.intensity = intense;
//	scene.add(spotLight); //CAMERA
	
	var light = new THREE.HemisphereLight( color, 0x000000, intense);
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
	dvd = LoadDVD(.4,0,-.15);
	bus = LoadBus(.4, 0,-.25);
	bottom = LoadBottom(.875,0,-.5);			
	laptopFull.add(topp,motherboard,cpu,gpu,ram,ssd,battery,dvd,bus,bottom);
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
    var SCREEN_WIDTH = window.innerWidth, SCREEN_HEIGHT = window.innerHeight;
	var VIEW_ANGLE = 45, ASPECT = SCREEN_WIDTH / SCREEN_HEIGHT, NEAR = 0.1, FAR = 20000;
	camera = new THREE.PerspectiveCamera( VIEW_ANGLE, ASPECT, NEAR, FAR);
	scene.add(camera);
	camera.position.set(0,5,-35);
	camera.lookAt(scene.position);	
//	camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 1, 10000 );
//	camera.position.z = -30;
//	camera.position.y = 5;
	//load objects and light em up
	loadObject();
	threePointLight();
	//set up renderer
	renderer = new THREE.WebGLRenderer({ antialias: true, alpha: true} );
	//renderer.shadowMapEnabled = true;
	renderer.setClearColor( 0x191919, 1 );
	renderer.setPixelRatio( window.devicePixelRatio );
	renderer.setSize( window.innerWidth, window.innerHeight );
	renderer.sortObjects = false;
	document.body.appendChild( renderer.domElement );
	// Add OrbitControls so that we can pan around with the mouse.
	controls = new THREE.OrbitControls(camera, renderer.domElement);
	controls.target.set(0,0,0);
	//add an event listener for mouse clicks
	document.addEventListener( 'mousedown', onDocumentMouseDown, false );


//// create an array with six textures for a cool cube
//	var materialArray = [];
//	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'objects/textures/gpu.png' ) }));
//	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'objects/textures/gpu.png' ) }));
//	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'objects/textures/gpu.png' ) }));
//	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'objects/textures/gpu.png' ) }));
//	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'objects/textures/gpu.png' ) }));
//	materialArray.push(new THREE.MeshBasicMaterial( { map: THREE.ImageUtils.loadTexture( 'objects/textures/gpu.png' ) }));
//	var MovingCamMat = new THREE.MeshFaceMaterial(materialArray);
//	var MovingCamGeom = new THREE.CubeGeometry( .01, .01, .01, .01, .01, .01, materialArray );
//	MovingCam = new THREE.Mesh( MovingCamGeom, MovingCamMat );
//	MovingCam.position.set(0, 5, -35);
//	scene.add( MovingCam );	
	
}

var MovingCam;

// This function is called many times a second.  You do anything that needs to be updated, changed, moved here
function animate() {
	requestAnimationFrame( animate );
    
    //getKeyChange();

	//expand control
	expand(controls.expand);
	rotate(controls.rotation);
	//update();
	
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

function update()
{
	var delta = clock.getDelta(); // seconds.
	var moveDistance = 200 * delta; // 200 pixels per second
	var rotateAngle = Math.PI / 2 * delta;   // pi/2 radians (90 degrees) per second
	
	// local transformations

	// move forwards/backwards/left/right
	/*if ( keyboard.pressed("W") )
		MovingCam.translateZ( -moveDistance );
	if ( keyboard.pressed("S") )
		MovingCam.translateZ(  moveDistance );
	if ( keyboard.pressed("Q") )
		MovingCam.translateX( -moveDistance );
	if ( keyboard.pressed("E") )
		MovingCam.translateX(  moveDistance );	

	// rotate left/right/up/down
    //Unsure as to how to use the number pad here or 
    //the arrow keys
	var rotation_matrix = new THREE.Matrix4().identity();
	if ( keyboard.pressed("A") )
		MovingCam.rotateOnAxis( new THREE.Vector3(0,1,0), rotateAngle);
	if ( keyboard.pressed("D") )
		MovingCam.rotateOnAxis( new THREE.Vector3(0,1,0), -rotateAngle);
	if ( keyboard.pressed("R") )
		MovingCam.rotateOnAxis( new THREE.Vector3(1,0,0), rotateAngle);
	if ( keyboard.pressed("F") )
		MovingCam.rotateOnAxis( new THREE.Vector3(1,0,0), -rotateAngle);
	
	if ( keyboard.pressed("Z") )
	{
		MovingCam.position.set(0,5,-35);
		MovingCam.rotation.set(0,0,0);
	}*/
	
    //if you set this to (0,5,-35) then it bounces when you
    //move it. 
	var relativeCameraOffset = new THREE.Vector3(0,50,200);

	var cameraOffset = relativeCameraOffset.applyMatrix4( MovingCam.matrixWorld );

	camera.position.x = cameraOffset.x;
	camera.position.y = cameraOffset.y;
	camera.position.z = cameraOffset.z;
	//camera.lookAt( MovingCam.position );
	
	//camera.updateMatrix();
	//camera.updateProjectionMatrix();
}
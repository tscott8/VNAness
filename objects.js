function LoadTop(scale, rotate, pos){
	var topLoad = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/laptop-top2.obj", "objects/laptop-top2.mtl",
		function ( obj ) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			topLoad.add(obj);
		});
	return topLoad;
}
function LoadMotherboard(scale, rotate, pos){
	var motherboardLoad = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/motherboard2.obj", "objects/motherboard2.mtl",
		function ( obj ) {
		obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 1.28;
			obj.position.z = 2.0;
		motherboardLoad.add(obj);
		});
return motherboardLoad;
}
function LoadCPU(scale, rotate, pos){
	var cpuLoad = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/i7/i7.obj", "objects/i7/i7.mtl",
		function ( obj ) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 1.85;
			obj.position.z = 2.9;
		cpuLoad.add(obj);
		});
return cpuLoad;
}
function LoadGPU(scale, rotate, pos){
	var gpuLoad = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/gpu2.obj", "objects/gpu2.mtl",
		function ( obj ) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.z = 2.9;
			obj.position.x = -1.25;
		gpuLoad.add(obj);
		});
return gpuLoad;
}
function LoadRAM(scale, rotate, pos){
var ramLoad = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/ram2.obj", "objects/ram2.mtl",
		function ( obj ) {
		obj.scale.x = obj.scale.y = obj.scale.z = scale;
		obj.rotation.z = 90 * Math.PI / 180;
		obj.rotation.x = 90 * Math.PI / 180;
		obj.rotation.y = rotate;
			obj.position.y = pos;
		obj.position.x = 2.85;
		ramLoad.add(obj);
		});
return ramLoad;
}
function LoadSSD(scale, rotate, pos){
	var ssdLoad = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/ssd2.obj", "objects/ssd2.mtl",
		function ( obj ) {
		obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 5;
			obj.position.z = 4.5;
		ssdLoad.add(obj);
		});
return ssdLoad;
}
function LoadBattery(scale, rotate, pos){
	var batteryLoad = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/battery2.obj", "objects/battery2.mtl",
		function ( obj ) {
		obj.scale.x = obj.scale.y = obj.scale.z = scale;
		obj.scale.y = .25;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 5;
			obj.position.z = -2.5;
		batteryLoad.add(obj);
		});
return batteryLoad;
}
function LoadDVD(scale, rotate, pos){
	var dvdLoad = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/cd_dvd2.obj", "objects/cd_dvd2.mtl",
		function ( obj ) {
		obj.scale.x = obj.scale.y = obj.scale.z = scale;
		obj.scale.y = .2;
		obj.rotation.y = rotate * Math.PI/180;
		obj.position.y = pos;
		obj.position.z = -4.1;
		obj.position.x = .4;
		dvdLoad.add(obj);
		});
return dvdLoad;
}
function LoadBus(scale, rotate, pos){
var busLoad = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/bus2.obj", "objects/bus2.mtl",
		function ( obj ) {
		obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
		busLoad.add(obj);
		});
return busLoad;
}
function LoadBottom(scale, rotate, pos){
	var bottomLoad = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/laptop-bottom2.obj", "objects/laptop-bottom2.mtl",
		function ( obj ) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
		bottomLoad.add(obj);
		});
return bottomLoad;
}

function LoadTop(scale, rotate, pos){
	var topLoad = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("laptop-top2.obj", "laptop-top2.mtl", 
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
	loader.load("motherboard2.obj", "motherboard2.mtl",
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
	loader.load("i72.obj", 
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
	loader.load("gpu2.obj", "gpu2.mtl",
		function ( obj ) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			//obj.position.x = 1.85;
			obj.position.z = 2.9;
			obj.position.x = -1.25;
		gpuLoad.add(obj);
		});
return gpuLoad;
}
function LoadRAM(scale, rotate, pos){
var ramLoad = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("ram2.obj", "ram2.mtl",
		function ( obj ) {
		obj.scale.x = obj.scale.y = obj.scale.z = scale;
		obj.rotation.z = 90 * Math.PI / 180;
		obj.rotation.x = 90 * Math.PI / 180;
		obj.rotation.y = rotate;
			obj.position.y = pos;
//		obj.position.z;
		obj.position.x = 2.85;
		ramLoad.add(obj);
		});
return ramLoad;
}
function LoadSSD(scale, rotate, pos){
	var ssdLoad = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("ssd2.obj", "ssd2.mtl",
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
	loader.load("battery2.obj", "battery2.mtl",
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
	loader.load("cd_dvd2.obj", "cd_dvd2.mtl",
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
	loader.load("bus2.obj", "bus2.mtl",
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
	loader.load("laptop-bottom2.obj", "laptop-bottom2.mtl",
		function ( obj ) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
		bottomLoad.add(obj);
		});
return bottomLoad;
}
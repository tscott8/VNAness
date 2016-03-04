function LoadTop(scale, rotate, pos){
	var top = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("laptop-top2.obj", "laptop-top2.mtl", 
		function ( obj ) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			top.add(obj);
		});	
	return top;
}

function LoadBottom(scale, rotate, pos){
	var bottom = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("laptop-bottom2.obj", "laptop-bottom2.mtl",
		function ( obj ) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
		bottom.add(obj);
		});
return bottom;
}
function LoadMotherboard(scale, rotate, pos){
	var motherboard = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("motherboard2.obj", "motherboard2.mtl",
		function ( obj ) {
		obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 1.28;
			obj.position.z = 2.0;
		motherboard.add(obj);
		});
return motherboard;
}
function LoadCPU(scale, rotate, pos){
	var cpu = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("i72.obj", 
		function ( obj ) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 1.85;
			obj.position.z = 2.9;
		cpu.add(obj);
		});
return cpu;
}
function LoadGPU(scale, rotate, pos){
	var gpu = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("gpu2.obj", "gpu2.mtl",
		function ( obj ) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			//obj.position.x = 1.85;
			obj.position.z = 2.9;
			obj.position.x = -1.25;
		gpu.add(obj);
		});
return gpu;
}
function LoadRAM(scale, rotate, pos){
var ram = new THREE.Object3D();
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
		ram.add(obj);
		});
return ram;
}
function LoadSSD(scale, rotate, pos){
	var ssd = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("ssd2.obj", "ssd2.mtl",
		function ( obj ) {
		obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 5;
			obj.position.z = 4.5;
		ssd.add(obj);
		});
return ssd;
}
function LoadBattery(scale, rotate, pos){
	var battery = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("battery2.obj", "battery2.mtl",
		function ( obj ) {
		obj.scale.x = obj.scale.y = obj.scale.z = scale;
		obj.scale.y = .25;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 5;
			obj.position.z = -2.5;
		battery.add(obj);
		});
return battery;
}
function LoadDVD(scale, rotate, pos){
	var dvd = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("cd_dvd2.obj", "cd_dvd2.mtl",
		function ( obj ) {
		obj.scale.x = obj.scale.y = obj.scale.z = scale;
		obj.scale.y = .2;
		obj.rotation.y = rotate * Math.PI/180;
		obj.position.y = pos;
		obj.position.z = -4.1;
		obj.position.x = .4;
		dvd.add(obj);
		});
return dvd;
}
function LoadBus(scale, rotate, pos){
var bus = new THREE.Object3D();
	var loader = new THREE.OBJMTLLoader();
	loader.load("bus2.obj", "bus2.mtl",
		function ( obj ) {
		obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
		bus.add(obj);
		});
return bus;
}

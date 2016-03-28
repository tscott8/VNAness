function LoadTop(scale, rotate, pos) {
	var topLoad = new THREE.Object3D();
	topLoad.name = "top";
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/laptop-top.obj", "objects/laptop-top.mtl",
		function (obj) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			topLoad.add(obj);
		});
	return topLoad;
}
function LoadMotherboard(scale, rotate, pos) {
	var motherboardLoad = new THREE.Object3D();
	motherboardLoad.name = "motherboard";
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/motherboard.obj", "objects/motherboard.mtl",
		function (obj) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 1.28;
			obj.position.z = 2.0;
			motherboardLoad.add(obj);
		});
	return motherboardLoad;
}
function LoadCPU(scale, rotate, pos) {
	var cpuLoad = new THREE.Object3D();
	cpuLoad.name = "cpu";
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/i7.obj", "objects/i7.mtl",
		function (obj) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 1.85;
			obj.position.z = 2.9;
			cpuLoad.add(obj);
		});
	return cpuLoad;
}
function LoadGPU(scale, rotate, pos) {
	var gpuLoad = new THREE.Object3D();
	gpuLoad.name = "gpu";
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/gpu.obj", "objects/gpu.mtl",
		function (obj) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.z = 2.9;
			obj.position.x = -1.25;
			gpuLoad.add(obj);
		});
	return gpuLoad;
}
function LoadRAM(scale, rotate, pos) {
	var ramLoad = new THREE.Object3D();
	ramLoad.name = "ram";
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/ram.obj", "objects/ram.mtl",
		function (obj) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 2.85;
			ramLoad.add(obj);
		});
	return ramLoad;
}
function LoadSSD(scale, rotate, pos) {
	var ssdLoad = new THREE.Object3D();
	ssdLoad.name = "ssd";
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/ssd.obj", "objects/ssd.mtl",
		function (obj) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.scale.y = .25;
			obj.rotation.x = 180 * Math.PI/180;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 5;
			obj.position.z = 4.5;
			ssdLoad.add(obj);
		});
	return ssdLoad;
}
function LoadBattery(scale, rotate, pos) {
	var batteryLoad = new THREE.Object3D();
	batteryLoad.name = "battery";
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/battery.obj", "objects/battery.mtl",
		function (obj) {
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
function LoadDVD(scale, rotate, pos) {
	var dvdLoad = new THREE.Object3D();
	dvdLoad.name = "dvd";
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/cd_dvd.obj", "objects/cd_dvd.mtl",
		function (obj) {
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
function LoadBus(scale, rotate, pos) {
	var busLoad = new THREE.Object3D();
	busLoad.name = "bus";
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/bus.obj", "objects/bus.mtl",
		function (obj) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			busLoad.add(obj);
		});
	return busLoad;
}
function LoadBottom(scale, rotate, pos) {
	var bottomLoad = new THREE.Object3D();
	bottomLoad.name = "bottom";
	var loader = new THREE.OBJMTLLoader();
	loader.load("objects/laptop-bottom.obj", "objects/laptop-bottom.mtl",
		function (obj) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 0.15;
			bottomLoad.add(obj);
		});
	return bottomLoad;
}

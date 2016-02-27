
function LoadTop(scale, rotate, pos){
	var top = new THREE.Object3D();
	var loader = new THREE.OBJLoader();
	loader.load("laptop-top.obj", 
		function ( obj ) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			//top = obj;
			top.add(obj);
			//scene.add( top );
		});
	return top;
}

function LoadBottom(scale, rotate, pos){
	var bottom = new THREE.Object3D();
	var loader = new THREE.OBJLoader();
	loader.load("laptop-bottom.obj", 
		function ( obj ) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
//			bottom = obj;
//			scene.add( bottom );
		bottom.add(obj);
		});
return bottom;
}
function LoadMotherboard(scale, rotate, pos){
	var motherboard = new THREE.Object3D();
	var loader = new THREE.OBJLoader();
	loader.load("motherboard.obj", 
		function ( obj ) {
		obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 1.28;
			obj.position.z = 2.0;
//			motherboard = obj;
//			scene.add( motherboard );
		motherboard.add(obj);
		});
return motherboard;
}
function LoadCPU(scale, rotate, pos){
	var cpu = new THREE.Object3D();
	var loader = new THREE.OBJLoader();
	loader.load("i7.obj", 
		function ( obj ) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 1.85;
			obj.position.z = 2.9;
//			cpu = obj;
//			scene.add( cpu );
		cpu.add(obj);
		});
return cpu;
}
function LoadGPU(scale, rotate, pos){
	var gpu = new THREE.Object3D();
	var loader = new THREE.OBJLoader();
	loader.load("gpu.obj", 
		function ( obj ) {
			obj.scale.x = obj.scale.y = obj.scale.z = scale;
			obj.rotation.y = rotate;
			obj.position.y = pos;
			obj.position.x = 1.85;
//			gpu = obj;
//			scene.add( gpu );
		gpu.add(obj);
		});
return gpu;
}
function LoadRAM(scale, rotate, pos){

}
function LoadBattery(scale, rotate, pos){
}
function LoadDVD(scale, rotate, pos){
}
function LoadBus(scale, rotate, pos){

}
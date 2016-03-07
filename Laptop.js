"use strict";
class Laptop {
	var Top = new Top();
	var Motherboard = new Motherboard();
	var Bus = new Bus();
	var HDD = new HDD();
	var Battery = new Battery();
	var CD = new CD();
	var Bottom = new Bottom();
	var Laptop = new THREE.Object;

  constructor(Top,Motherboard,Bus,HDD,Battery,CD,Bottom) {
    this.Top = Top;
    this.Motherboard = Motherboard;
    this.Bus = Bus;
    this.HDD = HDD;
    this.Battery = Battery;
    this.CD = CD;
    this.Bottom = Bottom;
  }
  load(){
  	Laptop.add(Top.load(), Motherboard.load(), Bus.load(), HDD.load(),
  		Battery.load(), CD.load(), Bottom.load());
  	scene.add(Laptop);
  }
}

// named
class Top extends Part {
load(){
	var loader = new THREE.ObjectLoader();
	loader.load("laptop-top.obj", 
  	function ( obj ) {
		var xScale = 3;
			obj.scale.x = obj.scale.y = obj.scale.z = xScale;
  		obj.position.y = 5;	
		objLoaded += obj;
      	scene.add( obj );
  	});
}
}
class Motherboard extends Part {
	var RAM = new RAM();
	var CPU = new CPU();
	var GPU = new GPU();
	var Motherboard = new THREE.Object;
	//add pieces to Motherboard object
	load() {
	loader.load("Motherboard.obj", 
		function ( obj ) {
		var xScale = 0.1;
			obj.scale.x = obj.scale.y = obj.scale.z = xScale;
			obj.position.y = 1;
		objLoaded += obj;
	 // 	scene.add( obj );
		});
	Motherboard.add(obj);
	Motherboard.add(RAM.load());
	Motherboard.add(CPU.load());
	Motherboard.add(GPU.load());
	scene.add(Motherboard);
	}
}
class RAM extends Part {
	load(){
loader.load("ram.obj", 
	function ( obj ) {
	var xScale = 1;
		obj.scale.x = obj.scale.y = obj.scale.z = xScale;
		obj.position.y = 1.5;
		obj.position.x = 8.25;
		obj.position.z = -1;
		objLoaded += obj;
  	scene.add( obj );
	});
}
}
class CPU extends Part {
	load(){
loader.load("i7.obj", 
	function ( obj ) {
	var xScale = 1;
		obj.scale.x = obj.scale.y = obj.scale.z = xScale;
		obj.position.y = 1.5;
		obj.position.x = 8.25;
		obj.position.z = -1;
		objLoaded += obj;
  	scene.add( obj );
	});
}
}
class GPU extends Part {
load(){
loader.load("gpu.obj", 
	function ( obj ) {
	var xScale = 1;
		obj.scale.x = obj.scale.y = obj.scale.z = xScale;
		obj.position.y = 1.5;
		obj.position.x = 8.25;
		obj.position.z = -1;
		objLoaded += obj;
  	scene.add( obj );
	});
}
}
class Bus extends Part {
	load(){
var loader = new THREE.OBJLoader();
loader.load("bus.obj", 
  	function ( obj ) {
		var xScale = 3;
		obj.scale.x = obj.scale.y = obj.scale.z = xScale;
		obj.position.y = -2;	
  		objLoaded = obj;
      	scene.add( obj );
  	});
}
}
class HDD extends Part {
	load(){
var loader = new THREE.OBJLoader();
loader.load("ssd.obj", 
  	function ( obj ) {
		var xScale = 3;
		obj.scale.x = obj.scale.y = obj.scale.z = xScale;
		obj.position.y = -2;	
  		objLoaded = obj;
      	scene.add( obj );
  	});
}
}
class Battery extends Part {
	load(){
var loader = new THREE.OBJLoader();
loader.load("battery.obj", 
  	function ( obj ) {
		var xScale = 3;
		obj.scale.x = obj.scale.y = obj.scale.z = xScale;
		obj.position.y = -2;	
  		objLoaded = obj;
      	scene.add( obj );
  	});
}
}
class CD extends Part {
	load(){
var loader = new THREE.OBJLoader();
loader.load("cd_dvd.obj", 
  	function ( obj ) {
		var xScale = 3;
		obj.scale.x = obj.scale.y = obj.scale.z = xScale;
		obj.position.y = -2;	
  		objLoaded = obj;
      	scene.add( obj );
  	});
}
}
class Bottom extends Part {
	load(){
var loader = new THREE.OBJLoader();
loader.load("laptop-bottom.obj", 
  	function ( obj ) {
		var xScale = 3;
		obj.scale.x = obj.scale.y = obj.scale.z = xScale;
		obj.position.y = -2;	
  		objLoaded = obj;
      	scene.add( obj );
  	});
}
}
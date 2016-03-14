function resetLaptop() {
    expand(0);
    
    //controls.zoom = 0;
}

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

function zoom() {
    
}

function rotate(degree) {
  //  laptopFull.rotation.x = degree;
    laptopFull.rotation.y = degree + Math.PI / 2;
}

function select(id,laptop) {
    var item = laptop.getPartById(id);
    highlight(item);
    zoom(item);
    display(item);
}
function expand(percent) {
    topp.position.y = 5 * percent;
    cpu.position.y = 1 * percent;
    gpu.position.y = 1 * percent;
    ram.position.y = 2 * percent;
    ssd.position.y = -1 * percent;
    battery.position.y = -3 * percent;
    dvd.position.y = 4 * percent;
    bus.position.y = -4 * percent;
    bottom.position.y = -5 * percent;
} 

function zoom() {
    
}

function rotate(degree,laptop) {
    for (var part in laptop) {
        part.rotate(degree);
    }
}

function select(id,laptop) {
    var item = laptop.getPartById(id);
    highlight(item);
    zoom(item);
    display(item);
}
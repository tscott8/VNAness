function expand(var percent, var parts) {
    for (var part in parts) {

    }
}

function zoom() {

}

function rotate(var degree, var parts) {
    for (var part in parts) {
        part.rotation.z = degree * Math.PI / 180;
    }
}

function select(var part) {
    highlight(item);
    zoom(item);
    display(item);
}

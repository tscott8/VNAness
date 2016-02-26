function expand(var percent, var parts) {
    for (var i = 0; i < 6; i++) {
        parts[i].position.y = (10.0 / i) * percent;
        parts[11 - i].position.y = 10 * percent;
    }

}

function rotate(var degree, var parts) {
    for (var part in parts) {
        part.rotation.y = degree * Math.PI / 180;
    }
}

function select(var part) {
    highlight(part);
    zoom(part);
    display(part);
}

function highlight(var part) {
    //Change color
}

function zoom(var part) {
    enableViewPort = true;
    secondCamera.position.copy(part.position);
    secondCamera.lookAt(part.position.x, part.position.y, part.position.z);
    secondCamera.position.z -= 5;
}

function display(var part) {
    //Display description
}

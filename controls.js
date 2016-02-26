function expand(percent, parts) {
    for (var i = 0; i < 6; i++) {
        parts[i].position.y = (10.0 / i) * percent;
        parts[11 - i].position.y = 10 * percent;
    }

}

function rotate(degree, parts) {
    for (var part in parts) {
        part.rotation.y = degree * Math.PI / 180;
    }
}

function select(part) {
    highlight(part);
    zoom(part);
    display(part);
}

function highlight(part) {
    //Change color
}

function zoom(part) {
    enableViewPort = true;
    secondCamera.position.copy(part.position);
    secondCamera.lookAt(part.position.x, part.position.y, part.position.z);
    secondCamera.position.z -= 5;
}

function display(part) {
    //Display description
}

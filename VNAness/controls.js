class Part {
    
    
    rotate(var angle) {
        
    }
    
    expand(var percent) {
        
    }
    
    zoom() {
        
    }
}

class Controls {
    constructor() {
    
    }
    
    expand(var percent, var laptop) {
        for (var part in laptop) {
            part.expand(percent);
        }
    } 
    
    zoom() {
        
    }
    
    rotate(var degree, var laptop) {
        for (var part in laptop) {
            part.rotate(degree);
        }
    }
    
    select(var id, var laptop) {
        var item = laptop.getPartById(id);
        highlight(item);
        zoom(item);
        display(item);
    }
}
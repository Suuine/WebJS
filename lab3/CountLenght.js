(function(window){
    let lengthBigger = {};
    lengthBigger.tell = function(name) {
        console.log(name + " is longer than 5 characters");
    }

    window.lengthBigger = lengthBigger;

})(window);

(function(window){
    let lengthSmaller = {};
    lengthSmaller.tell = function(name) {
        console.log(name + " is shorter than 5 characters");
    }

    window.lengthSmaller = lengthSmaller;

})(window);

(function(window){
    let lengthEqual = {};
    lengthEqual.tell = function(name) {
        console.log(name + " is 5 characters long");
    }

    window.lengthEqual = lengthEqual;
    
})(window);
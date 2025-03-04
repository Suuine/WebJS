
// 1 -10
console.log("Task 1-10");

var car1 = new Object();
car1.color = "red";
car1.maxSpeed = 100;

var driver = new Object();
driver.name = "Nadiia Bohach";
driver.category = "C";
driver["personal limitations"] = "No driving at night"

car1.driver = driver;
car1.tuning = true;
car1.numberOfAccidents = 0;

var car2 = {
    color: "blue",
    maxSpeed: 120,
     driver: {
        name: "Nadiia Bohach",
        category: "B",
        ["personal limitations"]: null
    },
    tuning: false,
    numberOfAccidents:2
}

car1.drive = function() {
    return "I am not driving at night";
}

car2.drive = function() {
    return "I can drive anytime";
};

console.log("car1:");
console.log(car1);
console.log("car2:");
console.log(car2);

console.log(car1.drive());
console.log(car2.drive());

function Truck(color, weight, avrSpeed, brand, model) {
    this.color = color;
    this.weight = weight;
    this.avrSpeed = avrSpeed;
    this.brand = brand;
    this.model = model;
}

Truck.prototype.AssignDriver = function(name, nightDriving, experience){
    if (!this.driver) {
        this.driver = {};
    }
    this.driver.name = name;
    this.driver.nightDriving = nightDriving;
    this.driver.experience = experience;
}

Truck.prototype.trip = function(){
    if (!this.driver) {
        return "No driver assigned";
    }
    var message = 'Driver ' + this.driver.name + ' ';
    if (this.driver.nightDriving) {
        message += 'drives at night ';
    } else {
        message += 'does not drive at night ';
    }
    return message += 'and has ' + this.driver.experience + ' years of experience';
}

var truck1 = new Truck("gray", 200, 30.29, "Iveco", "EuroCargo 90");
truck1.AssignDriver("Nadiia", true, 5); 

var truck2 = new Truck("blue", 200, 29.32, "Iveco", "EuroCargo 90");
truck2.AssignDriver("Bob", false, 5); 

console.log("truck1:");
console.log(truck1);
console.log("truck2:");
console.log(truck2);

console.log(truck1.trip());
console.log(truck2.trip());

// 12 - 24
console.log();
console.log("Task 12-24");

class Square {
    constructor(a) {
        this.a = a; 
    }

    static help(){
        return "Square has all its sides same, all angels 90 and the most easiest figure";
    }

    length(){
        return 4 * this.a;
    }

    square(){
        return this.a*this.a;
    }

    info() {
        return `a1 = ${this.a}, a2 = ${this.a}, a3 = ${this.a}, a4 = ${this.a}\n angl1 = 90, angl2 = 90, angl3 = 90, angl4 = 90\n sum = ${this.length()}\n square = ${this.square()}`;
    }   
}


class Rectangle extends Square {
    constructor(a, b) {
        super(a);
        this.b = b; 
    }
    
    get a() {
        return this._a;
    }

    set a(value) {       
        this._a = value;
    }

    get b() {
        return this._b;
    }

    set b(value) {
        this._b = value;
    }

    static help() {
        return "Rectangle has two pairs of equal sides, all angles 90 and is a more complex figure than a square";
    }

    length() {
        return 2 * (this.a + this.b); 
    }

    square() {
        return this.a * this.b; 
    }

    info() {
        return `a1 = ${this.a}, a2 = ${this.a}, b1 = ${this.b}, b2 = ${this.b}\n
        angl1 = 90, angl2 = 90, angl3 = 90, angl4 = 90\n
        sum = ${this.length()}\n
        square = ${this.square()}`;
    }
}

class Rhombus extends Square {
    constructor(a, alpha, beta) {
        super(a);
        if(alpha<=0 || alpha>90 || beta>180 || beta<90){
            throw new Error("wrong angles");
        }
        this.alpha = alpha; 
        this.beta = beta;
    }

    static help() {
        return "Rhombus has all sides equal, all angles not necessarily 90, and opposite angles are equal, making it a unique geometric figure";
    }

    square() {
        return this.a * this.a * Math.sin(this.alpha * Math.PI / 180); 
    }

    info() {
        return `a1 = ${this.a}, a2 = ${this.a}, a3 = ${this.a}, a4 = ${this.a}\n
        angl1 = ${this.alpha}, angl2 = ${this.beta}, angl3 = ${this.alpha}, angl4 = ${this.beta}\n
        sum = ${this.length()}\n
        square = ${this.square()}`;
    }
}

class Parallelogram extends Rhombus {
    constructor(a, b, alpha, beta) {
        super(a, alpha, beta);
        this.b = b;
    }

    static help() {
        return "Parallelogram has opposite sides equal and parallel, all angles not necessarily 90, and opposite angles are equal, making it a versatile geometric figure";
    }

    length() {
        return 2 * (this.a + this.b); 
    }

    square() {
        return this.a * this.b * Math.sin(this.alpha * Math.PI / 180); 
    }

    info() {
        return `a1 = ${this.a}, a2 = ${this.a}, b1 = ${this.b}, b2 = ${this.b}\n
        angl1 = ${this.alpha}, angl2 = ${this.beta}, angl3 = ${this.alpha}, angl4 = ${this.beta}\n
        sum = ${this.length()}\n
        square = ${this.square()}`;
    }
}

console.log(Square.help());
console.log(Rectangle.help());
console.log(Rhombus.help());
console.log(Parallelogram.help());

let square = new Square(5);
let rectangle = new Rectangle(5, 6);
let rhombus = new Rhombus(5, 60, 120);
let parallelogram = new Parallelogram(5, 6, 60, 120);

console.log("Square:");
console.log(square.info());
console.log("Rectangle:");
console.log(rectangle.info());
console.log("Rhombus:");
console.log(rhombus.info());
console.log("Parallelogram:");
console.log(parallelogram.info());

// 25 - 26
console.log();
console.log("Task 25-26");

function Triangular(a = 3, b = 4, c = 5) {
    if (a + b <= c || b + c <= a || a + c <= b) {
        return'These sides cannot form a triangle';
    }

    return {
        a: a,
        b: b,
        c: c
    };
}

let triangle1 = Triangular();
let triangle2 = Triangular(10, 5, 6);
let triangle3 = Triangular(3, 4, 8);

console.log("triangle1():");
console.log(triangle1);
console.log("triangle1(10, 5, 6):");
console.log(triangle2);
console.log("triangle1(3, 4, 8):");
console.log(triangle3);

// 27 - 28
console.log();
console.log("Task 27-28");

function PiMultiplier(a) {
    return function() {
        return Math.PI * a;
    };
}

let PiMult2 = PiMultiplier(2);
let PiMult2Div3 = PiMultiplier(2/3);
let PiDiv2 = PiMultiplier(1/2);

console.log(PiMult2());
console.log(PiMult2Div3());
console.log(PiDiv2());



// 29 - 31
console.log();
console.log("Task 29-31");

function Painter(color) {
    return function(obj) {
        if (obj.type) {
            obj.color = color;
            console.log(`${obj.color} ${obj.type}`);
        } else {
            console.log('No ‘type’ property occurred!');
        }
    }
}

let PaintBlue = Painter('Blue');
let PaintRed = Painter('Red');
let PaintYellow = Painter('Yellow');

let obj1 = { maxSpeed: 280, type: 'Sportcar', color: 'magenta' };
let obj2 = { type: 'Truck', ['avg speed']: 90, ['load capacity']: 2400 };
let obj3 = { maxSpeed: 180, color: 'purple', isCar : true };

console.log("PaintBlue(obj1):");
console.log(obj1);
PaintBlue(obj1);  
console.log("PaintYellow(obj2):");
console.log(obj2);
PaintYellow(obj2);
console.log("PaintBlue(obj3):");
console.log(obj3);
PaintBlue(obj3);
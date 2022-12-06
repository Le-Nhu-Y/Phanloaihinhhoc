//Thiết kế lớp Shape, Circle, Rectangle, và Square

class Shape {
    constructor(color, filled) {
        this.color = color;
        this.filled = filled;
    }
}

let shap = new Shape('red', true)
console.log(shap)

class Circle {
    constructor(color, filled, radius) {
        this.color = color;
        this.filled = filled;
        this.radius = radius;
    }

    getArea() {
        return this.radius * this.radius * Math.PI;
    }

    getPerimeter() {
        return this.radius * 2 * Math.PI;
    }
}
let circle = new Circle("green",true,10);
console.log(circle)

class Rectangle{
    constructor(color, filled,width,length) {
        this.color=color;
        this.filled=filled;
        this.width=width;
        this.length=length;
    }
    getArea(){
        return this.width*this.length;
    }
    getPerimeter(){
        return (this.width*2+this.length*2)
    }
}
let rectangle=new Rectangle("RED",true,10,20);
console.log(rectangle)

class Square{
    constructor(color,filled,side) {
        this.color=color;
        this.filled=filled;
        this.side=side;
    }
}
let square=new Square("Blue",false,10)
console.log(square)
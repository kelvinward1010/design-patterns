/*Mô hình Bridge (Cầu) là một mô hình thiết kế trong lập trình hướng đối tượng, 
được sử dụng để tách biệt một trừu tượng khỏi việc triển khai của nó. Điều này 
cho phép chúng ta thay đổi việc triển khai độc lập với các khách hàng sử dụng 
trừu tượng đó. */

class Shape {
    constructor(color){
        this.color = color;
    }

    draw(){
        this.color.paint(this)
    }
}

class Circle extends Shape {}
class Square extends Shape {}


class Color {
    paint(){
        //logic
        console.log(`Painting shape in ${this.colorName}`)
    }
}

class Red extends Color {
    constructor() {
        super();
        this.colorName = "red"
    }
}

class Green extends Color {
    constructor() {
        super();
        this.colorName = "green"
    }
}

const redCircle = new Circle(new Red());
redCircle.draw();
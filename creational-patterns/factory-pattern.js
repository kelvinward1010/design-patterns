/*Mô hình Factory Pattern là một trong những mô hình thiết kế phổ biến trong lập trình, 
giúp chúng ta tách biệt quá trình tạo ra các đối tượng khỏi việc sử dụng chúng*/

const Shape = {
    draw: () => { }
};

class Circle {
    draw() {
        console.log('Drawing a circle');
    }
}

class Square {
    draw() {
        console.log('Drawing a square');
    }
}

function drawShape(shape) {
    if (shape.draw) {
        shape.draw();
    } else {
        console.error('Object is not a shape');
    }
}

const circle = new Circle();
const square = new Square();

drawShape(circle);
drawShape(square);


function Developer(name){
    this.name = name;
    this.type = "Dev"
}

function Tester(name){
    this.name = name;
    this.type = "tester"
}

function EmployeeFactory(){
    this.create = (name, type) => {
        switch(type) {
            case 1:
                return new Developer(name);
                break;
            case 2:
                return new Tester(name);
                break;
        }
    }
}

function say(){
    console.log("Hi, I am " + this.name + " and I am a " + this.type);
}

const employeeFactory = new EmployeeFactory();
const employees = [];

employees.push(employeeFactory.create("Kelvin", 1))
employees.push(employeeFactory.create("Nhung", 2))

employees.forEach((i) => say.call(i));
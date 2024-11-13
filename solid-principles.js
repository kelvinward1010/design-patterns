/*1. Nguyên tắc trách nhiệm đơn nhất (Single Responsibility Principle - SRP) */
/*Ý nghĩa: Một lớp chỉ nên có một lý do để thay đổi, tức là chỉ đảm nhận một trách nhiệm duy nhất.*/

// bad code
class UserBad {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }

    saveToDatabase() {
        console.log(`running save data: name ${this.name} and email: ${this.email}`);
    }

    sendEmailVerification() {
        console.log(`running verify email: ${this.email}`)
    }
}

// good code
class UserGood {
    constructor(name, email) {
        this.name = name;
        this.email = email;
    }
}

class UserRepository {
    save(user) {
        console.log(`running save data: ${user.name} and email: ${user.email}`);
    }
}

const newUser = new UserGood('Kelvin', 'kelvin@gmail.com')
const userRepository = new UserRepository();
userRepository.save(newUser);




/*2. Nguyên tắc mở-đóng (Open-Closed Principle - OCP) */
/*Ý nghĩa: Các class nên mở rộng để thêm hành vi mới, nhưng đóng để sửa đổi. */

//bad code
function calculateArea(shape) {
    if (shape.type === 'circle') {
        // todo
    } else if (shape.type === 'rectangle') {
        // todo
    }
}


class Shape {
    calculateArea() {
        throw new Error('Method not implemented');
    }
}

class Circle extends Shape {
    constructor(radius) {
        super()
        this.radius = radius;
    }

    calculateArea() {
        //todo
        return Math.PI * this.radius * this.radius;
    }
}



const newCircle = new Circle(5);
console.log(newCircle.calculateArea());





/*3.  Nguyên tắc thay thế Liskov (Liskov Substitution Principle - LSP) */
/*Ý nghĩa: Các đối tượng con có thể thay thế được các đối tượng cha mà không làm hỏng chương trình.*/

//Vi pham LSP
// class Rectangle {
//     constructor(width, height) {
//         this.width = width;
//         this.height = height;
//     }

//     setWidth(width) {
//         this.width = width;
//     }

//     setHeight(height) {
//         this.height = height;
//     }
// }

// class Square extends Rectangle {
//     setWidth(width) {
//         this.width = width;
//         this.height = width; // Vi phạm LSP vì square không cho phép thay đổi chiều rộng độc lập
//     }
// }

// // OK LSP
// class Rectangle2 {
//     constructor(side){
//         this.side = side;
//     }

//     setSize(width, height){
//         this.width = width;
//         this.height = height;
//     }

//     getArea(){
//         return this.width * this.height;
//     }
// }

// class Square2 extends Rectangle2{
//     constructor(side){
//         super()
//         super.setSize(side,side);
//     }

//     area(){
//         return super.getArea();
//     }
// }


// const newSquare2 = new Square2(3);
// console.log(newSquare2.area())
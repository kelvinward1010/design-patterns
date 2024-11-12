/*Mô hình Builder (Xây dựng) là một mô hình thiết kế trong lập trình hướng đối tượng, 
được sử dụng để tạo ra các đối tượng phức tạp một cách từng bước. Thay vì tạo ra một 
đối tượng với tất cả các thuộc tính cùng một lúc, chúng ta sẽ xây dựng đối tượng đó 
thông qua việc gọi các phương thức liên tiếp. */

class CarBuilder {
    constructor() {
        this.car = {};
    }

    setMake(make) {
        this.car.make = make;
        return this;
    }

    setModel(model) {
        this.car.model = model;
        return this;
    }

    setColor(color) {
        this.car.color = color;
        return this;
    }

    build() {
        return this.car;
    }
}

// Sử dụng Builder
const myCar = new CarBuilder()
    .setMake('Toyota')
    .setModel('Camry')
    .setColor('Trắng')
    .build();

console.log(myCar); // Output: { make: 'Toyota', model: 'Camry', color: 'Trắng' }
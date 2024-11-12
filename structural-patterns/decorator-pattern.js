/*Mô hình Decorator là một mô hình thiết kế trong lập trình hướng đối tượng, 
cho phép bạn thêm các hành vi mới vào một đối tượng mà không cần thay đổi 
cấu trúc của nó. Nó thường được sử dụng để tăng cường chức năng của một đối 
tượng mà không cần kế thừa hoặc thay đổi code gốc. */

class Coffee {
    getCost() {
        return 10;
    }

    getDescription() {
        return "Coffee";
    }
}

class WithMilk extends Coffee {
    getCost() {
        return super.getCost() + 5;
    }

    getDescription() {
        return super.getDescription() + ", with milk";
    }
}

class WithSugar extends Coffee {
    getCost() {
        return super.getCost() + 2;
    }

    getDescription() {
        return super.getDescription() + ", with sugar";
    }
}

// Sử dụng
const coffeeWithMilkAndSugar = new WithSugar(new WithMilk(new Coffee()));
console.log(coffeeWithMilkAndSugar.getCost()); // Output: 17
console.log(coffeeWithMilkAndSugar.getDescription()); // Output: Coffee, with milk, with sugar
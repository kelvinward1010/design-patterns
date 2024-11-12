/*Mô hình Abstract Factory là một trong những mô hình thiết kế phổ biến 
trong lập trình hướng đối tượng. Nó cho phép bạn tạo ra các họ đối tượng 
có liên quan mà không cần phải chỉ định cụ thể lớp của từng đối tượng đó. 
Nói cách khác, nó cung cấp một giao diện để tạo ra một họ của các đối 
tượng liên quan mà không cần chỉ định lớp cụ thể của chúng. */

// Giao diện (mô phỏng)
const ICar = {
    getName: () => { }
};

const IEngine = {
    getStartMessage: () => { }
};

const ITire = {
    getSize: () => { }
};

const ICarFactory = {
    createCar: () => { },
    createEngine: () => { },
    createTire: () => { }
};

// Nhà máy sản xuất xe con
class CarFactory {
    createCar() {
        return {
            getName: () => 'Car'
        };
    }

    createEngine() {
        return {
            getStartMessage: () => 'Petrol engine started'
        };
    }

    createTire() {
        return {
            getSize: () => 18
        };
    }
}

// Nhà máy sản xuất xe tải
class TruckFactory {
    createCar() {
        return {
            getName: () => 'Truck'
        };
    }

    createEngine() {
        return {
            getStartMessage: () => 'Diesel engine started'
        };
    }

    createTire() {
        return {
            getSize: () => 22
        };
    }
}
/*Mô hình Observer là một mô hình thiết kế trong lập trình hướng đối tượng, 
cho phép một đối tượng (chủ đề) thông báo cho một hoặc nhiều đối tượng khác 
(người quan sát) khi trạng thái của nó thay đổi. */

class Subject {
    constructor() {
        this.observers = [];
    }

    addObserver(observer) {
        this.observers.push(observer);
    }

    removeObserver(observer) {
        this.observers = this.observers.filter(obs => obs !== observer);
    }

    notifyObservers() {
        this.observers.forEach(observer => observer.update());
    }
}

class Observer {
    update() {
        // Implement logic to handle updates
        console.log('Received update');
    }
}

// Sử dụng
const subject = new Subject();
const observer1 = new Observer();
const observer2 = new Observer();

subject.addObserver(observer1);
subject.addObserver(observer2);

subject.notifyObservers(); // Cả hai observer sẽ nhận được thông báo
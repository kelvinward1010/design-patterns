{/*Mô hình Singleton Pattern đảm bảo rằng một lớp chỉ có duy nhất một instance (đối tượng) 
trong suốt quá trình thực thi chương trình. Điều này rất hữu ích khi bạn cần một đối tượng 
toàn cục để quản lý một trạng thái chung hoặc một tài nguyên chia sẻ.*/}

// Singleton Pattern in JavaScript
function Logger() {
    let loggerInstance;
    if (loggerInstance) {
        return loggerInstance;
    }

    const log = (message) => {
        console.log(message);
    };

    loggerInstance = {
        log
    };

    return loggerInstance;
}

// Usage
const logger1 = Logger();
const logger2 = Logger();

logger1.log('Hello'); // Both loggers point to the same instance
logger2.log('World');


// Singleton với function

function Singleton() {
    let instance;
    if (instance)
        return instance;
    // Logic của Singleton
    let privateData = 'Đây là dữ liệu riêng tư';
    let publicAPI = {
        getData: function () {
            return privateData;
        },
        setData: function (data) {
            privateData = data;
        }
    };
    instance = publicAPI;
    return instance;
}
// Sử dụng Singleton
let singleton1 = Singleton();
let singleton2 = Singleton();
console.log(singleton1 === singleton2); // true
console.log(singleton1.getData()); // 'Đây là dữ liệu riêng tư'
singleton1.setData('Dữ liệu mới');
console.log(singleton2.getData()); // 'Dữ liệu mới'
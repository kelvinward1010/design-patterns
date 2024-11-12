/*Mô hình Strategy Pattern là một mô hình thiết kế cho phép bạn thay đổi hành vi 
của một đối tượng tại thời điểm chạy chương trình. Thay vì hardcode một hành vi 
cụ thể vào trong một đối tượng, bạn sẽ định nghĩa các thuật toán khác nhau 
(các strategy) trong các lớp riêng biệt, sau đó có thể dễ dàng thay thế chúng. */


class Sorter {
    constructor(strategy) {
        this.strategy = strategy;
    }

    sort(data) {
        return this.strategy.sort(data);
    }
}

// Các thuật toán sắp xếp (strategies)
class BubbleSort {
    sort(data) {
        // Logic sắp xếp nổi bọt
        const n = data.length;
        for (let i = 0; i < n - 1; i++) {
            for (let j = 0; j < n - i - 1; j++) {
                if (data[j] > data[j + 1]) {
                    const temp = data[j];
                    data[j] = data[j + 1];
                    data[j + 1] = temp;
                }
            }
        }
        return data;
    }
}

class QuickSort {
    sort(data) {
        // Logic sắp xếp nhanh
        if (data.length <= 1) {
            return data;
        }
        
        const pivotIndex = Math.floor(data.length / 2);
        const pivot = data[pivotIndex];
        
        const left = [];
        const right = [];
        
        for (let i = 0; i < data.length; i++) {
            if (i === pivotIndex) continue;
            if (data[i] < pivot) {
                left.push(data[i]);
            } else {
                right.push(data[i]);
            }
        }
        
        return [...this.sort(left), pivot, ...this.sort(right)];
    }
}



// Sử dụng
const data = [3, 1, 4, 1, 5, 9, 2, 6, 5, 3];

// Sử dụng thuật toán sắp xếp nổi bọt
const bubbleSorter = new Sorter(new BubbleSort());
const sortedData = bubbleSorter.sort(data);
console.log(sortedData);

// Sử dụng thuật toán sắp xếp nhanh
const quickSorter = new Sorter(new QuickSort());
const sortedData2 = quickSorter.sort(data);
console.log(sortedData2);
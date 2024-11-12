## I.Design Patterns.
### 1.Khái niệm.
	- Design Partten là giải pháp điển hình đã được kiểm chứng được sử dụng để quyết các vấn đề thường gặp trong thiết kế phần mềm. Nó cung cấp một cấu trúc chung, một khung xương cho các nhà phát triển có thể tái sử dụng và mở rộng các giải pháp để giải quyết vấn đề thiết kế thường gặp trong mã của mình. 

### 2.Tại sao chúng ta cần Design Pattern?
	- Tái sử dụng: Thay vì phải chế tác, phát minh lại, ta có thể tận dụng các giải pháp đã có.
	- Cải thiện khả năng đọc và hiểu code: Code trở nên dễ hiểu hơn khi sử dụng các pattern quen thuộc.
	- Dễ dàng bảo trì: Khi code được tổ chức theo một cấu trúc nhất định, việc bảo trì và nâng cấp sẽ trở nên đơn giản hơn.
	- Thúc đẩy sự hợp tác: Các nhà phát triển có thể dễ dàng làm việc cùng nhau khi sử dụng chung cho một ngôn ngữ.

### 3.Các loại Design Pattern phổ biến.
##### a)Creational Patterns
	- Singleton: Đảm bảo chỉ có một instance của một class.
	- Factory Method: Tạo ra các đối tượng mà không cần phải biết cụ thể lớp của chúng.
    - Abstract Factory: Tạo ra các họ đối tượng có liên quan.
#### b)Structural Patterns
	- Adapter: Làm cho các interface không tương thích trở nên tương thích.
    - Decorator: Thêm các hành vi mới vào một đối tượng mà không thay đổi cấu trúc của nó.
    - Composite: Trả về một cấu trúc cây để biểu diễn một tổng thể gồm các đối tượng.
#### c)Behavioral Patterns
	- Observer: Cho phép nhiều đối tượng quan sát một đối tượng khác và được thông báo khi trạng thái của đối tượng đó thay đổi.
    - Strategy: Định nghĩa một họ các thuật toán, đóng gói từng thuật toán, và làm cho chúng có thể thay thế cho nhau.
    - State: Cho phép một đối tượng thay đổi hành vi của nó khi trạng thái nội bộ của nó thay đổi.
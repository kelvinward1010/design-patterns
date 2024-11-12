/*Mô hình Adapter là một mô hình thiết kế trong lập trình hướng đối tượng, 
được sử dụng để làm cho các giao diện không tương thích có thể hoạt động 
cùng nhau. Nói cách khác, nó đóng vai trò như một "bộ chuyển đổi" giữa hai 
giao diện khác nhau, cho phép các đối tượng có giao diện không giống nhau 
có thể tương tác với nhau. */


// Giao diện của thư viện cũ (được mô phỏng bằng một đối tượng)
const oldShapeInterface = {
    drawShape: function () { }
};

// Giao diện của thư viện mới (được mô phỏng bằng một đối tượng)
const newDrawableInterface = {
    draw: function () { }
};

// Adapter
function ShapeAdapter(oldShape) {
    this.oldShape = oldShape;
}

ShapeAdapter.prototype.draw = function () {
    this.oldShape.drawShape();
};

// Sử dụng
const oldCircle = {
    drawShape: function () {
        console.log("Drawing an old circle");
    }
};

const adapter = new ShapeAdapter(oldCircle);
adapter.draw(); // Output: Drawing an old circle
let Circle = function (radius) {
	this.radius = radius;
	this.getRadius = function () {
		return this.radius;
	};
	this.getArea = function () {
		return Math.PI * this.radius ** 2;
	};
};
let circle = new Circle(2);
console.log(circle.radius);

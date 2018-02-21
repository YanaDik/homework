map = (fn, array) => {
	let new_mas = [];
	array.forEach((element) => {
		// new_mas[new_mas.length] = fn(element);
		new_mas.push(fn(element));
	});
	return new_mas;
};

square = (x) => {
	return x * x;
}; // возведение в квадрат

console.log(map(square, [ 1, 2, 3, 4 ])); // [1, 4, 9, 16]
console.log(map(square, [])); // []
// Обрати внимание: функция не должна изменять переданный ей массив:

var arr = [ 1, 2, 3 ];
console.log(map(square, arr)); // [1, 4, 9]
console.log(arr); // [1, 2, 3]

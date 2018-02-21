// function myFunction() {
//     return 'Mon', 'Tues', 'Wed', 'Thurs', 'Fri';
//    }
//    var days = myFunction();
//    alert(days)

// function passw (pass) {
//     mes = "";
//     if (pass=="blabla") {
//         alert("welcom");
//     } else if (name==null){
//         alert("by");
//     }
//     else {
//         alert("error");
//     }
//     return
// }

// let name =  prompt("Кто пришел?");
// if (name=="Админ") {
//     let pass = prompt("pass?");
//     passw (pass);
// } else if (name==null){
//     alert("Вход отменен");
// }
// else {
//     alert("Я Вас не знаю");
//     console.log(name);
// }

// function getNumb(a, b) {
// 	for (i = a; i < b; i++) {}
// }

// sayHi = (age) => console.log(age);
// let ver = +prompt('how old are you', 21);

// if isNaN(num)

// Напиши функцию map(fn, array), которая принимает на вход функцию и массив, и обрабатывает каждый элемент массива этой функцией, возвращая новый массив. Пример:

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

// ucFirst = () => {};

// let name = prompt('Напишите свое имя');

// let transformName = name.toLowerCase();
// transformName = transformName.charAt(0).toUpperCase() + transformName.substring(1);
// console.log(transformName);

// min = (a, b) => console.log(`меньшее число: ${a > b ? a : b}`);

// min(2, 5);

var temperatures = [ 76.3, 44.9, 56, 89.8, 100.2 ];
console.log(temperatures.indexOf(89.8));

// Вывести простые числа
// Натуральное число, большее 1, называется простым, если оно ни на что не делится, кроме себя и 1.
// Другими словами, n>1 – простое, если при делении на любое число от 2 до n-1 есть остаток.
// Создайте функцию, которая выводит все простые числа из интервала, который задает пользователь.

// фильтр
// let arr1 = arr2.filter(item => item !== "Images");
// let number1 = +prompt('Введите первое число: ');
// let number2 = +prompt('Введите второе число: ');
simple_number = (a, b) => {
	if (a < b) {
		let arr = [];
		for (let i = a; i <= b; i++) {
			let simple = true;
			for (let j = 2; j <= 9; j++) {
				console.log(i % j);
				if (i % j !== 0) {
					simple = false;
				}
			}
			if (simple) {
				console.log(i);
				// arr.push(a);
			}
		}
		// let arr = [];
		// while (a <= b) {
		//     simple = true;
		//     for (i = 2; i < 10; i++) {
		//         if (a % i != 0 && a >= i) {
		//             simple = false;
		//         }
		//     }

		//     if (simple) {
		//         arr.push(a);
		//     }
		//     a++; return arr;
	} else {
		console.log('rhtht');
	}
};
console.log('_______________');
console.log(simple_number(11, 12));

// let arr56 = [ 4, 6, 8, 9 ];
// arr56.indexOf(9);

// function myFan(num) {
// 	if (num < 2) return false;
// 	for (let i = 2; i < num; i++) {
// 		if (num % i == 0) return false;
// 	}
// 	return true;
// }

// for (let i = 0; i < 100; i++) {
// 	if (myFan(i)) console.log(i);
// }

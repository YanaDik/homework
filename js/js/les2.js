let name = prompt('Кто пришел?');
if (name == 'Админ') {
	let pass = prompt('pass?');
	passw(pass);
} else if (name == null) {
	alert('Вход отменен');
} else {
	alert('Я Вас не знаю');
	console.log(name);
}

function passw(pass) {
	mes = '';
	if (pass == 'blabla') {
		alert('welcom');
	} else if (name == null) {
		alert('by');
	} else {
		alert('error');
	}
	return;
}

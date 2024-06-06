// Ini JavaScript

function randomString(len,charSet)	{
	charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
	var randomString = '';
	for (var i = 0; i < len; i++){
		var randomPoz = Math.floor(Math.random() * charSet.length);
		randomString += charSet.substring(randomPoz,randomPoz+1);
	}
	return randomString;
}

function cekCaptcha(){
	var inputUser = document.querySelector(".input");
	var captcha = document.querySelector(".box").innerHTML;

	if(inputUser.value === captcha){ // jika captcha benar jalankan fungsi di bawah ini
		alert('captcha benar');

	}else if (inputUser.value.length === 5 && inputUser.value != captcha){ // jika captcha salah kosongkan bidang input dan acak captcha
		inputUser.value ='';
		document.querySelector(".box").innerHTML = randomString(5);

	}
}
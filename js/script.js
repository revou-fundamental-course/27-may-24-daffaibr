// Ini JavaScript

function formValidation() {
    let nameinput = document.getElementById('name').value;
    console.log(nameInput);
    if (nameInput == null || nameInput == '') {
        alert("Inputan Kosong");
    } else {
        console.log(nameInput);
    }
}

let indexSlide = 1;
showBanner(1);

function nextSlide(n) {
    showBanner(indexSlide += n);
}

function showBanner(indexBanner) {
   let listImage = document.getElementsByClassName('bg-image');
   if (index > listImage.length) indexSlide = 1;

   let index = 0;
   while (index < listImage.length) {
        listImage[index].style.display = 'none';
    index++;
   }

   listImage[indexSlide - 1].style.display = 'block';
}

setInterval(() => nextSlide(1), 3000);
var randomNumber1 = Math.floor(Math.random() * 6)  + 1;
console.log(randomNumber1)

const img1 = document.querySelector('.img1')

img1.setAttribute("src", "./images/dice" + randomNumber1 + ".png")
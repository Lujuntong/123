var currentIndex = 0;
var orderBtns = document.querySelectorAll('i');
var lis = document.querySelectorAll('li');
var li = document.querySelector('li');
var imgWidth = li.offsetWidth;
console.log(imgWidth);

var ul = document.querySelector('ul');
for (var j = 0; j < orderBtns.length; j++) {
  orderBtns[j].index = j;
  orderBtns[j].onmouseover = function () {
    for (var i = 0; i < orderBtns.length; i++) {
      orderBtns[i].classList.remove('current');
    }
    this.classList.add('current');

    currentIndex = this.index;
    ul.style.left = - this.index * lis[0].offsetWidth + 'px';
  }

}
var right = document.querySelector('.arrow-right');
right.onclick = function () {
  currentIndex++;
  if (currentIndex > 3) {
    currentIndex = 0;
  }
  ul.style.left = - currentIndex * lis[0].offsetWidth + 'px';
  for (i = 0; i < orderBtns.length; i++) {
    orderBtns[i].classList.remove('current');
  }
  orderBtns[currentIndex].classList.add('current');
}

var left = document.querySelector('.arrow-left');
left.onclick = function () {
  currentIndex--;
  if (currentIndex < 0) {
    currentIndex = 3;
  }
  ul.style.left = - currentIndex * lis[0].offsetWidth + 'px';
  for (i = 0; i < orderBtns.length; i++) {
    orderBtns[i].classList.remove('current');
  }
  orderBtns[currentIndex].classList.add('current');
}
var timer = setInterval(function () {
  right.onclick();
}, 3000)
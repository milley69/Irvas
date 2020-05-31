document.querySelector('#header-nav button').addEventListener('click', function () {
  document.querySelector('.header-svg').style.display = 'block';
  document.querySelector('#header-nav button').classList.add('button-svg');

  setTimeout(function () {
    document.querySelector('.form').classList.add('form-svg');
    document.querySelector('.form input').setAttribute('value', "Введите ваше имя");
    clearTimeout();
  }, 1300)

  setTimeout(function () {
    document.querySelector('.form').classList.remove('form-svg');
    document.querySelector('.form input').setAttribute('value', "");
    clearTimeout();
  }, 2500)

  setTimeout(function () {
    document.querySelector('.header-svg').style.display = 'none';
    document.querySelector('#header-nav button').classList.remove('button-svg');
    clearTimeout();
  }, 3950)

})


let tab;
let tabContent;

window.onload = function() {
  tabContent = document.getElementsByClassName('tab-content');
  tab = document.getElementsByClassName('tab');
  hideTabsContent(1);
}

function hideTabsContent(a) {
  for (var i = a; i < tabContent.length; i++) {
    tabContent[i].classList.remove('show');
    tabContent[i].classList.add("hide");
    tab[i].classList.remove('tab-active');
  }
}
document.getElementById('tabs').onclick = function(event) {
  let target = event.target;
  if (target.className == 'tab') {
    for (var i = 0; i < tab.length; i++) {
      if (target == tab[i]) {
        showTabsContent(i);
        break;
      }
    }
  }
}

function showTabsContent(b) {
  if (tabContent[b].classList.contains('hide')) {
    hideTabsContent(0);
    tab[b].classList.add('tab-active');
    tabContent[b].classList.remove('hide');
    tabContent[b].classList.add('show');
  }
}









//

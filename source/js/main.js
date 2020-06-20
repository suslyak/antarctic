'use strict';
var body = document.querySelector('body');
var header = document.querySelector('.page-header');
var navigation = header.querySelector('.page-header__navigation');
var menu = header.querySelector('.main-menu');
var sandwich = header.querySelector('.page-header__sandwich');
var logo = header.querySelector('.logo__icon');

header.classList.remove('page-header--no-js');
navigation.classList.remove('page-header__navigation--no-js');
menu.classList.remove('main-menu--no-js');
sandwich.classList.remove('page-header__sandwich--no-js');
logo.classList.remove('logo__icon--no-js');

var showMobileMenu = function () {
  var menuLinksElements = menu.querySelectorAll('a[href]');

  header.classList.add('page-header--white');
  sandwich.classList.add('page-header__sandwich--close');
  navigation.classList.add('page-header__navigation--show');
  logo.classList.add('logo__icon--blue');
  body.classList.add('modal-open');

  menuLinksElements.forEach(function (link) {
    link.addEventListener('click', hideMobileMenu);
  });

  sandwich.removeEventListener('click', showMobileMenu);
  sandwich.addEventListener('click', hideMobileMenu);
};

var hideMobileMenu = function () {
  var menuLinksElements = menu.querySelectorAll('a[href]');

  header.classList.remove('page-header--white');
  sandwich.classList.remove('page-header__sandwich--close');
  navigation.classList.remove('page-header__navigation--show');
  body.classList.remove('modal-open');
  logo.classList.remove('logo__icon--blue');

  menuLinksElements.forEach(function (link) {
    link.removeEventListener('click', hideMobileMenu);
  });

  sandwich.removeEventListener('click', hideMobileMenu);
  sandwich.addEventListener('click', showMobileMenu);
};

sandwich.addEventListener('click', showMobileMenu);

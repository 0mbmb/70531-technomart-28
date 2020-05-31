let allLinks = document.querySelectorAll('a');
let selectorButtons = document.querySelectorAll('.services__selector-button');

let allModals = document.querySelectorAll('.modal');
let allModalCloseButtons = document.querySelectorAll('.modal__close');

let allAddToCartButtons = document.querySelectorAll('.catalog__button--add-to-cart');
let cartCheckout = document.querySelector('.cart__checkout');

let deliveryButton = document.querySelector('.services__selector-button--delivery');
let warrantyButton = document.querySelector('.services__selector-button--warranty');
let creditButton = document.querySelector('.services__selector-button--credit');
let deliveryInfo = document.querySelector('.services__info--delivery');
let warrantyInfo = document.querySelector('.services__info--warranty');
let creditInfo = document.querySelector('.services__info--credit');

let contactUsButton = document.querySelector('.information__button--contact-us');
let contactUsModal = document.querySelector('.contact-us');
let contactUsModalClose = document.querySelector('.modal__close--contact-us');
let nameContactUs = document.querySelector('.contact-us__name input');

let mapButton = document.querySelector('.information__map');
let mapModal = document.querySelector('.map-modal');
let mapModalClose = document.querySelector('.modal__close--map')

let sliderPrev = document.querySelector('.slider__prev');
let sliderNext = document.querySelector('.slider__next');

let cartModal = document.querySelector('.cart');
let modalContinue = document.querySelector('.cart__shopping');
let slidersContainer = document.querySelector('.slider__list');
let sliderRadio1 = document.querySelector('.slider__radio--1');
let sliderRadio2 = document.querySelector('.slider__radio--2');

// Info selector
for (let selectorButton of selectorButtons) {
  selectorButton.onclick = function () {
    selectorButton.setAttribute("disabled", true);
    if (selectorButton === deliveryButton) {
      warrantyButton.removeAttribute("disabled");
      creditButton.removeAttribute("disabled");
      deliveryInfo.classList.remove('visually-hidden');
      warrantyInfo.classList.add('visually-hidden');
      creditInfo.classList.add('visually-hidden');
    } else if (selectorButton === warrantyButton) {
      deliveryButton.removeAttribute("disabled");
      creditButton.removeAttribute("disabled");
      warrantyInfo.classList.remove('visually-hidden');
      deliveryInfo.classList.add('visually-hidden');
      creditInfo.classList.add('visually-hidden');
    } else {
      deliveryButton.removeAttribute("disabled");
      warrantyButton.removeAttribute("disabled");
      creditInfo.classList.remove('visually-hidden');
      warrantyInfo.classList.add('visually-hidden');
      deliveryInfo.classList.add('visually-hidden');
    }
  }
}

// Close all modals
for (let modalCloseButton of allModalCloseButtons) {
  modalCloseButton.onclick = function (evt) {
    evt.preventDefault();
    for (let modal of allModals) {
      modal.classList.add('visually-hidden');
    }
  }
}

// Add to cart modal open
for (let addToCartButton of allAddToCartButtons) {
  addToCartButton.onclick = function (evt) {
    evt.preventDefault();
    cartModal.classList.remove('visually-hidden');
    cartCheckout.focus();
  }
}

// Add to cart modal close
modalContinue.onclick = function (evt) {
  evt.preventDefault();
  cartModal.classList.add('visually-hidden');
}

// Contact us modal open
contactUsButton.onclick = function (evt) {
  evt.preventDefault();
  contactUsModal.classList.remove('visually-hidden');
  nameContactUs.focus();
}

// Map modal open
mapButton.onclick = function (evt) {
  evt.preventDefault();
  mapModal.classList.remove('visually-hidden');
  mapModalClose.focus();
}

// Slider
sliderNext.onclick = function (evt) {
  evt.preventDefault();
  slidersContainer.scroll({
    top: 0,
    left: 620,
    behavior: 'smooth'
  });
  sliderRadio2.checked = true;
}

sliderPrev.onclick = function (evt) {
  evt.preventDefault();
  slidersContainer.scroll({
    top: 0,
    left: -620,
    behavior: 'smooth'
  });
  sliderRadio1.checked = true;
}

sliderRadio1.onclick = function () {
  slidersContainer.scroll({
    top: 0,
    left: -620,
    behavior: 'smooth'
  });
}

sliderRadio2.onclick = function () {
  slidersContainer.scroll({
    top: 0,
    left: 620,
    behavior: 'smooth'
  });
}

var allModals = document.querySelectorAll('.modal');
var allModalCloseButtons = document.querySelectorAll('.modal__close');

var allAddToCartButtons = document.querySelectorAll('.catalog__button--add-to-cart');
var cartModal = document.querySelector('.cart');
var cartCheckout = cartModal.querySelector('.cart__checkout');
var modalContinue = cartModal.querySelector('.cart__shopping');

var selectorButtons = document.querySelectorAll('.services__selector-button');
var deliveryButton = document.querySelector('.services__selector-button--delivery');
var warrantyButton = document.querySelector('.services__selector-button--warranty');
var creditButton = document.querySelector('.services__selector-button--credit');
var deliveryInfo = document.querySelector('.services__info--delivery');
var warrantyInfo = document.querySelector('.services__info--warranty');
var creditInfo = document.querySelector('.services__info--credit');

var contactUsButton = document.querySelector('.information__button--contact-us');
var contactUsModal = document.querySelector('.contact-us');
var contactUsForm = contactUsModal.querySelector('.contact-us__form');
var contactUsModalClose = contactUsModal.querySelector('.modal__close--contact-us');
var nameContactUs = contactUsModal.querySelector('.contact-us__name input');
var emailContactUs = contactUsModal.querySelector('.contact-us__email input');
var commentContactUs = contactUsModal.querySelector('.contact-us__comment textarea');

var mapButton = document.querySelector('.information__map');
var mapModal = document.querySelector('.map-modal');
var mapModalClose = mapModal.querySelector('.modal__close--map')

var sliderPrev = document.querySelector('.slider__prev');
var sliderNext = document.querySelector('.slider__next');

var slidersContainer = document.querySelector('.slider__list');
var sliderRadio1 = document.querySelector('.slider__radio--1');
var sliderRadio2 = document.querySelector('.slider__radio--2');

var isStorageSupport = true;
var name = '';
var email = '';
try {
  name = localStorage.getItem('name');
  email = localStorage.getItem('email');
} catch (err) {
  isStorageSupport = false;
}

// Info selector
for (var selectorButton of selectorButtons) {
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
for (var modalCloseButton of allModalCloseButtons) {
  modalCloseButton.onclick = function (evt) {
    evt.preventDefault();
    for (var modal of allModals) {
      modal.classList.add('visually-hidden');
      modal.classList.remove('modal-animation');
      contactUsModal.classList.remove('modal-error');
    }
  }
}

// Close all modals with ESC key
for (var modal of allModals) {
  document.addEventListener('keydown', function (evt) {
    if (evt.keyCode === 27) {
      evt.preventDefault();
      modal.classList.add('visually-hidden');
      modal.classList.remove('modal-animation');
      contactUsModal.classList.remove('modal-error');
    }
  });
}

// Add to cart modal open
for (var addToCartButton of allAddToCartButtons) {
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
  contactUsModal.classList.add('modal-animation');

  if (name && email) {
    nameContactUs.value = name;
    emailContactUs.value = email;
    commentContactUs.focus();
  } else {
    nameContactUs.focus();
  }
}

// Contact us form validation
contactUsForm.addEventListener('submit', function(evt) {
  if (!nameContactUs.value || !emailContactUs.value || !commentContactUs.value) {
    evt.preventDefault();
    contactUsModal.classList.remove("modal-error");
    contactUsModal.offsetWidth = contactUsModal.offsetWidth;
    contactUsModal.classList.add('modal-error');
  } else {
    localStorage.setItem('name', nameContactUs.value);
    localStorage.setItem('email', emailContactUs.value);
  }
});

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

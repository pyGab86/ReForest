var burger = $('.burger-menu');
var header = $('header');

var menuShown = false;

var isTouch = (('ontouchstart' in window) || (navigator.msMaxTouchPoints > 0));

const burgerInteraction = () => {
    if (menuShown) {
        // On retire le menu du DOM si le menu est fermé
        $('.menu-burger-activated').remove();
        menuShown = false;

    } else {
        // On ajoute le menu au DOM si le menu est ouvert
        header.append("<div class='menu-burger-activated'><nav><ul><li>Devenir Membre</li><hr/><li>Mon Compte</li><hr/><li>Calculer mon empreinte</li><hr/><li>Nous contacter</li><hr/><li>Soutenir la planète</li></ul></nav></div>");
        menuShown = true;
    }
}

if (isTouch) {
    burger.hover(burgerInteraction);
} else {
    burger.click(burgerInteraction);
}
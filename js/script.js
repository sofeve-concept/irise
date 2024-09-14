function hamburger() {
  var buttonHamburger = document.getElementById("hamburger");
  buttonHamburger.addEventListener('click', function (e) {
    let state = buttonHamburger.getAttribute('aria-expanded');
    state === 'false' ? buttonHamburger.setAttribute('aria-expanded', 'true') : buttonHamburger.setAttribute('aria-expanded', 'false');
  });  

  document.addEventListener('keydown', evt => {
    var isEchap = false;
    if ("key" in evt) {
      isEchap = (evt.key === "Escape" || evt.key === "Esc");
    } else {
      isEchap = (evt.keyCode === 27);
    }
    if (isEchap) {
      buttonHamburger.setAttribute('aria-expanded', 'false') 
      buttonHamburger.focus()
        }
  });
}

hamburger()



function menuEtSousMenuDeroulant() {

  var theButtons = document.querySelectorAll('.navbar button[aria-expanded]:not(#hamburger)');

  for (i = 0; i < theButtons.length; i++) {

    // apparition/disparition du sous-menu au clic
    theButtons[i].addEventListener('click', function (e) {
      var thisButton = e.target;
      for (j = 0; j < theButtons.length; j++) {
        if (thisButton !== theButtons[j])
          theButtons[j].setAttribute('aria-expanded', 'false')
      }
      var stateButton = thisButton.getAttribute('aria-expanded') === 'false' ? true : false;
      thisButton.setAttribute('aria-expanded', stateButton);
    });

    // disparition des sous-menu quand changement de focus sur bouton
    theButtons[i].addEventListener('focus', function (e) {
      var thisButton = e.target;
      for (j = 0; j < theButtons.length; j++) {
        if (thisButton !== theButtons[j])
          theButtons[j].setAttribute('aria-expanded', 'false')
      }
    });
  }

  // disparition du sous-menu et focus sur le bouton correspondant au sous-menu
  document.addEventListener('keydown', evt => {
    var isEchap = false;
    if ("key" in evt) {
      isEchap = (evt.key === "Escape" || evt.key === "Esc");
    } else {
      isEchap = (evt.keyCode === 27);
    }
    if (isEchap) {
      for (j = 0; j < theButtons.length; j++) {
        if (theButtons[j].getAttribute('aria-expanded') === 'true') {
          theButtons[j].setAttribute('aria-expanded', 'false');
          theButtons[j].focus()
        }
      }
    }
  });

}
menuEtSousMenuDeroulant()


// Fermeture de tous les sous-menus via clic dans le body
function fermerMenuViaClicBody(event) {
  var theButtons = document.querySelectorAll('.navbar button[aria-expanded]');
  if (!event.target.matches('.navbar button[aria-expanded]')) {
    for (i = 0; i < theButtons.length; i++) {
      theButtons[i].setAttribute('aria-expanded', 'false');
    }
  }
}

document.body.addEventListener('click', fermerMenuViaClicBody, false);



/********************************************************************
 * Fonction pour activer/désactiver le menu haut
 * et faire apparaître/disparaître le bouton de retour en haut de page
 ********************************************************************/


document.addEventListener('scroll',() => {
		
    document.getElementById("RetourEnHaut").className = window.scrollY > 100 ? "cVisible" : "cInvisible";
});


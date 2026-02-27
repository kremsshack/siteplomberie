// 1. Attendre que la page soit totalement chargée
document.addEventListener("DOMContentLoaded", function() {


  // 2. HEADER STICKY (Change d'aspect au scroll)
 
  const header = document.querySelector(".en-tete-site");
  
  window.addEventListener("scroll", function() {
    // Si on descend de plus de 50 pixels, on ajoute une classe
    if (window.scrollY > 50) {
      header.classList.add("header-scroll");
    } else {
      header.classList.remove("header-scroll");
    }
  });

  const nav = document.querySelector(".navigation-principale");
  const boutonMenu = document.querySelector(".nav-toggle"); // Si tu ajoutes un bouton burger en HTML
  
  if (boutonMenu) {
    boutonMenu.addEventListener("click", function() {
      nav.classList.toggle("menu-ouvert");
    });

    // Fermer le menu quand on clique sur un lien (très utile sur mobile !)
    const liens = nav.querySelectorAll("a");
    liens.forEach(function(lien) {
      lien.addEventListener("click", function() {
        nav.classList.remove("menu-ouvert");
      });
    });
  }

   // 3. ANIMATIONS AU SCROLL (Intersection Observer simplifié)
  // On cible tous les éléments qui ont la classe "apparition" dans le HTML
  const elementsAAnimer = document.querySelectorAll(".apparition");

  // On crée l'observateur
  const observer = new IntersectionObserver(function(entries) {
    entries.forEach(function(entry) {
      // Si l'élément rentre dans l'écran
      if (entry.isIntersecting) {
        entry.target.classList.add("est-visible");
        // On arrête de l'observer pour ne pas rejouer l'animation
        observer.unobserve(entry.target); 
      }
    });
  });

  // On demande à l'observateur de surveiller chaque élément
  elementsAAnimer.forEach(function(element) {
    observer.observe(element);
  });

});
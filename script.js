//Waits for the page to fully load before running the code
document.addEventListener('DOMContentLoaded', () => {
    // Get all timeline items
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    // Add click event to each preview section
    //or each timeline item, it adds a click event listener to its preview section
    //When clicked, it: Toggles the "expanded" class on the clicked item
    //If the item is now expanded, it collapses any other expanded items
    
    timelineItems.forEach(item => {
        const preview = item.querySelector('.item-preview');
        
        preview.addEventListener('click', () => {
            // Toggle expanded class
            item.classList.toggle('expanded');
            
            // If this item is expanded, collapse others
            if (item.classList.contains('expanded')) {
                timelineItems.forEach(otherItem => {
                    if (otherItem !== item && otherItem.classList.contains('expanded')) {
                        otherItem.classList.remove('expanded');
                    }
                });
            }
        });
    });
});

document.addEventListener('DOMContentLoaded', function() {
    // Récupérer tous les liens de navigation
    const navLinks = document.querySelectorAll('nav a');
    
    // Fonction pour mettre à jour le lien actif basé sur la section visible
    function updateActiveNavLink() {
      // Récupérer la position de défilement actuelle
      const scrollPosition = window.scrollY;
      
      // Vérifier chaque section pour voir si elle est visible
      document.querySelectorAll('section[id]').forEach(section => {
        const sectionTop = section.offsetTop - 100; // Ajuster selon votre layout
        const sectionHeight = section.offsetHeight;
        const sectionId = section.getAttribute('id');
        
        if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
          // Retirer la classe active de tous les liens
          navLinks.forEach(link => link.classList.remove('active'));
          
          // Ajouter la classe active au lien correspondant
          navLinks.forEach(link => {
            if (link.getAttribute('href') === '#' + sectionId) {
              link.classList.add('active');
            }
          });
        }
      });
    }
    
    // Mettre à jour le lien actif lors du défilement
    window.addEventListener('scroll', updateActiveNavLink);
    
    // Mettre à jour le lien actif lors du chargement de la page
    updateActiveNavLink();
    
    // Mettre à jour le lien actif lors du clic sur un lien
    navLinks.forEach(link => {
      link.addEventListener('click', function() {
        navLinks.forEach(link => link.classList.remove('active'));
        this.classList.add('active');
      });
    });
  });

  document.addEventListener('DOMContentLoaded', function() {
  // Créer le conteneur d'étoiles
  const starsContainer = document.createElement('div');
  starsContainer.className = 'stars';
  document.body.appendChild(starsContainer);
  
  // Créer 100 étoiles avec des positions aléatoires
  for (let i = 0; i < 100; i++) {
    const star = document.createElement('div');
    star.className = 'star';
    
    // Position aléatoire
    star.style.left = `${Math.random() * 100}%`;
    star.style.top = `${Math.random() * 100}%`;
    
    // Taille variable
    const size = Math.random() * 2 + 1;
    star.style.width = `${size}px`;
    star.style.height = `${size}px`;
    
    // Luminosité variable
    star.style.opacity = Math.random() * 0.7 + 0.3;
    
    // Animation avec délai aléatoire
    star.style.animation = `twinkle ${3 + Math.random() * 4}s infinite alternate`;
    star.style.animationDelay = `${Math.random() * 5}s`;
    
    starsContainer.appendChild(star);
  }
});

// Ajoutez également cette animation CSS
document.head.insertAdjacentHTML('beforeend', `
  <style>
    @keyframes twinkle {
      0% { opacity: 0.3; }
      100% { opacity: 1; }
    }
  </style>
`);


















/////////////////////////////////////////////S T  A R S //////////////////////////////////////////////////////
document.addEventListener('DOMContentLoaded', function() {
    // Créer le conteneur d'étoiles
    const starsContainer = document.createElement('div');
    starsContainer.className = 'stars';
    document.body.appendChild(starsContainer);
    
    // Créer 100 étoiles avec des positions aléatoires
    for (let i = 0; i < 100; i++) {
      const star = document.createElement('div');
      star.className = 'star';
      
      // Position aléatoire
      star.style.left = `${Math.random() * 100}%`;
      star.style.top = `${Math.random() * 100}%`;
      
      // Taille variable
      const size = Math.random() * 2 + 1;
      star.style.width = `${size}px`;
      star.style.height = `${size}px`;
      
      // Luminosité variable
      star.style.opacity = Math.random() * 0.7 + 0.3;
      
      // Animation avec délai aléatoire
      star.style.animation = `twinkle ${3 + Math.random() * 4}s infinite alternate`;
      star.style.animationDelay = `${Math.random() * 5}s`;
      
      starsContainer.appendChild(star);
    }
  });
  
  // Ajoutez également cette animation CSS
  document.head.insertAdjacentHTML('beforeend', `
    <style>
      @keyframes twinkle {
        0% { opacity: 0.3; }
        100% { opacity: 1; }
      }
    </style>
  `);
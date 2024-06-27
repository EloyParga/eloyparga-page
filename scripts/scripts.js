document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll(".menu-container ul li a");
    const sections = document.querySelectorAll("section");

    links.forEach(link => {
        link.addEventListener("click", function(e) {
            e.preventDefault();

            const targetId = e.target.getAttribute('href').replace('#', '') + "-container";
            sections.forEach(section => {
                if(section.classList.contains(targetId)) {
                    section.style.display = "block"; // Muestra el section correspondiente
                    section
                } else {
                    section.style.display = "none"; // Oculta los otros sections
                }
            });
        });
    });
});

function setupInbox() {
    // Selecciona todos los elementos li dentro del contenedor 'menu-container'
    const listItems = document.querySelectorAll(".menu-container li");

    // Añade un escuchador de eventos a cada li
    listItems.forEach(li => {
        li.addEventListener("click", function() {
            // Busca si algún elemento ya tiene el ID 'inbox' y remuévelo
            const previousInbox = document.getElementById("inbox");
            if (previousInbox) {
                previousInbox.removeAttribute("id");
            }
            // Establece el ID 'inbox' al li clickeado
            li.id = "inbox";
        });
    });
}

// Selecciona todos los elementos 'li' dentro del contenedor de menú
document.querySelectorAll('.menu-container li').forEach(li => {
    li.addEventListener('click', function(event) {
        // Esto verifica si el clic fue directamente sobre el 'li', y no sobre el 'a'
        if (event.target === this) {
            // Encuentra el enlace dentro del 'li' y simula un clic en él
            this.querySelector('a').click();
        }
    });
});


document.addEventListener("DOMContentLoaded", setupInbox);


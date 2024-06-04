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

document.addEventListener("DOMContentLoaded", setupInbox);


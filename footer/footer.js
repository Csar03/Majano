document.addEventListener("DOMContentLoaded", function () {
    let rutaFooter = window.location.pathname.includes("bbq") 
        ? "../footer/footer.html"
        : "footer/footer.html";

    fetch(rutaFooter)
        .then(response => {
            if (!response.ok) {
                throw new Error("Error al cargar el footer: " + response.status);
            }
            return response.text();
        })
        .then(html => {
            document.getElementById("footer-container").innerHTML = html;
        })
        .catch(error => console.error(error));
});

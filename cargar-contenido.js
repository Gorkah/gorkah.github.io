document.addEventListener("DOMContentLoaded", function() {
    const contenidoArticulo = document.getElementById("contenido-articulo");
    const xhr = new XMLHttpRequest();

    xhr.open("GET", "article-content.html", true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            contenidoArticulo.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
});

document.addEventListener("DOMContentLoaded", function() {
    cargarContenido("article-content.html","contenido-articulo")
    cargarContenido("article-mineria.html", "contenido-articulo-mineria");
    cargarContenido("article-tarjetas-graficas.html", "contenido-articulo-tarjetas-graficas");
    cargarContenido("article-overclocking.html", "contenido-articulo-overclocking");
});

function cargarContenido(url, destino) {
    const contenidoArticulo = document.getElementById(destino);
    const xhr = new XMLHttpRequest();

    xhr.open("GET", url, true);
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            contenidoArticulo.innerHTML = xhr.responseText;
        }
    };
    xhr.send();
}

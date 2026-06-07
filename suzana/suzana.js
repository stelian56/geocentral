window.basePath = '/geocentral';

window.onload = function() {
  fetch('suzana/menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu').innerHTML = data;
    });
}


window.onload = function() {
  fetch('/geocentral/suzana/menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu').innerHTML = data;
    });
}


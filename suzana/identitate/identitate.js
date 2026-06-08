window.onload = function() {
  fetch('/suzana/identitate/menu.html')
  .then(response => response.text())
  .then(data => {
    document.getElementById('menu').innerHTML = data;
    });
}


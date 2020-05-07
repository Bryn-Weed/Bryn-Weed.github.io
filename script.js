
window.onload = function () {
  var button = document.getElementById('menu-close');

  button.onclick = function() {
      var div = document.getElementById('mobile-overlay');
      if (div.style.display !== 'none') {
          div.style.display = 'none';
      }
      else {
          div.style.display = 'block';
      }
  }

  var button = document.getElementById('menu-open');

  button.onclick = function() {
    var div = document.getElementById('mobile-overlay');
    var ul = document.getElementById('mobile-menu-ul');
    if (div.style.display == 'none') {
        div.style.display = 'block';
    }
    else {
        div.style.display = 'none';
    }
  }

  var link = document.getElementById('mobile-nav');

  link.onclick = function() {
    var menu = document.getElementById('mobile-overlay');
    if (menu.style.display !== 'none'){
      menu.style.display = 'none';
    }
    else {
      menu.style.display = 'block';
    }
  }


}

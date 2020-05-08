
window.onload = function () {
  var button = document.getElementById('menu-close');

  button.onclick = function() {
      var div = document.getElementById('mobile-overlay');
      if (div.style.width !== '0%') {
          div.style.width = '0%';
          div.style.paddingLeft = '0px';
      }
      else {
          div.style.width = '100%';
      }
  }

  var button = document.getElementById('menu-open');

  button.onclick = function() {
    var div = document.getElementById('mobile-overlay');
    var ul = document.getElementById('mobile-menu-ul');
    if (div.style.width !== '100%') {
        div.style.width = '100%';
        div.style.paddingLeft = '15px';
    }
    else {
        div.style.width = '0%';
    }
  }

  var link = document.getElementById('link1');

  link.onclick = function() {
    var menu = document.getElementById('mobile-overlay');
    if (menu.style.width !== '0%'){
      menu.style.width = '0%';
      menu.style.padding = '0%'
    }
    else {
      menu.style.width = '100%';
    }
  }

  var link = document.getElementById('link2');

  link.onclick = function() {
    var menu = document.getElementById('mobile-overlay');
    if (menu.style.width !== '0%'){
      menu.style.width = '0%';
      menu.style.padding = '0%'
    }
    else {
      menu.style.width = '100%';
    }
  }


    var link = document.getElementById('link3');

    link.onclick = function() {
      var menu = document.getElementById('mobile-overlay');
      if (menu.style.width !== '0%'){
        menu.style.width = '0%';
        menu.style.padding = '0%'
      }
      else {
        menu.style.width = '100%';
      }
    }


}

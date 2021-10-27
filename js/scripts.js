(function mainScript() {
    "use strict";
    const offcanvasToggle = document.querySelector(
      '[data-bs-toggle="offcanvas"]',
    );
    const offcanvasCollapse = document.querySelector(".offcanvas-collapse");
    offcanvasToggle.addEventListener("click", function () {
      offcanvasCollapse.classList.toggle("open");
    });
  })();

  (function () {
    var toggle = document.querySelector('.nav-toggle');
    
    toggle.addEventListener('click', function(e) {
      this.classList.toggle('opened');
    });
  })();

  
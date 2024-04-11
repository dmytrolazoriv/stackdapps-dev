document.addEventListener("DOMContentLoaded", () => {
  function updateMarginTop() {
    let viewportWidth = window.innerWidth;
    let minValue = -170; // Minimum value at 1920px
    let maxValue = -20;  // Maximum value at 375px
    let quoteIcon = document.querySelector('.quote__icon');

    // Calculate margin-top value based on viewport width
    var newValue = minValue + (viewportWidth - 1920) * (maxValue - minValue) / (375 - 1920);

    // Apply the new margin-top value
    if (quoteIcon != null) {
      quoteIcon.style.marginTop = newValue + 'px';
    }
  }

window.addEventListener('load', updateMarginTop);
window.addEventListener('resize', updateMarginTop);
window.addEventListener('orientationchange', updateMarginTop);
// =========== quote__icon margin top updating ===============

function adjustPosition() {
  let screenWidth = window.innerWidth;
  let elements = document.querySelectorAll('.case__logo, .case_reverse .case__logo');

  // Reset position to 50% if screen resolution is greater than 1920px
  if (screenWidth > 1920) {
    elements.forEach(function(element) {
      let isReverse = element.closest('.case_reverse');

      if (isReverse) {
        element.style.right = '50%';
        element.style.left = '';
      } else {
        element.style.left = '50%';
        element.style.right = '';
      }
    });
    return; // Exit the function early if screen width is greater than 1920px
  }

  // Execute the rest of the function for screen width less than or equal to 1920px
  elements.forEach(function(element) {
    let isReverse = element.closest('.case_reverse');

    // Calculate the position based on screen width
    let percentage = (screenWidth - 1920) / (375 - 1920);
    let newLeft = 50 - percentage * 33; // Default: 33% decrease from 50%
    let minIndentation = isReverse ? 27 : 17;

    if (newLeft < minIndentation) {
      newLeft = minIndentation;
    }

    if (isReverse) {
      element.style.right = newLeft + '%';
      element.style.left = '';
    } else {
      element.style.left = newLeft + '%';
      element.style.right = '';
    }
  });
}

window.addEventListener('load', adjustPosition);
window.addEventListener('resize', adjustPosition);
window.addEventListener('orientationchange', adjustPosition);
// =========== case__logo left and right position updating ===============

function toggleDarkMode() {
   document.body.classList.toggle('dark-mode');
 }

 let switcherButton = document.querySelector('.switcher__button');

 if (switcherButton != null) {
  switcherButton.addEventListener('click', function() {
    toggleDarkMode();
  });
 }
// =========== Switch light & dark theme ===========
});
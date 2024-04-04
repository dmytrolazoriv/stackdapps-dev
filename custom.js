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
  var elements = document.querySelectorAll('.case__logo, .case_reverse .case__logo');

  if (screenWidth <= 1920) {
    // Loop through each element with the class 'case__logo'
    elements.forEach(function(element) {
       var isReverse = element.closest('.case_reverse');

       // Calculate the position based on screen width
       var percentage = (screenWidth - 1920) / (375 - 1920);
       var newLeft = 50 - percentage * 33; // Default: 33% decrease from 50%
       var minIndentation = isReverse ? 27 : 17;

       if (newLeft < minIndentation) {
          newLeft = minIndentation;
       }

       if (isReverse) {
          element.style.right = newLeft + '%';
       } else {
          element.style.left = newLeft + '%';
       }
    });
 }
}

window.addEventListener('load', adjustPosition);
window.addEventListener('resize', adjustPosition);
window.addEventListener('orientationchange', adjustPosition);
// =========== case__logo left and right position updating ===============
});
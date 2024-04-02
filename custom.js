document.addEventListener("DOMContentLoaded", () => {
  function updateMarginTop() {
    var viewportWidth = window.innerWidth;
    var minValue = -170; // Minimum value at 1920px
    var maxValue = -20;  // Maximum value at 375px

    // Calculate margin-top value based on viewport width
    var newValue = minValue + (viewportWidth - 1920) * (maxValue - minValue) / (375 - 1920);

    // Apply the new margin-top value
    document.querySelector('.quote__icon').style.marginTop = newValue + 'px';
  }

window.addEventListener('load', updateMarginTop);
window.addEventListener('resize', updateMarginTop);
window.addEventListener('orientationchange', updateMarginTop);
});
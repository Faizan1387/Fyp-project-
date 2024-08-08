window.addEventListener('scroll', function() {
  // Get the position of the scroll
  var scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
  
  // Move the scrollable section while keeping the fixed section in place
  document.querySelector('.scrollable-section').style.transform = 'translateY(' + scrollPosition + 'px)';
});

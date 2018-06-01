var docWidth = document.documentElement.offsetWidth;

[].forEach.call(
  document.querySelectorAll('*'),
  function(el) {
    if (el.offsetWidth > docWidth) {
      console.log(el);
    }
  }
);

// A very useful code snippet from Chris Coyier at CSS-Tricks
// https://css-tricks.com/findingfixing-unintended-body-overflow/
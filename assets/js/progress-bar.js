/*
 *  Progress bar JS
 */

(function() {
  var init = function() {
    window.addEventListener('scroll', onUserScrolling, false);
  };
  var onUserScrolling = function () {
    console.log('You are scrolling page!');
  };
  init();
});

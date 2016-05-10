'use strict'

$(function() {

  // config options
  var width = 720;
  var animationSpeed = 1000;
  var pause = 2000;
  var currentSlide = 1;

  // cache the DOM
  var $slider = $('#slider');
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  // start slider function
  var interval;

  function startSlider() {
    interval = setInterval(function() {
      //animate margin-left
      $slideContainer.animate({'margin-left': '-=' + width + 'px'}, animationSpeed, function() {
        currentSlide ++;
        //if last slide, go to position 1 (0px)
        if (currentSlide === $slides.length) {
          currentSlide = 1;
          $slideContainer.css('margin-left', 0);
        }
      });
    }, pause);
  };

  // stop slider function
  function stopSlider() {
    clearInterval(interval);
  };

  // Stop slide on mouseenter and resume on mouseleave
  $slider.on('mouseenter', stopSlider).on('mouseleave', startSlider);


  startSlider();
});

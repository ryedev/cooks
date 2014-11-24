'use strict';

$(document).ready(function(){
  $('#tagline').fitText(1.7, { minFontSize: '30px', maxFontSize: '60x' });
  $('#sub-tag-text').fitText(4, { minFontSize: '14px', maxFontSize: '24px' });
  $('#main-content-hl').fitText(2, { minFontSize: '16px', maxFontSize: '56px' });
  $('#main-content-sub-hl').fitText(2, { minFontSize: '10px', maxFontSize: '18px'});


  // if(docHeight > 1000) {
  //   $('.footer-bottom').find('.logo').css({display: 'inline-block'});
  // }
});


/*
 * jQuery autoanchor plugin
 *
 * Copyright (c) 2009 Alexandr Zykov
 * Licensed under the MIT License:
 *   http://www.opensource.org/licenses/mit-license.php
 */

var autoanchor = {};
window.autoanchor = autoanchor;
autoanchor.anc = [];
autoanchor.cur = '';

jQuery.fn.addanchors = function() {
  return this.each(function(){
    autoanchor.anc.push(this);
  });
};

jQuery(window).scroll(function () {
  if (autoanchor.anc.length == 0) return;
  
  var scrollY = (window.scrollY) ? window.scrollY : document.documentElement.scrollTop ? document.documentElement.scrollTop : document.body.scrollTop;
  var d = 0;
  
  autoanchor.d = autoanchor.anc[0].offsetTop-scrollY;
  autoanchor.e = 0;
  
  for (anc in autoanchor.anc) {
    d = autoanchor.anc[anc].offsetTop-scrollY;
    if ((d <= 0) && (autoanchor.d < d)) {
      autoanchor.d = d;
      autoanchor.e = anc;
    };
  };
  
  if (autoanchor.cur != autoanchor.anc[autoanchor.e].name) {
    autoanchor.cur = autoanchor.anc[autoanchor.e].name;
    location.hash = '#'+autoanchor.cur;
  }
  
});
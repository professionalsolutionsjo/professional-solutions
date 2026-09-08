/* Language presentation is handled by assessment-v2.js. This file intentionally does not inject bilingual labels. */
'use strict';
(function(){
  document.addEventListener('DOMContentLoaded',function(){
    /* Keep the page in the language selected by assessment-v2.js. */
    if(typeof window.toggleAssessmentLanguage==='function'){
      const btn=document.getElementById('langBtn');
      if(btn) btn.textContent=document.documentElement.lang==='en'?'AR':'EN';
    }
  });
})();

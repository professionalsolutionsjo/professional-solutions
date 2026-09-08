/* Arabic/English presentation guard. assessment-v2.js owns all language content. */
'use strict';
(function(){
  function cleanArabic(){
    if(document.documentElement.lang!=='ar') return;
    const replacements=[
      [/\bHVAC\b/g,'التكييف والتهوية'],
      [/\bAirlocks\b/gi,'مناطق عزل الهواء'],
      [/\bAirlock\b/gi,'منطقة عزل الهواء']
    ];
    document.querySelectorAll('.assessment, .assessment *').forEach(el=>{
      if(el.children.length===0 && el.textContent){
        let t=el.textContent;
        replacements.forEach(([re,v])=>{t=t.replace(re,v)});
        el.textContent=t;
      }
    });
  }
  document.addEventListener('DOMContentLoaded',()=>setTimeout(cleanArabic,30));
  const observer=new MutationObserver(()=>setTimeout(cleanArabic,0));
  document.addEventListener('DOMContentLoaded',()=>observer.observe(document.getElementById('questions')||document.body,{childList:true,subtree:true}));
  window.cleanArabicAssessmentLanguage=cleanArabic;
})();

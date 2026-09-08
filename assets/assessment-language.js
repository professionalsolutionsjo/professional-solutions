/* Arabic/English presentation guard. assessment-v2.js owns all question language content. */
'use strict';
(function(){
  const INTRO_AR='تقييم فني مبدئي يساعد على تحديد مستوى جاهزية المنشأة ومتطلبات التجهيز والبنية التحتية، وتحديد أبرز نقاط التحسين التي تحتاج إلى مراجعة.';
  const INTRO_EN='A preliminary technical assessment that helps determine the facility’s level of readiness, fit-out and infrastructure requirements, and identify the key areas for improvement that require further review.';
  function applyAssessmentLanguage(){
    const lang=document.documentElement.lang==='en'?'en':'ar';
    const intro=document.querySelector('.intro');
    if(intro){const paragraphs=intro.querySelectorAll('p');if(paragraphs.length>1) paragraphs[1].textContent=lang==='en'?INTRO_EN:INTRO_AR;}
  }
  function cleanArabic(){
    if(document.documentElement.lang!=='ar') return;
    const replacements=[[/\bHVAC\b/g,'التكييف والتهوية'],[/\bAirlocks\b/gi,'مناطق عزل الهواء'],[/\bAirlock\b/gi,'منطقة عزل الهواء']];
    document.querySelectorAll('.assessment, .assessment *').forEach(el=>{if(el.children.length===0&&el.textContent){let t=el.textContent;replacements.forEach(([re,v])=>{t=t.replace(re,v)});el.textContent=t;}});
  }
  function removeArabicIntroInEnglish(){
    if(document.documentElement.lang!=='en') return;
    const intro=document.querySelector('.intro');
    if(!intro) return;
    const paragraphs=intro.querySelectorAll('p');
    if(paragraphs.length>1) paragraphs[1].textContent=INTRO_EN;
  }
  function sync(){applyAssessmentLanguage();removeArabicIntroInEnglish();cleanArabic();}
  document.addEventListener('DOMContentLoaded',()=>setTimeout(sync,30));
  const observer=new MutationObserver(()=>setTimeout(sync,0));
  document.addEventListener('DOMContentLoaded',()=>observer.observe(document.getElementById('questions')||document.body,{childList:true,subtree:true}));
  window.cleanArabicAssessmentLanguage=cleanArabic;
})();

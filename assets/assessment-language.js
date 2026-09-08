/* Arabic/English presentation guard. assessment-v2.js owns all question language content. */
'use strict';
(function(){
  const NOTICE_AR='تقييم فني مبدئي يساعد على تحديد مستوى جاهزية المنشأة ومتطلبات التجهيز والبنية التحتية، وتحديد أبرز نقاط التحسين التي تحتاج إلى مراجعة.<br><br>هذا تقييم فني مبدئي لجوانب التجهيز والبنية التحتية التي ترتبط بنطاق خدمات Professional Solutions، وليس شهادة مطابقة أو اعتمادًا رقابيًا. المتطلبات النهائية تعتمد على نوع النشاط والجهة المختصة والتحقق الميداني.';
  const NOTICE_EN='A preliminary technical assessment that helps determine the facility’s level of readiness, fit-out and infrastructure requirements, and identify the key areas for improvement that require further review.<br><br>This is a preliminary technical assessment of fit-out and infrastructure aspects within the scope of Professional Solutions’ services. It is not a compliance certificate or regulatory accreditation. Final requirements depend on the facility type, the competent authority, and field verification.';
  function applyAssessmentLanguage(){
    const lang=document.documentElement.lang==='en'?'en':'ar';
    const notice=document.querySelector('.notice');
    if(notice) notice.innerHTML=lang==='en'?NOTICE_EN:NOTICE_AR;
  }
  function cleanArabic(){
    if(document.documentElement.lang!=='ar') return;
    const replacements=[[/\bHVAC\b/g,'التكييف والتهوية'],[/\bAirlocks\b/gi,'مناطق عزل الهواء'],[/\bAirlock\b/gi,'منطقة عزل الهواء']];
    document.querySelectorAll('.assessment, .assessment *').forEach(el=>{if(el.children.length===0&&el.textContent){let t=el.textContent;replacements.forEach(([re,v])=>{t=t.replace(re,v)});el.textContent=t;}});
  }
  function sync(){applyAssessmentLanguage();cleanArabic();}
  document.addEventListener('DOMContentLoaded',()=>setTimeout(sync,30));
  const observer=new MutationObserver(()=>setTimeout(sync,0));
  document.addEventListener('DOMContentLoaded',()=>observer.observe(document.getElementById('questions')||document.body,{childList:true,subtree:true}));
  window.cleanArabicAssessmentLanguage=cleanArabic;
})();

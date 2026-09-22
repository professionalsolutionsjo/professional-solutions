/* Professional Solutions — GMP certificate analysis overlay */
'use strict';
(function () {
  const NON_COMPLIANT = ['non-compliant', 'غير مطابق', 'not-compliant'];
  const COMPLIANT = ['compliant', 'مطابق'];
  function isEn(){ return document.documentElement.lang === 'en'; }
  function text(ar,en){ return isEn()?en:ar; }
  function cleanStatuses(){
    document.querySelectorAll('#questions select, #questions input[type="radio"]').forEach(function(el){
      if(el.tagName==='SELECT') Array.from(el.options).forEach(function(o){
        if(/n\/a|not applicable|لا ينطبق|غير منطبق/i.test((o.textContent||'')+' '+(o.value||''))) o.remove();
      });
      else if(/n\/a|not applicable|لا ينطبق|غير منطبق/i.test((el.value||'')+' '+(el.getAttribute('aria-label')||''))) el.remove();
    });
  }
  function addCertificateBlock(){
    if(document.getElementById('gmp-certificate-analysis')) return;
    const result=document.getElementById('result'); if(!result) return;
    const box=document.createElement('section'); box.id='gmp-certificate-analysis'; box.className='panel';
    box.innerHTML='<h2>'+text('شهادة تحليل وتقييم GMP','GMP Analysis & Assessment Certificate')+'</h2>'+
      '<p>'+text('هذه شهادة تحليل مهني صادرة عن Professional Solutions وليست شهادة اعتماد رقابية.','This is a professional analysis certificate issued by Professional Solutions, not a regulatory accreditation certificate.')+'</p>'+
      '<div id="gmp-certificate-details"></div>';
    result.insertBefore(box,result.firstChild);
  }
  function analyze(){
    addCertificateBlock();
    const root=document.getElementById('gmp-certificate-details'); if(!root) return;
    const controls=Array.from(document.querySelectorAll('#questions select, #questions input:checked'));
    let compliant=0, non=0, total=0;
    controls.forEach(function(c){
      const v=String(c.value||c.textContent||'').toLowerCase();
      if(!v || /unknown|غير معروف|اختر|select/i.test(v)) return;
      total++;
      if(NON_COMPLIANT.some(x=>v.includes(x))) non++; else if(COMPLIANT.some(x=>v.includes(x))) compliant++;
    });
    const pct=total?Math.round(compliant*10000/total)/100:0;
    const classification=non===0?text('مطابق','Compliant'):text('مطابق بشروط إغلاق الملاحظات','Conditionally compliant — close non-conformities');
    root.innerHTML='<dl><dt>'+text('عدد البنود المقروءة','Evaluated items')+'</dt><dd>'+total+'</dd><dt>'+text('مطابق','Compliant')+'</dt><dd>'+compliant+'</dd><dt>'+text('غير مطابق','Non-compliant')+'</dt><dd>'+non+'</dd><dt>'+text('نسبة المطابقة التقريبية','Approximate compliance')+'</dt><dd>'+pct+'%</dd><dt>'+text('التصنيف التحليلي','Analysis classification')+'</dt><dd><strong>'+classification+'</strong></dd></dl>';
  }
  document.addEventListener('DOMContentLoaded',function(){
    cleanStatuses();
    const q=document.getElementById('questionnaire'); if(q){ new MutationObserver(cleanStatuses).observe(q,{childList:true,subtree:true}); }
    const form=document.getElementById('assessment-form'); if(form) form.addEventListener('submit',function(){ setTimeout(analyze,50); });
    const edit=document.getElementById('edit-result'); if(edit) edit.addEventListener('click',cleanStatuses);
  });
})();

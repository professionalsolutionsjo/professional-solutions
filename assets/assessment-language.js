(function(){
'use strict';

const ANSWERS={
  ar:{
    'Epoxy / resin':'إيبوكسي / راتنج','Porcelain / ceramic':'بورسلان / سيراميك','Concrete':'خرسانة','Other':'أخرى','Unknown':'غير معروف','غير معروف':'غير معروف','Not applicable':'غير منطبق','Seamless sheet':'صفائح متصلة ومحكمة',
    'Smooth washable finish':'تشطيب أملس قابل للغسل','Tiles / panels':'بلاط / ألواح','Painted surface':'سطح مطلي',
    'Floor drains with suitable slopes':'مصارف أرضية مع ميول مناسبة','Floor drains without confirmed slopes':'مصارف أرضية دون التحقق من الميول','No suitable drainage':'لا يوجد صرف مناسب',
    'Clearly separated':'منفصلة بوضوح','Partially separated':'منفصلة جزئيًا','Not separated':'غير منفصلة',
    'Dedicated organized areas':'مناطق مخصصة ومنظمة','Partially organized':'منظمة جزئيًا','No dedicated arrangement':'لا يوجد تنظيم أو تخصيص واضح',
    'Suitable and maintained':'مناسبة وتتم صيانتها','Needs improvement':'تحتاج إلى تحسين','Not suitable':'غير مناسبة','Not applicable':'غير منطبق',
    'Protected / enclosed':'محمية / داخل مسارات مغلقة','Partially protected':'محمية جزئيًا','Exposed / difficult to clean':'مكشوفة / يصعب تنظيفها','Exposed':'مكشوفة',
    'Suitable and protected':'مناسبة ومحمية','Suitable but needs improvement':'مناسبة لكنها تحتاج إلى تحسين','Insufficient / unsuitable':'غير كافية / غير مناسبة',
    'Suitable ventilation/extraction':'تهوية / شفط مناسب','Partial solution':'حل جزئي','No suitable solution':'لا يوجد حل مناسب',
    'Suitable':'مناسبة','Partially suitable':'مناسبة جزئيًا','Insufficient':'غير كافية','Unsuitable':'غير مناسبة',
    'Yes':'نعم','Partially':'جزئيًا','No':'لا'
  },
  en:{
    'إيبوكسي / راتنج':'Epoxy / resin','بورسلان / سيراميك':'Porcelain / ceramic','خرسانة':'Concrete','أخرى':'Other','غير معروف':'Unknown','غير منطبق':'Not applicable','صفائح متصلة ومحكمة':'Seamless sheet',
    'تشطيب أملس قابل للغسل':'Smooth washable finish','بلاط / ألواح':'Tiles / panels','سطح مطلي':'Painted surface',
    'مصارف أرضية مع ميول مناسبة':'Floor drains with suitable slopes','مصارف أرضية دون التحقق من الميول':'Floor drains without confirmed slopes','لا يوجد صرف مناسب':'No suitable drainage',
    'منفصلة بوضوح':'Clearly separated','منفصلة جزئيًا':'Partially separated','غير منفصلة':'Not separated',
    'مناطق مخصصة ومنظمة':'Dedicated organized areas','منظمة جزئيًا':'Partially organized','لا يوجد تنظيم أو تخصيص واضح':'No dedicated arrangement',
    'مناسبة وتتم صيانتها':'Suitable and maintained','تحتاج إلى تحسين':'Needs improvement','غير مناسبة':'Not suitable','غير منطبق':'Not applicable',
    'محمية / داخل مسارات مغلقة':'Protected / enclosed','محمية جزئيًا':'Partially protected','مكشوفة / يصعب تنظيفها':'Exposed / difficult to clean','مكشوفة':'Exposed',
    'مناسبة ومحمية':'Suitable and protected','مناسبة لكنها تحتاج إلى تحسين':'Suitable but needs improvement','غير كافية / غير مناسبة':'Insufficient / unsuitable',
    'تهوية / شفط مناسب':'Suitable ventilation/extraction','حل جزئي':'Partial solution','لا يوجد حل مناسب':'No suitable solution',
    'مناسبة':'Suitable','مناسبة جزئيًا':'Partially suitable','غير كافية':'Insufficient','غير مناسبة':'Unsuitable',
    'نعم':'Yes','جزئيًا':'Partially','لا':'No'
  }
};

const STATIC={
 ar:{
  back:'العودة للموقع',label:'الحلول الاحترافية · تقييم مطابقة المنشأة لمتطلبات التصنيع الجيد (GMP)',title:'نموذج تقييم مطابقة المنشأة لمتطلبات التصنيع الجيد (GMP)',intro:'قيّم جاهزية منشأتك ومدى مطابقة تجهيزاتها وبنيتها التحتية لمتطلبات التصنيع الجيد (GMP) وفق نوع النشاط الصناعي.',notice:'هذا تقييم فني مبدئي لجوانب التجهيز والبنية التحتية التي ترتبط بنطاق خدمات Professional Solutions، وليس شهادة مطابقة أو اعتمادًا رقابيًا. المتطلبات النهائية تعتمد على نوع النشاط والجهة المختصة والتحقق الميداني.',facility:'نوع المنشأة',process:'طبيعة التشغيل',hint:'اختر الحالة الفعلية لكل بند. «غير معروف» لا يعتبر استيفاءً ويظهر ضمن أولويات التحقق. عند اختيار «أخرى» اكتب وصف الحالة الفعلية.',result:'نتيجة تقييم جاهزية الأعمال',priorities:'أولويات التحسين والتحقق',contact:'طلب مراجعة فنية عبر واتساب',print:'طباعة النتيجة',edit:'تعديل الإجابات',resultHint:'لا تُرسل الإجابات تلقائيًا إلى خادم. يمكنك مراجعة الملخص قبل إرساله عبر واتساب',method:'منهجية وحدود التقييم | المنهجية والحدود',footer:'الحلول الاحترافية · الأردن · +962 790 390 555 · info@professionalsolutionsjo.com',dry:'تشغيل جاف',wet:'تشغيل رطب أو غسيل بالماء',cold:'تشغيل أو تخزين مبرد',both:'تشغيل رطب وتبريد',other:'أخرى',otherDetails:'اكتب التفاصيل',otherPlaceholder:'اكتب المعلومة التي لا تجدها ضمن الخيارات',addDetails:'اكتب التفاصيل',questions:'أسئلة'
 },
 en:{
  back:'Back to website',label:'Professional Solutions · GMP Facility Compliance Assessment',title:'GMP Facility Compliance Assessment',intro:'Assess your facility readiness and the alignment of its physical setup and infrastructure with Good Manufacturing Practice (GMP) requirements for your manufacturing activity.',notice:'This is a preliminary technical assessment of physical fit-out and infrastructure aspects within the scope of Professional Solutions. It is not a compliance certificate or regulatory accreditation. Final requirements depend on the activity, competent authority and site verification.',facility:'Facility type',process:'Operating conditions',hint:'Select the actual condition for each item. “Unknown” is not considered compliant and will appear among verification priorities. If you select “Other”, describe the actual condition.',result:'Facility Readiness Assessment Result',priorities:'Improvement & Verification Priorities',contact:'Request Technical Review via WhatsApp',print:'Print result',edit:'Edit answers',resultHint:'Your answers are not sent automatically to a server. Review the summary before sharing it via WhatsApp.',method:'Methodology & Limits',footer:'Professional Solutions · Jordan · +962 790 390 555 · info@professionalsolutionsjo.com',dry:'Dry operation',wet:'Wet operation or water washing',cold:'Cold operation or storage',both:'Wet operation and cooling',other:'Other',otherDetails:'Add details',otherPlaceholder:'Describe the current condition or material',addDetails:'Add details',questions:'questions'
 }
};

function ar(){return document.documentElement.lang==='ar'||document.documentElement.dir==='rtl'}
function L(){return ar()?STATIC.ar:STATIC.en}
function optionText(text){const map=ar()?ANSWERS.ar:ANSWERS.en;return map[text]||text}
function setText(sel,text){const el=document.querySelector(sel);if(el)el.textContent=text}

function syncQuestionContent(){
  const key=document.getElementById('sector')?.value||'food';
  const data=window.FACILITY_TYPES&&window.FACILITY_TYPES[key];
  if(!data)return;
  const groups=document.querySelectorAll('#questions .assessment-group');
  data.groups.forEach((g,gi)=>{
    const group=groups[gi];
    if(!group)return;
    const heading=group.querySelector('h3');
    if(heading)heading.textContent=ar()?g[1]:g[0];
    const qs=group.querySelectorAll('.assessment-question');
    g[2].forEach((q,qi)=>{
      const article=qs[qi]; if(!article)return;
      const h=article.querySelector('.q-head h4');
      const p=article.querySelector('.q-head p');
      if(h)h.textContent=ar()?q[2]:q[1];
      if(p)p.textContent=ar()?q[4]:q[3];
      const spans=article.querySelectorAll('.answers span');
      q[5].forEach((op,i)=>{if(spans[i])spans[i].textContent=optionText(op)});
      const details=article.querySelector('.other-wrap label');
      const ta=article.querySelector('.other-wrap textarea');
      if(details)details.firstChild.nodeValue=(ar()?STATIC.ar.addDetails:STATIC.en.addDetails)+' ';
      if(ta){ta.placeholder=ar()?STATIC.ar.otherPlaceholder:STATIC.en.otherPlaceholder;ta.setAttribute('aria-label',ar()?STATIC.ar.otherDetails:STATIC.en.otherDetails)}
    });
  });
  const progress=document.getElementById('progress-text');
  if(progress)progress.textContent=`${document.querySelectorAll('#questions .assessment-question').length} ${L().questions}`;
}

function syncStatic(){
 const s=L();
 setText('.assessment-nav a[href="index.html"]',s.back);
 setText('.intro .label',s.label);setText('.intro h1',s.title);setText('.intro>p',s.intro);setText('.notice',s.notice);
 const labels=document.querySelectorAll('.settings>label');
 if(labels[0])labels[0].childNodes[0].nodeValue=s.facility+' ';
 if(labels[1])labels[1].childNodes[0].nodeValue=s.process+' ';
 const p=document.getElementById('process');
 if(p){[['dry','dry'],['wet','wet'],['cold','cold'],['both','both']].forEach(([v,k])=>{const o=p.querySelector(`option[value="${v}"]`);if(o)o.textContent=s[k]})}
 setText('#questionnaire .hint',s.hint);setText('#assessment-form .action',ar()?'عرض النتيجة':'View results');
 setText('#result-title',s.result);setText('#result>h3',s.priorities);setText('#contact-result',s.contact);setText('#print-result',s.print);setText('#edit-result',s.edit);setText('#result>.hint',s.resultHint);
 const d=document.querySelector('details.panel');if(d){setText('details.panel summary',s.method);const ps=d.querySelectorAll('p');if(ps[0])ps[0].textContent=ar()?'يعتمد النموذج على نوع المنشأة وطبيعة التشغيل ويقيّم فقط جوانب التجهيز التي ترتبط بخدمات Professional Solutions. لا يقيس إجراءات التشغيل أو أنظمة الجودة أو التوثيق أو التتبع أو الاستدعاء أو الاعتماد. النتيجة مؤشر أولي لتحديد الأولويات وليست نسبة مطابقة GMP.':'The model uses the facility type and operating conditions and evaluates only physical fit-out aspects related to Professional Solutions services. It does not assess operating procedures, quality systems, documentation, traceability, recalls or accreditation. The result is an initial prioritization indicator, not a GMP compliance percentage.';if(ps[1])ps[1].textContent=ar()?'المراجع تشمل الأدلة المنشورة من المؤسسة العامة للغذاء والدواء الأردنية، بما في ذلك دليل ممارسات التصنيع الجيد والشروط الصحية العامة لترخيص المعامل والمصانع الغذائية، إضافة إلى المراجع الدولية المناسبة لنوع النشاط. يجب مراجعة أحدث متطلبات الجهة المختصة قبل التصميم النهائي أو التنفيذ.':'References include guidance published by the Jordan Food and Drug Administration, including GMP guidance and general health conditions for licensing food factories, together with international references appropriate to the activity. The latest requirements of the competent authority should be reviewed before final design or execution.'}
 setText('.assessment-footer',s.footer);document.title=ar()? 'نموذج تقييم مطابقة المنشأة لمتطلبات التصنيع الجيد (GMP) | Professional Solutions':'GMP Facility Compliance Assessment | Professional Solutions';
 syncQuestionContent();
}

function apply(){setTimeout(syncStatic,0)}

document.addEventListener('DOMContentLoaded',()=>{
  const originalToggle=window.toggleAssessmentLanguage;
  if(typeof originalToggle==='function')window.toggleAssessmentLanguage=function(){originalToggle();apply()};
  const originalRender=window.renderAssessmentLanguage;
  if(typeof originalRender==='function')window.renderAssessmentLanguage=function(){originalRender();apply()};
  const q=document.getElementById('questions');if(q)new MutationObserver(apply).observe(q,{childList:true,subtree:true});
  const r=document.getElementById('result');if(r)new MutationObserver(apply).observe(r,{childList:true,subtree:true});
  apply();
});
})();

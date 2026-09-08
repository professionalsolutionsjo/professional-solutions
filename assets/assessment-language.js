(function(){
'use strict';

const ANSWER_AR={
 'Epoxy / resin':'إيبوكسي / راتنج','Porcelain / ceramic':'بورسلان / سيراميك','Concrete':'خرسانة','Other':'أخرى','غير معروف':'غير معروف',
 'Smooth washable finish':'تشطيب أملس قابل للغسل','Tiles / panels':'بلاط / ألواح','Painted surface':'سطح مطلي',
 'Floor drains with suitable slopes':'مصارف أرضية مع ميول مناسبة','Floor drains without confirmed slopes':'مصارف أرضية دون التحقق من الميول','No suitable drainage':'لا يوجد صرف مناسب',
 'Clearly separated':'منفصلة بوضوح','Partially separated':'منفصلة جزئيًا','Not separated':'غير منفصلة',
 'Dedicated organized areas':'مناطق مخصصة ومنظمة','Partially organized':'منظمة جزئيًا','No dedicated arrangement':'لا يوجد تنظيم أو تخصيص واضح',
 'Suitable and maintained':'مناسبة وتتم صيانتها','Needs improvement':'تحتاج إلى تحسين','Not suitable':'غير مناسبة','Not applicable':'غير منطبق',
 'Protected / enclosed':'محمية / داخل مسارات مغلقة','Partially protected':'محمية جزئيًا','Exposed / difficult to clean':'مكشوفة / يصعب تنظيفها','Exposed':'مكشوفة',
 'Suitable and protected':'مناسبة ومحمية','Suitable but needs improvement':'مناسبة لكنها تحتاج إلى تحسين','Insufficient / unsuitable':'غير كافية / غير مناسبة',
 'Suitable ventilation/extraction':'تهوية / شفط مناسب','Partial solution':'حل جزئي','No suitable solution':'لا يوجد حل مناسب',
 'Suitable':'مناسبة','Partially suitable':'مناسبة جزئيًا','Insufficient':'غير كافية','Unsuitable':'غير مناسبة',
 'Yes':'نعم','Partially':'جزئيًا','No':'لا','Seamless sheet':'صفائح متصلة ومحكمة'
};
const ANSWER_EN={};Object.keys(ANSWER_AR).forEach(k=>{ANSWER_EN[ANSWER_AR[k]]=k});
ANSWER_EN['غير معروف']='Unknown';
ANSWER_AR['Unknown']='غير معروف';
ANSWER_EN['أخرى']='Other';
ANSWER_AR['غير منطبق']='Not applicable';
ANSWER_EN['غير منطبق']='Not applicable';

const MAP_EN={
 'متطلبات الأرضيات الصناعية والتشطيبات الصحية':'Industrial flooring and hygienic finishes',
 'متطلبات الأسطح الصحية':'Hygienic surface requirements',
 'متطلبات الصرف والميول والعزل':'Drainage, slopes and waterproofing requirements',
 'تخطيط وتقسيم مناطق التشغيل':'Production-area planning and zoning',
 'تجهيز مناطق التخزين':'Storage-area preparation',
 'التبريد والعزل وتجهيز غرف التبريد':'Cooling, insulation and cold-room preparation',
 'الأعمال الكهربائية':'Electrical works',
 'الأعمال الكهربائية والإنارة':'Electrical and lighting works',
 'HVAC والتهوية':'HVAC and ventilation',
 'تجهيز المناطق الرطبة والخدمات':'Wet-area and utility preparation',
 'التجهيزات والتشطيبات':'Fixtures and finishes',
 'الأرضيات والتشطيبات الصحية':'Flooring and hygienic finishes',
 'الأسطح الصحية':'Hygienic surfaces',
 'الصرف والعزل':'Drainage and waterproofing',
 'التخطيط وتقسيم المناطق':'Space planning and zoning',
 'فصل المواد':'Material segregation',
 'التنسيق الفني وسهولة الصيانة':'Technical coordination and maintenance access',
 'الأرضيات والتشطيبات':'Flooring and finishes',
 'تخطيط المناطق والقواطع':'Area planning and partitions',
 'تجهيز التخزين والعزل والتبريد':'Storage, insulation and cooling preparation',
 'الأرضيات الصناعية':'Industrial flooring',
 'التشطيبات الصناعية':'Industrial finishes',
 'تخطيط المساحات':'Space planning',
 'التهوية الصناعية':'Industrial ventilation',
 'الصرف والعزل':'Drainage and waterproofing',
 'التنسيق الفني':'Technical coordination'
};

function isArabic(){return document.documentElement.lang==='ar'||document.documentElement.dir==='rtl'}
function translateAnswerText(text){const s=(text||'').trim();return isArabic()?(ANSWER_AR[s]||s):(ANSWER_EN[s]||s)}
function translateOptions(){document.querySelectorAll('#questions .answers span').forEach(el=>{el.textContent=translateAnswerText(el.textContent)});document.querySelectorAll('#questions input[type=radio]').forEach(input=>{const label=input.closest('label');if(label){const span=label.querySelector('span');if(span)span.textContent=translateAnswerText(span.textContent)}})}
function translateReport(){document.querySelectorAll('#result .report-list article small').forEach(el=>{const s=el.textContent.trim();if(isArabic()){el.textContent=MAP_EN[s]?s:s}else{el.textContent=MAP_EN[s]||s}})}
function translateStatic(){
 const ar=isArabic();
 const set=(sel,a,e)=>{const el=document.querySelector(sel);if(el)el.textContent=ar?a:e};
 set('.assessment-nav a[href="index.html"]','العودة للموقع','Back to website');
 set('.intro .label','الحلول الاحترافية · تقييم مطابقة المنشأة لمتطلبات التصنيع الجيد (GMP)','Professional Solutions · GMP Facility Compliance Assessment');
 set('.intro h1','نموذج تقييم مطابقة المنشأة لمتطلبات التصنيع الجيد (GMP)','GMP Facility Compliance Assessment');
 set('.intro>p','قيّم جاهزية منشأتك ومدى مطابقة تجهيزاتها وبنيتها التحتية لمتطلبات التصنيع الجيد (GMP) وفق نوع النشاط الصناعي.','Assess your facility readiness and the alignment of its physical setup and infrastructure with Good Manufacturing Practice (GMP) requirements for your manufacturing activity.');
 set('.notice','هذا تقييم فني مبدئي لجوانب التجهيز والبنية التحتية التي ترتبط بنطاق خدمات Professional Solutions، وليس شهادة مطابقة أو اعتمادًا رقابيًا. المتطلبات النهائية تعتمد على نوع النشاط والجهة المختصة والتحقق الميداني.','This is a preliminary technical assessment of physical fit-out and infrastructure aspects within the scope of Professional Solutions. It is not a compliance certificate or regulatory accreditation. Final requirements depend on the activity, competent authority and site verification.');
 const labels=document.querySelectorAll('.settings>label');
 if(labels[0])labels[0].childNodes[0].nodeValue=ar?'نوع المنشأة':'Facility type';
 if(labels[1])labels[1].childNodes[0].nodeValue=ar?'طبيعة التشغيل':'Operating conditions';
 const p=document.querySelector('#process');
 if(p){[['dry','تشغيل جاف','Dry operation'],['wet','تشغيل رطب أو غسيل بالماء','Wet operation or water washing'],['cold','تشغيل أو تخزين مبرد','Cold operation or storage'],['both','تشغيل رطب وتبريد','Wet operation and cooling']].forEach(([v,a,e])=>{const o=p.querySelector('option[value="'+v+'"]');if(o)o.textContent=ar?a:e})}
 set('#questionnaire .hint','اختر الحالة الفعلية لكل بند. «غير معروف» لا يعتبر استيفاءً ويظهر ضمن أولويات التحقق. عند اختيار «أخرى» اكتب وصف الحالة الفعلية.','Select the actual condition for each item. “Unknown” is not considered compliant and will appear among verification priorities. If you select “Other”, describe the actual condition.');
 set('#assessment-form .action','عرض النتيجة','View results');
 set('#result-title','نتيجة تقييم جاهزية الأعمال','Facility Readiness Assessment Result');
 const rh=document.querySelector('#result>h3');if(rh)rh.textContent=ar?'أولويات التحسين والتحقق':'Improvement & Verification Priorities';
 set('#contact-result','طلب مراجعة فنية عبر واتساب','Request Technical Review via WhatsApp');
 set('#print-result','طباعة النتيجة','Print result');
 set('#edit-result','تعديل الإجابات','Edit answers');
 set('#result>.hint','لا تُرسل الإجابات تلقائيًا إلى خادم. يمكنك مراجعة الملخص قبل إرساله عبر واتساب.','Your answers are not sent automatically to a server. Review the summary before sharing it via WhatsApp.');
 const details=document.querySelector('details.panel');
 if(details){const s=details.querySelector('summary');if(s)s.textContent=ar?'منهجية وحدود التقييم | المنهجية والحدود':'Methodology & Limits';const ps=details.querySelectorAll('p');if(ps[0])ps[0].textContent=ar?'يعتمد النموذج على نوع المنشأة وطبيعة التشغيل ويقيّم فقط جوانب التجهيز التي ترتبط بخدمات Professional Solutions. لا يقيس إجراءات التشغيل أو أنظمة الجودة أو التوثيق أو التتبع أو الاستدعاء أو الاعتماد. النتيجة مؤشر أولي لتحديد الأولويات وليست نسبة مطابقة GMP.':'The model uses the facility type and operating conditions and evaluates only physical fit-out aspects related to Professional Solutions services. It does not assess operating procedures, quality systems, documentation, traceability, recalls or accreditation. The result is an initial prioritization indicator, not a GMP compliance percentage.';if(ps[1])ps[1].textContent=ar?'المراجع تشمل الأدلة المنشورة من المؤسسة العامة للغذاء والدواء الأردنية، بما في ذلك دليل ممارسات التصنيع الجيد والشروط الصحية العامة لترخيص المعامل والمصانع الغذائية، إضافة إلى المراجع الدولية المناسبة لنوع النشاط. يجب مراجعة أحدث متطلبات الجهة المختصة قبل التصميم النهائي أو التنفيذ.':'References include guidance published by the Jordan Food and Drug Administration, including GMP guidance and general health conditions for licensing food factories, together with international references appropriate to the activity. The latest requirements of the competent authority should be reviewed before final design or execution.'}
 set('.assessment-footer','الحلول الاحترافية · الأردن · +962 790 390 555 · info@professionalsolutionsjo.com','Professional Solutions · Jordan · +962 790 390 555 · info@professionalsolutionsjo.com');
 document.title=ar?'نموذج تقييم مطابقة المنشأة لمتطلبات التصنيع الجيد (GMP) | Professional Solutions':'GMP Facility Compliance Assessment | Professional Solutions';
 translateOptions();translateReport();
}
function apply(){setTimeout(translateStatic,0)}
function observe(){const q=document.getElementById('questions');if(q)new MutationObserver(apply).observe(q,{childList:true,subtree:true});const r=document.getElementById('result');if(r)new MutationObserver(apply).observe(r,{childList:true,subtree:true});const p=document.getElementById('process');if(p)p.addEventListener('change',apply);}

document.addEventListener('DOMContentLoaded',()=>{observe();apply();const original=window.toggleAssessmentLanguage;if(typeof original==='function'){window.toggleAssessmentLanguage=function(){original();apply()}}const originalRender=window.renderAssessmentLanguage;if(typeof originalRender==='function'){window.renderAssessmentLanguage=function(){originalRender();apply()}}});
})();

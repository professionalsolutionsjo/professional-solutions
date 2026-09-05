'use strict';
// International facility guidance only. These are not Jordanian regulatory rules.
const questions = [
  {id:'layout', group:'المساحات ومسارات الحركة', text:'هل تسمح المساحة بالحركة والوصول للتنظيف دون تكدس؟', work:'مراجعة توزيع المساحات ومسارات الحركة وتجهيز مناطق العمل.'},
  {id:'separation', group:'المساحات ومسارات الحركة', sectors:['food'], text:'هل توزيع المناطق يحد من تداخل المواد الخام والمنتج الجاهز؟', work:'دراسة فصل مناطق المواد الخام عن المنتج الجاهز ومساراتها.'},
  {id:'cosmetic-space', group:'المساحات ومسارات الحركة', sectors:['cosmetics'], text:'هل ترتيب التصنيع والتعبئة والتخزين يتيح العمل والتنظيف دون ازدحام؟', work:'إعادة توزيع مناطق التصنيع والتعبئة والتخزين.'},
  {id:'floor', group:'الأسطح والتشطيبات', text:'هل الأرضيات سليمة وسهلة التنظيف وملائمة لطبيعة التشغيل؟', work:'تقييم إصلاح الأرضيات واختيار نظام تشطيب مناسب؛ الإيبوكسي أحد الخيارات وليس متطلبًا عامًا.'},
  {id:'walls', group:'الأسطح والتشطيبات', text:'هل الجدران والأسقف سليمة وقابلة للتنظيف دون تقشر؟', work:'معالجة الأسطح والفواصل وتجديد التشطيبات المناسبة للنشاط.'},
  {id:'condensation', group:'الأسطح والتشطيبات', text:'هل الأسقف والتمديدات خالية من تسرب أو تكاثف قد يسقط على مناطق العمل؟', work:'فحص مسببات التسرب والتكاثف وتحديد أعمال العزل أو تعديل التمديدات.'},
  {id:'drainage', group:'الصرف والعزل', processes:['wet','both'], text:'هل تصرف المياه دون تجمع على أرضيات مناطق التشغيل الرطبة؟', work:'دراسة الميول والصرف والعزل وفق استخدام المنطقة.'},
  {id:'air', group:'التهوية والإنارة', text:'هل التهوية ملائمة للحرارة والرطوبة والروائح الناتجة عن التشغيل؟', work:'دراسة احتياجات التهوية والتكييف وتوزيع الهواء.'},
  {id:'light', group:'التهوية والإنارة', text:'هل الإنارة كافية لأعمال التشغيل والتنظيف؟', work:'تقييم توزيع الإنارة وتحسين مستوياتها حسب العمل.'},
  {id:'store', group:'تجهيز التخزين والخدمات', text:'هل مساحة التخزين وتجهيزها تسمح بترتيب المواد والوصول للتنظيف؟', work:'تخطيط مساحة التخزين وتجهيز الأرفف والممرات المناسبة.'},
  {id:'cold', group:'تجهيز التخزين والخدمات', processes:['cold','both'], sectors:['food'], text:'هل مناطق التخزين المبرد مجهزة للحفاظ على الظروف التي يحتاجها المنتج؟', work:'مراجعة احتياجات تجهيز التبريد والعزل؛ لا يشمل ذلك مراقبة الأداء أو اعتماد النظام.'},
  {id:'wash', group:'تجهيز التخزين والخدمات', sectors:['food','cosmetics'], text:'هل توجد مرافق مناسبة لغسل اليدين وخدمات صحية مجهزة؟', work:'مراجعة مواقع وتجهيز مرافق غسل اليدين والخدمات الصحية.'}
];
const $ = id => document.getElementById(id);
const answers = [['yes','متوفر'],['partial','متوفر جزئيًا'],['no','غير متوفر'],['unknown','لا أعرف'],['na','لا ينطبق']];
let active = [];
function eligible(sector, process) { return questions.filter(q=>(!q.sectors||q.sectors.includes(sector))&&(!q.processes||q.processes.includes(process))); }
function calculate(items, values) {
  const relevant = items.filter(q=>values[q.id]!=='na');
  const known = relevant.filter(q=>['yes','partial','no'].includes(values[q.id]));
  const points = known.reduce((n,q)=>n+(values[q.id]==='yes'?1:values[q.id]==='partial'?0.5:0),0);
  return {score:known.length?Math.round(points/known.length*100):null,known:known.length,total:items.length,unknown:relevant.length-known.length,excluded:items.length-relevant.length};
}
function values(){return Object.fromEntries(new FormData($('assessment-form')));}
function updateProgress(){const v=values();const n=active.filter(q=>v[q.id]).length;$('progress').max=active.length;$('progress').value=n;$('progress-text').textContent=`${n} من ${active.length} سؤالًا`;$('result').hidden=true;$('form-error').textContent='';}
function updateContact(){const text=`السلام عليكم، أود مراجعة احتياجات تجهيز منشأة: ${$('sector').selectedOptions[0].textContent}، والمتطلبات الفنية المرتبطة بـ${$('authority').value}.`;$('regulatory-contact').href='https://wa.me/962790390555?text='+encodeURIComponent(text);}
function render(){
  active=eligible($('sector').value,$('process').value);
  $('questions').replaceChildren();
  let group='';
  active.forEach((q,i)=>{
    if(q.group!==group){const h=document.createElement('h2');h.textContent=q.group;$('questions').append(h);group=q.group;}
    const field=document.createElement('fieldset');field.className='question';
    const legend=document.createElement('legend');legend.textContent=`${i+1}. ${q.text}`;field.append(legend);
    const row=document.createElement('div');row.className='answers';
    answers.forEach(([value,label])=>{const l=document.createElement('label');const input=document.createElement('input');input.type='radio';input.name=q.id;input.value=value;input.required=true;l.append(input,document.createTextNode(label));row.append(l);});
    field.append(row);$('questions').append(field);
  });
  updateMode();updateProgress();
}
function updateMode(){const regulatory=$('basis').value==='jordan';$('regulatory').hidden=!regulatory;$('questionnaire').hidden=regulatory;document.querySelectorAll('#questions input').forEach(x=>x.disabled=regulatory);$('result').hidden=true;updateContact();}
$('sector').addEventListener('change',render);$('process').addEventListener('change',render);$('basis').addEventListener('change',updateMode);$('authority').addEventListener('change',updateContact);$('questions').addEventListener('change',updateProgress);
$('assessment-form').addEventListener('submit',event=>{
  event.preventDefault();if($('basis').value==='jordan')return;
  const v=values();if(active.some(q=>!v[q.id])){$('form-error').textContent='أجب عن جميع الأسئلة قبل عرض النتيجة.';return;}
  const stats=calculate(active,v);$('summary').replaceChildren();
  const heading=document.createElement('p');heading.className='score';heading.textContent=$('sector').value==='other'?'مراجعة تجهيز عامة':stats.score===null?'لا تتوفر إجابات كافية':`${stats.score}% مؤشر تجهيز مبدئي`;
  const info=document.createElement('p');info.textContent=`بناءً على ${stats.known} إجابة محددة من ${stats.total}. غير معروف: ${stats.unknown}. لا ينطبق: ${stats.excluded}. المؤشر لا يمثل نسبة مطابقة للتصنيع الجيد (GMP) أو موافقة أي جهة رقابية.`;
  const warning=document.createElement('p');warning.textContent='حتى لو كان المؤشر 100%، لا يؤكد ذلك المطابقة. البنود غير المعروفة أو المستبعدة تحتاج مراجعة، وقد تكون مؤثرة في سلامة التجهيز.';
  $('summary').append(heading,info,warning);$('recommendations').replaceChildren();
  const gaps=active.filter(q=>v[q.id]!=='yes');
  gaps.forEach(q=>{const li=document.createElement('li');const prefix={no:'تحسين مطلوب',partial:'استكمال مطلوب',unknown:'تحقق ميداني',na:'تأكيد عدم الانطباق'}[v[q.id]];li.textContent=`${prefix}: ${q.work}`;$('recommendations').append(li);});
  if(!gaps.length){const li=document.createElement('li');li.textContent='لم تُبلغ عن نقص في البنود المعروضة. يلزم تحقق ميداني ومراجعة المتطلبات الكاملة الخاصة بنشاطك.';$('recommendations').append(li);}
  const message=`السلام عليكم، أود طلب زيارة لتجهيز ${$('sector').selectedOptions[0].textContent}.\n${heading.textContent}\n${info.textContent}\nالأعمال المقترحة:\n${gaps.map(q=>'- '+q.work).join('\n')||'مراجعة التجهيز ميدانيًا.'}`;
  $('contact-result').href='https://wa.me/962790390555?text='+encodeURIComponent(message);$('result').hidden=false;$('result').focus();
});
$('print-result').addEventListener('click',()=>window.print());$('edit-result').addEventListener('click',()=>{$('result').hidden=true;$('questions input').focus();});render();

/* Professional Solutions — GMP Assessment Engine */
'use strict';
(function(){
  const $=id=>document.getElementById(id);
  const lang=()=>document.documentElement.lang==='en'?'en':'ar';
  const text=(ar,en)=>lang()==='en'?en:ar;
  const sectors={
    food:['تصنيع الأغذية','Food Manufacturing'],cosmetics:['مستحضرات التجميل','Cosmetics'],pharma:['الأدوية','Pharmaceuticals'],supplements:['المكملات الغذائية','Food Supplements'],medical:['الأجهزة الطبية','Medical Devices'],warehouse:['المستودعات','Warehouses'],general:['منشأة تصنيع أخرى','Other Manufacturing']
  };
  const base=[
    ['التخطيط ومسارات الحركة','Facility Planning & Flow','هل ترتيب مناطق الاستلام والتخزين والإنتاج والتعبئة والمنتج النهائي منطقي؟','Are receiving, storage, production, packaging and finished-product areas logically arranged?',5,1],
    ['مسارات العاملين والمواد','Personnel & Material Flow','هل مسارات العاملين والمواد تقلل التقاطعات ومخاطر التلوث؟','Do personnel and material routes reduce cross-traffic and contamination risks?',5,1],
    ['الفصل بين المناطق','Zoning & Separation','هل الأنشطة والمناطق غير المتوافقة مفصولة عند الحاجة؟','Are incompatible activities and areas separated where required?',5,1],
    ['الأرضيات','Floors','هل الأرضيات متينة وسهلة التنظيف وغير ماصة عند الحاجة؟','Are floors durable, cleanable and non-absorbent where required?',3,0],
    ['الجدران والأسقف','Walls & Ceilings','هل الجدران والأسقف مغلقة وقابلة للتنظيف وتقلل تجمع الغبار؟','Are walls and ceilings sealed, cleanable and designed to reduce dust?',3,0],
    ['المياه والصرف','Water & Drainage','هل المياه والمصارف مناسبة للعملية وسهلة التنظيف؟','Are water systems and drains suitable and cleanable?',5,1],
    ['التكييف والتهوية','HVAC & Ventilation','هل التهوية والتكييف مناسبان للأحمال والظروف المطلوبة؟','Are HVAC and ventilation suitable for process loads and conditions?',5,1],
    ['حركة الهواء','Airflow Control','هل حركة الهواء تقلل انتقال الملوثات من المناطق الأقل نظافة؟','Does airflow reduce movement of contamination from less-clean areas?',5,1],
    ['الأعمال الكهربائية والإنارة','Electrical & Lighting','هل التوزيع الكهربائي والإنارة والحماية مناسبة لبيئة التشغيل؟','Are electrical distribution, lighting and protection suitable?',3,0],
    ['الأبواب والفتحات','Doors & Openings','هل الأبواب والفتحات محكمة وسهلة التنظيف ومناسبة للتقسيم؟','Are doors and openings sealed, cleanable and suitable for zoning?',3,0],
    ['التخزين والمناولة','Storage & Handling','هل مناطق التخزين والرفوف والمناولة مناسبة للمواد؟','Are storage zones, racks and handling arrangements suitable?',3,0],
    ['الصيانة والتشطيبات','Maintenance & Finishes','هل يمكن صيانة الأنظمة دون الإضرار بالتشطيبات أو الإنتاج؟','Can systems be maintained without damaging finishes or disrupting production?',3,0],
    ['التوثيق الفني','Technical Documentation','هل المخططات ومسارات الخدمات ومواقع المعدات محدثة؟','Are drawings, utility routes and equipment locations current?',1,0]
  ];
  const extras={
    food:[['التنظيف والغسيل','Cleaning & Wash-down','هل أسطح الغسيل ونقاط المياه والصرف مناسبة؟','Are wash-down surfaces, water points and drainage suitable?',5,1],['سلسلة التبريد','Cold Chain','هل تتوفر إمكانيات التبريد والتخزين المناسبة عند الحاجة؟','Are suitable cold-chain facilities available where required?',5,1]],
    supplements:[['ضبط المواد الخام','Raw Material Control','هل مناطق وزن وتحضير المواد الخام منظمة ومفصولة؟','Are weighing and raw-material preparation areas organized and separated?',5,1]],
    cosmetics:[['مناطق الوزن والتحضير','Weighing & Preparation','هل مناطق الوزن والتحضير والتعبئة مقسمة منطقيًا؟','Are weighing, preparation and filling areas logically zoned?',5,1],['مياه المنتج','Product Water','هل نظام المياه مناسب للجودة المطلوبة عند استخدامها كمكوّن؟','Is product water suitable for the required quality where used?',5,1]],
    pharma:[['المناطق المنضبطة','Controlled Areas','هل التدفقات والمناطق المنضبطة تقلل الخلط والتلوث المتبادل؟','Do controlled areas and flows minimize mix-ups and cross-contamination?',5,1],['الانتقال والعزل','Airlocks & Transitions','هل تتوفر مناطق انتقال أو عزل عند الحاجة؟','Are airlocks or controlled transitions provided where required?',5,1]],
    medical:[['التحكم البيئي','Environmental Control','هل البيئة ومسارات المواد تتناسب مع مخاطر المنتج؟','Are environmental controls and flows appropriate to product risk?',5,1]]
  };
  let questions=[];
  function build(){
    const key=$('sector').value||'general';
    questions=base.concat(extras[key]||[]);
    const root=$('questions');root.innerHTML='';
    questions.forEach((q,i)=>{
      const card=document.createElement('article');card.className='question panel';
      card.innerHTML=`<div class="question-head"><span class="q-code">${String(i+1).padStart(2,'0')}</span><h3>${text(q[0],q[1])}</h3><span class="weight">${text('الوزن','Weight')}: ${q[4]}</span></div><p>${text(q[2],q[3])}</p><div class="choices"><label><input required type="radio" name="q${i}" value="compliant"> ${text('مطابق','Compliant')}</label><label><input required type="radio" name="q${i}" value="non-compliant"> ${text('غير مطابق','Non-compliant')}</label></div><label class="details">${text('الملاحظة / الدليل','Observation / Evidence')}<textarea id="obs${i}" rows="2" placeholder="${text('أدخل الملاحظة أو الدليل','Enter observation or evidence')}"></textarea></label><label class="details">${text('الإجراء التصحيحي','Corrective Action')}<textarea id="action${i}" rows="2" placeholder="${text('الإجراء المطلوب عند عدم المطابقة','Required corrective action if non-compliant')}"></textarea></label>`;
      root.appendChild(card);
    });updateProgress();root.querySelectorAll('input').forEach(x=>x.addEventListener('change',updateProgress));
  }
  function updateProgress(){const n=questions.length;let done=0;questions.forEach((q,i)=>{if(document.querySelector(`input[name=q${i}]:checked`))done++;});$('progress').value=n?done*100/n:0;$('progress-text').textContent=`${done} / ${n}`;}
  function result(){
    let earned=0,possible=0,non=0,critical=0,rows=[];
    questions.forEach((q,i)=>{const v=document.querySelector(`input[name=q${i}]:checked`).value;const obs=$('obs'+i).value.trim();const action=$('action'+i).value.trim();possible+=q[4];if(v==='compliant')earned+=q[4];else{non++;if(q[5])critical++;rows.push({title:text(q[0],q[1]),observation:obs,action,critical:!!q[5]});}});
    const pct=Math.round(earned*100/possible*100)/100;
    const classification=critical?'غير مطابق':non?'مطابق بشروط إغلاق الملاحظات':'مطابق';
    const facility=prompt(text('أدخل اسم المنشأة لإدراجه في التحليل','Enter facility name'))||text('منشأة غير مسماة','Unnamed facility');
    const number='PS-GMP-'+new Date().getFullYear()+'-'+String(Date.now()).slice(-6);
    const data={number,facility,sector:$('sector').selectedOptions[0].textContent,process:$('process').value,date:new Date().toLocaleDateString(),earned,possible,pct,non,critical,classification,rows};
    localStorage.setItem('ps_gmp_last_assessment',JSON.stringify(data));render(data);
  }
  function render(d){
    $('summary').innerHTML=`<div class="certificate-summary"><h3>${text('شهادة تحليل وتقييم GMP','GMP Analysis Certificate')}</h3><p><b>${text('رقم التحليل','Analysis No.')}</b>: ${d.number}</p><p><b>${text('المنشأة','Facility')}</b>: ${d.facility}</p><p><b>${text('نوع المنشأة','Facility type')}</b>: ${d.sector}</p><p><b>${text('التاريخ','Date')}</b>: ${d.date}</p><p><b>${text('نسبة المطابقة','Compliance')}</b>: ${d.pct}%</p><p><b>${text('التصنيف','Classification')}</b>: ${d.classification}</p><p>${text('عدد البنود غير المطابقة','Non-compliant items')}: ${d.non} | ${text('الحالات الحرجة','Critical')}: ${d.critical}</p><h4>${text('الملاحظات والإجراءات التصحيحية','Findings and corrective actions')}</h4>${d.rows.length?'<ol>'+d.rows.map(r=>`<li><b>${r.title}</b>${r.critical?' — '+text('حرج','Critical'):''}<br>${r.observation||text('لم يتم إدخال ملاحظة','No observation entered')}<br>${text('الإجراء','Action')}: ${r.action||text('يحدد بعد المراجعة','To be determined after review')}</li>`).join('')+'</ol>':'<p>'+text('لا توجد حالات غير مطابقة مسجلة.','No non-compliant items recorded.')+'</p>'}<p class="disclaimer">${text('هذه شهادة تحليل مهني صادرة عن Professional Solutions ولا تمثل اعتمادًا أو شهادة GMP رسمية من الجهة الرقابية المختصة.','This professional analysis certificate is issued by Professional Solutions and is not an official regulatory GMP certificate.')}</p></div>`;
    $('result').hidden=false;$('questionnaire').style.display='none';$('result').focus();
    $('recommendations').innerHTML='';if(d.non){const li=document.createElement('li');li.textContent=text('إغلاق جميع حالات عدم المطابقة وتوثيق الأدلة وإعادة المراجعة.','Close all non-conformities, document evidence and conduct a follow-up review.');$('recommendations').appendChild(li);}else{const li=document.createElement('li');li.textContent=text('الاحتفاظ بالأدلة وتطبيق برنامج مراجعة دورية.','Retain evidence and implement a periodic review program.');$('recommendations').appendChild(li);}
    $('contact-result').href='https://wa.me/962790390555?text='+encodeURIComponent(text('أرغب بطلب مراجعة تحليل GMP رقم ','I would like to request a review of GMP analysis number ')+d.number);
  }
  $('assessment-form').addEventListener('submit',e=>{e.preventDefault();if(!$('assessment-form').checkValidity()){$('form-error').textContent=text('يرجى الإجابة عن جميع البنود.','Please answer all items.');return;}result();});
  $('sector').innerHTML=Object.entries(sectors).map(([k,v])=>`<option value="${k}">${text(v[0],v[1])}</option>`).join('');
  $('process').innerHTML=`<option value="normal">${text('تشغيل عادي','Normal operation')}</option><option value="controlled">${text('تشغيل منضبط','Controlled operation')}</option><option value="wet">${text('تشغيل رطب','Wet process')}</option><option value="temperature">${text('تشغيل بدرجات حرارة مضبوطة','Temperature-controlled')}</option>`;
  $('sector').addEventListener('change',build);$('print-result').addEventListener('click',()=>window.print());$('edit-result').addEventListener('click',()=>{$('result').hidden=true;$('questionnaire').style.display='block';});
  build();
})();
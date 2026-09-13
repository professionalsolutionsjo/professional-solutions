document.addEventListener('DOMContentLoaded',()=>setTimeout(()=>{
 const app=document.getElementById('app');
 const section=app&&app.querySelector('.trade-service-upgrade');
 if(!section||document.querySelector('.mechanical-extra'))return;
 const hero=section.querySelector('.trade-service-hero img');
 if(hero){hero.src='https://upload.wikimedia.org/wikipedia/commons/6/68/Mechanical_room.jpg';hero.removeAttribute('loading');}
 const extra=document.createElement('div');extra.className='mechanical-extra';
 extra.innerHTML=`
 <section class="mechanical-scope"><div class="label" data-en="MECHANICAL SCOPE" data-ar="نطاق الأعمال الميكانيكية">MECHANICAL SCOPE</div><h2 class="title" data-en="Complete mechanical systems, coordinated from planning to handover." data-ar="أنظمة ميكانيكية متكاملة، من التخطيط حتى التسليم.">Complete mechanical systems, coordinated from planning to handover.</h2><div class="mechanical-scope-grid">
 <article><h3 data-en="Water & Plumbing" data-ar="المياه والأعمال الصحية">Water & Plumbing</h3><p data-en="Water supply, valves, fixtures and service connections planned around actual facility use." data-ar="تغذية المياه والصمامات والتجهيزات ونقاط الخدمة وفق الاستخدام الفعلي للمنشأة.">Water supply, valves, fixtures and service connections planned around actual facility use.</p></article>
 <article><h3 data-en="Drainage Systems" data-ar="أنظمة الصرف">Drainage Systems</h3><p data-en="Drainage routes, slopes, floor drains and wet-area connections coordinated before finishes." data-ar="مسارات الصرف والميول والمصارف الأرضية وتوصيلات المناطق الرطبة مع تنسيقها قبل التشطيبات.">Drainage routes, slopes, floor drains and wet-area connections coordinated before finishes.</p></article>
 <article><h3 data-en="Pumps & Tanks" data-ar="المضخات والخزانات">Pumps & Tanks</h3><p data-en="Connections and service arrangements for pumps, tanks and supporting equipment where required." data-ar="توصيلات وترتيبات الخدمة للمضخات والخزانات والمعدات المساندة عند الحاجة.">Connections and service arrangements for pumps, tanks and supporting equipment where required.</p></article>
 <article><h3 data-en="Equipment Connections" data-ar="توصيلات المعدات">Equipment Connections</h3><p data-en="Mechanical utilities coordinated around equipment locations, access and operating requirements." data-ar="تنسيق الخدمات الميكانيكية حول مواقع المعدات ومتطلبات التشغيل وسهولة الوصول.">Mechanical utilities coordinated around equipment locations, access and operating requirements.</p></article>
 </div></section>
 <section class="mechanical-gallery"><div class="label" data-en="MECHANICAL ENVIRONMENT" data-ar="البيئة الميكانيكية">MECHANICAL ENVIRONMENT</div><div class="mechanical-gallery-grid"><img src="images/hvac/hvac-02.jpg" alt="Mechanical and HVAC system"><img src="images/hvac/hvac-03.jpg" alt="Mechanical services"><img src="images/hvac/hvac-04.jpg" alt="HVAC equipment"></div></section>
 <section class="mechanical-cta"><div><div class="label" data-en="PLAN YOUR PROJECT" data-ar="خطط لمشروعك">PLAN YOUR PROJECT</div><h2 data-en="Let us coordinate the mechanical scope with the complete project." data-ar="دعنا ننسق الأعمال الميكانيكية ضمن المشروع المتكامل.">Let us coordinate the mechanical scope with the complete project.</h2></div><div class="mechanical-actions"><a class="btn primary" href="index.html#contact" data-en="Contact Us →" data-ar="تواصل معنا ←">Contact Us →</a><a class="btn outline" href="tel:+962790390555" data-en="Call +962 79 039 0555" data-ar="اتصل +962 79 039 0555">Call +962 79 039 0555</a></div></section>`;
 app.appendChild(extra);
 if(typeof applyLanguage==='function')applyLanguage();
},80));

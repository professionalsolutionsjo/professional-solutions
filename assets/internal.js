const params=new URLSearchParams(window.location.search);
const urlLanguage=params.get('lang');
let currentLanguage=urlLanguage==='ar'||urlLanguage==='en'?urlLanguage:'en';
if(urlLanguage==='ar'||urlLanguage==='en')localStorage.setItem('ps-language',urlLanguage);
const cleanText=v=>(v||'').replace('أس surfaces','أسطح');

function applyLanguage(){
  document.querySelectorAll('[data-en]').forEach(el=>{
    const v=el.getAttribute(currentLanguage==='en'?'data-en':'data-ar');
    if(v!==null)el.textContent=cleanText(v);
  });
  document.documentElement.lang=currentLanguage;
  document.documentElement.dir=currentLanguage==='ar'?'rtl':'ltr';
  document.body.classList.toggle('ar',currentLanguage==='ar');
  const b=document.getElementById('langBtn');
  if(b)b.textContent=currentLanguage==='en'?'العربية':'EN';
  applyProcessCopy();
}

function applyProcessCopy(){
  const process=document.querySelector('.process');
  if(!process)return;
  const title=process.querySelector('h2');
  if(title)title.textContent=currentLanguage==='ar'
    ?'نعمل بمنهجية واضحة تبدأ بفهم احتياجات المشروع وتنتهي بمنشأة مكتملة وجاهزة للاستخدام.'
    :'A clear process that starts with understanding your requirements and ends with a finished, ready-to-use environment.';
  const items=currentLanguage==='ar' ? [
    ['نفهم','نفهم النشاط والاحتياجات والأولويات والميزانية.'],
    ['نخطط','نحوّل الاحتياجات إلى مخطط عملي ونطاق عمل واضح.'],
    ['نصمم','نطوّر التصميم والخامات والتفاصيل الفنية المناسبة.'],
    ['ننّفذ','ننفذ الأعمال بتنسيق دقيق ومتابعة مستمرة للجودة.'],
    ['نسلّم','نسلّم منشأة مكتملة وجاهزة للاستخدام وفق نطاق المشروع.']
  ] : [
    ['Understand','We understand the activity, needs, priorities and budget.'],
    ['Plan','We turn requirements into a clear plan and scope of work.'],
    ['Design','We develop the design, materials and technical details.'],
    ['Execute','We deliver coordinated works with focused quality control.'],
    ['Handover','We hand over a finished, ready-to-use environment within the agreed scope.']
  ];
  process.querySelectorAll('.feature').forEach((el,i)=>{
    if(!items[i])return;
    const h=el.querySelector('h3'),p=el.querySelector('p');
    if(h)h.textContent=items[i][0];
    if(p)p.textContent=items[i][1];
  });
}

function withLanguage(url){
  try{
    const u=new URL(url,window.location.href);
    if(u.origin!==window.location.origin)return url;
    u.searchParams.set('lang',currentLanguage);
    return u.pathname+u.search+u.hash;
  }catch(e){return url}
}

function syncLanguageLinks(){
  document.querySelectorAll('a[href]').forEach(a=>{
    const href=a.getAttribute('href');
    if(!href||href.startsWith('#')||href.startsWith('mailto:')||href.startsWith('tel:')||href.startsWith('javascript:'))return;
    try{
      if(new URL(href,window.location.href).origin===window.location.origin)a.setAttribute('href',withLanguage(href));
    }catch(e){}
  });
}

function toggleLanguage(){
  currentLanguage=currentLanguage==='en'?'ar':'en';
  localStorage.setItem('ps-language',currentLanguage);
  const u=new URL(window.location.href);
  u.searchParams.set('lang',currentLanguage);
  history.replaceState({},'',u.pathname+u.search+u.hash);
  applyLanguage();
  syncLanguageLinks();
}

function forceVideoAutoplay(){
  document.querySelectorAll('video').forEach(video=>{
    video.muted=true;
    video.setAttribute('muted','');
    video.setAttribute('playsinline','');
    video.setAttribute('autoplay','');
    const play=()=>{const p=video.play();if(p&&typeof p.catch==='function')p.catch(()=>{});};
    if(video.readyState>=2)play();
    video.addEventListener('loadedmetadata',play,{once:true});
    video.addEventListener('canplay',play,{once:true});
    document.addEventListener('visibilitychange',()=>{if(!document.hidden&&video.paused)play();});
  });
}

function imageError(img){
  img.classList.add('missing');
  const s=img.closest('.shot');
  if(s)s.style.display='none';
}

function setupHomepageReferenceDesign(){
  const isHome=window.location.pathname.endsWith('/')||window.location.pathname.endsWith('/index.html')||window.location.pathname==='/index.html';
  if(!isHome)return;
  const links=document.querySelector('.navlinks');
  if(links){
    links.innerHTML=''+
      '<li><a class="active" href="index.html" data-en="Home" data-ar="الرئيسية">Home</a></li>'+
      '<li><a href="#about" data-en="About Us" data-ar="من نحن">About Us</a></li>'+
      '<li><a href="#solutions" data-en="Our Services" data-ar="خدماتنا">Our Services</a></li>'+
      '<li><a href="#projects" data-en="Projects" data-ar="المشاريع">Projects</a></li>'+
      '<li><a href="facility-assessment.html?lang=en" data-en="GMP" data-ar="GMP">GMP</a></li>'+
      '<li><a href="#contact" data-en="Contact Us" data-ar="تواصل معنا">Contact Us</a></li>'+
      '<li class="language"><button class="lang" id="langBtn" onclick="toggleLanguage()">العربية</button></li>'+
      '<li class="quote-item"><a class="quote-btn" href="#contact" data-en="Get a Quote" data-ar="اطلب عرض سعر">Get a Quote</a></li>';
  }
}

document.addEventListener('DOMContentLoaded',()=>{
  document.querySelectorAll('[data-year]').forEach(e=>e.textContent=new Date().getFullYear());
  document.querySelectorAll('a.card').forEach(a=>{
    const img=a.querySelector('img');
    const t=(a.textContent||'').toLowerCase();
    const src=img?(img.getAttribute('src')||'').toLowerCase():'';
    if(t.includes('insulation')||t.includes('العزل')||src.includes('/insulation/'))a.setAttribute('href','insulation-solutions.html');
  });
  setupHomepageReferenceDesign();
  applyLanguage();
  syncLanguageLinks();
  forceVideoAutoplay();
});

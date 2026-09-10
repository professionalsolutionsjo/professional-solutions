const urlLanguage=new URLSearchParams(window.location.search).get('lang');
let currentLanguage=urlLanguage==='ar'||urlLanguage==='en'?urlLanguage:(localStorage.getItem('ps-language')==='ar'?'ar':'en');
if(urlLanguage==='ar'||urlLanguage==='en')localStorage.setItem('ps-language',urlLanguage);
const cleanText=v=>(v||'').replace('أس surfaces','أسطح');
function applyLanguage(){
  document.querySelectorAll('[data-en]').forEach(el=>{
    const v=el.getAttribute(currentLanguage==='en'?'data-en':'data-ar');
    if(v!==null) el.textContent=cleanText(v);
  });
  document.documentElement.lang=currentLanguage;
  document.documentElement.dir=currentLanguage==='ar'?'rtl':'ltr';
  document.body.classList.toggle('ar',currentLanguage==='ar');
  const b=document.getElementById('langBtn');
  if(b)b.textContent=currentLanguage==='en'?'العربية':'EN';
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
    try{if(new URL(href,window.location.href).origin===window.location.origin)a.setAttribute('href',withLanguage(href));}catch(e){}
  });
}
function toggleLanguage(){
  currentLanguage=currentLanguage==='en'?'ar':'en';
  localStorage.setItem('ps-language',currentLanguage);
  applyLanguage();
  syncLanguageLinks();
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
      '<li class="language"><span class="globe" aria-hidden="true">◎</span><button class="lang" id="langBtn" onclick="toggleLanguage()">العربية</button><span class="chevron" aria-hidden="true">⌄</span></li>'+
      '<li class="quote-item"><a class="quote-btn" href="#contact" data-en="Get a Quote" data-ar="اطلب عرض سعر">Get a Quote</a></li>';
  }
  const copy=document.querySelector('.hero-copy');
  if(copy){
    copy.innerHTML=''+
      '<div class="eyebrow" data-en="SMART LUXURY" data-ar="SMART LUXURY">SMART LUXURY</div>'+
      '<h1 data-en="Design Today" data-ar="صمّم اليوم">Design Today</h1>'+
      '<h2 data-en="A Better Tomorrow" data-ar="لغدٍ أفضل">A Better Tomorrow</h2>'+
      '<p data-en="Integrated solutions in design, execution, fit-out, custom furniture, HVAC, signage and turnkey projects." data-ar="حلول متكاملة في التصميم والتنفيذ والتجهيز والأثاث المخصص والتكييف والتهوية واللوحات والمشاريع المتكاملة.">Integrated solutions in design, execution, fit-out, custom furniture, HVAC, signage and turnkey projects.</p>'+
      '<div class="hero-actions"><a class="hero-btn primary" href="#solutions" data-en="Our Services →" data-ar="خدماتنا ←">Our Services →</a><a class="hero-btn video-link" href="#projects" data-en="Watch Video" data-ar="شاهد الفيديو"><span class="play-icon">▶</span> Watch Video</a></div>';
  }
  const sig=document.querySelector('.hero-signature');
  if(sig){
    sig.innerHTML=''+
      '<div class="benefit"><span class="benefit-icon">▦</span><div><strong data-en="Innovative Design" data-ar="تصميم مبتكر">Innovative Design</strong><small data-en="Spaces that inspire" data-ar="مساحات تلهمك">Spaces that inspire</small></div></div>'+
      '<div class="benefit"><span class="benefit-icon">⚙</span><div><strong data-en="Quality Execution" data-ar="تنفيذ بجودة عالية">Quality Execution</strong><small data-en="Built to last" data-ar="مصمم ليدوم">Built to last</small></div></div>'+
      '<div class="benefit"><span class="benefit-icon">✓</span><div><strong data-en="Turnkey Solutions" data-ar="حلول متكاملة">Turnkey Solutions</strong><small data-en="From concept to completion" data-ar="من الفكرة حتى التسليم">From concept to completion</small></div></div>'+
      '<div class="benefit"><span class="benefit-icon">♧</span><div><strong data-en="Trusted Partner" data-ar="شريك موثوق">Trusted Partner</strong><small data-en="Your vision, our commitment" data-ar="رؤيتك التزامنا">Your vision, our commitment</small></div></div>';
  }
  const solutions=document.querySelector('.solutions');
  if(solutions&&!solutions.querySelector('.reference-section-head')){
    const head=document.createElement('div');
    head.className='reference-section-head';
    head.innerHTML='<div><div class="label" data-en="OUR SERVICES" data-ar="خدماتنا">OUR SERVICES</div><h2 data-en="Comprehensive Solutions" data-ar="حلول متكاملة">Comprehensive Solutions</h2><p data-en="From concept to completion, we provide integrated solutions for all your space needs." data-ar="من الفكرة حتى التسليم، نقدم حلولاً متكاملة لمختلف احتياجات منشأتك.">From concept to completion, we provide integrated solutions for all your space needs.</p></div><a href="#solutions" data-en="View All Services →" data-ar="عرض جميع الخدمات ←">View All Services →</a>';
    solutions.insertBefore(head,solutions.firstElementChild);
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
});

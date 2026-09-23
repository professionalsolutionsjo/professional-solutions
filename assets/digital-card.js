(function(){
const root=document.documentElement,toggle=document.getElementById('langToggle'),gmp=document.getElementById('gmpLink');
function setLang(lang){
 root.lang=lang;root.dir=lang==='ar'?'rtl':'ltr';
 if(toggle) toggle.textContent=lang==='ar'?'EN':'AR';
 document.querySelectorAll('[data-ar][data-en]').forEach(el=>el.textContent=lang==='ar'?el.dataset.ar:el.dataset.en);
 if(gmp) gmp.href='../facility-assessment.html?lang='+lang;
 localStorage.setItem('ps-card-lang',lang)
}
setLang(localStorage.getItem('ps-card-lang')||'ar');
toggle?.addEventListener('click',()=>setLang(root.lang==='ar'?'en':'ar'));
document.getElementById('saveContact')?.addEventListener('click',()=>{
 const v=['BEGIN:VCARD','VERSION:3.0','FN:Professional Solutions','ORG:Professional Solutions','TITLE:SMART LUXURY | PLAN • DESIGN • EXECUTE','TEL;TYPE=WORK,VOICE:+962790390555','EMAIL:info@professionalsolutionsjo.com','URL:https://professionalsolutionsjo.com/','ADR;TYPE=WORK:;;Amman;Jordan;;;','END:VCARD'].join('\r\n');
 const b=new Blob([v],{type:'text/vcard;charset=utf-8'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='Professional-Solutions.vcf';a.click();setTimeout(()=>URL.revokeObjectURL(u),1000)
})
})();
const GMP_BANK={
  core:[
    {id:'zoning',domain:'التخطيط وتقسيم المناطق',enDomain:'Planning & zoning',weight:3,critical:true,service:'التخطيط والتقسيم',enService:'Planning & zoning',en:'Are raw materials, production, finished products, people, waste and service movements planned to reduce avoidable cross-flow?',ar:'هل تم تخطيط حركة المواد الأولية والإنتاج والمنتج النهائي والعاملين والمخلفات والخدمات بما يقلل تداخل المسارات الممكن تجنبه؟',evidenceEn:'Layout or flow plan',evidenceAr:'مخطط توزيع أو مسارات'},
    {id:'surfaces',domain:'التشطيبات الصحية',enDomain:'Hygienic finishes',weight:3,critical:true,service:'الأرضيات والجدران والأسقف',enService:'Floors, walls & ceilings',en:'Are floors, walls, ceilings, joints and corners suitable for practical cleaning and resistant to the operating conditions?',ar:'هل الأرضيات والجدران والأسقف والفواصل والزوايا مناسبة للتنظيف العملي ومقاومة لظروف التشغيل؟',evidenceEn:'Finish specification or site photos',evidenceAr:'مواصفات التشطيب أو صور الموقع'},
    {id:'drainage',domain:'المياه والصرف والعزل',enDomain:'Water, drainage & waterproofing',weight:3,critical:true,service:'الصرف والعزل',enService:'Drainage & waterproofing',en:'Do falls, channels, drains and waterproofing support efficient wash-water removal without persistent standing water?',ar:'هل تساعد الميول والقنوات والمصارف والعزل المائي على تصريف مياه الغسيل بكفاءة دون تجمع مستمر للمياه؟',evidenceEn:'Drainage plan or inspection',evidenceAr:'مخطط الصرف أو المعاينة'},
    {id:'air',domain:'التهوية والتكييف',enDomain:'HVAC & ventilation',weight:3,critical:true,service:'التهوية والتكييف',enService:'HVAC & ventilation',en:'Is ventilation and cooling planned around heat, moisture, odor, dust and the required production environment?',ar:'هل تم تخطيط التهوية والتبريد وفق مصادر الحرارة والرطوبة والروائح والغبار والبيئة المطلوبة للإنتاج؟',evidenceEn:'HVAC concept or equipment layout',evidenceAr:'تصور HVAC أو مخطط المعدات'},
    {id:'temp',domain:'الحرارة والرطوبة والتكاثف',enDomain:'Temperature, humidity & condensation',weight:2,critical:false,service:'التحكم البيئي',enService:'Environmental control',en:'Are temperature, humidity and condensation risks considered for production, storage and cleaning areas?',ar:'هل تمت مراعاة مخاطر الحرارة والرطوبة والتكاثف في مناطق الإنتاج والتخزين والتنظيف؟',evidenceEn:'Operating range or area schedule',evidenceAr:'نطاق التشغيل أو جدول المناطق'},
    {id:'storage',domain:'التخزين ومسارات المواد',enDomain:'Storage & material flow',weight:2,critical:false,service:'مناطق التخزين والتجهيز',enService:'Storage & facility zones',en:'Are receiving, storage, preparation and finished-product areas arranged to support orderly movement and separation where needed?',ar:'هل تم ترتيب مناطق الاستلام والتخزين والتحضير والمنتج النهائي بما يدعم الحركة المنظمة والفصل عند الحاجة؟',evidenceEn:'Storage zoning plan',evidenceAr:'مخطط تقسيم التخزين'},
    {id:'equipment',domain:'مواقع المعدات والوصول الفني',enDomain:'Equipment layout & service access',weight:2,critical:false,service:'تخطيط المعدات والوصول الفني',enService:'Equipment layout & access',en:'Are equipment positions, utilities and maintenance access coordinated without creating inaccessible cavities or damaging hygienic finishes?',ar:'هل تم تنسيق مواقع المعدات والخدمات والوصول للصيانة دون إنشاء فراغات صعبة الوصول أو إتلاف التشطيبات الصحية؟',evidenceEn:'Equipment and utility layout',evidenceAr:'مخطط المعدات والخدمات'},
    {id:'hygiene',domain:'مناطق النظافة الشخصية',enDomain:'Personnel hygiene areas',weight:2,critical:false,service:'محطات غسل وتعقيم الأيدي',enService:'Hand-wash and hygiene stations',en:'Are hand-wash, changing and hygiene-related areas located in a way that supports the planned movement and cleaning flow?',ar:'هل تم وضع مناطق غسل الأيدي وتبديل الملابس والنظافة في مواقع تدعم مسار الحركة والتنظيف المخطط؟',evidenceEn:'Hygiene-area layout',evidenceAr:'مخطط مناطق النظافة'},
    {id:'lighting',domain:'الإنارة والحماية',enDomain:'Lighting & fixture protection',weight:1,critical:false,service:'الإنارة والحماية',enService:'Lighting & protection',en:'Is task lighting adequate and are fixtures suitable for wet, dusty or sensitive areas where applicable?',ar:'هل الإنارة كافية للعمل، وهل وحدات الإنارة مناسبة للمناطق الرطبة أو المغبرة أو الحساسة عند الحاجة؟',evidenceEn:'Lighting plan or site photos',evidenceAr:'مخطط الإنارة أو صور الموقع'},
    {id:'sealing',domain:'الإغلاق وتقليل مصادر التلوث',enDomain:'Sealing & contamination control',weight:2,critical:false,service:'الإغلاق والعزل التفصيلي',enService:'Sealing & detailing',en:'Are service penetrations, gaps and difficult junctions detailed to reduce dust, moisture and cleaning problems?',ar:'هل تمت معالجة اختراقات الخدمات والفتحات ونقاط الالتقاء الصعبة لتقليل الغبار والرطوبة ومشاكل التنظيف؟',evidenceEn:'Detail drawings or inspection',evidenceAr:'تفاصيل تنفيذية أو معاينة'},
    {id:'maintenance',domain:'قابلية الصيانة',enDomain:'Maintainability',weight:1,critical:false,service:'الوصول والصيانة الفنية',enService:'Technical access & maintenance',en:'Can technical systems be accessed and maintained without repeated damage to the hygienic facility finishes?',ar:'هل يمكن الوصول إلى الأنظمة الفنية وصيانتها دون إتلاف متكرر لتشطيبات المنشأة الصحية؟',evidenceEn:'Access and maintenance zones',evidenceAr:'مناطق الوصول والصيانة'}
  ],
  sectors:{
    food:[
      {id:'food-clean',domain:'التشطيبات الصحية للغذاء',enDomain:'Food-area hygienic finishes',weight:3,critical:true,service:'التشطيبات الصحية',enService:'Hygienic finishes',en:'Are food-handling surfaces and nearby details selected for practical cleaning and resistance to moisture and routine washing?',ar:'هل تم اختيار أسطح تداول الغذاء والتفاصيل المحيطة بها بما يناسب التنظيف العملي ومقاومة الرطوبة والغسيل المعتاد؟',evidenceEn:'Finish and wash-area details',evidenceAr:'تفاصيل التشطيب ومناطق الغسيل'} ,
      {id:'food-separation',domain:'فصل المواد والمنتج',enDomain:'Raw and finished-product separation',weight:3,critical:true,service:'التقسيم ومسارات الحركة',enService:'Zoning & workflow',en:'Are raw materials, processing and finished-product movements arranged to reduce cross-contamination risks?',ar:'هل تم ترتيب حركة المواد الأولية والتصنيع والمنتج النهائي بما يقلل مخاطر التلوث التبادلي؟',evidenceEn:'Process-flow layout',evidenceAr:'مخطط مسار الإنتاج'}
    ],
    dairy:[
      {id:'dairy-wet',domain:'مناطق الإنتاج الرطب',enDomain:'Wet-production areas',weight:3,critical:true,service:'الصرف والإيبوكسي',enService:'Drainage & epoxy',en:'Do wet-process areas have cleanable finishes, suitable falls and drainage for repeated washing?',ar:'هل تمتلك مناطق الإنتاج الرطب تشطيبات قابلة للتنظيف وميولًا وصرفًا مناسبًا للغسيل المتكرر؟',evidenceEn:'Wet-area survey',evidenceAr:'معاينة المناطق الرطبة'} ,
      {id:'dairy-cold',domain:'التبريد والتخزين',enDomain:'Cooling & cold storage',weight:2,critical:false,service:'التبريد والعزل',enService:'Cooling & insulation',en:'Are cold rooms or temperature-controlled zones planned with suitable access, insulation and condensation control?',ar:'هل تم تخطيط غرف التبريد أو مناطق التحكم بالحرارة مع وصول وعزل وتحكم مناسب بالتكاثف؟',evidenceEn:'Cold-room or HVAC plan',evidenceAr:'مخطط غرفة التبريد أو HVAC'}
    ],
    bakery:[
      {id:'bakery-dust',domain:'الحرارة والغبار',enDomain:'Heat and dust control',weight:2,critical:false,service:'التهوية والتكييف',enService:'HVAC & ventilation',en:'Are heat, flour dust, moisture and cleaning requirements reflected in ventilation and space planning?',ar:'هل انعكست متطلبات الحرارة وغبار الطحين والرطوبة والتنظيف في تخطيط التهوية والمساحة؟',evidenceEn:'Ventilation concept',evidenceAr:'تصور التهوية'} ,
      {id:'bakery-flow',domain:'مسار الإنتاج',enDomain:'Production flow',weight:3,critical:true,service:'التخطيط والتقسيم',enService:'Planning & zoning',en:'Are receiving, preparation, baking, cooling, packing and storage areas arranged in a practical sequence?',ar:'هل رتبت مناطق الاستلام والتحضير والخبز والتبريد والتغليف والتخزين بتسلسل عملي؟',evidenceEn:'Production-flow layout',evidenceAr:'مخطط مسار الإنتاج'}
    ],
    pharma:[
      {id:'pharma-zones',domain:'المناطق المتحكم بها',enDomain:'Controlled areas',weight:3,critical:true,service:'التخطيط والتهوية',enService:'Planning & ventilation',en:'Are controlled areas, personnel movement, material movement and service access planned according to the process risk?',ar:'هل تم تخطيط المناطق المتحكم بها وحركة العاملين والمواد والوصول للخدمات وفق مخاطر العملية؟',evidenceEn:'Zoning and HVAC concept',evidenceAr:'تصور التقسيم وHVAC'} ,
      {id:'pharma-clean',domain:'الأسطح القابلة للتنظيف',enDomain:'Cleanable controlled surfaces',weight:3,critical:true,service:'التشطيبات الصحية',enService:'Hygienic finishes',en:'Are finishes and junctions in controlled areas detailed to support practical cleaning and reduce inaccessible dirt traps?',ar:'هل تم تفصيل التشطيبات ونقاط الالتقاء في المناطق المتحكم بها بما يدعم التنظيف العملي ويقلل تجمع الأوساخ؟',evidenceEn:'Room-finish schedule',evidenceAr:'جدول تشطيبات الغرف'}
    ],
    cosmetics:[
      {id:'cosmetics-water',domain:'المياه والرطوبة',enDomain:'Water and moisture management',weight:2,critical:false,service:'المياه والصرف والعزل',enService:'Water, drainage & waterproofing',en:'Are water points, drainage, washable finishes and moisture control aligned with the production and cleaning tasks?',ar:'هل تتوافق نقاط المياه والصرف والتشطيبات القابلة للغسيل والتحكم بالرطوبة مع مهام الإنتاج والتنظيف؟',evidenceEn:'Wet-area and drainage plan',evidenceAr:'مخطط المناطق الرطبة والصرف'} ,
      {id:'cosmetics-flow',domain:'تدفق المواد والعبوات',enDomain:'Material and packaging flow',weight:2,critical:false,service:'التخطيط والتخزين',enService:'Planning & storage',en:'Are raw materials, bulk preparation, filling and packaging areas arranged with practical separation and access?',ar:'هل رتبت مناطق المواد الأولية والتحضير والتعبئة والتغليف مع فصل ووصول عمليين؟',evidenceEn:'Layout and storage plan',evidenceAr:'مخطط التوزيع والتخزين'}
    ],
    supplements:[
      {id:'supplements-storage',domain:'تخزين المواد والمكملات',enDomain:'Supplement material storage',weight:2,critical:false,service:'التخزين والتحكم البيئي',enService:'Storage & environmental control',en:'Are material and finished-product storage zones arranged with suitable protection from heat, moisture and mix-ups?',ar:'هل رتبت مناطق تخزين المواد والمنتج النهائي مع حماية مناسبة من الحرارة والرطوبة والخلط؟',evidenceEn:'Storage zoning plan',evidenceAr:'مخطط تقسيم التخزين'} ,
      {id:'supplements-flow',domain:'مسار التحضير والتعبئة',enDomain:'Preparation and packing flow',weight:3,critical:true,service:'التقسيم ومسارات الحركة',enService:'Zoning & workflow',en:'Are preparation, filling, packing and finished-product areas arranged in a controlled practical sequence?',ar:'هل رتبت مناطق التحضير والتعبئة والتغليف والمنتج النهائي بتسلسل عملي متحكم به؟',evidenceEn:'Process-flow layout',evidenceAr:'مخطط مسار العملية'}
    ],
    medical:[
      {id:'medical-assembly',domain:'منطقة التجميع والتغليف',enDomain:'Assembly and packaging area',weight:3,critical:true,service:'التقسيم والتشطيبات',enService:'Zoning & hygienic finishes',en:'Is there a cleanable, protected assembly or packing area appropriate to the product and intended use?',ar:'هل توجد منطقة تجميع أو تغليف محمية وقابلة للتنظيف ومناسبة للمنتج والاستخدام المقصود؟',evidenceEn:'Room layout and finish schedule',evidenceAr:'مخطط الغرفة وجدول التشطيبات'} ,
      {id:'medical-storage',domain:'حماية المواد والمنتج',enDomain:'Material and product protection',weight:2,critical:false,service:'التخزين والأثاث المخصص',enService:'Storage & custom fabrication',en:'Are storage and work surfaces arranged to protect components and finished items from dust, moisture and damage?',ar:'هل رتبت مناطق التخزين والأسطح لحماية المكونات والمنتجات من الغبار والرطوبة والتلف؟',evidenceEn:'Storage and work-surface plan',evidenceAr:'مخطط التخزين والأسطح'}
    ],
    packaging:[
      {id:'packaging-dust',domain:'الغبار والأجسام الغريبة',enDomain:'Dust and foreign-material control',weight:3,critical:true,service:'التهوية والإغلاق',enService:'Ventilation & sealing',en:'Are dust sources, service penetrations and difficult-to-clean details controlled in production and packing areas?',ar:'هل تمت معالجة مصادر الغبار واختراقات الخدمات والتفاصيل صعبة التنظيف في مناطق الإنتاج والتغليف؟',evidenceEn:'Area details and HVAC concept',evidenceAr:'تفاصيل المناطق وتصور HVAC'} ,
      {id:'packaging-food',domain:'مناطق المواد الملامسة للغذاء',enDomain:'Food-contact material areas',weight:2,critical:false,service:'التقسيم والتشطيبات',enService:'Zoning & finishes',en:'Are material handling, storage and packing zones arranged to protect food-contact materials from moisture and contamination?',ar:'هل رتبت مناطق تداول وتخزين وتغليف المواد الملامسة للغذاء لحمايتها من الرطوبة والتلوث؟',evidenceEn:'Material-flow layout',evidenceAr:'مخطط حركة المواد'}
    ],
    water:[
      {id:'water-filling',domain:'منطقة التعبئة',enDomain:'Filling area',weight:3,critical:true,service:'التقسيم والتشطيبات الصحية',enService:'Zoning & hygienic finishes',en:'Is the filling and packing environment physically protected, cleanable and separated from avoidable contamination sources?',ar:'هل بيئة التعبئة والتغليف محمية ماديًا وقابلة للتنظيف وفصلت عن مصادر التلوث الممكن تجنبها؟',evidenceEn:'Filling-area layout',evidenceAr:'مخطط منطقة التعبئة'} ,
      {id:'water-drainage',domain:'المياه والصرف',enDomain:'Water and drainage',weight:3,critical:true,service:'الصرف والعزل',enService:'Drainage & waterproofing',en:'Are water movement, wash-down, drainage and waterproofing planned for the facility condition?',ar:'هل تم تخطيط حركة المياه والغسيل والصرف والعزل المائي وفق حالة المنشأة؟',evidenceEn:'Water and drainage plan',evidenceAr:'مخطط المياه والصرف'}
    ],
    warehouse:[
      {id:'warehouse-receiving',domain:'الاستلام والعزل المكاني',enDomain:'Receiving and separated storage',weight:3,critical:true,service:'التقسيم والتخزين',enService:'Zoning & storage',en:'Are receiving, holding, dispatch and storage areas arranged with practical separation and safe access?',ar:'هل رتبت مناطق الاستلام والانتظار والتسليم والتخزين مع فصل ووصول آمنين؟',evidenceEn:'Warehouse zoning plan',evidenceAr:'مخطط تقسيم المستودع'} ,
      {id:'warehouse-environment',domain:'التحكم البيئي للتخزين',enDomain:'Storage environmental control',weight:2,critical:false,service:'التهوية والعزل',enService:'Ventilation & insulation',en:'Are temperature, humidity, ventilation, insulation and protection from water ingress considered for the stored materials?',ar:'هل تمت مراعاة الحرارة والرطوبة والتهوية والعزل والحماية من تسرب المياه للمواد المخزنة؟',evidenceEn:'Storage environment plan',evidenceAr:'مخطط البيئة التخزينية'}
    ]
  },
  regulators:{
    jfda:[
      {id:'reg-jfda-flow',domain:'مرجعية الغذاء والدواء',enDomain:'Food and Drug reference',weight:2,critical:false,service:'التخطيط ومسارات الحركة',enService:'Planning & workflow',en:'Can the physical layout be documented clearly for receiving, processing, storage, cleaning and dispatch areas relevant to the selected activity?',ar:'هل يمكن توضيح التخطيط المادي لمناطق الاستلام والتصنيع والتخزين والتنظيف والتسليم المرتبطة بالنشاط المختار؟',evidenceEn:'Annotated facility plan',evidenceAr:'مخطط منشأة موضح'} ,
      {id:'reg-jfda-clean',domain:'مرجعية الأسطح الصحية',enDomain:'Hygienic surface reference',weight:2,critical:false,service:'التشطيبات الصحية',enService:'Hygienic finishes',en:'Are the proposed finishes and facility details suitable for cleaning and the moisture conditions of the selected activity?',ar:'هل التشطيبات وتفاصيل المنشأة المقترحة مناسبة للتنظيف وظروف الرطوبة الخاصة بالنشاط المختار؟',evidenceEn:'Finish and material schedule',evidenceAr:'جدول التشطيبات والمواد'}
    ],
    moh:[
      {id:'reg-moh-hygiene',domain:'مرجعية وزارة الصحة',enDomain:'Ministry of Health reference',weight:2,critical:false,service:'التشطيبات ومناطق النظافة',enService:'Finishes & hygiene areas',en:'Are hygiene stations, cleanable surfaces and movement routes considered for the type of health-related environment?',ar:'هل تمت مراعاة محطات النظافة والأسطح القابلة للتنظيف ومسارات الحركة لنوع البيئة الصحية؟',evidenceEn:'Hygiene and layout plan',evidenceAr:'مخطط النظافة والتوزيع'}
    ],
    civil:[
      {id:'reg-civil-access',domain:'مرجعية السلامة والطوارئ',enDomain:'Safety and emergency reference',weight:2,critical:false,service:'التخطيط ومسارات الوصول',enService:'Planning & access',en:'Are access routes, movement paths and emergency clearances visible in the facility planning information?',ar:'هل تظهر مسارات الوصول والحركة ومناطق الخلوص للطوارئ بوضوح في معلومات تخطيط المنشأة؟',evidenceEn:'Site and access plan',evidenceAr:'مخطط الموقع والوصول'}
    ],
    municipality:[
      {id:'reg-municipality-use',domain:'مرجعية البلدية ورخص المهن',enDomain:'Municipality and licensing reference',weight:2,critical:false,service:'التخطيط والاستخدام',enService:'Planning & use',en:'Is the proposed facility use reflected in the space planning, entrances, service access and visible site requirements?',ar:'هل انعكس استخدام المنشأة المقترح على تخطيط المساحات والمداخل ووصول الخدمات ومتطلبات الموقع الظاهرة؟',evidenceEn:'Site and space plan',evidenceAr:'مخطط الموقع والمساحات'}
    ],
    jsmo:[
      {id:'reg-jsmo-materials',domain:'مرجعية المواصفات والمقاييس',enDomain:'Standards and Metrology reference',weight:1,critical:false,service:'المواد والتشطيبات',enService:'Materials & finishes',en:'Are material and finish choices recorded against the intended use and operating exposure of the facility?',ar:'هل تم ربط اختيارات المواد والتشطيبات بالاستخدام المقصود وظروف تعرض المنشأة؟',evidenceEn:'Material schedule',evidenceAr:'جدول المواد'}
    ]
  }
};

const gmpState={type:'',status:'new',regulators:[],questions:[],answers:{}};
const el=id=>document.getElementById(id);
const isAr=()=>document.documentElement.lang==='ar';
const txt=(item,key)=>item[isAr()?'ar':'en'+(key==='domain'?'Domain':'')];
function escapeHtml(v){return String(v??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[c]));}
function getQuestions(){
  const sector=GMP_BANK.sectors[gmpState.type]||[];
  const regs=gmpState.regulators.flatMap(r=>GMP_BANK.regulators[r]||[]);
  return [...GMP_BANK.core,...sector,...regs];
}
function updateProgress(step){
  document.querySelectorAll('[data-step-indicator]').forEach(li=>{
    li.classList.toggle('active',Number(li.dataset.stepIndicator)===step);
    li.classList.toggle('done',Number(li.dataset.stepIndicator)<step);
  });
}
function showFormStep(step){
  document.querySelectorAll('.form-step').forEach(s=>s.classList.toggle('active',Number(s.dataset.formStep)===step));
  updateProgress(step);
  if(step===2) renderQuestions();
  document.querySelector('.assessment-card').scrollIntoView({behavior:'smooth',block:'start'});
}
function renderQuestions(){
  const container=el('questions');
  if(!container)return;
  container.innerHTML=gmpState.questions.map((q,i)=>{
    const answer=gmpState.answers[q.id]||'';
    const labels=isAr()?['متوفر','جزئي','غير متوفر','غير منطبق']:['Available','Partial','Gap','N/A'];
    const options=[['good',2],['partial',1],['gap',0],['na','na']];
    return '<article class="question"><div class="question-head"><span class="question-index">'+String(i+1).padStart(2,'0')+'</span><div><h4>'+escapeHtml(isAr()?q.ar:q.en)+'</h4><div class="domain">'+escapeHtml(isAr()?q.domain:q.enDomain)+'</div></div></div><p>'+(isAr()?'الدليل المقترح: ':'Suggested evidence: ')+escapeHtml(isAr()?q.evidenceAr:q.evidenceEn)+'</p><div class="answer-options">'+options.map((o,j)=>'<label><input type="radio" name="q-'+q.id+'" value="'+o[1]+'" data-question="'+q.id+'" '+(answer===o[1]?'checked':'')+'><span>'+labels[j]+'</span></label>').join('')+'</div></article>';
  }).join('');
  container.querySelectorAll('input[type=radio]').forEach(input=>input.addEventListener('change',e=>{gmpState.answers[e.target.dataset.question]=e.target.value==='na'?'na':Number(e.target.value);}));
}
function selectedRegulators(){return [...document.querySelectorAll('input[name=regulator]:checked')].map(x=>x.value);}
function calculateResult(){
  const domains={};
  let total=0,earned=0,answered=0,criticalGaps=[];
  gmpState.questions.forEach(q=>{
    const a=gmpState.answers[q.id];
    if(a==='na'||typeof a==='undefined')return;
    const value=Number(a);
    total+=q.weight*2; earned+=value*q.weight; answered++;
    const d=q.domain;
    domains[d]??={name:d,enName:q.enDomain,total:0,earned:0};
    domains[d].total+=q.weight*2;domains[d].earned+=value*q.weight;
    if(q.critical&&value===0)criticalGaps.push(q);
  });
  const score=total?Math.round(earned/total*100):0;
  let bandEn='Critical gaps',bandAr='فجوات حرجة';
  if(score>=90){bandEn='Strong physical readiness';bandAr='جاهزية مادية مرتفعة';}
  else if(score>=80){bandEn='Good physical readiness';bandAr='جاهزية مادية جيدة';}
  else if(score>=60){bandEn='Partial physical readiness';bandAr='جاهزية مادية جزئية';}
  else if(score>=40){bandEn='Low physical readiness';bandAr='جاهزية مادية منخفضة';}
  const gaps=gmpState.questions.filter(q=>gmpState.answers[q.id]===0||gmpState.answers[q.id]===1).sort((a,b)=>(b.critical-a.critical)||(b.weight-a.weight)).slice(0,6);
  return {score,bandEn,bandAr,domains,answered,criticalGaps,gaps};
}
function renderResult(){
  const result=calculateResult();
  el('resultScore').textContent=result.score;
  el('resultBand').textContent=isAr()?result.bandAr:result.bandEn;
  el('resultIntro').textContent=isAr()?('تمت الإجابة عن '+result.answered+' من '+gmpState.questions.length+' نقاط مادية. النتيجة تقدير أولي يساعد على ترتيب الأولويات.'):('You answered '+result.answered+' of '+gmpState.questions.length+' physical points. This estimate helps prioritize the next facility decisions.');
  el('domainResults').innerHTML=Object.values(result.domains).map(d=>{
    const pct=Math.round(d.earned/d.total*100);
    return '<div class="domain-row"><b>'+escapeHtml(isAr()?d.name:d.enName)+'</b><div class="domain-bar"><i style="width:'+pct+'%"></i></div><span>'+pct+'%</span></div>';
  }).join('');
  const gaps=result.gaps.length?result.gaps.map(q=>'<li>'+escapeHtml(isAr()?q.ar:q.en)+'</li>').join(''):'<li>'+escapeHtml(isAr()?'لم تظهر فجوات مباشرة في الإجابات الحالية. يوصى بمعاينة الموقع للتأكد.':'No direct gaps appeared in the current answers. A site review is still recommended.')+'</li>';
  el('gapResults').innerHTML=gaps;
  el('results').hidden=false;
  updateProgress(3);
  el('results').scrollIntoView({behavior:'smooth',block:'start'});
  return result;
}
function setGmpPlaceholders(){
  document.querySelectorAll('[data-placeholder-en]').forEach(input=>input.placeholder=isAr()?input.dataset.placeholderAr:input.dataset.placeholderEn);
}
function buildWhatsAppMessage(result){
  const score=result.score;
  const name=el('leadName').value.trim();
  const phone=el('leadPhone').value.trim();
  const email=el('leadEmail').value.trim();
  const type=el('facilityType').selectedOptions[0]?.textContent||'';
  const msg=isAr()
    ? 'مرحبًا الحلول الاحترافية، أود مناقشة نتيجة تقييم جاهزية المنشأة لمتطلبات ممارسات التصنيع الجيد (GMP). النشاط: '+type+'، النتيجة الأولية: '+score+'/100. الاسم: '+name+'، الهاتف: '+phone+'، البريد: '+email
    : 'Hello Professional Solutions, I would like to discuss my facility readiness assessment for Good Manufacturing Practice (GMP). Activity: '+type+', preliminary score: '+score+'/100. Name: '+name+', phone: '+phone+', email: '+email;
  return 'https://wa.me/962790390555?text='+encodeURIComponent(msg);
}
document.addEventListener('DOMContentLoaded',()=>{
  el('startQuestions').addEventListener('click',()=>{
    gmpState.type=el('facilityType').value;gmpState.status=el('facilityStatus').value;gmpState.regulators=selectedRegulators();
    if(!gmpState.type){el('profileError').textContent=isAr()?'يرجى اختيار نوع النشاط قبل المتابعة.':'Please choose an activity type before continuing.';return;}
    el('profileError').textContent='';gmpState.questions=getQuestions();showFormStep(2);
  });
  el('backToProfile').addEventListener('click',()=>showFormStep(1));
  el('showResult').addEventListener('click',()=>{
    const unanswered=gmpState.questions.filter(q=>typeof gmpState.answers[q.id]==='undefined').length;
    if(unanswered){el('questionsError').textContent=isAr()?('يرجى الإجابة عن جميع البنود أو اختيار «غير منطبق». البنود المتبقية: '+unanswered):('Please answer each point or select N/A. Remaining points: '+unanswered);return;}
    el('questionsError').textContent='';renderResult();
  });
  el('leadForm').addEventListener('submit',e=>{
    e.preventDefault();
    if(!el('leadPhone').value.trim()&&!el('leadEmail').value.trim()){el('leadError').textContent=isAr()?'أدخل رقم الهاتف أو البريد الإلكتروني للمتابعة.':'Enter a phone number or email to continue.';return;}
    el('leadError').textContent='';const result=calculateResult();window.open(buildWhatsAppMessage(result),'_blank','noopener');
  });
  el('printResult').addEventListener('click',()=>window.print());
  document.getElementById('langBtn').addEventListener('click',()=>setTimeout(()=>{setGmpPlaceholders();if(gmpState.questions.length)renderQuestions();},0));
  setGmpPlaceholders();
});

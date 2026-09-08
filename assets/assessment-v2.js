'use strict';

/* GMP Facility Assessment
   Questions are limited to physical facility / utility / fit-out aspects that
   Professional Solutions can assess and execute. They are based on the
   Jordan FDA food GMP guidance and relevant WHO GMP/HVAC/water principles,
   with cosmetic GMP (ISO 22716) considered where applicable.
*/
const FACILITY_TYPES={
 food:{en:'Food Manufacturing',ar:'تصنيع الأغذية',groups:[
  ['Facility & zoning','المنشأة وتقسيم المناطق',[
   ['zoning','Zoning and process flow','تقسيم المناطق ومسار الإنتاج','Is the facility zoned so raw materials, preparation, processing, packaging and finished products follow a logical flow that minimizes contamination?','هل المنشأة مقسمة بحيث تسير المواد الخام والتحضير والتصنيع والتعبئة والمنتج النهائي في مسار منطقي يقلل احتمالية التلوث؟',['yes','Yes — clearly separated','partial','Partially separated','no','No — unsuitable flow','unknown','Unknown','other','Other']],
   ['prep','Raw-material preparation area','منطقة تجهيز المواد الأولية','Is there a dedicated area for preparation of raw materials before transfer to production?','هل توجد منطقة منفصلة ومخصصة لتجهيز المواد الأولية قبل نقلها إلى الإنتاج؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']],
   ['production','Production area separation','فصل مناطق الإنتاج','Is the main production area physically separated from incompatible activities and storage?','هل منطقة الإنتاج الرئيسية منفصلة ماديًا عن الأنشطة ومناطق التخزين غير المتوافقة معها؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']]
  ]],
  ['Floors, walls & ceilings','الأرضيات والجدران والأسقف',[
   ['floor','Production floor','أرضية الإنتاج','Is the production floor smooth, non-absorbent, crack-free, easy to clean and resistant to repeated washing and chemicals used in the process?','هل أرضية الإنتاج ملساء وغير ماصة وخالية من التشققات وسهلة التنظيف وتتحمل الغسيل المتكرر والمواد الكيميائية المستخدمة في التشغيل؟',['yes','Yes','partial','Partially compliant','no','No','unknown','Unknown','other','Other']],
   ['slope','Floor slope to drains','ميل الأرضية نحو المصارف','Does the floor have adequate slope toward drains with no standing water? For food facilities, verify the JFDA reference slope where applicable.','هل توجد ميول مناسبة للأرضية باتجاه المصارف دون تجمع للمياه؟ وبالنسبة لمنشآت الأغذية يتم التحقق من الميل المرجعي لدى الغذاء والدواء عند انطباقه.',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['walls','Production walls','جدران مناطق الإنتاج','Are production walls made of an approved/suitable smooth, water-resistant, non-absorbent and washable finish, free of cracks and difficult-to-clean projections?','هل جدران مناطق الإنتاج من تشطيب مناسب ومعتمد، أملس ومقاوم للماء وغير ماص للرطوبة وقابل للتنظيف وخالٍ من التشققات والبروزات صعبة التنظيف؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['ceiling','Production ceiling','سقف مناطق الإنتاج','Is the ceiling smooth, cleanable and designed to minimize dust accumulation, condensation and contamination risk?','هل السقف أملس وسهل التنظيف ومصمم لتقليل تراكم الغبار والتكاثف ومخاطر التلوث؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['junctions','Wall/floor junctions','التقاء الجدران والأرضيات','Are wall-to-floor junctions detailed to avoid dirt traps and allow effective cleaning?','هل تفاصيل التقاء الجدران بالأرضيات تمنع تجمع الأوساخ وتسمح بالتنظيف الفعال؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']]
  ]],
  ['Drainage & wet areas','الصرف والمناطق الرطبة',[
   ['drain-material','Drain material','مادة تصنيع المصارف','What is the material of production-area floor drains and channels?','ما مادة تصنيع مصارف وقنوات الصرف في مناطق الإنتاج؟',['ss304','Stainless steel 304','ss316','Stainless steel 316/316L','corrosion','Other corrosion-resistant hygienic material','unsuitable','Corroded / unsuitable material','unknown','Unknown','other','Other']],
   ['drain-design','Drain design','تصميم المصارف','Are drains/channels designed for hygienic cleaning, adequate flow and access for maintenance, without creating contamination risks?','هل المصارف والقنوات مصممة بما يسمح بالتنظيف الصحي والتصريف الكافي والوصول للصيانة دون خلق مخاطر تلوث؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['drain-separation','Drainage separation','فصل شبكات الصرف','Are industrial/process wastewater and sanitary wastewater networks appropriately separated where required?','هل شبكة المياه العادمة الصناعية/التشغيلية منفصلة عن شبكة الصرف الصحي الآدمية حيثما يتطلب ذلك؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']],
   ['wet-proof','Wet-area waterproofing','عزل المناطق الرطبة','Are wet production and washing areas waterproofed and detailed to prevent water migration into walls/floors?','هل المناطق الرطبة ومناطق الغسيل معزولة مائيًا ومفصلة لمنع تسرب المياه إلى الجدران والأرضيات؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']]
  ]],
  ['Water systems','أنظمة المياه',[
   ['water-source','Process water source','مصدر مياه التصنيع','Is water used in production from a potable-water source meeting the applicable Jordanian drinking-water requirements?','هل المياه المستخدمة في التصنيع من مصدر مياه صالح للشرب ومطابق للمتطلبات الأردنية السارية لمياه الشرب؟',['yes','Yes','partial','Partially / evidence pending','no','No','unknown','Unknown','other','Other']],
   ['water-treatment','Water treatment / filtration','معالجة وفلترة المياه','Where the product/process requires treated water, is an appropriate water treatment or filtration system installed and suitably connected to the points of use?','عندما تتطلب طبيعة المنتج أو العملية مياهًا معالجة، هل يوجد نظام مناسب لمعالجة أو فلترة المياه ومربوط بنقاط الاستخدام بطريقة مناسبة؟',['yes','Yes','partial','Partially','no','No','na','Not required for this process','unknown','Unknown','other','Other']],
   ['water-pipe','Water pipework material','مادة تمديدات المياه','Are process-water pipes and fittings made from materials suitable for the water quality and intended use, resistant to corrosion and non-leaching where required?','هل تمديدات ومكونات مياه التصنيع مصنوعة من مواد مناسبة لجودة المياه والاستخدام المقصود ومقاومة للتآكل ولا تؤثر في جودة المياه عند الحاجة؟',['suitable','Suitable hygienic material','partial','Partially suitable','unsuitable','Unsuitable / corroded','unknown','Unknown','other','Other']],
   ['water-storage','Water storage','خزانات المياه','If water is stored on site, is the storage tank material, access and arrangement suitable to protect water quality?','إذا كانت المياه مخزنة داخل المنشأة، هل مادة الخزان وإمكانية الوصول إليه وترتيبه مناسبة لحماية جودة المياه؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']]
  ]],
  ['HVAC, ventilation & air','التكييف والتهوية والهواء',[
   ['ventilation','Ventilation adequacy','كفاءة التهوية','Is ventilation adequate to remove steam, vapour, heat, odours and excess condensation generated by the process?','هل التهوية كافية لإزالة البخار والحرارة والروائح والتكاثف الزائد الناتج عن العملية؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['air-direction','Airflow direction','اتجاه حركة الهواء','Does air movement prevent airflow from dirty areas toward cleaner production areas?','هل اتجاه حركة الهواء يمنع انتقال الهواء من المناطق المتسخة إلى المناطق الأنظف؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['hvac-filtration','HVAC filtration','فلاتر نظام التكييف والتهوية','Are HVAC supply/return arrangements and filtration suitable for the process risk and designed to prevent contamination?','هل ترتيبات التغذية والراجع وفلاتر نظام HVAC مناسبة لمخاطر العملية ومصممة لمنع التلوث؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['compressed-air','Compressed-air line','خطوط الهواء المضغوط','If compressed air contacts product, product-contact surfaces or critical process areas, are the piping, filtration and air quality controls suitable for the intended use?','إذا كان الهواء المضغوط يلامس المنتج أو الأسطح الملامسة للمنتج أو مناطق تشغيل حرجة، هل تمديدات الهواء وفلاتره وجودة الهواء مناسبة للاستخدام المقصود؟',['yes','Yes','partial','Partially','no','No','na','Not used for product/process contact','unknown','Unknown','other','Other']],
   ['compressed-pipe','Compressed-air pipe material','مادة تمديدات الهواء المضغوط','What is the material of compressed-air piping in product-contact or critical areas?','ما مادة تمديدات الهواء المضغوط في مناطق ملامسة المنتج أو المناطق الحرجة؟',['stainless','Stainless steel / hygienic piping','aluminium','Suitable aluminium hygienic piping','other','Other suitable material','unsuitable','Unsuitable / corroded','na','Not applicable','unknown','Unknown']]
  ]],
  ['Doors, windows & lighting','الأبواب والنوافذ والإنارة',[
   ['doors','Production doors','أبواب مناطق الإنتاج','Are production doors smooth, sealed, easy to clean and self-closing where required?','هل أبواب مناطق الإنتاج ملساء ومحكمة وسهلة التنظيف وتغلق ذاتيًا حيثما يتطلب ذلك؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['windows','Production windows/openings','النوافذ والفتحات','Are windows/openings sealed, cleanable and protected against unwanted entry where required?','هل النوافذ والفتحات محكمة وسهلة التنظيف ومحمية من الدخول غير المرغوب فيه حيثما يتطلب ذلك؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']],
   ['lighting','Protected lighting','الإنارة المحمية','Are production light fittings adequately protected against breakage and contamination?','هل وحدات الإنارة في مناطق الإنتاج مزودة بحماية مناسبة ضد الكسر والتلوث؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']]
  ]],
  ['Hygiene & utilities','النظافة والخدمات',[
   ['wash-basins','Wash basins','أحواض الغسيل','Where washing facilities are required, are basins sufficient in number and made from corrosion-resistant, non-toxic, easy-to-clean materials?','عند الحاجة إلى أحواض غسيل، هل عددها كافٍ ومصنوعة من مواد مقاومة للصدأ وغير سامة وسهلة التنظيف؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']],
   ['hot-cold','Hot/cold water','المياه الساخنة والباردة','Are hot and cold water supplies available where required for cleaning and hygiene operations?','هل تتوفر تغذية بالمياه الساخنة والباردة حيثما تتطلب عمليات التنظيف والنظافة ذلك؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']],
   ['toilets','Toilet separation','فصل دورات المياه','Are toilets located and arranged so they do not open directly into production or storage areas?','هل دورات المياه موزعة بحيث لا تفتح مباشرة على مناطق الإنتاج أو التخزين؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']]
  ]]
 ]},
 cosmetics:{en:'Cosmetics & Personal Care Manufacturing',ar:'تصنيع مستحضرات التجميل والعناية الشخصية',groups:[
  ['Facility & hygienic surfaces','المنشأة والأسطح الصحية',[
   ['layout','Process zoning','تقسيم مناطق العملية','Are receiving, weighing, preparation, manufacturing, filling and packaging areas arranged to minimize mix-ups and cross-contamination?','هل مناطق الاستلام والوزن والتحضير والتصنيع والتعبئة والتغليف مرتبة بما يقلل مخاطر الخلط والتلوث المتبادل؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['floor','Floor finish','تشطيب الأرضيات','Are production floors smooth, non-absorbent, durable and easy to clean?','هل أرضيات الإنتاج ملساء وغير ماصة ومتينة وسهلة التنظيف؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['walls','Wall finish','تشطيب الجدران','Are walls smooth, sealed, washable and resistant to the cleaning regime?','هل الجدران ملساء ومغلقة وقابلة للغسل ومقاومة لعمليات التنظيف المستخدمة؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['ceiling','Ceiling finish','تشطيب الأسقف','Are ceilings designed to prevent dust accumulation, shedding and condensation and to permit cleaning?','هل الأسقف مصممة لمنع تراكم الغبار وتساقط المواد والتكاثف وتسمح بالتنظيف؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']]
  ]],
  ['Drainage & water','الصرف والمياه',[
   ['drain-material','Drain material','مادة المصارف','What is the material of floor drains/channels in wet production areas?','ما مادة مصارف وقنوات الصرف في مناطق الإنتاج الرطبة؟',['ss304','Stainless steel 304','ss316','Stainless steel 316/316L','corrosion','Other corrosion-resistant hygienic material','unsuitable','Unsuitable / corroded','unknown','Unknown','other','Other']],
   ['drain-design','Drain design','تصميم الصرف','Are wet-area drains accessible, cleanable and arranged to avoid standing water and contamination risk?','هل مصارف المناطق الرطبة سهلة الوصول والتنظيف ومصممة لمنع تجمع المياه ومخاطر التلوث؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']],
   ['water-quality','Water quality system','نظام جودة المياه','Is the water quality appropriate for the intended cosmetic manufacturing use, with treatment/filtration where the process requires it?','هل جودة المياه مناسبة لاستخدامها في تصنيع مستحضرات التجميل، مع وجود معالجة أو فلترة عند حاجة العملية لذلك؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['water-piping','Water distribution pipework','تمديدات توزيع المياه','Are water distribution pipes and fittings suitable, corrosion-resistant and arranged to protect the required water quality?','هل تمديدات ومكونات توزيع المياه مناسبة ومقاومة للتآكل ومركبة بطريقة تحافظ على جودة المياه المطلوبة؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']]
  ]],
  ['HVAC & compressed air','HVAC والهواء المضغوط',[
   ['hvac','HVAC conditions','ظروف HVAC','Can the HVAC system maintain the temperature, humidity, filtration and ventilation conditions required for the process?','هل يستطيع نظام HVAC الحفاظ على درجات الحرارة والرطوبة والترشيح والتهوية المطلوبة للعملية؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['airflow','Airflow direction','اتجاه الهواء','Is airflow arranged to reduce the movement of contamination from less clean to cleaner areas?','هل حركة الهواء مصممة لتقليل انتقال التلوث من المناطق الأقل نظافة إلى المناطق الأنظف؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['compressed-air','Compressed air','الهواء المضغوط','Where compressed air contacts product or product-contact surfaces, is appropriate filtration and air quality provided?','عندما يلامس الهواء المضغوط المنتج أو الأسطح الملامسة للمنتج، هل تتوفر الفلترة وجودة الهواء المناسبة؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']],
   ['compressed-pipe','Compressed-air piping','تمديدات الهواء المضغوط','Are compressed-air lines in critical/product-contact areas made from suitable hygienic, corrosion-resistant material?','هل تمديدات الهواء المضغوط في المناطق الحرجة أو الملامسة للمنتج مصنوعة من مواد صحية ومقاومة للتآكل ومناسبة للاستخدام؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']]
  ]],
  ['Doors, lighting & services','الأبواب والإنارة والخدمات',[
   ['doors','Doors','الأبواب','Are doors smooth, sealed, easy to clean and suitable for the required hygienic zoning?','هل الأبواب ملساء ومحكمة وسهلة التنظيف ومناسبة لتقسيم المناطق الصحية؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['lighting','Lighting protection','حماية الإنارة','Are light fittings protected and suitable for production and cleaning areas?','هل وحدات الإنارة محمية ومناسبة لمناطق الإنتاج والتنظيف؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['maintenance','Maintenance access','الوصول للصيانة','Can HVAC, electrical and utility components be maintained without compromising hygienic areas?','هل يمكن صيانة HVAC والكهرباء والخدمات دون الإخلال بالمناطق الصحية؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']]
  ]]
 ]},
 pharma:{en:'Pharmaceutical / Medical Manufacturing',ar:'التصنيع الدوائي والطبي',groups:[
  ['Premises & zoning','المنشأة وتقسيم المناطق',[
   ['zoning','Controlled zoning','تقسيم المناطق المنضبطة','Are personnel, material and product flows arranged to minimize mix-ups and cross-contamination according to the required level of control?','هل مسارات العاملين والمواد والمنتجات منظمة لتقليل الخلط والتلوث المتبادل وفق مستوى التحكم المطلوب؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['airlocks','Airlocks / transitions','مناطق الانتقال والـ Airlocks','Where required by the process, are airlocks, change areas or controlled transitions provided between different cleanliness/control zones?','عند حاجة العملية، هل توجد مناطق انتقال أو Airlocks أو مناطق تغيير مناسبة بين مناطق النظافة أو التحكم المختلفة؟',['yes','Yes','partial','Partially','no','No','na','Not required','unknown','Unknown','other','Other']],
   ['surfaces','Cleanable surfaces','الأسطح القابلة للتنظيف','Are exposed surfaces smooth, sealed, durable and easy to clean without inaccessible ledges or gaps?','هل الأسطح المكشوفة ملساء ومغلقة ومتينة وسهلة التنظيف دون حواف أو فراغات يصعب الوصول إليها؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']]
  ]],
  ['Floors, walls, ceilings & drains','الأرضيات والجدران والأسقف والمصارف',[
   ['floor','Floor finish','تشطيب الأرضيات','Is the floor finish seamless/suitable, non-shedding, resistant to the process and compatible with cleaning and disinfection?','هل تشطيب الأرضيات مناسب ومتماسك وغير متساقط ومقاوم للعملية ومتوافق مع التنظيف والتطهير؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['walls-ceiling','Walls and ceilings','الجدران والأسقف','Are walls and ceilings smooth, sealed and suitable for controlled manufacturing and cleaning?','هل الجدران والأسقف ملساء ومغلقة ومناسبة للتصنيع المنضبط والتنظيف؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['drain-material','Drain material','مادة المصارف','Where drains are permitted, are they constructed from corrosion-resistant, cleanable material appropriate to the controlled area?','حيث يسمح بوجود المصارف، هل هي مصنوعة من مادة مقاومة للتآكل وقابلة للتنظيف ومناسبة للمنطقة المنضبطة؟',['ss316','Stainless steel 316/316L','ss304','Stainless steel 304','corrosion','Other suitable corrosion-resistant material','unsuitable','Unsuitable / corroded','na','No drain required','unknown','Unknown']],
   ['drain-seal','Drain hygienic design','التصميم الصحي للمصارف','Where drains are present, do they have hygienic access, suitable traps/seals and drainage that prevents backflow or contamination?','عند وجود المصارف، هل تصميمها صحي ويتضمن وسائل مناسبة لمنع الارتداد والتلوث ويسمح بالتنظيف والصيانة؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']]
  ]],
  ['HVAC & clean air','HVAC والهواء النظيف',[
   ['hvac-design','HVAC design','تصميم HVAC','Is HVAC coordinated with the facility layout and designed to achieve the required temperature, humidity, filtration and air-change conditions?','هل نظام HVAC منسق مع تخطيط المنشأة ومصمم لتحقيق درجات الحرارة والرطوبة والترشيح ومعدلات تبديل الهواء المطلوبة؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['pressure','Pressure cascade','فروق الضغط','Where pressure differentials are required, are rooms arranged to maintain the intended pressure cascade between areas?','عند الحاجة إلى فروق الضغط، هل الغرف مرتبة بحيث تحافظ على تدرج الضغط المطلوب بين المناطق؟',['yes','Yes','partial','Partially','no','No','na','Not required','unknown','Unknown','other','Other']],
   ['air-filtration','Air filtration','فلترة الهواء','Are filtration stages appropriate to the required area cleanliness and contamination-control strategy?','هل مراحل فلترة الهواء مناسبة لمستوى نظافة المنطقة واستراتيجية التحكم بالتلوث المطلوبة؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['air-direction','Airflow direction','اتجاه حركة الهواء','Is airflow arranged to prevent unfiltered/less-clean air from entering cleaner areas?','هل اتجاه الهواء يمنع دخول الهواء غير المرشح أو الأقل نظافة إلى المناطق الأنظف؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']]
  ]],
  ['Water systems','أنظمة المياه',[
   ['water-grade','Water grade/use','درجة ونوع مياه الاستخدام','Is the required water grade identified for each manufacturing use and point of use?','هل تم تحديد درجة ونوع المياه المطلوبة لكل استخدام ونقطة استخدام في التصنيع؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['water-treatment','Water treatment','معالجة المياه','Where purified/process water is required, is an appropriate treatment system provided (e.g. filtration/RO as applicable to the required grade)?','عندما تتطلب العملية مياهًا منقاة أو معالجة، هل يوجد نظام معالجة مناسب مثل الفلترة أو RO وفق درجة المياه المطلوبة؟',['yes','Yes','partial','Partially','no','No','na','Not required','unknown','Unknown','other','Other']],
   ['water-pipe','Water distribution pipework','تمديدات توزيع المياه','Are water-system pipes, valves, fittings and seals made from suitable non-leaching, corrosion-resistant materials appropriate to the required water grade?','هل أنابيب وصمامات ووصلات وأختام نظام المياه مصنوعة من مواد مناسبة وغير مطلقة للمواد ومقاومة للتآكل وفق درجة المياه المطلوبة؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['water-loop','Water storage/distribution','تخزين وتوزيع المياه','Where purified water is stored/distributed, is the system arranged to protect quality through suitable storage, circulation and points of use?','عند تخزين وتوزيع المياه المنقاة، هل النظام مصمم للحفاظ على الجودة من خلال التخزين والتدوير ونقاط الاستخدام المناسبة؟',['yes','Yes','partial','Partially','no','No','na','Not required','unknown','Unknown','other','Other']]
  ]],
  ['Compressed air & utilities','الهواء المضغوط والخدمات',[
   ['compressed-air','Compressed air quality','جودة الهواء المضغوط','Where compressed air contacts product or critical product-contact surfaces, is appropriate filtration and contamination control provided?','عندما يلامس الهواء المضغوط المنتج أو الأسطح الحرجة الملامسة للمنتج، هل تتوفر فلترة مناسبة وتحكم في التلوث؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']],
   ['compressed-pipe','Compressed-air piping','تمديدات الهواء المضغوط','Are compressed-air lines in critical areas constructed from suitable hygienic, corrosion-resistant material and routed to permit maintenance?','هل تمديدات الهواء المضغوط في المناطق الحرجة مصنوعة من مواد صحية ومقاومة للتآكل ومساراتها تسمح بالصيانة؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']],
   ['service-access','Service access','الوصول للخدمات','Are HVAC, electrical, water and utility service components accessible for maintenance without compromising controlled areas?','هل نقاط ومكونات HVAC والكهرباء والمياه والخدمات قابلة للصيانة دون الإخلال بالمناطق المنضبطة؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']]
  ]],
  ['Doors & lighting','الأبواب والإنارة',[
   ['doors','Controlled-area doors','أبواب المناطق المنضبطة','Are doors smooth, sealed, cleanable and suitable for the required pressure/cleanliness zoning?','هل أبواب المناطق المنضبطة ملساء ومحكمة وسهلة التنظيف ومناسبة لتقسيم الضغط والنظافة المطلوب؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['lighting','Lighting','الإنارة','Are light fittings protected, flush/suitable for cleaning and appropriate for the controlled environment?','هل وحدات الإنارة محمية ومناسبة للتنظيف ومتلائمة مع البيئة المنضبطة؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']]
  ]]
 ]},
 industrial:{en:'General Industrial Manufacturing',ar:'التصنيع الصناعي العام',groups:[
  ['Facility layout & surfaces','تخطيط المنشأة والأسطح',[
   ['layout','Production workflow','مسار الإنتاج','Does the facility layout support a controlled and logical flow of people, materials and products?','هل تخطيط المنشأة يدعم مسارًا منظمًا ومنضبطًا للعاملين والمواد والمنتجات؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['floor','Industrial floor','الأرضية الصناعية','Is the floor suitable for the process, loads, cleaning requirements and environmental conditions?','هل الأرضية مناسبة لطبيعة التشغيل والأحمال ومتطلبات التنظيف والظروف البيئية؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['walls','Walls and partitions','الجدران والفواصل','Are walls and partitions durable, washable where required and suitable for the process environment?','هل الجدران والفواصل متينة وقابلة للغسل عند الحاجة ومناسبة لبيئة التشغيل؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['ceiling','Ceilings','الأسقف','Are ceilings suitable for the process and designed to control dust, condensation and difficult-to-clean areas?','هل الأسقف مناسبة لطبيعة التشغيل ومصممة للحد من الغبار والتكاثف والمناطق صعبة التنظيف؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']]
  ]],
  ['Drainage & water','الصرف والمياه',[
   ['drain-material','Drain material','مادة المصارف','Where wet processes exist, what is the material of floor drains and channels?','عند وجود عمليات رطبة، ما مادة تصنيع المصارف والقنوات الأرضية؟',['ss304','Stainless steel 304','ss316','Stainless steel 316/316L','corrosion','Other corrosion-resistant material','unsuitable','Unsuitable / corroded','na','No wet process','unknown','Unknown','other','Other']],
   ['drain-design','Drain design','تصميم الصرف','Are drains sized and arranged to prevent standing water and allow cleaning and maintenance?','هل المصارف بحجم وترتيب يمنع تجمع المياه ويسمح بالتنظيف والصيانة؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']],
   ['water','Process water','مياه التشغيل','Is process water suitable for the intended use, with treatment/filtration where required by the process?','هل مياه التشغيل مناسبة للاستخدام المقصود مع توفير المعالجة أو الفلترة عندما تتطلبها العملية؟',['yes','Yes','partial','Partially','no','No','na','Not required','unknown','Unknown','other','Other']],
   ['water-pipes','Water pipework','تمديدات المياه','Are water pipes and fittings suitable for the intended use and protected against corrosion or contamination?','هل تمديدات ومكونات المياه مناسبة للاستخدام المقصود ومحمية من التآكل أو التلوث؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']]
  ]],
  ['Ventilation & air systems','التهوية وأنظمة الهواء',[
   ['ventilation','Process ventilation','تهوية العملية','Are heat, dust, fumes, vapour and odours adequately extracted or controlled?','هل يتم شفط أو التحكم بالحرارة والغبار والأبخرة والبخار والروائح بشكل كافٍ؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['air-direction','Airflow direction','اتجاه الهواء','Where hygiene zoning is required, does airflow avoid moving contaminants from dirty to cleaner areas?','حيث يتطلب تقسيمًا صحيًا، هل اتجاه الهواء يمنع انتقال الملوثات من المناطق المتسخة إلى الأنظف؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']],
   ['compressed-air','Compressed air','الهواء المضغوط','Where compressed air is used in the process, is the air treatment/filtration appropriate to its intended use?','عند استخدام الهواء المضغوط في العملية، هل معالجة وفلترة الهواء مناسبة للاستخدام المقصود؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']],
   ['compressed-pipe','Compressed-air piping','تمديدات الهواء المضغوط','Are compressed-air lines made from suitable corrosion-resistant material and installed to allow inspection and maintenance?','هل تمديدات الهواء المضغوط مصنوعة من مواد مناسبة ومقاومة للتآكل ومركبة بما يسمح بالفحص والصيانة؟',['yes','Yes','partial','Partially','no','No','na','Not applicable','unknown','Unknown','other','Other']]
  ]],
  ['Electrical, lighting & maintenance','الكهرباء والإنارة والصيانة',[
   ['electrical','Electrical installation','التمديدات الكهربائية','Are electrical panels, cables and service points protected, accessible for maintenance and suitable for the operating environment?','هل اللوحات والكابلات ونقاط الكهرباء محمية وقابلة للصيانة ومناسبة لبيئة التشغيل؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['lighting','Protected lighting','الإنارة المحمية','Are light fittings suitable for the environment and protected where breakage could affect product or process?','هل وحدات الإنارة مناسبة للبيئة ومحمية حيث يمكن أن يؤثر الكسر على المنتج أو العملية؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']],
   ['maintenance','Maintenance access','الوصول للصيانة','Are maintenance routes and service access arranged so work can be performed without creating avoidable contamination or safety risks?','هل مسارات الصيانة والوصول للخدمات منظمة بحيث يمكن تنفيذ الصيانة دون خلق مخاطر تلوث أو سلامة يمكن تجنبها؟',['yes','Yes','partial','Partially','no','No','unknown','Unknown','other','Other']]
  ]]
 ]}
};

const ANSWER_LABELS={
 ar:{yes:'نعم — مستوفى',partial:'مستوفى جزئيًا',no:'غير مستوفى',unknown:'غير معروف — يحتاج تحقق',na:'غير منطبق',other:'أخرى'},
 en:{yes:'Yes — compliant',partial:'Partially compliant',no:'Not compliant',unknown:'Unknown — verify',na:'Not applicable',other:'Other'}
};
const WEIGHTS={yes:1,partial:.5,no:0,unknown:null,na:null,other:null};
let lang='ar',active=[];
const $=id=>document.getElementById(id);
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const t=(ar,en)=>lang==='ar'?ar:en;

function facilityOptions(){const s=$('sector');if(!s)return;const current=s.value||'food';s.innerHTML='';Object.entries(FACILITY_TYPES).forEach(([k,d])=>{const o=document.createElement('option');o.value=k;o.textContent=t(d.ar,d.en);s.appendChild(o)});if(FACILITY_TYPES[current])s.value=current;}

function renderQuestions(){
 const key=$('sector')?.value||'food',d=FACILITY_TYPES[key];active=[];const box=$('questions');if(!box)return;box.innerHTML='';
 d.groups.forEach((g,gi)=>{
  const section=document.createElement('section');section.className='assessment-group';section.innerHTML=`<h3>${esc(t(g[1],g[0]))}</h3>`;
  g[2].forEach((q,qi)=>{
   const id=`q_${gi}_${qi}`;const opts=[];for(let i=0;i<q[5].length;i+=2)opts.push({value:q[5][i],en:q[5][i+1]});
   active.push({id,key:q[0],en:q[1],ar:q[2],qEn:q[3],qAr:q[4],options:opts});
   const article=document.createElement('article');article.className='assessment-question';article.dataset.id=id;
   article.innerHTML=`<div class="q-head"><span>${String(active.length).padStart(2,'0')}</span><div><h4>${esc(t(q[2],q[1]))}</h4><p>${esc(t(q[4],q[3]))}</p></div></div><div class="answers">${opts.map(op=>`<label><input type="radio" name="${id}" value="${esc(op.value)}"><span>${esc(ANSWER_LABELS[lang][op.value]||op[lang==='ar'?'ar':'en']||op.en)}</span></label>`).join('')}</div><div class="other-wrap" hidden><label>${esc(t('تفاصيل أخرى','Additional details'))}<textarea data-other="${id}" rows="2" placeholder="${esc(t('اكتب الحالة الفعلية أو المادة أو المواصفة الموجودة في المنشأة','Describe the actual condition, material or specification'))}"></textarea></label></div>`;
   section.appendChild(article);article.querySelectorAll('input').forEach(inp=>inp.addEventListener('change',()=>{article.querySelector('.other-wrap').hidden=inp.value!=='other'}));
  });
  box.appendChild(section);
 });
 const pt=$('progress-text');if(pt)pt.textContent=`${active.length} ${t('سؤالًا','questions')}`;
}

function calculate(){
 const results=[];let points=0,max=0;
 active.forEach(q=>{const el=document.querySelector(`input[name="${q.id}"]:checked`);const val=el?el.value:'unknown';if(WEIGHTS[val]!=null){points+=WEIGHTS[val];max+=1}const other=val==='other'?document.querySelector(`[data-other="${q.id}"]`)?.value.trim():'';results.push({...q,val,other})});
 return {results,score:max?Math.round(points/max*100):0};
}

function makeReport(){
 const d=FACILITY_TYPES[$('sector')?.value||'food'],calc=calculate();
 const gaps=calc.results.filter(r=>['no','partial','unknown'].includes(r.val));
 const other=calc.results.filter(r=>r.val==='other');
 const priority=r=>r.val==='no'?'high':r.val==='partial'?'medium':'check';
 const labels={high:['أولوية عالية','High priority'],medium:['يحتاج تحسين','Needs improvement'],check:['يحتاج تحقق ميداني','Field verification required']};
 let html=`<div class="report-summary"><div><strong>${calc.score}%</strong><span>${esc(t('مؤشر أولي مبني على الإجابات','Preliminary indicator based on answers'))}</span></div><div><strong>${gaps.length}</strong><span>${esc(t('نقاط تحتاج مراجعة','Items requiring review'))}</span></div></div><div class="report-intro"><p>${esc(t('هذا تقرير تقييم أولي لمتطلبات التجهيز والبنية التحتية ذات الصلة بمبادئ التصنيع الجيد (GMP). لا يمثل شهادة مطابقة أو اعتمادًا رقابيًا، ولا يقيم أنظمة الجودة أو التوثيق أو الإجراءات التشغيلية.','This is a preliminary assessment of facility fit-out and infrastructure requirements relevant to Good Manufacturing Practice (GMP). It is not a compliance certificate or regulatory accreditation and does not assess quality systems, documentation or operating procedures.'))}</p></div><div class="report-list"><h3>${esc(t('المتطلبات ونقاط المراجعة','Requirements & review points'))}</h3>`;
 if(!gaps.length)html+=`<p>${esc(t('لم تظهر فجوات واضحة من الإجابات المدخلة، مع ضرورة التحقق الميداني قبل اعتبار المنشأة مستوفية لمتطلبات GMP.','No clear gaps were identified from the entered answers. Field verification is still required before considering the facility compliant with GMP requirements.'))}</p>`;
 gaps.forEach(r=>{const l=labels[priority(r)][lang==='ar'?0:1];const current=r.val==='no'?t('غير مستوفى','Not compliant'):r.val==='partial'?t('مستوفى جزئيًا','Partially compliant'):t('غير معروف','Unknown');const req=t('الحالة المدخلة: ','Entered condition: ');html+=`<article><div><b>${esc(t(r.ar,r.en))}</b><small>${esc(req+current)}</small></div><strong>${esc(l)}</strong><p>${esc(t('يجب مراجعة هذا البند مقابل متطلبات النشاط وتحديد التعديل أو التجهيز المطلوب قبل التنفيذ.','Review this item against the applicable activity requirements and define the required upgrade or fit-out before execution.'))}</p></article>`});
 other.forEach(r=>{html+=`<article><div><b>${esc(t(r.ar,r.en))}</b><small>${esc(t('ملاحظة العميل','Client note'))}</small></div><p>${esc(r.other)}</p></article>`});
 html+=`</div><div class="report-next"><h3>${esc(t('الخطوة التالية','Next step'))}</h3><p>${esc(t('يمكن استخدام التقرير لتحديد أولويات أعمال التصميم والتجهيز والتنفيذ المرتبطة بمتطلبات المنشأة، مع مراجعة المتطلبات الخاصة بالجهة الرقابية قبل التصميم النهائي.','Use this report to prioritize design, fit-out and execution works related to facility requirements, with review of the applicable regulatory requirements before final design.'))}</p></div>`;
 const report=$('result');if(report){report.innerHTML=html;report.hidden=false;report.scrollIntoView({behavior:'smooth',block:'start'})}
}

function resetAssessment(){document.querySelectorAll('input[type=radio]').forEach(i=>i.checked=false);document.querySelectorAll('.other-wrap').forEach(e=>e.hidden=true);const r=$('result');if(r)r.hidden=true;window.scrollTo({top:0,behavior:'smooth'})}
function renderAssessmentLanguage(){facilityOptions();renderQuestions();document.documentElement.lang=lang;document.documentElement.dir=lang==='ar'?'rtl':'ltr';const b=$('langBtn');if(b)b.textContent=lang==='ar'?'EN':'عربي'}
function toggleAssessmentLanguage(){lang=lang==='ar'?'en':'ar';renderAssessmentLanguage()}
window.renderAssessmentLanguage=renderAssessmentLanguage;window.toggleAssessmentLanguage=toggleAssessmentLanguage;

document.addEventListener('DOMContentLoaded',()=>{
 renderAssessmentLanguage();
 $('sector')?.addEventListener('change',renderQuestions);
 $('assessment-form')?.addEventListener('submit',e=>{e.preventDefault();makeReport()});
 $('calculateBtn')?.addEventListener('click',e=>{e.preventDefault();makeReport()});
 $('resetBtn')?.addEventListener('click',resetAssessment);
 $('edit-result')?.addEventListener('click',()=>{$('result').hidden=true;window.scrollTo({top:0,behavior:'smooth'})});
 $('print-result')?.addEventListener('click',()=>window.print());
});
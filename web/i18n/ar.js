// Arabic version of the homepage. Loaded only for ?lang=ar, right before the page script, so that script reads
// already-translated markup. Illustrations are product UI and stay in English (see SKIP).
//
// How it works: I18N_WALK finds "blocks" — the highest elements that hold only text and inline formatting — and keys
// each by its innerHTML with whitespace collapsed. Text that sits next to an icon is keyed by itself. If the English
// markup changes, that key stops matching and the block stays in English; the console lists every miss.
window.I18N_WALK=function(root,onBlock,onText){
  const SKIP='script,style,svg,canvas,video,img,.scene,.il,.shot,.tiles,.rdev,#rlogos,#metOld,#launchFloor,.lang-dd';
  const INLINE=new Set(['B','I','EM','STRONG','BR','SPAN','BDI','SMALL']);
  const inlineOnly=el=>[...el.children].every(c=>INLINE.has(c.tagName)&&inlineOnly(c));
  const norm=s=>s.replace(/\s+/g,' ').trim();
  (function go(el){
    if(el.matches&&el.matches(SKIP))return;
    if(el!==root&&el.textContent.trim()&&inlineOnly(el)){onBlock(el,norm(el.innerHTML));return;}
    [...el.childNodes].forEach(n=>{
      if(n.nodeType===3){const t=norm(n.textContent); if(t&&/[A-Za-z]/.test(t))onText(n,t);}
      else if(n.nodeType===1)go(n);});
  })(root);
};

window.I18N_AR={
// numbers keep their own direction inside Arabic lines
PAIRS:[
// top bar
['<span>Product</span><span>Industries</span><span>Cases</span><span>Pricing</span><span>Company</span>','<span>المنتج</span><span>القطاعات</span><span>قصص العملاء</span><span>الأسعار</span><span>الشركة</span>'],
['Login','تسجيل الدخول'],
['Book a demo','احجز عرضًا توضيحيًا'],
// hero
['Every customer conversation&nbsp;<span class="scrib a" aria-hidden="true"></span> becomes advice&nbsp;<span class="scrib b" aria-hidden="true"></span> for your team and insight for your business.',
 'كل محادثة مع عميل&nbsp;<span class="scrib a" aria-hidden="true"></span> تصبح نصيحة&nbsp;<span class="scrib b" aria-hidden="true"></span> لفريقك ورؤية لأعمالك.'],
['Lansy hears and analyzes every in-person conversation.','يستمع Lansy إلى كل محادثة وجهًا لوجه ويحلّلها.'],
['Book a demo <span>→</span>','احجز عرضًا توضيحيًا <span>←</span>'],
['How it works','كيف يعمل'],
// problem + counter
['The problem','المشكلة'],
['What your staff and customers say to each other is <b>the most valuable data</b> you have — and <b>nobody records it</b>. Managers hear a fraction. A mystery shopper hears <b>one staged visit a quarter</b>.',
 'ما يقوله موظفوك وعملاؤك لبعضهم هو <b>أثمن بيانات</b> لديك — <b>ولا أحد يسجّلها.</b> المديرون يسمعون جزءًا يسيرًا منها. والمتسوّق الخفي يسمع <b>زيارة واحدة مُعدّة مسبقًا كل ربع سنة.</b>'],
['Live · conversations','مباشر · المحادثات'],
['heard today','سمع اليوم'],
// how it works
['From a hello at the counter <br>to a tip after the shift','من التحية الأولى عند الكاشير <br>إلى نصيحة بعد الوردية'],
['<b>1</b><span>Record</span><i>›</i>','<b>1</b><span>التسجيل</span><i>‹</i>'],
['<b>2</b><span>Transcribe</span><i>›</i>','<b>2</b><span>التفريغ النصي</span><i>‹</i>'],
['<b>3</b><span>Review</span><i>›</i>','<b>3</b><span>التقييم</span><i>‹</i>'],
['<b>4</b><span>Advise</span><i>›</i>','<b>4</b><span>النصيحة</span><i>‹</i>'],
['Start with one counter —<br>within days you’ll hear what’s said there,<br>and your team gets its first tips.',
 'ابدأ بنقطة خدمة واحدة —<br>خلال أيام ستسمع ما يُقال هناك،<br>ويحصل فريقك على أولى النصائح.'],
['Start a pilot <span>→</span>','ابدأ التجربة <span>←</span>'],
// industries
['You choose the metric','أنت تختار المؤشر'],
['Track what your staff can actually influence','تابِع ما يستطيع موظفوك التأثير فيه فعلًا'],
['Add-on offers in cafés, next visits in clinics, feedback in schools. Lansy measures what matters in your industry — and what happens behind it.',
 'العروض الإضافية في المقاهي، والزيارات التالية في العيادات، والتغذية الراجعة في المدارس. يقيس Lansy ما يهمّ في قطاعك — وما يقف خلفه.'],
['Cafes and restaurants','المقاهي والمطاعم'],
['Retail','التجزئة'],
['Pharmacies and clinics','الصيدليات والعيادات'],
['Schools and education','المدارس والتعليم'],
['Beauty and personal care','التجميل والعناية الشخصية'],
['Hotels','الفنادق'],
['Call centers','مراكز الاتصال'],
['Tracks service, add-on offers and how guests are greeted — every shift, with no one reviewing recordings by hand.',
 'يتابع جودة الخدمة والعروض الإضافية وطريقة استقبال الضيوف — في كل وردية، دون أن يراجع أحد التسجيلات يدويًا.'],
['Shows how each adviser sells: from the first hello to the fitting room, the offer and the goodbye at checkout.',
 'يُظهر كيف يبيع كل مستشار: من التحية الأولى إلى غرفة القياس، ثم العرض، ثم الوداع عند الدفع.'],
['Checks how staff explain, show empathy and book the next visit — while patient privacy stays protected.',
 'يتحقق من طريقة الشرح والتعاطف وحجز الزيارة التالية — مع الحفاظ على خصوصية المرضى.'],
['Reviews every lesson and parent call, and gives teachers and managers feedback on the same day.',
 'يراجع كل درس وكل مكالمة مع أولياء الأمور، ويقدّم للمعلمين والإدارة ملاحظاتهم في اليوم نفسه.'],
['Hears every consultation and shows who recommends care products and books the next visit before guests leave.',
 'يستمع إلى كل استشارة ويُظهر من يوصي بمنتجات العناية ويحجز الزيارة التالية قبل مغادرة العميل.'],
['Follows check-in and concierge talks and shows where upgrades and local tips were offered — or missed.',
 'يتابع محادثات تسجيل الوصول والكونسيرج ويُظهر أين عُرضت الترقيات والتوصيات المحلية — وأين فاتت.'],
['Scores every call against your script and shows what helps solve an issue on the first try, without callbacks.',
 'يقيّم كل مكالمة وفق النص المعتمد لديك ويُظهر ما يساعد على حل المشكلة من المرة الأولى، دون معاودة الاتصال.'],
['Learn more ↗','اعرف المزيد ↖'],
['Your industry isn’t listed? Write to us — we’ll talk it through and find a solution together.',
 'قطاعك ليس في القائمة؟ راسلنا — نناقش الأمر ونجد الحل معًا.'],
['Contact us <span>→</span>','تواصل معنا <span>←</span>'],
// roles
['Product','المنتج'],
['Same data, a different helper<br>for every role','البيانات نفسها، ومساعد مختلف<br>لكل دور'],
['<i></i>For managers','<i></i>للمديرين'],
['A partner for the manager','شريك للمدير'],
['A summary of locations, promos and demand: what guests ask for and what’s missing.','ملخّص للفروع والعروض والطلب: ما يطلبه الضيوف وما ينقصهم.'],
['<i></i>For employees','<i></i>للموظفين'],
['A coach for every employee','مدرّب لكل موظف'],
['A short personal tip after each shift — on the phone and on the wrist.','نصيحة شخصية قصيرة بعد كل وردية — على الهاتف وعلى المعصم.'],
['<i></i>For your data','<i></i>لبياناتك'],
['An assistant for your data','مساعد لبياناتك'],
['Ask about any location or week and get answers backed by real conversations.','اسأل عن أي فرع أو أسبوع واحصل على إجابات مدعومة بمحادثات حقيقية.'],
['<i></i>At the counter<span class="soon">Soon</span>','<i></i>عند الكاشير<span class="soon">قريبًا</span>'],
['Copilot at the counter','مساعد فوري عند الكاشير'],
['A quiet prompt during the conversation: the right question or offer at the right moment.','تلميح هادئ أثناء المحادثة: السؤال أو العرض المناسب في اللحظة المناسبة.'],
['Connects to your stack','يتكامل مع أنظمتك'],
// cases
['Cases','قصص العملاء'],
['How our clients use Lansy','كيف يستخدم عملاؤنا Lansy'],
['“We used to hear maybe one call in fifty. Now we see every order — and operators offer add-ons without being reminded.”',
 '«كنا نسمع ربما مكالمة واحدة من كل خمسين. الآن نرى كل طلب — والموظفون يعرضون الإضافات دون أن يذكّرهم أحد.»'],
['<b>Arjun Mehta</b> · Head chef and co-owner, Sayori','<b>أرجون ميهتا</b> · رئيس الطهاة والشريك المالك، Sayori'],
['<b>×4.3</b><span>more often operators read the order back</span>','<b><bdi dir="ltr">×4.3</bdi></b><span>تكرار أعلى لتأكيد الطلب مع العميل</span>'],
['<b>−55%</b><span>fewer wrong orders at pickup points</span>','<b><bdi dir="ltr">−55%</bdi></b><span>أخطاء أقل في الطلبات عند نقاط الاستلام</span>'],
['Read the case <span>↗</span>','اقرأ القصة <span>↖</span>'],
['“Teachers were nervous at first. A month later they were asking for their own feedback after every lesson.”',
 '«كان المعلمون قلقين في البداية. وبعد شهر صاروا يطلبون ملاحظاتهم بعد كل درس.»'],
['<b>Emily Carter</b> · Academic director, PROschool','<b>إميلي كارتر</b> · المديرة الأكاديمية، PROschool'],
['<b>85–90%</b><span>analysis accuracy, checked by experts</span>','<b><bdi dir="ltr">85–90%</bdi></b><span>دقة التحليل بتقييم الخبراء</span>'],
['<b>Minutes</b><span>to review a lesson instead of hours</span>','<b>دقائق</b><span>لمراجعة الدرس بدلًا من ساعات</span>'],
['“Baristas started mentioning the loyalty card on their own — because now they can see who already does it.”',
 '«بدأ الباريستا يذكرون بطاقة الولاء من تلقاء أنفسهم — لأنهم الآن يرون من يفعل ذلك.»'],
['<b>Marco Reyes</b> · Head barista, Northbrew','<b>ماركو رييس</b> · رئيس الباريستا، Northbrew'],
['<b>+50%</b><span>loyalty cards issued</span>','<b><bdi dir="ltr">+50%</bdi></b><span>زيادة في بطاقات الولاء المُصدَرة</span>'],
['<b>2 weeks</b><span>from one pilot location to first results</span>','<b>أسبوعان</b><span>من فرع تجريبي واحد إلى أولى النتائج</span>'],
// privacy
['Privacy &amp; security','الخصوصية والأمان'],
['Built to mentor your team,<br>never to watch over it','صُمّم لتوجيه فريقك،<br>لا لمراقبته'],
['Personal talk stays out','الأحاديث الشخصية تبقى خارجًا'],
['Off-topic conversations — a call home, a chat on a break —<br>are detected and removed before analysis.',
 'المحادثات الخارجة عن العمل — مكالمة مع الأهل أو دردشة في الاستراحة —<br>تُكتشف وتُحذف قبل التحليل.'],
['Anonymized','إخفاء الهوية'],
['Names, phone numbers, addresses and card numbers are masked before any AI sees the text.',
 'تُخفى الأسماء وأرقام الهواتف والعناوين وأرقام البطاقات قبل أن يرى أي ذكاء اصطناعي النص.'],
['Private by default','خاص افتراضيًا'],
['Each employee sees only their own conversations. Wider access is set by your admin. No public rankings.',
 'يرى كل موظف محادثاته فقط. وصلاحيات الوصول الأوسع يحدّدها المسؤول لديك. لا تصنيفات علنية.'],
['Voice stays with us','الصوت يبقى لدينا'],
['Audio never leaves our servers in the UAE. AI sees only anonymized text and never trains on it.',
 'لا يغادر الصوت خوادمنا في الإمارات. والذكاء الاصطناعي لا يرى إلا نصًا مجهول الهوية، ولا يتدرّب عليه أبدًا.'],
// faq
['Frequently asked questions','الأسئلة الشائعة'],
['<span>Will Lansy increase our revenue?</span><i></i>','<span>هل سيزيد Lansy إيراداتنا؟</span><i></i>'],
['Lansy doesn’t promise revenue. It shows what actually happens in conversations and helps your team improve the metric you choose — add-ons, loyalty cards, next visits.',
 'لا يَعِد Lansy بزيادة الإيرادات. بل يُظهر ما يحدث فعلًا في المحادثات ويساعد فريقك على تحسين المؤشر الذي تختاره — الإضافات، وبطاقات الولاء، والزيارات التالية.'],
['<span>Is recording conversations legal?</span><i></i>','<span>هل تسجيل المحادثات قانوني؟</span><i></i>'],
['Yes, when it’s done right: guests are informed, personal talk is removed and data is anonymized. We help you set up the notices for your locations.',
 'نعم، عندما يتم بالشكل الصحيح: يُبلَّغ الضيوف، وتُحذف الأحاديث الشخصية، وتُخفى هوية البيانات. ونساعدك في إعداد الإشعارات لفروعك.'],
['<span>What hardware do we need?</span><i></i>','<span>ما الأجهزة التي نحتاجها؟</span><i></i>'],
['A counter mic at the front desk and light badges for staff, included in the plan. Lansy can also work with the hardware you already have.',
 'ميكروفون عند الكاشير وشارات خفيفة للموظفين، وهي مشمولة في الباقة. ويمكن أن يعمل Lansy أيضًا مع الأجهزة الموجودة لديك.'],
['<span>Which languages are supported?</span><i></i>','<span>ما اللغات المدعومة؟</span><i></i>'],
['Arabic — tuned on Gulf conversations — English and Russian, including conversations that switch between them mid-sentence. No need to pick a language.',
 'العربية — المدرَّبة على محادثات خليجية — والإنجليزية والروسية، بما في ذلك المحادثات التي تنتقل بينها في منتصف الجملة. لا حاجة إلى اختيار اللغة.'],
['<span>How much does it cost? Is there a pilot?</span><i></i>','<span>كم التكلفة؟ وهل توجد تجربة؟</span><i></i>'],
['Pricing depends on the number of locations and devices. Most teams start with a pilot at one location.',
 'تعتمد الأسعار على عدد الفروع والأجهزة. وتبدأ معظم الفرق بتجربة في فرع واحد.'],
['<span>Does it work with our POS or CRM?</span><i></i>','<span>هل يعمل مع نظام نقاط البيع أو CRM لدينا؟</span><i></i>'],
['Yes. We connect Lansy to your POS, CRM and reporting tools during setup.','نعم. نربط Lansy بنظام نقاط البيع وCRM وأدوات التقارير لديك أثناء الإعداد.'],
['<span>What if the internet goes down?</span><i></i>','<span>ماذا لو انقطع الإنترنت؟</span><i></i>'],
['Devices keep recording and upload everything once the connection is back.','تواصل الأجهزة التسجيل وترفع كل شيء فور عودة الاتصال.'],
['<span>How is it different from a mystery shopper?</span><i></i>','<span>ما الفرق بينه وبين المتسوّق الخفي؟</span><i></i>'],
['A mystery shopper hears one staged visit a quarter. Lansy hears every real conversation, every day — and turns it into advice.',
 'المتسوّق الخفي يسمع زيارة واحدة مُعدّة مسبقًا كل ربع سنة. أما Lansy فيسمع كل محادثة حقيقية، كل يوم — ويحوّلها إلى نصائح.'],
['<span>Where is our data stored?</span><i></i>','<span>أين تُخزَّن بياناتنا؟</span><i></i>'],
['On our servers in the UAE or on-premise — encrypted and isolated per company.','على خوادمنا في الإمارات أو على خوادمكم الخاصة — مشفّرة ومعزولة لكل شركة.'],
['<span>Why don’t you promise 95% accuracy?</span><i></i>','<span>لماذا لا تَعِدون بدقة 95%؟</span><i></i>'],
['Conversational Arabic has no single spelling: even two professional transcribers disagree on 10–13% of words. So we measure on your own recordings — a pilot includes a blind comparison, and every insight links to the moment it came from.',
 'العربية المحكية ليس لها إملاء موحّد: حتى المفرّغان المحترفان يختلفان في <bdi dir="ltr">10–13%</bdi> من الكلمات. لذلك نقيس على تسجيلاتكم أنتم — تتضمن التجربة مقارنة عمياء، وكل استنتاج مرتبط باللحظة التي جاء منها.'],
// final CTA
['See Lansy on your own<br>conversations','جرّب Lansy على<br>محادثاتك الحقيقية'],
['We’ll show real reviews, a manager’s daily report and what employees see after a shift.',
 'سنعرض عليك تقييمات حقيقية، وتقرير المدير اليومي، وما يراه الموظفون بعد الوردية.'],
// footer
['What Lansy is','ما هو Lansy'],['Who it helps','لمن يناسب'],['Data security','أمان البيانات'],['Lansy technology','تقنية Lansy'],
['Mobile app','تطبيق الجوال'],['Industries','القطاعات'],['All industries','جميع القطاعات'],['Cafe and Restaurants','المقاهي والمطاعم'],
['Schools and Education','المدارس والتعليم'],['Pharmacies and Clinics','الصيدليات والعيادات'],['Beauty and Personal Care','التجميل والعناية الشخصية'],
['Call Center and Customer Service','مراكز الاتصال وخدمة العملاء'],['Real Estate','العقارات'],['Company','الشركة'],['About us','من نحن'],
['Blog','المدونة'],['Research','الأبحاث'],['FAQ','الأسئلة الشائعة'],['Contacts','اتصل بنا'],['Contact','تواصل'],
['© 2026 Collabo Tech Ltd. All rights reserved.','<bdi dir="ltr">© 2026 Collabo Tech Ltd.</bdi> جميع الحقوق محفوظة.'],
['+971 (0) 56 509-9514','<bdi dir="ltr">+971 (0) 56 509-9514</bdi>'],['Privacy Policy','سياسة الخصوصية'],['Terms of Use','شروط الاستخدام'],
// aria labels
['Previous','السابق'],['Next','التالي'],['Pause','إيقاف مؤقت'],['Turn sound on','تشغيل الصوت'],
],
// How it works captions, read by the page script
TITLES:['اسمع كل محادثة','افهم اللهجة الخليجية كما تُنطق','اعرف ما نجح وما فات','نصيحة لكل موظف بعد الوردية'],
CAPS:['يسجّل <b>ميكروفون الكاشير</b> المحادثات عند نقطة الخدمة، وتسجّلها <b>الشارات الخفيفة</b> في صالة العمل. ويعمل Lansy أيضًا مع <b>الأجهزة الموجودة لديك</b> — الهواتف والأجهزة اللوحية والميكروفونات الحالية. يستغرق الإعداد <bdi dir="ltr">2–3</bdi> أيام دون أي تمديدات، ولا يحتاج أحد إلى تغيير طريقة عمله: يواصل الفريق التحدث مع الضيوف كما اعتاد.',
 'تتحوّل كل محادثة إلى <b>نص مكتوب مع تحديد المتحدثين</b> — حتى عندما يتكلم عدة أشخاص في وقت واحد. Lansy مدرَّب على <b>محادثات خليجية حقيقية</b>: يحتفظ بالكلمات العامية بدل «تصحيحها» إلى الفصحى، ويتابع الضيوف الذين <b>ينتقلون بين العربية والإنجليزية</b> في منتصف الجملة. وتُخفى <b>أرقام الهواتف والبطاقات</b>.',
 'يقيّم Lansy كل محادثة وفق <b>معايير الخدمة لديك</b> — التحية والأسئلة والعروض والوداع — ووفق <b>المؤشر الذي اخترته</b> لأعمالك. يرى المديرون <b>ما نجح وما فات</b>، محادثةً بمحادثة وعبر الفروع، ويمكنهم فتح أي لحظة لسماع كيف جرت فعلًا.',
 'بعد الوردية يحصل كل موظف على <b>نصيحة شخصية</b> مبنية على محادثاته — ما يستمر فيه، وشيء واحد يجرّبه في المرة القادمة، وعبارة يقولها للضيوف. وأي سؤال إضافي يذهب إلى <b>المساعد</b> مباشرة في تطبيق المراسلة الذي يستخدمه، ويظهر التقدّم أسبوعًا بعد أسبوع. <b>توجيه لا مراقبة.</b>'],
SOUND:{on:'تشغيل الصوت',off:'كتم الصوت'},
};

(()=>{const H=new Map(I18N_AR.PAIRS), KEEP=new Set(['Lansy','Lansy Desk','<small>PRO</small>school','sales@lansy.ai','Sayori','Northbrew']), miss=[];
  I18N_WALK(document.body,
    (el,k)=>{const v=H.get(k); if(v!=null)el.innerHTML=v; else if(!KEEP.has(k))miss.push(k);},
    (n,t)=>{const v=H.get(t); if(v!=null)n.textContent=v; else if(!KEEP.has(t))miss.push(t);});
  document.querySelectorAll('[aria-label]').forEach(el=>{const v=H.get(el.getAttribute('aria-label')); if(v)el.setAttribute('aria-label',v);});
  if(miss.length)console.info('[i18n] left in English:',miss);})();

const moonIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3a6 6 0 0 0 9 9 9 9 0 1 1-9-9Z"/></svg>`;
const sunIconSVG = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="4"/><path d="M12 2v2"/><path d="M12 20v2"/><path d="m4.93 4.93 1.41 1.41"/><path d="m17.66 17.66 1.41 1.41"/><path d="M2 12h2"/><path d="M20 12h2"/><path d="m6.34 17.66-1.41 1.41"/><path d="m19.07 4.93-1.41 1.41"/></svg>`;


// Objek untuk menyimpan semua data pertanyaan per bahasa
const allQuestionsData = {
    osmanlica: [
        // Kategori 1: Muqaddimât al-'Aqā'id (Soal 1-9)
        {
            category: "muqaddimat", originalNumber: 1,
            question: "(۱) علم كلامك تعريفي، موضوعی غایه سی و واضعی نه در؟ متن عقائدك مصنفى كيمدر؟",
            answer: "علم كلامك تعريفى: <span lang='ar' dir='rtl'>وَهُوَ عِلْمٌ يُبْحَثُ فِيهِ عَنْ ذَاتِ اللهِ تَعَالَى وَصِفَاتِهِ وَأَحْوَالِ الْمُمْكِنَاتِ مِنَ الْمَبْدَأَ وَالْمَعَادِ عَلَى قَانُونِ الْإِسْلَامِ</span>\n معناسی کندیسنده حضرت اللهك ذاتندن صفاتندن مَبْدَأَ و معاد اعتباری ايله كائناتك حاللرندن اسلام قانونی اوزره بحث ايديلن علمدر.\nموضوعى : ذَاتُ الله ، صِفَاتُ الله، أَفْعَالُ اللهُ، مَبْدَأَ و مَعَادُ در.\nغایه سی دنیا و آخرت سَعادتينه نائل اولمقدر .\nعلم كلامك واضعى بحسب الاصل حضرت الله و رسولی در.\nداها صكره ايسه امام اعظم ابو حنيفه رَحِمَهُ اللهُ، امام مَنْصُورٌ مُحَمَّدٌ مَا تُرِيدِى و امام أَبُو الْحَسَنِ الْأَشْعَرِى حضرتلريدر.\nمتن عقائدك مصنفى عمر النسفي حضرتلريدر."
        },
        {
            category: "muqaddimat", originalNumber: 2,
            question: "(۲) حَقَائِقِ أَشْيَاء حقنده کی کوروشلر نه لردر ؟",
            answer: "اهل سنت حقائق اشیاء ثابتدر و بوكا دائر علم ده مُتَحَقِّقدر.\nسُوفَسْطَائِيَّه بوده اوچ فِرْقَه در .\nعِنَادِيه اشيانك حقيقتلريني انکار ایدر و بو حقيقتلرك باطل خياللر و وهملردن عبارت اولديغنی سویلر.\nعِنْدِيه اشيانك حقيقتلرينك ثبوتنی انکار ایدر و بو حقيقتلرك اعتقاد لره كوره دکیشه بیله جکنی سویلر.\n- لا أَدْرِيه بر شيئك ثابت اولوب اولمادیغنه دائر علمی انكار ايدر و كنديسنك شبهه جی اولدیغنی سویلر."
        },
        {
            category: "muqaddimat", originalNumber: 3,
            question: "(۳) مخلوقات ایچون علمك سببلرى (أَسْبَابُ الْعِلِمْ) قاچدر ؟ حَوَاسَ سَلِيمَه نه لردر؟ خبر صادق قاچدر؟",
            answer: "او چدر حواس سلیمه، خبر صادق، عقل\nحواس سليمه: سمع، بَصَرْ، شَمْ، ذَوْق لَمْس در.\nخبر صادق ده ایکی قسمدر : خَبَرٍ مُتَوَاتَرُ، خبر رَسُولُ در."
        },
        {
            category: "muqaddimat", originalNumber: 4,
            question: "(٤) خبر متواترك تعریفی نه در حکمی نه در؟ و بر مثال ویریکز؟",
            answer: "خبر متواتر : <span lang='ar' dir='rtl'>وَهُوَ الْخَبَرُ الثَّابِتُ عَلَى الْسِنَةِ قَوْمٍ لَا يُتَصَوَّرُ تَوَاطُفُهُمْ عَلَى الْكِذَّبِ</span>\nمعناسی یالان اوزرینه اتفاقلری دوشونولمه ین بر قَوْمِك لسانلری اوزره ثابت اولان خبر در .\nحکمی علم ضروری بی ایجاب ايدر.\nمثال اوزاق بلده لری و کچمش زمانده یا شامش پادشاهلری بيلمك كبي."
        },
        {
            category: "muqaddimat", originalNumber: 5,
            question: "ه خبر رسول هانکی علمی ایجاب ایدر؟",
            answer: "خبر رسول؛ علم استدلالي بي ايجاب ايدر."
        },
        {
            category: "muqaddimat", originalNumber: 6,
            question: "(٦) عقل ايله ثابت اولان علمك قسملرینی برر مثال ایله سویله یکز؟",
            answer: "- عقل ايله بِالْبَدَاهَه ثابت اولان علم، علم ضروريدر.\nمثال: بر كلك كندى جزئندن دها بيوك اولديغنى بيلمك.\nعقل ايله بالاستدلال ثابت اولان علم ایسه علم اكتسابی در.\nمثال بر پرده طومان کورولديكنده اوراده آتشك وار اولديغنى بيلمك."
        },
        {
            category: "muqaddimat", originalNumber: 7,
            question: "(۷) الهام اسباب علمدن میدر؟",
            answer: "الهام، اسباب علمدن دکلدر."
        },
        {
            category: "muqaddimat", originalNumber: 8, 
            question: "(۸) عالَم مُحْدَث ميدر ؟ عالم نچون مُحدث در؟", 
            answer: "عالم بوتون جزلريله برابر محدثدر.\nچونکه عالم، محدث اولان أَعْيَانٌ و أَعْرَاضْدن مركبدر."
        },
        { // Ini untuk bagian kedua dari soal 8 Osmanlica, yang masuk Ilahiyat
            category: "ilahiyat", originalNumber: 8.1, // Menggunakan sub-nomor agar unik, atau gabungkan ke soal 8 di Muqaddimah jika lebih sederhana
            question: "(۸ تتمه) ...عالمك محدثى كيمدر؟", // Lanjutan soal 8
            answer: "عالمك محدثى الله تعالى در."
        },
        {
            category: "muqaddimat", originalNumber: 9,
            question: "(9) أَعْيَانٌ و أَعْرَاضُ ك تعريفى نه در قسملری نه لردر ؟ جوهر نه ديمكدر؟ اعراض نره لرده بولونور؟",
            answer: "أعيان: <span lang='ar' dir='rtl'>مَا يَكُونُ لَهُ قِيَامٌ بِذَاتِهِ</span> معناسی بذاته قائم اولاندر\nاعراض : <span lang='ar' dir='rtl'>مَا لَا يَقُومُ بِذَاتِهِ.</span> معناسی بذاته قائم اولمياندر.\nأعيان: ایکی و یا دها چوق جزدن مرکب اولورسه جسم در اولمازسه جوهر در.\nجوهر : <span lang='ar' dir='rtl'>وَهُوَ الْجُزْءُ الَّذِي لَا يَتَجَزَّى</span> معناسی پارچالا نمایان جزدر.\nاعراض جسم و جوهر لرده بولونور رنگلر، طاتلر، قوقولر کی."
        },
        // Kategori 2: Ilahiyat 
        {
            category: "ilahiyat", originalNumber: 10,
            question: "(۱۰) صفات سلبيه لر نه لردر ؟",
            answer: "جناب حق - عَرَضْ جِسِمٌ، جَوْهَرٌ ، مُصَوَّرٌ ، مَحْدُودٌ، مَعْدُودُ، مُتَبَعِضُ، مُتَجَنِّى، مُتَرَكِبْ و مُتَنَاهِی دکلدر\nماهيت و كيفيتله وصفلا نماز\nهیچ بر مکانله مکانلاشماز، اوزرینه هیج بر زمان کچمز\nاوکا هیچ بر شی بکزه مز\nاونك علمندن و قدرتندن هیچ بر شی چیقماز"
        },
        {
            category: "ilahiyat", originalNumber: 11,
            question: "(۱۱) صفات الهيه حقنده اهل سنتك كوروشي نه در؟",
            answer: "جناب حقك صفتلرى از لیدر جناب حقك ذاتى ايله قائمدر، ذاتنك عينى ده دکل غیری ده دکلدر ."
        },
        {
            category: "ilahiyat", originalNumber: 12,
            question: "(۱۲) صفات ذاتيه لر، صفات ثبوتيه لر و صفات فعليه لر نه لر در؟",
            answer: "صفات ذاتيه لر : وُجُودٌ، قِدَمْ، بَقًا، وَحْدَانِيَتْ، مُخَالَفَةٌ لِلْحَوَادِتْ، قِيَامُ بِنَفْسِهِ در\nصفات ثبوتيه لر : حَيَاتٌ ، عِلِمْ، سَمِعْ، بَصَرْ ، إِرَادَتْ، قُدْرَتْ، كَلَامُ، تَكْوِین در.\nصفات فعليه لر : تَخْلِيقُ، تَرْزِيق، إِبْدَاعْ، إِنْشَاءُ، إِحْيَاءُ، إِمَاتَه در.\n(تخليق : ياراتمق / ترزيق: رز قلا نديرمق / ابداع بگزرى اولما قسزك ياراتمق / انشاء : يوقدن وار ايتمك احياء ديريلتمك / اماته: اولدورمك)"
        },
        {
            category: "ilahiyat", originalNumber: 13,
            question: "(۱۳) جناب حق نصل بر کلامله متکلمدر؟",
            answer: "جناب حق، کندی ذاتیله قائم، ازلی حرفلر و سسلر جنسندن اولمیان سکوت و آفتَه مُنَافِی بر کلامله مُتَكَلِّمْدر.\nالله تعالى كلام صفتیله آمر، ناهی، مخبر در."
        },
        {
            category: "ilahiyat", originalNumber: 14,
            question: "(١٤) قرآنك مخلوق اولوب اولماديغي خصوصنده اهل سنتك كوريشني سويله يكز ؟",
            answer: "كلام الله اولان قرآن كريم ايکی قسمدر .\n۱ - کلام نفسی جناب حقك ذاتيله قائم اولوب از لیدر، مخلوق دکلدر.\n۲ - کلام لفظی: حرف و سسلردن مرکب اولان نظمدر، مخلوقدر."
        },
        {
            category: "ilahiyat", originalNumber: 15,
            question: "(١٥) تكوين نه در؟ تكوين، مُكَونك عيني ميدر؟",
            answer: "تكوين الله تعالى نك ازلى بر صفتيدر.\nتكوين الله تعالى نك عالمی و عالمك جزلرندن هر بر جزئی وار اولوشی وقتنده ياراتمه سيدر.\nما تريديلره كوره تكوين مكونك عينى دكل غيريدر ."
        },
        {
            category: "ilahiyat", originalNumber: 16,
            question: "(١٦) رؤية الله جائز ميدر ؟ كیفیتی نه شکلده اولاجقدر؟",
            answer: "رؤية الله؛ عقلا جائز در نقلا واجبدر.\nکیفیتی حضرت الله بر مكانده اولمقسزك بر یونده اولمقسزك، قارشيلقلى اولمقسزك بر ضياء اولمقسزك و الله تعالى ايله قول آراسنده بر مسافه اولمقسزك جنتدن كوروله جكدر ."
        },
        {
            category: "ilahiyat", originalNumber: 22,
            question: "(۲۲) واللهُ تَعَالَى يُضِلُّ مَنْ يَشَاءُ ويَهْدِي مَنْ يَشَاءُ افاده سندن مقصد نه در؟",
            answer: "بو افاده دن مقصد؛ جناب حق هدایتی دیله ینلر ایچون هدایتی دیلر و پاراتیر ضَلَالَتی دیله ینلر ایچون ده ضلالتی دیلر و پاراتیر."
        },
        {
            category: "ilahiyat", originalNumber: 23,
            question: "(۲۳) أَصْلَحْ عَلَى اللهِ واجب ميدر؟",
            answer: "قولك منفعتنه اولان شيئى خلق ايتمك حضرت الله اوزرینه واجب دكلدر."
        },
        // Kategori 3: Nubuwiyat 
        {
            category: "nubuwiyat", originalNumber: 35,
            question: "(٣٥) جناب حق پیغمبرلری نیچون کوندرمشدر ؟",
            answer: "انسانلری او یاریب جنت ایله مژده له مه لری جهنم ایله قورقو تمالری و انسانلرك محتاج اولد قلری دین و دنیا ایشلرینی بیان ایتمه لری ایچون کوندرمشدر ."
        },
        {
            category: "nubuwiyat", originalNumber: 36,
            question: "(٣٦) جناب حق انبیایی نچون معجزه ایله تأیید ایتمشدر؟",
            answer: "معجزه اولماسه ايدى انبيانك قولنى قبول ايتمك واجب اولمازدی رسالت دعواسنده صادق اولان کاذب اولاندن آیرییلمازدی"
        },
        {
            category: "nubuwiyat", originalNumber: 37,
            question: "(۳۷) انبيانك أولى، آخری و افضلی کیمدر؟",
            answer: "اولی؛ آدم عليه السلامدر.\nآخری؛ محمد مصطفی صلى الله عليه و سلمدر.\nافضلی؛ محمد مصطفی صلى الله عليه و سلمدر."
        },
        {
            category: "nubuwiyat", originalNumber: 38,
            question: "(۳۸) انبيانك عددی قاچدر؟",
            answer: "انبيانك عددينك بيانی بعض حدیث شریفلرده روایت ایدیلمشدر بر روایته کوره یوز یکرمی دورت بيك ديگر بر روایته کوره ایکی یوز یكرمى دورت بيك پيغمبر كونده ریلمشدر آنجاق أولى اولان بر عدده تخصیص ایتمه مكدر نته كيم الله تعالى شويله بويورمشدر : <span lang='ar' dir='rtl'>مِنْهُمْ مَنْ قَصَصْنَا عَلَيْكَ وَمِنْهُمْ مَنْ لَمْ نَقْصُصْ عَلَيْكَ.</span>"
        },
        {
            category: "nubuwiyat", originalNumber: 39, 
            question: "(۳۹) ملائکهء كرام حقنده معلومات ويريكز ؟",
            answer: "ملائكهء كرام الله تعالى نك امريله عامل قوللريدر.\nارككلك و ديشيلك ايله وصفلا نمازلر ."
        },
        {
            category: "nubuwiyat", originalNumber: 40,
            question: "(٤٠) معراج قاچ صفحه در؟ بو صفحه لر نه ایله ثابتدر و منكر لرينك حكمى نه در؟",
            answer: "اوچ صفحه در .\n۱ - مسجد حرامدن مسجد اقصایه قدر اولان صفحه در بوكا إسرا دينير. آيتله ثابتدر منکری کافر اولور.\n۲ - مسجد اقصادن سمواته قدر اولان صفحه در خبر مشهور ایله ثابتدر منکری بدعت اهلی اولور.\n- سمواتدن الى ما شاء الله اولان صفحه در خبر واحد ایله ثابتدر منكرى ضال و مضل اولور."
        },
        {
            category: "nubuwiyat", originalNumber: 49,
            question: "(٤٩) ولی انبیا درجه سنه اولا شابیلیر می؟",
            answer: "آصلا اولا شاماز."
        },
        {
            category: "nubuwiyat", originalNumber: 55,
            question: "٥٥) بشر ملئکه و رسوللری آراسنده فضیلت صیر الامه سی ناصلدر؟",
            answer: "بشرك رسوللرى ملكلرك رسوللرندن افضلدر.\nملكلرك رسوللرى بشرك عامه سندن افضلدر.\nبشرك عامه سى ملكلرك عامه سندن افضلدر."
        },
        
        // Kategori 4: Ahwal al-Mumkinat
        {
            category: "ahwal_mumkinat", originalNumber: 17,
            question: "(۱۷) افعال عباد حقنده اهل سنتك كوروشي نه در؟",
            answer: "کفر - ایمان، طاعت - عصيان كبى قولك فعللرينك خالقى جناب حقدر قول ايسه كاسبدر.\nقوللر بو فعللر سببيله ثوابلانير و يا عذاب اولنور. بو فعللردن كوزل اولانلر الله تعالى نك رضاسی ایله در قبيح اولانلر ايسه الله تعالى نك رضاسي ايله دكلدر."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 18,
            question: "(۱۸) استطاعت نه دیمکدر؟ قاچ قسمدر؟",
            answer: "استطاعت، کوچ و قدرت دیمکدر .\nایکی قسمدر:\n۱ - فعلك كنديسيله ميدانه کلدیکی حقیقی قدرتدر که بو فعل ایله برابر در\n۲ - سَلَامَتِ الْأَسْبَابُ والآلات والجوارح معناسنه اولان قدرتدر که بو، فعلدن اوکجه در."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 19,
            question: "(۱۹) قول كوجى نك بيتمديكي شيلر ایله مُكَلَّف قیلینیر می؟",
            answer: "مكلف قيلينماز انسانك وورمه سی عقبنده دوکولنده ميدانه كلن الم انسانك قير ماسی عقبنده جامدہ کی انکسار و بونلره بکزه ین شيلرك تمامي؛ الله تعالى نك مخلوقيدر . قول ايچون بونلرك يارا ديلماسنده بر تأثير يوقدر."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 20,
            question: "(۲۰) مقتول اجلی ایله می اولمشدر؟ اجل قاچدر؟",
            answer: "مقتول اجلى ايله اولمشدر أولى ايله قائم اولان أولوم، الله تعالى نك مخلوقيدر. قولك بونده ياراتمه و اكتساب جهتندن بر تأثیری يوقدر . اجل بردر ."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 21,
            question: "(۲۱) رزق ایله علاقه لى معلومات ويريكز؟ حرام رزق میدر؟",
            answer: "ايستر حلال اولسون ایستر حرام اولسون هر کس کندی رزقنی تمامیله آلیر بر انسانك کندی رزقنی بیمه مه سی و یا بر انسانك رزقنی باشقاسنك بيمه سی دوشونوله مز. حرام رزقدر ."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 24,
            question: "(٢٤) قبر عذابی کیملر ایچوندر؟",
            answer: "کافرلر و بعضی عاصی مؤمنلر ایچوندر"
        },
        {
            category: "ahwal_mumkinat", originalNumber: 25,
            question: "(٢٥) مُنْكَرُ نَكِير و كرامًا كاتبين ملكلرى حقنده معلومات ويريكز؟",
            answer: "منکر و نکیر ایکی ملکدر که قبره داخل اولورلر و قوله ربندن دینندن و نبیسندن سؤال ایدرلر.\nكراما كاتبين انسانلرك ابي و كوتو فعللرینی قید ایدن ملکلر در."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 26,
            question: "(٢٦) بعث وزن کتاب سؤال حوض صراط جنت و جهنم حق میدر؟",
            answer: "اوت حقدر."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 27,
            question: "(۲۷) جنت و جهنم شو آن موجود میدرلر؟ جنت و جهنم فانی می در؟",
            answer: "جنت و جهنم شو آن موجود درلر.\nجنت و جهنم جنت و جهنمك اهلي فاني اولمازلر ."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 28,
            question: "(۲۸) کناه کبائری صاییکز؟",
            answer: ". الله تعالى يه شرك قوشمق\n۲. حقسز پره آدم اولدورمك\n. ناموصلی قادینه زنا افتراسنده بولونمق .\n٤. زنا ايتمك\nه. حربدن قاجمق\n٦. سحر يا بمق و يا بدير مق\n. يتيم مالي يمك\n. حرم شريفده كناه ايشله مك\n۱۰. فائز ييمك\n۱۱. خير سزلق يا بمق\n۱۲. شراب ایچم\n. مسلمان آنا بابایه عاصی اولمق"
        },
        {
            category: "ahwal_mumkinat", originalNumber: 29,
            question: "(۲۹) مُرْتَكِب كَبِيرَه بيوك كناه صاحبي حقنده اهل سنتك كوروشني سويله يكز ؟",
            answer: "- مرتکب کبیره مؤمندر چونکه تصدیق باقیدر.\nبيوك كناهلر مؤمن قولی ایماندن چیقاریب کفره کیر دیرمز .\nمرتكب كبيره ابدياً جهنمده قالماز.\nالله تعالی کندیسنه شرك قوشولما سنى عفو ايتمز ايستر بيوك كناه ايستر كوچوك كناه اولسون شركك غيرى بوتون کناهلری دیله دیکی کیمسه لر ایچون عفو ایدر.\nاسْتِحْلَال اولمادیغی مدتجه كوچوك كناه ايشله مكدن طولایی عذاب بويوك كناه ايشله مكدن طولایی عفو جائزدر.\n(اسْتِحْلال حلالی حرام حرامی حلال قبول و اعتقاد ايتمك) كفردر."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 30,
            question: "(۳۰) رسوللرك و خير اهلى نك شفاعتی ثابت ميدر؟",
            answer: "بويوك كناه صاحبلری حقنده ثابتدر."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 31,
            question: "(۳۱) ایمان نه دیمکدر؟",
            answer: "ايمان: <span lang='ar' dir='rtl'>هُوَ التَّصْدِيقُ بِمَا جَاءَ النَّبِيُّ عَلَيْهِ السَّلامُ بِهِ مِنْ عِنْدِ اللَّهِ تَعَالَى وَالْإِقْرَارُ بِهِ</span>\nمعناسی بيغمبر افنديمزك (صلى الله عليه وسلم حضرت الله طرفندن کتیردیکی خصوصلرك تمامنى قلب ايله تصدیق و دیل ایله اقرار ايتمكدر."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 32,
            question: "(۳۲) عمللرك ايماندن جز اولوب اولمادیغی خصوصنده اهل سنتك كوروشي نه در و ایمان زیاده لشیر می؟",
            answer: "عمللر ايمانك حقيقتندن ده كمالندن ده بر جزء دکلدر بلکه کمالنه اشار تدر.\nایمان زیاده لشمز و نقصانلاشمز.\nبلكه ايمانك نورى زیاده لشیر و نقصانلاشیر ایمان و اسلام بردر"
        },
        {
            category: "ahwal_mumkinat", originalNumber: 33,
            question: "(٣٣) أَنَا مُؤْمِنٌ حَقًّا ديمك مناسب ميدر؟",
            answer: "قولده تصدیق و اقرار بولوندیغی زمان قول ايچون انا مؤمن حقا ديمك مناسبدر.\nأما <span lang='ar' dir='rtl'>أَنَا مُؤْمِنٌ إِنْ شَاءَ اللهُ</span> ديمك مناسب دکلدر چونکه اگر بو سوز شك ايچون اولورسه شبهه سز کفر در."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 34,
            question: "(٣٤) سَعَادَتْ، شَقَاوَتْ ، إِسْعَاد و إِشْقَا حقنده معلومات ويريكز؟",
            answer: "سعادت و شقاوت قولك صفتيدر. إسعاد و إشقا ايسه جناب حقك صفتيدر.\nسعيد ايماندن صوكره مرتد اولمقله شقى اولا بيلير.\nشقی ده کفردن صوکره ایمان ايتمكله سعيد اولا بيلير.\nدكيشيكلك قولك صفتى اولان سعادت و شقاوتده در جناب حقك صفتى اولان إسعاد و إشقاده دكلدر."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 41,
            question: "(٤١) اوليانك كرامتلری حق میدر؟ بعضی کرامتلری صاییکز؟",
            answer: "حقدر؛\n1 - قیصه زمانده اوزاق مسافه بي قطع ايتمك\n۲- احتیاج زماننده بیه جك ايچه جك و كييه جكك حاضر اولماسی،\nصو اوزرنده يورومك\n٤ - هواده اوچمق\nه جانسز وارلقلر و حیوانلر ایله قونوشمق."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 42,
            question: "(٤٢) أنبيادن صوكره بشرك اك فضيلتليلريني خلافت صیره سی و مدتلريله برابر سویله یکز؟",
            answer: "أنبيادن صوكره بشرك اك فضيلتليسي:\n١- حضرتِ أَبُو بَكِرْ الصِّدِّيقُ رَضِيَ اللهُ عنه. ایکی سنه، اوچ آی، یکرمی کون\n۲- حضرت عُمَرُ الْفَارُوقُ رضى الله عنه. اون سنه، آلتی آی دورت کون\n- حضرت عُثْمَانُ ذِي النُّورَيْن رضى الله عنه. اون بر سنه اون بر آی اون سکیز کون\n- حضرت عَلى كَرَّمَ اللهُ وَجْهَه رضى الله عنه. دورت سنه، اون آی بر کون\nه حضرت حَسَن رضى الله عنه. آلتی آی.\nجمعا اوتوز سنه در قیر اوچ کون خليفه لك يا بيلمشدر."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 43,
            question: "(٤٣) امامك وظيفه لرى نه لردر ؟",
            answer: "1 - حكملرى اجرا ايتمك\n۲ - حدارى تطبيق ايتمك\n- حدو دلرى محافظه ايتمك\n- اوردو بي تجهيز ايتمك\nه - زکاتلری طو بلامق\n٦ - عاصیلری خیر سزلری و پول کسیجیلری جز الاندير مق\nجمعه و بایرام نمازلرینی قیلدیرمق\nغنيمتلرى تقسيم ايتمك\n۹- شاهدلرك شهادتني قبول ايتمك\n١٠ - أبوينى اولمايان اركك و قيز جوجو قلري اولنديرمك\n11 - قوللر آراسنده واقع اولان منازعه لرى كسمك"
        },
        {
            category: "ahwal_mumkinat", originalNumber: 44,
            question: "٤٤) امام ایچون لازم اولان و اولمیان شرطلر نه لردر ؟ فسق و ظلم سببی ایله امام عزل اولونور می؟",
            answer: "امامك كيزلى اولمامسى بكله نن اولمامسی ظاهر اولمسی قریشدن اولمسی لازمدر.\nوَلَايَتِ مُطْلَقَهءِ كَامِلَه اهلندن اولماسی، کسکین کوروشلی اولماسی حکملری اجرا ايتمكه دار اسلامك صينيرلرینی محافظه ایتمکه و ظالمدن مظلومك حقینی آلمایه قادر اولماسی شرطدر معصوم اولمسى زماننك اك فضيلتليسی اولمسی و اولاد على دن اولمسى شرط قيلینماز فسق و ظلم سببی ایله امام عزل اولونماز ."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 45,
            question: "٤٥) فاجرك آرقه سنده نماز و فاجر اوزرینه جنازه نمازی جائز میدر؟",
            answer: "فاجرك آرقه سنده نماز جائزدر، چونکه افندیمز : <span lang='ar' dir='rtl'>صَلُّوا خَلْفَ كُلِّ بَر وَ فَاجِرٍ</span> \" هر ايي و فاجرك أرقه سنده نماز قيليكز. \" بيورمشدر .\nفاجر اوزرینه جنازه نمازی جائز در"
        },
        {
            category: "ahwal_mumkinat", originalNumber: 46,
            question: "(٤٦) صحابه کرامی نصل ذکر ایده ریز؟",
            answer: "آنجاق خیر ایله ذكر ايده ريز."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 47,
            question: "(٤٧) عشره مبشره بی تعداد ايديكز؟",
            answer: "۱ - حضرت ابو بكر رضى الله عنه\n۲- حضرت عمر رضی الله عنه\nحضرت عثمان رضى الله عنه\n- حضرت علی رضی الله عنه\nه - حضرت زبیر بن عوام رضى الله عنه\n٦ - حضرت طلحة بن عُبَيْدُ الله رضى الله عنه\nحضرت عبد الرحمن بن عوف رضي الله عنه\nحضرت سعد بن ابی وقاص رضى الله عنه\n- حضرت سعيد بن زيد رضى الله عنه\n۱۰ - حضرت ابو عبيدة بن جراح رضى الله عنه"
        },
        {
            category: "ahwal_mumkinat", originalNumber: 48,
            question: "(٤٨) اهل سنتك علامتلرى نه لردر ؟",
            answer: "١ - تَفْضِيلُ الشَّيْخَيْنِ : خضرت عمر و ابو بكرك فضيلتلي اولديغنه اينانمق\n٢ - محبَّةُ الخَتَنَيْنِ : حضرت عثمان و على بي سومك\n٣- الْمَسْحُ عَلَى الْخَفَيْنِ : مستلر اوزرينه مسح ايتمك\n- تَعْظِيمُ الْقِبْلَتَيْنِ : كعبه معظمه ومسجد اقصايه تعظيم ايتمك\nه - الصَّلَوةُ عَلَى الْجَنَازَتَيْنِ : بر و فاجر اوزرینه جنازه نمازی قیلمق\n٦ - الصَّلَوةُ خَلْفَ الْإِمَامَيْنِ : بر و فاجرك آرقه سنده نماز قيلمق"
        },
        {
            category: "ahwal_mumkinat", originalNumber: 50,
            question: "(٥٠) قول، کندیسندن امر و نهيك دوشه جکی بر درجه یه اولا شابیلیرمی؟",
            answer: "قول، كنديسندن امر و نهينك دوشه جکی بر درجه به اولا شاماز چونکه اولا شاما یا جغی خصوصنده مجتهدلرك اجماعی واردر ."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 51,
            question: "(٥١) کفری ایجاب ایتدیرن سببلر نه لردر ؟",
            answer: "۱ - نصلرى رد ايتمك\n۲- شريعتله آلاى ايتمك\n- الله تعالى نك رحمتندن اميد كسمك\n- معصيتي خفيفه المق\nه - معصيتي حلال كورمك\n٦ - كاهنك غائبدن خبر ويرديكي شيلرى تصديق ايتمك\nالله تعالى نك عذابندن امين اولمق\n- نصلرك ظاهر ندن بَاطِنِيَّه نك ادعا ابتديكي معنالره دونمك"
        },
        {
            category: "ahwal_mumkinat", originalNumber: 52,
            question: "(٥٢) حياتده كيلرك أولولر ایچون یا پدقلری دعالر و اونلر ایچون ويردكلرى صدقه لرده أولولره منفعت وارميدر ؟",
            answer: "اوت واردر الله تعالى دعالره اجابت ایدر و احتیاجلری کیده ریر ."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 53,
            question: "(٥٣) قیامت علامتلری نه لردر ؟",
            answer: "دَجَّالِكَ، دَابَّةُ الْأَرْضِكَ وَ يَأْجُوجٌ ومَأْجُوجُك چيقماسی،\nعيسى عليه السلامك سمادن نزولى\nكونشك باطيدن طوغما سيدر."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 54,
            question: "(٥٤) مجتهد ايله علاقه لى معلومات ويريكز؟",
            answer: "مجتهد ویردیکی حكملرده بعضًا خطا ايدر بعضا ده اصابت ايدر."
        }
    ],
    indonesia: [
        // Kategori 1: Muqaddimât al-'Aqā'id (Soal 1-9)
        {
            category: "muqaddimat", originalNumber: 1,
            question: "Apa itu Ilmu Kalam? Apa pokok bahasannya, tujuannya, dan siapa yang pertama kali menyusunnya? Siapa penulis kitab 'Matn-i Akâid'?",
            answer: "Definisi Ilmu Kalam: <span lang='ar' dir='rtl'>وَهُوَ عِلْمٌ يُبْحَثُ فِيهِ عَنْ ذَاتِ اللهِ تَعَالَى وَصِفَاتِهِ وَأَحْوَالِ الْمُمْكِنَاتِ مِنَ الْمَبْدَأَ وَالْمَعَادِ عَلَى قَانُونِ الْإِسْلَامِ</span>\nArtinya: Ilmu yang di dalamnya dibahas tentang Dzat Allah Ta'ala, sifat-sifat-Nya, dan keadaan segala sesuatu yang mungkin ada, dari permulaan hingga hari kembali, sesuai dengan hukum Islam.\nPokok Bahasan: Dzatullah (Dzat Allah), Sıfâtullah (Sifat-sifat Allah), Ef'âlullah (Perbuatan-perbuatan Allah), Mebde' (Permulaan/Penciptaan), dan Me'âd (Hari Kembali/Akhirat).\nTujuan: Untuk meraih kebahagiaan di dunia dan akhirat.\nYang Pertama Menyusun (Wazıı bi-hasebi'l-asl): Pada dasarnya adalah Allah Ta'ala dan Rasul-Nya.\nKemudian, para ulama seperti Imam-ı A'zam Ebû Hanîfe rahimehullah, Imam Mansûr Muhammed Mâtürîdî, dan Imam Ebü'l-Hasan el-Eş'arî hazretleridir.\nPenulis Kitab 'Matn-i Akâid': Adalah Ömer en-Nesefî hazretleridir."
        },
        {
            category: "muqaddimat", originalNumber: 2,
            question: "Apa saja pandangan tentang \"Hakikat Segala Sesuatu\" (Hakâik-i eşyâ)?",
            answer: "Menurut Ahlusunah: Hakikat segala sesuatu itu tetap dan ilmu tentangnya juga terbukti benar.\nKelompok Sofestâiyye (Sofisme) terbagi menjadi tiga golongan dalam hal ini:\nİnâdiyye: Mereka mengingkari hakikat segala sesuatu dan mengatakan bahwa hakikat-hakikat ini hanyalah khayalan dan keraguan yang batil.\nİndiyye: Mereka mengingkari ketetapan hakikat segala sesuatu dan mengatakan bahwa hakikat-hakikat ini bisa berubah sesuai dengan keyakinan (persepsi).\nLâ edriyye: Mereka mengingkari ilmu tentang apakah suatu hal itu tetap atau tidak, dan mereka mengakui diri sebagai orang yang ragu."
        },
        {
            category: "muqaddimat", originalNumber: 3,
            question: "Ada berapa sebab (Esbâb-ül ilm) seseorang bisa mendapatkan ilmu? Apa saja \"Indra yang Sehat\" (Havâss-ı selîme)? Ada berapa jenis \"Berita yang Benar\" (Haber-i sâdık)?",
            answer: "Ada tiga sebab: Havâss-ı selîme (indera yang sehat), haber-i sâdık (berita yang benar), akıl (akal).\nHavâss-ı selîme (Indra yang Sehat): Meliputi Sem' (pendengaran), Basar (penglihatan), Şemm (penciuman), Zevk (rasa), dan Lems (sentuhan).\nHaber-i sâdık (Berita yang Benar) ada dua jenis: Haber-i mütevâtir (berita mutawatir) dan haber-i Resûl (berita dari Rasul)."
        },
        {
            category: "muqaddimat", originalNumber: 4,
            question: "Apa definisi \"Haber-i mütevâtir\" (Berita yang Diriwayatkan secara Berkesinambungan oleh Banyak Orang)? Apa hukumnya? Berikan satu contoh.",
            answer: "Definisi Haber-i mütevâtir: <span lang='ar' dir='rtl'>وَهُوَ الْخَبَرُ الثَّابِتُ عَلَى الْسِنَةِ قَوْمٍ لَا يُتَصَوَّرُ تَوَاطُفُهُمْ عَلَى الْكِذَّبِ</span>\nArtinya: Berita yang tetap di lidah suatu kaum yang tidak mungkin bersepakat untuk berbohong.\nHukumnya: Menghasilkan İlm-i zarûrî (pengetahuan pasti).\nContoh: Seperti mengetahui adanya kota-kota yang jauh dan para penguasa yang hidup di masa lalu."
        },
        {
            category: "muqaddimat", originalNumber: 5,
            question: "\"Haber-i Resûl\" (Berita dari Rasul) menghasilkan ilmu apa?",
            answer: "Haber-i Resûl menghasilkan ilm-i istidlâlî (ilmu yang didapatkan melalui penalaran/bukti)."
        },
        {
            category: "muqaddimat", originalNumber: 6,
            question: "Sebutkan jenis-jenis ilmu yang didapatkan melalui akal, beserta contohnya masing-masing.",
            answer: "Ilmu yang didapatkan akal secara langsung (tanpa perlu bukti/penalaran), yaitu İlm-i zarûrî (ilmu yang pasti):\nContoh: Mengetahui bahwa keseluruhan itu lebih besar daripada sebagiannya.\nIlmu yang didapatkan akal melalui penalaran atau bukti, yaitu İlm-i iktisâbî (ilmu yang diperoleh):\nContoh: Seperti mengetahui bahwa ada api di balik dinding, setelah melihat asap di sana."
        },
        {
            category: "muqaddimat", originalNumber: 7,
            question: "Apakah \"İlham\" (ilham/inspirasi) termasuk salah satu sumber ilmu?",
            answer: "Tidak, ilham bukan termasuk sumber ilmu."
        },
        { // Soal 8 Indonesia (mencakup Osmanlica 8 dan 8.1)
            category: "muqaddimat", originalNumber: 8, 
            question: "Apakah alam ini 'muhdes' (baru/diciptakan)? Mengapa alam itu 'muhdes'? Siapa yang menciptakan alam?",
            answer: "Alam, beserta seluruh bagiannya, adalah muhdes (baru/diciptakan).\nMengapa muhdes? Karena alam tersusun dari a'yân (zat-zat) dan a'râz (sifat-sifat) yang keduanya adalah muhdes.\nYang menciptakan alam adalah Allah Teâlâ."
        },
        {
            category: "muqaddimat", originalNumber: 9,
            question: "Apa definisi \"A'yân\" dan \"A'râz\"? Apa saja jenis-jenisnya? Apa arti \"Cevher\"? Di mana \"A'râz\" ditemukan?",
            answer: "A'yân: <span lang='ar' dir='rtl'>مَا يَكُونُ لَهُ قِيَامٌ بِذَاتِهِ</span>\nArtinya: Sesuatu yang keberadaannya berdiri sendiri.\nA'râz: <span lang='ar' dir='rtl'>مَا لَا يَقُومُ بِذَاتِهِ</span>\nArtinya: Sesuatu yang keberadaannya tidak berdiri sendiri (membutuhkan yang lain).\nJenis A'yân: Jika A'yân tersusun dari dua atau lebih bagian, itu disebut cisim (benda). Jika tidak, itu disebut cevher (partikel dasar).\nCevher: <span lang='ar' dir='rtl'>وَهُوَ الْجُزْءُ الَّذِي لَا يَتَجَزَّى</span>\nArtinya: Bagian yang tidak bisa dibagi lagi.\nA'râz ditemukan pada cisim dan cevher, seperti warna, rasa, atau bau."
        },
        // Kategori 2: Ilahiyat 
        {
            category: "ilahiyat", originalNumber: 10,
            question: "Apa saja Sıfât-ı Selbiyye (Sifat-Sifat yang Menafikan Kekurangan dari Allah)?",
            answer: "Allah Ta'ala bukanlah araz (sifat), cisim (benda), cevher (partikel), musavver (memiliki bentuk), mahdûd (memiliki batas), ma'dûd (terhitung), müteba'ıd (terbagi-bagi), mütecezzi (terpecah-pecah), mürekkeb (tersusun), dan mütenâhî (berakhir/berbatas).\nDia tidak disifati dengan hakikat dan bagaimana (kaifiyat).\nDia tidak bertempat di mana pun, dan tidak berlalu waktu atas-Nya.\nTidak ada sesuatu pun yang menyerupai-Nya.\nTidak ada sesuatu pun yang luput dari ilmu dan kekuasaan-Nya."
        },
        {
            category: "ilahiyat", originalNumber: 11,
            question: "Bagaimana pandangan Ahlusunah tentang \"Sifat-Sifat Ilahi\" (Sıfât-ı İlâhiyye)?",
            answer: "Sifat-sifat Allah Ta'ala adalah kekal (ezelî). Sifat-sifat itu melekat pada Dzat-Nya; tidak sama dengan Dzat-Nya, tetapi juga tidak terpisah dari Dzat-Nya."
        },
        {
            category: "ilahiyat", originalNumber: 12,
            question: "Apa saja Sıfât-ı Zâtiyye (Sifat-Sifat Dzat), Sıfât-ı Sübûtiyye (Sifat-Sifat Kebenaran/Penetapan), dan Sıfât-ı Fi'liyye (Sifat-Sifat Perbuatan)?",
            answer: "Sıfât-ı Zâtiyye (Sifat-Sifat Dzat Allah yang Wajib Ada): Vücûd (Ada), Kıdem (Terdahulu/Tidak Berpermulaan), Bekâ (Kekal/Tidak Berakhir), Vahdâniyet (Maha Esa), Muhâlefetün li'l-havâdis (Berbeda dari Segala yang Baru/Tercipta), Kıyâm bi-nefsihî (Berdiri Sendiri/Tidak Membutuhkan yang Lain).\nSıfât-ı Sübûtiyye (Sifat-Sifat yang Menetapkan Kesempurnaan Allah): Hayât (Hidup), İlim (Mengetahui), Sem' (Mendengar), Basar (Melihat), İrâdet (Berkehendak), Kudret (Berkuasa), Kelâm (Berbicara), Tekvîn (Menciptakan/Menjadikan).\nSıfât-ı Fi'liyye (Sifat-Sifat yang Berkaitan dengan Perbuatan Allah): Tahlîk (Menciptakan), Terzîk (Memberi Rezeki), İbdâ' (Menciptakan tanpa Contoh Sebelumnya), İnşâ' (Mengadakan dari Ketiadaan), İhyâ' (Menghidupkan), İmâte' (Mematikan)."
        },
        {
            category: "ilahiyat", originalNumber: 13,
            question: "Dengan Kalam (Perkataan) seperti apa Allah Ta'ala berfirman?",
            answer: "Allah Ta'ala berfirman dengan Kalam yang melekat pada Dzat-Nya, kekal (ezelî), tidak terdiri dari huruf dan suara, serta tidak berdiam atau memiliki kekurangan.\nAllah Ta'ala dengan sifat Kalam-Nya adalah memerintahkan, melarang, dan mengabarkan."
        },
        {
            category: "ilahiyat", originalNumber: 14,
            question: "Bagaimana pandangan Ahlusunah tentang apakah Al-Qur'an itu makhluk (ciptaan) atau bukan?",
            answer: "Kelâmullah (Firman Allah) yaitu Al-Qur'an, terbagi menjadi dua bagian:\n1.  Kelâm-ı Nefsî: Firman yang melekat pada Dzat Allah Ta'ala, kekal (ezelî), dan bukan makhluk.\n2.  Kelâm-ı Lafzî: Bentuk yang tersusun dari huruf dan suara (yang kita baca), dan ini adalah makhluk."
        },
        {
            category: "ilahiyat", originalNumber: 15,
            question: "\"Tekvîn\" itu apa? Apakah \"Tekvîn\" sama dengan sesuatu yang diciptakan (\"mükevven\")?",
            answer: "Tekvîn adalah salah satu sifat kekal (ezelî) Allah Ta'ala.\nTekvîn adalah perbuatan Allah Ta'ala menciptakan alam semesta dan setiap bagiannya pada saat keberadaannya.\nMenurut Maturidi, Tekvîn tidak sama dengan mükevven (sesuatu yang diciptakan), melainkan berbeda."
        },
        {
            category: "ilahiyat", originalNumber: 16,
            question: "Apakah \"Ru'yetullah\" (Melihat Allah) itu mungkin? Bagaimana caranya?",
            answer: "Ru'yetullah (melihat Allah di akhirat) adalah mungkin secara akal, dan wajib secara dalil naqli.\nCaranya: Allah Ta'ala akan dilihat dari Surga tanpa bertempat, tanpa arah, tanpa saling berhadapan, tanpa cahaya, dan tanpa jarak antara Allah Ta'ala dengan hamba-Nya."
        },
        {
            category: "ilahiyat", originalNumber: 22,
            question: "Apa yang dimaksud dengan ungkapan \"Allah Ta'ala menyesatkan siapa yang Dia kehendaki dan memberi petunjuk siapa yang Dia kehendaki\"?",
            answer: "Maksud dari ungkapan ini adalah:\nAllah Ta'ala menghendaki dan menciptakan hidayah bagi siapa yang menghendaki hidayah.\nDan Dia menghendaki serta menciptakan kesesatan bagi siapa yang menghendaki kesesatan."
        },
        {
            category: "ilahiyat", originalNumber: 23,
            question: "Apakah \"Aslah alâllah\" (melakukan yang terbaik bagi hamba adalah wajib bagi Allah) itu wajib?",
            answer: "Tidak wajib bagi Allah Ta'ala untuk menciptakan hal-hal yang bermanfaat bagi hamba."
        },
        // Kategori 3: Nubuwiyat 
        {
            category: "nubuwiyat", originalNumber: 35,
            question: "Mengapa Allah Ta'ala mengutus para nabi?",
            answer: "Untuk memperingatkan manusia dan memberi kabar gembira dengan surga, menakut-nakuti dengan neraka, serta menjelaskan urusan agama dan dunia yang dibutuhkan manusia."
        },
        {
            category: "nubuwiyat", originalNumber: 36,
            question: "Mengapa Allah Ta'ala menguatkan para nabi dengan mukjizat?",
            answer: "Jika tidak ada mukjizat, maka tidak akan wajib untuk menerima perkataan para nabi, dan orang yang jujur dalam klaim kenabiannya tidak akan bisa dibedakan dari orang yang bohong."
        },
        {
            category: "nubuwiyat", originalNumber: 37,
            question: "Siapakah nabi yang pertama, terakhir, dan yang paling mulia?",
            answer: "Yang pertama: Âdem aleyhisselâm.\nYang terakhir: Muhammed Mustafâ sallallâhu aleyhi ve sellem.\nYang paling mulia: Muhammed Mustafâ sallallâhu aleyhi ve sellem."
        },
        {
            category: "nubuwiyat", originalNumber: 38,
            question: "Berapakah jumlah nabi?",
            answer: "Jumlah nabi disebutkan dalam beberapa hadis. Satu riwayat menyebutkan seratus dua puluh empat ribu, riwayat lain dua ratus dua puluh empat ribu nabi telah diutus. Namun, yang lebih utama adalah tidak membatasi pada satu jumlah tertentu. Sebagaimana Allah Ta'ala berfirman: <span lang='ar' dir='rtl'>مِنْهُمْ مَنْ قَصَصْنَا عَلَيْكَ وَمِنْهُمْ مَنْ لَمْ نَقْصُصْ عَلَيْكَ.</span>"
        },
        {
            category: "nubuwiyat", originalNumber: 39, 
            question: "Berikan informasi tentang malaikat-malaikat mulia (Melâike-i kirâm).",
            answer: "Malaikat-malaikat mulia adalah hamba-hamba Allah Ta'ala yang selalu patuh pada perintah-Nya.\nMereka tidak disifati dengan jenis kelamin laki-laki atau perempuan."
        },
        {
            category: "nubuwiyat", originalNumber: 40,
            question: "Ada berapa tahapan Mi'raj? Dengan apa tahapan-tahapan ini terbukti, dan apa hukum bagi yang mengingkarinya?",
            answer: "Ada tiga tahapan Mi'raj:\n1.  Tahap pertama: Dari Mescid-i Harâm ke Mescid-i Aksâ. Ini disebut İsrâ'. Terbukti dengan ayat (Al-Qur'an). Yang mengingkarinya menjadi kafir.\n2.  Tahap kedua: Dari Mescid-i Aksâ ke semâvâta (langit-langit). Terbukti dengan haber-i meşhûr (hadis masyhur). Yang mengingkarinya termasuk ahli bid'ah.\n3.  Tahap ketiga: Dari semâvâttan ilâ mâşâallah (dari langit ke tempat yang Allah kehendaki). Terbukti dengan haber-i vâhid (hadis ahad). Yang mengingkarinya menjadi sesat dan menyesatkan."
        },
        {
            category: "nubuwiyat", originalNumber: 49,
            question: "Bisakah seorang wali mencapai derajat nabi?",
            answer: "Tidak bisa sama sekali."
        },
        {
            category: "nubuwiyat", originalNumber: 55,
            question: "Bagaimana urutan keutamaan antara manusia, malaikat, dan rasul?",
            answer: "Rasul dari kalangan manusia lebih mulia daripada rasul dari kalangan malaikat.\nRasul dari kalangan malaikat lebih mulia daripada manusia biasa secara umum.\nManusia biasa secara umum lebih mulia daripada malaikat biasa secara umum."
        },
        
        // Kategori 4: Ahwal al-Mumkinat
        {
            category: "ahwal_mumkinat", originalNumber: 17,
            question: "Bagaimana pandangan Ahlusunah tentang \"Perbuatan Hamba\" (Ef'âl-i ibâd)?",
            answer: "Perbuatan hamba seperti kufur-iman, taat-maksiat, yang menciptakan adalah Allah Ta'ala, sedangkan hamba hanyalah kâsib (yang mengusahakan).\nPara hamba akan diberi pahala atau azab karena perbuatan-perbuatan ini. Perbuatan yang baik adalah dengan keridhaan Allah Ta'ala, sedangkan perbuatan yang buruk tidak dengan keridhaan Allah Ta'ala."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 18,
            question: "\"İstitâat\" (kemampuan/kekuatan) itu apa? Ada berapa jenisnya?",
            answer: "İstitâat berarti kekuatan dan kemampuan.\nAda dua jenis:\n1.  Kekuatan hakiki yang menyebabkan terjadinya perbuatan, dan ini terjadi bersamaan dengan perbuatan itu.\n2.  Kekuatan dalam arti kesiapan alat, indra, dan organ tubuh yang sehat, dan ini terjadi sebelum perbuatan itu."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 19,
            question: "Apakah hamba dibebani (mükellef) dengan sesuatu yang tidak mampu ia lakukan?",
            answer: "Tidak dibebani. Rasa sakit yang muncul setelah seseorang dipukul, pecahnya kaca setelah seseorang memecahkannya, dan semua hal serupa itu adalah ciptaan Allah Ta'ala. Hamba tidak memiliki pengaruh dalam penciptaan hal-hal tersebut."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 20,
            question: "Apakah orang yang terbunuh itu meninggal sesuai ajalnya? Berapa banyak ajal itu?",
            answer: "Orang yang terbunuh itu meninggal sesuai ajalnya. Kematian yang terjadi pada orang mati adalah ciptaan Allah Ta'ala. Hamba tidak memiliki pengaruh dalam penciptaan dan pengusahaannya.\nAjal itu hanya satu."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 21,
            question: "Berikan informasi terkait rezeki. Apakah yang haram itu rezeki?",
            answer: "Baik itu halal maupun haram, setiap orang akan mendapatkan rezekinya secara sempurna. Tidak mungkin seorang manusia tidak memakan rezekinya, atau rezeki seorang manusia dimakan oleh orang lain.\nHaram adalah rezeki."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 24,
            question: "Untuk siapa azab kubur itu?",
            answer: "Untuk orang-orang kafir dan sebagian mukmin yang durhaka."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 25,
            question: "Berikan informasi tentang malaikat \"Münker Nekir\" dan \"Kirâmen Kâtibîn\".",
            answer: "Münker dan Nekir adalah dua malaikat yang akan masuk ke kubur dan menanyai si hamba tentang Tuhannya, agamanya, dan Nabinya.\nKirâmen Kâtibîn adalah malaikat-malaikat yang mencatat perbuatan baik dan buruk manusia."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 26,
            question: "Apakah hari kebangkitan (Ba's), penimbangan amal (vezn), pemberian buku catatan amal (kitâb), pertanyaan di hari kiamat (suâl), telaga (havz), jembatan (sırât), surga (cennet) dan neraka (cehennem) itu nyata?",
            answer: "Ya, nyata."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 27,
            question: "Apakah surga dan neraka sudah ada sekarang? Apakah surga dan neraka itu akan fana (musnah)?",
            answer: "Surga dan neraka sudah ada sekarang.\nSurga dan neraka, serta penghuni surga dan neraka, tidak akan fana (musnah)."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 28,
            question: "Sebutkan dosa-dosa besar (Günâh-ı kebâir).",
            answer: "Menyekutukan Allah Ta'ala.\nMembunuh orang tanpa hak.\nMenuduh wanita baik-baik berzina.\nMemakan harta anak yatim.\nBerzina.\nKabur dari perang.\nMelakukan atau menyuruh sihir.\nDurhaka kepada kedua orang tua Muslim.\nMelakukan dosa di Haram-i Syarif (tanah suci).\nMemakan riba.\nMencuri.\nMinum khamr (arak)."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 29,
            question: "Bagaimana pandangan Ahlusunah tentang orang yang melakukan dosa besar (Mürtekib-i kebîre)?",
            answer: "Orang yang melakukan dosa besar tetaplah seorang mukmin, karena tasdik (pembenaran hati) tetap ada.\nDosa-dosa besar tidak akan mengeluarkan seorang mukmin dari iman dan menjadikannya kafir.\nOrang yang melakukan dosa besar tidak akan kekal di neraka.\nAllah Ta'ala tidak akan mengampuni dosa syirik. Adapun dosa-dosa selain syirik, baik itu dosa besar maupun dosa kecil, Dia akan mengampuni bagi siapa yang Dia kehendaki.\nAdalah mungkin untuk diadzab karena dosa kecil dan diampuni karena dosa besar, selama tidak ada Istihlâl.\nİstihlâl: Menganggap halal yang haram, atau menganggap haram yang halal, adalah kekafiran."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 30,
            question: "Apakah syafaat para rasul dan orang-orang baik itu ada dan benar?",
            answer: "Ya, ada dan benar bagi orang-orang yang melakukan dosa besar."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 31,
            question: "Apa arti \"İman\"?",
            answer: "İman: <span lang='ar' dir='rtl'>هُوَ التَّصْدِيقُ بِمَا جَاءَ النَّبِيُّ عَلَيْهِ السَّلامُ بِهِ مِنْ عِنْدِ اللَّهِ تَعَالَى وَالْإِقْرَارُ بِهِ</span>\nArtinya: Meyakini dalam hati dan mengakui dengan lisan semua yang dibawa oleh Nabi SAW dari sisi Allah Ta'ala."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 32,
            question: "Apakah amal perbuatan termasuk bagian dari iman, dan apakah iman itu bertambah?",
            answer: "Amal perbuatan bukanlah bagian dari hakikat iman, juga bukan kesempurnaan iman, melainkan petunjuk bagi kesempurnaan iman.\nIman itu tidak bertambah dan tidak berkurang.\nYang bertambah dan berkurang adalah cahaya iman.\nIman dan Islam itu satu."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 33,
            question: "Apakah pantas mengatakan \"Ene mü'minun hakkan\" (Saya mukmin sejati/sungguh-sungguh)?",
            answer: "Ketika seorang hamba memiliki keyakinan dalam hati dan pengakuan lisan, maka pantas baginya untuk mengatakan \"Ene mü'minun hakkan\".\nAkan tetapi, tidak pantas mengatakan \"Ene mü'minun inşâallah\" (Saya mukmin insya Allah). Karena jika perkataan ini diucapkan karena keraguan, maka itu adalah kekafiran."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 34,
            question: "Berikan informasi tentang \"Saâdet\" (kebahagiaan), \"şakâvet\" (kesengsaraan), \"is'âd\" (memberi kebahagiaan), dan \"işkâ\" (memberi kesengsaraan).",
            answer: "Saâdet dan şakâvet adalah sifat hamba.\nİs'âd dan işkâ adalah sifat Allah Ta'ala.\nOrang yang bahagia (saîd) bisa menjadi sengsara (şakî) setelah beriman kemudian murtad.\nOrang yang sengsara (şakî) bisa menjadi bahagia (saîd) setelah kafir kemudian beriman.\nPerubahan terjadi pada sifat hamba, yaitu saâdet dan şakâvet; bukan pada sifat Allah Ta'ala, yaitu is'âd dan işkâ."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 41,
            question: "Apakah karamah para wali itu nyata? Sebutkan beberapa karamah.",
            answer: "Ya, nyata;\n1.  Menempuh jarak jauh dalam waktu singkat.\n2.  Tersedianya makanan, minuman, dan pakaian saat dibutuhkan.\n3.  Berjalan di atas air.\n4.  Terbang di udara.\n5.  Berbicara dengan benda mati dan hewan."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 42,
            question: "Setelah para nabi, siapakah manusia yang paling mulia, beserta urutan dan masa kekhalifahannya?",
            answer: "Setelah para nabi, manusia yang paling mulia:\n1.  Hazret-i Ebû Bekir es-Sıddîk radıyallâhu anh.\nDua tahun, tiga bulan, dua puluh hari.\n2.  Hazret-i Ömerü'l-Fârûk radıyallâhu anh.\nSepuluh tahun, enam bulan, empat hari.\n3.  Hazret-i Osmân Zinnûreyn radıyallâhu anh.\nSebelas tahun, sebelas bulan, delapan belas hari.\n4.  Hazret-i Ali kerremallâhu vechehû radıyallâhu anh.\nEmpat tahun, sepuluh bulan, satu hari.\n5.  Hazret-i Hasan radıyallâhu anh.\nEnam bulan.\nSecara keseluruhan adalah tiga puluh tahun, empat puluh tiga hari kekhalifahan telah dilakukan."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 43,
            question: "Apa saja tugas seorang imam (pemimpin/khalifah)?",
            answer: "1.  Melaksanakan hukum-hukum.\n2.  Menerapkan hukuman (hudud).\n3.  Menjaga perbatasan.\n4.  Mempersiapkan pasukan.\n5.  Mengumpulkan zakat.\n6.  Menghukum pemberontak, pencuri, dan perampok.\n7.  Mengimami shalat Jumat dan shalat Id.\n8.  Membagikan harta rampasan perang.\n9.  Menerima kesaksian para saksi.\n10. Menikahkan anak laki-laki dan perempuan yang tidak memiliki wali.\n11. Menyelesaikan perselisihan yang terjadi di antara hamba."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 44,
            question: "Apa saja syarat yang harus dan tidak harus ada pada seorang imam? Apakah imam bisa diberhentikan karena kefasikan (fısk) atau kezaliman (zulüm)?",
            answer: "Syarat yang harus ada pada imam: Tidak tersembunyi, tidak diharapkan kedatangannya (seperti Imam Mahdi yang dinanti), harus nyata keberadaannya, dan berasal dari suku Quraisy.\nIa haruslah orang yang memiliki kewenangan penuh yang sempurna, berpandangan tajam, mampu menegakkan hukum, menjaga perbatasan Darul Islam (negeri Islam), dan mengambil hak orang yang dizalimi dari orang yang zalim.\nSyarat yang tidak harus ada pada imam: Tidak disyaratkan maksum (terjaga dari dosa), tidak disyaratkan paling utama di zamannya, dan tidak disyaratkan dari keturunan Ali.\nImam tidak diberhentikan karena kefasikan dan kezaliman."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 45,
            question: "Apakah sah shalat di belakang orang fasiq dan shalat jenazah atas orang fasiq?",
            answer: "Sah shalat di belakang orang fasiq. Karena Nabi SAW bersabda: <span lang='ar' dir='rtl'>صَلُّوا خَلْفَ كُلِّ بَر وَ فَاجِرٍ</span> \"Shalatlah kalian di belakang setiap orang baik dan fasiq.\"\nSah shalat jenazah atas orang fasiq."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 46,
            question: "Bagaimana seharusnya kita menyebut para Sahabat Nabi (Sahâbe-i kirâm)?",
            answer: "Kita hanya menyebut mereka dengan kebaikan."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 47,
            question: "Sebutkan sepuluh sahabat yang dijanjikan surga (Aşere-i Mübeşşere).",
            answer: "1.  Hazret-i Ebû Bekir radıyallâhu anh.\n2.  Hazret-i Ömer radıyallâhu anh.\n3.  Hazret-i Osmân radıyallâhu anh.\n4.  Hazret-i Ali radıyallâhu anh.\n5.  Hazret-i Zübeyr bin Avvâm radıyallâhu anh.\n6.  Hazret-i Talha bin Ubeydullah radıyallâhu anh.\n7.  Hazret-i Abdurrahman bin Avf radıyallâhu anh.\n8.  Hazret-i Sa'd bin Ebî Vakkâs radıyallâhu anh.\n9.  Hazret-i Saîd bin Zeyd radıyallâhu anh.\n10. Hazret-i Ebû Ubeyde bin Cerrâh radıyallâhu anh."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 48,
            question: "Apa saja tanda-tanda Ahlusunah?",
            answer: "1.  Tafdîlü'ş-Şeyhayn: Meyakini keutamaan Hazret-i Ömer dan Ebû Bekir.\n2.  Muhabbetü'l-Hateneyn: Mencintai Hazret-i Osmân dan Ali.\n3.  El-Meshu ale'l-huffeyn: Mengusap di atas khuff (sepatu/kaus kaki kulit).\n4.  Ta'zîmü'l-Kıbleteyn: Mengagungkan Ka'bah Muazzamah dan Masjidil Aqsa.\n5.  Es-Salâtü ale'l-cenâzeteyn: Melaksanakan shalat jenazah untuk orang baik maupun fasiq.\n6.  Es-Salâtü halfe'l-imâmeyn: Melaksanakan shalat di belakang imam yang baik maupun fasiq."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 50,
            question: "Bisakah seorang hamba mencapai derajat di mana perintah dan larangan agama tidak berlaku lagi baginya?",
            answer: "Tidak bisa. Seorang hamba tidak bisa mencapai derajat di mana perintah dan larangan agama gugur baginya. Karena para mujtahid (ulama yang berijtihad) telah bersepakat (ijma') bahwa hal itu tidak mungkin dicapai."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 51,
            question: "Apa saja penyebab yang dapat menyebabkan kekafiran?",
            answer: "1.  Menolak nash (dalil).\n2.  Mengolok-olok syariat.\n3.  Berputus asa dari rahmat Allah Ta'ala.\n4.  Menganggap remeh maksiat.\n5.  Menganggap halal maksiat.\n6.  Membenarkan perkataan dukun yang mengabarkan hal gaib.\n7.  Merasa aman dari azab Allah Ta'ala.\n8.  Berpaling dari makna lahiriah nash menuju makna-makna yang diklaim oleh Batiniyyah (kelompok yang mengklaim memiliki pemahaman batin)."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 52,
            question: "Apakah doa-doa orang hidup dan sedekah yang mereka berikan untuk orang mati bermanfaat bagi orang mati?",
            answer: "Ya, ada manfaatnya. Allah Ta'ala mengabulkan doa dan memenuhi kebutuhan."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 53,
            question: "Apa saja tanda-tanda kiamat?",
            answer: "Munculnya Deccâl, Dâbbetü'l-arz (Hewan Bumi), dan Ye'cûc ve Me'cûc.\nTurunnya İsâ aleyhisselâm dari langit.\nTerbitnya matahari dari barat."
        },
        {
            category: "ahwal_mumkinat", originalNumber: 54,
            question: "Berikan informasi terkait seorang Müctehid.",
            answer: "Seorang mujtahid terkadang keliru dalam hukum yang ia fatwakan, dan terkadang benar."
        }
    ]
};

const uiStrings = {
    osmanlica: {
        pageTitle: "متن عقائد سؤاللری",
        mainTitle: "متن عقائد سؤاللری",
        showAnswerBtn: "جوابی کور",
        nextQuestionBtn: "ایلری",
        langToggleText: "ID", // Diubah dari "Bahasa Indonesia"
        questionPlaceholder: "بر كاتغورى سچڭ ویا \"بتون سواللردن\" دوکمەسنه باصڭ.",
        darkModeToggleText: "مظلم وضع", 
        lightModeToggleText: "آیدینلق وضع" 
    },
    indonesia: {
        pageTitle: "Soal Jawab Matan Akidah",
        mainTitle: "Soal Jawab Matan Akidah",
        showAnswerBtn: "Lihat Jawaban",
        nextQuestionBtn: "Soal Berikutnya",
        langToggleText: "TR", // Diubah dari "Türkçe (Osmanlı)"
        questionPlaceholder: "Pilih kategori atau tekan tombol \"Semua Soal\".",
        darkModeToggleText: "Mode Gelap",
        lightModeToggleText: "Mode Terang"
    }
};

const questionTextElement = document.getElementById('questionText');
const answerTextElement = document.getElementById('answerText');
const answerContainer = document.getElementById('answerContainer');
const showAnswerBtn = document.getElementById('showAnswerBtn');
const nextQuestionBtn = document.getElementById('nextQuestionBtn');
const categoryBtns = document.querySelectorAll('.category-btn');
const darkModeToggle = document.getElementById('darkModeToggle');
const languageToggleBtn = document.getElementById('languageToggleBtn'); 
const sidebar = document.getElementById('sidebar');
const hamburgerBtn = document.getElementById('hamburgerBtn');
const mainTitleElement = document.getElementById('mainTitle');
const pageTitleElement = document.getElementById('pageTitle');

let currentLanguage = 'osmanlica'; 
let currentActiveQuestions = [];
let currentQuestionData = null; // Menyimpan data soal saat ini (dari bahasa aktif)
let displayedQuestionIndices = [];
let lastDisplayedOriginalNumber = null; // Untuk menyimpan ID unik soal yg sedang tampil

function getInitialLanguage() {
    return localStorage.getItem('preferredLanguageAkaid') || 'osmanlica';
}

function setDarkModeIcon(theme) {
    if (theme === 'dark') {
        darkModeToggle.innerHTML = sunIconSVG;
    } else {
        darkModeToggle.innerHTML = moonIconSVG;
    }
}

function updateLanguageUI(newLang, initialLoad = false) {
    currentLanguage = newLang;
    localStorage.setItem('preferredLanguageAkaid', newLang);

    const htmlEl = document.documentElement;
    htmlEl.lang = newLang === 'osmanlica' ? 'ota' : 'id';
    htmlEl.dir = newLang === 'osmanlica' ? 'rtl' : 'ltr';

    pageTitleElement.textContent = uiStrings[newLang].pageTitle;
    showAnswerBtn.textContent = uiStrings[newLang].showAnswerBtn;
    nextQuestionBtn.textContent = uiStrings[newLang].nextQuestionBtn;
    
    if (languageToggleBtn) { 
        languageToggleBtn.textContent = uiStrings[newLang].langToggleText;
    }
    
    const isDarkMode = document.documentElement.getAttribute('data-theme') === 'dark';
    setDarkModeIcon(isDarkMode ? 'dark' : 'light');

    categoryBtns.forEach(btn => {
        const text = btn.getAttribute(`data-lang-${newLang}`);
        if (text) { 
            btn.textContent = text;
        }
    });
    
    // Update main title yang mungkin berisi nama kategori
    const activeCategoryButton = document.querySelector('.category-btn.active-category');
    let currentCategoryValue = 'all';
    if (activeCategoryButton) {
        mainTitleElement.textContent = uiStrings[newLang].mainTitle + " - " + activeCategoryButton.textContent;
        currentCategoryValue = activeCategoryButton.getAttribute('data-category');
    } else {
        mainTitleElement.textContent = uiStrings[newLang].mainTitle;
    }
    
    // Perbarui daftar pertanyaan aktif berdasarkan bahasa baru dan kategori saat ini
    const questionsInNewLang = allQuestionsData[newLang];
    if (currentCategoryValue === 'all') {
        currentActiveQuestions = [...questionsInNewLang];
    } else {
        currentActiveQuestions = questionsInNewLang.filter(q => q.category === currentCategoryValue);
    }

    // Logika untuk menampilkan ulang soal yang sama dalam bahasa baru
    if (!initialLoad && lastDisplayedOriginalNumber !== null) {
        const questionToDisplay = currentActiveQuestions.find(q => 
            q.originalNumber === lastDisplayedOriginalNumber || 
            (lastDisplayedOriginalNumber === 8.1 && q.originalNumber === 8) // Penanganan khusus untuk soal 8.1 Osmanlica -> soal 8 Indonesia
        );

        if (questionToDisplay) {
            currentQuestionData = questionToDisplay;
            questionTextElement.textContent = currentQuestionData.question;
            answerContainer.style.display = 'none';
            answerTextElement.innerHTML = "";
            showAnswerBtn.disabled = false;
            nextQuestionBtn.disabled = false;
        } else { // Jika soal tidak ditemukan di kategori aktif (seharusnya jarang terjadi jika kategori tidak berubah)
            displayQuestion(); // Acak soal baru dari kategori & bahasa saat ini
        }
    } else if (initialLoad || lastDisplayedOriginalNumber === null) { // Jika ini load awal atau tidak ada soal sebelumnya
        questionTextElement.textContent = uiStrings[newLang].questionPlaceholder;
        answerContainer.style.display = 'none';
        answerTextElement.innerHTML = "";
        showAnswerBtn.disabled = true;
        nextQuestionBtn.disabled = true;
        currentQuestionData = null; // Pastikan reset
        // Untuk load awal, jangan langsung acak soal kecuali kategori sudah dipilih
        if (activeCategoryButton) {
            displayQuestion();
        }
    }
}


function filterAndDisplayByCategory(categoryValue, closeMobileMenuIfNeeded = true) { // Argumen closeMobileMenuIfNeeded tidak lagi dipakai di sini
    answerContainer.style.display = 'none';
    answerTextElement.innerHTML = "";
    displayedQuestionIndices = []; 
    lastDisplayedOriginalNumber = null; // Reset soal terakhir saat ganti kategori

    const questionsInCurrentLang = allQuestionsData[currentLanguage];
    if (!questionsInCurrentLang) {
        console.error("Data untuk bahasa " + currentLanguage + " tidak ditemukan.");
        currentActiveQuestions = [];
    } else if (categoryValue === 'all') {
        currentActiveQuestions = [...questionsInCurrentLang];
    } else { 
        currentActiveQuestions = questionsInCurrentLang.filter(q => q.category === categoryValue);
    }
    
    // Update judul utama dengan nama kategori
    const categoryButton = document.querySelector(`.category-btn[data-category="${categoryValue}"]`);
    if (categoryButton) {
        mainTitleElement.textContent = uiStrings[currentLanguage].mainTitle + " - " + categoryButton.textContent;
    }


    if (currentActiveQuestions && currentActiveQuestions.length > 0) {
        displayQuestion();
    } else {
        questionTextElement.textContent = (currentLanguage === 'indonesia' ? "Belum ada soal untuk kategori ini." : "بو كاتغوريده هنوز سوال یوخدر.");
        currentQuestionData = null;
        showAnswerBtn.disabled = true;
        nextQuestionBtn.disabled = true;
    }

    // Perilaku menu mobile: TIDAK ditutup saat kategori dipilih
    // if (closeMobileMenuIfNeeded && window.innerWidth <= 768 && sidebar.classList.contains('open')) {
    //     sidebar.classList.remove('open'); 
    // }
}

function getRandomQuestion() {
    if (!currentActiveQuestions || currentActiveQuestions.length === 0) {
        questionTextElement.textContent = uiStrings[currentLanguage].questionPlaceholder;
        answerTextElement.innerHTML = "";
        showAnswerBtn.disabled = true;
        nextQuestionBtn.disabled = true;
        lastDisplayedOriginalNumber = null;
        return null;
    }

    if (displayedQuestionIndices.length === currentActiveQuestions.length) {
        displayedQuestionIndices = []; // Reset untuk pengulangan
    }

    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * currentActiveQuestions.length);
    } while (displayedQuestionIndices.includes(randomIndex) && displayedQuestionIndices.length < currentActiveQuestions.length);
    
    displayedQuestionIndices.push(randomIndex);
    const question = currentActiveQuestions[randomIndex];
    lastDisplayedOriginalNumber = question.originalNumber; // Simpan originalNumber
    return question;
}

function displayQuestion() {
    answerContainer.style.display = 'none';
    answerTextElement.innerHTML = "";
    currentQuestionData = getRandomQuestion();

    if (currentQuestionData) {
        questionTextElement.textContent = currentQuestionData.question;
        showAnswerBtn.disabled = false;
        nextQuestionBtn.disabled = false;
    } else {
        if (currentActiveQuestions && currentActiveQuestions.length > 0) {
             questionTextElement.textContent = (currentLanguage === 'indonesia' ? "Semua soal di kategori ini telah ditampilkan." : "بو كاتغوريده بتون سواللر كورستریلدی.");
        } else {
            questionTextElement.textContent = uiStrings[currentLanguage].questionPlaceholder;
        }
        showAnswerBtn.disabled = true;
        nextQuestionBtn.disabled = true;
    }
}

showAnswerBtn.addEventListener('click', () => {
    if (currentQuestionData) {
        answerTextElement.innerHTML = currentQuestionData.answer;
        answerContainer.style.display = 'block';
        // Tutup menu mobile jika terbuka saat "Lihat Jawaban" diklik
        if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open');
        }
    }
});

nextQuestionBtn.addEventListener('click', () => {
    displayQuestion();
    // Jangan tutup menu mobile saat "Soal Berikutnya" diklik
    // if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
    //     sidebar.classList.remove('open');
    // }
});

categoryBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        categoryBtns.forEach(b => b.classList.remove('active-category'));
        btn.classList.add('active-category');
        
        const categoryValue = btn.getAttribute('data-category');
        filterAndDisplayByCategory(categoryValue, false); // Argumen kedua diubah jadi false
    });
});

darkModeToggle.addEventListener('click', () => {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    setDarkModeIcon(newTheme);
    localStorage.setItem('themeAkaid', newTheme); 
});

if (languageToggleBtn) {
    languageToggleBtn.addEventListener('click', () => {
        const newLang = currentLanguage === 'osmanlica' ? 'indonesia' : 'osmanlica';
        updateLanguageUI(newLang);
    });
}

hamburgerBtn.addEventListener('click', (event) => {
    sidebar.classList.toggle('open');
    event.stopPropagation(); // Penting untuk mencegah event click di document langsung menutupnya
});

// Listener untuk menutup sidebar jika diklik di luar area sidebar (hanya di mobile)
document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768 && sidebar.classList.contains('open')) {
        const isClickInsideSidebar = sidebar.contains(event.target);
        const isClickOnHamburger = hamburgerBtn.contains(event.target); // Jangan tutup jika klik di hamburger lagi

        if (!isClickInsideSidebar && !isClickOnHamburger) {
            sidebar.classList.remove('open');
        }
    }
});


document.addEventListener('DOMContentLoaded', () => {
    currentLanguage = getInitialLanguage();
    updateLanguageUI(currentLanguage, true); 
    
    const initialTheme = localStorage.getItem('themeAkaid') || (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light');
    document.documentElement.setAttribute('data-theme', initialTheme);
    setDarkModeIcon(initialTheme);

    // Fungsi untuk menutup sidebar jika ukuran window berubah ke desktop saat sidebar terbuka
    function adjustLayoutForDesktop() {
        if (window.innerWidth > 768 && sidebar.classList.contains('open')) {
            sidebar.classList.remove('open'); // Otomatis tutup jika menjadi desktop
        }
    }
    
    window.addEventListener('resize', adjustLayoutForDesktop);
    adjustLayoutForDesktop(); // Panggil saat load juga
});
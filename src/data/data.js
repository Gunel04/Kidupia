const products = [

    {
        "id": 1,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/10.jpg",
        "nameEn": "Attractive Clog Shoes Indoor & Outdoor For Children",
        "nameAz": "Uşaqlar üçün açıq və qapalı ayaqqabılar",
        "descriptionEn": "Switch freely between open and closed back with help of adjustable strap. Can be wear as sandals or slippers ,suitable for Indoor and outdoor activities. These baby shoes are comfortable, soft.",
        "descriptionAz": "Tənzimlənən kəmərin köməyi ilə açıq və qapalı arxa arasında sərbəst keçid edin. Daxili və açıq fəaliyyətlər üçün uyğun sandal və ya terlik kimi geyinilə bilər. Bu uşaq ayaqqabıları rahat, yumşaqdır.",
        "price": 12,
        "categoryEn": "Footwear",
        "categoryAz": "Ayaqqabı"
    },
    {
        "id": 2,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/21-600x600.jpg",
        "nameEn": "Baby's First Blocks ABCD Learning Shape Pieces",
        "nameAz": "Körpənin forma parçalarını öyrədən ilk ABCD blokları",
        "descriptionEn": "This shape sorting box is sure to engage children! Each shape is designed to fit through its matching shape hole on the container. Our shape sorter cube allow child to stay focused for a long time, a good toy.",
        "descriptionAz": "Bu forma çeşidləmə qutusu uşaqları cəlb edəcəyinə əmindir! Hər bir forma konteynerdəki uyğun formalı dəlikdən keçmək üçün nəzərdə tutulmuşdur. Bizim forma çeşidləyici kubumuz uşağa uzun müddət diqqətini cəmləməyə imkan verir, yaxşı oyuncaqdır.",
        "price": 24,
        "categoryEn": "Kids Toys",
        "categoryAz": "Uşaq Oyuncaqları"
    },
    {
        "id": 3,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/17-700x700.jpg",
        "nameEn": "Batman Lace Running Shoes For Boys & Girls (Red)",
        "nameAz": "Oğlan və Qızlar üçün Batman Krujeva Qaçış Ayaqqabıları (Qırmızı)",
        "descriptionEn": "Wear these daily wear Batman Printed Shoes that make you feel the power of BATMAN with logo made up of Textile fabric that keeps you energetic and excited using their BATMAN Shoes.",
        "descriptionAz": "BATMAN Ayaqqabılarından istifadə edərək sizi enerjili və həyəcanlı saxlayan Tekstil parçadan hazırlanmış loqo ilə BATMAN-ın gücünü hiss etdirən bu gündəlik geyim Batman Çaplı Ayaqqabıları geyin.",
        "price": 38,
        "categoryEn": "Footwear",
        "categoryAz": "Ayaqqabı"
    },
    {
        "id": 4,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/03-4-700x700.jpg",
        "nameEn": "Cuddles - Super Pants Pant Style Diaper - M",
        "nameAz": "Cuddles - Super Şalvar Stil Bezi - M",
        "descriptionEn": "Quick Max Absorption technology to provide quick absorption and lonf lasting dryness. The Diaper pants that provide Super Comfort, Super Dryness and Super Protection to the baby.",
        "descriptionAz": "Tez udma və uzun müddət quruluq təmin etmək üçün Quick Max Absorption texnologiyası. Körpəyə Super Rahatlıq, Super Quruluq və Super Qoruma təmin edən Bez şalvar.",
        "price": 18,
        "categoryEn": "Health & Safety",
        "categoryAz": "Sağlamlıq & Təhlükəsizlik"
    },
    {
        "id": 5,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/06-600x600.jpg",
        "nameEn": "Cute Stuffed Soft Toys for Kid, Girls,Babies & Children",
        "nameAz": "Uşaq, Qız, Körpələr üçün Şirin Doldurulmuş Yumşaq Oyuncaqlar",
        "descriptionEn": "Soft fascinating objects Made from quality Materials and used by different age groups ranging from toddlers to young adults for the purpose of entertainment and play. These soft toys.",
        "descriptionAz": "Yumşaq valehedici obyektlər Keyfiyyətli materiallardan hazırlanmışdır və əyləncə və oyun məqsədi ilə yeniyetmələrdən tutmuş gənclərə qədər müxtəlif yaş qrupları tərəfindən istifadə olunur.",
        "price": 15,
        "categoryEn": "Kids Toys",
        "categoryAz": "Uşaq Oyuncaqları"
    },
    {
        "id": 6,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/09-600x600.jpg",
        "nameEn": "Dexolac Premium Stage Formula Milk Powder",
        "nameAz": "Dexolac Premium Stage Formula Süd Tozu",
        "descriptionEn": "Delivers the right nutrients to support overall growth and development of babies. Contains easy to digest whey proteins & 100% lactose, nucleotides to support immunity and help develop strong bones.",
        "descriptionAz": "Körpələrin ümumi böyüməsini və inkişafını dəstəkləmək üçün düzgün qidaları təmin edir. Tərkibində asan həzm olunan zərdab zülalları və 100% laktoza, immuniteti dəstəkləyən və güclü sümüklərin inkişafına kömək edən nukleotidlər var.",
        "price": 18,
        "categoryEn": "Kids Food",
        "categoryAz": "Uşaq Yeməyi"
    },
    {
        "id": 7,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/05-2-600x600.jpg",
        "nameEn": "Featured Fisher-Price Dance & Groove Rockit",
        "nameAz": "Seçilmiş Fisher-Price Dance & Groove Rockit",
        "descriptionEn": "100% cold-pressed almond oil for hair and skin. Almond oil for skin is a miracle for lightening dark circles and eye bags. It helps in the evolution of hair follicles and helps nourish and hydrate the skin.",
        "descriptionAz": "Saç və dəri üçün 100% soyuq preslənmiş badam yağı. Dəri üçün badam yağı qaranlıq dairələri və göz torbalarını işıqlandırmaq üçün bir möcüzədir. Saç follikullarının təkamülünə kömək edir və dərini qidalandırır və nəmləndirir.",
        "price": 22,
        "categoryEn": "Kids Toys",
        "categoryAz": "Uşaq Oyuncaqları"
    },
    {
        "id": 8,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/16-600x600.jpg",
        "nameEn": "Fisher Price Laugh & Learn Smart Stages Puppy",
        "nameAz": "Güldürən və Ağıllı Mərhələləri Öyrədən Fisher Price",
        "descriptionEn": "Strong Enables the Stunt cycle to change its direction automatically after bumping into an object. This makes the cycle remain in constant motion without the need of a remote control ,perfect gift for kids.",
        "descriptionAz": "Güclü Stunt dövrünə obyektlə toqquşduqdan sonra avtomatik olaraq istiqamətini dəyişməyə imkan verir. Bu, uşaqlar üçün mükəmməl bir hədiyyə olan pult ehtiyacı olmadan dövrün daimi hərəkətdə qalmasına imkan verir.",
        "price": 32,
        "categoryEn": "Kids Toys",
        "categoryAz": "Uşaq Oyuncaqları"
    },
    {
        "id": 9,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/19-600x600.jpg",
        "nameEn": "Graco Sky Junior Baby Car Seat- Sea Pine",
        "nameAz": "Graco Sky Junior Uşaq Maşın Oturacağı- Sea Pine",
        "descriptionEn": "Comfortable seat for junior baby having tested with maximum impact protection in the head area. Adjustable handle and loud click , indicating that the base was installed correctly, 3 point adjustable harness for safety.",
        "descriptionAz": "Baş nahiyəsində maksimum zərbə mühafizəsi ilə sınaqdan keçirilmiş yeniyetmə körpə üçün rahat oturacaq. Tənzimlənən tutacaq və yüksək səsli klik, bazanın düzgün quraşdırıldığını göstərir, təhlükəsizlik üçün 3 nöqtəli tənzimlənən kəmər.",
        "price": 79,
        "categoryEn": "Health & Safety",
        "categoryAz": "Sağlamlıq & Təhlükəsizlik"
    },
    {
        "id": 10,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/01-600x600.jpg",
        "nameEn": "Hotshot Kids Bag | Rabbit Bag | School Bag",
        "nameAz": "Hotshot Uşaq Çantası | Dovşan Çantası | Məktəb çantası",
        "descriptionEn": "Made from Premium Youngmen Fabric which provide strengthen and long-lasting performance strengthen and long-lasting performance. 100% Youngmen Fabric bag which is made In India.",
        "descriptionAz": "Gücləndirici və uzunmüddətli performansı gücləndirən və uzunmüddətli performans təmin edən Premium Youngmen Fabric-dən hazırlanmışdır. Hindistanda istehsal olunan 100% Youngmen Parça çantası.",
        "price": 13,
        "categoryEn": "Baby Kids Clothe",
        "categoryAz": "Körpə Uşaq Paltarları"
    },
    {
        "id": 11,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/15-600x600.jpg",
        "nameEn": "Impex Rider Car Toy Car | Push Car | Swing Car",
        "nameAz": "Impex Rider Avtomobil Oyuncaq Avtomobil | Push Car | Yelləncək Avtomobil",
        "descriptionEn": "Can be used a stroller, a walking car and a riding car with detachable guardrail Design, it's convenient for baby. Let you child enjoy in outdoors & indoor. It's really benefit from the sense of fun and freedom.",
        "descriptionAz": "Uşaq arabası, gəzinti avtomobili və sökülə bilən qoruyucu barmaqlığı olan minik avtomobili istifadə edilə bilər, körpə üçün rahatdır. Uşağınızın açıq havada və qapalı məkanda əylənməsinə icazə verin. Bu, həqiqətən əyləncə və azadlıq hissindən faydalanır.",
        "price": 20,
        "categoryEn": "Kids Toys",
        "categoryAz": "Uşaq Oyuncaqları"
    },
    {
        "id": 12,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/24-600x600.jpg",
        "nameEn": "Kuchipoo Girls Full Sleeves Regular Fit Cotton T-Shirtg",
        "nameAz": "Kuchipoo Qızlar Tam Qolu Regular Fit Pambıq T-Shirt",
        "descriptionEn": "A t-shirt is a garment which amalgamates contemporary fashion with your unique style statement. This t-shirt has been designed keeping in mind the latest trends in casual fashion.",
        "descriptionAz": "T-shirt, müasir dəbi unikal üslub ifadənizlə birləşdirən geyimdir. Bu köynək təsadüfi modanın ən son tendensiyaları nəzərə alınmaqla hazırlanmışdır.",
        "price": 14,
        "categoryEn": "Baby Kids Clothe",
        "categoryAz": "Körpə Uşaq Paltarları"
    },
    {
        "id": 13,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/08-600x600.jpg",
        "nameEn": "Logicmart Activity Tent House Extremely For Kids",
        "nameAz": "Xüsusilə Uşaqlar üçün Logicmart Fəaliyyət Çadır Evi",
        "descriptionEn": "This playhouse will bring out the imagination of your child whether playing make-believe alone or role-playing with others. It will help develop social skills and really bring out the creative side of your child.",
        "descriptionAz": "Bu oyun evi uşağınızın təxəyyülünü tək başına və ya başqaları ilə rol oynamaqdan asılı olmayaraq ortaya çıxaracaq. Bu, sosial bacarıqların inkişafına kömək edəcək və həqiqətən uşağınızın yaradıcı tərəfini ortaya çıxaracaq.",
        "price": 53,
        "categoryEn": "Kids Toys",
        "categoryAz": "Uşaq Oyuncaqları"
    },
    {
        "id": 14,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/20-600x600.jpg",
        "nameEn": "New Born Supersoft Wearable Designer Baby Boys",
        "nameAz": "Yeni Doğulan Supersoft Geyilən Dizayner Oğlan Körpələr",
        "descriptionEn": "There is a hooded design added to the blanket that adds a cartoon theme to it. The hooded design can be worn around the baby’s head for a cosy tuck. There is a special swaddle design provided for the baby’s feet too.",
        "descriptionAz": "Ədyala cizgi filmi mövzusu əlavə edən başlıqlı dizayn əlavə olunub. Başlıqlı dizayn körpənin başının ətrafına taxıla bilər ki, bu da rahat bir tutuşdur. Körpənin ayaqları üçün də xüsusi döşək dizaynı var.",
        "price": 12,
        "categoryEn": "Baby Kids Clothe",
        "categoryAz": "Körpə Uşaq Paltarları"
    },
    {
        "id": 15,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/13-600x600.jpg",
        "nameEn": "Parachute Advansed Baby Gentle Wash For New Born",
        "nameAz": "Parachute Advansed Baby Zərif Yuma Yeni Doğulan Üçün",
        "descriptionEn": "Introducing Parachute Advansed Baby Gentle wash for newborn babies. Enriched with virgin coconut oil and delicate coconut-based cleansers, it helps cleanse the skin and provides the moisture.",
        "descriptionAz": "Yeni doğulmuş körpələr üçün Parachute Advansed Baby Zərif yuma təqdim edirik. Bakirə kokos yağı və zərif kokos əsaslı təmizləyicilərlə zənginləşdirilmiş, dərini təmizləməyə kömək edir və nəmləndirir.",
        "price": 16,
        "categoryEn": "Bath & Skin Care",
        "categoryAz": "Duş & Dəriyə Qulluq"
    },
    {
        "id": 16,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/04-4-600x600.jpg",
        "nameEn": "Platonic Hub Soft Toys (Yellow Unicorn)",
        "nameAz": "Platonic Hub Yumşaq Oyuncaqlar (Sarı Unicorn)",
        "descriptionEn": "Huggable and loveable for someone special. Soft and Cuddly filling; wonderful look Light in weight. Delight your little ones this year by presenting them with an adorable soft toy.",
        "descriptionAz": "Xüsusi biri üçün qucaqlana bilən və sevimli. Yumşaq və sevimli doldurma; gözəl görünüş Yüngül çəki. Bu il balacalarınıza sevimli yumşaq oyuncaq təqdim edərək onları sevindirin.",
        "price": 13,
        "categoryEn": "Kids Toys",
        "categoryAz": "Uşaq Oyuncaqları"
    },
    {
        "id": 17,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/11-600x600.jpg",
        "nameEn": "Pockman Full Sleeve Graphic Print Sweatshirt",
        "nameAz": "Pockman Tam Qolu Qrafik Çap Sweatshirt",
        "descriptionEn": "This comfortable and cotton fleece long sleeve, bright and fun stylish round neck sweatshirt comes with ribbed cuffs and hem. It has been made using good quality fabric so that it is soft on your child.",
        "descriptionAz": "Bu rahat və pambıq yun uzunqol, parlaq və əyləncəli dəyirmi boyunlu köynək yivli manjetlər və ətəyi ilə gəlir. Övladınız üçün yumşaq olması üçün keyfiyyətli parçadan istifadə edilmişdir.",
        "price": 23,
        "categoryEn": "Baby Kids Clothe",
        "categoryAz": "Körpə Uşaq Paltarları"
    },
    {
        "id": 18,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/12-600x600.jpg",
        "nameEn": "Price Laugh & Learn Time to Learn Smartwatch",
        "nameAz": "Qiymət Gülün və Ağıllı Saatı Öyrənmək üçün Vaxt Öyrən",
        "descriptionEn": "Watch is multiple colorlight with high silicon material and 3d cartoon design. Watch is Best & Suitable for Age of 7 Years and Above. Watch is wonderful look that enhance your experience.",
        "descriptionAz": "Saat yüksək silikon materialı və 3D cizgi filmi dizaynı ilə çox rəngli işıqlıdır. Saat ən yaxşısıdır və 7 yaş və yuxarı yaş üçün uyğundur. Saat təcrübənizi artıran gözəl görünüşdür.",
        "price": 26,
        "categoryEn": "Kids Toys",
        "categoryAz": "Uşaq Oyuncaqları"
    },
    {
        "id": 19,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/18-600x600.jpg",
        "nameEn": "Ratna's Musical Doodle Rolypoly For Infants",
        "nameAz": "Körpələr üçün Ratnanın Musiqili Doodle Rolypoly",
        "descriptionEn": "When toddlers learn to move around and push and play with things on their own, They try to reach put to and grab and play with everything around them. This roly poly toy by  is a perfect item for kids.",
        "descriptionAz": "Körpələr tək başına hərəkət etməyi, itələməyi və əşyalarla oynamağı öyrəndikdə, ətrafdakı hər şeyi tutmağa və oynamağa çalışırlar. Bu roly poli oyuncaq uşaqlar üçün mükəmməl bir maddədir.",
        "price": 29,
        "categoryEn": "Kids Toys",
        "categoryAz": "Uşaq Oyuncaqları"
    },
    {
        "id": 20,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/02-5-600x600.jpg",
        "nameEn": "Sebamed Baby Cleansing Bar & Sebamed Baby Wash",
        "nameAz": "Sebamed Baby Təmizləyici Bar və Sebamed Uşaq Yuma",
        "descriptionEn": "Sebamed baby wash extra soft has ph of 5. 5 And has sugar based mild cleanser. Other cleansers for baby have ph greater 7 which leads to barrier damage. When baby is born, skin ph is 7.",
        "descriptionAz": "Sebamed uşaq yuma ekstra soft ph 5.5 və şəkər əsaslı yumşaq təmizləyiciyə malikdir. Körpə üçün digər təmizləyicilərin ph 7-dən çox olması maneənin zədələnməsinə səbəb olur. Körpə doğulanda dəri pH 7-dir.",
        "price": 15,
        "categoryEn": "Bath & Skin Care",
        "categoryAz": "Duş & Dəriyə Qulluq"
    },
    {
        "id": 21,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/14-600x600.jpg",
        "nameEn": "Slurrp Farm Rolled Oats, 100% Natural Wholegrain",
        "nameAz": "Slurrp Farm yulaf ezmesi, 100% təbii tam taxıl",
        "descriptionEn": "Made with 100% wholegrain Perfect for cooking up a yummy, healthy bowl of porridge for your little ones, with their favourite toppings. All the goodness of Oats helps in proper growth of baby.",
        "descriptionAz": "100% kəpəkdən hazırlanmışdır. Balacalarınız üçün onların sevimli əlavələri ilə dadlı, sağlam sıyıq bişirmək üçün mükəmməldir. Yulafın bütün faydaları körpənin düzgün böyüməsinə kömək edir.",
        "price": 16,
        "categoryEn": "Kids Food",
        "categoryAz": "Uşaq Yeməyi"
    },
    {
        "id": 22,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/22-600x600.jpg",
        "nameEn": "Steffi Love Baby Girls Midi/Knee Length Festive",
        "nameAz": "Steffi Love Baby Girls Midi/Diz Uzunluğu Şənliyi",
        "descriptionEn": "Soft quality scattered net with premium ultra satin inside for shining, golden kasavu tissue material with golden applique work. Beautifully designed outfit for baby girls with smooth lining and extra comfort.",
        "descriptionAz": "Yumşaq keyfiyyətli səpələnmiş tor, içərisində parlaqlıq üçün yüksək səviyyəli ultra atlaz, qızılı aplikasiya işi olan qızılı kasavu toxuma materialı. Hamar astarlı və əlavə rahatlıqla körpə qızlar üçün gözəl dizayn edilmiş paltar.",
        "price": 20,
        "categoryEn": "Baby Kids Clothe",
        "categoryAz": "Körpə Uşaq Paltarları"
    },

    {
        "id": 23,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/23-600x600.jpg",
        "nameEn": "Walking And Barking Dog Soft Toy Fantastic Puppy",
        "nameAz": "Gəzən Və Hürüyən İt Yumşaq Oyuncaq Fantastik Puppy",
        "descriptionEn": "One of the best sources of nutrition and taste, this instant mix derives its flavours from the age old comfort food Khichdi, Broken Wheat, Barley, Puffed Rice, Finger Millet, has a nutty and grainy taste.",
        "descriptionAz": "Qidalanma və dadın ən yaxşı mənbələrindən biri olan bu ani qarışım öz ləzzətlərini köhnə rahat yeməklərdən olan Xıçdı, Sınıq Buğda, Arpa, Şişmiş Düyü, Barmaq darısından alır, qozlu və dənəli dada malikdir.",
        "price": 22,
        "categoryEn": "Kids Toys",
        "categoryAz": "Uşaq Oyuncaqları"
    },

    {
        "id": 24,
        "image": "https://demos.codezeel.com/wordpress/WCM09/WCM090208/default/wp-content/uploads/2023/10/07-600x600.jpg",
        "nameEn": "Wiggly Toys Junior Smiley Stacking Colorful Rings",
        "nameAz": "Wiggly Toys Junior Smiley Rəngli Üzüklər",
        "descriptionEn": "You want your one to start walking and using their sippy cup you want them to wave to dad and blow you a kiss but to get there, you need take some steps of your own and help develop their motor skills.",
        "descriptionAz": "Birinizin gəzməyə başlamasını və yudumlu stəkanından istifadə etməsini istəyirsiniz, onlardan ataya əl yelləyib, sizə öpüş verməsini istəyirsiniz, lakin oraya çatmaq üçün özünüz bir neçə addım atmalı və motor bacarıqlarını inkişaf etdirməlisiniz.",
        "price": 13,
        "categoryEn": "Kids Toys",
        "categoryAz": "Uşaq Oyuncaqları"
    }
]


const category = [
    {
        "categoryEn": "Footwear",
        "categoryAz": "Ayaqqabı"
    },
    {
        "categoryEn": "Kids Toys",
        "categoryAz": "Uşaq Oyuncaqları"
    },
    {
        "categoryEn": "Health & Safety",
        "categoryAz": "Ayaqqabı"
    },
    {
        "categoryEn": "Kids Food",
        "categoryAz": "Uşaq Yeməyi"
    },
    {
        "categoryEn": "Baby Kids Clothe",
        "categoryAz": "Körpə Uşaq Paltarları"
    },
    {
        "categoryEn": "Bath & Skin Care",
        "categoryAz": "Duş & Dəriyə Qulluq"
    }
]
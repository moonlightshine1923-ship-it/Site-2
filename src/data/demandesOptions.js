// Options localisées pour le formulaire "Déposer une demande".
// Les valeurs envoyées à l'API restent en français pour ne pas casser la BDD / le back-office.

const FALLBACK_LANG = 'fr';

function langCode(language) {
  return String(language || FALLBACK_LANG).split('-')[0].toLowerCase();
}

function pick(labels, language) {
  const lng = langCode(language);
  return labels[lng] || labels[FALLBACK_LANG] || Object.values(labels)[0] || '';
}

export const DEMANDE_OBJECTS = [
  {
    value: 'Demande de contact',
    labels: {
      fr: 'Demande de contact',
      en: 'Contact request',
      ar: 'طلب اتصال',
      es: 'Solicitud de contacto',
      de: 'Kontaktanfrage',
      zh: '联系请求',
      it: 'Richiesta di contatto',
      ru: 'Запрос на контакт',
      tr: 'İletişim talebi'
    }
  },
  {
    value: 'Réclamation',
    labels: {
      fr: 'Réclamation',
      en: 'Complaint',
      ar: 'شكوى',
      es: 'Reclamación',
      de: 'Beschwerde',
      zh: '投诉',
      it: 'Reclamo',
      ru: 'Жалоба',
      tr: 'Şikayet'
    }
  },
  {
    value: 'Demande de renseignement',
    labels: {
      fr: 'Demande de renseignement',
      en: 'Information request',
      ar: 'طلب معلومات',
      es: 'Solicitud de información',
      de: 'Informationsanfrage',
      zh: '信息咨询',
      it: 'Richiesta di informazioni',
      ru: 'Запрос информации',
      tr: 'Bilgi talebi'
    }
  },
  {
    value: 'Autre',
    labels: {
      fr: 'Autre',
      en: 'Other',
      ar: 'أخرى',
      es: 'Otro',
      de: 'Sonstiges',
      zh: '其他',
      it: 'Altro',
      ru: 'Другое',
      tr: 'Diğer'
    }
  }
];

export const OBJECT_PLACEHOLDERS = {
  fr: "Sélectionnez l'objet de votre demande",
  en: 'Select the subject of your request',
  ar: 'اختر موضوع طلبك',
  es: 'Seleccione el asunto de su solicitud',
  de: 'Wählen Sie den Betreff Ihres Antrags',
  zh: '请选择申请主题',
  it: 'Seleziona l’oggetto della richiesta',
  ru: 'Выберите тему вашего запроса',
  tr: 'Talebinizin konusunu seçin'
};

// value = valeur stockée/envoyée en BDD ; labels = affichage selon la langue.
export const WILAYAS = [
  { value: '01 - Adrar', labels: { fr: '01 - Adrar', en: '01 - Adrar', ar: '01 - أدرار', es: '01 - Adrar', de: '01 - Adrar', zh: '01 - 阿德拉尔', it: '01 - Adrar', ru: '01 - Адрар', tr: '01 - Adrar' } },
  { value: '02 - Chlef', labels: { fr: '02 - Chlef', en: '02 - Chlef', ar: '02 - الشلف', es: '02 - Chlef', de: '02 - Chlef', zh: '02 - 谢勒夫', it: '02 - Chlef', ru: '02 - Шлеф', tr: '02 - Şlef' } },
  { value: '03 - Laghouat', labels: { fr: '03 - Laghouat', en: '03 - Laghouat', ar: '03 - الأغواط', es: '03 - Laghouat', de: '03 - Laghouat', zh: '03 - 拉格瓦特', it: '03 - Laghouat', ru: '03 - Лагуат', tr: '03 - Lagvat' } },
  { value: '04 - Oum El Bouaghi', labels: { fr: '04 - Oum El Bouaghi', en: '04 - Oum El Bouaghi', ar: '04 - أم البواقي', es: '04 - Oum El Bouaghi', de: '04 - Oum El Bouaghi', zh: '04 - 乌姆布瓦吉', it: '04 - Oum El Bouaghi', ru: '04 - Ум-эль-Буаги', tr: '04 - Oum El Bouaghi' } },
  { value: '05 - Batna', labels: { fr: '05 - Batna', en: '05 - Batna', ar: '05 - باتنة', es: '05 - Batna', de: '05 - Batna', zh: '05 - 巴特纳', it: '05 - Batna', ru: '05 - Батна', tr: '05 - Batna' } },
  { value: '06 - Béjaïa', labels: { fr: '06 - Béjaïa', en: '06 - Bejaia', ar: '06 - بجاية', es: '06 - Bejaia', de: '06 - Bejaia', zh: '06 - 贝贾亚', it: '06 - Bejaia', ru: '06 - Беджая', tr: '06 - Becaye' } },
  { value: '07 - Biskra', labels: { fr: '07 - Biskra', en: '07 - Biskra', ar: '07 - بسكرة', es: '07 - Biskra', de: '07 - Biskra', zh: '07 - 比斯克拉', it: '07 - Biskra', ru: '07 - Бискра', tr: '07 - Biskra' } },
  { value: '08 - Béchar', labels: { fr: '08 - Béchar', en: '08 - Bechar', ar: '08 - بشار', es: '08 - Bechar', de: '08 - Bechar', zh: '08 - 贝沙尔', it: '08 - Bechar', ru: '08 - Бешар', tr: '08 - Beşar' } },
  { value: '09 - Blida', labels: { fr: '09 - Blida', en: '09 - Blida', ar: '09 - البليدة', es: '09 - Blida', de: '09 - Blida', zh: '09 - 布利达', it: '09 - Blida', ru: '09 - Блида', tr: '09 - Blida' } },
  { value: '10 - Bouira', labels: { fr: '10 - Bouira', en: '10 - Bouira', ar: '10 - البويرة', es: '10 - Bouira', de: '10 - Bouira', zh: '10 - 布依拉', it: '10 - Bouira', ru: '10 - Буира', tr: '10 - Buira' } },
  { value: '11 - Tamanrasset', labels: { fr: '11 - Tamanrasset', en: '11 - Tamanrasset', ar: '11 - تمنراست', es: '11 - Tamanrasset', de: '11 - Tamanrasset', zh: '11 - 塔曼拉塞特', it: '11 - Tamanrasset', ru: '11 - Таманрассет', tr: '11 - Tamanrasset' } },
  { value: '12 - Tébessa', labels: { fr: '12 - Tébessa', en: '12 - Tebessa', ar: '12 - تبسة', es: '12 - Tebessa', de: '12 - Tebessa', zh: '12 - 特贝萨', it: '12 - Tebessa', ru: '12 - Тебесса', tr: '12 - Tebessa' } },
  { value: '13 - Tlemcen', labels: { fr: '13 - Tlemcen', en: '13 - Tlemcen', ar: '13 - تلمسان', es: '13 - Tremecén', de: '13 - Tlemcen', zh: '13 - 特莱姆森', it: '13 - Tlemcen', ru: '13 - Тлемсен', tr: '13 - Tilimsan' } },
  { value: '14 - Tiaret', labels: { fr: '14 - Tiaret', en: '14 - Tiaret', ar: '14 - تيارت', es: '14 - Tiaret', de: '14 - Tiaret', zh: '14 - 提亚雷特', it: '14 - Tiaret', ru: '14 - Тиарет', tr: '14 - Tiaret' } },
  { value: '15 - Tizi Ouzou', labels: { fr: '15 - Tizi Ouzou', en: '15 - Tizi Ouzou', ar: '15 - تيزي وزو', es: '15 - Tizi Ouzou', de: '15 - Tizi Ouzou', zh: '15 - 提济乌祖', it: '15 - Tizi Ouzou', ru: '15 - Тизи-Узу', tr: '15 - Tizi Uzu' } },
  { value: '16 - Alger', labels: { fr: '16 - Alger', en: '16 - Algiers', ar: '16 - الجزائر', es: '16 - Argel', de: '16 - Algier', zh: '16 - 阿尔及尔', it: '16 - Algeri', ru: '16 - Алжир', tr: '16 - Cezayir' } },
  { value: '17 - Djelfa', labels: { fr: '17 - Djelfa', en: '17 - Djelfa', ar: '17 - الجلفة', es: '17 - Djelfa', de: '17 - Djelfa', zh: '17 - 杰勒法', it: '17 - Djelfa', ru: '17 - Джельфа', tr: '17 - Celfa' } },
  { value: '18 - Jijel', labels: { fr: '18 - Jijel', en: '18 - Jijel', ar: '18 - جيجل', es: '18 - Jijel', de: '18 - Jijel', zh: '18 - 吉杰勒', it: '18 - Jijel', ru: '18 - Джиджель', tr: '18 - Cicel' } },
  { value: '19 - Sétif', labels: { fr: '19 - Sétif', en: '19 - Setif', ar: '19 - سطيف', es: '19 - Setif', de: '19 - Setif', zh: '19 - 塞提夫', it: '19 - Setif', ru: '19 - Сетиф', tr: '19 - Setif' } },
  { value: '20 - Saïda', labels: { fr: '20 - Saïda', en: '20 - Saida', ar: '20 - سعيدة', es: '20 - Saida', de: '20 - Saida', zh: '20 - 赛达', it: '20 - Saida', ru: '20 - Саида', tr: '20 - Saida' } },
  { value: '21 - Skikda', labels: { fr: '21 - Skikda', en: '21 - Skikda', ar: '21 - سكيكدة', es: '21 - Skikda', de: '21 - Skikda', zh: '21 - 斯基克达', it: '21 - Skikda', ru: '21 - Скикда', tr: '21 - Skikda' } },
  { value: '22 - Sidi Bel Abbès', labels: { fr: '22 - Sidi Bel Abbès', en: '22 - Sidi Bel Abbes', ar: '22 - سيدي بلعباس', es: '22 - Sidi Bel Abbes', de: '22 - Sidi Bel Abbes', zh: '22 - 西迪贝勒阿巴斯', it: '22 - Sidi Bel Abbes', ru: '22 - Сиди-Бель-Аббес', tr: '22 - Sidi Bel Abbas' } },
  { value: '23 - Annaba', labels: { fr: '23 - Annaba', en: '23 - Annaba', ar: '23 - عنابة', es: '23 - Annaba', de: '23 - Annaba', zh: '23 - 安纳巴', it: '23 - Annaba', ru: '23 - Аннаба', tr: '23 - Annaba' } },
  { value: '24 - Guelma', labels: { fr: '24 - Guelma', en: '24 - Guelma', ar: '24 - قالمة', es: '24 - Guelma', de: '24 - Guelma', zh: '24 - 盖尔马', it: '24 - Guelma', ru: '24 - Гельма', tr: '24 - Guelma' } },
  { value: '25 - Constantine', labels: { fr: '25 - Constantine', en: '25 - Constantine', ar: '25 - قسنطينة', es: '25 - Constantina', de: '25 - Constantine', zh: '25 - 君士坦丁', it: '25 - Costantina', ru: '25 - Константина', tr: '25 - Konstantin' } },
  { value: '26 - Médéa', labels: { fr: '26 - Médéa', en: '26 - Medea', ar: '26 - المدية', es: '26 - Medea', de: '26 - Medea', zh: '26 - 梅迪亚', it: '26 - Medea', ru: '26 - Медеа', tr: '26 - Medea' } },
  { value: '27 - Mostaganem', labels: { fr: '27 - Mostaganem', en: '27 - Mostaganem', ar: '27 - مستغانم', es: '27 - Mostaganem', de: '27 - Mostaganem', zh: '27 - 穆斯塔加奈姆', it: '27 - Mostaganem', ru: '27 - Мостаганем', tr: '27 - Mostaganem' } },
  { value: "28 - M'Sila", labels: { fr: "28 - M'Sila", en: "28 - M'Sila", ar: '28 - المسيلة', es: "28 - M'Sila", de: "28 - M'Sila", zh: '28 - 姆西拉', it: "28 - M'Sila", ru: '28 - Мсила', tr: "28 - M'Sila" } },
  { value: '29 - Mascara', labels: { fr: '29 - Mascara', en: '29 - Mascara', ar: '29 - معسكر', es: '29 - Mascara', de: '29 - Mascara', zh: '29 - 马斯卡拉', it: '29 - Mascara', ru: '29 - Маскара', tr: '29 - Maskara' } },
  { value: '30 - Ouargla', labels: { fr: '30 - Ouargla', en: '30 - Ouargla', ar: '30 - ورقلة', es: '30 - Ouargla', de: '30 - Ouargla', zh: '30 - 瓦尔格拉', it: '30 - Ouargla', ru: '30 - Уаргла', tr: '30 - Ouargla' } },
  { value: '31 - Oran', labels: { fr: '31 - Oran', en: '31 - Oran', ar: '31 - وهران', es: '31 - Orán', de: '31 - Oran', zh: '31 - 奥兰', it: '31 - Orano', ru: '31 - Оран', tr: '31 - Oran' } },
  { value: '32 - El Bayadh', labels: { fr: '32 - El Bayadh', en: '32 - El Bayadh', ar: '32 - البيض', es: '32 - El Bayadh', de: '32 - El Bayadh', zh: '32 - 埃尔拜德', it: '32 - El Bayadh', ru: '32 - Эль-Баяд', tr: '32 - El Bayadh' } },
  { value: '33 - Illizi', labels: { fr: '33 - Illizi', en: '33 - Illizi', ar: '33 - إليزي', es: '33 - Illizi', de: '33 - Illizi', zh: '33 - 伊利齐', it: '33 - Illizi', ru: '33 - Иллизи', tr: '33 - Illizi' } },
  { value: '34 - Bordj Bou Arréridj', labels: { fr: '34 - Bordj Bou Arréridj', en: '34 - Bordj Bou Arreridj', ar: '34 - برج بوعريريج', es: '34 - Bordj Bou Arreridj', de: '34 - Bordj Bou Arreridj', zh: '34 - 布尔吉布阿雷里吉', it: '34 - Bordj Bou Arreridj', ru: '34 - Бордж-Бу-Арреридж', tr: '34 - Bordj Bou Arreridj' } },
  { value: '35 - Boumerdès', labels: { fr: '35 - Boumerdès', en: '35 - Boumerdes', ar: '35 - بومرداس', es: '35 - Boumerdes', de: '35 - Boumerdes', zh: '35 - 布迈尔代斯', it: '35 - Boumerdes', ru: '35 - Бумердес', tr: '35 - Boumerdes' } },
  { value: '36 - El Tarf', labels: { fr: '36 - El Tarf', en: '36 - El Tarf', ar: '36 - الطارف', es: '36 - El Tarf', de: '36 - El Tarf', zh: '36 - 埃尔塔尔夫', it: '36 - El Tarf', ru: '36 - Эль-Тарф', tr: '36 - El Tarf' } },
  { value: '37 - Tindouf', labels: { fr: '37 - Tindouf', en: '37 - Tindouf', ar: '37 - تندوف', es: '37 - Tinduf', de: '37 - Tindouf', zh: '37 - 廷杜夫', it: '37 - Tindouf', ru: '37 - Тиндуф', tr: '37 - Tinduf' } },
  { value: '38 - Tissemsilt', labels: { fr: '38 - Tissemsilt', en: '38 - Tissemsilt', ar: '38 - تيسمسيلت', es: '38 - Tissemsilt', de: '38 - Tissemsilt', zh: '38 - 提塞姆西勒特', it: '38 - Tissemsilt', ru: '38 - Тиссемсильт', tr: '38 - Tissemsilt' } },
  { value: '39 - El Oued', labels: { fr: '39 - El Oued', en: '39 - El Oued', ar: '39 - الوادي', es: '39 - El Oued', de: '39 - El Oued', zh: '39 - 埃尔韦德', it: '39 - El Oued', ru: '39 - Эль-Уэд', tr: '39 - El Oued' } },
  { value: '40 - Khenchela', labels: { fr: '40 - Khenchela', en: '40 - Khenchela', ar: '40 - خنشلة', es: '40 - Khenchela', de: '40 - Khenchela', zh: '40 - 罕舍拉', it: '40 - Khenchela', ru: '40 - Хеншела', tr: '40 - Khenchela' } },
  { value: '41 - Souk Ahras', labels: { fr: '41 - Souk Ahras', en: '41 - Souk Ahras', ar: '41 - سوق أهراس', es: '41 - Souk Ahras', de: '41 - Souk Ahras', zh: '41 - 苏克阿赫拉斯', it: '41 - Souk Ahras', ru: '41 - Сук-Ахрас', tr: '41 - Souk Ahras' } },
  { value: '42 - Tipaza', labels: { fr: '42 - Tipaza', en: '42 - Tipaza', ar: '42 - تيبازة', es: '42 - Tipaza', de: '42 - Tipaza', zh: '42 - 提帕扎', it: '42 - Tipaza', ru: '42 - Типаза', tr: '42 - Tipaza' } },
  { value: '43 - Mila', labels: { fr: '43 - Mila', en: '43 - Mila', ar: '43 - ميلة', es: '43 - Mila', de: '43 - Mila', zh: '43 - 米拉', it: '43 - Mila', ru: '43 - Мила', tr: '43 - Mila' } },
  { value: '44 - Aïn Defla', labels: { fr: '44 - Aïn Defla', en: '44 - Ain Defla', ar: '44 - عين الدفلى', es: '44 - Ain Defla', de: '44 - Ain Defla', zh: '44 - 艾因代夫拉', it: '44 - Ain Defla', ru: '44 - Айн-Дефла', tr: '44 - Ayn Defla' } },
  { value: '45 - Naâma', labels: { fr: '45 - Naâma', en: '45 - Naama', ar: '45 - النعامة', es: '45 - Naama', de: '45 - Naama', zh: '45 - 纳阿马', it: '45 - Naama', ru: '45 - Наама', tr: '45 - Naama' } },
  { value: '46 - Aïn Témouchent', labels: { fr: '46 - Aïn Témouchent', en: '46 - Ain Temouchent', ar: '46 - عين تموشنت', es: '46 - Ain Temouchent', de: '46 - Ain Temouchent', zh: '46 - 艾因泰穆尚特', it: '46 - Ain Temouchent', ru: '46 - Айн-Темушент', tr: '46 - Ayn Temouchent' } },
  { value: '47 - Ghardaïa', labels: { fr: '47 - Ghardaïa', en: '47 - Ghardaia', ar: '47 - غرداية', es: '47 - Ghardaia', de: '47 - Ghardaia', zh: '47 - 加尔达亚', it: '47 - Ghardaia', ru: '47 - Гардая', tr: '47 - Gardaya' } },
  { value: '48 - Relizane', labels: { fr: '48 - Relizane', en: '48 - Relizane', ar: '48 - غليزان', es: '48 - Relizane', de: '48 - Relizane', zh: '48 - 赫利赞', it: '48 - Relizane', ru: '48 - Релизан', tr: '48 - Relizane' } },
  { value: "49 - El M'Ghair", labels: { fr: "49 - El M'Ghair", en: "49 - El M'Ghair", ar: '49 - المغير', es: "49 - El M'Ghair", de: "49 - El M'Ghair", zh: '49 - 埃尔梅盖尔', it: "49 - El M'Ghair", ru: '49 - Эль-Мгир', tr: "49 - El M'Ghair" } },
  { value: '50 - El Meniaa', labels: { fr: '50 - El Meniaa', en: '50 - El Meniaa', ar: '50 - المنيعة', es: '50 - El Meniaa', de: '50 - El Meniaa', zh: '50 - 埃尔梅尼亚', it: '50 - El Meniaa', ru: '50 - Эль-Мения', tr: '50 - El Meniaa' } },
  { value: '51 - Ouled Djellal', labels: { fr: '51 - Ouled Djellal', en: '51 - Ouled Djellal', ar: '51 - أولاد جلال', es: '51 - Ouled Djellal', de: '51 - Ouled Djellal', zh: '51 - 乌莱德杰拉勒', it: '51 - Ouled Djellal', ru: '51 - Улед-Джеллал', tr: '51 - Ouled Djellal' } },
  { value: '52 - Bordj Badji Mokhtar', labels: { fr: '52 - Bordj Badji Mokhtar', en: '52 - Bordj Badji Mokhtar', ar: '52 - برج باجي مختار', es: '52 - Bordj Badji Mokhtar', de: '52 - Bordj Badji Mokhtar', zh: '52 - 布尔吉巴吉穆赫塔尔', it: '52 - Bordj Badji Mokhtar', ru: '52 - Бордж-Баджи-Мохтар', tr: '52 - Bordj Badji Mokhtar' } },
  { value: '53 - Béni Abbès', labels: { fr: '53 - Béni Abbès', en: '53 - Beni Abbes', ar: '53 - بني عباس', es: '53 - Beni Abbes', de: '53 - Beni Abbes', zh: '53 - 贝尼阿巴斯', it: '53 - Beni Abbes', ru: '53 - Бени-Аббес', tr: '53 - Beni Abbas' } },
  { value: '54 - In Salah', labels: { fr: '54 - In Salah', en: '54 - In Salah', ar: '54 - عين صالح', es: '54 - In Salah', de: '54 - In Salah', zh: '54 - 因萨拉赫', it: '54 - In Salah', ru: '54 - Ин-Салах', tr: '54 - In Salah' } },
  { value: '55 - In Guezzam', labels: { fr: '55 - In Guezzam', en: '55 - In Guezzam', ar: '55 - عين قزام', es: '55 - In Guezzam', de: '55 - In Guezzam', zh: '55 - 因盖扎姆', it: '55 - In Guezzam', ru: '55 - Ин-Геззам', tr: '55 - In Guezzam' } },
  { value: '56 - Touggourt', labels: { fr: '56 - Touggourt', en: '56 - Touggourt', ar: '56 - تقرت', es: '56 - Touggourt', de: '56 - Touggourt', zh: '56 - 图古尔特', it: '56 - Touggourt', ru: '56 - Туггурт', tr: '56 - Touggourt' } },
  { value: '57 - Djanet', labels: { fr: '57 - Djanet', en: '57 - Djanet', ar: '57 - جانت', es: '57 - Djanet', de: '57 - Djanet', zh: '57 - 贾奈特', it: '57 - Djanet', ru: '57 - Джанет', tr: '57 - Djanet' } },
  { value: '58 - El Bayadh', labels: { fr: '58 - El Bayadh', en: '58 - El Bayadh', ar: '58 - البيض', es: '58 - El Bayadh', de: '58 - El Bayadh', zh: '58 - 埃尔拜德', it: '58 - El Bayadh', ru: '58 - Эль-Баяд', tr: '58 - El Bayadh' } }
];

export function getDemandeObjectOptions(language) {
  return DEMANDE_OBJECTS.map((item) => ({
    value: item.value,
    label: pick(item.labels, language)
  }));
}

export function getWilayaOptions(language) {
  return WILAYAS.map((item) => ({
    value: item.value,
    label: pick(item.labels, language)
  }));
}

export function getObjectPlaceholder(language) {
  return pick(OBJECT_PLACEHOLDERS, language);
}

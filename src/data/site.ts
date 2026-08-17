/**
 * כל התוכן של הדף במקום אחד.
 * TODO: להחליף את פרטי הקשר, הרשתות החברתיות והתמונות בנתונים האמיתיים של המספרה.
 */

export const site = {
  name: "היצירה",
  kicker: "מספרת ברבר",
  description:
    "מספרת ברבר בראשון לציון. תספורות גברים, עיצוב זקן וגילוח מגבת חמה — בעבודת יד, בלי למהר.",
  phoneDisplay: "053-524-3023",
  phoneHref: "tel:+972535243023",
  whatsapp: "https://api.whatsapp.com/send?phone=9720535243023",
  bookingUrl: "https://calmark.io/p/1csLX",
  email: "hello@hayetzira.co.il",
  address: {
    street: "היצירה 5",
    city: "עפולה",
    full: "עפולה, היצירה 5",
    maps: "https://www.google.com/maps/search/?api=1&query=עפולה%2C+היצירה+5",
    embed:
      "https://www.google.com/maps?q=עפולה%2C+היצירה+5&output=embed",
    waze: "https://waze.com/ul/hsvc17phek",
  },
  social: {
    instagram: "https://instagram.com/hayetsira_barbershop", // TODO
    // facebook: "https://facebook.com/", // TODO
    // tiktok: "https://tiktok.com/", // TODO
  },
} as const;

export const nav = [
  { href: "#barbers", label: "הצוות" },
  { href: "#instagram", label: "אינסטגרם" },
  { href: "#pricing", label: "מחירון" },
  { href: "#hours", label: "שעות ומיקום" },
] as const;

/** מזהה קבוע לכל ספר — משמש גם כמפתח במחירון (ראו priceByBarber). */
export type BarberId = "ronen" | "yakir" | "shon";

export type Barber = {
  id: BarberId;
  name: string;
  /** השם שמופיע במחירון, כשהמחיר משתנה לפי ספר */
  shortName: string;
  role: string;
  bio: string;
  specialties: string[];
  years: number;
  image: string;
  instagram?: string;
};

export const barbers: Barber[] = [
  {
    id: "ronen",
    shortName: "רונן",
    name: "רונן \"התער\" טיטוב",
    role: "יוצר בכיר",
    bio: "שנים של יצירה מאחוריו, עם ניסיון עשיר בתספורות קלאסיות ומודרניות. אוהב לעבוד עם מספריים בלבד.",
    specialties: ["פייד קלאסי", "מספריים בלבד", "תספורת חתן"],
    years: 6,
    image: "/images/barbers/ronen.jpg",
    instagram: "https://www.instagram.com/ronen_titov/",
  },
  {
    id: "yakir",
    shortName: "יקיר",
    name: "יקיר \"פייד\" אבוטבול",
    role: "ספר בכיר",
    bio: "מומחה לזקן ולגילוח בתער. עובד עם מגבת חמה ושמנים טבעיים, בדיוק כמו שסבא שלו עשה.",
    specialties: ["עיצוב זקן", "גילוח בתער", "מגבת חמה"],
    years: 11,
    image: "/images/barbers/yakir.jpg",
    instagram: "https://www.instagram.com/yakirabutbul/",
  },
  {
    id: "shon",
    shortName: "שון",
    name: "שון \"השפיץ\" קוז",
    role: "ספר",
    bio: "הכתובת לטקסטורות, קרלי ותספורות מודרניות. אוהב לעבוד עם שיער שלא מתנהג יפה.",
    specialties: ["טקסטורה", "קרלי", "סקין פייד"],
    years: 7,
    image: "/images/barbers/shon.jpg",
    instagram: "https://www.instagram.com/shon_koz_/",
  }
];

export const instagram = {
  handle: "hayetsira_barbershop",
  profileUrl: "https://www.instagram.com/hayetsira_barbershop/",
  posts: [
    "https://www.instagram.com/p/DbsOi6Eql54/",
    "https://www.instagram.com/p/DbiQcaHKIBb/",
    "https://www.instagram.com/p/DbIkZPYK1yV/",
  ],
} as const;

export type GalleryItem = { src: string; alt: string; caption: string; wide?: boolean };

/** alt מתאר את התוצאה עצמה — מה שגולש שלא רואה את התמונה צריך לדעת. */
export const gallery: GalleryItem[] = [
  {
    src: "/images/gallery/1.svg",
    alt: "תספורת פייד נמוך עם מעבר הדרגתי לצדדים ושיער מסודר לאחור",
    caption: "פייד נמוך · אליאב",
    wide: true,
  },
  {
    src: "/images/gallery/2.svg",
    alt: "עיצוב זקן מלא עם קו לחי חד וגבולות מוגדרים",
    caption: "עיצוב זקן · יוסי",
  },
  {
    src: "/images/gallery/3.svg",
    alt: "תספורת מספריים קלאסית עם פריטה מהצד",
    caption: "קלאסי · אליאב",
  },
  {
    src: "/images/gallery/4.svg",
    alt: "סקין פייד גבוה עם טקסטורה מוברשת קדימה",
    caption: "סקין פייד · דניאל",
    wide: true,
  },
  {
    src: "/images/gallery/5.svg",
    alt: "תספורת ילדים קצרה ומסודרת עם קו מצח רך",
    caption: "ילדים · שירן",
  },
  {
    src: "/images/gallery/6.svg",
    alt: "שיער מתולתל מעוצב עם צדדים קצרים ונפח למעלה",
    caption: "קרלי · דניאל",
  },
  {
    src: "/images/gallery/7.svg",
    alt: "גילוח בתער עם מגבת חמה וסיום חלק",
    caption: "גילוח מלא · יוסי",
    wide: true,
  },
  {
    src: "/images/gallery/8.svg",
    alt: "גוונים בהירים על שיער בינוני עם מעבר טבעי בשורשים",
    caption: "גוונים · שירן",
  },
];

export type Service = {
  name: string;
  desc: string;
  /** מחיר ברירת המחדל — תקף לכל ספר שאין לו מחיר משלו */
  price: number;
  /**
   * מחיר שונה לספר מסוים, לפי המזהה שלו.
   * מי שלא מופיע כאן — המחיר שלו הוא price.
   * לדוגמה: priceByBarber: { yakir: 95, shon: 70 }
   */
  priceByBarber?: Partial<Record<BarberId, number>>;
  minutes: number;
  popular?: boolean;
};

/**
 * שמות השירותים והתיאורים לקוחים ממערכת התורים.
 *
 * TODO: כל המחירים ומשכי הזמן כאן הם מצייני מקום — צריך להחליף אותם
 * במחירים האמיתיים. המחיר של כל ספר = priceByBarber?.[id] ?? price,
 * ולכן מספיק להוסיף ל-priceByBarber רק את מי שגובה מחיר שונה.
 */
export const services: Service[] = [
  {
    name: "תספורת בלבד",
    desc: "כזאת שיושבת עליך טיל!",
    price: 80,
    priceByBarber: { yakir: 90 },
    minutes: 40,
    popular: true,
  },
  {
    name: "תספורת + זקן",
    desc: "אם בא לך לצאת זינגלר!",
    price: 110,
    priceByBarber: { yakir: 120 },
    minutes: 60,
    popular: true,
  },
  {
    name: "חיילים בסדיר + עיצוב זקן",
    desc: "אפילו הרס״ר שלך ישאל איפה הסתפרת",
    price: 95,
    minutes: 55,
  },
  {
    name: "ילדים ובני נוער",
    desc: "תספורות שתרצו לצלם לאינסטגרם!",
    price: 65,
    priceByBarber: { shon: 60 },
    minutes: 30,
  },
  {
    name: "חיילים בסדיר",
    desc: "אפילו הרס״ר שלך ישאל איפה הסתפרת",
    price: 70,
    minutes: 30,
  },
  {
    name: "עיצוב זקן",
    desc: "אומרים בעיר שזקן זאת המומחיות שלנו!",
    price: 45,
    priceByBarber: { yakir: 55 },
    minutes: 20,
  },
  {
    name: "גילוח ראש + עיצוב זקן",
    desc: "קרחת שמחוברת לזקן זה ה-דיבור",
    price: 90,
    minutes: 45,
  },
  {
    name: "עבודת מספריים בלבד",
    desc: "לבעלי שיער בינוני-ארוך",
    price: 85,
    minutes: 45,
  },
];

/** המחיר של שירות אצל ספר מסוים — ברירת המחדל, אלא אם הוגדר לו מחיר משלו. */
export function priceFor(service: Service, barber: Barber): number {
  return service.priceByBarber?.[barber.id] ?? service.price;
}

export type Day = { label: string; open: string | null; close: string | null; note?: string };

/** לפי אינדקס יום בשבוע של JS: 0 = ראשון. */
export const hours: Day[] = [
  { label: "ראשון", open: "09:00", close: "20:00" },
  { label: "שני", open: "09:00", close: "20:00" },
  { label: "שלישי", open: "09:00", close: "20:00" },
  { label: "רביעי", open: "09:00", close: "21:00" },
  { label: "חמישי", open: "09:00", close: "21:00" },
  { label: "שישי", open: "08:00", close: "14:00" },
  { label: "שבת", open: null, close: null, note: "סגור" },
];

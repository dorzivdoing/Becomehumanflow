import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import Footer from "@/components/clinic/Footer";
import { base44 } from "@/api/base44Client";
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const C = {
  bg: '#EDE8DF',
  bgDark: '#E0D9CE',
  green: '#1E2631',
  sage: '#5A7A5D',
  sageMid: '#3D5C42',
  sageLight: 'rgba(90,122,93,0.10)',
  text: '#1E2631',
  textMid: '#232B32',
  textLight: '#5A6B5C',
  border: 'rgba(22,34,47,0.12)',
  white: '#FAF7F2',
  cream: '#F3EDE3',
  warm: '#B26E63',
  clay: '#B26E63',
  navy: '#16222F',
};

const tx = { transition: 'all 0.4s ease' };

function LeafAccent({ style }) {
  return null;
}

function QuoteBlock({ text, author }) {
  return (
    <div style={{ maxWidth: '640px', margin: '56px auto 0', textAlign: 'center', padding: '40px 32px' }}>
      <div style={{ fontSize: '36px', color: C.sage, opacity: 0.6, marginBottom: '12px', fontFamily: 'Georgia, serif' }}>"</div>
      <p style={{ fontSize: '16px', color: C.text, lineHeight: 1.9, fontStyle: 'italic', fontWeight: 600, letterSpacing: '0.02em', margin: '0 0 14px', fontFamily: "'Assistant', sans-serif" }}>
        {text}
      </p>
      {author && <p style={{ fontSize: '13px', color: C.sage, fontWeight: 600, margin: 0, letterSpacing: '0.04em', fontFamily: "'Assistant', sans-serif" }}>{author}</p>}
    </div>
  );
}



function ViewHome({ setView }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div style={{ background: 'linear-gradient(160deg, #E8E2D8 0%, #DDD7CC 40%, #D5CFC4 100%)', padding: '60px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 20, left: 10, width: '110px', transform: 'rotate(15deg)' }} />
        <LeafAccent style={{ bottom: 20, right: 20, width: '90px', transform: 'rotate(-25deg) scaleX(-1)' }} />
        <div className="home-flex" style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', direction: 'rtl' }}>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <div style={{ fontSize: '15px', color: C.warm, fontWeight: 500, letterSpacing: '0.08em', marginBottom: '16px', fontFamily: "'Assistant', sans-serif", textAlign: 'center' }}>
              פסיכותרפיה גופנית &nbsp;·&nbsp; בית אורן &nbsp;·&nbsp; אונליין
            </div>

            <div style={{ borderRight: `3px solid ${C.sage}`, paddingRight: '18px', margin: '0 0 32px' }}>
              <p style={{ fontSize: 'clamp(14px,1.8vw,16px)', color: C.textMid, lineHeight: 1.95, fontFamily: "'Assistant', sans-serif", margin: '0 0 10px', fontStyle: 'italic' }}>
                ליבי כל כך קטן,<br />
                הוא כמעט בלתי נראה.<br />
                כיצד יכול אתה לאכסן בתוכו צער כה רב?<br />
                ״הבט״, הוא ענה,<br />
                ״עיניך קטנות אף יותר,<br />
                ובכל זאת - הן מכילות את העולם״
              </p>
              <p style={{ fontSize: '12px', color: C.sage, fontWeight: 600, margin: 0, letterSpacing: '0.04em', fontFamily: "'Assistant', sans-serif" }}>— ג׳לאל א-דין רומי</p>
            </div>

            <div style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'stretch' }}>
              <button onClick={() => setView(2)} style={{ background: C.clay, color: C.white, border: 'none', borderRadius: '8px', padding: '14px 28px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", boxShadow: '0 4px 14px rgba(178,110,99,0.3)', ...tx }}>
                למי מתאים הטיפול?
              </button>
              <button onClick={() => setView(5)} style={{ background: 'transparent', color: C.navy, border: `2px solid ${C.navy}`, borderRadius: '50px', padding: '12px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", ...tx }}>
                אודותיי
              </button>
              <button onClick={() => setView(6)} style={{ background: 'transparent', color: C.navy, border: `2px solid ${C.navy}`, borderRadius: '50px', padding: '12px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", ...tx }}>
                יצירת קשר
              </button>
            </div>

            {/* Mobile: image below buttons */}
            <div className="home-img-mobile" style={{ display: 'none', justifyContent: 'center', marginTop: '36px' }}>
              <div style={{ width: '180px', height: '230px', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(44,58,46,0.13)', border: `1px solid ${C.border}` }}>
                <img src="https://media.base44.com/images/public/6a098e797170ea9e67f23db4/c9487d0c4_WhatsAppImage2024-03-10at212726.jpeg" alt="דור" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
            </div>
          </div>

          {/* Desktop: image on the side */}
          <div className="home-img-desktop" style={{ width: '220px', height: '280px', borderRadius: '14px', flexShrink: 0, overflow: 'hidden', boxShadow: '0 8px 32px rgba(44,58,46,0.13)', border: `1px solid ${C.border}` }}>
            <img src="https://media.base44.com/images/public/6a098e797170ea9e67f23db4/c9487d0c4_WhatsAppImage2024-03-10at212726.jpeg" alt="דור" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>

        {/* Mobile: image centered below buttons */}
        <style>{`
          @media (max-width: 700px) {
            .home-img-desktop { display: none !important; }
            .home-img-mobile { display: flex !important; }
            .home-flex { flex-direction: column !important; }
          }
          @media (min-width: 701px) {
            .home-img-mobile { display: none !important; }
          }
        `}</style>
      </div>
    </motion.div>
  );
}

function ViewAbout({ setView }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div style={{ background: C.bg, padding: '60px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 80, left: 0, width: '100px', transform: 'rotate(10deg)' }} />
        <LeafAccent style={{ bottom: 40, right: 0, width: '90px', transform: 'rotate(-15deg) scaleX(-1)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: 400, color: C.green, textAlign: 'right', margin: '0 0 32px', fontFamily: "'Assistant', sans-serif" }}>
            אודותיי
          </h2>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ flex: 1, minWidth: '240px' }}>
              {[
                'שלום, אני דור. השם שבחרתי לקליניקה, "להיות אדם", נולד מתוך התבוננות ארוכה על כך שלהיות אדם בוגר בעולם הזה הוא תהליך מתמשך, הלוקח זמן, דורש חניכה ומכיל בתוכו מגוון רחב של חוויות. המהלך המקצועי שלי בא לעולם מתוך מחקר ועיבוד אישי ומקצועי עמוק שהחל לפני כ-11 שנים, והוביל אותי לחקור דרכים בהן הגוף והנפש נפגשים וקשורים. לאחר שירות צבאי משמעותי יצאתי למסע חקירה, גילוי והתנסות.',
                'מאז שנת 2017 אני מלווה בקליניקה מבוגרים בתהליכי שינוי, התמודדות וצמיחה מתוך משבר באופן פרטני, פנים אל פנים ואונליין. דרכי המקצועית החלה דרך עבודה עם יוגה טיפולית (בהמשך שימשתי גם כעוזר הוראה בהכשרת מטפלים ומורים בתחום). התמחיתי ועבדתי בשיקום פגיעות ופציעות, כאבים כרוניים, מחלות אוטואימוניות, וויסות רגשי וגופני.',
                'החל משנת 2022 אני מטפל כפסיכותרפיסט גופני בגישת ביוסינתזה, מוסמך מטעם המכון הבינלאומי בשוויץ (IIBS). החיבור שלי לביוסינתזה נבע מכך שהיא מתאימה את עצמה לאדם, ולא להפך. היא מבוססת על יצירת איזון מחדש בין חלקים שונים בך, ומאפשרת לנוע מתוך מצוקה אל עבר משאבים טבעיים וחיוניוּת. כיום אני חלק מסגל ההוראה כעוזר הוראה בבית הספר לביוסינתזה בישראל ולאחרונה התחלתי את הכשרת המדריכים (Supervisors) בגישה. התהליך הטיפולי איתי בקליניקה הפרטית מתנהל תחת הדרכה מקצועית קבועה, במסגרת של תהליכים מעמיקים ארוכי טווח.',
                'העבודה שלי בחדר הטיפולים מחוברת להקשרים הרחבים של החיים. בטיפול אנו לוקחים בחשבון את הסיפור האישי והקשרי חייך, מתוך הבנה שאנחנו תמיד קשורים לאנשים, לסיפורים ולמקומות שעיצבו אותנו, גם אם אנחנו או הם כבר לא שם. תפיסה זו מלווה אותי גם באופן אישי: בעשור האחרון אני חוקר ובונה את הסיפור המשפחתי של אבותיי שמגיע ממזרח אירופה באמצעות איתור מסמכים בארכיבים ובעבודה דרך קונסטלציה משפחתית.',
                'המבט הרחב והזיקה הזו אל השורשים מהם צומחים אנשים הובילו אותי אל עולמות התוכן של טקסי אבל, חיים ומוות. הוסמכתי כמנחה בתוכנית "אבל כשער לחיים" בהשראת עבודתו של פרנסיס וולר (Francis Weller), ואני שואב השראה קבועה ממשנתם של סטיבן ג׳נקינסון (Stephen Jenkinson) ואלחנדרו חודורובסקי (Alejandro Jodorowski). כיום אני פועל כאיש צוות בטקסי אבל קהילתיים, מתוך הבנה שצער ואבל אינם פתולוגיה שיש לתקן, אלא חלק בלתי נפרד מתהליך של חניכה והבשלה אנושית. בעיניי, טקסים הם טכנולוגיות אנושיות הכרחיות לזמננו.',
                'לאורך השנים יזמתי והקמתי מיזמים המשלבים גוף וקהילה: הקמתי את "זוּזוּ" – מרחב לאירועי תנועה אלטרנטיביים המאפשר ביטוי אישי חופשי, והייתי מייסד-שותף של "Bodyfulness" (מיזם Wellness לארגונים).',
                'מחוץ לקליניקה, החקירה העצמית שלי מלווה בחיבור יומיומי לאדמה וליצירה: אני לומד על חיבור לאדמה דרך לימודי חקלאות יצרנית בקנה מידה קטן, מתסיס ירקות ומשמר מזון, חוקר תנועה ממוקדת ברקמת הפאשיה ומוצא עוגן והשראה במוזיקה, שירה ובשפת האחרוּת המופלאה - בה ולידה אנחנו חיים.',
                'אל המפגשים הטיפוליים אני מביא איתי איכויות של הקשבה עמוקה, נוכחות, סקרנות, הבחנה והומור. הכוונה המרכזית שמנחה אותי היא לבנות יחד איתך יחסים טיפוליים שיש בהם מפגש אנושי בגובה העיניים, אמון הדדי, כבוד, וקצב מדויק שמתאים לך ולהקשרים הייחודיים של חייך.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '15px', color: C.textMid, lineHeight: 1.9, margin: '0 0 20px', fontFamily: "'Assistant', sans-serif", textAlign: 'justify' }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
        <QuoteBlock
          text="חשבתי שאני רוצה להיות משורר, אבל בעומק ליבי — רציתי פשוט להיות שיר."
          author="— חיימה גיל דה בידמה"
        />
      </div>
    </motion.div>
  );
}

function ViewApproach({ setView }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <ViewApproachContent setView={setView} />
    </motion.div>
  );
}

function ViewApproachContent({ setView }) {
   const streams = [
    { title: 'קרקע ותנועה', body: 'ביסוס תחושת קרקע ויציבות גופנית כמקור ישיר לוויסות רגשי ותחושת ביטחון ומקום בעולם. ערוץ זה מתמקד בשחרור דפוסי מתח, נוקשות וקיפאון כרוניים בשרירים ובשלד, שהצטברו במערכת בעקבות דחק מתמשך או אירועי קיצון וטראומה, ומשיב לגוף את חופש התנועה והחיוניות שלו.' },
    { title: 'רגש ונשימה', body: 'חיבור למקצב הפנימי, ויסות והכלה של רגשות ותחושות אינטנסיביות באמצעות הנשימה. עבודה זו מעניקה תמיכה עמוקה למערכת העצבים, ומאפשרת מעבר ממצבי הצפה או אדישות אל מרכז פנימי יציב ומווסת.' },
    { title: 'מחשבות ותשומת לב', body: 'פיתוח קשב סקרן, חקירה ובהירות מנטלית כלפי המורכבות של התודעה והקשרי העולם שלך. תרגום עדין של תחושות ורגשות למילים בהירות בעלות משמעות, כדי ליצור אינטגרציה שלמה, לחבר בין הראש לגוף ולאפשר גישה אל המהות האותנטית היחודית לך.' },
  ];
  return (
    <div>
      <div style={{ background: C.bg, padding: '60px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 80, left: 0, width: '100px' }} />
        <LeafAccent style={{ bottom: 40, right: 0, width: '90px', transform: 'scaleX(-1)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: 400, color: C.green, textAlign: 'right', margin: '0 0 20px', fontFamily: "'Assistant', sans-serif" }}>
            גישה שמחברת חיים
          </h2>
          <p style={{ textAlign: 'justify', color: C.textMid, fontSize: '15px', lineHeight: 1.9, margin: '0 0 48px', fontFamily: "'Assistant', sans-serif" }}>
            גישת הביוסינתזה היא שיטת טיפול בינלאומית מעולם הפסיכותרפיה הגופנית. היא נוסדה בשנות השבעים על ידי החוקר והתרפיסט דיוויד בואדלה, מתוך הבנה עמוקה שהאדם הוא שלם אחד. השיטה נשענת על שילוב מרתק ומבוסס בין פסיכולוגיית המעמקים וגישת יחסי האובייקט, לבין מחקרים מודרניים בחקר המוח, תיאוריות ויסות רגשי ומדעי ההתפתחות העוברית. הביוסינתזה מוכרת באופן רשמי על ידי האיגוד האירופי לפסיכותרפיה (EAP) ומראה כיצד עבודה סומטית, בתוך יחסי אמון, יכולה להביא לשינוי עמוק ויציב, ללא צורך ב״לנפץ״ הגנות, ״לתקן״ את מה שנשבר, או לפתוח פצעים בצורה מכאיבה.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {streams.map((s, i) => (
              <div key={i} style={{ background: C.white, borderRadius: '14px', padding: '32px 28px', boxShadow: '0 2px 16px rgba(44,58,46,0.07)', borderBottom: `3px solid ${C.sage}` }}>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: C.green, margin: '0 0 14px', fontFamily: "'Assistant', sans-serif", textAlign: 'center' }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: C.textMid, lineHeight: 1.85, margin: 0, fontFamily: "'Assistant', sans-serif" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '32px', margin: '48px auto 0', flexWrap: 'wrap' }}>
          <div style={{ width: '120px', height: '80px', background: C.white, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 8px rgba(44,58,46,0.06)' }}>
            <img src="https://media.base44.com/images/public/6a098e797170ea9e67f23db4/75279c92f_logo-eap.png" alt="EAP" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '8px', opacity: 0.85 }} />
          </div>
          <div style={{ width: '120px', height: '80px', background: C.white, borderRadius: '8px', display: 'flex', alignItems: 'center', justifyContent: 'center', boxShadow: '0 1px 8px rgba(44,58,46,0.06)' }}>
            <img src="https://media.base44.com/images/public/6a098e797170ea9e67f23db4/7cf2b25bb_----e1718642093662.png" alt="IFB" style={{ width: '100%', height: '100%', objectFit: 'contain', padding: '8px', opacity: 0.85 }} />
          </div>
        </div>
        <QuoteBlock
          text='ביוסינתזה משמעה "אינטגרציה של חיים". כיצד נוכל לארוג יחד את שלושת הממדים היסודיים של הקיום האנושי: הקיום הגופני שלנו, החוויה הפסיכולוגית, והמהות הרוחנית?'
          author='— דיוויד בואדלה, ״זרמי חיים״'
        />
      </div>
    </div>
  );
}

const writings = [
  {
    text: `It's still possible to fully understand you have been always been the place where the miracle has happened:\n\nthat you have been since your birth, the bread given and the wine lifted, the change witnessed and the change itself,\nthat you have secretly been, all along, a goodness that can continue to be a goodness to itself.\nIt's still possible in the end\nto realize why you are here\nand why you have endured,\nand why you might have suffered so much, so that in the end, you could witness love, miraculously arriving from nowhere, crossing bravely as it does, out of darkness, from that great and spacious stillness inside you, to the simple, light-filled life of being said.`,
    author: 'David Whyte, Still Possible',
    rtl: false,
  },
  {
    text: `Stand still. The trees ahead and bushes beside you are not lost.\nWherever you are is called here,\nand you must treat it as a powerful stranger,\nmust ask permission to know it and be known.\nThe forest breathes. Listen.\nIt answers, I have made this place around you.\nIf you leave it, you may come back again, saying Here.\nNo two trees are the same to Raven.\nNo two branches are the same to Wren.\nIf what a tree or a bush does is lost on you,\nYou are surely lost. Stand still. The forest knows\nWhere you are. You must let it find you.`,
    author: 'David Wagoner, Traveling Light',
    rtl: false,
  },
  {
    text: `"If I'm forced to choose and very frequently I am, I'd rather be whole than be good"`,
    author: 'Carl Jung',
    rtl: false,
  },
  {
    text: `"Heartbreak is the beautifully helpless side of love and affection and is just as much an essence and emblem of care as the spiritual athlete's quick but abstract ability to let go. Heartbreak has its own way of inhabiting time and its own beautiful and trying patience in coming and going...Heartbreak is how we mature;..."`,
    author: 'David Whyte, Consolations',
    rtl: false,
  },
  {
    text: `ממש כאילו חייבת להיות בי
כמות כזו של כאב
אם לא בנפש הרי בגוף,
אם לא ברגל הרי בצלע,
אם לא מתחת ללב הרי בברכיים.
החולשה חיה בי בגבורה
ונאבקת על קיומה.
אולי היא בררה שמעולם לא נוסתה,
אופן אחר של חיים, שברוב יעילותנו
השחתנו והשלכנו הצידה,
אורח קיום עדין, רגיש,
אשר בוכה בתוכנו`,
    author: 'אווה קילפי (תרגום רמי סערי)',
    rtl: true,
  },
  {
    text: `למדי עכשיו, בין העצים והסלעים,
איך כל מה שהושלך נשזר למחסה,
למדי את הדרך שבה כל מה שהוסתר והושתק
אט אט קורא בקול.
מצאי את הסימטריה הפנימית
אל מול התופעות החיצוניות, למדי את עצמך
להיות עצמך, התחילי לקבל בחזרה
את כל החלקים ששילחת לדרכם, היי בשורה חדשה,
הפכי עצמך לדלת שדרכה
כולם יתקבלו בברכה, אפילו הזרים שבתוכך.`,
    author: 'בתים מתוך ׳מיטתו של קולמן׳ מאת דיוויד וייט',
    rtl: true,
  },
  {
    text: `זהו דבר מפחיד לאהוב,
את מה שהמוות יכול לקחת.
לאהוב, לקוות, לחלום,
וכן! לאבד.

מדובר בדבר המיועד לטיפשים,
לאהוב,
אבל דבר קדוש הוא,
לאהוב את מה שהמוות יכול לקחת.

משום שחייך נחיו בתוכי,
הצחוק שלך רומם אותי,
המילה שלך הייתה מתנה עבורי.

לזכור את זה מעורר שמחה כואבת.
זהו דבר אנושי לאהוב,
זהו דבר קדוש,
לאהוב
את שהמוות יכול לקחת`,
    author: 'מיוחס לרבי חיים שטרן בספרו ׳בקצה תהום הצער׳ של פרנסיס וולר, בתרגום רוני גרוס.',
    rtl: true,
  },
];

function ViewWritings({ setView }) {
  const [current, setCurrent] = useState(0);
  const total = writings.length;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div style={{ background: 'linear-gradient(160deg, #F6F4F0 0%, #F3F0E9 100%)', padding: '60px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 80, left: 0, width: '100px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: 400, color: C.green, textAlign: 'right', margin: '0 0 32px', fontFamily: "'Assistant', sans-serif" }}>
            השראה עונתית שנאספה או נכתבה
          </h2>

          {/* Navigation */}
          {total > 1 && (
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '16px', marginBottom: '24px' }}>
              <button onClick={() => setCurrent(c => Math.max(0, c - 1))} disabled={current === 0}
                style={{ background: 'none', border: `1.5px solid ${C.sage}`, borderRadius: '50%', width: '36px', height: '36px', cursor: current === 0 ? 'not-allowed' : 'pointer', color: C.sage, fontSize: '18px', opacity: current === 0 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                ‹
              </button>
              <span style={{ fontSize: '13px', color: C.textLight, fontFamily: "'Assistant', sans-serif" }}>{current + 1} / {total}</span>
              <button onClick={() => setCurrent(c => Math.min(total - 1, c + 1))} disabled={current === total - 1}
                style={{ background: 'none', border: `1.5px solid ${C.sage}`, borderRadius: '50%', width: '36px', height: '36px', cursor: current === total - 1 ? 'not-allowed' : 'pointer', color: C.sage, fontSize: '18px', opacity: current === total - 1 ? 0.3 : 1, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                ›
              </button>
            </div>
          )}

          {/* Card */}
          <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }} style={{ background: C.white, borderRadius: '16px', padding: '48px 44px', boxShadow: '0 2px 20px rgba(44,58,46,0.08)', borderRight: `4px solid #B26E63`, minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '36px', color: C.sage, opacity: 0.4, marginBottom: '12px', fontFamily: 'Georgia, serif', lineHeight: 1, textAlign: writings[current].rtl ? 'right' : 'left' }}>"</div>
              <p style={{ fontSize: '16px', color: '#1A2228', lineHeight: 1.95, margin: '0 0 20px', fontStyle: 'italic', fontFamily: "'Assistant', sans-serif", direction: writings[current].rtl ? 'rtl' : 'ltr', textAlign: writings[current].rtl ? 'right' : 'left', whiteSpace: 'pre-line' }}>
                {writings[current].text}
              </p>
            </div>
            <p style={{ fontSize: '13px', color: C.sage, fontWeight: 600, margin: 0, fontFamily: "'Assistant', sans-serif", direction: writings[current].rtl ? 'rtl' : 'ltr', textAlign: writings[current].rtl ? 'right' : 'left' }}>
              — {writings[current].author}
            </p>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}

function ViewFAQ({ setView }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <ViewFAQContent setView={setView} />
    </motion.div>
  );
}

function ViewFAQContent({ setView }) {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);
  const faqs = [
    {
      q: 'מה זה בכלל פסיכותרפיה גופנית?',
      a: 'פסיכותרפיה גופנית (ובפרט גישת הביוסינתזה) יוצאת מנקודת הנחה שהגוף והנפש הם יחידה אחת. לדוגמה, כשמישהו עושה משהו שגורם לנו לכעוס, אנו נוטים לחשוב על כך שהוא מעצבן, לא מצליחים להתמקד בדבר אחר ובמקביל מרגישים חום ומתח גבוה מתפשטים בגוף.\n\nאירועי עבר והווה, משברים ומתחים אינם נשמרים רק כזיכרון מנטלי, אלא מותירים רישום במערכת העצבים, ברקמות השרירים ובדפוסי הנשימה. במפגשים, לצד השיחה והקשר הנבנה, אנו מפנים קשב למה שמתרחש מתחת למילים. דרך נשימה, דמיון, תנועה ולעיתים מגע, אנו מגלים את הנתיב שנגיש וזמין עבורך, ומגיעים למקומות שהדיבור לבדו אינו יכול להגיע אליהם.',
    },
    {
      q: 'האם הטיפול מחייב מגע?',
      a: 'חד-משמעית לא. גישת הביוסינתזה מאפשרת שימוש במגע מושכל ומכבד ככלי לעבודה, אך זה אינו תנאי הכרחי להצלחת התהליך, כפי שניתן ללמוד גם מתהליכים טיפוליים שלמים שנעשו אונליין. כל עבודה הכוללת מגע נעשית אך ורק בהסכמה מלאה ומפורשת שלך, ותלויה לחלוטין בהעדפה האישית ובגבולות של שני הצדדים במפגש. אם קיימת רתיעה או העדפה לעבוד ללא מגע כלל, התהליך יתבצע באופן מלא דרך שיחה, קשב, נשימה ותנועה במרחב החדר.',
    },
    {
      q: 'איך נראה מפגש טיפולי בקליניקה באופן מעשי?',
      a: 'למפגש אין פרוטוקול נוקשה. בשיח ובהקשבה אפשר לגשת לנושאים איתם הגעת באותו היום, או להמשיך ולהעמיק בנושא שנגענו בו לאורך זמן. מתוך השיח ודרך גישת הביוסינתזה – נברר, נחקור, נשאל, נבדוק, נתנסה ונגלה מה מבקש את תשומת הלב שלך.\n\nבהתאם לכך, נפגוש יחד שאלות פתוחות, פחדים עתיקים, גילויים מרגשים, דפוסים שמשתחזרים, כאבים שעוד כואבים וכאלו שהחלימו, לצד תנועות מעניינות וחדשות. אנו מתקדמים בקצב שמתאים למערכת שלך, מבלי לייצר הצפה או דחיפה מעבר לגבולות היכולת שלך. אנחנו לא פורצים הגנות.',
    },
    {
      q: 'כמה זמן נמשך הטיפול ומה ההבדל בין תהליך קצר לתהליך ארוך?',
      a: 'משך התהליך נגזר ישירות מהבקשה ומהמטרות איתן הגעת, ואנו מתאמים ציפיות סביבו כבר במפגשים הראשונים:\n\nתהליך ממוקד וקצר מועד (עד חצי שנה): מתאים בדרך כלל סביב התמודדות עם משבר נקודתי, שינוי פתאומי או צומת חיים ספציפי. המיקוד הוא ברכישת כלים סומטיים מעשיים לוויסות, ביסוס עוגנים והחזרת תחושת קרקוע וביטחון.\n\nתהליך מעמיק וארוך טווח (שנה ומעלה): מתאים כאשר הבקשה נוגעת בדפוסים כרוניים מתמשכים, אירועים דרמטיים שהותירו חותם משמעותי, טראומה מורכבת, קשיים עמוקים במערכות יחסים, או רצון עמוק בחקירה עצמית.\n\nהתהליך מסתיים לבקשתך וכשיש תחושת מוכנות, ותמיד מתוך חשיבה ושיח משותפים.',
    },
    {
      q: 'מה קורה במפגש הראשון?',
      a: 'המפגש הראשון מוקדש להיכרות ראשונית ולהתחלת בניית מרחב שמור. זוהי הזמנה עבורך להביא את הסיפור שלך, להעלות שאלות וחששות ולשתף באתגרים שהובילו אותך לפנות לטיפול. עבורי, זו הזדמנות להיחשף ולהקשיב לעולם שלך, להציע הצעות ולבחון יחד איתך האם הגישה הטיפולית שלי יכולה להתאים לך.\n\nאין שום מחויבות להמשך תהליך בעצם ההגעה למפגש זה, אך אני מציע שנתייחס לארבעת המפגשים הראשונים כמהלך המיועד ליצירת קשר, ביסוס אמון ובדיקה הדדית.',
    },
    {
      q: 'מהי גישת ביוסינתזה (Biosynthesis) והאם היא מוכרת מבחינה מקצועית?',
      a: 'ביוסינתזה היא גישה ותיקה ומוכרת של פסיכותרפיה גופנית-אנליטית, שנוסדה לפני למעלה מ-45 שנים על ידי דייוויד בואדלה. משמעות השם היא "אינטגרציה של חיים" והיא מבוססת על יצירת חיבור מחודש ואיזון בין שלושת ממדי הקיום היסודיים שלנו: הקיום הגופני, החוויה הפסיכולוגית והמהות הרוחנית.\n\nהגישה נשענת על מחקרים מבוססי מדע בתחומי הנוירוביולוגיה והאמבריולוגיה (התפתחות העובר). היא מוכרת באופן רשמי על ידי האיגוד האירופי לפסיכותרפיה (EAP) והאיגוד האירופי לפסיכותרפיה גופנית (EABP). למדתי בישראל בביה״ס לפסיכותרפיה בגישת הביוסינתזה, והתעודה שלי הוסמכה מטעם המכון הבינלאומי לביוסינתזה בשוויץ (IIBS). העבודה הקלינית שלי מתבצעת תחת הדרכה מקצועית קבועה.',
    },
    {
      q: 'ראיתי שאתה עוסק גם בטקסי אבל קהילתיים. איך זה קשור לקליניקה הפרטנית?',
      a: 'אבל וצער אינם פתולוגיה, ״מחלה״ או בעיה שיש לתקן או להעלים. הם חלק בלתי נפרד מהיותנו בעולם כבני אנוש מתבגרים, צומחים ונחנכים.\n\nהזיקה שלי לעולמות האלו מרחיבה את המבט בתוך החדר: התהליך הטיפולי מחובר תמיד להקשרים הרחבים של החיים - מההיסטוריה המשפחתית, מהתרבות וממערכות היחסים שעיצבו אותך. החיבור בין הטכנולוגיה הטקסית לבין העבודה הסומטית מאפשר לנו להעניק לצער וכאב ״צורה בעולם״, כפי שעשו בני אדם מאז ומתמיד.',
    },
  ];
  return (
    <div>
      <div style={{ background: C.bg, padding: '60px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 80, left: 0, width: '100px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: 400, color: C.green, textAlign: 'right', margin: '0 0 32px', fontFamily: "'Assistant', sans-serif" }}>
            שאלות נפוצות
          </h2>
          {faqs.map((faq, i) => (
           <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }} style={{ background: C.white, borderRadius: '12px', borderBottom: '1px solid rgba(22, 34, 47, 0.08)', marginBottom: '12px', overflow: 'hidden', ...tx }}>
             <button onClick={() => toggle(i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'right', gap: '16px' }}>
               <span style={{ fontSize: '16px', fontWeight: 600, color: '#1E2631', lineHeight: 1.5, flex: 1, fontFamily: "'Assistant', sans-serif" }}>{faq.q}</span>
               <span style={{ color: C.sage, fontSize: '22px', fontWeight: 300, flexShrink: 0, display: 'inline-block', transition: 'transform 0.3s', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
             </button>
             <div style={{ maxHeight: open === i ? '1000px' : '0px', overflow: 'hidden', transition: 'max-height 0.7s cubic-bezier(0.25, 1, 0.5, 1)' }}>
               <p style={{ padding: '0 24px 24px', color: '#2D3748', fontSize: '15px', lineHeight: 1.7, margin: 0, fontFamily: "'Assistant', sans-serif", whiteSpace: 'pre-line' }}>{faq.a}</p>
             </div>
           </motion.div>
          ))}
        </div>
        <QuoteBlock
          text='ואם אוכל לנסות ולסכם מהי עמדה טיפולית, הרי שחלק ניכר ממנה הוא ללמד אותך להיות מאוד מכבד כלפי המורכבות של המיינד שלך; להבין שהוא לא בדיוק דבר שברור לך מאליו'
          author='— תרגום לא מדויק של מילותיו של אלן דה בוטון, סביב השאלה למה בכלל להגיע לטיפול, מתוך ראיון בהשתתפותו'
        />
      </div>
    </div>
  );
}

function ViewForWho({ setView }) {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <ViewForWhoContent setView={setView} />
    </motion.div>
  );
}

function ViewForWhoContent({ setView }) {
  const challenges = [
    {
      num: '1',
      title: 'לחץ, חרדה ודריכות יתר',
      body: 'כשהמערכת העצבית פועלת בעומס יתר ממושך או נושאת רישום של אירוע סוער מן העבר, החרדה והדריכות מפסיקות להיות רק "מחשבה" והופכות למצב קיומי קבוע המנהל את הגוף.',
      daily: 'חוסר שקט פנימי כרוני, בהלה עוצמתית מרעשים או גירויים קטנים, כתפיים מורמות ונוקשות, נשימה קצרה או שטחית, דפיקות לב מואצות, תחושת איום, הצפה פתאומית או מועקה בבית החזה המקשים על היכולת להרפות, להירגע ולישון.',
    },
    {
      num: '2',
      title: 'דכדוך, נסיגה וחוסר חיוניות',
      body: 'לעיתים, כדי להגן על עצמנו מכאב, פחד או מהצפה שהיו גדולים מכפי שהמערכת יכלה לשאת, הגוף והנפש נוקטים בצמצום ונסיגה, מה שמוביל תחושה של תקיעות והפחתת תחושת חיוניות טבעית.',
      daily: 'תחושת ריקנות, כובד פיזי כהה בגפיים (כאילו נדרש מאמץ עצום רק כדי להזיז את הגוף), נטייה להתנתק מהסביבה או מהגוף ברגעי מתח (דיסוציאציה), קהות רגשית וחושית, חוסר חום פיזי, מבט או יציבה רופסים או עמומים.',
    },
    {
      num: '3',
      title: 'אבל ואובדן',
      body: 'צער עמוק ואובדן של אדם קרוב, מערכת יחסים או שלב משמעותי בחיים, המתרחש בסביבה ובעולם, משנים את המערכת שחיים בה. לעיתים קשה לגעת בתכנים האלו והם מרגישים נפיצים או מסוכנים.',
      daily: 'תחושת ריקנות, כובד פיזי בלב או בגפיים, שאלות קיומיות, חוסר משמעות או ערך, חוויה של זמן קופא בעוד העולם ממשיך לנוע כרגיל, קושי לבכות או להרגיש רגשות.',
    },
    {
      num: '4',
      title: 'קשיים במערכות יחסים, גבולות וקשר',
      body: 'האופן שבו אנחנו מתקשרים עם העולם קשור ישירות לגבולות הגופניים והאנרגטיים שלנו. ליכולת להישאר בקשר עם עצמנו בזמן שבקשר עם אחר, במיוחד אם הגבולות הללו נפרצו או נפגעו בעבר.',
      daily: 'תחושה של "היבלעות", דריכות גבוהה או תחושה של ׳אני נעלם׳ בתוך זוגיות או מול סמכות, קושי פיזי להגיד "לא" (הרגשה של מחנק או כיווץ בגרון), או לחלופין בניית חומות נוקשות ומשוריינות שמובילות לבדידות.',
    },
    {
      num: '5',
      title: 'תופעות רגשיות וגופניות',
      body: 'פעמים רבות הגוף "מדבר" ומנציח תאונות, פציעות או חוויות רגשיות קשות מן העבר דרך סימפטומים, כאבים כרוניים או תחושות מצוקה משתנות, מבלי שיש להם פתרון או הסבר רפואי ברור.',
      daily: 'כאבים שהוגדרו פסיכוסומטיים, תופעות גופניות שלא חולפות, שינוי משמעותי בתחושת העצמי, חוסר תחושה, חוויות של פלאשבקים.',
    },
    {
      num: '6',
      title: 'משברי חיים ומשברים רפואיים',
      body: 'מפגש פתאומי עם חולי, פציעה, או שינוי דרמטי במצב הבריאותי, מייצר לעיתים טראומה רפואית המטלטלת את תחושת השליטה והביטחון הבסיסית בעולם ומציף שאלות קיומיות גדולות.',
      daily: 'חוויה עמוקה של בגידת הגוף, פחד קיומי מהעתיד, חוסר אונים בתפקוד הגוף, קושי ומתח בהסתגלות למגבלות חדשות שנכפו על ידי תאונה, פציעה או מחלה.',
    },
    {
      num: '7',
      title: 'צמיחה, העמקה וחיבור לחיוּת',
      body: 'פנייה לטיפול לא חייבת לנבוע רק מתוך שבר חריף. לעיתים הדחף להתחיל תהליך מגיע מתוך רצון פנימי עמוק להאט את הקצב האוטומטי של החיים, להכיר את עצמך ולחיות חיים מלאים יותר.',
      daily: 'תחושה עמומה של תקיעות ביומיום, "אוטומט" קבוע ותחושת חוסר חיוניות, לצד דחף פנימי שקט המבקש להעמיק, לחקור, ללכת אחר דחף וסקרנות טבעיים. רצון לחיבור לסמכות פנימית ויציבות בעולם.',
    },
  ];

  const pStyle = { fontSize: '15px', color: '#1E2631', lineHeight: 1.9, margin: 0, fontFamily: "'Assistant', sans-serif", textAlign: 'right' };
  const labelStyle = { fontSize: '14px', fontWeight: 700, color: C.sage, margin: '12px 0 4px', fontFamily: "'Assistant', sans-serif", textAlign: 'right' };

  return (
    <div>
      <div style={{ background: C.bg, padding: '60px 40px 80px', direction: 'rtl' }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>

          {/* Header */}
          <h2 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: 400, color: C.green, textAlign: 'right', margin: '0 0 20px', fontFamily: "'Assistant', sans-serif" }}>
            למי מתאימה פסיכותרפיה גופנית?
          </h2>
          <p style={{ ...pStyle, marginBottom: '16px', textAlign: 'justify' }}>
            פסיכותרפיה גופנית מציעה חוויה בה מעבר לדיבור נתייחס לכל מה שמתרחש בגוף שמשמש כשותף מלא בתהליך של עיבוד, איזון וויסות. קשר שנבנה בו אמון, קשב למתרחש בגוף ובמרחב ולרצונות העמוקים והמהותיים שנובעים בו, תנועה בכיוונים הפתוחים מאפשרים להתקדם במקום שהמילים לבדן לפעמים אינן יכולות להגיע אליהם.
          </p>
          <p style={{ ...pStyle, marginBottom: '40px', textAlign: 'justify' }}>
            הטיפול מתאים לכל מי שמרגיש שתופעות רגשיות, מנטליות או פיזיות שונות מנהלות אותו בעקבות חוויות קשות ואירועי חיים. בין אם מדובר באירוע חד-פעמי חריף או בהתמודדות מתמשכת; בין אם זה קרה בשלב מוקדם או מאוחר בחיים; ובין אם הסיבה לתחושות האלו ידועה וברורה לך לחלוטין או שנותרה עמומה, מבלבלת ולא מוסברת.
          </p>

          {/* Challenges */}
          <h3 style={{ fontSize: '18px', fontWeight: 700, color: C.green, margin: '0 0 8px', textAlign: 'center', fontFamily: "'Assistant', sans-serif" }}>האתגרים שאנו פוגשים בקליניקה</h3>
          <p style={{ ...pStyle, fontWeight: 700, color: '#1E2631', marginBottom: '24px', textAlign: 'center' }}>
            אם הגוף או הנפש אותתו לך שהגיע הזמן לעצור ולברר או להעמיק, אלו האתגרים והנושאים המרכזיים להם ניתן לתת מענה:
          </p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {challenges.map((c, idx) => (
              <motion.div key={c.num} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }} style={{ background: C.white, borderRadius: '14px', padding: '24px 28px', border: '1px solid rgba(22,34,47,0.08)' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ background: C.sage, color: C.white, borderRadius: '50%', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, flexShrink: 0, marginTop: '2px', fontFamily: "'Assistant', sans-serif" }}>{c.num}</span>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: C.green, margin: '0 0 8px', fontFamily: "'Assistant', sans-serif", textAlign: 'right' }}>{c.title}</h4>
                    <p style={{ ...pStyle, marginBottom: '10px', textAlign: 'justify' }}>{c.body}</p>
                    <p style={{ ...labelStyle, textAlign: 'center' }}>איך זה יכול להחוות ביום יום?*</p>
                    <p style={{ ...pStyle, textAlign: 'justify' }}>{c.daily}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Disclaimer - right after challenge 7 */}
          <p style={{ fontSize: '13px', color: '#5A6573', fontStyle: 'italic', margin: '6px 0 20px', textAlign: 'center', fontFamily: "'Assistant', sans-serif" }}>
            * משתנה מאדם לאדם.
          </p>

          {/* Not found note */}
          <div style={{ background: C.white, borderRadius: '14px', padding: '20px 28px', border: '1px solid rgba(22,34,47,0.08)', marginTop: '0', textAlign: 'center' }}>
            <p style={{ fontSize: '15px', fontWeight: 700, color: '#1E2631', margin: 0, fontFamily: "'Assistant', sans-serif" }}>
              אם לא מצאת את הנושא שלך בכתוב מעלה, ניתן לכתוב בפנייה ונברר יחד.
            </p>
          </div>

          {/* Process - moved above CTA */}
          <div style={{ background: C.white, borderRadius: '14px', padding: '28px 28px', border: '1px solid rgba(22,34,47,0.08)', marginTop: '32px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: C.green, margin: '0 0 14px', fontFamily: "'Assistant', sans-serif", textAlign: 'center' }}>מבנה התהליך וציפיות</h3>
            <p style={{ ...pStyle, marginBottom: '12px' }}>
              אם זו הפעם הראשונה שבה הגעת למרחב של טיפול, חשוב לדעת שכל תהליך הוא ייחודי, מותאם אליך ואל הצרכים שלך באופן אישי. בהתאם לאתגר או לנושא, הטיפול יכול להיות קצר מועד (חצי שנה) או ארוך טווח.
            </p>
            <p style={{ ...pStyle }}>
              הגישה שמנחה אותי מבוססת על בניית קשר טיפולי שיש בו אמון, כבוד וסקרנות. יחד, ולעיתים באומץ, נפעל להשגת המטרות איתן הגעת. המפגש הראשון והבאים אחריו הם הזדמנות להיכרות ראשונית, לשאילת שאלות, ולבדיקה משותפת האם העבודה יחד מרגישה נכונה ומתאימה עבורך.
            </p>
          </div>

          <QuoteBlock
            text='אולי זה לא סיפור שמח. אבל הוא אמיתי והוא שלי'
            author='— מתוך הספר ״ירושה רגשית״ מאת גלית אטלס'
          />

          {/* CTA */}
          <div style={{ background: C.white, borderRadius: '16px', padding: '36px 28px', textAlign: 'center', marginTop: '32px', border: '1px solid rgba(22,34,47,0.08)' }}>
            <p style={{ fontSize: '15px', color: C.textMid, lineHeight: 1.9, margin: '0 0 24px', fontFamily: "'Assistant', sans-serif", textAlign: 'justify' }}>
              לבחור בטיפול משמעו לעשות צעד לקראת קיום אנושי מלא ונוכח — מתוך הבנה שלהיות אדם בוגר בעולם זהו תהליך שלוקח זמן, הסכמה וחניכה.
            </p>
            <button onClick={() => setView(6)} style={{ background: C.sage, color: C.white, border: 'none', borderRadius: '10px', padding: '14px 36px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", ...tx }}>
              יצירת קשר
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}

function ViewContact() {
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <ViewContactContent />
    </motion.div>
  );
}

function ViewContactContent() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    await base44.integrations.Core.SendEmail({
      to: 'dorziv@gmail.com',
      subject: `פנייה חדשה מ-${form.name}`,
      body: `שם: ${form.name}\nאימייל: ${form.email}\n\n${form.message}`,
    });
    setSent(true);
    setSending(false);
  };

  return (
    <div>
      <div style={{ background: C.navy, padding: '60px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: 400, color: C.white, margin: '0 0 32px', textAlign: 'right', fontFamily: "'Assistant', sans-serif" }}>
            דרכים ליצירת קשר
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'start' }}>
            {/* Form - Right Column */}
            <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '36px', border: '1px solid rgba(246,244,240,0.15)' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>✓</div>
                  <p style={{ fontSize: '17px', color: C.white, fontWeight: 600, margin: '0 0 8px', fontFamily: "'Assistant', sans-serif" }}>ההודעה נשלחה, תודה!</p>
                  <p style={{ fontSize: '14px', color: 'rgba(246,244,240,0.7)', margin: 0, fontFamily: "'Assistant', sans-serif" }}>אחזור אליך בהקדם.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {[
                    { key: 'name', label: 'שם', type: 'text', placeholder: 'השם שלך' },
                    { key: 'email', label: 'אימייל', type: 'email', placeholder: 'כתובת המייל שלך' },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label style={{ display: 'block', fontSize: '13px', color: 'rgba(246,244,240,0.75)', marginBottom: '6px', fontWeight: 500, fontFamily: "'Assistant', sans-serif" }}>{label}</label>
                      <input type={type} required placeholder={placeholder} value={form[key]}
                        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1.5px solid rgba(246,244,240,0.25)', fontSize: '15px', fontFamily: "'Assistant', sans-serif", background: 'rgba(255,255,255,0.08)', color: C.white, outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: 'rgba(246,244,240,0.75)', marginBottom: '6px', fontWeight: 500, fontFamily: "'Assistant', sans-serif" }}>הודעה</label>
                    <textarea required rows={4} placeholder="במה אוכל לעזור?" value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: '1.5px solid rgba(246,244,240,0.25)', fontSize: '15px', fontFamily: "'Assistant', sans-serif", background: 'rgba(255,255,255,0.08)', color: C.white, outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                  </div>
                  <button type="submit" disabled={sending}
                    style={{ background: C.clay, color: C.white, border: 'none', borderRadius: '10px', padding: '13px 0', fontSize: '15px', fontWeight: 600, cursor: sending ? 'not-allowed' : 'pointer', fontFamily: "'Assistant', sans-serif", opacity: sending ? 0.7 : 1, width: '100%', boxShadow: '0 4px 14px rgba(178,110,99,0.4)', ...tx }}>
                    {sending ? 'שולח...' : 'שליחה'}
                  </button>
                </form>
              )}
            </div>

            {/* Buttons & Location - Left Column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
              {/* Contact Methods */}
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(246,244,240,0.15)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(246,244,240,0.6)', margin: '0 0 4px', fontFamily: "'Assistant', sans-serif", letterSpacing: '0.05em', textTransform: 'uppercase' }}>דרכים נוספות לקשר</p>
                <a href="https://calendly.com/dorziv/checkin" target="_blank" rel="noopener noreferrer"
                  style={{ background: C.clay, color: C.white, borderRadius: '10px', padding: '15px 20px', fontSize: '15px', fontWeight: 600, textDecoration: 'none', fontFamily: "'Assistant', sans-serif", textAlign: 'center', display: 'block', boxShadow: '0 4px 14px rgba(178,110,99,0.35)', ...tx }}>
                  📅 לבחירת מועד ביומן הדיגיטלי
                </a>
                <a href="https://wa.me/972508451920" target="_blank" rel="noopener noreferrer"
                  style={{ background: 'transparent', color: C.white, border: `1.5px solid rgba(246,244,240,0.35)`, borderRadius: '10px', padding: '15px 20px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', fontFamily: "'Assistant', sans-serif", textAlign: 'center', display: 'block', ...tx }}>
                  💬 לשליחת הודעה בווטסאפ
                </a>
              </div>

              {/* Location Details */}
              <div style={{ background: 'rgba(255,255,255,0.06)', borderRadius: '16px', padding: '24px', border: '1px solid rgba(246,244,240,0.15)', display: 'flex', flexDirection: 'column', gap: '8px' }}>
                <p style={{ fontSize: '13px', fontWeight: 600, color: 'rgba(246,244,240,0.6)', margin: '0 0 0px', fontFamily: "'Assistant', sans-serif", letterSpacing: '0.05em', textTransform: 'uppercase' }}>פרטי מיקום</p>
                <p style={{ fontSize: '15px', color: C.white, lineHeight: 1.6, margin: '0 0 8px', fontFamily: "'Assistant', sans-serif", textAlign: 'right' }}>
                  הקליניקה ממוקמת בבית אורן. בהגעה למפגש הראשון אנחה אותך היכן לחנות ואיפה ממוקמת בדיוק.
                </p>
                <a href="https://waze.com/ul/hsvbfhwdcu" target="_blank" rel="noopener noreferrer"
                  style={{ background: '#0066CC', color: C.white, border: 'none', borderRadius: '10px', padding: '12px 16px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', fontFamily: "'Assistant', sans-serif", textAlign: 'center', display: 'block', cursor: 'pointer', ...tx }}>
                  🧭 Waze
                </a>
                <a href="https://maps.app.goo.gl/cVwskVfHNVyF8qPe6" target="_blank" rel="noopener noreferrer"
                  style={{ background: '#0B81F5', color: C.white, border: 'none', borderRadius: '10px', padding: '12px 16px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', fontFamily: "'Assistant', sans-serif", textAlign: 'center', display: 'block', cursor: 'pointer', ...tx }}>
                  📍 Google Maps
                </a>
              </div>
            </div>
          </div>


        </div>
      </div>
    </div>
  );
}

function ViewAccessibility() {
  const pStyle = { fontSize: '15px', color: '#232B32', lineHeight: 1.7, margin: 0, fontFamily: "'Assistant', sans-serif", textAlign: 'right' };
  const h3Style = { fontSize: '17px', fontWeight: 700, color: '#1E2631', margin: '0 0 16px', fontFamily: "'Assistant', sans-serif", textAlign: 'right' };
  const sectionStyle = { marginBottom: '2rem' };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div style={{ background: C.bg, padding: '60px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          {/* Main Title */}
          <h1 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: 700, color: '#1E2631', textAlign: 'right', margin: '0 0 24px', fontFamily: "'Assistant', sans-serif" }}>
            נגישות במרחב הטיפולי
          </h1>

          {/* Intro */}
          <p style={{ ...pStyle, marginBottom: '2rem', fontSize: '16px' }}>
            חלק בלתי נפרד מיצירת מרחב טיפולי בטוח ומזמין לכל אחד, הוא השאיפה לאפשר גישה מלאה ומותאמת לצרכים השונים של המגיעים לקליניקה.
          </p>

          {/* Section 1: Physical Access */}
          <div style={sectionStyle}>
            <h3 style={h3Style}>גישה פיזית ומרחבית</h3>
            <p style={{ ...pStyle, marginBottom: '12px' }}>
              <strong>מיקום וגישה:</strong> הקליניקה בבית אורן ממוקמת בקומת קרקע, עם גישה ישירה וללא מדרגות. המרחב נגיש ומותאם למשתמשים בכיסאות גלגלים.
            </p>
            <p style={{ ...pStyle, marginBottom: '12px' }}>
              <strong>חניה:</strong> בקרבת כניסת המבנה (60-70 מ) קיימת חניה ייעודית לאנשים עם מוגבלות.
            </p>
            <p style={{ ...pStyle }}>
              אם יש לך צורך בהסדרת הנגשה פיזית ספציפית או בליווי בעת ההגעה, אבקש ליצור איתי קשר מראש כדי שנוכל להיערך לכך בצורה המיטבית.
            </p>
          </div>

          {/* Section 2: Special Needs */}
          <div style={sectionStyle}>
            <h3 style={h3Style}>התאמות וצרכים מיוחדים</h3>
            <p style={{ ...pStyle }}>
              אם קיימות מוגבלויות ראייה, שמיעה, רגישויות סנסוריות או צרכים מיוחדים אחרים שלא צוינו כאן, אני מזמין אותך לציין זאת כבר בפנייה הראשונית או במהלך שיחת הטלפון שלנו, על מנת שנוכל להתאים את אופי המפגש והמרחב עבורך.
            </p>
          </div>

          {/* Section 3: Online */}
          <div style={sectionStyle}>
            <h3 style={h3Style}>אפשרות למפגשים מרחוק (טיפול אונליין)</h3>
            <p style={{ ...pStyle, marginBottom: '12px' }}>
              עבור אנשים המתמודדים עם מגבלות ניידות, קשיי נסיעה, או עבור מי שמתגוררים במרחק (כולל תושבי חוץ), נמצאים בתקופות מעבר וטיולים, או פשוט מעדיפים את להיפגש בסביבתם הביתית - ניתן לקיים את התהליך הטיפולי באופן מלא באונליין.
            </p>
            <p style={{ ...pStyle }}>
              <strong>תנאים נדרשים:</strong> כדי לאפשר את העבודה, יש צורך במחשב עם מצלמה וחיבור אינטרנט תקין ויציב, לצד סביבה שקטה, נעימה ובטוחה שבה ניתן לדבר ולנוע בחופשיות ללא הפרעה.
            </p>
          </div>

          {/* Section 4: CTA */}
          <div style={{ background: '#B26E63', borderRadius: '14px', padding: '32px 28px', marginTop: '2rem' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: '#F6F4F0', margin: '0 0 14px', fontFamily: "'Assistant', sans-serif", textAlign: 'center' }}>יצירת קשר והתייעצות</h3>
            <p style={{ fontSize: '15px', color: '#F6F4F0', lineHeight: 1.7, margin: 0, fontFamily: "'Assistant', sans-serif", textAlign: 'center' }}>
              אם יש לך צרכים מיוחדים או שאלות בנושאי נגישות שלא קיבלו מענה בעמוד זה, אנא אל תהסס לפנות אליי בשיחה או בהודעה עם פירוט הנקודות החשובות לך. אני שוקד על הכנת מרחב טיפולי שמור ונגיש לכל אחד ויחד נבין כיצד לייצר מענה מתאים עבורך.
            </p>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default function Home() {
  const [view, setView] = useState(() => {
    const saved = sessionStorage.getItem('targetView');
    if (saved !== null) {
      sessionStorage.removeItem('targetView');
      return parseInt(saved);
    }
    return 0;
  });

  const viewComponents = [
    <ViewHome setView={setView} key="0" />,
    <ViewApproach setView={setView} key="1" />,
    <ViewForWho setView={setView} key="2" />,
    <ViewFAQ setView={setView} key="3" />,
    <ViewWritings setView={setView} key="4" />,
    <ViewAbout setView={setView} key="5" />,
    <ViewContact key="6" />,
    <ViewAccessibility key="7" />,
  ];

  return (
    <div style={{ fontFamily: "'Assistant', sans-serif", background: C.bg, minHeight: '100vh' }}>
      <Navbar view={view} setView={setView} />
      <div style={{ paddingTop: '64px' }}>
        {viewComponents[view]}
      </div>
    </div>
  );
}

function Navbar({ view, setView }) {
  const location = useLocation();
  const navigate = useNavigate();
  const onBlog = location.pathname === '/blog';
  const [menuOpen, setMenuOpen] = useState(false);

  const navItems = ['בית', 'הגישה', 'למי מתאים הטיפול?', 'שאלות נפוצות', 'מן השדה', 'אודותיי', 'קשר', 'נגישות'];

  const handleViewClick = (i) => {
    setMenuOpen(false);
    if (onBlog) {
      sessionStorage.setItem('targetView', i);
      navigate('/');
    } else {
      setView(i);
    }
  };

  return (
    <nav style={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 50, background: 'rgba(244,241,236,0.97)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.border}`, direction: 'rtl', fontFamily: "'Assistant', sans-serif" }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', padding: '0 20px' }}>
        <button onClick={() => handleViewClick(0)} style={{ background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0, fontWeight: 700, fontSize: '20px', color: C.green, fontFamily: 'Assistant, sans-serif' }}>
          דור זיו
        </button>

        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1, margin: '0 16px', flexWrap: 'nowrap', overflow: 'hidden' }} className="hidden-mobile">
          {navItems.map((v, i) => {
            const isActive = !onBlog && view === i;
            const isBlogActive = onBlog && i === 4;
            const active = isActive || isBlogActive;
            return (
              <button key={i} onClick={() => handleViewClick(i)}
                style={{ 
                  fontSize: '14px', 
                  fontWeight: active ? 600 : 400, 
                  color: active ? C.white : C.textMid, 
                  background: i === 6 && active ? C.sage : (i === 6 ? 'transparent' : (active ? C.sage : 'transparent')), 
                  border: i === 6 ? `2px solid ${C.sage}` : 'none', 
                  borderRadius: i === 6 ? '50px' : '8px', 
                  padding: i === 6 ? '6px 16px' : '6px 10px', 
                  cursor: 'pointer', 
                  transition: 'all 0.3s', 
                  fontFamily: "'Assistant', sans-serif", 
                  whiteSpace: 'nowrap' 
                }}>
                {v}
              </button>
            );
          })}
        </div>

        <button onClick={() => handleViewClick(6)} className="show-mobile"
          style={{ background: C.clay, color: C.white, border: 'none', borderRadius: '8px', padding: '12px 20px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", display: 'none', marginLeft: '12px', minHeight: '44px' }}>
          יצירת קשר
        </button>

        <button onClick={() => setMenuOpen(!menuOpen)} className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '12px', display: 'none', flexDirection: 'column', gap: '5px', minHeight: '44px', minWidth: '44px', justifyContent: 'center' }}>
          <span style={{ display: 'block', width: '22px', height: '2px', background: C.green, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: C.green, transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: C.green, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      <div style={{ maxHeight: menuOpen ? '600px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease', background: 'rgba(244,241,236,0.99)', borderTop: menuOpen ? `1px solid ${C.border}` : 'none' }} className="show-mobile-block">
        <div style={{ padding: '16px 20px 24px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          {navItems.map((v, i) => {
            const isActive = !onBlog && view === i;
            const isBlogActive = onBlog && i === 4;
            const active = isActive || isBlogActive;
            return (
              <button key={i} onClick={() => handleViewClick(i)}
                 style={{ 
                  fontSize: '16px', 
                  fontWeight: active ? 600 : 500, 
                  color: active ? C.white : C.textMid, 
                  background: i === 6 && active ? C.sage : (i === 6 ? 'transparent' : (active ? C.sage : 'transparent')), 
                  border: i === 6 ? `2px solid ${C.sage}` : 'none', 
                  borderRadius: i === 6 ? '50px' : '8px', 
                  padding: i === 6 ? '12px 24px' : '14px 18px', 
                  cursor: 'pointer', 
                  textAlign: 'center', 
                  fontFamily: "'Assistant', sans-serif", 
                  transition: 'all 0.2s',
                  width: '100%',
                  minHeight: '48px',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
                }}>
                {v}
              </button>
            );
          })}
        </div>
      </div>

      <style>{`
        @media (max-width: 700px) {
          .hidden-mobile { display: none !important; }
          .show-mobile { display: flex !important; }
          .show-mobile-block { display: block !important; }
        }
        @media (min-width: 701px) {
          .show-mobile { display: none !important; }
          .show-mobile-block { display: none !important; }
          .hidden-mobile { display: flex !important; }
        }
      `}</style>
    </nav>
  );
}
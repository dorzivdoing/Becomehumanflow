import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "@/components/clinic/Footer";

const C = {
  bone: '#F9EEE2',
  sand: '#F0E0CC',
  white: '#FBF5ED',
  navy: '#5C3020',
  charcoal: '#6B3A2A',
  terra: '#C97A5A',
  terraLight: 'rgba(201,122,90,0.10)',
  border: '#E8C4A8',
  darkBrown: '#3D1F0F',
};

const CAVE_BG = 'https://media.base44.com/images/public/6a098e797170ea9e67f23db4/c03298c3a_generated_image.png';
const CAVE_ART = 'https://media.base44.com/images/public/6a098e797170ea9e67f23db4/d2989f235_generated_image.png';

const caveSectionStyle = {
  backgroundImage: `url(${CAVE_BG})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  position: 'relative',
};

const tx = { transition: 'all 0.7s cubic-bezier(0.25, 1, 0.5, 1)' };

function QuoteBlock({ text, author }) {
  return (
    <div style={{ maxWidth: '640px', margin: '56px auto 0', textAlign: 'center', padding: '40px 32px', background: 'rgba(201,122,90,0.08)', borderRadius: '14px', borderTop: `2px solid ${C.terra}` }}>
      <div style={{ fontSize: '36px', color: C.terra, opacity: 0.4, marginBottom: '12px', fontFamily: 'Georgia, serif' }}>"</div>
      <p style={{ fontSize: '16px', color: C.charcoal, lineHeight: 1.9, fontStyle: 'italic', letterSpacing: '0.02em', margin: '0 0 14px' }}>
        {text}
      </p>
      {author && <p style={{ fontSize: '13px', color: C.terra, fontWeight: 600, margin: 0, letterSpacing: '0.04em' }}>{author}</p>}
    </div>
  );
}

function CaveArtOverlay() {
  return (
    <div style={{
      position: 'absolute', inset: 0, pointerEvents: 'none', overflow: 'hidden',
      backgroundImage: `url(${CAVE_ART})`,
      backgroundSize: 'cover',
      backgroundPosition: 'center',
      opacity: 0.22,
    }} />
  );
}

function ContactFooter({ setView }) {
  return (
    <div style={{ background: C.darkBrown, padding: '64px 40px', textAlign: 'center', direction: 'rtl', marginTop: '0', position: 'relative', overflow: 'hidden' }}>
      <CaveArtOverlay />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontSize: '22px', fontWeight: 500, color: '#F9EEE2', margin: '0 0 12px', fontFamily: "'Assistant', sans-serif" }}>
          הזמנה למפגש ראשוני
        </h3>
        <p style={{ fontSize: '16px', color: 'rgba(249,238,226,0.65)', lineHeight: 1.8, margin: '0 0 36px', maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto', fontFamily: "'Assistant', sans-serif" }}>
          מזמין אותך ליצור קשר ולבדוק התאמה – בכבוד ובקצב שמתאים לך ולחייך.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <a href="https://calendly.com/dorziv/checkin" target="_blank" rel="noopener noreferrer" style={{ background: C.terra, color: '#F9EEE2', borderRadius: '10px', padding: '14px 28px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap', fontFamily: "'Assistant', sans-serif", ...tx }}>
            לחצו לבחירת מועד לשיחה ביומן הדיגיטלי
          </a>
          <a href="https://wa.me/972508451920" target="_blank" rel="noopener noreferrer" style={{ background: 'rgba(61,31,15,0.6)', color: '#F9EEE2', border: '1.5px solid rgba(201,122,90,0.5)', borderRadius: '10px', padding: '14px 28px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap', fontFamily: "'Assistant', sans-serif", ...tx }}>
            מעדיפים לשלוח הודעה? דברו איתי בוואטסאפ
          </a>
        </div>
      </div>
    </div>
  );
}

function ViewHome({ setView }) {
  return (
    <div>
      {/* Quote strip at top */}
      <div style={{ ...caveSectionStyle, padding: '100px 40px 48px', direction: 'rtl', position: 'relative' }}>
        <CaveArtOverlay />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '640px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: '17px', color: C.charcoal, lineHeight: 1.9, fontStyle: 'italic', letterSpacing: '0.02em', margin: '0 0 14px', fontFamily: "'Assistant', sans-serif" }}>
            לבחור בטוב, ברגעי החסד והמזל המחברים, במילה הטובה בתוך רגעים קשים, במה שמיטיב איתך – זו אינה פריבילגיה. בזמנים כמו שלנו זה הכרח; כדי שנזכור שגם בתוך מציאות בלתי נסבלת קיים יופי שמושיט יד ממעמקים וקורא לנו לבחור בו.
          </p>
          <p style={{ fontSize: '13px', color: C.terra, fontWeight: 600, margin: 0, letterSpacing: '0.04em', fontFamily: "'Assistant', sans-serif" }}>— דור</p>
        </div>
      </div>

      {/* Hero section - light background */}
      <div style={{ background: C.bone, padding: '64px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <CaveArtOverlay />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
          <div style={{ width: '220px', height: '220px', borderRadius: '50%', background: '#E8C4A8', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `3px solid ${C.terra}`, backgroundImage: `url(${CAVE_ART})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
            <span style={{ color: C.charcoal, fontSize: '13px', fontFamily: "'Assistant', sans-serif", background: 'rgba(249,238,226,0.75)', padding: '6px 12px', borderRadius: '8px' }}>תמונת פרופיל</span>
          </div>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <div style={{ fontSize: '12px', color: C.terra, fontWeight: 600, letterSpacing: '0.1em', marginBottom: '12px', fontFamily: "'Assistant', sans-serif" }}>
              ביוסינתזה - יוגה טיפולית
            </div>
            <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 700, color: C.navy, lineHeight: 1.2, margin: '0 0 10px', fontFamily: "'Assistant', sans-serif" }}>
              להיות אדם
            </h1>
            <h2 style={{ fontSize: 'clamp(16px,2vw,20px)', fontWeight: 400, color: C.navy, margin: '0 0 20px', lineHeight: 1.4, opacity: 0.6, fontFamily: "'Assistant', sans-serif" }}>
              פסיכותרפיה גופנית אינטגרטיבית
            </h2>
            <p style={{ fontSize: '15px', color: C.charcoal, lineHeight: 1.9, margin: '0 0 32px', letterSpacing: '0.01em', fontFamily: "'Assistant', sans-serif" }}>
              קליניקה מבוססת מחקר לפסיכותרפיה גופנית (ביוסינתזה) ויוגה טיפולית. מרחב מקורקע המציע ליווי רגשי וסומטי מוסמך במשברי חיים, אבל, חרדה וטראומה – מתוך עמדה טיפולית המכבדת את המורכבות של התודעה והגוף שלך.
            </p>
            <button onClick={() => setView(5)} style={{ background: C.terra, color: C.white, border: 'none', borderRadius: '10px', padding: '14px 28px', fontSize: '15px', fontWeight: 500, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", ...tx }}>
              לתיאום שיחת הכרות קצרה
            </button>
          </div>
        </div>
      </div>

      <ContactFooter setView={setView} />
    </div>
  );
}

function ViewAbout({ setView }) {
  return (
    <div>
      <div style={{ ...caveSectionStyle, padding: '120px 40px 80px', direction: 'rtl' }}>
        <CaveArtOverlay />
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 600, color: C.navy, textAlign: 'center', margin: '0 0 48px', fontFamily: "'Assistant', sans-serif" }}>
            על האדם שמאחורי הטיפול
          </h2>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ width: '150px', height: '170px', borderRadius: '12px', background: '#DDD8D0', flexShrink: 0, border: `3px solid ${C.terra}`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <span style={{ color: '#9A9490', fontSize: '13px', fontFamily: "'Assistant', sans-serif" }}>תמונה</span>
            </div>
            <div style={{ flex: 1, minWidth: '240px' }}>
              {[
                'נעים להכיר, אני דור. לוקח את החיים, ואת המרחב הטיפולי, ברצינות מתאימה. לפחות משתדל. מתוך מחקר אישי ומקצועי שהחל לפני 11 שנים, אני מלווה ב-8 השנים האחרונות אנשים בתהליכי שינוי, התמודדות וצמיחה מתוך משבר.',
                'אני פסיכותרפיסט מוסמך בגישת ביוסינתזה מטעם המכון הבינלאומי בשווייץ (IIBS), חבר בארגון האירופי לפסיכותרפיה גופנית (EABP), מורה ומטפל באמצעות יוגה טיפולית, וחבר בסגל ההוראה של בית הספר לביוסינתזה בישראל.',
                'הקליניקה נקראת Become Human (להיות אדם) מתוך עמדה עמוקה שבמפגש הטיפולי אין לנו שאיפה להגיע לאיזה מודל מושלם, קשיח או חסין מכאב. המטרה היא לפתוח מרחב בטוח של אמון, קשב עמוק וסקרנות, המאפשר לנו להסכים לפגוש את המורכבות של התודעה והגוף שלנו. בעבודתי אני שואב השראה רבה מהטבע, מהליכה בשדות, מנדידת הציפורים ומהשירה – כוחות שמזכירים לנו את מחזוריות החיים שקיימת בכולנו ומבקשת לחזור לאיזון.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '16px', color: C.charcoal, lineHeight: 1.9, margin: '0 0 20px', letterSpacing: '0.01em', fontFamily: "'Assistant', sans-serif" }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
        <QuoteBlock
          text="I believed I wanted to be a poet, but deep down, I just wanted to be a poem."
          author="— Jaime Gil de Biedma"
        />
        </div>
      </div>
      <ContactFooter setView={setView} />
    </div>
  );
}

function ViewApproach({ setView }) {
  const streams = [
    { sub: 'Somatic Grounding · השכבה המזודרמלית', title: 'זרם התנועה והקרקוע', body: 'שחרור דפוסי מתח כרוניים (Armor) שנאגרו בגוף כתוצאה ממתח מתמשך או אירועי קיצון. ביסוס תחושת הקרקע והיציבות הפיזית כמקור ישיר לוויסות רגשי.' },
    { sub: 'Neuro-Vegetative Regulation · השכבה האנדודרמלית', title: 'זרם הנשימה והרגש', body: 'תמיכה ומציאות של נשימה מלאה למערכת עצבים שנשחקה או נכנסה למצב דריכות מתמיד. ויסות החרדה והצפה רגשית באמצעות יוגה טיפולית עדינה ומותאמת.' },
    { sub: 'Spacious Awareness · השכבה האקטודרמלית', title: 'זרם התודעה והקשב', body: 'פיתוח קשב סקרן ומיינדפולנס כלפי המורכבות של התודעה שלך. מתן צורה בעולם ותרגום התחושות הסומטיות למילים, כדי לאפשר גישה אל הנתונים העשירים של מי שאתה.' },
  ];
  return (
    <div>
      <div style={{ ...caveSectionStyle, padding: '120px 40px 80px', direction: 'rtl' }}>
        <CaveArtOverlay />
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 600, color: C.navy, textAlign: 'center', margin: '0 0 20px', fontFamily: "'Assistant', sans-serif" }}>
            עמדה טיפולית אינטגרטיבית ושדות החיים
          </h2>
          <p style={{ textAlign: 'center', color: C.charcoal, fontSize: '16px', lineHeight: 1.85, maxWidth: '700px', margin: '0 auto 48px', fontFamily: "'Assistant', sans-serif" }}>
            הכלים בהם אנו משתמשים בקליניקה מבוססים על ספרות מקצועית, מחקר סומטי ונוירו-ביולוגיה, לצד מודלים מוכרים של פסיכותרפיה דינמית. אנו עובדים עם שלושת זרמי החיים (Life Streams) המרכיבים את שלמות הבריאות:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {streams.map((s, i) => (
              <div key={i} style={{ background: 'rgba(251,245,237,0.85)', borderRadius: '14px', padding: '32px 28px', boxShadow: '0 4px 30px rgba(92,48,32,0.06)', borderBottom: `3px solid ${C.terra}` }}>
                <div style={{ fontSize: '11px', color: C.terra, fontWeight: 600, letterSpacing: '0.06em', marginBottom: '12px', textTransform: 'uppercase', fontFamily: "'Assistant', sans-serif" }}>{s.sub}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: C.navy, margin: '0 0 14px', fontFamily: "'Assistant', sans-serif" }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: C.charcoal, lineHeight: 1.85, margin: 0, fontFamily: "'Assistant', sans-serif" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
        <QuoteBlock
          text="הטיפול אינו תיקון של מה שמקולקל, אלא חיבור מחדש אל זרמי החיים המולדים שלנו."
          author="— דיויד בואדלה"
        />
        </div>
      </div>
      <ContactFooter setView={setView} />
    </div>
  );
}

function ViewWritings({ setView }) {
  return (
    <div>
      <div style={{ ...caveSectionStyle, padding: '120px 40px 80px', direction: 'rtl' }}>
        <CaveArtOverlay />
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 600, color: C.navy, textAlign: 'center', margin: '0 0 16px', fontFamily: "'Assistant', sans-serif" }}>
            מן המרחב: מחשבות, תודעה ושירה
          </h2>
          <p style={{ textAlign: 'center', color: C.charcoal, fontSize: '16px', lineHeight: 1.85, margin: '0 0 56px', fontFamily: "'Assistant', sans-serif" }}>
            מרחב זה מוקדש למילים שבין החדר לשדה, תובנות על מורכבות התודעה, תהליכי אבל וקשב עמוק לזרמי החיים.
          </p>
          <div style={{ background: 'rgba(251,245,237,0.85)', borderRadius: '14px', padding: '48px 40px', boxShadow: '0 4px 30px rgba(92,48,32,0.06)', borderRight: `4px solid ${C.terra}`, textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '16px', opacity: 0.3 }}>✦</div>
            <p style={{ fontSize: '15px', color: C.charcoal, lineHeight: 1.9, margin: 0, fontStyle: 'italic', fontFamily: "'Assistant', sans-serif" }}>
              כתבים ומחשבות יתווספו בקרוב. מרחב זה עדיין מתהווה — כמו כל תהליך טיפולי אמיתי.
            </p>
          </div>
          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <Link to="/blog" style={{ fontSize: '15px', color: C.terra, fontWeight: 500, textDecoration: 'none', borderBottom: `1px solid ${C.terra}`, paddingBottom: '2px', fontFamily: "'Assistant', sans-serif" }}>
              לבלוג המלא ←
            </Link>
          </div>
        </div>
        <QuoteBlock
          text="ואם אוכל לנסות ולסכם מהי עמדה טיפולית, הרי שחלק ניכר ממנה הוא ללמד אותך להיות מאוד מכבד כלפי המורכבות של התודעה שלך; להבין שהתודעה שלך היא לא בדיוק דבר שברור לך מאליו."
        />
        </div>
      </div>
      <ContactFooter setView={setView} />
    </div>
  );
}

function ViewFAQ({ setView }) {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);
  const faqs = [
    {
      q: 'הבדיקות הרפואיות שלי תקינות לחלוטין, אבל הגוף דרוך, הלב מאיץ ויש לי חוסר שקט קבוע. איך פסיכותרפיה גופנית מסבירה את זה?',
      a: "המדע הנוירולוגי והמחקרי שמאחורי הפסיכותרפיה הגופנית מראה שמתח נפשי, חרדה או חוויות משבר שלא עובדו במלואם, נשמרים במערכת העצבים ובשרירים כ'זיכרון סומטי' (Somatic Memory) ומתקבעים כדפוסי מתח כרוניים. כשיש נתק בין התודעה המנטלית לבין הגוף, מערכת העצבים האוטונומית נשארת במצב דריכות (Fight or Flight) גם כשאין סכנה ממשית. הטיפול מספק לנו את הכלים לפענח את האיתותים האלו, להרגיע את מערכת העצבים ולשחרר את המתח הכרוני מהשורש.",
    },
    {
      q: 'מה קורה בפועל במפגש של פסיכותרפיה גופנית (ביוסינתזה)? האם מדובר בשיחה או בתרגול פיזי?',
      a: 'בבסיסו, זהו טיפול רגשי ודינמי לכל דבר שנעשה דרך שיחה, המוכר על ידי האיגוד האירופי לפסיכותרפיה (EAP). ההבדל מטיפול פסיכולוגי מסורתי הוא שאנחנו לא מסתפקים רק בדיבור, אלא משלבים קשב עמוק לחוויה הגופנית, לקצב הנשימה ולתחושות (Focusing). הכלים מעולם היוגה הטיפולית משתלבים כתרגול עדין ומותאם אישית. מגיעים בבגדים נוחים רגילים ועובדים ישר מגובה העיניים.',
    },
    {
      q: 'אני חושש/ת שהעבודה עם הגוף תציף אותי או תעורר משקעים שאין לי כוח לפגוש. איך נשמר הביטחון שלי בטיפול?',
      a: "החשש הזה טבעי לחלוטין ומעיד על מנגנון הגנה בריא וחכם של המערכת שלך. עקרון הברזל של גישת הביוסינתזה הוא עבודה מוגנת ומדורגת, המתרחשת תמיד בתוך 'חלון הוויסות' (Window of Tolerance) של מערכת העצבים שלך. אנחנו לעולם לא רצים אל תוך הכאב, האבל או הטראומה בצורה סוערת. שלבי הטיפול הראשונים מוקדשים לבניית משאבים, חיזוק עוגנים גופניים, וביסוס קשר טיפולי שיש בו ביטחון, כבוד הדדי וקצב המדויק אך ורק לך.",
    },
  ];
  return (
    <div>
      <div style={{ ...caveSectionStyle, padding: '120px 40px 80px', direction: 'rtl' }}>
        <CaveArtOverlay />
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 600, color: C.navy, textAlign: 'center', margin: '0 0 48px', fontFamily: "'Assistant', sans-serif" }}>
            שאלות נפוצות וביטחון קליני
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: 'rgba(251,245,237,0.88)', borderRadius: '12px', border: open === i ? `1.5px solid ${C.terra}` : `1.5px solid ${C.border}`, marginBottom: '12px', overflow: 'hidden', boxShadow: '0 4px 30px rgba(92,48,32,0.05)', ...tx }}>
              <button onClick={() => toggle(i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'right', gap: '16px' }}>
                <span style={{ fontSize: '16px', fontWeight: 500, color: C.navy, lineHeight: 1.5, flex: 1, fontFamily: "'Assistant', sans-serif" }}>{faq.q}</span>
                <span style={{ color: C.terra, fontSize: '22px', fontWeight: 300, flexShrink: 0, display: 'inline-block', transition: 'transform 0.3s', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? '500px' : '0px', overflow: 'hidden', transition: 'max-height 0.45s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                <p style={{ padding: '0 24px 24px', color: C.charcoal, fontSize: '15px', lineHeight: 1.85, margin: 0, fontFamily: "'Assistant', sans-serif" }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
        <QuoteBlock text="הגוף שלנו רוצה, הראש שלנו לא גר שם... הקלאסיקה של חוסר אינטגרציה." />
        </div>
      </div>
      <ContactFooter setView={setView} />
    </div>
  );
}

function ViewContact() {
  return (
    <div>
      <div style={{ ...caveSectionStyle, padding: '120px 40px 80px', direction: 'rtl' }}>
        <CaveArtOverlay />
        <div style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ maxWidth: '600px', margin: '0 auto', textAlign: 'center' }}>
          <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 600, color: C.navy, margin: '0 0 20px', fontFamily: "'Assistant', sans-serif" }}>
            הזמנה למפגש ראשוני
          </h2>
          <p style={{ fontSize: '17px', color: C.charcoal, lineHeight: 1.85, margin: '0 0 40px', fontFamily: "'Assistant', sans-serif" }}>
            מזמין אותך ליצור קשר ולבדוק התאמה – בכבוד ובקצב שמתאים לך ולחייך.
          </p>
          <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
            <a href="https://calendly.com/dorziv/checkin" target="_blank" rel="noopener noreferrer" style={{ background: C.terra, color: C.white, borderRadius: '10px', padding: '16px 32px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap', fontFamily: "'Assistant', sans-serif", ...tx }}>
              לחצו לבחירת מועד לשיחה ביומן הדיגיטלי
            </a>
            <a href="https://wa.me/972508451920" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: C.navy, border: `1.5px solid ${C.terra}`, borderRadius: '10px', padding: '16px 32px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap', fontFamily: "'Assistant', sans-serif", ...tx }}>
              מעדיפים לשלוח הודעה? דברו איתי בוואטסאפ
            </a>
          </div>
        </div>
        </div>
      </div>
    </div>
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
    <ViewHome setView={setView} />,
    <ViewAbout setView={setView} />,
    <ViewApproach setView={setView} />,
    <ViewWritings setView={setView} />,
    <ViewFAQ setView={setView} />,
    <ViewContact />,
  ];

  return (
    <div style={{ fontFamily: "'Assistant', sans-serif", background: C.bone, minHeight: '100vh', backgroundImage: `url(${CAVE_BG})`, backgroundSize: 'cover', backgroundAttachment: 'fixed' }}>
      <Navbar view={view} setView={setView} />
      <div style={{ ...tx }}>
        {viewComponents[view]}
      </div>
      <Footer />
    </div>
  );
}

function Navbar({ view, setView }) {
  const location = useLocation();
  const navigate = useNavigate();
  const onBlog = location.pathname === '/blog';

  const navItems = ['בית', 'אודות', 'גישה', 'השראה ומחשבות', 'שאלות', 'קשר'];

  const handleViewClick = (i) => {
    if (i === 3) {
      if (onBlog) return;
      setView(3);
      return;
    }
    if (onBlog) {
      sessionStorage.setItem('targetView', i);
      navigate('/');
    } else {
      setView(i);
    }
  };

  return (
    <nav style={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 50, background: 'rgba(249,238,226,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #E8C4A8', padding: '0 40px', direction: 'rtl', fontFamily: "'Assistant', sans-serif" }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <button onClick={() => handleViewClick(0)} style={{ fontWeight: 700, fontSize: '17px', color: C.navy, background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Assistant', sans-serif", flexShrink: 0 }}>
          להיות אדם
        </button>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1, margin: '0 32px' }}>
          {navItems.map((v, i) => {
            const isActive = !onBlog && view === i;
            const isBlogActive = onBlog && i === 3;
            return (
              <button key={i} onClick={() => handleViewClick(i)} style={{ fontSize: '14px', fontWeight: (isActive || isBlogActive) ? 600 : 400, color: (isActive || isBlogActive) ? C.terra : C.charcoal, background: (isActive || isBlogActive) ? 'rgba(201,122,90,0.12)' : 'transparent', border: 'none', borderRadius: '8px', padding: '6px 14px', cursor: 'pointer', transition: 'all 0.3s', fontFamily: "'Assistant', sans-serif" }}>
                {v}
              </button>
            );
          })}
        </div>
        <div style={{ width: '80px', flexShrink: 0 }} />
      </div>
    </nav>
  );
}
import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "@/components/clinic/Footer";

const C = {
  bone: '#F9EDE0',
  white: '#FFF8F2',
  navy: '#4A1E0E',
  charcoal: '#6B3A2A',
  terra: '#C4876B',
  terraLight: 'rgba(196,135,107,0.12)',
  border: '#E8C4A8',
  cave1: '#D4896A',
  cave2: '#B87A5A',
};

const tx = { transition: 'all 0.7s cubic-bezier(0.25, 1, 0.5, 1)' };

function QuoteBlock({ text, author }) {
  return (
    <div style={{ maxWidth: '640px', margin: '0 auto 56px', textAlign: 'center', padding: '36px 32px', background: C.terraLight, borderRadius: '14px', borderRight: `3px solid ${C.terra}` }}>
      <p style={{ fontSize: '16px', color: C.charcoal, lineHeight: 1.85, fontStyle: 'italic', letterSpacing: '0.02em', margin: '0 0 10px' }}>
        {text}
      </p>
      {author && <p style={{ fontSize: '13px', color: C.terra, fontWeight: 600, margin: 0, letterSpacing: '0.04em' }}>{author}</p>}
    </div>
  );
}

function ContactFooter({ setView }) {
  return (
    <div style={{ background: C.navy, padding: '64px 40px', textAlign: 'center', direction: 'rtl', marginTop: '80px' }}>
      <h3 style={{ fontSize: '22px', fontWeight: 500, color: C.white, margin: '0 0 12px', fontFamily: "'Assistant', sans-serif" }}>
        הזמנה למפגש ראשוני
      </h3>
      <p style={{ fontSize: '16px', color: 'rgba(255,255,255,0.55)', lineHeight: 1.8, margin: '0 0 36px', maxWidth: '440px', marginLeft: 'auto', marginRight: 'auto', fontFamily: "'Assistant', sans-serif" }}>
        מזמין אותך ליצור קשר ולבדוק התאמה – בכבוד ובקצב שמתאים לך ולחייך.
      </p>
      <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
        <a href="https://calendly.com/dorziv/checkin" target="_blank" rel="noopener noreferrer" style={{ background: C.terra, color: C.white, borderRadius: '10px', padding: '14px 28px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap', fontFamily: "'Assistant', sans-serif", ...tx }}>
          לחצו לבחירת מועד לשיחה ביומן הדיגיטלי
        </a>
        <a href="https://wa.me/972508451920" target="_blank" rel="noopener noreferrer" style={{ background: 'transparent', color: C.white, border: '1.5px solid rgba(178,110,99,0.5)', borderRadius: '10px', padding: '14px 28px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', whiteSpace: 'nowrap', fontFamily: "'Assistant', sans-serif", ...tx }}>
          מעדיפים לשלוח הודעה? דברו איתי בוואטסאפ
        </a>
      </div>
    </div>
  );
}

function ViewHome({ setView }) {
  return (
    <div>
      <div style={{ background: C.bone, padding: '120px 40px 80px', direction: 'rtl' }}>
        <QuoteBlock
          text="לבחור בטוב, ברגעי החסד והמזל המחברים, במילה הטובה בתוך רגעים קשים, במה שמיטיב איתך – זו אינה פריבילגיה. בזמנים כמו שלנו זה הכרח; כדי שנזכור שגם בתוך מציאות בלתי נסבלת קיים יופי שמושיט יד ממעמקים וקורא לנו לבחור בו."
          author="— דור"
        />
        <div style={{ maxWidth: '1000px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap' }}>
          <div style={{ flex: 1, minWidth: '280px' }}>
            <div style={{ fontSize: '12px', color: C.terra, fontWeight: 600, letterSpacing: '0.1em', marginBottom: '16px', textTransform: 'uppercase', fontFamily: "'Assistant', sans-serif" }}>
              ביוסינתזה · יוגה טיפולית
            </div>
            <h1 style={{ fontSize: 'clamp(26px,4vw,44px)', fontWeight: 600, color: C.navy, lineHeight: 1.3, margin: '0 0 12px', fontFamily: "'Assistant', sans-serif" }}>
              להיות אדם
            </h1>
            <h2 style={{ fontSize: 'clamp(16px,2vw,22px)', fontWeight: 400, color: C.navy, margin: '0 0 24px', lineHeight: 1.4, opacity: 0.55, fontFamily: "'Assistant', sans-serif" }}>
              פסיכותרפיה גופנית אינטגרטיבית
            </h2>
            <p style={{ fontSize: '16px', color: C.charcoal, lineHeight: 1.85, margin: '0 0 40px', maxWidth: '520px', letterSpacing: '0.01em', fontFamily: "'Assistant', sans-serif" }}>
              קליניקה מבוססת מחקר לפסיכותרפיה גופנית (ביוסינתזה) ויוגה טיפולית. מרחב מקורקע המציע ליווי רגשי וסומטי מוסמך במשברי חיים, אבל, חרדה וטראומה – מתוך עמדה טיפולית המכבדת את המורכבות של התודעה והגוף שלך.
            </p>
            <button onClick={() => setView(5)} style={{ background: C.terra, color: C.white, border: 'none', borderRadius: '10px', padding: '14px 28px', fontSize: '15px', fontWeight: 500, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", ...tx }}>
              לתיאום שיחת הכרות קצרה
            </button>
          </div>
          <div style={{ width: '260px', height: '300px', borderRadius: '16px', background: '#DDD8D0', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, border: `3px solid ${C.terra}` }}>
            <span style={{ color: '#9A9490', fontSize: '13px', fontFamily: "'Assistant', sans-serif" }}>תמונת פרופיל</span>
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
      <div style={{ background: C.bone, padding: '120px 40px 80px', direction: 'rtl' }}>
        <QuoteBlock
          text="I believed I wanted to be a poet, but deep down, I just wanted to be a poem."
          author="— Jaime Gil de Biedma"
        />
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
      <div style={{ background: C.bone, padding: '120px 40px 80px', direction: 'rtl' }}>
        <QuoteBlock
          text="הטיפול אינו תיקון של מה שמקולקל, אלא חיבור מחדש אל זרמי החיים המולדים שלנו."
          author="— דיויד בואדלה"
        />
        <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 600, color: C.navy, textAlign: 'center', margin: '0 0 20px', fontFamily: "'Assistant', sans-serif" }}>
            עמדה טיפולית אינטגרטיבית ושדות החיים
          </h2>
          <p style={{ textAlign: 'center', color: C.charcoal, fontSize: '16px', lineHeight: 1.85, maxWidth: '700px', margin: '0 auto 48px', fontFamily: "'Assistant', sans-serif" }}>
            הכלים בהם אנו משתמשים בקליניקה מבוססים על ספרות מקצועית, מחקר סומטי ונוירו-ביולוגיה, לצד מודלים מוכרים של פסיכותרפיה דינמית. אנו עובדים עם שלושת זרמי החיים (Life Streams) המרכיבים את שלמות הבריאות:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {streams.map((s, i) => (
              <div key={i} style={{ background: C.white, borderRadius: '14px', padding: '32px 28px', boxShadow: '0 4px 30px rgba(22,34,47,0.04)', borderBottom: `3px solid ${C.terra}` }}>
                <div style={{ fontSize: '11px', color: C.terra, fontWeight: 600, letterSpacing: '0.06em', marginBottom: '12px', textTransform: 'uppercase', fontFamily: "'Assistant', sans-serif" }}>{s.sub}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: C.navy, margin: '0 0 14px', fontFamily: "'Assistant', sans-serif" }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: C.charcoal, lineHeight: 1.85, margin: 0, fontFamily: "'Assistant', sans-serif" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <ContactFooter setView={setView} />
    </div>
  );
}

function ViewWritings({ setView }) {
  return (
    <div>
      <div style={{ background: C.bone, padding: '120px 40px 80px', direction: 'rtl' }}>
        <QuoteBlock
          text="ואם אוכל לנסות ולסכם מהי עמדה טיפולית, הרי שחלק ניכר ממנה הוא ללמד אותך להיות מאוד מכבד כלפי המורכבות של התודעה שלך; להבין שהתודעה שלך היא לא בדיוק דבר שברור לך מאליו."
        />
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 600, color: C.navy, textAlign: 'center', margin: '0 0 16px', fontFamily: "'Assistant', sans-serif" }}>
            מן המרחב: מחשבות, תודעה ושירה
          </h2>
          <p style={{ textAlign: 'center', color: C.charcoal, fontSize: '16px', lineHeight: 1.85, margin: '0 0 56px', fontFamily: "'Assistant', sans-serif" }}>
            מרחב זה מוקדש למילים שבין החדר לשדה, תובנות על מורכבות התודעה, תהליכי אבל וקשב עמוק לזרמי החיים.
          </p>
          <div style={{ background: C.white, borderRadius: '14px', padding: '48px 40px', boxShadow: '0 4px 30px rgba(22,34,47,0.04)', borderRight: `4px solid ${C.terra}`, textAlign: 'center' }}>
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
      <div style={{ background: C.bone, padding: '120px 40px 80px', direction: 'rtl' }}>
        <QuoteBlock text="הגוף שלנו רוצה, הראש שלנו לא גר שם... הקלאסיקה של חוסר אינטגרציה." />
        <div style={{ maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 600, color: C.navy, textAlign: 'center', margin: '0 0 48px', fontFamily: "'Assistant', sans-serif" }}>
            שאלות נפוצות וביטחון קליני
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: C.white, borderRadius: '12px', border: open === i ? `1.5px solid ${C.terra}` : `1.5px solid ${C.border}`, marginBottom: '12px', overflow: 'hidden', boxShadow: '0 4px 30px rgba(22,34,47,0.03)', ...tx }}>
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
      </div>
      <ContactFooter setView={setView} />
    </div>
  );
}

function ViewContact() {
  return (
    <div>
      <div style={{ background: C.bone, padding: '120px 40px 80px', direction: 'rtl' }}>
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
    <div style={{ fontFamily: "'Assistant', sans-serif", background: C.bone, minHeight: '100vh', position: 'relative' }}>
      {/* Cave texture overlay */}
      <div style={{
        position: 'fixed', inset: 0, zIndex: 0, pointerEvents: 'none',
        background: `radial-gradient(ellipse at 20% 30%, rgba(196,135,107,0.10) 0%, transparent 60%),
                     radial-gradient(ellipse at 80% 70%, rgba(180,100,70,0.08) 0%, transparent 55%),
                     radial-gradient(ellipse at 50% 90%, rgba(74,30,14,0.06) 0%, transparent 50%)`,
      }} />
      {/* Cave art SVG decoration */}
      <svg style={{ position: 'fixed', bottom: 0, left: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.18, width: '420px', height: '260px' }} viewBox="0 0 420 260" fill="none">
        {/* Deer silhouette */}
        <ellipse cx="120" cy="160" rx="45" ry="22" fill="#4A1E0E" />
        <ellipse cx="155" cy="148" rx="18" ry="14" fill="#4A1E0E" />
        <line x1="120" y1="182" x2="108" y2="210" stroke="#4A1E0E" strokeWidth="5" strokeLinecap="round"/>
        <line x1="130" y1="182" x2="132" y2="212" stroke="#4A1E0E" strokeWidth="5" strokeLinecap="round"/>
        <line x1="148" y1="182" x2="142" y2="210" stroke="#4A1E0E" strokeWidth="5" strokeLinecap="round"/>
        <line x1="158" y1="182" x2="162" y2="210" stroke="#4A1E0E" strokeWidth="5" strokeLinecap="round"/>
        {/* Antlers */}
        <path d="M160 140 L168 118 M168 118 L160 108 M168 118 L178 112" stroke="#4A1E0E" strokeWidth="3.5" strokeLinecap="round"/>
        <path d="M152 140 L148 120 M148 120 L140 110 M148 120 L158 112" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round"/>
        {/* Handprint */}
        <ellipse cx="300" cy="80" rx="14" ry="18" fill="#4A1E0E" opacity="0.7"/>
        <ellipse cx="287" cy="68" rx="4" ry="7" fill="#4A1E0E" opacity="0.7" transform="rotate(-15 287 68)"/>
        <ellipse cx="294" cy="63" rx="4" ry="8" fill="#4A1E0E" opacity="0.7" transform="rotate(-5 294 63)"/>
        <ellipse cx="303" cy="61" rx="4" ry="8" fill="#4A1E0E" opacity="0.7" transform="rotate(5 303 61)"/>
        <ellipse cx="312" cy="64" rx="3.5" ry="7" fill="#4A1E0E" opacity="0.7" transform="rotate(15 312 64)"/>
        <ellipse cx="319" cy="70" rx="3" ry="6" fill="#4A1E0E" opacity="0.7" transform="rotate(25 319 70)"/>
        {/* Dots */}
        <circle cx="240" cy="190" r="3.5" fill="#4A1E0E" opacity="0.5"/>
        <circle cx="255" cy="183" r="2.5" fill="#4A1E0E" opacity="0.4"/>
        <circle cx="268" cy="195" r="2" fill="#4A1E0E" opacity="0.3"/>
        {/* Running human */}
        <circle cx="360" cy="130" r="8" fill="#4A1E0E" opacity="0.6"/>
        <line x1="360" y1="138" x2="360" y2="165" stroke="#4A1E0E" strokeWidth="4" strokeLinecap="round"/>
        <line x1="360" y1="145" x2="345" y2="155" stroke="#4A1E0E" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="360" y1="145" x2="375" y2="152" stroke="#4A1E0E" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="360" y1="165" x2="348" y2="182" stroke="#4A1E0E" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="360" y1="165" x2="372" y2="183" stroke="#4A1E0E" strokeWidth="3.5" strokeLinecap="round"/>
        {/* Olive branch */}
        <path d="M30 30 Q80 10 130 30 Q80 50 30 30Z" fill="#4A1E0E" opacity="0.25"/>
        <path d="M50 22 Q80 5 110 22" stroke="#4A1E0E" strokeWidth="2" fill="none" opacity="0.3" strokeLinecap="round"/>
      </svg>
      {/* Top right cave art */}
      <svg style={{ position: 'fixed', top: 70, right: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.14, width: '220px', height: '180px' }} viewBox="0 0 220 180" fill="none">
        <ellipse cx="100" cy="90" rx="55" ry="28" fill="#4A1E0E"/>
        <ellipse cx="145" cy="76" rx="22" ry="18" fill="#4A1E0E"/>
        <line x1="100" y1="118" x2="88" y2="148" stroke="#4A1E0E" strokeWidth="6" strokeLinecap="round"/>
        <line x1="112" y1="118" x2="114" y2="150" stroke="#4A1E0E" strokeWidth="6" strokeLinecap="round"/>
        <line x1="130" y1="118" x2="122" y2="148" stroke="#4A1E0E" strokeWidth="6" strokeLinecap="round"/>
        <line x1="143" y1="118" x2="148" y2="148" stroke="#4A1E0E" strokeWidth="6" strokeLinecap="round"/>
        <path d="M148 68 L158 44 M158 44 L148 32 M158 44 L170 38" stroke="#4A1E0E" strokeWidth="4" strokeLinecap="round"/>
      </svg>
      <Navbar view={view} setView={setView} />
      <div style={{ ...tx, position: 'relative', zIndex: 1 }}>
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
    <nav style={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 50, background: 'rgba(249,237,224,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #E8C4A8', padding: '0 40px', direction: 'rtl', fontFamily: "'Assistant', sans-serif" }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <button onClick={() => handleViewClick(0)} style={{ fontWeight: 700, fontSize: '17px', color: '#4A1E0E', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Assistant', sans-serif", flexShrink: 0 }}>
          להיות אדם
        </button>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1, margin: '0 32px' }}>
          {navItems.map((v, i) => {
            const isActive = !onBlog && view === i;
            const isBlogActive = onBlog && i === 3;
            return (
              <button key={i} onClick={() => handleViewClick(i)} style={{ fontSize: '14px', fontWeight: (isActive || isBlogActive) ? 600 : 400, color: (isActive || isBlogActive) ? '#C4876B' : '#6B3A2A', background: (isActive || isBlogActive) ? 'rgba(196,135,107,0.12)' : 'transparent', border: 'none', borderRadius: '8px', padding: '6px 14px', cursor: 'pointer', transition: 'all 0.3s', fontFamily: "'Assistant', sans-serif" }}>
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
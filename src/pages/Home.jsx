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
      {/* Cave art SVG — bottom left: humans, animals, trees */}
      <svg style={{ position: 'fixed', bottom: 0, left: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.18, width: '500px', height: '320px' }} viewBox="0 0 500 320" fill="none">
        {/* === BISON === */}
        <ellipse cx="80" cy="220" rx="48" ry="26" fill="#4A1E0E"/>
        <ellipse cx="118" cy="205" rx="20" ry="16" fill="#4A1E0E"/>
        {/* bison hump */}
        <ellipse cx="90" cy="196" rx="18" ry="12" fill="#4A1E0E"/>
        {/* bison legs */}
        <line x1="68" y1="244" x2="62" y2="270" stroke="#4A1E0E" strokeWidth="5" strokeLinecap="round"/>
        <line x1="80" y1="245" x2="76" y2="272" stroke="#4A1E0E" strokeWidth="5" strokeLinecap="round"/>
        <line x1="98" y1="244" x2="95" y2="270" stroke="#4A1E0E" strokeWidth="5" strokeLinecap="round"/>
        <line x1="110" y1="243" x2="112" y2="270" stroke="#4A1E0E" strokeWidth="5" strokeLinecap="round"/>
        {/* bison horn */}
        <path d="M118 195 L126 178 L132 182" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round" fill="none"/>
        {/* bison tail */}
        <path d="M33 220 Q22 210 26 200" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round" fill="none"/>

        {/* === DEER === */}
        <ellipse cx="210" cy="228" rx="36" ry="18" fill="#4A1E0E"/>
        <ellipse cx="238" cy="216" rx="14" ry="11" fill="#4A1E0E"/>
        <line x1="200" y1="245" x2="194" y2="268" stroke="#4A1E0E" strokeWidth="4" strokeLinecap="round"/>
        <line x1="212" y1="246" x2="210" y2="270" stroke="#4A1E0E" strokeWidth="4" strokeLinecap="round"/>
        <line x1="224" y1="245" x2="220" y2="268" stroke="#4A1E0E" strokeWidth="4" strokeLinecap="round"/>
        <line x1="234" y1="244" x2="236" y2="268" stroke="#4A1E0E" strokeWidth="4" strokeLinecap="round"/>
        {/* deer antlers */}
        <path d="M240 208 L246 190 M246 190 L240 180 M246 190 L254 185" stroke="#4A1E0E" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
        <path d="M234 210 L230 193 M230 193 L224 184 M230 193 L238 186" stroke="#4A1E0E" strokeWidth="2" strokeLinecap="round" fill="none"/>

        {/* === HUMAN FIGURE 1 — standing, arms raised === */}
        <circle cx="320" cy="190" r="9" fill="#4A1E0E"/>
        <line x1="320" y1="199" x2="320" y2="235" stroke="#4A1E0E" strokeWidth="5" strokeLinecap="round"/>
        {/* arms raised */}
        <line x1="320" y1="210" x2="302" y2="196" stroke="#4A1E0E" strokeWidth="4" strokeLinecap="round"/>
        <line x1="320" y1="210" x2="338" y2="196" stroke="#4A1E0E" strokeWidth="4" strokeLinecap="round"/>
        {/* legs */}
        <line x1="320" y1="235" x2="308" y2="258" stroke="#4A1E0E" strokeWidth="4" strokeLinecap="round"/>
        <line x1="320" y1="235" x2="332" y2="258" stroke="#4A1E0E" strokeWidth="4" strokeLinecap="round"/>

        {/* === HUMAN FIGURE 2 — running === */}
        <circle cx="380" cy="195" r="8" fill="#4A1E0E"/>
        <line x1="380" y1="203" x2="378" y2="232" stroke="#4A1E0E" strokeWidth="4" strokeLinecap="round"/>
        <line x1="379" y1="213" x2="362" y2="222" stroke="#4A1E0E" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="379" y1="213" x2="394" y2="206" stroke="#4A1E0E" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="378" y1="232" x2="366" y2="252" stroke="#4A1E0E" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="378" y1="232" x2="390" y2="250" stroke="#4A1E0E" strokeWidth="3.5" strokeLinecap="round"/>

        {/* === HUMAN FIGURE 3 — small, crouching === */}
        <circle cx="440" cy="230" r="7" fill="#4A1E0E"/>
        <line x1="440" y1="237" x2="440" y2="255" stroke="#4A1E0E" strokeWidth="4" strokeLinecap="round"/>
        <line x1="440" y1="244" x2="428" y2="250" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round"/>
        <line x1="440" y1="244" x2="452" y2="248" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round"/>
        <line x1="440" y1="255" x2="432" y2="270" stroke="#4A1E0E" strokeWidth="3.5" strokeLinecap="round"/>
        <line x1="440" y1="255" x2="448" y2="270" stroke="#4A1E0E" strokeWidth="3.5" strokeLinecap="round"/>

        {/* === TREE 1 — simple trunk + branches === */}
        <line x1="155" y1="270" x2="155" y2="210" stroke="#4A1E0E" strokeWidth="5" strokeLinecap="round"/>
        <line x1="155" y1="240" x2="138" y2="225" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round"/>
        <line x1="155" y1="232" x2="142" y2="215" stroke="#4A1E0E" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="155" y1="225" x2="165" y2="210" stroke="#4A1E0E" strokeWidth="2.5" strokeLinecap="round"/>
        <line x1="155" y1="238" x2="168" y2="228" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round"/>
        <line x1="155" y1="248" x2="144" y2="238" stroke="#4A1E0E" strokeWidth="2" strokeLinecap="round"/>

        {/* === TREE 2 — palm-like === */}
        <line x1="470" y1="290" x2="470" y2="235" stroke="#4A1E0E" strokeWidth="5" strokeLinecap="round"/>
        <path d="M470 235 Q455 218 445 215" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M470 235 Q462 215 460 205" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M470 235 Q478 215 482 206" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round" fill="none"/>
        <path d="M470 235 Q484 220 490 218" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round" fill="none"/>
      </svg>

      {/* Cave art SVG — top right: celestial bodies + birds + hand */}
      <svg style={{ position: 'fixed', top: 65, right: 0, zIndex: 0, pointerEvents: 'none', opacity: 0.15, width: '280px', height: '220px' }} viewBox="0 0 280 220" fill="none">
        {/* === SUN === */}
        <circle cx="220" cy="50" r="18" fill="#4A1E0E"/>
        {/* sun rays */}
        <line x1="220" y1="24" x2="220" y2="14" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round"/>
        <line x1="220" y1="76" x2="220" y2="86" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round"/>
        <line x1="194" y1="50" x2="184" y2="50" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round"/>
        <line x1="246" y1="50" x2="256" y2="50" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round"/>
        <line x1="202" y1="32" x2="195" y2="25" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round"/>
        <line x1="238" y1="68" x2="245" y2="75" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round"/>
        <line x1="238" y1="32" x2="245" y2="25" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round"/>
        <line x1="202" y1="68" x2="195" y2="75" stroke="#4A1E0E" strokeWidth="3" strokeLinecap="round"/>

        {/* === CRESCENT MOON === */}
        <path d="M140 35 Q158 50 140 65 Q122 55 130 45 Q135 38 140 35Z" fill="#4A1E0E"/>

        {/* === STARS === */}
        <circle cx="60" cy="30" r="3.5" fill="#4A1E0E"/>
        <circle cx="80" cy="18" r="2.5" fill="#4A1E0E"/>
        <circle cx="100" cy="38" r="2" fill="#4A1E0E"/>
        <circle cx="50" cy="55" r="2" fill="#4A1E0E"/>
        <circle cx="170" cy="22" r="2.5" fill="#4A1E0E"/>
        <circle cx="185" cy="90" r="2" fill="#4A1E0E"/>
        {/* star cross marks */}
        <line x1="60" y1="22" x2="60" y2="38" stroke="#4A1E0E" strokeWidth="1.5" strokeLinecap="round"/>
        <line x1="52" y1="30" x2="68" y2="30" stroke="#4A1E0E" strokeWidth="1.5" strokeLinecap="round"/>

        {/* === BIRDS in flight === */}
        <path d="M30 100 Q38 93 46 100" stroke="#4A1E0E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M50 90 Q60 82 70 90" stroke="#4A1E0E" strokeWidth="2.5" fill="none" strokeLinecap="round"/>
        <path d="M75 105 Q83 97 91 105" stroke="#4A1E0E" strokeWidth="2" fill="none" strokeLinecap="round"/>
        <path d="M20 118 Q28 111 36 118" stroke="#4A1E0E" strokeWidth="2" fill="none" strokeLinecap="round"/>

        {/* === HANDPRINT === */}
        <ellipse cx="100" cy="170" rx="15" ry="20" fill="#4A1E0E" opacity="0.8"/>
        <ellipse cx="85" cy="156" rx="4.5" ry="8" fill="#4A1E0E" opacity="0.8" transform="rotate(-18 85 156)"/>
        <ellipse cx="92" cy="150" rx="4.5" ry="9" fill="#4A1E0E" opacity="0.8" transform="rotate(-6 92 150)"/>
        <ellipse cx="101" cy="148" rx="4.5" ry="9" fill="#4A1E0E" opacity="0.8" transform="rotate(5 101 148)"/>
        <ellipse cx="110" cy="151" rx="4" ry="8" fill="#4A1E0E" opacity="0.8" transform="rotate(16 110 151)"/>
        <ellipse cx="117" cy="158" rx="3.5" ry="7" fill="#4A1E0E" opacity="0.8" transform="rotate(28 117 158)"/>
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
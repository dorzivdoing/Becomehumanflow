import { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Footer from "@/components/clinic/Footer";
import { base44 } from "@/api/base44Client";

const C = {
  bg: '#EEE9E1',       // אבן חמה - רקע ראשי
  bgDark: '#E3DDD5',
  green: '#3B4A3C',    // ירוק כהה עמוק
  sage: '#6B8F71',     // מרווה - גוון ירוק-אפרפר
  sageMid: '#4F6B54',  // מרווה כהה
  sageLight: 'rgba(107,143,113,0.10)',
  text: '#3B4A3C',
  textMid: '#5A6B5C',
  textLight: '#7A8B7C',
  border: '#C4CFC5',
  footerBg: '#3B4A3C',
  white: '#FDFBF8',    // לבן עם גוון חמים
  cream: '#F5F1EB',    // קרם - רקע משני
};

const tx = { transition: 'all 0.4s ease' };

// Subtle botanical leaf SVG for corner accents
function LeafAccent({ style }) {
  return (
    <svg viewBox="0 0 120 160" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ position: 'absolute', pointerEvents: 'none', opacity: 0.18, ...style }}>
      <path d="M60 150 C60 150 10 100 20 50 C30 10 90 5 100 50 C110 90 60 150 60 150Z"
        stroke="#7A9E7E" strokeWidth="1.5" fill="none" />
      <path d="M60 150 C60 150 60 80 60 20" stroke="#7A9E7E" strokeWidth="1" fill="none" />
      <path d="M60 120 C40 100 25 85 25 70" stroke="#7A9E7E" strokeWidth="0.8" fill="none" />
      <path d="M60 100 C80 80 90 65 88 52" stroke="#7A9E7E" strokeWidth="0.8" fill="none" />
      <path d="M60 80 C42 65 32 52 33 40" stroke="#7A9E7E" strokeWidth="0.7" fill="none" />
    </svg>
  );
}

function QuoteBlock({ text, author }) {
  return (
    <div style={{ maxWidth: '640px', margin: '56px auto 0', textAlign: 'center', padding: '40px 32px' }}>
      <div style={{ fontSize: '36px', color: C.sage, opacity: 0.5, marginBottom: '12px', fontFamily: 'Georgia, serif' }}>"</div>
      <p style={{ fontSize: '16px', color: C.textMid, lineHeight: 1.9, fontStyle: 'italic', letterSpacing: '0.02em', margin: '0 0 14px', fontFamily: "'Assistant', sans-serif" }}>
        {text}
      </p>
      {author && <p style={{ fontSize: '13px', color: C.sage, fontWeight: 600, margin: 0, letterSpacing: '0.04em', fontFamily: "'Assistant', sans-serif" }}>{author}</p>}
    </div>
  );
}

function ContactFooter() {
  return (
    <div style={{ background: C.bg, padding: '80px 40px', textAlign: 'center', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
      <LeafAccent style={{ bottom: -20, left: -20, width: '120px', transform: 'rotate(30deg)' }} />
      <LeafAccent style={{ top: -10, right: -10, width: '100px', transform: 'rotate(-20deg) scaleX(-1)' }} />
      <div style={{ position: 'relative', zIndex: 1 }}>
        <h3 style={{ fontSize: '28px', fontWeight: 600, color: C.green, margin: '0 0 40px', fontFamily: "'Assistant', sans-serif" }}>
          יצירת קשר
        </h3>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '14px', flexWrap: 'wrap' }}>
          <a href="https://calendly.com/dorziv/checkin" target="_blank" rel="noopener noreferrer"
            style={{ background: C.sage, color: C.white, borderRadius: '10px', padding: '14px 28px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Assistant', sans-serif", ...tx }}>
            📅 לחצו לבחירת מועד לשיחה ביומן הדיגיטלי
          </a>
          <a href="https://wa.me/972508451920" target="_blank" rel="noopener noreferrer"
            style={{ background: 'transparent', color: C.green, border: `1.5px solid ${C.sage}`, borderRadius: '10px', padding: '14px 28px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '8px', fontFamily: "'Assistant', sans-serif", ...tx }}>
            💬 מעדיפים לשלוח הודעה? דברו איתי בוואטסאפ
          </a>
        </div>
      </div>
    </div>
  );
}

function ViewHome({ setView }) {
  return (
    <div>
      {/* Hero */}
      <div style={{ background: C.bg, padding: '100px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 20, left: 10, width: '110px', transform: 'rotate(15deg)' }} />
        <LeafAccent style={{ bottom: 20, right: 20, width: '90px', transform: 'rotate(-25deg) scaleX(-1)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', direction: 'rtl' }}>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <div style={{ fontSize: '12px', color: C.sage, fontWeight: 600, letterSpacing: '0.1em', marginBottom: '12px', fontFamily: "'Assistant', sans-serif" }}>
              ביוסינתזה - יוגה טיפולית
            </div>
            <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 700, color: C.green, lineHeight: 1.2, margin: '0 0 10px', fontFamily: "'Assistant', sans-serif" }}>
              להיות אדם
            </h1>
            <h2 style={{ fontSize: 'clamp(16px,2vw,20px)', fontWeight: 400, color: C.textMid, margin: '0 0 20px', lineHeight: 1.4, fontFamily: "'Assistant', sans-serif" }}>
              פסיכותרפיה גופנית אינטגרטיבית
            </h2>
            <p style={{ fontSize: '15px', color: C.textMid, lineHeight: 1.9, margin: '0 0 32px', fontFamily: "'Assistant', sans-serif" }}>
              קליניקה מבוססת מחקר לפסיכותרפיה גופנית (ביוסינתזה) ויוגה טיפולית. מרחב מקורקע המציע ליווי רגשי וסומטי מוסמך במשברי חיים, אבל, חרדה וטראומה.
            </p>
            <button onClick={() => setView(5)} style={{ background: C.sage, color: C.white, border: 'none', borderRadius: '10px', padding: '14px 28px', fontSize: '15px', fontWeight: 500, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", ...tx }}>
              לתיאום שיחת הכרות קצרה
            </button>
          </div>
          <div style={{ width: '220px', height: '220px', borderRadius: '50%', flexShrink: 0, border: `3px solid ${C.sage}`, overflow: 'hidden', boxShadow: '0 8px 32px rgba(44,58,46,0.15)' }}>
            <img src="https://media.base44.com/images/public/6a098e797170ea9e67f23db4/c9487d0c4_WhatsAppImage2024-03-10at212726.jpeg" alt="דור" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
          </div>
        </div>
      </div>

      {/* Quote strip - middle */}
      <div style={{ background: C.cream, padding: '72px 40px', direction: 'rtl', position: 'relative' }}>
        <div style={{ maxWidth: '680px', margin: '0 auto', textAlign: 'center' }}>
          <p style={{ fontSize: 'clamp(17px,2.5vw,22px)', color: C.green, lineHeight: 1.85, fontFamily: "'Assistant', sans-serif", margin: '0 0 20px', fontStyle: 'italic' }}>
            לבחור בטוב, ברגעי החסד והמזל המחברים, במילה הטובה בתוך רגעים קשים, במה שמיטיב איתך – זו אינה פריבילגיה. בזמנים כמו שלנו זה הכרח; כדי שנזכור שגם בתוך מציאות בלתי נסבלת קיים יופי שמושיט יד ממעמקים וקורא לנו לבחור בו.
          </p>
          <p style={{ fontSize: '15px', color: C.sageMid, fontWeight: 600, margin: 0, letterSpacing: '0.04em', fontFamily: "'Assistant', sans-serif" }}>— דור</p>
        </div>
      </div>

      <ContactFooter />
    </div>
  );
}

function ViewAbout({ setView }) {
  return (
    <div>
      <div style={{ background: C.bg, padding: '120px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 80, left: 0, width: '100px', transform: 'rotate(10deg)' }} />
        <LeafAccent style={{ bottom: 40, right: 0, width: '90px', transform: 'rotate(-15deg) scaleX(-1)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 600, color: C.green, textAlign: 'center', margin: '0 0 48px', fontFamily: "'Assistant', sans-serif" }}>
            על האדם שמאחורי הטיפול
          </h2>
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ width: '150px', height: '170px', borderRadius: '12px', flexShrink: 0, border: `2px solid ${C.sage}`, overflow: 'hidden' }}>
              <img src="https://media.base44.com/images/public/6a098e797170ea9e67f23db4/c9487d0c4_WhatsAppImage2024-03-10at212726.jpeg" alt="דור" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div style={{ flex: 1, minWidth: '240px' }}>
              {[
                'נעים להכיר, אני דור. לוקח את החיים, ואת המרחב הטיפולי, ברצינות מתאימה. לפחות משתדל. מתוך מחקר אישי ומקצועי שהחל לפני 11 שנים, אני מלווה ב-8 השנים האחרונות אנשים בתהליכי שינוי, התמודדות וצמיחה מתוך משבר.',
                'אני פסיכותרפיסט מוסמך בגישת ביוסינתזה מטעם המכון הבינלאומי בשווייץ (IIBS), חבר בארגון האירופי לפסיכותרפיה גופנית (EABP), מורה ומטפל באמצעות יוגה טיפולית, וחבר בסגל ההוראה של בית הספר לביוסינתזה בישראל.',
                'הקליניקה נקראת Become Human (להיות אדם) מתוך עמדה עמוקה שבמפגש הטיפולי אין לנו שאיפה להגיע לאיזה מודל מושלם, קשיח או חסין מכאב.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '16px', color: C.textMid, lineHeight: 1.9, margin: '0 0 20px', fontFamily: "'Assistant', sans-serif" }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
        <QuoteBlock
          text="I believed I wanted to be a poet, but deep down, I just wanted to be a poem."
          author="— Jaime Gil de Biedma"
        />
      </div>
      <ContactFooter />
    </div>
  );
}

function ViewApproach({ setView }) {
  const streams = [
    { sub: 'Somatic Grounding · השכבה המזודרמלית', title: 'זרם התנועה והקרקוע', body: 'שחרור דפוסי מתח כרוניים שנאגרו בגוף כתוצאה ממתח מתמשך או אירועי קיצון. ביסוס תחושת הקרקע והיציבות הפיזית כמקור ישיר לוויסות רגשי.' },
    { sub: 'Neuro-Vegetative Regulation · השכבה האנדודרמלית', title: 'זרם הנשימה והרגש', body: 'תמיכה ומציאות של נשימה מלאה למערכת עצבים שנשחקה. ויסות החרדה והצפה רגשית באמצעות יוגה טיפולית עדינה ומותאמת.' },
    { sub: 'Spacious Awareness · השכבה האקטודרמלית', title: 'זרם התודעה והקשב', body: 'פיתוח קשב סקרן ומיינדפולנס כלפי המורכבות של התודעה שלך. תרגום התחושות הסומטיות למילים, כדי לאפשר גישה אל הנתונים העשירים של מי שאתה.' },
  ];
  return (
    <div>
      <div style={{ background: C.bg, padding: '120px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 80, left: 0, width: '100px' }} />
        <LeafAccent style={{ bottom: 40, right: 0, width: '90px', transform: 'scaleX(-1)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 600, color: C.green, textAlign: 'center', margin: '0 0 20px', fontFamily: "'Assistant', sans-serif" }}>
            עמדה טיפולית אינטגרטיבית ושדות החיים
          </h2>
          <p style={{ textAlign: 'center', color: C.textMid, fontSize: '16px', lineHeight: 1.85, maxWidth: '700px', margin: '0 auto 48px', fontFamily: "'Assistant', sans-serif" }}>
            הכלים בהם אנו משתמשים בקליניקה מבוססים על ספרות מקצועית, מחקר סומטי ונוירו-ביולוגיה.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {streams.map((s, i) => (
              <div key={i} style={{ background: C.white, borderRadius: '14px', padding: '32px 28px', boxShadow: '0 2px 16px rgba(44,58,46,0.07)', borderBottom: `3px solid ${C.sage}` }}>
                <div style={{ fontSize: '11px', color: C.sage, fontWeight: 600, letterSpacing: '0.06em', marginBottom: '12px', textTransform: 'uppercase', fontFamily: "'Assistant', sans-serif" }}>{s.sub}</div>
                <h3 style={{ fontSize: '17px', fontWeight: 600, color: C.green, margin: '0 0 14px', fontFamily: "'Assistant', sans-serif" }}>{s.title}</h3>
                <p style={{ fontSize: '14px', color: C.textMid, lineHeight: 1.85, margin: 0, fontFamily: "'Assistant', sans-serif" }}>{s.body}</p>
              </div>
            ))}
          </div>
        </div>
        <QuoteBlock
          text="הטיפול אינו תיקון של מה שמקולקל, אלא חיבור מחדש אל זרמי החיים המולדים שלנו."
          author="— דיויד בואדלה"
        />
      </div>
      <ContactFooter />
    </div>
  );
}

function ViewWritings({ setView }) {
  return (
    <div>
      <div style={{ background: C.bg, padding: '120px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 80, left: 0, width: '100px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 600, color: C.green, textAlign: 'center', margin: '0 0 16px', fontFamily: "'Assistant', sans-serif" }}>
            מן המרחב: מחשבות, תודעה ושירה
          </h2>
          <p style={{ textAlign: 'center', color: C.textMid, fontSize: '16px', lineHeight: 1.85, margin: '0 0 56px', fontFamily: "'Assistant', sans-serif" }}>
            מרחב זה מוקדש למילים שבין החדר לשדה.
          </p>
          <div style={{ background: C.white, borderRadius: '14px', padding: '48px 40px', boxShadow: '0 2px 16px rgba(44,58,46,0.07)', borderRight: `4px solid ${C.sage}`, textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '16px', opacity: 0.3 }}>✦</div>
            <p style={{ fontSize: '15px', color: C.textMid, lineHeight: 1.9, margin: 0, fontStyle: 'italic', fontFamily: "'Assistant', sans-serif" }}>
              כתבים ומחשבות יתווספו בקרוב. מרחב זה עדיין מתהווה — כמו כל תהליך טיפולי אמיתי.
            </p>
          </div>
          <div style={{ marginTop: '32px', textAlign: 'center' }}>
            <Link to="/blog" style={{ fontSize: '15px', color: C.sage, fontWeight: 500, textDecoration: 'none', borderBottom: `1px solid ${C.sage}`, paddingBottom: '2px', fontFamily: "'Assistant', sans-serif" }}>
              לבלוג המלא ←
            </Link>
          </div>
        </div>
        <QuoteBlock text="ואם אוכל לנסות ולסכם מהי עמדה טיפולית, הרי שחלק ניכר ממנה הוא ללמד אותך להיות מאוד מכבד כלפי המורכבות של התודעה שלך." />
      </div>
      <ContactFooter />
    </div>
  );
}

function ViewFAQ({ setView }) {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);
  const faqs = [
    {
      q: 'הבדיקות הרפואיות שלי תקינות לחלוטין, אבל הגוף דרוך, הלב מאיץ ויש לי חוסר שקט קבוע. איך פסיכותרפיה גופנית מסבירה את זה?',
      a: "המדע הנוירולוגי והמחקרי שמאחורי הפסיכותרפיה הגופנית מראה שמתח נפשי, חרדה או חוויות משבר שלא עובדו במלואם, נשמרים במערכת העצבים ובשרירים כ'זיכרון סומטי' ומתקבעים כדפוסי מתח כרוניים.",
    },
    {
      q: 'מה קורה בפועל במפגש של פסיכותרפיה גופנית (ביוסינתזה)? האם מדובר בשיחה או בתרגול פיזי?',
      a: 'בבסיסו, זהו טיפול רגשי ודינמי לכל דבר שנעשה דרך שיחה, המוכר על ידי האיגוד האירופי לפסיכותרפיה. ההבדל מטיפול פסיכולוגי מסורתי הוא שאנחנו לא מסתפקים רק בדיבור.',
    },
    {
      q: 'אני חושש/ת שהעבודה עם הגוף תציף אותי. איך נשמר הביטחון שלי בטיפול?',
      a: "החשש הזה טבעי לחלוטין. עקרון הברזל של גישת הביוסינתזה הוא עבודה מוגנת ומדורגת, המתרחשת תמיד בתוך 'חלון הוויסות' של מערכת העצבים שלך.",
    },
  ];
  return (
    <div>
      <div style={{ background: C.bg, padding: '120px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 80, left: 0, width: '100px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 600, color: C.green, textAlign: 'center', margin: '0 0 48px', fontFamily: "'Assistant', sans-serif" }}>
            שאלות נפוצות וביטחון קליני
          </h2>
          {faqs.map((faq, i) => (
            <div key={i} style={{ background: C.white, borderRadius: '12px', border: open === i ? `1.5px solid ${C.sage}` : `1.5px solid ${C.border}`, marginBottom: '12px', overflow: 'hidden', ...tx }}>
              <button onClick={() => toggle(i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'right', gap: '16px' }}>
                <span style={{ fontSize: '16px', fontWeight: 500, color: C.green, lineHeight: 1.5, flex: 1, fontFamily: "'Assistant', sans-serif" }}>{faq.q}</span>
                <span style={{ color: C.sage, fontSize: '22px', fontWeight: 300, flexShrink: 0, display: 'inline-block', transition: 'transform 0.3s', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? '500px' : '0px', overflow: 'hidden', transition: 'max-height 0.45s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                <p style={{ padding: '0 24px 24px', color: C.textMid, fontSize: '15px', lineHeight: 1.85, margin: 0, fontFamily: "'Assistant', sans-serif" }}>{faq.a}</p>
              </div>
            </div>
          ))}
        </div>
        <QuoteBlock text="הגוף שלנו רוצה, הראש שלנו לא גר שם... הקלאסיקה של חוסר אינטגרציה." />
      </div>
      <ContactFooter />
    </div>
  );
}

function ViewContact() {
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
      <div style={{ background: C.bg, padding: '120px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 80, left: 0, width: '100px' }} />
        <LeafAccent style={{ bottom: 40, right: 0, width: '90px', transform: 'scaleX(-1)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(22px,4vw,36px)', fontWeight: 600, color: C.green, margin: '0 0 48px', textAlign: 'center', fontFamily: "'Assistant', sans-serif" }}>
            יצירת קשר
          </h2>
          <div style={{ display: 'flex', gap: '48px', flexWrap: 'wrap', alignItems: 'flex-start' }}>
            {/* Form */}
            <div style={{ flex: 1, minWidth: '280px' }}>
              {sent ? (
                <div style={{ background: C.cream, borderRadius: '14px', padding: '40px', textAlign: 'center' }}>
                  <div style={{ fontSize: '32px', marginBottom: '12px' }}>✓</div>
                  <p style={{ fontSize: '17px', color: C.green, fontWeight: 500, fontFamily: "'Assistant', sans-serif" }}>ההודעה נשלחה, תודה!</p>
                  <p style={{ fontSize: '14px', color: C.textMid, fontFamily: "'Assistant', sans-serif" }}>אחזור אליך בהקדם.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
                  {[
                    { key: 'name', label: 'שם', type: 'text', placeholder: 'השם שלך' },
                    { key: 'email', label: 'אימייל', type: 'email', placeholder: 'כתובת המייל שלך' },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label style={{ display: 'block', fontSize: '14px', color: C.textMid, marginBottom: '6px', fontFamily: "'Assistant', sans-serif" }}>{label}</label>
                      <input
                        type={type}
                        required
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: `1.5px solid ${C.border}`, fontSize: '15px', fontFamily: "'Assistant', sans-serif", background: C.white, color: C.text, outline: 'none', boxSizing: 'border-box' }}
                      />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '14px', color: C.textMid, marginBottom: '6px', fontFamily: "'Assistant', sans-serif" }}>הודעה</label>
                    <textarea
                      required
                      rows={5}
                      placeholder="במה אוכל לעזור?"
                      value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={{ width: '100%', padding: '12px 14px', borderRadius: '8px', border: `1.5px solid ${C.border}`, fontSize: '15px', fontFamily: "'Assistant', sans-serif", background: C.white, color: C.text, outline: 'none', resize: 'vertical', boxSizing: 'border-box' }}
                    />
                  </div>
                  <button type="submit" disabled={sending}
                    style={{ background: C.sage, color: C.white, border: 'none', borderRadius: '10px', padding: '14px 28px', fontSize: '15px', fontWeight: 500, cursor: sending ? 'not-allowed' : 'pointer', fontFamily: "'Assistant', sans-serif", opacity: sending ? 0.7 : 1, ...tx }}>
                    {sending ? 'שולח...' : 'שליחה'}
                  </button>
                </form>
              )}
            </div>
            {/* Buttons */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '14px', minWidth: '260px' }}>
              <a href="https://calendly.com/dorziv/checkin" target="_blank" rel="noopener noreferrer"
                style={{ background: C.sage, color: C.white, borderRadius: '10px', padding: '16px 24px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', fontFamily: "'Assistant', sans-serif", textAlign: 'center', ...tx }}>
                📅 לבחירת מועד ביומן הדיגיטלי
              </a>
              <a href="https://wa.me/972508451920" target="_blank" rel="noopener noreferrer"
                style={{ background: 'transparent', color: C.green, border: `1.5px solid ${C.sage}`, borderRadius: '10px', padding: '16px 24px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', fontFamily: "'Assistant', sans-serif", textAlign: 'center', ...tx }}>
                💬 דברו איתי בוואטסאפ
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
    <div style={{ fontFamily: "'Assistant', sans-serif", background: C.bg, minHeight: '100vh' }}>
      <Navbar view={view} setView={setView} />
      <div>
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
    if (onBlog) {
      sessionStorage.setItem('targetView', i);
      navigate('/');
    } else {
      setView(i);
    }
  };

  return (
    <nav style={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 50, background: 'rgba(244,241,236,0.97)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.border}`, padding: '0 40px', direction: 'rtl', fontFamily: "'Assistant', sans-serif" }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <button onClick={() => handleViewClick(0)} style={{ fontWeight: 700, fontSize: '17px', color: C.green, background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Assistant', sans-serif", flexShrink: 0 }}>
          להיות אדם
        </button>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1, margin: '0 32px' }}>
          {navItems.map((v, i) => {
            const isActive = !onBlog && view === i;
            const isBlogActive = onBlog && i === 3;
            const active = isActive || isBlogActive;
            return (
              <button key={i} onClick={() => handleViewClick(i)}
                style={{
                  fontSize: '14px',
                  fontWeight: active ? 600 : 400,
                  color: active ? C.white : C.textMid,
                  background: active ? C.sage : 'transparent',
                  border: 'none',
                  borderRadius: '8px',
                  padding: '6px 14px',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  fontFamily: "'Assistant', sans-serif"
                }}>
                {v}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Footer from "@/components/clinic/Footer";
import { base44 } from "@/api/base44Client";

const C = {
  bg: '#EDE8DF',
  bgDark: '#E0D9CE',
  green: '#2B3A2C',
  sage: '#6B8C6E',
  sageMid: '#4F6B54',
  sageLight: 'rgba(107,140,110,0.10)',
  text: '#2B3A2C',
  textMid: '#4A5C4B',
  textLight: '#7A8B7C',
  border: '#C5CFBF',
  white: '#FAF7F2',
  cream: '#F3EDE3',
  warm: '#A0785A',
};

const tx = { transition: 'all 0.4s ease' };

function LeafAccent({ style }) {
  return null;
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



function ViewHome({ setView }) {
  return (
    <div>
      <div style={{ background: 'linear-gradient(160deg, #E8E2D8 0%, #DDD7CC 40%, #D5CFC4 100%)', padding: '100px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 20, left: 10, width: '110px', transform: 'rotate(15deg)' }} />
        <LeafAccent style={{ bottom: 20, right: 20, width: '90px', transform: 'rotate(-25deg) scaleX(-1)' }} />
        <div className="home-flex" style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', direction: 'rtl' }}>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <div style={{ fontSize: '15px', color: C.warm, fontWeight: 500, letterSpacing: '0.08em', marginBottom: '28px', fontFamily: "'Assistant', sans-serif", textAlign: 'center' }}>
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
              <button onClick={() => setView(3)} style={{ background: C.sage, color: C.white, border: 'none', borderRadius: '8px', padding: '14px 28px', fontSize: '15px', fontWeight: 500, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", ...tx }}>
                למי מתאים הטיפול?
              </button>
              <button onClick={() => setView(6)} style={{ background: 'transparent', color: C.green, border: `2px solid ${C.sage}`, borderRadius: '50px', padding: '12px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", ...tx }}>
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
          <div style={{ display: 'flex', gap: '40px', alignItems: 'flex-start', flexWrap: 'wrap' }}>
            <div style={{ width: '150px', height: '170px', borderRadius: '12px', flexShrink: 0, border: `2px solid ${C.sage}`, overflow: 'hidden' }}>
              <img src="https://media.base44.com/images/public/6a098e797170ea9e67f23db4/c9487d0c4_WhatsAppImage2024-03-10at212726.jpeg" alt="דור" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'top' }} />
            </div>
            <div style={{ flex: 1, minWidth: '240px' }}>
              {[
                'שלום, אני דור. השם שבחרתי לקליניקה, "להיות אדם", נולד מתוך התבוננות ארוכה על כך שלהיות אדם בוגר בעולם הזה הוא תהליך מתמשך, הלוקח זמן ודורש חניכה. המהלך המקצועי שלי התחיל לפני כ-11 שנים מתוך מחקר ועיבוד אישי ומקצועי עמוק, שהוביל אותי אל עולמות הטיפול הגופני והרגשי. מאז שנת 2017 אני מלווה בקליניקה מבוגרים בתהליכי שינוי, התמודדות וצמיחה מתוך משבר באופן פרטני - תחילה דרך עבודה מעמיקה עם יוגה טיפולית ככלי לטיפול ושיקום כאבי גוף, ומשנת 2022 כפסיכותרפיסט גופני בגישת ביוסינתזה. אני מוסמך בגישה זו מטעם המכון הבינלאומי בשוויץ (IIBS) ומשמש כחבר בסגל ההוראה של בית הספר לביוסינתזה בישראל.',
                'אני מתחבר עמוקות לגישת הביוסינתזה מכיוון שהגישה מתאימה את עצמה לאדם, ולא להפך, וכל אחד יוכל למצוא בה שביל פתוח ומשוחרר שעובד ומתאים לו. כפסיכותרפיה גופנית אינטגרטיבית, היא מבוססת על יצירת חיבור ואיזון מחדש בין חלקים שונים בך, ומאפשרת לנוע מתוך המצוקה אל עבר המשאבים הטבעיים, תוך השבת תחושת החיוּת והחיוניות ליום-יום. ניתן להשתמש בה במגע מושכל, אך זו לא חובה והדבר תלוי בהעדפה אישית של כל אחד מהצדדים במפגש. במפגשים, נמצא את הדרך לקשר בין התחושות הגופניות, הרגשות והמחשבות שעולות, מתוך כבוד וקשב עמוק למורכבות של התודעה ושל הלא-מודע.',
                'התהליך הטיפולי בחדר לעולם אינו מנותק מהעולם שבחוץ. בעבודה המשותפת שלנו אני לוקח בחשבון את ההקשרים הרלוונטיים לחייך – הגנאולוגיה האישית והקשרי חייך, מתוך ידיעה עמוקה שאנחנו תמיד קשורים לאנשים, לסיפורים ולמקומות שעיצבו אותנו. המבט הרחב והזיקה הזו הם שהובילו אותי גם אל עולמות התוכן של טקסי אבל, חיים ומוות, בהשראת עבודתם של פרנסיס וולר (Francis Weller) וסטיבן ג׳נקינסון (Stephen Jenkinson). דרכם, התרחבה תפיסתי לגבי החשיבות העצומה של עבודה קבוצתית וקהילתית כמרחב לתחזוקה האנושית לה אנו זקוקים כדי לפגוש ולשאת את הכאב והצער שיגיעו אלינו; לצד ההבנה העמוקה שצער ואבל (ושלל אירועי חיים אנושיים אחרים) אינם פתולוגיה שיש לתקן, אלא דרכו של עולם והמעבר בו. הם חלק בלתי נפרד מתהליך של חניכה והבשלה כאנשים בוגרים, והם חובתנו האנושית כלפי אלו שהיו כאן לפנינו, כמו גם כלפי אלו שיגיעו אחרינו. זהו מסלול התפתחותי משמעותי שבו אני ממשיך לצמוח ולהעמיק מדי יום.',
                'אל המפגשים הטיפוליים בקליניקה אני מביא איתי הקשבה עמוקה, סקרנות, יצירתיות והומור. הכוונה המרכזית שמנחה אותי היא לבנות יחד איתך יחסים טיפוליים שיש בהם אמון הדדי, כבוד וקצב מדויק שמתאים לך ולהקשרים הייחודיים של חייך.',
              ].map((p, i) => (
                <p key={i} style={{ fontSize: '15px', color: C.textMid, lineHeight: 1.9, margin: '0 0 20px', fontFamily: "'Assistant', sans-serif" }}>{p}</p>
              ))}
            </div>
          </div>
        </div>
        <QuoteBlock
          text="חשבתי שאני רוצה להיות משורר, אבל בעומק ליבי — רציתי פשוט להיות שיר."
          author="— חאימה חיל דה בידמה"
        />
      </div>
    </div>
  );
}

function ViewApproach({ setView }) {
  const streams = [
    { title: 'קרקע ותנועה', body: 'ביסוס תחושת קרקע ויציבות גופנית כמקור ישיר לוויסות רגשי ותחושת ביטחון ומקום בעולם. ערוץ זה מתמקד בשחרור דפוסי מתח, נוקשות וקיפאון כרוניים בשרירים ובשלד, שהצטברו במערכת בעקבות דחק מתמשך או אירועי קיצון וטראומה, ומשיב לגוף את חופש התנועה והחיוניות שלו.' },
    { title: 'רגש ונשימה', body: 'חיבור למקצב הפנימי, ויסות והכלה של רגשות ותחושות אינטנסיביות באמצעות הנשימה. עבודה זו מעניקה תמיכה עמוקה למערכת העצבים, ומאפשרת מעבר ממצבי הצפה או אדישות אל מרכז פנימי יציב ומווסת.' },
    { title: 'מחשבות ותשומת לב', body: 'פיתוח קשב סקרן, חקירה ובהירות מנטלית כלפי המורכבות של התודעה והקשרי העולם שלך. תרגום עדין של תחושות ורגשות למילים בהירות בעלות משמעות, כדי ליצור אינטגרציה שלמה, לחבר בין הראש לגוף ולאפשר גישה אל המהות האותנטית היחודית לך.' },
  ];
  return (
    <div>
      <div style={{ background: C.bg, padding: '120px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 80, left: 0, width: '100px' }} />
        <LeafAccent style={{ bottom: 40, right: 0, width: '90px', transform: 'scaleX(-1)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '1000px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 600, color: C.green, textAlign: 'center', margin: '0 0 20px', fontFamily: "'Assistant', sans-serif" }}>
            עמדה טיפולית אינטגרטיבית לחיים
          </h2>
          <p style={{ textAlign: 'center', color: C.textMid, fontSize: '15px', lineHeight: 1.9, maxWidth: '780px', margin: '0 auto 48px', fontFamily: "'Assistant', sans-serif" }}>
            גישת הביוסינתזה (שפירושה המילולי הוא "אינטגרציה של חיים") היא שיטת טיפול בינלאומית מעולם הפסיכותרפיה הגופנית. היא נוסדה בשנות השבעים על ידי החוקר והתרפיסט דייויד בואדלה, מתוך הבנה עמוקה שהאדם הוא שלם אחד. השיטה נשענת על שילוב מרתק ומבוסס בין פסיכולוגיית המעמקים וגישת יחסי האובייקט (הקשר המוקדם בין האם לתינוק), לבין מחקרים מודרניים בחקר המוח, תיאוריות ויסות רגשי ומדעי ההתפתחות העוברית. הביוסינתזה מוכרת באופן רשמי על ידי האיגוד האירופי לפסיכותרפיה (EAP) ומראה כיצד עבודה סומטית, בתוך יחסי אמון, יכולה להביא לשינוי עמוק ויציב, ללא צורך ב״לנפץ״ הגנות, ״לתקן״ את מה שנשבר, או לפתוח פצעים בצורה מכאיבה.
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
          text="הטיפול אינו תיקון של מה שמקולקל, אלא חיבור מחדש אל זרמי החיים המולדים שלנו."
          author="— דיויד בואדלה"
        />
      </div>
    </div>
  );
}

function ViewWritings({ setView }) {
  return (
    <div>
      <div style={{ background: C.bg, padding: '120px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 80, left: 0, width: '100px' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 600, color: C.green, textAlign: 'center', margin: '0 0 16px', fontFamily: "'Assistant', sans-serif" }}>
            מן השדה: דברים תקופתיים שנאספים או נכתבים
          </h2>
          <p style={{ textAlign: 'center', color: C.textMid, fontSize: '16px', lineHeight: 1.85, margin: '0 0 56px', fontFamily: "'Assistant', sans-serif" }}>
            מרחב זה מוקדש ליצירות מעוררות, אמנות, שירה, מחשבות וכתבים.
          </p>
          <div style={{ background: C.white, borderRadius: '14px', padding: '48px 40px', boxShadow: '0 2px 16px rgba(44,58,46,0.07)', borderRight: `4px solid ${C.sage}`, textAlign: 'center' }}>
            <div style={{ fontSize: '32px', marginBottom: '16px', opacity: 0.3 }}>✦</div>
            <p style={{ fontSize: '15px', color: C.textMid, lineHeight: 1.9, margin: 0, fontStyle: 'italic', fontFamily: "'Assistant', sans-serif" }}>
              כתבים ומחשבות יתווספו בקרוב. מרחב זה עדיין מתהווה — כמו כל תהליך טיפולי אמיתי.
            </p>
          </div>
        </div>
        <QuoteBlock text="ואם אוכל לנסות ולסכם מהי עמדה טיפולית, הרי שחלק ניכר ממנה הוא ללמד אותך להיות מאוד מכבד כלפי המורכבות של התודעה שלך." />
      </div>
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
          <h2 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 600, color: C.green, textAlign: 'center', margin: '0 0 48px', fontFamily: "'Assistant', sans-serif" }}>
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
    </div>
  );
}

function ViewForWho({ setView }) {
  const items = [
    { icon: '🌊', title: 'חרדה, דיכאון ואבל', body: 'התמודדות עם חרדה, דיכאון, קשיים עם אבל ואובדן.' },
    { icon: '🔄', title: 'תופעות רגשיות וגופניות', body: 'תופעות רגשיות וגופניות שהופיעו בעקבות חוויות קשות — מתמשכות או חד-פעמיות.' },
    { icon: '🌿', title: 'משברי חיים', body: 'ליווי במהלך או לאחר משברי חיים, כולל משברים רפואיים או שינויים גדולים.' },
    { icon: '✨', title: 'צמיחה והיכרות עם העצמי', body: 'למי שבסך הכל טוב לו, אך מרגיש רצון עמוק להעמיק בהיכרות עם עצמו, לצמוח ולהתפתח.' },
  ];
  return (
    <div>
      <div style={{ background: C.bg, padding: '120px 40px 80px', direction: 'rtl', position: 'relative', overflow: 'hidden' }}>
        <LeafAccent style={{ top: 80, left: 0, width: '100px', transform: 'rotate(10deg)' }} />
        <LeafAccent style={{ bottom: 40, right: 0, width: '90px', transform: 'rotate(-15deg) scaleX(-1)' }} />
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <p style={{ fontSize: '12px', color: C.sage, fontWeight: 600, letterSpacing: '0.1em', textAlign: 'center', marginBottom: '12px', textTransform: 'uppercase', fontFamily: "'Assistant', sans-serif" }}>
            למי מתאים הטיפול?
          </p>
          <h2 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 700, color: C.green, textAlign: 'center', margin: '0 0 12px', fontFamily: "'Assistant', sans-serif" }}>
            מי מגיע לקליניקה?
          </h2>
          <p style={{ textAlign: 'center', color: C.textMid, fontSize: '16px', lineHeight: 1.85, margin: '0 auto 48px', maxWidth: '580px', fontFamily: "'Assistant', sans-serif" }}>
            הקליניקה מתאימה לאנשים בנקודות שונות בחיים — ממשבר חריף ועד מסע של צמיחה.
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))', gap: '20px' }}>
            {items.map((item, i) => (
              <div key={i} style={{ background: C.white, borderRadius: '14px', padding: '28px 24px', boxShadow: '0 2px 16px rgba(44,58,46,0.07)', borderBottom: `3px solid ${C.sage}` }}>
                <div style={{ fontSize: '28px', marginBottom: '12px' }}>{item.icon}</div>
                <h3 style={{ fontSize: '16px', fontWeight: 600, color: C.green, margin: '0 0 10px', fontFamily: "'Assistant', sans-serif" }}>{item.title}</h3>
                <p style={{ fontSize: '14px', color: C.textMid, lineHeight: 1.85, margin: 0, fontFamily: "'Assistant', sans-serif" }}>{item.body}</p>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '48px' }}>
            <button onClick={() => setView(6)} style={{ background: C.sage, color: C.white, border: 'none', borderRadius: '10px', padding: '14px 32px', fontSize: '15px', fontWeight: 500, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", ...tx }}>
              לתיאום שיחת הכרות קצרה
            </button>
          </div>
        </div>
        <QuoteBlock text="לא צריך להיות בשבר גדול כדי לפנות לעזרה. לפעמים עצם הרצון לחיות חיים עמוקים יותר הוא סיבה מספיקה." />
      </div>
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
          <h2 style={{ fontSize: 'clamp(28px,5vw,44px)', fontWeight: 600, color: C.green, margin: '0 0 48px', textAlign: 'center', fontFamily: "'Assistant', sans-serif" }}>
            יצירת קשר
          </h2>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '48px', alignItems: 'start' }}>
            <div style={{ background: C.white, borderRadius: '16px', padding: '36px', boxShadow: '0 2px 16px rgba(44,58,46,0.07)' }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '20px 0' }}>
                  <div style={{ fontSize: '36px', marginBottom: '12px' }}>✓</div>
                  <p style={{ fontSize: '17px', color: C.green, fontWeight: 500, margin: '0 0 8px', fontFamily: "'Assistant', sans-serif" }}>ההודעה נשלחה, תודה!</p>
                  <p style={{ fontSize: '14px', color: C.textMid, margin: 0, fontFamily: "'Assistant', sans-serif" }}>אחזור אליך בהקדם.</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {[
                    { key: 'name', label: 'שם', type: 'text', placeholder: 'השם שלך' },
                    { key: 'email', label: 'אימייל', type: 'email', placeholder: 'כתובת המייל שלך' },
                  ].map(({ key, label, type, placeholder }) => (
                    <div key={key}>
                      <label style={{ display: 'block', fontSize: '13px', color: C.textMid, marginBottom: '6px', fontWeight: 500, fontFamily: "'Assistant', sans-serif" }}>{label}</label>
                      <input type={type} required placeholder={placeholder} value={form[key]}
                        onChange={e => setForm(f => ({ ...f, [key]: e.target.value }))}
                        style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: `1.5px solid ${C.border}`, fontSize: '15px', fontFamily: "'Assistant', sans-serif", background: C.bg, color: C.text, outline: 'none', boxSizing: 'border-box' }} />
                    </div>
                  ))}
                  <div>
                    <label style={{ display: 'block', fontSize: '13px', color: C.textMid, marginBottom: '6px', fontWeight: 500, fontFamily: "'Assistant', sans-serif" }}>הודעה</label>
                    <textarea required rows={4} placeholder="במה אוכל לעזור?" value={form.message}
                      onChange={e => setForm(f => ({ ...f, message: e.target.value }))}
                      style={{ width: '100%', padding: '11px 14px', borderRadius: '8px', border: `1.5px solid ${C.border}`, fontSize: '15px', fontFamily: "'Assistant', sans-serif", background: C.bg, color: C.text, outline: 'none', resize: 'vertical', boxSizing: 'border-box' }} />
                  </div>
                  <button type="submit" disabled={sending}
                    style={{ background: C.sage, color: C.white, border: 'none', borderRadius: '10px', padding: '13px 0', fontSize: '15px', fontWeight: 500, cursor: sending ? 'not-allowed' : 'pointer', fontFamily: "'Assistant', sans-serif", opacity: sending ? 0.7 : 1, width: '100%', ...tx }}>
                    {sending ? 'שולח...' : 'שליחה'}
                  </button>
                </form>
              )}
            </div>
            <div style={{ background: C.white, borderRadius: '16px', padding: '36px', boxShadow: '0 2px 16px rgba(44,58,46,0.07)', display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <p style={{ fontSize: '13px', fontWeight: 600, color: C.textMid, margin: '0 0 8px', fontFamily: "'Assistant', sans-serif", letterSpacing: '0.05em', textTransform: 'uppercase' }}>דרכים נוספות לקשר</p>
              <a href="https://calendly.com/dorziv/checkin" target="_blank" rel="noopener noreferrer"
                style={{ background: C.sage, color: C.white, borderRadius: '10px', padding: '15px 20px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', fontFamily: "'Assistant', sans-serif", textAlign: 'center', display: 'block', ...tx }}>
                📅 לבחירת מועד ביומן הדיגיטלי
              </a>
              <a href="https://wa.me/972508451920" target="_blank" rel="noopener noreferrer"
                style={{ background: 'transparent', color: C.green, border: `1.5px solid ${C.sage}`, borderRadius: '10px', padding: '15px 20px', fontSize: '15px', fontWeight: 500, textDecoration: 'none', fontFamily: "'Assistant', sans-serif", textAlign: 'center', display: 'block', ...tx }}>
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
    <ViewForWho setView={setView} />,
    <ViewWritings setView={setView} />,
    <ViewFAQ setView={setView} />,
    <ViewContact />,
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

  const navItems = ['בית', 'אודותיי', 'הגישה', 'למי מתאים?', 'השראה ומחשבות', 'שאלות', 'קשר'];

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

        <button onClick={() => setMenuOpen(!menuOpen)} className="show-mobile"
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none', flexDirection: 'column', gap: '5px' }}>
          <span style={{ display: 'block', width: '22px', height: '2px', background: C.green, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: C.green, transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: C.green, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      <div style={{ maxHeight: menuOpen ? '500px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease', background: 'rgba(244,241,236,0.99)', borderTop: menuOpen ? `1px solid ${C.border}` : 'none' }} className="show-mobile-block">
        <div style={{ padding: '12px 20px 20px', display: 'flex', flexDirection: 'column', gap: '4px', alignItems: 'center' }}>
          {navItems.map((v, i) => {
            const isActive = !onBlog && view === i;
            const isBlogActive = onBlog && i === 4;
            const active = isActive || isBlogActive;
            return (
              <button key={i} onClick={() => handleViewClick(i)}
                 style={{ 
                  fontSize: '15px', 
                  fontWeight: active ? 600 : 400, 
                  color: active ? C.white : C.textMid, 
                  background: i === 6 && active ? C.sage : (i === 6 ? 'transparent' : (active ? C.sage : 'transparent')), 
                  border: i === 6 ? `2px solid ${C.sage}` : 'none', 
                  borderRadius: i === 6 ? '50px' : '8px', 
                  padding: i === 6 ? '10px 18px' : '10px 16px', 
                  cursor: 'pointer', 
                  textAlign: 'center', 
                  fontFamily: "'Assistant', sans-serif", 
                  transition: 'all 0.2s',
                  width: '100%'
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
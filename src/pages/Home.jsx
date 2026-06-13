import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { base44 } from "@/api/base44Client";
import { content } from "./homeContent";

const C = {
  bg: '#B8935A',
  green: '#1E2631',
  sage: '#5A7A5D',
  text: '#1E2631',
  textMid: '#232B32',
  textLight: '#5A6B5C',
  border: 'rgba(22,34,47,0.12)',
  white: '#FAF7F2',
  warm: '#B26E63',
  clay: '#B26E63',
  navy: '#16222F',
};

const tx = { transition: 'all 0.4s ease' };

function QuoteBlock({ text, author, dir = 'rtl' }) {
  return (
    <div style={{ maxWidth: '640px', margin: '56px auto 0', textAlign: 'center', padding: '40px 32px' }}>
      <div style={{ fontSize: '36px', color: C.sage, opacity: 0.6, marginBottom: '12px', fontFamily: 'Georgia, serif' }}>"</div>
      <p style={{ fontSize: '16px', color: C.text, lineHeight: 1.9, fontStyle: 'italic', fontWeight: 600, letterSpacing: '0.02em', margin: '0 0 14px', fontFamily: "'Assistant', sans-serif", direction: dir }}>
        {text}
      </p>
      {author && <p style={{ fontSize: '13px', color: C.sage, fontWeight: 600, margin: 0, letterSpacing: '0.04em', fontFamily: "'Assistant', sans-serif" }}>{author}</p>}
    </div>
  );
}

function ViewHome({ setView, t }) {
  const h = t.home;
  const isRtl = t.dir === 'rtl';
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div style={{ background: 'linear-gradient(160deg, #E8E2D8 0%, #DDD7CC 40%, #D5CFC4 100%)', padding: '60px 40px 80px', direction: t.dir, position: 'relative', overflow: 'hidden' }}>
        <div className="home-flex" style={{ position: 'relative', zIndex: 1, maxWidth: '900px', margin: '0 auto', display: 'flex', alignItems: 'center', gap: '60px', flexWrap: 'wrap', direction: t.dir }}>
          <div style={{ flex: 1, minWidth: '260px' }}>
            <div style={{ fontSize: '15px', color: C.warm, fontWeight: 500, letterSpacing: '0.08em', marginBottom: '16px', fontFamily: "'Assistant', sans-serif", textAlign: 'center' }}>
              {h.subtitle}
            </div>

            <div style={{ [isRtl ? 'borderRight' : 'borderLeft']: `3px solid ${C.sage}`, [isRtl ? 'paddingRight' : 'paddingLeft']: '18px', margin: '0 0 32px' }}>
              <p style={{ fontSize: 'clamp(14px,1.8vw,16px)', color: C.textMid, lineHeight: 1.95, fontFamily: "'Assistant', sans-serif", margin: '0 0 10px', fontStyle: 'italic', whiteSpace: 'pre-line' }}>
                {h.poemLines}
              </p>
              <p style={{ fontSize: '12px', color: C.sage, fontWeight: 600, margin: 0, letterSpacing: '0.04em', fontFamily: "'Assistant', sans-serif" }}>{h.poemAuthor}</p>
            </div>

            <div className="home-btns" style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'stretch' }}>
              <button onClick={() => setView(2)} className="home-btn-full" style={{ background: C.clay, color: C.white, border: 'none', borderRadius: '8px', padding: '14px 28px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", boxShadow: '0 4px 14px rgba(178,110,99,0.3)', ...tx }}>
                {h.btn1}
              </button>
              <div className="home-btns-row" style={{ display: 'flex', gap: '12px' }}>
                <button onClick={() => setView(5)} style={{ background: 'transparent', color: C.navy, border: `2px solid ${C.navy}`, borderRadius: '50px', padding: '12px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", ...tx }}>
                  {h.btn2}
                </button>
                <button onClick={() => setView(6)} style={{ background: 'transparent', color: C.navy, border: `2px solid ${C.navy}`, borderRadius: '50px', padding: '12px 24px', fontSize: '15px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", ...tx }}>
                  {h.btn3}
                </button>
              </div>
            </div>

            <div className="home-img-mobile" style={{ display: 'none', justifyContent: 'center', marginTop: '36px' }}>
              <div style={{ width: '180px', height: '230px', borderRadius: '14px', overflow: 'hidden', boxShadow: '0 8px 32px rgba(44,58,46,0.13)', border: `1px solid ${C.border}` }}>
                <img src="https://media.base44.com/images/public/6a098e797170ea9e67f23db4/c9487d0c4_WhatsAppImage2024-03-10at212726.jpeg" alt="Dor" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
            </div>
          </div>

          <div className="home-img-desktop" style={{ width: '220px', height: '280px', borderRadius: '14px', flexShrink: 0, overflow: 'hidden', boxShadow: '0 8px 32px rgba(44,58,46,0.13)', border: `1px solid ${C.border}` }}>
            <img src="https://media.base44.com/images/public/6a098e797170ea9e67f23db4/c9487d0c4_WhatsAppImage2024-03-10at212726.jpeg" alt="Dor" style={{ width: '100%', height: '100%', objectFit: 'cover', objectPosition: 'center' }} />
          </div>
        </div>

        <style>{`
          @media (max-width: 700px) {
            .home-img-desktop { display: none !important; }
            .home-img-mobile { display: flex !important; }
            .home-flex { flex-direction: column !important; }
            .home-btns { flex-direction: column !important; }
            .home-btn-full { width: 100% !important; }
            .home-btns-row { width: 100% !important; justify-content: center !important; }
          }
          @media (min-width: 701px) {
            .home-img-mobile { display: none !important; }
          }
        `}</style>
      </div>
    </motion.div>
  );
}

function ViewAbout({ t }) {
  const a = t.about;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div style={{ background: C.bg, padding: '60px 40px 80px', direction: t.dir }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: 400, color: C.green, textAlign: t.dir === 'rtl' ? 'right' : 'left', margin: '0 0 32px', fontFamily: "'Assistant', sans-serif" }}>
            {a.title}
          </h2>
          <div style={{ flex: 1, minWidth: '240px' }}>
            {a.paragraphs.map((p, i) => (
              <p key={i} style={{ fontSize: '15px', color: C.textMid, lineHeight: 1.9, margin: '0 0 20px', fontFamily: "'Assistant', sans-serif", textAlign: 'justify' }}>{p}</p>
            ))}
          </div>
        </div>
        <QuoteBlock text={a.quote.text} author={a.quote.author} dir={t.dir} />
      </div>
    </motion.div>
  );
}

function ViewApproach({ t }) {
  const a = t.approach;
  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div style={{ background: C.bg, padding: '60px 40px 80px', direction: t.dir }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: 400, color: C.green, textAlign: t.dir === 'rtl' ? 'right' : 'left', margin: '0 0 20px', fontFamily: "'Assistant', sans-serif" }}>
            {a.title}
          </h2>
          <p style={{ textAlign: 'justify', color: C.textMid, fontSize: '15px', lineHeight: 1.9, margin: '0 0 48px', fontFamily: "'Assistant', sans-serif" }}>
            {a.intro}
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '24px' }}>
            {a.streams.map((s, i) => (
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
        <QuoteBlock text={a.quote.text} author={a.quote.author} dir={t.dir} />
      </div>
    </motion.div>
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

function ViewWritings({ t }) {
  const [current, setCurrent] = useState(0);
  const total = writings.length;
  const w = t.writings;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div style={{ padding: '60px 40px 80px', direction: t.dir, position: 'relative', overflow: 'hidden' }}>
        {/* Background photo with vintage filter */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          backgroundImage: 'url(https://media.base44.com/images/public/6a098e797170ea9e67f23db4/0af3848d5_WhatsAppImage2026-05-04at112551.jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center 40%',
          filter: 'saturate(0.55) brightness(0.82) sepia(0.25) contrast(0.9)',
          zIndex: 0,
        }} />
        {/* Warm linen overlay for vintage/faded feel and text legibility */}
        <div style={{
          position: 'absolute', top: 0, left: 0, width: '100%', height: '100%',
          background: 'linear-gradient(180deg, rgba(246,244,240,0.72) 0%, rgba(243,240,233,0.78) 100%)',
          zIndex: 1,
        }} />

        <div style={{ position: 'relative', zIndex: 2, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: 400, color: C.green, textAlign: t.dir === 'rtl' ? 'right' : 'left', margin: '0 0 32px', fontFamily: "'Assistant', sans-serif" }}>
            {w.title}
          </h2>

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

          <motion.div key={current} initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.4 }}
            style={{ background: '#FDFCFA', borderRadius: '16px', padding: '48px 44px', boxShadow: '0 2px 20px rgba(44,58,46,0.08)', borderRight: `4px solid #B26E63`, borderTop: `1px solid #7A8B84`, minHeight: '220px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
            <div>
              <div style={{ fontSize: '36px', color: C.sage, opacity: 0.4, marginBottom: '12px', fontFamily: 'Georgia, serif', lineHeight: 1, textAlign: writings[current].rtl ? 'right' : 'left' }}>"</div>
              <p style={{ fontSize: '16px', color: '#1A2228', lineHeight: 1.95, margin: '0 0 20px', fontStyle: 'italic', fontFamily: "'Assistant', sans-serif", direction: writings[current].rtl ? 'rtl' : 'ltr', textAlign: writings[current].rtl ? 'right' : 'left', whiteSpace: 'pre-line', fontWeight: 500 }}>
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

function ViewFAQ({ setView, t }) {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);
  const f = t.faq;

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div style={{ background: C.bg, padding: '60px 40px 80px', direction: t.dir }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: 400, color: C.green, textAlign: t.dir === 'rtl' ? 'right' : 'left', margin: '0 0 32px', fontFamily: "'Assistant', sans-serif" }}>
            {f.title}
          </h2>
          {f.items.map((faq, i) => (
            <motion.div key={i} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.05 }}
              style={{ background: C.white, borderRadius: '12px', borderBottom: '1px solid rgba(22, 34, 47, 0.08)', marginBottom: '12px', overflow: 'hidden', ...tx }}>
              <button onClick={() => toggle(i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: t.dir === 'rtl' ? 'right' : 'left', gap: '16px' }}>
                <span style={{ fontSize: '16px', fontWeight: 600, color: '#1E2631', lineHeight: 1.5, flex: 1, fontFamily: "'Assistant', sans-serif" }}>{faq.q}</span>
                <span style={{ color: C.sage, fontSize: '22px', fontWeight: 300, flexShrink: 0, display: 'inline-block', transition: 'transform 0.3s', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>+</span>
              </button>
              <div style={{ maxHeight: open === i ? '1000px' : '0px', overflow: 'hidden', transition: 'max-height 0.7s cubic-bezier(0.25, 1, 0.5, 1)' }}>
                <p style={{ padding: '0 24px 24px', color: '#2D3748', fontSize: '15px', lineHeight: 1.7, margin: 0, fontFamily: "'Assistant', sans-serif", whiteSpace: 'pre-line', textAlign: 'justify' }}>{faq.a}</p>
              </div>
            </motion.div>
          ))}
        </div>
        <QuoteBlock text={f.quote.text} author={f.quote.author} dir={t.dir} />
      </div>
    </motion.div>
  );
}

function ViewForWho({ setView, t }) {
  const fw = t.forWho;
  const pStyle = { fontSize: '15px', color: '#1E2631', lineHeight: 1.9, margin: 0, fontFamily: "'Assistant', sans-serif", textAlign: t.dir === 'rtl' ? 'right' : 'left' };
  const labelStyle = { fontSize: '14px', fontWeight: 700, color: C.sage, margin: '12px 0 4px', fontFamily: "'Assistant', sans-serif", textAlign: 'center' };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div style={{ background: C.bg, padding: '60px 40px 80px', direction: t.dir }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '800px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: 400, color: C.green, textAlign: t.dir === 'rtl' ? 'right' : 'left', margin: '0 0 20px', fontFamily: "'Assistant', sans-serif" }}>
            {fw.title}
          </h2>
          <p style={{ ...pStyle, marginBottom: '16px', textAlign: 'justify' }}>{fw.intro1}</p>
          <p style={{ ...pStyle, marginBottom: '40px', textAlign: 'justify' }}>{fw.intro2}</p>

          <h3 style={{ fontSize: '18px', fontWeight: 700, color: C.green, margin: '0 0 8px', textAlign: 'center', fontFamily: "'Assistant', sans-serif" }}>{fw.challengesTitle}</h3>
          <p style={{ ...pStyle, fontWeight: 700, color: '#1E2631', marginBottom: '24px', textAlign: 'center' }}>{fw.challengesSub}</p>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
            {fw.challenges.map((c, idx) => (
              <motion.div key={c.num} initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: idx * 0.05 }}
                style={{ background: C.white, borderRadius: '14px', padding: '24px 28px', border: '1px solid rgba(22,34,47,0.08)' }}>
                <div style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <span style={{ background: C.sage, color: C.white, borderRadius: '50%', width: '26px', height: '26px', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '13px', fontWeight: 700, flexShrink: 0, marginTop: '2px', fontFamily: "'Assistant', sans-serif" }}>{c.num}</span>
                  <div style={{ flex: 1 }}>
                    <h4 style={{ fontSize: '16px', fontWeight: 700, color: C.green, margin: '0 0 8px', fontFamily: "'Assistant', sans-serif", textAlign: t.dir === 'rtl' ? 'right' : 'left' }}>{c.title}</h4>
                    <p style={{ ...pStyle, marginBottom: '10px', textAlign: 'justify' }}>{c.body}</p>
                    <p style={{ ...labelStyle }}>{fw.dailyLabel}</p>
                    <p style={{ ...pStyle, textAlign: 'justify' }}>{c.daily}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <p style={{ fontSize: '13px', color: '#5A6573', fontStyle: 'italic', margin: '6px 0 20px', textAlign: 'center', fontFamily: "'Assistant', sans-serif" }}>
            {fw.disclaimer}
          </p>

          <div style={{ background: C.white, borderRadius: '14px', padding: '20px 28px', border: '1px solid rgba(22,34,47,0.08)', marginTop: '0', textAlign: 'center' }}>
            <p style={{ fontSize: '15px', fontWeight: 700, color: '#1E2631', margin: 0, fontFamily: "'Assistant', sans-serif" }}>{fw.notFound}</p>
          </div>

          <div style={{ background: C.white, borderRadius: '14px', padding: '28px 28px', border: '1px solid rgba(22,34,47,0.08)', marginTop: '32px' }}>
            <h3 style={{ fontSize: '17px', fontWeight: 700, color: C.green, margin: '0 0 14px', fontFamily: "'Assistant', sans-serif", textAlign: 'center' }}>{fw.processTitle}</h3>
            <p style={{ ...pStyle, marginBottom: '12px' }}>{fw.process1}</p>
            <p style={{ ...pStyle }}>{fw.process2}</p>
          </div>

          <QuoteBlock text={fw.quote.text} author={fw.quote.author} dir={t.dir} />

          <div style={{ background: C.white, borderRadius: '16px', padding: '36px 28px', textAlign: 'center', marginTop: '32px', border: '1px solid rgba(22,34,47,0.08)' }}>
            <p style={{ fontSize: '15px', color: C.textMid, lineHeight: 1.9, margin: '0 0 24px', fontFamily: "'Assistant', sans-serif", textAlign: 'justify' }}>{fw.ctaText}</p>
            <button onClick={() => setView(6)} style={{ background: C.sage, color: C.white, border: 'none', borderRadius: '10px', padding: '14px 36px', fontSize: '16px', fontWeight: 700, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", ...tx }}>
              {fw.ctaBtn}
            </button>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ViewContact({ t }) {
  const [form, setForm] = useState({ name: '', email: '', phone: '', message: '' });
  const [errors, setErrors] = useState({});
  const [touched, setTouched] = useState({});
  const [sent, setSent] = useState(false);
  const [sending, setSending] = useState(false);
  const [sendError, setSendError] = useState(null);
  const c = t.contact;
  const isRtl = t.dir === 'rtl';

  const validate = (fields) => {
    const errs = {};
    if (!fields.name.trim()) errs.name = c.errRequired;
    const phoneClean = fields.phone.replace(/[\s\-\(\)]/g, '');
    if (!phoneClean) errs.phone = c.errRequired;
    else if (!/^[\+]?[0-9]{7,15}$/.test(phoneClean)) errs.phone = c.errPhone;
    if (fields.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(fields.email)) errs.email = c.errEmail;
    return errs;
  };

  const handleBlur = (key) => {
    setTouched(prev => ({ ...prev, [key]: true }));
    setErrors(validate(form));
  };

  const handleChange = (key, value) => {
    const updated = { ...form, [key]: value };
    setForm(updated);
    if (touched[key]) setErrors(validate(updated));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const allTouched = { name: true, phone: true, email: true, message: true };
    setTouched(allTouched);
    const errs = validate(form);
    setErrors(errs);
    if (Object.keys(errs).length > 0) return;
    setSending(true);
    setSendError(null);
    const res = await base44.functions.invoke('sendContactEmail', {
      name: form.name,
      email: form.email,
      phone: form.phone,
      message: form.message,
    });
    setSending(false);
    if (res.data?.success) {
      setSent(true);
    } else {
      setSendError(res.data?.error || 'שגיאה בשליחה, נסה שוב');
    }
  };

  const inputStyle = (key) => ({
    width: '100%',
    padding: '11px 14px',
    borderRadius: '8px',
    border: touched[key] && errors[key] ? '1.5px solid #C0392B' : `1.5px solid ${C.border}`,
    fontSize: '15px',
    fontFamily: "'Assistant', sans-serif",
    background: C.white,
    color: C.text,
    outline: 'none',
    boxSizing: 'border-box',
  });

  const errStyle = {
    fontSize: '12px',
    color: '#C0392B',
    marginTop: '5px',
    fontFamily: "'Assistant', sans-serif",
    textAlign: isRtl ? 'right' : 'left',
  };

  const labelStyle = {
    display: 'block',
    fontSize: '13px',
    color: C.textLight,
    marginBottom: '6px',
    fontWeight: 600,
    fontFamily: "'Assistant', sans-serif",
    textAlign: isRtl ? 'right' : 'left',
  };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div style={{ background: C.bg, padding: '60px 40px 80px', direction: t.dir }}>
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <h2 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: 400, color: C.green, margin: '0 0 40px', textAlign: isRtl ? 'right' : 'left', fontFamily: "'Assistant', sans-serif" }}>
            {c.title}
          </h2>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '32px', alignItems: 'start' }}>

            {/* Form card */}
            <div style={{ background: C.white, borderRadius: '16px', padding: '36px', boxShadow: '0 2px 16px rgba(44,58,46,0.07)', borderBottom: `3px solid ${C.sage}` }}>
              {sent ? (
                <div style={{ textAlign: 'center', padding: '32px 0' }}>
                  <div style={{ width: '56px', height: '56px', background: '#E8F5E9', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px', fontSize: '24px' }}>✓</div>
                  <p style={{ fontSize: '18px', color: C.green, fontWeight: 600, margin: '0 0 8px', fontFamily: "'Assistant', sans-serif" }}>{c.successTitle}</p>
                  <p style={{ fontSize: '14px', color: C.textLight, margin: 0, fontFamily: "'Assistant', sans-serif" }}>{c.successSub}</p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate style={{ display: 'flex', flexDirection: 'column', gap: '18px' }}>
                  {[
                    { key: 'name', label: c.nameLbl, type: 'text', placeholder: c.namePh, required: true },
                    { key: 'phone', label: c.phoneLbl, type: 'tel', placeholder: c.phonePh, required: true, dir: 'rtl' },
                    { key: 'email', label: c.emailLbl, type: 'email', placeholder: c.emailPh, required: false },
                  ].map(({ key, label, type, placeholder, required, dir }) => (
                    <div key={key}>
                      <label style={labelStyle}>
                        {label}{required && <span style={{ color: C.clay }}> *</span>}
                      </label>
                      <input
                        type={type}
                        placeholder={placeholder}
                        value={form[key]}
                        onChange={e => handleChange(key, e.target.value)}
                        onBlur={() => handleBlur(key)}
                        style={{ ...inputStyle(key), ...(dir ? { direction: dir } : {}) }}
                      />
                      {touched[key] && errors[key] && <p style={errStyle}>{errors[key]}</p>}
                    </div>
                  ))}
                  <div>
                    <label style={labelStyle}>{c.msgLbl}</label>
                    <textarea
                      rows={4}
                      placeholder={c.msgPh}
                      value={form.message}
                      onChange={e => handleChange('message', e.target.value)}
                      onBlur={() => handleBlur('message')}
                      style={{ ...inputStyle('message'), resize: 'vertical' }}
                    />
                    {touched.message && errors.message && <p style={errStyle}>{errors.message}</p>}
                  </div>
                  <button type="submit" disabled={sending}
                    style={{ background: C.clay, color: C.white, border: 'none', borderRadius: '10px', padding: '14px 0', fontSize: '15px', fontWeight: 700, cursor: sending ? 'not-allowed' : 'pointer', fontFamily: "'Assistant', sans-serif", opacity: sending ? 0.8 : 1, width: '100%', boxShadow: '0 4px 14px rgba(178,110,99,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '8px', ...tx }}>
                    {sending && (
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round" style={{ animation: 'spin 0.8s linear infinite' }}>
                        <path d="M21 12a9 9 0 1 1-6.219-8.56" />
                      </svg>
                    )}
                    {sending ? c.sending : c.send}
                  </button>
                  {sendError && (
                    <p style={{ color: '#C0392B', fontSize: '13px', textAlign: 'center', fontFamily: "'Assistant', sans-serif", margin: 0 }}>{sendError}</p>
                  )}
                  <style>{`@keyframes spin { from { transform: rotate(0deg); } to { transform: rotate(360deg); } }`}</style>
                </form>
              )}
            </div>

            {/* Right column */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>

              {/* Contact methods */}
              <div style={{ background: C.white, borderRadius: '16px', padding: '28px', boxShadow: '0 2px 16px rgba(44,58,46,0.07)', borderBottom: `3px solid ${C.sage}` }}>
                <p style={{ fontSize: '12px', fontWeight: 700, color: C.textLight, margin: '0 0 16px', fontFamily: "'Assistant', sans-serif", letterSpacing: '0.07em', textTransform: 'uppercase' }}>{c.contactMethodsLabel}</p>
                <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                  <a href="https://calendly.com/dorziv/checkin" target="_blank" rel="noopener noreferrer"
                    style={{ background: C.clay, color: C.white, borderRadius: '10px', padding: '14px 20px', fontSize: '15px', fontWeight: 600, textDecoration: 'none', fontFamily: "'Assistant', sans-serif", textAlign: 'center', display: 'block', boxShadow: '0 4px 14px rgba(178,110,99,0.25)', ...tx }}>
                    {c.calendlyBtn}
                  </a>
                  <a href="https://wa.me/972508451920" target="_blank" rel="noopener noreferrer"
                    style={{ background: 'transparent', color: C.green, border: `2px solid ${C.sage}`, borderRadius: '10px', padding: '14px 20px', fontSize: '15px', fontWeight: 600, textDecoration: 'none', fontFamily: "'Assistant', sans-serif", textAlign: 'center', display: 'block', ...tx }}>
                    {c.waBtn}
                  </a>
                </div>
              </div>

              {/* Location */}
              <div style={{ background: C.white, borderRadius: '16px', padding: '28px', boxShadow: '0 2px 16px rgba(44,58,46,0.07)', borderBottom: `3px solid ${C.sage}` }}>
                <p style={{ fontSize: '12px', fontWeight: 700, color: C.textLight, margin: '0 0 10px', fontFamily: "'Assistant', sans-serif", letterSpacing: '0.07em', textTransform: 'uppercase' }}>{c.locationLabel}</p>
                <p style={{ fontSize: '15px', color: C.textMid, lineHeight: 1.7, margin: '0 0 16px', fontFamily: "'Assistant', sans-serif", textAlign: isRtl ? 'right' : 'left' }}>
                  {c.locationText}
                </p>
                <div style={{ display: 'flex', gap: '10px' }}>
                  <a href="https://waze.com/ul/hsvbfhwdcu" target="_blank" rel="noopener noreferrer"
                    style={{ flex: 1, background: '#0066CC', color: C.white, border: 'none', borderRadius: '10px', padding: '12px 8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', fontFamily: "'Assistant', sans-serif", textAlign: 'center', display: 'block', ...tx }}>
                    🧭 Waze
                  </a>
                  <a href="https://maps.app.goo.gl/cVwskVfHNVyF8qPe6" target="_blank" rel="noopener noreferrer"
                    style={{ flex: 1, background: '#0B81F5', color: C.white, border: 'none', borderRadius: '10px', padding: '12px 8px', fontSize: '14px', fontWeight: 600, textDecoration: 'none', fontFamily: "'Assistant', sans-serif", textAlign: 'center', display: 'block', ...tx }}>
                    📍 Google Maps
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}

function ViewAccessibility({ t }) {
  const a = t.accessibility;
  const isRtl = t.dir === 'rtl';
  const pStyle = { fontSize: '15px', color: '#232B32', lineHeight: 1.55, margin: 0, fontFamily: "'Assistant', sans-serif", textAlign: isRtl ? 'right' : 'left' };
  const h3Style = { fontSize: '17px', fontWeight: 700, color: '#1E2631', margin: '0 0 10px', fontFamily: "'Assistant', sans-serif", textAlign: isRtl ? 'right' : 'left' };

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.6 }}>
      <div style={{ background: C.bg, padding: '60px 40px 80px', direction: t.dir }}>
        <div style={{ position: 'relative', zIndex: 1, maxWidth: '700px', margin: '0 auto' }}>
          <h1 style={{ fontSize: 'clamp(26px,5vw,40px)', fontWeight: 700, color: '#1E2631', textAlign: isRtl ? 'right' : 'left', margin: '0 0 20px', fontFamily: "'Assistant', sans-serif" }}>
            {a.title}
          </h1>

          {/* Section 1 - Physical access */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={h3Style}>{a.s1Title}</h3>
            <p style={{ ...pStyle, marginBottom: '8px' }}>{a.s1p1}</p>
            <p style={{ ...pStyle, marginBottom: '8px' }}>{a.s1p2}</p>
            <p style={{ ...pStyle }}>{a.s1p3}</p>
          </div>

          {/* Section 3 - Remote sessions */}
          <div style={{ marginBottom: '20px' }}>
            <h3 style={h3Style}>
              {a.s3TitleMain}{' '}
              <span style={{ textDecoration: 'underline' }}>{a.s3TitleSub}</span>
            </h3>
            <p style={{ ...pStyle, marginBottom: '8px' }}>{a.s3p1}</p>
            <p style={{ ...pStyle }}>{a.s3p2}</p>
          </div>

          {/* Special needs - terracotta box */}
          <div style={{ background: '#B26E63', borderRadius: '14px', padding: '24px 28px' }}>
            <p style={{ fontSize: '15px', color: '#F6F4F0', lineHeight: 1.65, margin: 0, fontFamily: "'Assistant', sans-serif", textAlign: isRtl ? 'right' : 'left' }}>{a.specialNeedsText}</p>
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
  const [lang, setLang] = useState('he');
  const t = content[lang];

  const viewComponents = [
    <ViewHome setView={setView} t={t} key="0" />,
    <ViewApproach t={t} key="1" />,
    <ViewForWho setView={setView} t={t} key="2" />,
    <ViewFAQ setView={setView} t={t} key="3" />,
    <ViewWritings t={t} key="4" />,
    <ViewAbout t={t} key="5" />,
    <ViewContact t={t} key="6" />,
    <ViewAccessibility t={t} key="7" />,
  ];

  return (
    <div style={{ fontFamily: "'Assistant', sans-serif", background: C.bg, minHeight: '100vh' }}>
      <Navbar view={view} setView={setView} lang={lang} setLang={setLang} t={t} />
      <div style={{ paddingTop: '64px' }}>
        {viewComponents[view]}
      </div>
    </div>
  );
}

function Navbar({ view, setView, lang, setLang, t }) {
  const location = useLocation();
  const navigate = useNavigate();
  const onBlog = location.pathname === '/blog';
  const [menuOpen, setMenuOpen] = useState(false);
  const isRtl = t.dir === 'rtl';

  const handleViewClick = (i) => {
    setMenuOpen(false);
    if (onBlog) {
      sessionStorage.setItem('targetView', i);
      navigate('/');
    } else {
      setView(i);
    }
  };

  const toggleLang = () => {
    setLang(l => l === 'he' ? 'en' : 'he');
    setMenuOpen(false);
  };

  return (
    <nav style={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 50, background: 'rgba(244,241,236,0.97)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.border}`, direction: t.dir, fontFamily: "'Assistant', sans-serif" }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px', padding: '0 20px' }}>
        {/* Logo */}
        <button onClick={() => handleViewClick(0)} style={{ background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0, fontWeight: 700, fontSize: '20px', color: C.green, fontFamily: 'Assistant, sans-serif' }}>
          {t.name}
        </button>

        {/* Desktop nav */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '4px', flex: 1, margin: '0 16px', flexWrap: 'nowrap', overflow: 'hidden' }} className="hidden-mobile">
          {t.navItems.map((v, i) => {
            const isActive = !onBlog && view === i;
            const active = isActive;
            return (
              <button key={i} onClick={() => handleViewClick(i)}
                style={{
                  fontSize: '13px',
                  fontWeight: active ? 600 : 400,
                  color: active ? C.white : C.textMid,
                  background: i === 6 && active ? C.sage : (i === 6 ? 'transparent' : (active ? C.sage : 'transparent')),
                  border: i === 6 ? `2px solid ${C.sage}` : 'none',
                  borderRadius: i === 6 ? '50px' : '8px',
                  padding: i === 6 ? '6px 14px' : '6px 8px',
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

        {/* Lang toggle desktop */}
        <button onClick={toggleLang} className="hidden-mobile"
          style={{ background: 'transparent', color: C.sage, border: `1.5px solid ${C.sage}`, borderRadius: '6px', padding: '4px 10px', fontSize: '13px', fontWeight: 700, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", letterSpacing: '0.05em', flexShrink: 0 }}>
          {t.langToggle}
        </button>

        {/* Mobile: contact button in center + hamburger on edge */}
        <div style={{ display: 'none', alignItems: 'center', gap: '8px', flex: 1, justifyContent: 'center' }} className="show-mobile">
          <button onClick={() => handleViewClick(6)}
            style={{ background: C.clay, color: C.white, border: 'none', borderRadius: '8px', padding: '8px 18px', fontSize: '14px', fontWeight: 600, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", minHeight: '40px', flexShrink: 0 }}>
            {t.navItems[6]}
          </button>
        </div>
        <button onClick={() => setMenuOpen(!menuOpen)}
          style={{ background: 'none', border: 'none', cursor: 'pointer', padding: '8px', display: 'none', flexDirection: 'column', gap: '5px', minHeight: '44px', minWidth: '44px', justifyContent: 'center', alignItems: 'center', flexShrink: 0 }}
          className="show-mobile">
          <span style={{ display: 'block', width: '22px', height: '2px', background: C.green, transition: 'all 0.3s', transform: menuOpen ? 'rotate(45deg) translate(5px,5px)' : 'none' }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: C.green, transition: 'all 0.3s', opacity: menuOpen ? 0 : 1 }} />
          <span style={{ display: 'block', width: '22px', height: '2px', background: C.green, transition: 'all 0.3s', transform: menuOpen ? 'rotate(-45deg) translate(5px,-5px)' : 'none' }} />
        </button>
      </div>

      <div style={{ maxHeight: menuOpen ? '700px' : '0', overflow: 'hidden', transition: 'max-height 0.4s ease', background: 'rgba(244,241,236,0.99)', borderTop: menuOpen ? `1px solid ${C.border}` : 'none' }} className="show-mobile-block">
        <div style={{ padding: '16px 20px 24px', display: 'flex', flexDirection: 'column', gap: '8px', alignItems: 'center' }}>
          {t.navItems.map((v, i) => {
            const isActive = !onBlog && view === i;
            const active = isActive;
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
          {/* Lang toggle at bottom of mobile menu */}
          <button onClick={toggleLang}
            style={{ marginTop: '8px', background: 'transparent', color: C.sage, border: `1.5px solid ${C.sage}`, borderRadius: '8px', padding: '12px 24px', fontSize: '15px', fontWeight: 700, cursor: 'pointer', fontFamily: "'Assistant', sans-serif", width: '100%', minHeight: '48px' }}>
            {t.langToggle} — {lang === 'he' ? 'Switch to English' : 'עבור לעברית'}
          </button>
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
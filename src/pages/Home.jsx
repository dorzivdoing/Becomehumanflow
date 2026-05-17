import { useState } from "react";
import Navbar from "@/components/clinic/Navbar";
import HeroSection from "@/components/clinic/HeroSection";
import QuoteSection from "@/components/clinic/QuoteSection";
import ServicesSection from "@/components/clinic/ServicesSection";
import ApproachSection from "@/components/clinic/ApproachSection";
import AboutSection from "@/components/clinic/AboutSection";
import BookingSection from "@/components/clinic/BookingSection";
import ContactSection from "@/components/clinic/ContactSection";
import Footer from "@/components/clinic/Footer";

const faqs = [
  {
    q: "הגוף שלי דרוך, הלב מאיץ או שיש לי חרדה, למרות שהבדיקות הרפואיות תקינות. מה קורה לי?",
    a: "לפי גישת הביוסינתזה (פסיכותרפיה גופנית מבוססת מדע), חוויות חיים, מתחים ומשברים שלא עובדו במלואם אינם נעלמים; הם נשמרים כזיכרון תאי וכדפוסי מתח כרוניים בשרירים ובמערכת העצבים. כאשר ישנו נתק בין התודעה לבין הגוף, הגוף מתחיל 'לדבר' דרך סימפטומים כמו חרדה, חוסר שקט או עייפות כרונית. הטיפול מסייע לנו לקרוא את המפה הגופנית הזו ולשחרר את החסימות הללו מהשורש.",
  },
  {
    q: "מה זה בעצם ביוסינתזה, ואיך נראה מפגש כזה בפועל?",
    a: "משמעות המילה ביוסינתזה היא 'אינטגרציה של החיים'. הגישה, שפותחה על ידי דייוויד בואדלה ומוכרת על ידי האיגוד האירופי לפסיכותרפיה (EAP), מתמקדת בחיבור מחדש בין שלושה זרמי חיים: המחשבות, הרגשות, והגוף הפיזי. מפגש טיפולי משלב שיחה מעמיקה יחד עם כלים סומטיים עדינים – עבודה עם נשימה, קשב תחושתי, ויוגה טיפולית.",
  },
  {
    q: "אני מפחד/ת לפתוח משקעים מהעבר או לחוות הצפה רגשית. איך שומרים עליי בטיפול?",
    a: "אחד העקרונות המרכזיים בביוסינתזה הוא קרקוע (Grounding) וויסות עצמי. במסע הטיפולי אנחנו לעולם לא רצים אל תוך הטראומה בצורה שתציף אותך. שלב הבסיס מוקדש לבניית משאבים, חיזוק העוגנים הגופניים והנשימתיים, ויצירת מרחב בטוח ביני לבינך.",
  },
  {
    q: "איך נראה הצעד הראשון שלי לקראת תחילת הטיפול?",
    a: "הצעד הראשון פשוט ומבוקר לחלוטין. אני מזמין אותך לתאם שיחת הכרות טלפונית קצרה (15 דקות, ללא עלות) ישירות דרך היומן כאן באתר. בשיחה נבין יחד מה מביא אותך, נבדוק את ההתאמה לגישה, ונחליט יחד על המשך הדרך.",
  },
];

function FAQSection() {
  const [open, setOpen] = useState(null);
  const toggle = (i) => setOpen(open === i ? null : i);
  return (
    <section style={{ background: '#F2EFE9', padding: '80px 40px', direction: 'rtl', fontFamily: 'inherit' }}>
      <div style={{ maxWidth: '720px', margin: '0 auto' }}>
        <h2 style={{ fontSize: 'clamp(22px,4vw,32px)', fontWeight: 500, color: '#2C3E50', textAlign: 'center', margin: '0 0 12px' }}>
          שאלות נפוצות
        </h2>
        <p style={{ textAlign: 'center', color: '#5D6D7E', fontSize: '16px', lineHeight: 1.7, margin: '0 0 48px' }}>
          כל מה שרצית לדעת לפני שמתחילים
        </p>
        {faqs.map((faq, i) => (
          <div key={i} style={{ background: '#FFFFFF', borderRadius: '12px', border: open === i ? '1.5px solid #E6B0AA' : '1.5px solid #e8e4de', marginBottom: '12px', overflow: 'hidden' }}>
            <button onClick={() => toggle(i)} style={{ width: '100%', display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '20px 24px', background: 'none', border: 'none', cursor: 'pointer', textAlign: 'right', gap: '16px' }}>
              <span style={{ fontSize: '16px', fontWeight: 500, color: '#2C3E50', lineHeight: 1.5, flex: 1 }}>
                {faq.q}
              </span>
              <span style={{ color: '#E6B0AA', fontSize: '22px', fontWeight: 300, flexShrink: 0, transition: 'transform 0.2s', display: 'inline-block', transform: open === i ? 'rotate(45deg)' : 'rotate(0deg)' }}>
                +
              </span>
            </button>
            <div style={{ maxHeight: open === i ? '400px' : '0px', overflow: 'hidden', transition: 'max-height 0.35s ease' }}>
              <p style={{ padding: '0 24px 24px', color: '#5D6D7E', fontSize: '15px', lineHeight: 1.8, margin: 0 }}>
                {faq.a}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default function Home() {
  return (
    <div className="font-heebo" dir="rtl">
      <Navbar />
      <HeroSection />
      <QuoteSection />
      <ServicesSection />
      <ApproachSection />
      <AboutSection />
      <BookingSection />
      <FAQSection />
      <ContactSection />
      <Footer />
    </div>
  );
}
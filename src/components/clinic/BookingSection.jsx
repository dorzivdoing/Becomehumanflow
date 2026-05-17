const s = {
  section: { background:'#F2EFE9', padding:'80px 40px', textAlign:'center', direction:'rtl' },
  h2: { fontSize:'clamp(20px,4vw,28px)', fontWeight:500, color:'#2C3E50', margin:'0 0 16px', lineHeight:1.4 },
  p: { fontSize:'16px', color:'#4A6278', lineHeight:1.75, maxWidth:'480px', margin:'0 auto 36px' },
  row: { display:'flex', justifyContent:'center', gap:'14px', flexWrap:'wrap' },
  btn1: { background:'#E6B0AA', color:'#2C3E50', border:'none', borderRadius:'10px', padding:'14px 26px', fontSize:'15px', fontWeight:500, textDecoration:'none', whiteSpace:'nowrap' },
  btn2: { background:'transparent', color:'#2C3E50', border:'1.5px solid #2C3E50', borderRadius:'10px', padding:'14px 26px', fontSize:'15px', fontWeight:500, textDecoration:'none', whiteSpace:'nowrap' },
  note: { marginTop:'24px', fontSize:'13px', color:'#8a9aaa' },
};

export default function BookingSection() {
  return (
    <section style={s.section}>
      <h2 style={s.h2}>תיאום שיחת הכרות קצרה (ללא עלות)</h2>
      <p style={s.p}>בחרו מועד שנוח לכם מתוך זמני הפנאי שלי ביומן — ואני אחזור אליכם בשיחת טלפון קצרה.</p>
      <div style={s.row}>
        <a href="https://calendly.com/dorziv/checkin" target="_blank" rel="noopener noreferrer" style={s.btn1}>לחצו לבחירת מועד ביומן</a>
        <a href="https://wa.me/9720508451920" target="_blank" rel="noopener noreferrer" style={s.btn2}>מעדיפים וואטסאפ? דברו איתי</a>
      </div>
      <p style={s.note}>השיחה קצרה וללא מחויבות</p>
    </section>
  );
}
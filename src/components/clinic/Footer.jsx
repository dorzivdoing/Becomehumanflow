export default function Footer() {
  return (
    <footer style={{ background: '#3D1F0F', padding: '28px 24px', textAlign: 'center', direction: 'rtl' }}>
      <p style={{ color: 'rgba(249,238,226,0.35)', fontSize: '13px', fontWeight: 300, margin: 0, fontFamily: "'Assistant', sans-serif" }}>
        © {new Date().getFullYear()} דור זיו - פסיכותרפיה גופנית
      </p>
    </footer>
  );
}
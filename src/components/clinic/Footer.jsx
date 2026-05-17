export default function Footer() {
  return (
    <footer style={{ background: '#4A1E0E', padding: '32px 24px', textAlign: 'center' }}>
      <p style={{ color: 'rgba(249,237,224,0.35)', fontSize: '13px', fontWeight: 300, margin: 0, fontFamily: "'Assistant', sans-serif" }}>
        © {new Date().getFullYear()} דור זיו - פסיכותרפיה גופנית.
      </p>
    </footer>
  );
}
import { useNavigate, useLocation } from "react-router-dom";

const C = {
  bg: '#EEE9E1',
  green: '#3B4A3C',
  sage: '#6B8F71',
  textMid: '#5A6B5C',
  border: '#C4CFC5',
  white: '#FDFBF8',
};

const navItems = ['בית', 'אודות', 'גישה', 'למי מתאים?', 'השראה ומחשבות', 'שאלות', 'קשר'];

export default function Navbar({ view, setView }) {
  const location = useLocation();
  const navigate = useNavigate();
  const onBlog = location.pathname === '/blog';

  const handleViewClick = (i) => {
    if (onBlog) {
      sessionStorage.setItem('targetView', i);
      navigate('/');
    } else {
      setView && setView(i);
    }
  };

  return (
    <nav style={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 50, background: 'rgba(238,233,225,0.97)', backdropFilter: 'blur(12px)', borderBottom: `1px solid ${C.border}`, padding: '0 40px', direction: 'rtl', fontFamily: "'Assistant', sans-serif" }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <button onClick={() => handleViewClick(0)} style={{ background: 'none', border: 'none', cursor: 'pointer', flexShrink: 0 }}>
          <img src="https://media.base44.com/images/public/6a098e797170ea9e67f23db4/ada1e6b9f_Gemini_Generated_Image_yh6cbiyh6cbiyh6c-removebg-preview.png" alt="לוגו" style={{ width: '44px', height: '44px', objectFit: 'contain' }} />
        </button>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1, margin: '0 32px' }}>
          {navItems.map((v, i) => {
            const isActive = !onBlog && view === i;
            const isBlogActive = onBlog && i === 4;
            const active = isActive || isBlogActive;
            return (
              <button key={i} onClick={() => handleViewClick(i)} style={{ fontSize: '14px', fontWeight: active ? 600 : 400, color: active ? C.white : C.textMid, background: active ? C.sage : 'transparent', border: 'none', borderRadius: '8px', padding: '6px 14px', cursor: 'pointer', transition: 'all 0.3s', fontFamily: "'Assistant', sans-serif" }}>
                {v}
              </button>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
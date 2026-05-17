import { useNavigate, useLocation } from "react-router-dom";

export default function Navbar({ view, setView }) {
  const location = useLocation();
  const navigate = useNavigate();
  const onBlog = location.pathname === '/blog';

  const navItems = ['בית', 'אודות', 'גישה', 'השראה ומחשבות', 'שאלות', 'קשר'];

  const handleViewClick = (i) => {
    if (onBlog) {
      sessionStorage.setItem('targetView', i);
      navigate('/');
    } else {
      setView && setView(i);
    }
  };

  return (
    <nav style={{ position: 'fixed', top: 0, right: 0, left: 0, zIndex: 50, background: 'rgba(246,244,240,0.97)', backdropFilter: 'blur(12px)', borderBottom: '1px solid #E8E4DE', padding: '0 40px', direction: 'rtl', fontFamily: "'Assistant', sans-serif" }}>
      <div style={{ maxWidth: '1100px', margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '64px' }}>
        <button onClick={() => handleViewClick(0)} style={{ fontWeight: 700, fontSize: '17px', color: '#16222F', background: 'none', border: 'none', cursor: 'pointer', fontFamily: "'Assistant', sans-serif", flexShrink: 0 }}>
          להיות אדם
        </button>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flex: 1, margin: '0 32px' }}>
          {navItems.map((v, i) => {
            const isActive = !onBlog && view === i;
            const isBlogActive = onBlog && i === 3;
            return (
              <button key={i} onClick={() => handleViewClick(i)} style={{ fontSize: '14px', fontWeight: (isActive || isBlogActive) ? 600 : 400, color: (isActive || isBlogActive) ? '#B26E63' : '#444F5A', background: (isActive || isBlogActive) ? 'rgba(178,110,99,0.1)' : 'transparent', border: 'none', borderRadius: '8px', padding: '6px 14px', cursor: 'pointer', transition: 'all 0.3s', fontFamily: "'Assistant', sans-serif" }}>
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
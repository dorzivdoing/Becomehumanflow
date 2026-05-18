import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Link } from "react-router-dom";
import Navbar from "@/components/clinic/Navbar";
import Footer from "@/components/clinic/Footer";
import { motion } from "framer-motion";
import { Clock, Tag } from "lucide-react";

const C = {
  bg: '#EEE9E1',
  white: '#FDFBF8',
  cream: '#F5F1EB',
  green: '#3B4A3C',
  sage: '#6B8F71',
  sageMid: '#4F6B54',
  sageLight: 'rgba(107,143,113,0.10)',
  text: '#3B4A3C',
  textMid: '#5A6B5C',
  border: '#C4CFC5',
};

const CATEGORIES = ["הכל", "מחשבות", "כתבים", "מוזיקה", "אמנות", "שירה"];

export default function Blog() {
  const [activeCategory, setActiveCategory] = useState("הכל");

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["blog-posts"],
    queryFn: () => base44.entities.BlogPost.filter({ status: "published" }, "-created_date"),
  });

  const filtered = activeCategory === "הכל"
    ? posts
    : posts.filter(p => p.category === activeCategory);

  return (
    <div style={{ fontFamily: "'Assistant', sans-serif", minHeight: '100vh', background: C.bg, direction: 'rtl' }}>
      <Navbar />

      {/* Header */}
      <div style={{ paddingTop: '120px', paddingBottom: '64px', paddingRight: '40px', paddingLeft: '40px', background: C.cream, textAlign: 'center' }}>
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p style={{ fontSize: '12px', color: C.sage, fontWeight: 600, letterSpacing: '0.1em', textTransform: 'uppercase', marginBottom: '12px', fontFamily: "'Assistant', sans-serif" }}>
            מחשבות מהקליניקה
          </p>
          <h1 style={{ fontSize: 'clamp(32px,5vw,52px)', fontWeight: 700, color: C.green, margin: '0 0 16px', fontFamily: "'Assistant', sans-serif" }}>
            השראה ומחשבות
          </h1>
          <div style={{ width: '40px', height: '2px', background: C.sage, margin: '0 auto 20px', opacity: 0.6 }} />
          <p style={{ fontSize: '16px', color: C.textMid, lineHeight: 1.85, maxWidth: '500px', margin: '0 auto', fontFamily: "'Assistant', sans-serif" }}>
            מאמרים, תובנות וחוויות מתחום הביוסינתזה, הגוף, והנפש – לקריאה, לעיון, ולהנחת זרעים.
          </p>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div style={{ position: 'sticky', top: '64px', zIndex: 30, background: 'rgba(238,233,225,0.95)', backdropFilter: 'blur(8px)', borderBottom: `1px solid ${C.border}`, padding: '16px 40px' }}>
        <div style={{ display: 'flex', gap: '10px', flexWrap: 'wrap', justifyContent: 'center' }}>
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              style={{
                padding: '8px 18px',
                borderRadius: '20px',
                fontSize: '13px',
                fontWeight: activeCategory === cat ? 600 : 400,
                fontFamily: "'Assistant', sans-serif",
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: activeCategory === cat ? C.sage : C.white,
                color: activeCategory === cat ? C.white : C.textMid,
                border: activeCategory === cat ? 'none' : `1px solid ${C.border}`,
              }}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '64px 40px' }}>
        {isLoading ? (
          <div style={{ display: 'flex', justifyContent: 'center', padding: '80px 0' }}>
            <div style={{ width: '32px', height: '32px', border: `3px solid ${C.sageLight}`, borderTop: `3px solid ${C.sage}`, borderRadius: '50%', animation: 'spin 1s linear infinite' }} />
          </div>
        ) : filtered.length === 0 ? (
          <div style={{ textAlign: 'center', padding: '80px 0', color: C.textMid, fontSize: '17px', fontFamily: "'Assistant', sans-serif" }}>
            אין מאמרים בקטגוריה זו עדיין.
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', gap: '28px' }}>
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={`/blog/${post.slug || post.id}`} style={{ display: 'block', background: C.white, borderRadius: '16px', overflow: 'hidden', boxShadow: '0 2px 16px rgba(44,58,46,0.07)', textDecoration: 'none', transition: 'all 0.3s', height: '100%' }}>
                  <div style={{ height: '180px', background: `linear-gradient(135deg, ${C.sageLight}, rgba(107,143,113,0.05))`, overflow: 'hidden', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {post.cover_image_url ? (
                      <img src={post.cover_image_url} alt={post.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                    ) : (
                      <div style={{ fontSize: '40px', opacity: 0.3 }}>🌿</div>
                    )}
                  </div>
                  <div style={{ padding: '24px' }}>
                    {post.category && (
                      <span style={{ display: 'inline-block', background: C.sageLight, color: C.sageMid, fontSize: '12px', fontWeight: 600, padding: '4px 12px', borderRadius: '20px', marginBottom: '12px', fontFamily: "'Assistant', sans-serif" }}>
                        {post.category}
                      </span>
                    )}
                    <h2 style={{ fontSize: '18px', fontWeight: 600, color: C.green, margin: '0 0 10px', lineHeight: 1.4, fontFamily: "'Assistant', sans-serif" }}>
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p style={{ fontSize: '14px', color: C.textMid, lineHeight: 1.75, margin: '0 0 16px', fontFamily: "'Assistant', sans-serif", display: '-webkit-box', WebkitLineClamp: 3, WebkitBoxOrient: 'vertical', overflow: 'hidden' }}>
                        {post.excerpt}
                      </p>
                    )}
                    <div style={{ display: 'flex', alignItems: 'center', gap: '16px', color: C.textMid, fontSize: '12px', opacity: 0.7 }}>
                      {post.read_time_minutes && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: "'Assistant', sans-serif" }}>
                          <Clock size={12} />
                          {post.read_time_minutes} דקות קריאה
                        </span>
                      )}
                      {post.tags?.length > 0 && (
                        <span style={{ display: 'flex', alignItems: 'center', gap: '4px', fontFamily: "'Assistant', sans-serif" }}>
                          <Tag size={12} />
                          {post.tags.slice(0, 2).join(", ")}
                        </span>
                      )}
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}
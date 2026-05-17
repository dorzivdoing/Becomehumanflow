import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { Link } from "react-router-dom";
import Navbar from "@/components/clinic/Navbar";
import Footer from "@/components/clinic/Footer";
import { motion } from "framer-motion";
import { Clock, Tag } from "lucide-react";

const CATEGORIES = ["הכל", "ביוסינתזה", "יוגה טיפולית", "גוף ונפש", "חרדה ודיכאון", "צמיחה אישית", "מחשבות ותובנות"];

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
    <div className="font-heebo min-h-screen bg-linen" dir="rtl">
      <Navbar />

      {/* Header */}
      <div className="pt-32 pb-16 px-6 md:px-16 lg:px-28 bg-white text-center">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>
          <p className="text-rose font-medium tracking-widest text-sm uppercase mb-3">מחשבות מהקליניקה</p>
          <h1 className="text-5xl md:text-6xl font-bold text-navy mb-5">הבלוג</h1>
          <div className="w-12 h-0.5 bg-rose mx-auto mb-6"></div>
          <p className="text-slate text-lg font-light max-w-xl mx-auto leading-relaxed">
            מאמרים, תובנות וחוויות מתחום הביוסינתזה, הגוף, והנפש – לקריאה, לעיון, ולהנחת זרעים.
          </p>
        </motion.div>
      </div>

      {/* Category Filter */}
      <div className="sticky top-16 z-30 bg-linen/90 backdrop-blur-sm border-b border-border py-4 px-6 md:px-16 lg:px-28">
        <div className="flex gap-3 flex-wrap justify-center">
          {CATEGORIES.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all duration-200 ${
                activeCategory === cat
                  ? "bg-navy text-white shadow-sm"
                  : "bg-white text-slate hover:bg-rose/10 hover:text-navy border border-border"
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* Posts Grid */}
      <div className="max-w-6xl mx-auto px-6 md:px-16 lg:px-28 py-16">
        {isLoading ? (
          <div className="flex justify-center py-24">
            <div className="w-8 h-8 border-4 border-rose/30 border-t-rose rounded-full animate-spin"></div>
          </div>
        ) : filtered.length === 0 ? (
          <div className="text-center py-24 text-slate font-light text-lg">
            אין מאמרים בקטגוריה זו עדיין.
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filtered.map((post, i) => (
              <motion.div
                key={post.id}
                initial={{ opacity: 0, y: 24 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <Link to={`/blog/${post.slug || post.id}`} className="group block bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 h-full">
                  {/* Cover image */}
                  <div className="h-48 bg-gradient-to-br from-rose/20 to-slate/10 overflow-hidden">
                    {post.cover_image_url ? (
                      <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center text-4xl opacity-30">🌿</div>
                    )}
                  </div>
                  <div className="p-6">
                    <span className="inline-block bg-rose/15 text-rose text-xs font-medium px-3 py-1 rounded-full mb-3">
                      {post.category}
                    </span>
                    <h2 className="text-navy text-xl font-bold mb-3 leading-snug group-hover:text-rose transition-colors duration-200">
                      {post.title}
                    </h2>
                    {post.excerpt && (
                      <p className="text-slate text-sm font-light leading-relaxed mb-4 line-clamp-3">
                        {post.excerpt}
                      </p>
                    )}
                    <div className="flex items-center gap-4 text-slate/60 text-xs mt-auto">
                      {post.read_time_minutes && (
                        <span className="flex items-center gap-1">
                          <Clock className="w-3 h-3" />
                          {post.read_time_minutes} דקות קריאה
                        </span>
                      )}
                      {post.tags?.length > 0 && (
                        <span className="flex items-center gap-1">
                          <Tag className="w-3 h-3" />
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
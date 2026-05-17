import { useQuery } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { useParams, Link } from "react-router-dom";
import Navbar from "@/components/clinic/Navbar";
import Footer from "@/components/clinic/Footer";
import { motion } from "framer-motion";
import { Clock, Tag, ArrowRight } from "lucide-react";
import ReactMarkdown from "react-markdown";

export default function BlogPostPage() {
  const { slug } = useParams();

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["blog-post", slug],
    queryFn: () => base44.entities.BlogPost.list(),
  });

  const post = posts.find(p => p.slug === slug || p.id === slug);

  const whatsappLink = "https://wa.me/972508451920";

  if (isLoading) {
    return (
      <div className="min-h-screen bg-linen flex items-center justify-center font-heebo" dir="rtl">
        <div className="w-8 h-8 border-4 border-rose/30 border-t-rose rounded-full animate-spin"></div>
      </div>
    );
  }

  if (!post) {
    return (
      <div className="min-h-screen bg-linen flex flex-col items-center justify-center font-heebo text-navy" dir="rtl">
        <p className="text-xl font-light mb-4">המאמר לא נמצא</p>
        <Link to="/blog" className="text-rose hover:underline">חזרה לבלוג</Link>
      </div>
    );
  }

  return (
    <div className="font-heebo min-h-screen bg-linen" dir="rtl">
      <Navbar />

      {/* Cover */}
      <div className="h-72 md:h-96 bg-gradient-to-br from-rose/20 to-slate/10 overflow-hidden mt-16">
        {post.cover_image_url ? (
          <img src={post.cover_image_url} alt={post.title} className="w-full h-full object-cover" />
        ) : (
          <div className="w-full h-full flex items-center justify-center text-8xl opacity-20">🌿</div>
        )}
      </div>

      {/* Article */}
      <div className="max-w-3xl mx-auto px-6 md:px-8 py-16">
        <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.7 }}>

          {/* Back */}
          <Link to="/blog" className="inline-flex items-center gap-2 text-slate text-sm font-light hover:text-rose transition-colors mb-8">
            <ArrowRight className="w-4 h-4" />
            כל המאמרים
          </Link>

          <span className="inline-block bg-rose/15 text-rose text-xs font-medium px-3 py-1 rounded-full mb-5">
            {post.category}
          </span>

          <h1 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-snug">
            {post.title}
          </h1>

          <div className="flex items-center gap-5 text-slate/60 text-sm font-light mb-8 pb-8 border-b border-border">
            {post.read_time_minutes && (
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                {post.read_time_minutes} דקות קריאה
              </span>
            )}
            {post.tags?.length > 0 && (
              <span className="flex items-center gap-1.5">
                <Tag className="w-4 h-4" />
                {post.tags.join(", ")}
              </span>
            )}
          </div>

          {/* Content */}
          <div className="prose prose-lg max-w-none text-navy/80 leading-relaxed
            prose-headings:text-navy prose-headings:font-bold
            prose-p:font-light prose-p:leading-loose
            prose-strong:text-navy prose-strong:font-semibold
            prose-blockquote:border-r-4 prose-blockquote:border-rose prose-blockquote:border-l-0 prose-blockquote:pr-5 prose-blockquote:pl-0 prose-blockquote:text-slate prose-blockquote:italic
          ">
            <ReactMarkdown>{post.content}</ReactMarkdown>
          </div>

          {/* CTA */}
          <div className="mt-16 bg-navy rounded-3xl p-10 text-center">
            <p className="text-white/80 text-lg font-light leading-relaxed mb-6">
              קראת ומרגיש/ה שמשהו נגע בך? מוזמן/ת ליצור קשר ולבדוק התאמה.
            </p>
            <a
              href={whatsappLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 bg-rose text-white px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all duration-300"
            >
              דברו איתי בווטסאפ
            </a>
          </div>

          {/* Tags */}
          {post.tags?.length > 0 && (
            <div className="mt-10 flex flex-wrap gap-2">
              {post.tags.map(tag => (
                <span key={tag} className="px-4 py-1.5 rounded-full bg-white border border-border text-slate text-sm font-light">
                  #{tag}
                </span>
              ))}
            </div>
          )}
        </motion.div>
      </div>

      <Footer />
    </div>
  );
}
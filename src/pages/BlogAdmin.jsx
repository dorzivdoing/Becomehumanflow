import { useState } from "react";
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { base44 } from "@/api/base44Client";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Pencil, Trash2, Eye, EyeOff, X } from "lucide-react";
import { Link } from "react-router-dom";

const CATEGORIES = ["ביוסינתזה", "יוגה טיפולית", "גוף ונפש", "חרדה ודיכאון", "צמיחה אישית", "מחשבות ותובנות"];

const emptyPost = {
  title: "", slug: "", excerpt: "", content: "",
  category: "ביוסינתזה", tags: [], cover_image_url: "",
  status: "draft", read_time_minutes: 5,
};

export default function BlogAdmin() {
  const qc = useQueryClient();
  const [editing, setEditing] = useState(null); // null = list, {} = new/edit form
  const [tagsInput, setTagsInput] = useState("");

  const { data: posts = [], isLoading } = useQuery({
    queryKey: ["blog-posts-admin"],
    queryFn: () => base44.entities.BlogPost.list("-created_date"),
  });

  const saveMutation = useMutation({
    mutationFn: (post) =>
      post.id
        ? base44.entities.BlogPost.update(post.id, post)
        : base44.entities.BlogPost.create(post),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["blog-posts-admin"] }); qc.invalidateQueries({ queryKey: ["blog-posts"] }); setEditing(null); },
  });

  const deleteMutation = useMutation({
    mutationFn: (id) => base44.entities.BlogPost.delete(id),
    onSuccess: () => { qc.invalidateQueries({ queryKey: ["blog-posts-admin"] }); qc.invalidateQueries({ queryKey: ["blog-posts"] }); },
  });

  const togglePublish = (post) => {
    saveMutation.mutate({ ...post, status: post.status === "published" ? "draft" : "published" });
  };

  const handleSave = () => {
    const tags = tagsInput ? tagsInput.split(",").map(t => t.trim()).filter(Boolean) : editing.tags || [];
    saveMutation.mutate({ ...editing, tags });
  };

  const openNew = () => { setEditing({ ...emptyPost }); setTagsInput(""); };
  const openEdit = (post) => { setEditing({ ...post }); setTagsInput((post.tags || []).join(", ")); };

  return (
    <div className="font-heebo min-h-screen bg-linen" dir="rtl">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Header */}
        <div className="flex items-center justify-between mb-10">
          <div>
            <h1 className="text-3xl font-bold text-navy">ניהול בלוג</h1>
            <p className="text-slate font-light text-sm mt-1">{posts.length} מאמרים סה"כ</p>
          </div>
          <div className="flex gap-3">
            <Link to="/blog" className="px-5 py-2.5 rounded-full border border-border text-slate text-sm font-medium hover:bg-white transition-colors">
              הבלוג הציבורי
            </Link>
            <button
              onClick={openNew}
              className="inline-flex items-center gap-2 bg-navy text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-opacity-90 transition-all"
            >
              <Plus className="w-4 h-4" />
              מאמר חדש
            </button>
          </div>
        </div>

        {/* Post List */}
        {!editing && (
          isLoading ? (
            <div className="flex justify-center py-24">
              <div className="w-8 h-8 border-4 border-rose/30 border-t-rose rounded-full animate-spin"></div>
            </div>
          ) : posts.length === 0 ? (
            <div className="text-center py-24 text-slate font-light">
              <p className="text-5xl mb-4">✍️</p>
              <p className="text-xl">עדיין אין מאמרים. צור את הראשון!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {posts.map((post) => (
                <motion.div
                  key={post.id}
                  initial={{ opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="bg-white rounded-2xl p-6 flex items-start justify-between gap-4 shadow-sm"
                >
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-3 mb-1 flex-wrap">
                      <span className={`text-xs px-2.5 py-0.5 rounded-full font-medium ${post.status === "published" ? "bg-green-100 text-green-700" : "bg-slate/10 text-slate"}`}>
                        {post.status === "published" ? "פורסם" : "טיוטה"}
                      </span>
                      <span className="text-xs text-rose bg-rose/10 px-2.5 py-0.5 rounded-full">{post.category}</span>
                    </div>
                    <h3 className="text-navy font-semibold text-lg truncate">{post.title}</h3>
                    {post.excerpt && <p className="text-slate text-sm font-light mt-1 line-clamp-1">{post.excerpt}</p>}
                  </div>
                  <div className="flex items-center gap-2 flex-shrink-0">
                    <button onClick={() => togglePublish(post)} title={post.status === "published" ? "הסר פרסום" : "פרסם"} className="p-2 rounded-full hover:bg-linen text-slate hover:text-navy transition-colors">
                      {post.status === "published" ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                    </button>
                    <button onClick={() => openEdit(post)} className="p-2 rounded-full hover:bg-linen text-slate hover:text-navy transition-colors">
                      <Pencil className="w-4 h-4" />
                    </button>
                    <button onClick={() => deleteMutation.mutate(post.id)} className="p-2 rounded-full hover:bg-red-50 text-slate hover:text-red-500 transition-colors">
                      <Trash2 className="w-4 h-4" />
                    </button>
                  </div>
                </motion.div>
              ))}
            </div>
          )
        )}

        {/* Edit / New Form */}
        <AnimatePresence>
          {editing && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 20 }}
              className="bg-white rounded-3xl p-8 shadow-sm"
            >
              <div className="flex items-center justify-between mb-8">
                <h2 className="text-2xl font-bold text-navy">{editing.id ? "עריכת מאמר" : "מאמר חדש"}</h2>
                <button onClick={() => setEditing(null)} className="p-2 rounded-full hover:bg-linen text-slate transition-colors">
                  <X className="w-5 h-5" />
                </button>
              </div>

              <div className="space-y-5">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-sm font-medium mb-2">כותרת *</label>
                    <input
                      value={editing.title}
                      onChange={e => setEditing({ ...editing, title: e.target.value })}
                      className="w-full border border-border rounded-xl px-4 py-3 text-navy font-light focus:outline-none focus:border-rose transition-colors"
                      placeholder="כותרת המאמר"
                    />
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-medium mb-2">Slug (URL)</label>
                    <input
                      value={editing.slug}
                      onChange={e => setEditing({ ...editing, slug: e.target.value })}
                      className="w-full border border-border rounded-xl px-4 py-3 text-navy font-light focus:outline-none focus:border-rose transition-colors"
                      placeholder="my-article-slug"
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                  <div>
                    <label className="block text-navy text-sm font-medium mb-2">קטגוריה</label>
                    <select
                      value={editing.category}
                      onChange={e => setEditing({ ...editing, category: e.target.value })}
                      className="w-full border border-border rounded-xl px-4 py-3 text-navy font-light focus:outline-none focus:border-rose transition-colors bg-white"
                    >
                      {CATEGORIES.map(c => <option key={c}>{c}</option>)}
                    </select>
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-medium mb-2">סטטוס</label>
                    <select
                      value={editing.status}
                      onChange={e => setEditing({ ...editing, status: e.target.value })}
                      className="w-full border border-border rounded-xl px-4 py-3 text-navy font-light focus:outline-none focus:border-rose transition-colors bg-white"
                    >
                      <option value="draft">טיוטה</option>
                      <option value="published">פורסם</option>
                    </select>
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-medium mb-2">זמן קריאה (דקות)</label>
                    <input
                      type="number"
                      value={editing.read_time_minutes}
                      onChange={e => setEditing({ ...editing, read_time_minutes: Number(e.target.value) })}
                      className="w-full border border-border rounded-xl px-4 py-3 text-navy font-light focus:outline-none focus:border-rose transition-colors"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-navy text-sm font-medium mb-2">תקציר</label>
                  <textarea
                    value={editing.excerpt}
                    onChange={e => setEditing({ ...editing, excerpt: e.target.value })}
                    rows={2}
                    className="w-full border border-border rounded-xl px-4 py-3 text-navy font-light focus:outline-none focus:border-rose transition-colors resize-none"
                    placeholder="2-3 משפטים שיופיעו בכרטיס המאמר"
                  />
                </div>

                <div>
                  <label className="block text-navy text-sm font-medium mb-2">תוכן המאמר * (Markdown)</label>
                  <textarea
                    value={editing.content}
                    onChange={e => setEditing({ ...editing, content: e.target.value })}
                    rows={14}
                    className="w-full border border-border rounded-xl px-4 py-3 text-navy font-light focus:outline-none focus:border-rose transition-colors resize-none font-mono text-sm"
                    placeholder="כתוב את המאמר כאן. ניתן להשתמש ב-Markdown: **מודגש**, *נטוי*, ## כותרת"
                    dir="rtl"
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-navy text-sm font-medium mb-2">תגיות (מופרדות בפסיק)</label>
                    <input
                      value={tagsInput}
                      onChange={e => setTagsInput(e.target.value)}
                      className="w-full border border-border rounded-xl px-4 py-3 text-navy font-light focus:outline-none focus:border-rose transition-colors"
                      placeholder="גוף, נפש, ביוסינתזה, חרדה"
                    />
                  </div>
                  <div>
                    <label className="block text-navy text-sm font-medium mb-2">קישור לתמונת שער</label>
                    <input
                      value={editing.cover_image_url}
                      onChange={e => setEditing({ ...editing, cover_image_url: e.target.value })}
                      className="w-full border border-border rounded-xl px-4 py-3 text-navy font-light focus:outline-none focus:border-rose transition-colors"
                      placeholder="https://..."
                      dir="ltr"
                    />
                  </div>
                </div>

                <div className="flex gap-3 justify-end pt-2">
                  <button onClick={() => setEditing(null)} className="px-6 py-3 rounded-full border border-border text-slate font-medium hover:bg-linen transition-colors">
                    ביטול
                  </button>
                  <button
                    onClick={handleSave}
                    disabled={saveMutation.isPending || !editing.title || !editing.content}
                    className="px-8 py-3 rounded-full bg-navy text-white font-medium hover:bg-opacity-90 transition-all disabled:opacity-50"
                  >
                    {saveMutation.isPending ? "שומר..." : "שמור"}
                  </button>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}
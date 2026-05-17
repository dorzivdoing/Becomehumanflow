import { motion } from "framer-motion";

export default function AboutSection() {
  return (
    <section className="py-28 px-6 md:px-16 lg:px-28 bg-linen">
      <div className="max-w-5xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

          {/* Decorative visual */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex justify-center order-1"
          >
            <div className="relative">
              <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-lg">
                <img
                  src="https://media.base44.com/images/public/6a098e797170ea9e67f23db4/c9487d0c4_WhatsAppImage2024-03-10at212726.jpeg"
                  alt="דור - פסיכותרפיסט"
                  className="w-full h-full object-cover object-top"
                />
              </div>
              {/* Accent shape */}
              <div className="absolute -bottom-4 -left-4 w-24 h-24 rounded-2xl bg-rose/20 -z-10"></div>
              <div className="absolute -top-4 -right-4 w-16 h-16 rounded-full bg-navy/10 -z-10"></div>
            </div>
          </motion.div>

          {/* Text */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="order-2"
          >
            <p className="text-rose font-medium tracking-widest text-sm uppercase mb-3">אודות</p>
            <h2 className="text-4xl md:text-5xl font-bold text-navy mb-6 leading-snug">
              דור – פסיכותרפיסט ומורה
            </h2>
            <div className="w-12 h-0.5 bg-rose mb-8"></div>
            <p className="text-slate text-lg font-light leading-loose">
              שלום, אני דור. לוקח את החיים ברצינות מתאימה. לפחות משתדל... פסיכותרפיסט מוסמך בגישת ביוסינתזה, מורה ומטפל ביוגה טיפולית וחבר בסגל ההוראה של בית הספר לביוסינתזה. בעל 8 שנות ניסיון בקליניקה. שואב השראה רבה מהטבע, מהליכה בשדות, מנדידת הציפורים, מהשירה וממחזוריות החיים.
            </p>

            <div className="mt-10 flex flex-wrap gap-3">
              {["ביוסינתזה", "יוגה טיפולית", "8 שנות ניסיון", "סגל הוראה"].map((tag) => (
                <span
                  key={tag}
                  className="px-4 py-2 rounded-full bg-white text-slate text-sm font-light border border-border"
                >
                  {tag}
                </span>
              ))}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
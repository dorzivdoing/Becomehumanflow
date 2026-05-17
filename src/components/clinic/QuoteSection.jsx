import { motion } from "framer-motion";

export default function QuoteSection() {
  return (
    <section className="py-24 px-6 bg-white">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="text-rose text-5xl font-serif mb-6 opacity-50">"</div>
          <blockquote className="text-navy text-2xl md:text-3xl font-light leading-relaxed italic">
            הגוף זוכר מה שהמוח שוכח.
            <br />
            הטיפול מזמין אותך לחזור הביתה – אל עצמך.
          </blockquote>
          <div className="mt-8 w-10 h-0.5 bg-rose mx-auto"></div>
          <p className="mt-5 text-slate text-sm font-light tracking-wide">
            גישת ביוסינתזה – דיוויד בואדלה
          </p>
        </motion.div>
      </div>
    </section>
  );
}
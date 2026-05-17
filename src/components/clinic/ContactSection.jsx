import { motion } from "framer-motion";

export default function ContactSection() {
  return (
    <section className="py-16 px-6 bg-navy">
      <div className="max-w-3xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <div className="w-10 h-0.5 bg-rose mx-auto opacity-40"></div>
        </motion.div>
      </div>
    </section>
  );
}
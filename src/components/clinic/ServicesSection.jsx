import { motion } from "framer-motion";

const services = [
  {
    icon: "🌊",
    text: "התמודדות עם חרדה, דיכאון, אבל ואובדן.",
  },
  {
    icon: "🌱",
    text: "תופעות רגשיות וגופניות שהופיעו בעקבות חוויות קשות (מתמשכות או חד-פעמיות).",
  },
  {
    icon: "🔄",
    text: "ליווי במהלך או לאחר משברי חיים (כולל משברים רפואיים או שינויים גדולים).",
  },
  {
    icon: "✨",
    text: "למי שבסך הכל טוב לו, אך מרגיש רצון עמוק להעמיק בהיכרות עם עצמו, לצמוח ולהתפתח.",
  },
];

export default function ServicesSection() {
  return (
    <section className="py-28 px-6 md:px-16 lg:px-28 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-rose font-medium tracking-widest text-sm uppercase mb-3">עבור מי?</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy">
            מי מגיע לקליניקה
          </h2>
          <div className="mt-5 w-12 h-0.5 bg-rose mx-auto"></div>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.12 }}
              className="group flex gap-5 items-start p-8 rounded-2xl bg-linen hover:bg-rose/10 transition-colors duration-300"
            >
              <span className="text-3xl mt-0.5 flex-shrink-0">{service.icon}</span>
              <p className="text-navy text-lg font-light leading-relaxed">{service.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
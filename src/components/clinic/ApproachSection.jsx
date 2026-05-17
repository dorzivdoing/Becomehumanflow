import { motion } from "framer-motion";

const pillars = [
  {
    icon: "🫁",
    title: "הגוף כשער",
    text: "ביוסינתזה מבינה שהגוף אינו רק 'בית' לנפש – הוא עצמו שפה, זיכרון, וחוכמה. הנשימה, המגע, והתנועה הם כלים טיפוליים מרכזיים.",
  },
  {
    icon: "🌊",
    title: "הקרקעה",
    text: "להרגיש את הרגליים על האדמה. להיות נוכח/ת בגוף ובחיים. הקרקעה היא הבסיס ממנו צומח כל שינוי אמיתי.",
  },
  {
    icon: "💧",
    title: "זרימה ומגע",
    text: "כשהאנרגיה הטבעית של הגוף יכולה לזרום בחופשיות, נפתח מרחב לריפוי, לחיות, ולחיבור עמוק יותר עם עצמנו ועם האחר.",
  },
  {
    icon: "🌸",
    title: "נוכחות ואהבה",
    text: "הטיפול נבנה על מרחב בטוח, קצב אישי, וקשר טיפולי מחזיק. כאן מותר להיות בדיוק כפי שאתה/את עכשיו.",
  },
];

export default function ApproachSection() {
  return (
    <section className="py-28 px-6 md:px-16 lg:px-28 bg-linen">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-20"
        >
          <p className="text-rose font-medium tracking-widest text-sm uppercase mb-3">הגישה</p>
          <h2 className="text-4xl md:text-5xl font-bold text-navy">
            ביוסינתזה – טיפול בגוף ובנפש יחד
          </h2>
          <div className="mt-5 w-12 h-0.5 bg-rose mx-auto"></div>
          <p className="mt-8 text-slate text-lg font-light leading-relaxed max-w-2xl mx-auto">
            ביוסינתזה היא גישה פסיכותרפויטית המשלבת עבודה עם הגוף, הנשימה, והנוכחות הרגשית. היא פותחה על ידי דיוויד בואדלה ומושרשת בהבנה שהנפש והגוף הם יחידה אחת.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {pillars.map((pillar, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-3xl p-8 shadow-sm hover:shadow-md transition-shadow duration-300"
            >
              <div className="text-3xl mb-4">{pillar.icon}</div>
              <h3 className="text-navy text-xl font-semibold mb-3">{pillar.title}</h3>
              <p className="text-slate font-light leading-relaxed">{pillar.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
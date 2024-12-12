import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { CheckCircle2 } from 'lucide-react';

export default function Rules() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const rules = [
    'כל משתתף בשיעור תורה מקבל כרטיס הגרלה אחד',
    'ככל שתשתתף ביותר שיעורים, כך יגדלו סיכוייך לזכות',
    'ההגרלה תתקיים ב-1 בינואר 2026',
    'הזוכים יוכרזו במעמד מיוחד'
  ];

  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const item = {
    hidden: { opacity: 0, x: -20 },
    show: { opacity: 1, x: 0 }
  };

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "show" : "hidden"}
      variants={container}
      className="bg-gradient-to-br from-blue-50 to-white rounded-2xl shadow-lg p-8 mb-12"
    >
      <h2 className="text-3xl font-bold text-blue-900 mb-8">איך זה עובד?</h2>
      <ul className="space-y-6">
        {rules.map((rule, index) => (
          <motion.li
            key={index}
            variants={item}
            className="flex items-start gap-4 text-lg"
          >
            <CheckCircle2 className="text-green-500 mt-1 flex-shrink-0" />
            <span>{rule}</span>
          </motion.li>
        ))}
      </ul>
    </motion.div>
  );
}
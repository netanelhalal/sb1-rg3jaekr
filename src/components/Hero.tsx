import React from 'react';
import { motion } from 'framer-motion';
import { Scroll, CalendarCheck } from 'lucide-react';

export default function Hero() {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-blue-600 to-blue-900 text-white">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1585858229735-cd08d8cb510d?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
      
      <div className="container mx-auto px-4 py-16 relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
            className="flex justify-center mb-6"
          >
            <Scroll className="w-16 h-16" />
          </motion.div>

          <h1 className="text-5xl font-bold mb-6">
            הגרלה מיוחדת ללומדי תורה
          </h1>
          
          <p className="text-xl mb-8 leading-relaxed">
            הצטרפו לשיעורי התורה שלנו וקבלו הזדמנות לזכות בפרסים מיוחדים!
            כל שיעור מזכה אותך בכרטיס נוסף להגרלה.
          </p>

          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-blue-900 px-8 py-3 rounded-full font-semibold flex items-center gap-2 hover:bg-blue-50 transition-colors"
            >
              <CalendarCheck className="w-5 h-5" />
              הרשמה לשיעור הקרוב
            </motion.button>
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
            className="mt-12 text-sm bg-white/10 inline-block py-2 px-4 rounded-full"
          >
            ההגרלה תתקיים ב-1 בינואר 2026
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
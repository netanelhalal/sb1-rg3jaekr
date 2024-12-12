import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-blue-900 to-blue-950 text-white py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 text-center md:text-right">
          <div>
            <h3 className="text-xl font-semibold mb-4">צור קשר</h3>
            <div className="space-y-2">
              <p className="flex items-center justify-center md:justify-end gap-2">
                <Phone size={18} />
                052-308-4834
              </p>
              <p className="flex items-center justify-center md:justify-end gap-2">
                <Mail size={18} />
                לשליחת הודעה
              </p>
            </div>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">מיקום</h3>
            <p className="flex items-center justify-center md:justify-end gap-2">
              <MapPin size={18} />
              בית המדרש
            </p>
          </div>
          
          <div>
            <h3 className="text-xl font-semibold mb-4">זמני שיעורים</h3>
            <p>ימי רביעי 21:00-22:00</p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t border-blue-800 text-center">
          <p>© כל הזכויות שמורות 2024</p>
        </div>
      </div>
    </footer>
  );
}
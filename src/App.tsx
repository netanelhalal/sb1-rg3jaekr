import React from 'react';
import Hero from './components/Hero';
import InfoCards from './components/InfoCards';
import Rules from './components/Rules';
import Leaderboard from './components/Leaderboard';
import Footer from './components/Footer';
import AdminLogin from './components/AdminLogin';
import AdminPanel from './components/AdminPanel';
import { useAdminStore } from './store/adminStore';

function App() {
  const isAdmin = useAdminStore((state) => state.isAdmin);

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100 text-right" dir="rtl">
      <Hero />
      
      <div className="container mx-auto px-4 py-12">
        <InfoCards />
        <Rules />
        <div className="flex justify-center mb-8">
          {isAdmin ? <AdminPanel /> : <Leaderboard />}
        </div>
        {!isAdmin && (
          <div className="flex justify-center">
            <AdminLogin />
          </div>
        )}
      </div>

      <Footer />
    </div>
  );
}

export default App;
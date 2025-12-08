"use client";

import { useEffect, useState } from "react";
import { Building2, Users, Star, CheckCircle } from "lucide-react";

interface StatItem {
  icon: React.ReactNode;
  value: number;
  label: string;
  suffix?: string;
}

export default function Statistics() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const stats: StatItem[] = [
    {
      icon: <Building2 className="w-8 h-8" />,
      value: 500,
      label: "Očišćenih objekata",
      suffix: "+",
    },
    {
      icon: <Users className="w-8 h-8" />,
      value: 300,
      label: "Zadovoljnih klijenata",
      suffix: "+",
    },
    {
      icon: <Star className="w-8 h-8" />,
      value: 10,
      label: "Godina iskustva",
      suffix: "+",
    },
    {
      icon: <CheckCircle className="w-8 h-8" />,
      value: 98,
      label: "Stopa zadovoljstva",
      suffix: "%",
    },
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-r from-blue-700 to-blue-900">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4 text-white">
            Naši rezultati govore za nas
          </h2>
          <p className="text-xl text-blue-100">
            Brojke koje pokazuju našu posvećenost kvalitetu
          </p>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group"
              style={{
                animation: isVisible
                  ? `fadeInUp 0.6s ease-out ${index * 0.1}s both`
                  : "none",
              }}
            >
              <div className="inline-flex items-center justify-center w-16 h-16 bg-white/10 rounded-full mb-4 text-white group-hover:bg-white/20 transition-colors">
                {stat.icon}
              </div>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {stat.value}
                {stat.suffix}
              </div>
              <div className="text-lg text-blue-100">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      <style jsx>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
      `}</style>
    </section>
  );
}

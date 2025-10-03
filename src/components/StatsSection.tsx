import React from 'react';
import { useCountUp } from '../hooks/useCountUp';

const StatsSection: React.FC = () => {
  const stats = [
    { number: 10, label: 'Años de Experiencia', suffix: '+' },
    { number: 100, label: 'Proyectos Exitosos', suffix: '+' },
    { number: 99, label: 'de Satisfacción del Cliente', suffix: '%' }
  ];

  return (
    <section className="py-20 bg-slate-800">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              number={stat.number}
              label={stat.label}
              suffix={stat.suffix}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

interface StatItemProps {
  number: number;
  label: string;
  suffix: string;
}

const StatItem: React.FC<StatItemProps> = ({ number, label, suffix }) => {
  const { count, elementRef } = useCountUp({ end: number, duration: 2500 });

  return (
    <div ref={elementRef} className="text-center">
      <div className="text-5xl md:text-6xl font-bold text-white mb-2">
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-blue-500">
          {suffix === '%' ? count : count}{suffix}
        </span>
      </div>
      <div className="text-gray-300 text-lg font-medium">
        {label}
      </div>
    </div>
  );
};

export default StatsSection;
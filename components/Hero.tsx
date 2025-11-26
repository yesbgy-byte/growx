import React from 'react';
import { ArrowRight, Zap, FileBarChart } from 'lucide-react';

interface HeroProps {
  onNavigateToReport: () => void;
}

const Hero: React.FC<HeroProps> = ({ onNavigateToReport }) => {
  return (
    <section className="relative bg-slate-900 text-white overflow-hidden min-h-[90vh] flex items-center">
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop')] opacity-20 bg-cover bg-center"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-slate-900/50 via-slate-900/80 to-slate-900"></div>

      <div className="container mx-auto px-4 py-12 relative z-10 flex flex-col items-center text-center">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-orange-500/10 border border-orange-500/30 text-orange-400 font-semibold mb-8 animate-fade-in-up">
          <Zap size={16} />
          <span>AX & DX 혁신을 이끄는 실무 중심 기업교육</span>
        </div>

        <h1 className="text-4xl md:text-6xl font-extrabold mb-8 leading-tight tracking-tight break-keep">
          AI로 완성하는 조직의 압도적 성장, <span className="gradient-text">GROWX</span>
        </h1>

        {/* Mobile specific line breaks as requested */}
        <p className="text-xl md:text-2xl text-slate-300 mb-10 max-w-3xl font-light leading-snug">
          <span className="md:hidden">
            단순한 AI 도입을 넘어,<br />
            실질적인 성과로 이어지는 AX 교육.<br />
            <strong className="text-white">GROWX</strong>가 당신의 조직을<br />
            다음 단계로 이끕니다.
          </span>
          <span className="hidden md:inline">
            단순한 AI 도입을 넘어, 실질적인 성과로 이어지는 AX 교육.<br />
            <strong className="text-white">GROWX</strong>가 당신의 조직을 다음 단계로 이끕니다.
          </span>
        </p>

        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
          <button className="px-8 py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-all transform hover:scale-105 shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2">
            교육 커리큘럼 무료 상담 <ArrowRight size={20} />
          </button>
          <button
            onClick={onNavigateToReport}
            className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-semibold rounded-lg border border-slate-700 transition-all flex items-center justify-center gap-2"
          >
            성과 리포트 예시 보기 <FileBarChart size={20} />
          </button>
        </div>

        {/* Trusted By section removed as requested */}
      </div>
    </section>
  );
};

export default Hero;
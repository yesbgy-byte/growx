
import React from 'react';
import { CheckCircle2, XCircle, Settings, Target, Briefcase, ChevronRight } from 'lucide-react';

const Methodology: React.FC = () => {
  return (
    <section className="py-24 bg-slate-50">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-16">
          <span className="text-orange-600 font-bold tracking-wider text-sm uppercase">Why Titan Workers?</span>
          <h2 className="text-3xl md:text-5xl font-extrabold text-slate-900 mt-3 mb-6 leading-tight">
            우리 산업의 <span className="underline decoration-orange-500/30 decoration-8 underline-offset-4">실제 문제</span>를<br />
            AI로 해결하고 싶다면?
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            단순 툴 사용법 강의로는 현업의 복잡한 문제를 해결할 수 없습니다.<br />
            타이탄 워커스는 <strong>'실전 AI PBL(Project Based Learning)'</strong>로 실질적인 ROI를 창출합니다.
          </p>
        </div>

        {/* Redesigned Comparison Section */}
        <div className="max-w-7xl mx-auto mb-20">
          <div className="grid md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 to-slate-300 group-hover:from-orange-400 group-hover:to-red-500 transition-colors"></div>
              <div className="mb-6 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                <Briefcase size={32} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">실무 중심 AI 역량 완비</h3>
              <p className="text-slate-600 text-sm mb-8 min-h-[40px]">
                단순 활용을 넘어, 실제 작동하는 AI 기능을 직접 구현합니다.
              </p>

              <div className="space-y-3 bg-slate-50 p-4 rounded-xl">
                <div className="flex items-start gap-3 opacity-60">
                  <XCircle className="text-slate-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-xs text-slate-500 line-through decoration-slate-400">단순 툴 기능/프롬프트 습득</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-500 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm font-bold text-slate-800">현업 문제 해결 솔루션 구축</p>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 to-slate-300 group-hover:from-orange-400 group-hover:to-red-500 transition-colors"></div>
              <div className="mb-6 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                <Target size={32} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">증명 가능한 성과와 ROI</h3>
              <p className="text-slate-600 text-sm mb-8 min-h-[40px]">
                경영진이 납득할 수 있는 구체적 결과물과 수치 제공합니다.
              </p>

              <div className="space-y-3 bg-slate-50 p-4 rounded-xl">
                <div className="flex items-start gap-3 opacity-60">
                  <XCircle className="text-slate-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-xs text-slate-500 line-through decoration-slate-400">개인 리터러시 향상에 그침</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-500 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm font-bold text-slate-800">조직 성과/ROI 지표 확보</p>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-8 shadow-xl border border-slate-100 relative overflow-hidden group hover:-translate-y-2 transition-transform duration-300">
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-slate-200 to-slate-300 group-hover:from-orange-400 group-hover:to-red-500 transition-colors"></div>
              <div className="mb-6 bg-orange-50 w-16 h-16 rounded-2xl flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform">
                <Settings size={32} />
              </div>

              <h3 className="text-xl font-bold text-slate-900 mb-2">비용 절감과 조직 역량 내재화</h3>
              <p className="text-slate-600 text-sm mb-8 min-h-[40px]">
                외주 비용은 줄이고, 조직 내부의 AI 해결 역량은 강화합니다.
              </p>

              <div className="space-y-3 bg-slate-50 p-4 rounded-xl">
                <div className="flex items-start gap-3 opacity-60">
                  <XCircle className="text-slate-400 shrink-0 mt-0.5" size={18} />
                  <p className="text-xs text-slate-500 line-through decoration-slate-400">일회성 교육/외주 의존</p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="text-orange-500 shrink-0 mt-0.5" size={18} />
                  <p className="text-sm font-bold text-slate-800">내부 전문가 양성 및 자립</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Process Section */}
        <div className="max-w-5xl mx-auto">
          <h3 className="text-2xl font-bold text-slate-900 text-center mb-10">
            기업 맞춤형 커리큘럼 설계 프로세스
          </h3>
          <div className="grid md:grid-cols-4 gap-4">
            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center relative group hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-4 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                <Target size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">1. 사전 진단</h4>
              <p className="text-sm text-slate-500">직무별 AI 역량 수준 및<br />해결 과제 도출</p>
              <ChevronRight className="hidden md:block absolute top-1/2 -right-3 text-slate-300 transform -translate-y-1/2 z-10" />
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center relative group hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-4 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                <Settings size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">2. 맞춤 설계</h4>
              <p className="text-sm text-slate-500">기업 데이터 기반<br />PBL 주제 선정</p>
              <ChevronRight className="hidden md:block absolute top-1/2 -right-3 text-slate-300 transform -translate-y-1/2 z-10" />
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center relative group hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-4 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                <Briefcase size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">3. PBL 교육</h4>
              <p className="text-sm text-slate-500">하이브리드 러닝 및<br />프로젝트 코칭</p>
              <ChevronRight className="hidden md:block absolute top-1/2 -right-3 text-slate-300 transform -translate-y-1/2 z-10" />
            </div>

            <div className="bg-white p-6 rounded-xl border border-slate-200 text-center relative group hover:border-orange-500 transition-colors">
              <div className="w-12 h-12 mx-auto bg-slate-100 rounded-full flex items-center justify-center text-slate-600 mb-4 group-hover:bg-orange-100 group-hover:text-orange-600 transition-colors">
                <CheckCircle2 size={24} />
              </div>
              <h4 className="font-bold text-lg mb-2">4. 성과 확산</h4>
              <p className="text-sm text-slate-500">결과물 발표회 및<br />현업 적용 모니터링</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Methodology;

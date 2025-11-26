
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

        {/* Comparison Section (Benchmarked) */}
        <div className="max-w-6xl mx-auto mb-20">
          <div className="grid md:grid-cols-2 gap-0 shadow-2xl rounded-3xl overflow-hidden border border-slate-200">
            {/* Left: General Education */}
            <div className="bg-slate-100 p-10 md:p-12 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-slate-300"></div>
              <h3 className="text-2xl font-bold text-slate-500 mb-8">기존 일반 생성형 AI 교육</h3>

              <div className="space-y-6 w-full max-w-sm">
                <div className="bg-white p-4 rounded-xl flex items-center gap-4 text-left shadow-sm opacity-70">
                  <XCircle className="text-slate-400 shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-slate-600">일반적인 예시 데이터</p>
                    <p className="text-xs text-slate-400">우리 회사 업무와 무관한 공용 예제</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl flex items-center gap-4 text-left shadow-sm opacity-70">
                  <XCircle className="text-slate-400 shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-slate-600">단순 툴 기능 습득</p>
                    <p className="text-xs text-slate-400">프롬프트 작성법 등 기능 위주</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl flex items-center gap-4 text-left shadow-sm opacity-70">
                  <XCircle className="text-slate-400 shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-slate-600">개인 리터러시 향상</p>
                    <p className="text-xs text-slate-400">조직 전체의 성과로 연결 부족</p>
                  </div>
                </div>
                <div className="bg-white p-4 rounded-xl flex items-center gap-4 text-left shadow-sm opacity-70">
                  <XCircle className="text-slate-400 shrink-0" size={24} />
                  <div>
                    <p className="font-bold text-slate-600">교육 완료 후 종료</p>
                    <p className="text-xs text-slate-400">지속적인 활용 및 팔로우업 부재</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right: Titan Workers PBL */}
            <div className="bg-slate-900 p-10 md:p-12 flex flex-col items-center text-center relative overflow-hidden">
              <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-orange-600 to-red-600"></div>
              <div className="absolute -right-20 -top-20 w-64 h-64 bg-orange-600/20 rounded-full blur-3xl pointer-events-none"></div>

              <h3 className="text-2xl font-bold text-white mb-8">산업특화 AI PBL 교육</h3>

              <div className="space-y-6 w-full max-w-sm relative z-10">
                <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4 text-left shadow-lg border border-orange-500/30">
                  <CheckCircle2 className="text-orange-500 shrink-0" size={28} />
                  <div>
                    <p className="font-bold text-white text-lg">기초 AI 교육의 한계 해결</p>
                    <p className="text-sm text-slate-400">단순 도구 사용을 넘어 실제 AI 기능 구축 역량 확보</p>
                  </div>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4 text-left shadow-lg border border-orange-500/30">
                  <CheckCircle2 className="text-orange-500 shrink-0" size={28} />
                  <div>
                    <p className="font-bold text-white text-lg">명확한 교육 성과 측정</p>
                    <p className="text-sm text-slate-400">임원진 보고용 구체적 성과물과 ROI 지표 확보</p>
                  </div>
                </div>
                <div className="bg-slate-800 p-5 rounded-xl flex items-center gap-4 text-left shadow-lg border border-orange-500/30">
                  <CheckCircle2 className="text-orange-500 shrink-0" size={28} />
                  <div>
                    <p className="font-bold text-white text-lg">예산 대비 확실한 교육 가치</p>
                    <p className="text-sm text-slate-400">외주 개발 대신 내부 역량으로 해결하는 비용 절감</p>
                  </div>
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

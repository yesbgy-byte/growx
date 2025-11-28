
import React, { useState } from 'react';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { CheckCircle2, Info, User, Users } from 'lucide-react';
import { Metric } from '../types';

// Individual Metrics (8 items - updated)
const individualData: Metric[] = [
  { subject: 'AI 리터러시', A: 30, B: 90, fullMark: 100 },
  { subject: '데이터 리터러시', A: 25, B: 85, fullMark: 100 },
  { subject: '프롬프트 엔지니어링', A: 35, B: 92, fullMark: 100 },
  { subject: '디지털 도구 활용', A: 40, B: 88, fullMark: 100 },
  { subject: '문제 해결력', A: 20, B: 85, fullMark: 100 },
  { subject: '업무 자동화', A: 15, B: 90, fullMark: 100 },
  { subject: '디지털 협업', A: 45, B: 88, fullMark: 100 },
  { subject: '보안 및 윤리', A: 50, B: 95, fullMark: 100 },
];

// Team Metrics (8 items - new request)
const teamData: Metric[] = [
  { subject: '이론 이해도', A: 40, B: 88, fullMark: 100 },
  { subject: '과제 완료율', A: 20, B: 95, fullMark: 100 },
  { subject: '마감 준수율', A: 50, B: 92, fullMark: 100 },
  { subject: '산출물 품질', A: 30, B: 85, fullMark: 100 },
  { subject: '툴 활용 범위', A: 25, B: 90, fullMark: 100 },
  { subject: '협업 기여도', A: 60, B: 88, fullMark: 100 },
  { subject: '회고 점수', A: 30, B: 82, fullMark: 100 },
  { subject: '현업 시도', A: 10, B: 80, fullMark: 100 },
];

const individualDetails = [
  { id: 1, name: "AI 리터러시", description: "AI의 기본 원리와 한계를 이해하고 윤리적으로 활용하는 능력", traits: ["AI이해", "윤리의식"] },
  { id: 2, name: "데이터 리터러시", description: "데이터를 읽고, 쓰고, 분석하며 의사결정에 활용하는 능력", traits: ["데이터분석", "인사이트"] },
  { id: 3, name: "프롬프트 엔지니어링", description: "AI 모델에게 효과적인 지시를 내려 최적의 결과를 얻는 능력", traits: ["명령어설계", "응용력"] },
  { id: 4, name: "디지털 도구 활용", description: "다양한 디지털/AI 도구를 목적에 맞게 선택하고 활용하는 능력", traits: ["도구활용", "적응력"] },
  { id: 5, name: "문제 해결력", description: "디지털 기술을 활용하여 복잡한 문제를 정의하고 해결하는 능력", traits: ["문제정의", "해결책도출"] },
  { id: 6, name: "업무 자동화", description: "반복적인 업무 프로세스를 식별하고 자동화하는 능력", traits: ["프로세스혁신", "생산성"] },
  { id: 7, name: "디지털 협업", description: "디지털 환경에서 타인과 효과적으로 소통하고 협업하는 능력", traits: ["커뮤니케이션", "협업툴"] },
  { id: 8, name: "보안 및 윤리", description: "디지털 보안 수칙을 준수하고 AI 윤리를 고려하는 태도", traits: ["보안의식", "책임감"] },
];

const teamDetails = [
  { id: 1, name: "이론 이해도 점수", description: "핵심 개념 퀴즈·미니테스트를 교육 전/후 동일 난이도로 시행하여 측정", traits: ["이해도", "기초지식"] },
  { id: 2, name: "과제 완료율", description: "부여된 PBL 과제/미션 중 제출 완료 비율 (전: 사전 미니과제, 후: 프로젝트 과제)", traits: ["성실도", "실행력", "책임감"] },
  { id: 3, name: "마감 기한 준수율", description: "제출 마감 대비 실제 제출 시간(기한 내/지연 비율) 측정", traits: ["성실도", "시간관리"] },
  { id: 4, name: "프로젝트 산출물 품질", description: "문제 정의–해결 아이디어–구현 완성도–현업 적합성 루브릭(1~5점) 평가", traits: ["문제해결력", "실무적용"] },
  { id: 5, name: "노코드/툴 활용 범위", description: "사용한 기능의 수, 자동화/통합 정도(단순 페이지 vs 자동화 워크플로)", traits: ["도구활용", "응용력"] },
  { id: 6, name: "협업 기여도", description: "팀 프로젝트에서 동료 평가(기여도, 커뮤니케이션, 책임감 등 5점 척도)", traits: ["협업능력", "소통"] },
  { id: 7, name: "리플렉션(회고) 점수", description: "“무엇을 배웠는지/어디에 적용할지”를 적는 회고를 깊이·구체성 기준으로 평가", traits: ["메타인지", "학습태도"] },
  { id: 8, name: "현업 적용 시도 횟수", description: "교육 기간/후 일정 기간 동안, 실제 업무에 적용해 본 실험·시도 건수", traits: ["자기주도성", "전이도"] },
];

const AssessmentSystem: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'individual' | 'team'>('team');

  const currentData = activeTab === 'individual' ? individualData : teamData;
  const currentDetails = activeTab === 'individual' ? individualDetails : teamDetails;

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4">
        {/* Header Section */}
        <div className="text-center mb-12">
          <span className="text-blue-600 font-bold tracking-wider text-sm uppercase">T-AX Index System</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-6 text-slate-900">
            성장은 느낌이 아니라 <span className="text-orange-600">데이터</span>로 증명합니다
          </h2>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            GROWX는 단순 만족도가 아닌, 정량적 핵심 실무 역량 지표를 통해<br className="hidden md:block" />
            임직원의 AX/DX 역량 변화를 명확하게 측정하고 ROI를 산출합니다.
          </p>
        </div>

        {/* Tabs */}
        <div className="flex justify-center mb-12">
          <div className="bg-slate-100 p-1.5 rounded-full flex gap-1">
            <button
              onClick={() => setActiveTab('team')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeTab === 'team'
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              <Users size={18} /> 팀/조직 역량 지표 (8개)
            </button>
            <button
              onClick={() => setActiveTab('individual')}
              className={`px-6 py-2.5 rounded-full text-sm font-bold flex items-center gap-2 transition-all ${activeTab === 'individual'
                ? 'bg-white text-orange-600 shadow-sm'
                : 'text-slate-500 hover:text-slate-700'
                }`}
            >
              <User size={18} /> 개인 역량 지표 (8개)
            </button>
          </div>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-12 mb-20">
          {/* Chart Section */}
          <div className="lg:w-1/2 w-full h-[450px] bg-slate-50 rounded-3xl p-6 shadow-inner border border-slate-100 relative">
            <div className="absolute top-6 left-6 z-10">
              <span className="px-3 py-1 bg-white border border-slate-200 rounded-full text-xs font-bold text-slate-500 shadow-sm">
                {activeTab === 'team' ? 'Team Capability Radar' : 'Individual Capability Radar'}
              </span>
            </div>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="70%" data={currentData}>
                <PolarGrid stroke="#cbd5e1" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#475569', fontSize: 13, fontWeight: 600 }} />
                <PolarRadiusAxis angle={30} domain={[0, 100]} tick={false} axisLine={false} />
                <Radar
                  name="교육 전 (Pre)"
                  dataKey="A"
                  stroke="#94a3b8"
                  strokeWidth={2}
                  fill="#94a3b8"
                  fillOpacity={0.3}
                />
                <Radar
                  name="교육 후 (Post)"
                  dataKey="B"
                  stroke="#ea580c"
                  strokeWidth={3}
                  fill="#ea580c"
                  fillOpacity={0.5}
                />
                <Legend iconType="circle" wrapperStyle={{ paddingTop: '20px', fontSize: '14px' }} />
                <Tooltip
                  contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  itemStyle={{ fontSize: '14px', fontWeight: 500 }}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>

          {/* Description Text Section */}
          <div className="lg:w-1/2">
            <h3 className="text-2xl font-bold mb-6 text-slate-900">
              {activeTab === 'team' ? '조직의 협업과 성과를 측정합니다' : '개인의 실무 능력을 진단합니다'}
            </h3>
            <div className="space-y-6">
              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-orange-100 p-2 rounded-lg text-orange-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <h4 className="font-bold text-lg">
                    {activeTab === 'team' ? '협업 & 프로젝트 중심 평가' : '실무 스킬 중심 평가'}
                  </h4>
                </div>
                <p className="text-slate-600 pl-11">
                  {activeTab === 'team'
                    ? '과제 완료율, 산출물 품질, 협업 기여도 등 실제 프로젝트 수행 과정에서 드러나는 조직적 역량을 중점적으로 평가합니다.'
                    : '프롬프트 엔지니어링, 툴 활용 능력 등 개인이 현업에서 즉시 발휘할 수 있는 구체적인 기술적 역량을 측정합니다.'}
                </p>
              </div>

              <div className="bg-white p-6 rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow">
                <div className="flex items-center gap-3 mb-2">
                  <div className="bg-blue-100 p-2 rounded-lg text-blue-600">
                    <CheckCircle2 size={20} />
                  </div>
                  <h4 className="font-bold text-lg">가시적인 성과 비교</h4>
                </div>
                <p className="text-slate-600 pl-11">
                  교육 전(회색)과 후(주황색)의 데이터를 비교하여,
                  {activeTab === 'team' ? ' 우리 조직이 ' : ' 임직원 개인이 '}
                  얼마나 '타이탄'에 가까워졌는지 시각적으로 확인합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Detailed Metrics Grid */}
        <div className="animate-fade-in">
          <h3 className="text-xl font-bold mb-6 text-center text-slate-900">
            {activeTab === 'team' ? '8대 팀/조직 역량 지표 상세' : '8대 개인 역량 지표 상세'}
          </h3>
          <div className="relative">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 blur-sm select-none pointer-events-none opacity-60">
              {currentDetails.map((metric) => (
                <div key={metric.id} className="bg-white p-6 rounded-2xl border border-slate-200 transition-all group min-h-[220px] flex flex-col">
                  <div className="flex items-start justify-between mb-4">
                    <div className="w-8 h-8 rounded-full bg-slate-100 text-slate-500 flex items-center justify-center font-bold text-sm">
                      {metric.id}
                    </div>
                    <Info size={16} className="text-slate-300" />
                  </div>
                  <h4 className="font-bold text-lg text-slate-900 mb-3 leading-tight">
                    {metric.name}
                  </h4>
                  <p className="text-slate-600 text-sm mb-4 leading-relaxed flex-grow">
                    {metric.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {metric.traits.map((trait, i) => (
                      <span key={i} className="text-[11px] px-2 py-1 bg-slate-50 text-slate-500 rounded border border-slate-200">
                        #{trait}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Overlay */}
            <div className="absolute inset-0 flex flex-col items-center justify-center z-10">
              <div className="bg-white/90 backdrop-blur-md p-8 rounded-2xl shadow-xl border border-slate-200 text-center max-w-md mx-4">
                <div className="w-12 h-12 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-600">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2" /><path d="M7 11V7a5 5 0 0 1 10 0v4" /></svg>
                </div>
                <h4 className="text-lg font-bold text-slate-900 mb-2">세부 평가 지표는 대외비입니다</h4>
                <p className="text-slate-600 text-sm mb-6">
                  8대 핵심 역량의 상세 정의와 측정 기준은<br />
                  도입 문의 및 계약 체결 시 제공해 드립니다.
                </p>
                <a href="#contact" className="inline-flex items-center justify-center px-6 py-2.5 bg-slate-900 text-white text-sm font-bold rounded-full hover:bg-slate-800 transition-colors">
                  도입 문의하기
                </a>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default AssessmentSystem;

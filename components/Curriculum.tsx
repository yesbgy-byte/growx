import React, { useState } from 'react';
import { Briefcase, Database, PieChart, PenTool, Users, TrendingUp } from 'lucide-react';
import { CurriculumTrack } from '../types';

const tracks: CurriculumTrack[] = [
  {
    id: 'sales',
    role: '영업 (Sales)',
    description: '고객 데이터 분석부터 맞춤 제안서 자동화까지, 세일즈 파이프라인 가속화',
    modules: [
      '고객 데이터 세그멘테이션 및 타겟팅 분석 실습',
      '고객사별 초개인화 맞춤 제안서 자동 생성 (제안서 봇 구축)',
      '세일즈 파이프라인 관리 및 리드 스코어링 자동화',
      '사내 최적화 GPT를 활용한 영업 실적 분석 및 전략 수립'
    ],
    tools: ['ChatGPT Team', 'Salesforce (Concept)', 'Gamma', 'Jasper']
  },
  {
    id: 'hr',
    role: 'HR (인사/조직문화)',
    description: '채용부터 평가, 조직문화까지 데이터 기반의 스마트 HRD 시스템 구축',
    modules: [
      '생성형 AI 활용 PDF 보고서 분석 및 HR 인사이트 시각화',
      '직무기술서(JD) 기반 맞춤형 면접 질문 및 채용 프로세스 자동화',
      '사내 규정/복지 챗봇 구축 및 반복 문의 응대 자동화',
      '조직문화 진단 데이터 분석 및 개선 기획안 작성 실습'
    ],
    tools: ['ChatGPT', 'Claude 3', 'Excel Copilot', 'Notion AI']
  },
  {
    id: 'marketing',
    role: '마케팅 (Marketing)',
    description: '콘텐츠 제작 속도 5배 향상 및 데이터 기반 퍼포먼스 마케팅',
    modules: [
      '마케팅 프롬프트 엔지니어링 기초 및 페르소나 설계',
      'SNS/블로그/광고 카피라이팅 및 멀티미디어 콘텐츠 대량 제작',
      '미드저니(Midjourney) 활용 브랜드 이미지 및 광고 소스 생성',
      '캠페인 성과 데이터 분석 및 시각화 리포트 자동 생성'
    ],
    tools: ['Midjourney', 'ChatGPT', 'Canva AI', 'Copy.ai']
  },
  {
    id: 'admin',
    role: '경영지원/총무 (Admin)',
    description: '반복 행정 업무 제로화, 고부가가치 기획 업무로의 전환',
    modules: [
      '회의록 실시간 요약 및 Action Item 자동 추출/배포',
      '복잡한 엑셀 데이터 전처리 및 자동 리포팅 시스템 구축',
      '공문, 이메일, 사내 공지사항 초안 작성 자동화',
      '일정 관리 및 업무 프로세스 최적화 에이전트 활용'
    ],
    tools: ['MS Copilot', 'Google Gemini', 'Notion', 'Zapier']
  },
  {
    id: 'rnd',
    role: '연구개발 (R&D)',
    description: '기술 트렌드 탐색 시간 단축 및 데이터 해석 능력 강화',
    modules: [
      '글로벌 논문/기술 문서 핵심 요약 및 인사이트 도출',
      '실험 데이터 전처리 자동화 및 결과 시각화',
      'R&D 프로젝트 기획서 초안 작성 및 시장성 분석',
      '특허 검색 및 기술 동향 모니터링 에이전트 구축'
    ],
    tools: ['Python w/ AI', 'Scholar GPT', 'Perplexity', 'Claude']
  }
];

const Curriculum: React.FC = () => {
  const [activeTrack, setActiveTrack] = useState<string>('sales');

  const activeData = tracks.find(t => t.id === activeTrack) || tracks[0];

  return (
    <section className="py-24 bg-slate-900 text-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-orange-500 font-bold tracking-wider text-sm">CURRICULUM</span>
          <h2 className="text-3xl md:text-4xl font-bold mt-2 mb-4">직무별 맞춤형 AX & DX 로드맵</h2>
          <p className="text-slate-400">전 직무를 아우르는 실무 밀착형 커리큘럼으로 조직의 디지털 전환을 완성합니다.</p>
        </div>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Sidebar Navigation */}
          <div className="lg:w-1/3 flex flex-col gap-2">
            {tracks.map((track) => (
              <button
                key={track.id}
                onClick={() => setActiveTrack(track.id)}
                className={`text-left p-5 rounded-xl transition-all flex items-center gap-4 ${
                  activeTrack === track.id
                    ? 'bg-orange-600 text-white shadow-lg shadow-orange-900/50'
                    : 'bg-slate-800 text-slate-400 hover:bg-slate-700 hover:text-white'
                }`}
              >
                {track.id === 'sales' && <TrendingUp size={20} />}
                {track.id === 'hr' && <Users size={20} />}
                {track.id === 'marketing' && <PieChart size={20} />}
                {track.id === 'admin' && <Briefcase size={20} />}
                {track.id === 'rnd' && <Database size={20} />}
                <span className="font-semibold">{track.role}</span>
              </button>
            ))}
          </div>

          {/* Content Area */}
          <div className="lg:w-2/3 bg-slate-800 rounded-2xl p-8 border border-slate-700 min-h-[400px]">
            <div className="flex flex-col h-full justify-between">
              <div className="animate-fade-in">
                <div className="flex items-center justify-between mb-6">
                  <h3 className="text-2xl font-bold text-white">{activeData.role} 트랙</h3>
                  <span className="px-3 py-1 bg-slate-700 text-xs rounded-full text-slate-300 border border-slate-600">
                    실무 적용률 200%
                  </span>
                </div>
                <p className="text-orange-400 font-medium mb-8 text-lg">
                  {activeData.description}
                </p>

                <div className="space-y-4 mb-8">
                  <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide">Key Modules (PBL 주제)</h4>
                  <ul className="grid md:grid-cols-2 gap-4">
                    {activeData.modules.map((module, idx) => (
                      <li key={idx} className="flex items-start gap-3 bg-slate-700/50 p-4 rounded-lg hover:bg-slate-700 transition-colors">
                        <span className="flex-shrink-0 w-6 h-6 bg-orange-500/20 text-orange-500 rounded-full flex items-center justify-center text-xs font-bold mt-0.5">
                          {idx + 1}
                        </span>
                        <span className="text-slate-200 text-sm leading-relaxed">{module}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div>
                <h4 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-3">활용 도구 (Tools)</h4>
                <div className="flex flex-wrap gap-2">
                  {activeData.tools.map((tool, idx) => (
                    <span key={idx} className="px-3 py-1 bg-slate-900 border border-slate-600 rounded-md text-slate-300 text-sm flex items-center gap-1">
                      <PenTool size={12} className="opacity-50" /> {tool}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Curriculum;
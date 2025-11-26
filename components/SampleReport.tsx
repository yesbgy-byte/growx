
import React from 'react';
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, AreaChart, Area } from 'recharts';
import { ArrowLeft, Building2, Users, Calendar, TrendingUp, Clock, FileText, CheckCircle, Lock } from 'lucide-react';

interface SampleReportProps {
  onBack: () => void;
}

// 1. Core Metrics Data (Pre/Post Comparison) - 8 Team Metrics
const coreMetricsData = [
  { name: '이론 이해도', pre: 35, post: 92 },
  { name: '과제 완료율', pre: 20, post: 98 },
  { name: '마감 준수율', pre: 55, post: 95 },
  { name: '산출물 품질', pre: 25, post: 88 },
  { name: '도구 활용도', pre: 15, post: 90 },
  { name: '품질 일관성', pre: 40, post: 85 }, // Replaced 'Collaboration' to match 'Consistency' request in chart
  { name: '정책 준수', pre: 30, post: 95 }, // Replaced 'Reflection'
  { name: '현업 전이', pre: 10, post: 82 },
];

// 2. LMS Analytics Data
const completionDistribution = [
  { range: '0-20%', count: 5 },
  { range: '21-40%', count: 12 },
  { range: '41-60%', count: 18 },
  { range: '61-80%', count: 35 },
  { range: '81-100%', count: 80 },
];

const retakeImprovement = [
  { attempt: 1, score: 65 },
  { attempt: 2, score: 78 },
  { attempt: 3, score: 88 },
  { attempt: 4, score: 95 },
];

const SampleReport: React.FC<SampleReportProps> = ({ onBack }) => {
  return (
    <div className="pt-24 pb-20 bg-slate-50 min-h-screen animate-fade-in font-sans">
      <div className="container mx-auto px-4 max-w-6xl">
        {/* Navigation & Header */}
        <div className="flex justify-between items-center mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-slate-500 hover:text-orange-600 transition font-medium"
          >
            <ArrowLeft size={20} /> 메인으로 돌아가기
          </button>
          <span className="text-xs font-mono text-slate-400">REPORT ID: TW-2025-KR-0042</span>
        </div>

        <div className="bg-white rounded-xl shadow-lg border border-slate-200 overflow-hidden mb-8">
          <div className="bg-slate-900 text-white p-8 relative overflow-hidden">
            <div className="relative z-10 flex flex-col md:flex-row justify-between items-start md:items-end gap-4">
              <div>
                <span className="inline-block px-2 py-1 bg-orange-500 text-white text-[10px] font-bold rounded mb-2 tracking-wider">PREMIUM REPORT</span>
                <h1 className="text-3xl font-bold">AX 교육 성과 분석 리포트</h1>
                <div className="flex items-center gap-4 mt-2 text-sm text-slate-300">
                  <span className="flex items-center gap-1"><Building2 size={14} /> A 유통/물류(주)</span>
                  <span className="flex items-center gap-1"><Users size={14} /> 150명 수료</span>
                  <span className="flex items-center gap-1"><Calendar size={14} /> 2025.02.01 - 02.28</span>
                </div>
              </div>
              <div className="text-right hidden md:block">
                <p className="text-xs text-slate-400 uppercase">Total ROI Score</p>
                <p className="text-4xl font-bold text-orange-500">4.8<span className="text-lg text-slate-500">/5.0</span></p>
              </div>
            </div>
          </div>

          <div className="p-8 bg-slate-50/50">
            {/* A. Summary Cards */}
            <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">1. Executive Summary</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 mb-1">최종 수강률</p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-slate-900">92%</span>
                  <span className="text-xs text-green-600 font-medium mb-1">▲ Target 85%</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 mb-1">과제 기한 준수</p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-slate-900">88%</span>
                  <span className="text-xs text-slate-400 font-medium mb-1">Avg</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 mb-1">사이클 타임 단축</p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-blue-600">-27%</span>
                  <span className="text-xs text-slate-400 font-medium mb-1">vs 전월</span>
                </div>
              </div>
              <div className="bg-white p-5 rounded-lg border border-slate-200 shadow-sm">
                <p className="text-xs text-slate-500 mb-1">수기 작업 감소</p>
                <div className="flex items-end gap-2">
                  <span className="text-2xl font-bold text-orange-600">-34%</span>
                  <span className="text-xs text-slate-400 font-medium mb-1">자동화 전환</span>
                </div>
              </div>
            </div>

            {/* B. Core Metrics Chart */}
            <div className="mb-12">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4 flex items-center gap-2">
                2. Core Competency Analysis <span className="text-[10px] bg-slate-200 px-2 py-0.5 rounded text-slate-500">Pre vs Post</span>
              </h3>
              <div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm h-[350px]">
                <ResponsiveContainer width="100%" height="100%">
                  <BarChart
                    data={coreMetricsData}
                    margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
                  >
                    <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                    <XAxis dataKey="name" tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} />
                    <YAxis tick={{ fontSize: 12, fill: '#64748b' }} axisLine={false} tickLine={false} domain={[0, 100]} />
                    <Tooltip
                      cursor={{ fill: '#f8fafc' }}
                      contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    />
                    <Legend iconType="circle" />
                    <Bar dataKey="pre" name="교육 전 (Pre)" fill="#cbd5e1" radius={[4, 4, 0, 0]} barSize={20} />
                    <Bar dataKey="post" name="교육 후 (Post)" fill="#ea580c" radius={[4, 4, 0, 0]} barSize={20} />
                  </BarChart>
                </ResponsiveContainer>
              </div>
            </div>

            {/* C. LMS Panel (Micro Analysis) */}
            <div className="mb-12">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">3. LMS Behavioral Analytics</h3>
              <div className="grid md:grid-cols-3 gap-6">
                {/* C-1 Histogram */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="text-xs font-bold text-slate-900 mb-4">완시율(Video Completion) 분포</h4>
                  <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={completionDistribution}>
                        <XAxis dataKey="range" tick={{ fontSize: 10 }} interval={0} />
                        <Tooltip contentStyle={{ fontSize: '12px' }} />
                        <Bar dataKey="count" fill="#3b82f6" radius={[2, 2, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </div>
                {/* C-2 Stats */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-center items-center text-center">
                  <Clock className="text-slate-300 mb-2" size={24} />
                  <h4 className="text-xs font-bold text-slate-500 mb-1">유효 체류시간 (Median)</h4>
                  <p className="text-3xl font-bold text-slate-900">42<span className="text-sm font-normal text-slate-500">분/Session</span></p>
                  <p className="text-[10px] text-green-500 mt-2">▲ 백그라운드 재생 제외</p>
                </div>
                {/* C-3 Sparkline */}
                <div className="bg-white p-5 rounded-xl border border-slate-200 shadow-sm">
                  <h4 className="text-xs font-bold text-slate-900 mb-4">재응시 학습 개선도</h4>
                  <div className="h-32">
                    <ResponsiveContainer width="100%" height="100%">
                      <AreaChart data={retakeImprovement}>
                        <defs>
                          <linearGradient id="colorScore" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#10b981" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#10b981" stopOpacity={0} />
                          </linearGradient>
                        </defs>
                        <Tooltip contentStyle={{ fontSize: '12px' }} />
                        <Area type="monotone" dataKey="score" stroke="#10b981" fillOpacity={1} fill="url(#colorScore)" />
                      </AreaChart>
                    </ResponsiveContainer>
                  </div>
                </div>
              </div>
            </div>

            {/* D. Insights (Blurred for Hook) */}
            <div className="relative">
              <h3 className="text-sm font-bold text-slate-500 uppercase tracking-wide mb-4">4. Detailed Insights & Action Plan</h3>

              {/* Blurred Content Placeholder */}
              <div className="bg-white p-8 rounded-xl border border-slate-200 shadow-sm space-y-6 blur-sm select-none">
                <div className="flex gap-4">
                  <div className="w-1 bg-blue-500 rounded-full h-12"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-slate-100 rounded w-1/3"></div>
                    <div className="h-3 bg-slate-50 rounded w-3/4"></div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-red-500 rounded-full h-12"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-slate-100 rounded w-1/4"></div>
                    <div className="h-3 bg-slate-50 rounded w-5/6"></div>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-1 bg-green-500 rounded-full h-12"></div>
                  <div className="flex-1 space-y-2">
                    <div className="h-4 bg-slate-100 rounded w-1/3"></div>
                    <div className="h-3 bg-slate-50 rounded w-2/3"></div>
                  </div>
                </div>
              </div>

              {/* Lock Overlay */}
              <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-white/30 rounded-xl">
                <div className="bg-slate-900 text-white p-6 rounded-2xl shadow-2xl text-center max-w-sm border border-slate-800 transform transition hover:scale-105">
                  <div className="w-12 h-12 bg-orange-500 rounded-full flex items-center justify-center mx-auto mb-4 text-white">
                    <Lock size={24} />
                  </div>
                  <h4 className="text-lg font-bold mb-2">전체 리포트가 궁금하신가요?</h4>
                  <p className="text-slate-300 text-sm mb-6">
                    우리 기업에 맞는 상세 분석 데이터와<br />
                    인사이트 제안서를 받아보세요.
                  </p>
                  <button className="w-full py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-100 transition flex items-center justify-center gap-2 text-sm">
                    문의하고 전체 리포트 받기 <ArrowLeft className="rotate-180" size={16} />
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        <div className="mt-8 text-center text-xs text-slate-400">
          * 본 리포트는 보안을 위해 일부 내용이 블러 처리되었습니다. GROWX 도입 시 전체 데이터를 확인할 수 있습니다.
        </div>

      </div>
    </div>
  );
};

export default SampleReport;

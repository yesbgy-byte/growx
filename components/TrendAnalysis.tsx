import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Cell } from 'recharts';
import { AlertTriangle, TrendingUp, Users, Target, Zap } from 'lucide-react';

const productivityData = [
  { name: 'AI/디지털 활용', value: 61, color: '#ea580c' },
  { name: '조직 몰입', value: 57, color: '#64748b' },
  { name: '보상 체계', value: 41, color: '#94a3b8' },
  { name: '근로시간 단축', value: 27, color: '#cbd5e1' },
];

const hrdFocusData = [
  { name: 'AI 스킬 교육', value: 57, color: '#ea580c' },
  { name: '인력 재교육', value: 49, color: '#f97316' },
  { name: '데이터 분석', value: 43, color: '#fb923c' },
  { name: '업스킬링', value: 42, color: '#fdba74' },
];

const TrendAnalysis: React.FC = () => {
  return (
    <section className="py-20 bg-slate-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
            왜 지금 <span className="text-orange-600">AX(AI Transformation)</span>인가?
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            2025년 HRD 트렌드 리포트에 따르면, 기업의 생존은 이미 AI 활용 능력에 달려있습니다.
            경쟁사들은 이미 움직이고 있습니다.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Chart 1: Productivity Issues */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <AlertTriangle className="text-red-500" />
              <h3 className="text-xl font-bold text-slate-800">기업 업무생산성 당면 이슈 1위</h3>
            </div>
            <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={productivityData} layout="vertical" margin={{ top: 5, right: 30, left: 40, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" horizontal={false} stroke="#e2e8f0" />
                  <XAxis type="number" hide />
                  <YAxis dataKey="name" type="category" width={100} tick={{fontSize: 12, fill: '#475569'}} />
                  <Tooltip 
                    contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                    cursor={{fill: 'transparent'}}
                  />
                  <Bar dataKey="value" radius={[0, 4, 4, 0]} barSize={30}>
                    {productivityData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-slate-500 mt-4 bg-slate-50 p-3 rounded">
              <strong className="text-orange-600">61%의 기업</strong>이 AI/디지털 기술 업무 활용을 가장 시급한 문제로 꼽았습니다.
            </p>
          </div>

          {/* Chart 2: HRD Focus */}
          <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
            <div className="flex items-center gap-3 mb-6">
              <Target className="text-blue-500" />
              <h3 className="text-xl font-bold text-slate-800">HRD 담당자들의 최우선 과제</h3>
            </div>
             <div className="h-64 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={hrdFocusData} margin={{ top: 5, right: 30, left: 20, bottom: 5 }}>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
                  <XAxis dataKey="name" tick={{fontSize: 12, fill: '#475569'}} />
                  <YAxis hide />
                  <Tooltip 
                     contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                     cursor={{fill: '#f1f5f9'}}
                  />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]} barSize={40}>
                    {hrdFocusData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>
            <p className="text-sm text-slate-500 mt-4 bg-slate-50 p-3 rounded">
              생성형 AI 활용 스킬 교육(57%)과 인력 재교육(49%)이 HRD의 핵심으로 부상했습니다.
            </p>
          </div>
        </div>

        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-orange-50 p-6 rounded-xl border border-orange-100 text-center">
            <TrendingUp className="w-8 h-8 text-orange-600 mx-auto mb-3" />
            <h4 className="font-bold text-slate-900 mb-1">매일 사용하는 습관</h4>
            <p className="text-sm text-slate-600">직장인 37%가 매일 AI 도구 활용 중</p>
          </div>
          <div className="bg-blue-50 p-6 rounded-xl border border-blue-100 text-center">
            <Users className="w-8 h-8 text-blue-600 mx-auto mb-3" />
            <h4 className="font-bold text-slate-900 mb-1">직무별 격차 심화</h4>
            <p className="text-sm text-slate-600">전 직무 보편적 역량화 필수</p>
          </div>
          <div className="bg-purple-50 p-6 rounded-xl border border-purple-100 text-center">
            <Zap className="w-8 h-8 text-purple-600 mx-auto mb-3" />
            <h4 className="font-bold text-slate-900 mb-1">효율성 입증</h4>
            <p className="text-sm text-slate-600">62%가 업무 효율성 개선 효과 체감</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TrendAnalysis;
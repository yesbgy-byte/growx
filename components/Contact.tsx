
import React, { useState } from 'react';
import { Send, Check, Phone, Mail } from 'lucide-react';

const Contact: React.FC = () => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    // In a real app, this would send data to a backend
  };

  return (
    <section className="py-20 bg-slate-100" id="contact">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col md:flex-row">
          <div className="md:w-1/2 bg-slate-900 p-12 text-white flex flex-col justify-between">
            <div>
              <h3 className="text-3xl font-bold mb-4">지금 바로<br />문의하세요</h3>
              <p className="text-slate-400 mb-8 leading-relaxed">
                가장 빠르고 확실한 AX 교육,<br />
                GROWX가 데이터에 기반한<br />
                최적의 솔루션을 제안해 드립니다.
              </p>
            </div>
            <div className="space-y-6">
              <div>
                <div className="flex items-center gap-2 mb-1 text-slate-400">
                  <Mail size={16} /> <span>문의 이메일</span>
                </div>
                <p className="text-xl font-bold text-white tracking-wide">yesbgy@gmail.com</p>
              </div>
              <div>
                <div className="flex items-center gap-2 mb-1 text-slate-400">
                  <Phone size={16} /> <span>고객센터</span>
                </div>
                <p className="text-xl font-bold text-white tracking-wide">050-5008-1771</p>
              </div>
            </div>
          </div>

          <div className="md:w-1/2 p-12">
            {submitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center animate-fade-in">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center text-green-600 mb-4">
                  <Check size={32} />
                </div>
                <h4 className="text-2xl font-bold text-slate-900 mb-2">문의가 접수되었습니다.</h4>
                <p className="text-slate-600">담당자가 빠르게 확인 후<br />제안서와 함께 연락드리겠습니다.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">회사명</label>
                  <input type="text" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" placeholder="GROWX" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">담당자 이메일</label>
                  <input type="email" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" placeholder="name@company.com" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-slate-700 mb-1">연락처</label>
                  <input type="tel" required className="w-full px-4 py-3 rounded-lg border border-slate-300 focus:ring-2 focus:ring-orange-500 focus:border-transparent outline-none transition" placeholder="010-0000-0000" />
                </div>

                <button type="submit" className="w-full py-4 bg-orange-600 hover:bg-orange-700 text-white font-bold rounded-lg transition-colors flex items-center justify-center gap-2 shadow-lg shadow-orange-600/20">
                  도입 문의하기 (제안서 받기) <Send size={18} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;

import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-white mb-2">GROWX</h2>
          <p className="text-sm">AX/DX 전문 기업교육 서비스</p>
        </div>
        <div className="flex gap-8 text-sm">
          <a href="#" className="hover:text-white transition">서비스 소개</a>
          <a href="#" className="hover:text-white transition">커리큘럼</a>
          <a href="#" className="hover:text-white transition">고객사례</a>
          <a href="#" className="hover:text-white transition">문의하기</a>
        </div>
        <div className="mt-8 md:mt-0 text-xs text-slate-600">
          &copy; 2025 GROWX. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
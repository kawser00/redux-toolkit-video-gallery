import React from 'react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  return (
    <section className="pt-6">
      <div
        className="max-w-7xl mx-auto px-5 py-6 lg:px-0 flex justify-between gap-2 border-t text-sm text-slate-400"
      >
        <div>Copyright {currentYear} Kawser Ahmed</div>
        <div>Terms and Conditions</div>
      </div>
    </section>
  );
};

export default Footer;
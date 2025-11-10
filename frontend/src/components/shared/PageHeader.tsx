import React from 'react';

interface PageHeaderProps {
  title: string;
  subtitle?: string;
  eyebrow?: string;
}

export const PageHeader: React.FC<PageHeaderProps> = ({ title, subtitle, eyebrow }) => {
  return (
    <section className="relative bg-gradient-to-br from-[#0d1219] via-[#080C16] to-[#04060b] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {eyebrow ? <div className="text-blue-200 text-sm font-medium uppercase tracking-wide">{eyebrow}</div> : null}
        <h1 className="mt-2 text-3xl md:text-4xl lg:text-5xl font-bold">{title}</h1>
        {subtitle ? <p className="mt-3 text-blue-100 max-w-3xl">{subtitle}</p> : null}
      </div>
    </section>
  );
};

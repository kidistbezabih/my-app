import React from 'react';
import { PORTFOLIO_CARDS } from '../../../lib/constants';

const ProductsIndex: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Products</h1>
      <p className="mt-3 text-gray-600 max-w-2xl">Explore AxionOre portfolio companies and their category‑leading platforms.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {PORTFOLIO_CARDS.map((p) => (
          <a key={p.name} href={p.href} className="block p-6 rounded-xl bg-[#F2F4F5] border border-gray-200 hover:border-gray-300">
            <h3 className="text-xl font-semibold text-gray-900">{p.name}</h3>
            <p className="text-sm text-blue-700 font-medium">{p.tagline}</p>
            <p className="mt-2 text-gray-600">{p.blurb}</p>
            <span className="mt-3 inline-block text-blue-700 font-medium">Learn more →</span>
          </a>
        ))}
      </div>
    </div>
  );
};

export default ProductsIndex;

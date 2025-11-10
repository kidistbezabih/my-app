import React from 'react';

const groups = [
  {
    heading: 'By Need',
    items: [
      { label: 'Cloud Security', href: '/solutions/cloud-security' },
      { label: 'Compliance Automation', href: '/solutions/compliance-automation' },
      { label: 'Privileged Access', href: '/solutions/privileged-access' },
      { label: 'Identity Governance', href: '/solutions/identity-governance' },
      { label: 'Infrastructure Automation', href: '/solutions/infrastructure-automation' },
      { label: 'Secure ERP', href: '/solutions/secure-erp' },
    ],
  },
  {
    heading: 'By Industry',
    items: [
      { label: 'Financial Services', href: '/solutions/financial-services' },
      { label: 'Healthcare', href: '/solutions/healthcare' },
      { label: 'Manufacturing', href: '/solutions/manufacturing' },
      { label: 'Technology', href: '/solutions/technology' },
    ],
  },
];

const SolutionsIndex: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <h1 className="text-3xl md:text-4xl font-bold text-gray-900">Solutions</h1>
      <p className="mt-3 text-gray-600 max-w-2xl">Explore solutions by business need or industry.</p>
      <div className="mt-8 grid grid-cols-1 md:grid-cols-2 gap-6">
        {groups.map((g) => (
          <div key={g.heading} className="p-6 rounded-xl bg-[#F2F4F5] border border-gray-200">
            <h2 className="text-xl font-semibold text-gray-900">{g.heading}</h2>
            <ul className="mt-3 space-y-2">
              {g.items.map((i) => (
                <li key={i.label}>
                  <a className="text-blue-700 hover:underline" href={i.href}>{i.label}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SolutionsIndex;

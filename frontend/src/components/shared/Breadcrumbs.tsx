import React from 'react';
import { Link } from 'react-router-dom';

export interface Crumb {
  label: string;
  href?: string;
}

export const Breadcrumbs: React.FC<{ items: Crumb[] }> = ({ items }) => {
  return (
    <nav className="text-sm" aria-label="Breadcrumb">
      <ol className="flex items-center gap-2 text-gray-500">
        {items.map((item, idx) => {
          const isLast = idx === items.length - 1;
          return (
            <li key={idx} className="flex items-center gap-2">
              {item.href && !isLast ? (
                <Link to={item.href} className="hover:text-gray-700 hover:underline">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium">{item.label}</span>
              )}
              {!isLast ? <span className="text-gray-300">/</span> : null}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

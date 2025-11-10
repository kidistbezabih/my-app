import React from 'react';
import { motion } from 'framer-motion';
import { ChevronRight } from 'lucide-react';
import { NavItem } from '../../../types';

interface NavbarDropdownProps {
  items: NavItem[];
}

export const NavbarDropdown: React.FC<NavbarDropdownProps> = ({ items }) => {
  // Use 2 columns if there are more than 6 items
  const shouldUseColumns = items.length > 6;
  
  return (
    <motion.div
      className={`absolute top-full left-0 mt-2 bg-[#F2F4F5] rounded-lg shadow-lg border border-gray-200 py-2 ${
        shouldUseColumns ? 'w-[700px]' : 'w-80'
      }`}
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -10 }}
      transition={{ duration: 0.2 }}
    >
      <div className={`px-4 py-2 ${shouldUseColumns ? 'grid grid-cols-2 gap-4' : ''}`}>
        {items.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className="group flex items-start p-3 rounded-md hover:bg-[#EDF0F1] transition-colors"
          >
            <div className="flex-1">
              <div className="flex items-center justify-between">
                <h3 className="text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors">
                  {item.label}
                </h3>
                <ChevronRight className="h-4 w-4 text-gray-400 group-hover:text-blue-600 transition-colors" />
              </div>
              {item.description && (
                <p className="mt-1 text-xs text-gray-500 group-hover:text-gray-700 transition-colors">
                  {item.description}
                </p>
              )}
            </div>
          </a>
        ))}
      </div>
    </motion.div>
  );
};

import { Logo } from "@/components/shared/Logo";
import { NavigationConfig } from "@/types";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, ChevronRight, X } from "lucide-react";
import React from "react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationConfig;
}

export const MobileMenu: React.FC<MobileMenuProps> = ({
  isOpen,
  onClose,
  navigation,
}) => {
  const [expandedItems, setExpandedItems] = React.useState<Set<string>>(
    new Set()
  );

  const toggleExpanded = (label: string) => {
    const newExpanded = new Set(expandedItems);
    if (newExpanded.has(label)) {
      newExpanded.delete(label);
    } else {
      newExpanded.add(label);
    }
    setExpandedItems(newExpanded);
  };

  const handleLinkClick = () => {
    onClose();
    setExpandedItems(new Set());
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            className="fixed inset-0 bg-black/50 z-40 lg:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
          />

          {/* Menu Panel */}
          <motion.div
            className="fixed top-0 right-0 h-full w-80 bg-[#F2F4F5] shadow-xl z-50 lg:hidden"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "tween", duration: 0.3 }}
          >
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <Logo size="md" className="text-gray-900" />
                <button
                  onClick={onClose}
                  className="p-2 rounded-md text-gray-400 hover:text-gray-600 hover:bg-gray-100"
                >
                  <X className="h-6 w-6" />
                </button>
              </div>

              {/* Navigation Items */}
              <div className="flex-1 overflow-y-auto py-4">
                {navigation.main.map((item) => (
                  <div
                    key={item.label}
                    className="border-b border-gray-100 last:border-b-0"
                  >
                    {item.children ? (
                      <div>
                        <button
                          onClick={() => toggleExpanded(item.label)}
                          className="w-full flex items-center justify-between px-4 py-3 text-left text-gray-900 hover:bg-[#EDF0F1] transition-colors"
                        >
                          <span className="font-medium">{item.label}</span>
                          {expandedItems.has(item.label) ? (
                            <ChevronDown className="h-5 w-5 text-gray-400" />
                          ) : (
                            <ChevronRight className="h-5 w-5 text-gray-400" />
                          )}
                        </button>

                        <AnimatePresence>
                          {expandedItems.has(item.label) && (
                            <motion.div
                              initial={{ height: 0, opacity: 0 }}
                              animate={{ height: "auto", opacity: 1 }}
                              exit={{ height: 0, opacity: 0 }}
                              transition={{ duration: 0.2 }}
                              className="overflow-hidden"
                            >
                              <div className="bg-[#EDF0F1]">
                                {item.children.map((child, index) => (
                                  <a
                                    key={index}
                                    href={child.href}
                                    onClick={handleLinkClick}
                                    className="block px-8 py-3 text-sm text-gray-700 hover:bg-gray-100 hover:text-blue-600 transition-colors"
                                  >
                                    <div className="font-medium">
                                      {child.label}
                                    </div>
                                    {child.description && (
                                      <div className="text-xs text-gray-500 mt-1">
                                        {child.description}
                                      </div>
                                    )}
                                  </a>
                                ))}
                              </div>
                            </motion.div>
                          )}
                        </AnimatePresence>
                      </div>
                    ) : (
                      <a
                        href={item.href}
                        onClick={handleLinkClick}
                        className="block px-4 py-3 text-gray-900 hover:bg-[#EDF0F1] transition-colors"
                      >
                        {item.label}
                      </a>
                    )}
                  </div>
                ))}
              </div>

              {/* CTA Button */}
              <div className="p-4 border-t border-gray-200">
                <a
                  href={navigation.cta.href}
                  onClick={handleLinkClick}
                  className="block w-full bg-blue-600 text-white text-center py-3 px-4 rounded-md font-medium hover:bg-blue-700 transition-colors"
                >
                  {navigation.cta.label}
                </a>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export interface NavItem {
  label: string;
  href?: string;
  children?: NavItem[];
  description?: string;
}

export interface DropdownItem {
  title: string;
  description: string;
  href: string;
  icon?: string;
}

export interface NavigationConfig {
  main: NavItem[];
  cta: {
    label: string;
    href: string;
  };
}

export interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  navigation: NavigationConfig;
}

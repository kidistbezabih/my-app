import React from 'react';
import { Navbar } from '../layout/Navbar';
import { Footer } from '../layout/Footer';

const RootLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="min-h-screen">
      <Navbar />
      {children}
      <Footer />
    </main>
  );
};
export default RootLayout;

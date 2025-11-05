import ButtonNav from "@/components/ui/layout/ButtonNav";
import Nav from "@/components/ui/layout/Nav";

import React from 'react';

interface CafeLayoutProps {
  children: React.ReactNode;
}

export default function CafeLayout({ children }: CafeLayoutProps) {
  return (
    <div className="min-h-screen bg-gray-950">
      <ButtonNav />
      <Nav />
      {children}
    </div>
  );
}
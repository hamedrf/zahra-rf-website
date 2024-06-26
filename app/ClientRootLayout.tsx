"use client";

import React, { useEffect } from 'react';
import { Inter } from 'next/font/google';
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/globals.css';

const inter = Inter({ subsets: ['latin'] });

export default function ClientRootLayout({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    import('bootstrap/dist/js/bootstrap.bundle.min.js');
  }, []);

  return (
    <div className={inter.className}>
      {children}
    </div>
  );
}
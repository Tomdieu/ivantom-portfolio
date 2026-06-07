"use client";

import React from 'react';
import Link from 'next/link';
import { useI18n } from '@/locales/client';

export default function Footer() {
  const currentYear = new Date().getFullYear();
  const t = useI18n();

  return (
    <footer className="w-full py-8 mt-16 border-t border-slate-200/60 dark:border-slate-800/60 pb-24">
      <div className="container mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-slate-500 dark:text-slate-400">
        <p className="text-center md:text-left">
          &copy; {currentYear} Tomdieu Ivan. {t('footer.rights')}
        </p>
        <div className="flex items-center gap-6">
          <Link href="https://github.com/Tomdieu" target="_blank" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            GitHub
          </Link>
          <Link href="https://www.linkedin.com/in/tomdieuivan/" target="_blank" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            LinkedIn
          </Link>
          <Link href="mailto:ivan.tomdieu@gmail.com" className="hover:text-slate-900 dark:hover:text-white transition-colors">
            Email
          </Link>
        </div>
        <p className="text-center md:text-right hidden lg:block">
          {t('footer.builtWith')}
        </p>
      </div>
    </footer>
  );
}

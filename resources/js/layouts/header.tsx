import React from 'react';
import { Link, usePage } from '@inertiajs/react';
import { Moon, Sun, Search } from 'lucide-react';
import type { SharedData } from '@/types';
import { dashboard, login, register } from '@/routes';
import { useTheme } from '@/hooks/use-theme';

export default function Header() {
  const { auth } = usePage<SharedData>().props;
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="w-full bg-white dark:bg-gray-900 shadow-sm transition-colors">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4">
        {/* Left: Logo */}
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-xl font-bold text-indigo-600 dark:text-indigo-400">
              Blogify
            </span>
          </Link>
        </div>

        {/* Middle: Search bar */}
        <div className="flex-1 max-w-xl mx-6 hidden sm:flex items-center bg-gray-100 dark:bg-gray-800 rounded-lg px-3 py-2">
          <Search className="text-gray-400 dark:text-gray-500 mr-2" size={18} />
          <input
            type="text"
            placeholder="Search blogs..."
            className="w-full bg-transparent outline-none text-gray-800 dark:text-gray-200 placeholder-gray-400"
          />
        </div>

        {/* Right: User + Theme toggle */}
        <div className="flex items-center gap-4">
          {/* Theme toggle */}
          <button
            onClick={toggleTheme}
            className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon size={18} className="text-gray-700" />
            ) : (
              <Sun size={18} className="text-yellow-400" />
            )}
          </button>

          {/* Auth user */}
          {auth.user ? (
            <Link href={dashboard()} className="flex items-center gap-2">
              <img
                src={auth.user.avatar || 'https://i.pravatar.cc/100'}
                alt={auth.user.name}
                className="w-8 h-8 rounded-full object-cover"
              />
            </Link>
          ) : (
            <div className="flex gap-2">
              <Link
                href={login()}
                className="px-3 py-1.5 text-sm rounded-md border border-transparent hover:border-gray-300 dark:hover:border-gray-700 dark:text-gray-200"
              >
                Log in
              </Link>
              <Link
                href={register()}
                className="px-3 py-1.5 text-sm rounded-md border border-gray-300 dark:border-gray-700 dark:text-gray-200 hover:bg-gray-50 dark:hover:bg-gray-800"
              >
                Register
              </Link>
            </div>
          )}
        </div>
      </div>
    </header>
  );
}

'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import config from '@/config';

export default function TabBar() {
  const pathname = usePathname();

  const navigationLinks = config.navigationLinks || [];

  return (
    <nav className="sm:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200">
      <ul className="flex justify-around py-2">
        {navigationLinks.map((item) => (
          <li key={item.name}>
            <Link
              href={item.href}
              className={`flex flex-col items-center px-3 py-2 ${
                pathname === item.href ? 'text-blue-600' : 'text-gray-600'
              }`}
            >
              {item.icon}
              <span className="text-xs mt-1">{item.name}</span>
            </Link>
          </li>
        ))}
      </ul>
    </nav>
  );
}

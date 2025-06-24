'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { NavLinkProps } from '@/types/ui.types';
import {
  HouseIcon,
  Search,
  HeartPlusIcon,
  TargetIcon,
  User,
} from 'lucide-react';

export default function NavLink({ href, label }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href || pathname.startsWith(href + '/');

  return (
    <div className="w-16">
      <Link
        href={href}
        className={`text-xs flex flex-col gap-1 text-center items-center
        ${isActive ? 'font-bold text-primary' : ''}
        
      `}
      >
        {href === '/' ? <HouseIcon size={24} /> : ''}
        {href === '/search' ? <Search size={24} /> : ''}
        {href === '/dashboard' ? <HeartPlusIcon size={24} /> : ''}
        {href === '/product/1' ? <TargetIcon size={24} /> : ''}
        {href === '/mypage' ? <User size={24} /> : ''}
        {label}
      </Link>
    </div>
  );
}

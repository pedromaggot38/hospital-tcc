'use client';

import {
  Bell,
  Bookmark,
  Home,
  List,
  Mail,
  MoreHorizontal,
  User,
  Users,
} from 'lucide-react';
import { SidebarDesktop } from './sidebar-desktop';
import { SidebarItems } from '../types';
import { SidebarButton } from './sidebar-button';
import { useMediaQuery } from 'usehooks-ts';
import { SidebarMobile } from './sidebar-mobile';
import { ThemeSwitch } from './themeswitch';

const sidebarItems: SidebarItems = {
  links: [
    { label: 'Home', href: '/admin', icon: Home },
    {
      href: '/admin/news',
      icon: List,
      label: 'Notícias',
    },
    {
      href: '/admin/users',
      icon: Users,
      label: 'Usuários',
    },
    {
      href: '/item/profile',
      icon: User,
      label: 'Profile',
    },
  ],
  extras: (
    <div className='flex flex-col gap-2'>
      <div className='flex flex-col gap-2'>
        <SidebarButton icon={MoreHorizontal} className='w-full'>
          More
        </SidebarButton>
        <SidebarButton
          className='w-full justify-center text-white'
          variant='default'
        >
          Novo Post
        </SidebarButton>
      </div>
      <div className=''>
        <ThemeSwitch />
      </div>
    </div>
  ),
};

export function Sidebar() {
  const isDesktop = useMediaQuery('(min-width: 640px)', {
    initializeWithValue: false,
  });

  if (isDesktop) {
    return <SidebarDesktop sidebarItems={sidebarItems} />;
  }

  return <SidebarMobile sidebarItems={sidebarItems} />;
}

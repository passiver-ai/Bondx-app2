'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

import { Gem, Headphones, LogOut, Send, Users, Wallet } from 'lucide-react';

import { Button } from '@kit/ui/button';
import { Heading } from '@kit/ui/heading';
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuButton,
  SidebarProvider,
} from '@kit/ui/shadcn-sidebar';

export function AdminSidebar() {
  const path = usePathname();

  return (
    <SidebarProvider>
      <Sidebar>
        <SidebarHeader className={'m-2'}>
          <Heading level={5} className="font-bold">
            BONDX Admin
          </Heading>
        </SidebarHeader>

        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupContent>
              <SidebarMenu>
                <SidebarMenuButton isActive={path === '/admin/user-management'} asChild>
                  <Link className={'flex gap-2.5'} href={'/admin/user-management'}>
                    <Users className={'h-4'} />
                    <span>유저 관리</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenu>
              <SidebarMenu>
                <SidebarMenuButton isActive={path === '/admin/wallet-management'} asChild>
                  <Link className={'flex gap-2.5'} href={'/admin/wallet-management'}>
                    <Wallet className={'h-4'} />
                    <span>지갑 관리</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenu>
              <SidebarMenu>
                <SidebarMenuButton
                  isActive={path === '/admin/money-transfer-management'}
                  asChild
                >
                  <Link
                    className={'flex gap-2.5'}
                    href={'/admin/money-transfer-management'}
                  >
                    <Send className={'h-4'} />
                    <span>유저 간 송금 관리</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenu>
              <SidebarMenu>
                <SidebarMenuButton
                  isActive={path === '/admin/pointfree'}
                  asChild
                >
                  <Link className={'flex gap-2.5'} href={'/admin/pointfree'}>
                    <Gem className={'h-4'} />
                    <span>포인트프리</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenu>
              <SidebarMenu>
                <SidebarMenuButton
                  isActive={path === '/admin/customer-service-center'}
                  asChild
                >
                  <Link
                    className={'flex gap-2.5'}
                    href={'/admin/customer-service-center'}
                  >
                    <Headphones className={'h-4'} />
                    <span>고객 센터</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        </SidebarContent>

        <SidebarFooter>
          <div className="flex items-center gap-2.5 pl-2 text-sm font-semibold">
            <span className="flex-1">admin-user@bondx.xyz</span>
            <Button variant="outline" size="icon">
              <LogOut className={'h-4'} />
            </Button>
          </div>
        </SidebarFooter>
      </Sidebar>
    </SidebarProvider>
  );
}

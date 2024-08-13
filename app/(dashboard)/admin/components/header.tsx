'use client';

import { useMemo } from "react";
import { ChevronDown } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import { Content } from "@/components/content";
import { IAppContext } from "@/contexts/app";
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Separator } from "@/components/ui/separator";


const navItems = [
    {
        label: 'Dashboard',
        href: '/admin',
        section: 'dashboard',
    },
    {
        label: 'Emails',
        href: '/admin/emails',
        section: 'emails',
    },
    {
        label: 'System',
        href: '/admin/sys',
        section: 'sys',
    },
    {
        label: 'Logs',
        href: '/admin/logs',
        section: 'logs',
    },
    {
        label: 'App',
        href: '/admin/app',
        section: 'app',
    },
];

type Props = {
    user: IAppContext['authenticatedUser'];
};

export function AdminHeader({ user }: Props) {
    const pathname = usePathname();

    const activeItem = useMemo(() => {
        const section = navItems.filter(item => item.href === pathname)[0]?.section;
        return navItems.filter(s => s.section === section)[0] || navItems[0]
    }, [pathname]);

    return (
        <>
            <div className="flex gap-x-2 p-4">
                <div className="text-2xl">
                    {`${activeItem.label}`}
                </div>

                <div className="flex-1" />

                {user?.role === 'super_user' && (
                    <>
                        <div>
                            <DropdownMenu>
                                <DropdownMenuTrigger asChild>
                                    <Button 
                                        variant="outline" 
                                    >
                                        {activeItem.label}
                                        <ChevronDown className="ml-2 h-4 w-4 text-muted-foreground" />
                                    </Button>
                                </DropdownMenuTrigger>

                                <DropdownMenuContent>
                                    {navItems.map(item => (
                                        <DropdownMenuItem 
                                            asChild
                                            key={item.section}
                                            className={cn(
                                                'focus:bg-primary/20 focus:text-primary',
                                                activeItem.section === item.section && 'bg-primary text-primary-foreground',
                                            )}
                                        >
                                            <Link href={item.href}>
                                                {item.label}
                                            </Link>
                                        </DropdownMenuItem>
                                    ))}
                                </DropdownMenuContent>
                            </DropdownMenu>
                        </div>
                    </>
                )}
            </div>

            <Separator className="my-5" />
        </>
    );
}
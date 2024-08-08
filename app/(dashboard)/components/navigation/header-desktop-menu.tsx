'use client';

import { useMemo, useState } from "react";
import Link from "next/link";

import { useAppContext } from "@/contexts/app";
import { useRoutes } from "@/hooks/use-routes"
import { cn } from "@/lib/utils";

export function HeaderDesktopMenu() {
    const { sys } = useAppContext();
    const routes = useRoutes();

    const showSidebar = useMemo(() => sys.use_sidebar_menu === 'yes', [sys.use_sidebar_menu]);

    if (showSidebar) return null;

    return (
        <>
            <div className="hidden md:flex">
                {routes.map((route, i) => {
                    const isActive = route.isActive;

                    return (
                        <Link
                            key={i}
                            href={route.href}
                            className={cn(
                                'px-4 flex flex-col justify-center transition-colors dark:text-foreground',
                                isActive ? 
                                    'bg-primary text-primary-foreground' 
                                    : 
                                    'text-secondary hover:bg-primary/10 dark:hover:bg-primary-foreground/10'
                            )}
                        >
                            {route.label}
                        </Link>
                    );
                })}
            </div>
        </>
    )
}
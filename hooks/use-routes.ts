import { usePathname } from "next/navigation";
import { v4 } from "uuid";

import { useAppContext } from "@/contexts/app";

export function useRoutes() {
    const pathname = usePathname();
    const { isDefaultUser } = useAppContext();

    return [
        {
            label: 'Scripts',
            href: '/',
            isActive: pathname.substring(0, 8) === '/script/',
            id: v4(),
        },
        {
            label: 'Configuration',
            href: '/configuration',
            id: v4(),
        },
        ...(isDefaultUser ? [] : [
            {
                label: 'Users',
                href: '/users',
                id: v4(),
            }
        ]),
        {
            label: 'Hospitals',
            href: '/hospitals',
            id: v4(),
        },
        ...(isDefaultUser ? [] : [
            {
                label: 'Settings',
                href: '/settings',
                isActive: pathname.substring(0, 10) === '/settings/',
                id: v4(),
            }
        ]),
    ].map(route => ({
        ...route,
        isActive: route.isActive || (pathname === route.href),
    }));
}
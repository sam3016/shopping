"use client";

import {
    NavigationMenu,
    NavigationMenuItem,
    NavigationMenuLink,
    NavigationMenuList,
} from "@/components/ui/navigation-menu"
import { ModeToggle } from "./Toggle";
import Link from "next/link";

export default function Header() {
    return (
        <nav className="flex justify-end items-center">
            <NavigationMenu>
                <NavigationMenuList className="space-x-4">
                    <NavigationMenuItem>
                        <Link href="/login">Login</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <Link href="/">Home</Link>
                    </NavigationMenuItem>
                    <NavigationMenuItem>
                        <ModeToggle />
                    </NavigationMenuItem>
                </NavigationMenuList>
            </NavigationMenu>
        </nav>
    )
};
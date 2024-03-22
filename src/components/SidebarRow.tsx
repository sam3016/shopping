"use client";

import { useRouter } from 'next/navigation';

type Category = {
    category: string;
};

export default function SidebarRow( {category}: Category) {
    const router = useRouter();
    
    async function handleChange() {
        router.push(`/${category}`)
    }

    return (
        <li 
            className="flex items-center p-2 text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group cursor-pointer" 
            onClick={handleChange}
            >
            {category.charAt(0).toUpperCase() + category.slice(1)}
        </li>
    )
};
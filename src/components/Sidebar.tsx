import SidebarRow from "./SidebarRow";

async function getCategories() {
    const res = await fetch("https://fakestoreapi.com/products/categories")
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch categories.")
    }

    return res.json();
}

export default async function Sidebar() {
    const categories: [Awaited<string>] = await getCategories();
    
    return (
        <aside id="logo-sidebar" className="fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform -translate-x-full bg-white border-r border-gray-200 sm:translate-x-0 dark:bg-gray-800 dark:border-gray-700" aria-label="Sidebar">
            <h1 className="px-5 pb-4 overflow-y-auto font-bold">Category</h1>
            <div className="h-full px-3 pb-4 overflow-y-auto bg-white dark:bg-gray-800">
                <ul className="space-y-2 font-medium">
                    {
                        categories.map((category, index) => (
                            <SidebarRow 
                                category={category}
                                key={index}
                            />
                        ))
                    }
                </ul>
            </div>
        </aside>
    )
};
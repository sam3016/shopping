import Sidebar from "@/components/Sidebar";
import SingleCard from "@/components/SingleCard";
import getProductByCategory from "@/lib/getProductsByCategory";

type Product = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
}

type Query = {
    params: {
        category: string;
    }
}

export default async function Category( category: Query) {
    const params = category.params.category;
    const products: [Product] = await getProductByCategory(params);
    
    if (!products) return <h1>No product is available.</h1>

    return (
        <div>
            <Sidebar />
            <div className="sm:pl-64 lg:grid grid-cols-3">
        {
            products.map((product) => (
                <SingleCard
                key={product.id}
                {...product}
                />
        ))
        }
        </div>
        </div>
        
    )
}
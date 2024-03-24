import Image from "next/image";
import { Rating } from '@smastrom/react-rating'

type Product = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
    rating: {
        rate: number;
        count: number;
    }
}

type Query = {
    params: {
        productid: string;
    }
}

async function getProduct(id: string) {
    const res = await fetch(`https://fakestoreapi.com/products/${id}`);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.

    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
        throw new Error("Failed to fetch product.")
    }

    return res.json();
}

export default async function ProductDetail(product: Query) {
    const id = product.params.productid;
    const data: Product = await getProduct(id);
    
    return (
        <div className="p-5">
            <Image 
                src={data.image}
                alt={data.title}
                width={150}
                height={150}
                />
            <h1 className="font-bold text-2xl">{data.title}</h1>
            <div className="flex flex-col-1">
                <Rating style={{ maxWidth: 100 }} value={data.rating.rate} readOnly />
                <p>({data.rating.count})</p>
            </div>
            <p>{data.description}</p>
            <p className="p-1 flex justify-start font-bold">Price: £{data.price}</p>
            
        </div>
    )
}
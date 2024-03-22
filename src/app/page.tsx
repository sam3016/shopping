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

export default async function Home() {
  const products: [Product] = await getProductByCategory("");

  if (!products) return <h1>No product is available.</h1>
  
  return (
    <div className="">
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
  );
}

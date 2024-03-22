import {
    Card,
    CardContent,
    CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import Image from "next/image";

type Product = {
    id: number;
    title: string;
    price: string;
    category: string;
    description: string;
    image: string;
  }

export default function SingleCard(product: Product) {
  return (
    <div className="flex flex-col p-4" key={product.id}>
          <Card className="rounded p-4 w-full shadow-lg lg:h-[500px] dark:border-gray-400 dark:shadow-white">
            <CardTitle className="p-4 text-center">{product?.title}</CardTitle>
            <CardContent className="flex justify-center p-4"> 
              <Image 
                  src={product.image}
                  alt={product.title}
                  width={150}
                  height={150}
                /> 
            </CardContent>
            <p className="p-1 flex justify-center">£{product.price}</p>
            <div className="p-2 sm:flex lg:flex justify-center">
            <Badge variant="outline">{product.category.charAt(0).toUpperCase() + product.category.slice(1)}</Badge>
            </div>
          </Card>
        </div>
  )
}
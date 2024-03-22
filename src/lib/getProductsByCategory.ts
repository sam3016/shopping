export default async function getProductByCategory(category: string){
  const url = category === "" ? "https://fakestoreapi.com/products" : `https://fakestoreapi.com/products/category/${category}`
  const res = await fetch(url);
    // The return value is *not* serialized
    // You can return Date, Map, Set, etc.
  
    if (!res.ok) {
      // This will activate the closest `error.js` Error Boundary
      throw new Error("Failed to fetch products.")
    }
  
    return res.json();
  }
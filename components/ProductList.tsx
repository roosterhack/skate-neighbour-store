import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProductList = ({ products }: any) => {
  const [error, setError] = useState(false);
  const display = products.slice(0, 6);
  console.log(display);
  if (!display) setError(true);
  return (
    <div className="max-w-2xl mx-auto py-16 px-4 sm:py-24 sm:px-6 lg:max-w-7xl lg:px-8">
      <h2 className="sr-only">Latest</h2>

      <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 gap-x-6 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
        {display.map((product: any) => (
          <Link href={`/products/${product.id}`}>
            <a key={product.id} className="group">
              <div className="w-full aspect-w-1 aspect-h-1 bg-gray-200 rounded-lg overflow-hidden xl:aspect-w-7 xl:aspect-h-8">
                <img
                  src={product.images[0].src}
                  alt={product.images[0].altText}
                  className="w-full h-full object-center object-cover group-hover:opacity-75"
                />
              </div>
              <h3 className="mt-4 text-sm text-gray-700">{product.title}</h3>
              <p className="mt-1 text-lg font-medium text-gray-900">
                {product.variants[0].price}
              </p>
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ProductList;

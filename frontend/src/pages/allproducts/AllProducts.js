import { products } from "../../commonproducts/CommonProducts";



export default function AllProducts() {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h4 className="fw-bold mb-4 mt-2">
                    All Products
                </h4>
                <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8 h-8xl">
                    {products.map((product, index) => (
                        <div className="group text-decoration-none cursor-pointer" key={index}>
                            <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7" >
                                <img
                                    src={product.imageSrc}
                                    alt={product.imageAlt}
                                    className="w-full object-cover object-center group-hover:opacity-75 h-80"
                                />
                            </div>
                            <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                            <h4 className="mt-1 text-lg fs-4 mt-2 fw-bold text-gray-900">{product.price}</h4>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

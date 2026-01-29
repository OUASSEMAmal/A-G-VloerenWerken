function ProductCard({ product }) {
    return (
        <div className="bg-white p-4 shadow rounded-lg hover:shadow-lg transition">
            <img src={product.image} alt={product.name} className="w-full h-40 object-cover rounded mb-4" />
            <h2 className="text-lg font-semibold">{product.name}</h2>
            <p className="text-sm text-gray-500 mb-2">{product.desc}</p>
            <div className="flex justify-between items-center">
                <span className="text-blue-700 font-bold">{product.price} MAD</span>
                {product.discount && <span className="text-red-500 text-sm">-{product.discount}%</span>}
            </div>
        </div>
    );
}

export default ProductCard;
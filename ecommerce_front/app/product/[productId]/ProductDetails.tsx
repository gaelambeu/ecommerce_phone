'use client';

interface ProductDetailProps{
    product: any
}

const ProductDetails:React.FC<ProductDetailProps> = ({ product }) => {
    return (  
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                Images
            </div>
            <div className="text-3xl font-medium text-slate-700">{product.name}</div>
        </div>
    );
}
 
export default ProductDetails;
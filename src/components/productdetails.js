import { useParams } from "react-router-dom";
import products from "./productData";

const ProductDetails = () => {

    const { id } = useParams();
    const productDetail = products[id];

    return (
        <div className="container mt-5">
            <img src={productDetail.img} className="img-fluid" />
            <h1>{productDetail.name}</h1>
            <h3 className="display-3">{productDetail.price}</h3>

        </div>
    )
}

export default ProductDetails;
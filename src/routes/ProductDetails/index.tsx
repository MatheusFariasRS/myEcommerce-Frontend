import './styles.css';
import ButtonInverse from "../../components/ButtonInverse";
import ButtonPrimary from "../../components/ButtonPrimary";
import HeaderClient from "../../components/HeaderClient";
import ProductDetailsCard from "../../components/ProductDetailsCard";
import { ProductDTO } from '../../models/product';

const product: ProductDTO = {
    id: 2,
    name: "Smart TV",
    description: "Tv de LED",
    imgUrl: "https://github.com/devsuperior/dscatalog-resources/blob/9b5846b1157b296c3012f16c817f70ad1929fa6f/backend/img/2-big.jpg?raw=true",
    price: 2500.99,
    categories: [
        {
            id: 2,
            name: "Eletrônicos"
        },
        {
            id: 3,
            name: "Computadores"
        },
        {
            id: 4,
            name: "Importados"
        }
    ]
}

export default function ProductDetails() {
    return (
        <>
            <HeaderClient />
            <main>
                <section id="product-details-section" className="dsc-container">
                    <ProductDetailsCard product ={product} />
                    <div className="dsc-btn-page-container">
                        <ButtonPrimary />
                        <ButtonInverse />
                    </div>
                </section>
            </main>
        </>
    );
}
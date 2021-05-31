import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Product } from '../App';
import ProductCardComponent from './ProductCard';

interface ProductsComponentProps {
    products: Product[];
    cart: Product[];
    filter: string;
    organic: string;
}

const ProductsComponent: React.FC<ProductsComponentProps> = ({products, cart, filter, organic}) => {


    const filteredProducts = products.filter(prod => {
        if (filter === "nutsAllergy") {
            return !prod.containsNuts
        } else if (filter === "lactoseIntolerant") {
            return !prod.containsLactose
        } else {
            return true
        }
    }).filter(prod => {
        if (organic === "yes") {
            return prod.organic
        } else if (organic === "no") {
            return !prod.organic
        } else {
            return true;
        }
    })

    return (
        
        <Col className="mt-3 ml-3">
            <Row>
                <h3>Produits</h3>
            </Row>

            <Col>
                {filteredProducts.length === 0 ? 
                <h4>
                    Aucun produit disponible.
                    Veuillez modifier vos critères de recherche.
                </h4> :
                filteredProducts.sort((a,b) => a.price - b.price).map((p:Product, i:number) => {
                    if (i % 3 == 0) {
                        return (
                            <Row className="my-3">
                                <Col>
                                    <ProductCardComponent p={p} cart={cart} />
                                </Col>
                                <Col>
                                {filteredProducts[i+1] ? 
                                    <ProductCardComponent p={filteredProducts[i + 1]} cart={cart} />
                                 : null}
                                </Col>
                                 <Col>
                                {filteredProducts[i+2] ? 
                                    <ProductCardComponent p={filteredProducts[i + 2]} cart={cart} />
                                 : null}
                                </Col>
                            </Row>
                        )
                    }
                    
                })}
            </Col>
        </Col>
    );
}

export default ProductsComponent;
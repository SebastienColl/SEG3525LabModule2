import React, { useState } from 'react';
import { Button, Card} from 'react-bootstrap';
import { Product } from '../App';

interface ProductCardComponentProps {
    p: Product;
    cart: Product[];

}

const ProductCardComponent: React.FC<ProductCardComponentProps> = ({p, cart}) => {

    const [inCart, setInCart] = useState<boolean>(false);

    const addToCart = (pdt: Product) => {
        if (!cart.includes(pdt)) {
            cart.push(pdt);
            console.log(cart);

        } else {
            const idx = cart.findIndex(p => p.name === pdt.name);
            cart.splice(idx, 1);
            console.log(cart)
        }
    }

    return (
        <Card className="text-center">
            <Card.Body>
                <Card.Title>{p.name}</Card.Title>
                <Card.Text>
                Prix : {p.price}$
                </Card.Text>
                <Button variant="primary" onClick={() => {addToCart(p); setInCart(!inCart);}}>{!inCart ? "Ajouter au panier" : "Supprimer du panier"}</Button>
            </Card.Body>
        </Card>
    )
}

export default ProductCardComponent;
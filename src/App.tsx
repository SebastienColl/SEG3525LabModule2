import React, { useEffect, useState } from 'react';
import { Container, Navbar, Tab, Tabs } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import CartComponent from './tabs/cart';
import ClientComponent from './tabs/client';
import ProductsComponent from './tabs/products';

interface AppProps {
}

export interface Product {
  id: number;
  name: string;
  price: number;
  containsNuts: boolean;
  containsLactose: boolean;
  organic: boolean;
}

const App: React.FC<AppProps> = () => {


 const [products, setProducts] = useState<Product[]>([
    {
        id: 0,
        name: "Yaourt",
        price: 5.79,
        containsNuts: false,
        containsLactose: true,
        organic: true
    },
    {
        id: 1,
        name: "Granola aux amandes",
        price: 7.29,
        containsNuts: true,
        containsLactose: false,
        organic: true
    },
    {
        id: 2,
        name: "Saumon",
        price: 12.99,
        containsNuts: false,
        containsLactose: false,
        organic: true
    },
    {
        id: 3,
        name: "Pomme",
        price: 1.05,
        containsNuts: false,
        containsLactose: false,
        organic: true
    },
    {
        id: 4,
        name: "Banane",
        price: 2.19,
        containsNuts: false,
        containsLactose: false,
        organic: true
    },
    {
        id: 5,
        name: "Lait",
        price: 3.99,
        containsNuts: false,
        containsLactose: true,
        organic: true
    },
    {
        id: 6,
        name: "Barre de chocolat",
        price: 3.05,
        containsNuts: true,
        containsLactose: true,
        organic: false
    },
    {
        id: 7,
        name: "Biscuit aux pépites de chocolat",
        price: 7.99,
        containsNuts: true,
        containsLactose: true,
        organic: false
    },
    {
        id: 8,
        name: "Mélange de noix",
        price: 5.99,
        containsNuts: true,
        containsLactose: false,
        organic: true
    },
    {
        id: 9,
        name: "Smoothie",
        price: 3.99,
        containsNuts: false,
        containsLactose: true,
        organic: false
    },

])

const [cart, setCart] = useState<Product[]>([]);
const [filter, setFilter] = useState<string>("none");
const [organic, setOrganic] = useState<string>("noPreference");

  // useEffect(() => {
  //   localStorage.setItem("filter", "none")
  //   localStorage.setItem("isOrganic", "noPreference")
  //   var cart: number[] = [];
  //   localStorage.setItem("cart", JSON.stringify(cart));
  // })
  return (
    <div className="m-3">
        <Tabs defaultActiveKey="client">
          <Tab eventKey="client" title="Client">
            <ClientComponent setFilter={setFilter} setOrganic={setOrganic}/>
          </Tab>
          <Tab eventKey="products" title="Produits" >
            <ProductsComponent products={products} cart={cart} filter={filter} organic={organic}/>
          </Tab>
          <Tab eventKey="cart" title="Panier" mountOnEnter unmountOnExit>
            <CartComponent cart={cart}/>
          </Tab>
        </Tabs>
    </div>
  );
}

export default App;

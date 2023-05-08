import Header from './../../components/Header';
import React from 'react';
import module from './../../assets/api/module.json';
import Product from '../../components/Product';

export default function Home() {
    return (
        <div className=" h-screen font-sans">
            <Header />
            {/* Product display sections */}
            <div className='h-screen overflow-y-scroll snap-y snap-mandatory '>
                {module.products.map((product, index) =>
                    <Product product={product} key={index} />
                )}
            </div>
        </div>
    )
}


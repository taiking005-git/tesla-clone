import React from 'react';
import Button from './Button';

const Product = ({ product }) => {
    return (
        <div className='h-screen w-full snap-center snap-always relative'>
            <div className="flex flex-col justify-between h-screen py-20 w-full">
                <div className=" text-center">
                    <h1 className='text-5xl  font-medium transition  ease-in-out duration-300'>{product.title}</h1>
                    <p className='text-xl py-3'>{product.CTA}</p>
                </div>
                <div className="flex text-center justify-center max-sm:flex-col">
                    <Button text={product['btn-title'].p} type={"primary"} className="transition-all duration-300 delay-300" />
                    {product['btn-title'].s ? <Button text={product['btn-title'].s} type={"secondary"} className="transition-all duration-300 delay-300" /> : ""}
                </div>
            </div>
            <img src={product.img} alt="model 3" className='h-full w-full object-cover  object-center absolute top-0 -z-10' />
        </div>
    )
}

export default Product
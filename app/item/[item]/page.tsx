'use client'

import React, {useEffect, useState} from 'react'

import { Carousel } from "react-responsive-carousel"
import "react-responsive-carousel/lib/styles/carousel.min.css";
import StarIcon from '@mui/icons-material/Star';
import Button from '@mui/material/Button';
import { useDispatch } from 'react-redux'
import { addToBasket } from '../[item]/../../GlobalRedux/Features/counter/counterSlice'
import { Dispatch } from 'redux'



type Props = {
    params: {
        item: any;
    } 
}

async function page({params: {item}} : Props) {
    const dispatch: Dispatch = useDispatch(); 
    
    const getItem = async () => {
        const res = await fetch(`https://dummyjson.com/products/search?q=${item}`,)
        return res.json();
      }

    const products = await getItem()    
    const product = products.products[0]
    console.log(product)

    const Banner = () => {
        return (
            <div className="lg: h-[400px] w-[500px] sm: w-[300px]">

                <Carousel
                 autoPlay
                 infiniteLoop
                 showStatus={false}
                 showIndicators={true}
                 showThumbs={true}
                 interval={3000}
                 >
    
                 <div>
                     <img src={product.images[0]} alt={product.title}/>
                 </div>

                 <div>
                     <img src={product.images[1]}  alt={product.title}/>
                 </div>

                 <div>
                     <img src={product.images[2]} alt={product.title}/>
                 </div>

                 <div>
                     <img src={product.images[3]} alt={product.title}/>
                 </div>

                 <div>
                     <img src={product.images[4]} alt={product.title}/>
                 </div>
                
               </Carousel>
            </div>
        )
    }

    const ProductDescription = () => {

        const imageElements = Array.from({ length: product.rating }, (_, index) => (
            <StarIcon sx={{ height: 20, width: 20, color: 'orange' }} />
          ));

        return (
            <div>
                <div className="ml-10 mt-10">
                    <h2 className="text-2xl">{product.title}</h2>
                    <h1 className="text-xl text-gray-500 my-2">{product.brand}</h1>
                    <h1 className="text-xl text-gray-600 my-2">{product.category}</h1>    
                    <div className="flex flex-row my-2">
                        <p className="text-[#ffa500] underline mr-3">{product.rating}</p>
                        
                        {imageElements}
                    </div>
                    <div className="flex flex-row my-5">
                        <h3 className="line-through text-gray-400">${product.discountPercentage}</h3>
                        <h1 className="text-[#ffa500] mx-5">${product.price}</h1>
                    </div>

                    <Button variant="outlined" onClick={()=> {
                    dispatch(addToBasket({id:product.id, title: product.title,
                    qty: 1, price: product.price , description: product.description, img: product.thumbnail}))
                }}>Add to Cart</Button>
                    
                </div>
            </div>
        )
    }
    

    return (
        <main>
            <div className="mt-20 mx-10 flex flex-row">
            <Banner />
            <ProductDescription />
            </div>
          
        </main>
        
    )
}

export default page

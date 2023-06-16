"use client"
import { useDispatch, } from 'react-redux'
import { addToBasket } from '../GlobalRedux/Features/counter/counterSlice'
import React from 'react';
import Image from 'next/image'
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import { useRouter } from 'next/navigation'

import {Dispatch } from 'redux'

type Product = {
  id: string;
  title: string;
  price: number;
  description: string;
  thumbnail: string;
  qty: number,
  desc?: string

};

interface Item extends Product {
  img: string;
  discountPercentage?: string,
}

type ListProps = {
  index: Item;
};

const GridItem = ({ index } : ListProps) => {
  const dispatch: Dispatch = useDispatch(); 
  const router = useRouter()
  const handlePress = () => {
    router.push(
        `/item/${index?.title}`
      )
  }

  const handleClick = () => {
    const item: Item = {
      id: index.id,
      title: index.title,
      price: index.price,
      description: index.description,
      img: index.thumbnail,
      thumbnail: index.thumbnail,
      qty: 1,
    };
  
    dispatch(addToBasket(item));
  }

  return (
  <div className="mt-10 mx-20 cursor-pointer">
    <Card sx={{ width: 400, Height: 650}}>
            <div style={{ position: 'relative', width: 400, height: 400 }}>
             <Image src={index.thumbnail} alt={index.title}  objectFit="contain" width={400} height={100}/>
           </div>
      <CardContent onClick={handlePress}>
        <Typography gutterBottom variant="h5" component="div">
          {index.title}
        </Typography>

        <div className="flex flex-row ">
          <Typography variant="h6" sx={{marginBottom: 5}}>
             ${index.price}
          </Typography>
          <p className="text-[#FF0000] line-through ml-2">{index.discountPercentage}%</p>
        </div>

        <Typography variant="body2" color="text.secondary" sx={{height: 40}}>
         {index.description}
        </Typography>

       
      </CardContent>
      <CardActions>
     
      <IconButton sx={{marginTop: 2}} color="info" aria-label="Add to Cart" onClick={handleClick}><AddShoppingCartIcon sx={{ height: 38, width: 38 }} />
       </IconButton>
     
      </CardActions>
    </Card>
  </div>
  )
};

export default GridItem;
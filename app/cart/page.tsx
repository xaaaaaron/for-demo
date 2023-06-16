'use client'
import React, {useEffect, useState} from 'react'
import { RootState } from '../GlobalRedux/store'
import {useSelector, useDispatch } from 'react-redux'
import {addToBasket, selectBasketWithId, selectBasketItems } from '../GlobalRedux/Features/counter/counterSlice'
import Item from '../components/Item'

type ListProps = {
    id: string,
  title: string,
  description: string,
  price: number,
  thumbnail?: string,
  img: any,
  qty: number
}

function Cart() {
    const dispatch = useDispatch()
    //const qty = 1
    const items = useSelector((state: RootState) => state.counter.items);



     const ItemCarts = () => {
         return (
             <div>
             {
                 items?.map(({id,title, price, description, qty, img }: ListProps) => (
                     <div key={id} className="my-10">
                       
                         <Item qty={qty} title={title} img={img} price={price} desc={description} />
                     </div>
                 ))
             }
             </div>
         )
     }


    return (
        <div>
            <ItemCarts />
        </div>
    )
}

export default Cart

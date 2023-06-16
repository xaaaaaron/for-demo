'use client';

import { createSlice } from '@reduxjs/toolkit';

type Product = {
  id: string,
  title: string,
  description: string,
  price: number,
  thumbnail?: string,
  img: any,
  qty: number
}

export interface CounterState {
    items: Product[],
    
}

const initialState: CounterState = {
    items: []
}

export const counterSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        addToBasket: (state, action) => {
            let itemIndex = state.items.findIndex((obj: any)=>obj.id===action.payload.id) 
            let currItem = state.items[itemIndex]
            const alreadyInList = state.items.find((item: any) => item.id === action.payload.id);

            let newCart;
            if (alreadyInList) {
              newCart = state.items.map((item:any) => {
                if (item.id === action.payload.id) {
                  return {...item, qty: item.qty + action.payload.qty, price: item.price + action.payload.price};
                } else {
                  return item;
                }
              });
            } else { 
              newCart = [...state.items, action.payload];
            }
            return {...state, items: newCart};
          },
    }
})


export const { addToBasket } = counterSlice.actions;

export const selectBasketItems = (state: any) => { state.counter.items };

export const selectBasketWithId = (state: any, id: number) => state.counter.items.filter((item: any) => item.id === id)

export default counterSlice.reducer;
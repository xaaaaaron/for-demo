"use client"

import React, {useState} from 'react'

import GridContainer from '../components/Grid';

const getList = async () => {
    const res = await fetch('https://dummyjson.com/products?limit=100')
    return res.json();
  }

export default async function(){

    const lists = await getList();

    return (
      <GridContainer items={lists.products} />
    )
}



import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Loader from '../components/Loader';
import ProductCard from '../components/ProductCard';
import { useAxiosGet } from '../hooks/HttpRequest';

function Home(){
  const url = `https://5f469953e165a60016ba9f6e.mockapi.io/api/v1/products?page=1&limit=10`
  let products = useAxiosGet(url)
 

  let content = null

  if(products.error){
    content = <div>
    <div className="bg-blue-300 mb-2 p-3">
        If you see this error. Please remember to create your own <a href="https://mockapi.io/">mock API</a>.
    </div>
    <div className="bg-red-300 p-3">
        There was an error please refresh or try again later.
    </div>
</div>
  }

  if(products.loading){
    content= <Loader />
  }
  if(products.data){
    content = 

    products.data.map((product) =>
      <div key={product.id}>
        <ProductCard
        
        product={product}
        />
      </div>
    )
    
  }

 

  return(
    <div>
      <h1 className="font-bold text-2xt">Best Sellers</h1>
     {content}
    </div>
  )
}

export default Home;
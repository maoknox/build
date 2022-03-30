import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';
const GifExpertApp= () => {
const [categories,setCategories]=useState(['One punch']);
    
    return(
        <>
            <h2>GifExpertap</h2>
            <hr />
            <AddCategory setCategories={setCategories}/>
        
            <ol>
                {
                    categories.map((value,key)=>(
                        <GifGrid key={value} category={value}/>
                    ))
                }
            </ol>
        </>
        
    );

}

export default GifExpertApp;
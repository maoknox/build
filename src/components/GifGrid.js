import React from 'react';
import GifGridItem from './GifGridItem';
import { useFetchGifs } from '../hooks/useFetchGifs';
const GifGrid = ({category}) => {

    // const [images,setImages]=useState([]);
    const {data:images, loading} = useFetchGifs( category );
    console.log(    loading);
   

    
    return(
        <>
            <li>{category}</li>
            { loading && <p>Cargando </p>}
            <div className="card-grid">
                {
                    images.map( imagen => (
                            <GifGridItem 
                                key={imagen.id}
                                { ...imagen }
                            />
                        )
                    )
                }
            </div>
        </>
    );

}

export default GifGrid;
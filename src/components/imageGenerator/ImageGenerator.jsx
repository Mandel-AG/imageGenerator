import React,{useState} from 'react'
import { useFetch } from '../../hooks/UseFetch'
import { useEffect } from 'react'


export const ImageGenerator = () => {

  const { data: image, loading, error } = useFetch('https://api.unsplash.com/photos/random/?client_id=YoR0S2yoj1N1zJSXkx4loS7q9Ul9n98Y73UML2wrJq0');

  return (
    <div>
      {loading && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}

      {image && <img src={image} alt='default image' />}
    </div>
  );
};

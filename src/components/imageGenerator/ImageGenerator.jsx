import React,{useState} from 'react'
import { useFetch } from '../../hooks/UseFetch'
import { FormInput } from './FormInput';


export const ImageGenerator = () => {

  const { data: image, loading, error } = useFetch(`https://api.unsplash.com/photos/random/?client_id=${import.meta.env.VITE_API_KEY_IMAGE}`);

  return (
    <div>
      {loading && <p>Loading...</p>}

      {error && <p>Error: {error.message}</p>}

      {image && 
        <div className='h-screen flex flex-col items-center justify-center bg-gray-100 space-y-12'>
          <h1 className='text-4xl font-bold text-gray-800'>Image Generator</h1>
          <img src={image} alt='default image' />
          <FormInput />
        </div>
      }
    </div>
  );
};

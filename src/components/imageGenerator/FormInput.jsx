import React,{useState, useRef} from 'react'

export const FormInput = () => {
  const [data, setData] = useState('');
  const [image_url, setImage_url] = useState('/');
  let inputRef = useRef(null)


  const ImageGenerator = async () => {
    if(data === ''){
      return 0;
    }
    const response = await fetch(`https://api.openai.com/v1/images/generations`,
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        "Authorization":
        `Bearer ${import.meta.env.VITE_API_KEY_GENERATOR}`,
        "User-Agent":"Chrome"
      },
      body: JSON.stringify({
        prompt: `${data}`,
        n: 1,
        size: "512x512",
    }),

  });
  let responseData = await response.json();
  console.log(responseData)
  }
    
    const handleChange = (e) => {   
        setData(e.target.value)
    }
    const onSubmit = (e) => {
      e.preventDefault()
      console.log(data)
      ImageGenerator(data)
      setData('')
    }
    
    return (
    <form onSubmit={onSubmit} className='relative mb-3 flex flex-row space-x-5'>
      <input
        onChange={handleChange}
        type="text"
        value={data}
        className=" rounded-md block min-h-auto w-full rounded border-0 bg-red px-3 py-0.32rem leading-1.6 focus:outline-none focus:ring-2 focus:ring-indigo-600"
        placeholder="Describe what you want to generate"
      />

      <button className='rounded-md border-solid border-2 p-2 hover:ring-2 hover:ring-indigo-600 hover:border-transparent' type='submit'>Generate</button>
    </form>
  )
}


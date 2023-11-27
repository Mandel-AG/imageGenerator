import React,{useState} from 'react'

export const FormInput = () => {
  const [data, setData] = useState('');
    
    const handleChange = (e) => {   
        setData(e.target.value)
    }
    const onSubmit = (e) => {
      e.preventDefault()
      console.log(data)
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


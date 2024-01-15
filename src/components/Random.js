import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from "./Spinner";
import useGif from '../hooks/useGif';

const Random = () => {
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;  // to access the value from environment variable

// const[gif , setGif] = useState("");
// const [loading , setLoading] = useState(false);


//   async function fetchData() {
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;
//     const {data} = await axios.get(url);
//     const imageSource = data.data.images.downsized_large.url;
//     setGif(imageSource);
//     setLoading(false);
//   }

//   useEffect( () =>{
//     fetchData();
//   }, [])



  // using custom hook 
  const {gif , loading , fetchData} = useGif('');

  return (
    <div className='w-full bg-green-400 flex flex-col items-center py-5 gap-y-4 border-[3px] border-gray-500 rounded-2xl'>

        <h1 className='text-2xl  font-bold uppercase underline'>A Random Gif</h1>

        {
            loading  ? (<Spinner/>) : (<img src={gif} width="450"/>)
        }
        
 
        <button onClick={ () => fetchData()}
        className='w-4/5 py-2 uppercase text-center bg-white/70  font-semibold  rounded-lg hover:bg-white transition-all duration-200 '>
            Generate
        </button>

    </div>
  )
}

export default Random
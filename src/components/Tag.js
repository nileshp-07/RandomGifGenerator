import axios from 'axios';
import React, { useEffect, useState } from 'react'
import Spinner from "./Spinner";
import useGif from '../hooks/useGif';

const Tag = () => {
// const API_KEY = process.env.REACT_APP_GIPHY_API_KEY;  // to access the value from environment variable

// const[gif , setGif] = useState("");
// const [loading , setLoading] = useState(false);



//   async function fetchData() {
//     setLoading(true);
//     const url = `https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}&tag=${tag}`;
//     const {data} = await axios.get(url);
//     const imageSource = data.data.images.downsized_large.url;
//     setGif(imageSource);
//     setLoading(false);
//   }

//   useEffect( () =>{
//     fetchData();
//   }, [])


  // using custom hook 
const [tag ,setTag] = useState("jethalal");
const {gif , loading , fetchData} = useGif(tag);

  return (
    <div className='w-full bg-blue-400 flex flex-col items-center py-5 gap-y-4 border-[3px] border-gray-500 rounded-2xl'>

        <h1 className='text-2xl  font-bold uppercase underline'>Random {tag} Gif</h1>

        {
            loading  ? (<Spinner/>) : (<img src={gif} width="450"/>)
        }
        
        <input type='text'
            onChange={(event) => setTag(event.target.value)}
            className='w-4/5 text-lg text-center py-2 rounded-lg mb-[-5px]'
            value={tag}
        />
 
        <button onClick={() => fetchData()}
        className='w-4/5 py-2 uppercase text-center bg-white/70  font-semibold  rounded-lg hover:bg-white transition-all duration-200 '>
            Generate
        </button>

    </div>
  )
}

export default Tag;
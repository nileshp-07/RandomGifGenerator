import './App.css';
import Random from './components/Random';
import Tag from './components/Tag';

function App() {
  return (
    <div className='min-h-[1000px] h-full w-full flex flex-col items-center background gap-y-10'> 

        <h1 className='bg-white w-11/12 text-center text-3xl font-bold uppercase rounded-xl  py-4 mt-10'>Random Gifs</h1>

        <div className='flex flex-col items-center  gap-y-10  w-1/2'>
            <Random/>

            <Tag/>
        </div>
    </div>
  );
}

export default App;

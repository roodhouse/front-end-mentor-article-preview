import './App.css';
import Image from './components/Image';
import Share from './components/Share';
import Text from './components/Text';

function App() {
  return (
    <div className="App h-screen">
      <div id='wrapper' className='bg-offWhite pt-[74px] px-6 pb-[89px] h-full'>
        <div id='contwentWrapper' className='h-full flex flex-col bg-white rounded-[10px] shadow-[0px_40px_40px_-10px_rgba(201,213,225,0.50)]'>
          <div id='imageWrapper' className='w-[327px] h-[215px] rounded-[10px_10px_0px_0px] bg-[#000] relative overflow-hidden'>
            <Image />
          </div>
          <div id='textWrapper' className='mt-[47px] px-8 pb-[52px]'>
            <Text />
          </div>
          <div id='shareWrapper' className='pb-[20px] px-8 flex items-center justify-between'>
            <Share />
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

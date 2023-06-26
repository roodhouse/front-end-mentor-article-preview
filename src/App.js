import './App.css';
import Image from './components/Image';
import Share from './components/Share';
import Text from './components/Text';

function App() {
  return (
    <div className="App xl:h-screen">
      <div id='wrapper' className='bg-offWhite pt-[74px] px-6 pb-[89px] h-full flex justify-center xl:items-center'>
        <div id='contwentWrapper' className='h-full flex flex-col bg-white rounded-[10px] shadow-[0px_40px_40px_-10px_rgba(201,213,225,0.50)] max-w-[327px] xl:max-w-[730px] xl:w-[730px] xl:h-[280px] xl:flex-row xl:flex-wrap'>
          <div id='imageWrapper' className='w-[327px] h-[262px] rounded-[10px_10px_0px_0px] bg-white xl:w-[285px] xl:h-[280px] xl:rounded-[10px_0px_0px_10px]'>
            <Image />
          </div>
          <div id='textShareWrapper'>
            <div id='textWrapper' className='px-8 pb-[52px] xl:px-10 xl:w-[444px] xl:pt-8 xl:pb-[20px]'>
              <Text />
            </div>
            <div id='shareWrapper'>
              <Share />
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}

export default App;

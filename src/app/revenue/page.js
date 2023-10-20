import React from 'react';
import MainPage from '../../../Component/dashBoardUi/mainPage'; // Corrected the component name
import ChartBar from '../../../Component/dashBoardUi/chartBar';

const Page = () => {
  return (
    <div>
      <MainPage />
      <div className='bg-black text-white mt-5'>
      <ChartBar/>
    </div>    </div>
  );
};

export default Page;

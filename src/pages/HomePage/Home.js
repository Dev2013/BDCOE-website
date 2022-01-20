import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour,homeObjFive } from './Data';
import { InfoSection } from '../../components';
import App2 from '../../App2';
import Domain from '../Domain/Domain';



function Home() {
  return (
    <>
      <div id="first"><InfoSection {...homeObjOne} pgNo={1} /></div>
      <div id="second"><InfoSection {...homeObjThree} pgNo={2} /></div>
    <div id="dom"><Domain /></div>
    <div id="eng"><App2/></div>
     <div id="third"><InfoSection {...homeObjTwo} pgNo={3} /></div>
      <div id="forth"><InfoSection {...homeObjFive} pgNo={4}/></div>
    <div id="fifth"><InfoSection {...homeObjFour} pgNo={5} /></div>
    </>
  );
}

export default Home;

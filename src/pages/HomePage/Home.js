import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour,homeObjFive } from './Data';
import { InfoSection } from '../../components';
import Card from '../team/Card';
import Domain from '../Domain/Domain';
// import SignUp from '../SignUp/SignUp';



function Home() {
  return (
    <>
      <div id="first"><InfoSection {...homeObjOne} /></div>
      <div id="second"><InfoSection {...homeObjThree} /></div>
      <div id="third"><InfoSection {...homeObjTwo} /></div>
      <div id="forth"><InfoSection {...homeObjFive} /></div>
    {/* <div id  ="six"><SignUp /></div> */}
    <div id="fifth"><InfoSection {...homeObjFour} /></div>
    <div id="dom"><Domain /></div>
    <div id="eng"><Card/></div>
    </>
  );
}

export default Home;



import React, { useEffect, useRef, ReactElement , useState } from "react";
import ReactDOM from "react-dom";
import {Loader, LoaderOptions} from '@googlemaps/js-api-loader';
// import { Wrapper, Status } from "../src";


export const Wrapper = ({
  children,
  render,
  callback,
  ...options
}) => {
  const [status, setStatus] = useState('LOADING');

  useEffect(() => {
    const loader = new Loader(options);

    const setStatusAndExecuteCallback = (status) => {
      if (callback) callback(status, loader);
      setStatus(status);
    };

    setStatusAndExecuteCallback('LOADING');

    loader.load().then(
      () => setStatusAndExecuteCallback('SUCCESS'),
      () => setStatusAndExecuteCallback('FAILURE')
    );
  }, []);

  if (status === 'SUCCESS' && children) return <>{children}</>;

  if (render) return render(status);

  return <></>;
}
const render = (status) => {
  if (status === 'LOADING') return <h3>{status} ..</h3>;
  if (status === 'FAILURE') return <h3>{status} ...</h3>;
  return null;
};

function MyMapComponent({
  center,
  zoom,
}) {
  const ref = useRef();

  useEffect(() => {
    new window.google.maps.Map(ref.current, {
      center,
      zoom,
    });
  });

  return <div ref={ref} id="map" style={{backgroundColor:"wheat"}} >Hello</div>;
}

export function Maps() {
  const center = { lat: -34.397, lng: 150.644 };
  const zoom = 4;

  return (
    // <Wrapper apiKey="AIzaSyBG7u2wmQFRtEjbjt4XLl9oe6fQMYcfuG0" render={render}>
    //   <MyMapComponent center={center} zoom={zoom} />
    // </Wrapper>
    <a target="_blank" href="https://www.google.com/maps/place/Big+Data+Centre+of+Excellence,+Research+%26+Development+Department,+Delhi+Hapur+Bypass,+Adhyatmik+Nagar,+Ghaziabad,+Uttar+Pradesh+201009/@28.6754874,77.5028737,18z/data=!4m2!3m1!1s0x390cf242dd497749:0xcbec8fb8df29e91d?hl=en-US"><img class="" src="./maps3.png" height={'80%'} width={'80%'}/></a>
  );
};
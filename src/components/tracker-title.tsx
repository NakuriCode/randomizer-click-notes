import React, { ReactElement } from 'react';
import FF4Border from '../assets/ff4-border.png';

export default function TrackerTitle(): ReactElement {
  return (
    <div
      style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
      className="relative bg-ff4-blue text-[42px] uppercase text-white border-4 border-solid border-transparent leading-[1] p-1 w-full h-min text-center flex-[0_0_100%]"
    >
      <p>FF4FE Shop Note Clicker</p>
      <span className="absolute -bottom-[13px] right-0 mx-1 text-2xl text-green-500 uppercase">
        v0.9 By Nakuri
      </span>
    </div>
  );
}

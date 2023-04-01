/* eslint-disable max-len */
import React, { ReactElement } from 'react';
import FF4Border from '../assets/ff4-border.png';
import adjustLowFontsFonts from '../utility/adjust-low-fonts';

export default function TrackerTitle(): ReactElement {
  const isThinMode = localStorage.getItem('thinmode') === 'true';

  return (
    <div
      style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
      className={`relative bg-ff4-blue ${
        isThinMode ? 'text-[32px]' : 'text-[42px]'
      } uppercase text-white border-4 border-solid border-transparent leading-[0.6] p-1 w-full h-min text-center`}
    >
      <p className={adjustLowFontsFonts('lg')}>FF4FE Shop Note Clicker</p>
      <span
        className={`${adjustLowFontsFonts(
          'lg'
        )} absolute -bottom-[26px] left-0 mx-1 text-2xl text-green-800 uppercase`}
      >
        v1.0 By Nakuri
      </span>
    </div>
  );
}

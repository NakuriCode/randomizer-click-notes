import React, { ReactElement } from 'react';
import FF4Border from '../assets/ff4-border.gif';
import FF4Background from '../assets/ff4_bg.jpg';

export default function FooterBanner(): ReactElement {
  return (
    <>
      <div
        style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
        className="overflow-hidden w-full h-[100px] flex mt-12 mb-4 justify-center items-center rounded border-[5px] border-gray-50"
      >
        <img className="w-full" src={FF4Background} />
      </div>
      <p className="digital-disco text-white text-lg sm:text-xl">
        FF4 Free Enterprise:{' '}
        <a
          className="digital-disco text-blue-300 underline text-lg sm:text-xl mb-1 font-bold "
          href="http://ff4fe.com/"
          target="_blank"
        >
          FF4FE Homepage
        </a>
      </p>

      <p className="digital-disco text-white text-lg sm:text-xl mb-4">
        You can find this project on{' '}
        <a
          className="digital-disco text-blue-300 underline text-lg sm:text-xl font-bold "
          href="https://github.com/NakuriCode/randomizer-click-notes"
          target="_blank"
        >
          Github
        </a>
      </p>

      <p className="digital-disco text-white text-lg sm:text-xl">
        Questions? Contact me on Discord:
      </p>
      <p className="digital-disco text-lg sm:text-xl text-green-500 uppercase mb-1 font-bold ">
        {' '}
        Nakuri#5176
      </p>
    </>
  );
}

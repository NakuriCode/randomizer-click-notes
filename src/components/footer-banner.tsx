import React, { ReactElement } from 'react';
import FF4Border from '../assets/ff4-border.gif';
import FF4Background from '../assets/ff4_bg.jpg';

export default function FooterBanner(): ReactElement {
  return (
    <>
      <div
        style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
        className="overflow-hidden w-full h-[100px] flex mt-12  justify-center items-center rounded border-[5px] border-gray-50"
      >
        <img className="w-full" src={FF4Background} />
      </div>

      <p className="digital-disco font-bold text-red-400 text-[10px] mb-4 text-center sm:text-lg ">
        Unsupported in v0.9: Safari, small mobile devices
      </p>

      <p className="digital-disco text-white text-lg sm:text-xl">
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
        Questions? Contact me on Discord:{' '}
        <span className="digital-disco text-lg sm:text-xl text-green-500 uppercase mb-1 font-bold ">
          Nakuri#5176
        </span>
      </p>
      <p className="digital-disco text-white text-lg sm:text-xl">
        Find me on Twitch:{' '}
        <span className="digital-disco text-lg sm:text-xl text-green-500 uppercase mb-1 font-bold ">
          <a
            className="digital-disco text-purple-400 underline text-lg sm:text-xl font-bold "
            href="https://www.twitch.tv/nakuri"
            target="_blank"
          >
            twitch.tv/nakuri
          </a>
        </span>
      </p>
    </>
  );
}

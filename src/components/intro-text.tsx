import React, { ReactElement } from 'react';

export default function IntroText(): ReactElement {
  return (
    <>
      <h1 className="digital-disco text-3xl font-bold sm:text-5xl text-white my-1 sm:my-2 uppercase leading-none sm:whitespace-nowrap">
        Randomizer Note Clicker
      </h1>
      <p className="digital-disco font-bold text-green-500 max-[375px]:text-xl text-2xl sm:text-3xl text-center mb-4">
        By Nakuri - v0.9
      </p>
      <p className="digital-disco text-white mb-8 text-lg sm:text-xl text-justify max-[375px]:hidden">
        Create quick little notes without the need of a keyboard. Just grab your mouse or use touch
        to click away and create the notes you need during a Randomizer run.
      </p>
      <h2 className="digital-disco text-2xl font-bold sm:text-3xl text-white mb-4 text-center leading-none">
        Randomizer Note Clickers:
      </h2>
    </>
  );
}

import React, { ReactElement, useState } from 'react';
import { RandomizerType } from '../types/enum/randomizer';
import NewWindow from 'react-new-window';

export default function StartPage(): ReactElement {
  const [isNoteClickerOpen, setIsNoteClickerOpen] = useState(false);

  function openNoteClicker(game: RandomizerType): void {
    console.log('Click!', game);
    setIsNoteClickerOpen(true);
  }

  return (
    <div className="bg-black w-full h-full flex justify-center items-center flex-col">
      <h1 className="text-4xl text-white my-2">Randomizer Note Clicker</h1>
      <div
        onClick={() => openNoteClicker(RandomizerType.FF4)}
        className="bg-blue-800 text-white rounded border-4 border-gray-50 p-2 cursor-pointer text-3xl"
      >
        Open FF4FE Shop Note Clicker
      </div>
      {isNoteClickerOpen && (
        <NewWindow
          url="/ff4fe-shop-clicker"
          title="FF4FE Shop Clicker"
          features={{ width: 380, height: 700 }}
          copyStyles
          onUnload={() => setIsNoteClickerOpen(false)}
        />
      )}
    </div>
  );
}

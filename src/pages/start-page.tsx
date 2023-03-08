import React, { ReactElement, useState } from 'react';
import { NewWindow } from 'react-window-open';
import { RandomizerType } from '../types/randomizer';

export default function StartPage(): ReactElement {
  const [isNoteClickerOpen, setIsNoteClickerOpen] = useState(false);

  function openNoteClicker(game: RandomizerType): void {
    console.log('Click!', game);
    setIsNoteClickerOpen(true);
  }

  return (
    <div className="bg-black w-full h-full flex justify-center items-center flex-col">
      <h1 className="text-xl text-white my-2">Randomizer Note Clicker</h1>
      <div
        onClick={() => openNoteClicker(RandomizerType.FF4)}
        className="bg-blue-800 text-white rounded border-4 border-gray-50 p-2"
      >
        Open FF4FE Shop Note Clicker
      </div>
      {isNoteClickerOpen && (
        <NewWindow
          top={200}
          left={200}
          width={400}
          height={700}
          onClose={() => setIsNoteClickerOpen(false)}
        >
          <p>Hello!</p>
        </NewWindow>
      )}
    </div>
  );
}

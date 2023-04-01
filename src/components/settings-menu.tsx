/* eslint-disable max-len */
import React, { ReactElement, useState } from 'react';
import FF4Border from '../assets/ff4-border.png';
import adjustLowFontsFonts from '../utility/adjust-low-fonts';
import NewWindow from 'react-new-window';
import { FF4Note } from '../types/ff4-types';

type Props = {
  editNoteList(noteList: FF4Note[]): void;
  setIsSettingsOpen(open: boolean): void;
};

export default function SettingsMenu(props: Props): ReactElement {
  const { editNoteList, setIsSettingsOpen } = props;

  const isThinMode = localStorage.getItem('thinmode') === 'true';
  const isJItemDisabled = localStorage.getItem('isJItemDisabled') === 'true';

  const [isNewNoteClickerOpen, setIsNewNoteClickerOpen] = useState(false);
  const [showJItemsDisabled, setShowJItemsDisabled] = useState(isJItemDisabled);

  function toggleThinMode(): void {
    if (isThinMode) {
      localStorage.setItem('thinmode', 'false');
    } else {
      localStorage.setItem('thinmode', 'true');
    }

    setIsNewNoteClickerOpen(true);
    close();
  }

  function toggleJItemSetting(): void {
    if (isJItemDisabled) {
      localStorage.setItem('isJItemDisabled', 'false');
      setShowJItemsDisabled(false);
    } else {
      localStorage.setItem('isJItemDisabled', 'true');
      setShowJItemsDisabled(true);
    }

    setIsNewNoteClickerOpen(true);
    close();
  }

  return (
    <div className="absolute z-10 top-0 left-0 right-0 bottom-0">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"
        onClick={() => setIsSettingsOpen(false)}
      />
      <div
        style={{
          borderImage: `url(${FF4Border}) 30 stretch`
        }}
        className={`fixed bg-ff4-blue text-white rounded border-4 border-gray-50 py-1 left-1/2 -translate-x-1/2 top-5 px-2 w-5/6`}
      >
        <h2 className="text-4xl leading-[0.8] mb-3">Configuration</h2>
        <div className="flex items-center gap-2 mb-4">
          <div
            onClick={() => editNoteList([])}
            style={{
              borderImage: `url(${FF4Border}) 30 stretch`
            }}
            className="rounded border-4 border-gray-50 w-6 h-6 flex-[0_0_1.5rem] cursor-pointer hover:bg-blue-600"
          />
          <p className={`text-3xl ${adjustLowFontsFonts('lg')}`}>Reset All Items</p>
        </div>
        <div className="flex items-center gap-2 mb-1">
          <div
            onClick={() => toggleThinMode()}
            style={{
              borderImage: `url(${FF4Border}) 30 stretch`
            }}
            className="rounded border-4 border-gray-50 w-6 h-6 flex-[0_0_1.5rem] cursor-pointer hover:bg-blue-600"
          />
          <p className={`text-3xl leading-[0.5] ${adjustLowFontsFonts('lg')}`}>
            {`Switch to`}
            <br /> {isThinMode ? 'Non-ordered Notes' : 'Shop-ordered Notes'}
          </p>
        </div>

        <p className="text-xl leading-[0.5] mb-4">
          {isThinMode
            ? 'With non-ordered Notes, your created notes appear in the order as you create them. Requires a bit more width.'
            : 'With shop-ordered Notes, all your notes are automatically categorized under shop-categories. This mode requires less space in width.'}
        </p>
        <div className="flex items-center gap-2 mb-1">
          <div
            onClick={() => toggleJItemSetting()}
            style={{
              borderImage: `url(${FF4Border}) 30 stretch`
            }}
            className={`rounded border-4 border-gray-50 w-6 h-6 flex-[0_0_1.5rem] cursor-pointer ${
              showJItemsDisabled && 'bg-white'
            } hover:bg-blue-600`}
          />
          <p className={`text-3xl ${adjustLowFontsFonts('lg')}`}>Hide J-Items</p>
        </div>
      </div>

      {isNewNoteClickerOpen && (
        <NewWindow
          url="/ff4fe-shop-clicker"
          title="FF4FE Shop Clicker"
          features={{ width: isThinMode ? 300 : 400, height: 700 }}
          copyStyles
          onUnload={() => setIsNewNoteClickerOpen(false)}
        />
      )}
    </div>
  );
}

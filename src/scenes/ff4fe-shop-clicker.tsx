/* eslint-disable max-len */
import React, { ReactElement, useEffect, useState } from 'react';
import ItemList from '../components/item-selector/item-list';
import ItemTypeContainer from '../components/item-selector/item-type-container';
import NoteContainer from '../components/note-list/note-container';
import TrackerTitle from '../components/tracker-title';
import '../styles/globals.css';
import { FF4ItemFormat, FF4Note } from '../types/ff4-types';
import { Dimension } from '../types/generic';
import FF4Border from '../assets/ff4-border.png';
import adjustLowFontsFonts from '../utility/adjust-low-fonts';
import NewWindow from 'react-new-window';

export default function FF4FEShopClicker(): ReactElement {
  const [isNoteClickerOpen, setIsNoteClickerOpen] = useState(false);
  const [currentItemType, setCurrentItemType] = useState<FF4ItemFormat>({
    name: '',
    icon: '',
    items: []
  });
  const [isItemListOpen, setIsItemListOpen] = useState(false);
  const [itemListPosition, setItemListPosition] = useState<Dimension>({
    x: 0,
    y: 0
  });

  const [noteList, setNoteList] = useState<FF4Note[]>([]);

  function submitNoteEntry(newEntry: FF4Note): void {
    setNoteList([...noteList, newEntry]);
  }

  const isThinMode = localStorage.getItem('thinmode') === 'true';

  function toggleThinMode(): void {
    if (isThinMode) {
      localStorage.setItem('thinmode', 'false');
    } else {
      localStorage.setItem('thinmode', 'true');
    }

    setIsNoteClickerOpen(true);
    close();
  }

  useEffect(() => {
    console.log('noteList', noteList);
  }, [noteList]);

  return (
    <div className="bg-gradient-to-b from-gradient-gray-light to-gradient-gray-dark w-[screen] h-screen flex p-2 gap-2 flex-wrap items-start">
      <TrackerTitle />
      <NoteContainer noteList={noteList} editNoteList={setNoteList} />
      <div className="flex-1 max-w-[470px] flex flex-col items-center gap-6">
        <ItemTypeContainer
          setItemType={setCurrentItemType}
          openItemList={() => setIsItemListOpen(true)}
          setItemListPosition={setItemListPosition}
        />
        <div
          style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
          className="bg-ff4-blue text-4xl leading-[0.75] text-white rounded border-4 border-gray-50 py-1 px-2 w-min cursor-pointer"
          onClick={() => setNoteList([])}
        >
          <p className={adjustLowFontsFonts('lg')}>Reset</p>
        </div>
        <div
          style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
          className="bg-ff4-blue text-4xl leading-[0.75] text-white rounded border-4 border-gray-50 py-1 px-2 w-min cursor-pointer"
          onClick={() => toggleThinMode()}
        >
          <p className={adjustLowFontsFonts('lg')}>Switch</p>
        </div>
      </div>
      {isItemListOpen && (
        <ItemList
          itemType={currentItemType}
          closeItemList={() => setIsItemListOpen(false)}
          position={itemListPosition}
          submitNoteEntry={submitNoteEntry}
        />
      )}
      {isNoteClickerOpen && (
        <NewWindow
          url="/ff4fe-shop-clicker"
          title="FF4FE Shop Clicker"
          features={{ width: isThinMode ? 300 : 400, height: 700 }}
          copyStyles
          onUnload={() => setIsNoteClickerOpen(false)}
        />
      )}
    </div>
  );
}

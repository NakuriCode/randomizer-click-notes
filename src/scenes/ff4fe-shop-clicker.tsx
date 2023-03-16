/* eslint-disable max-len */
import React, { ReactElement, useEffect, useState } from 'react';
import ItemList from '../components/item-list';
import ItemTypeContainer from '../components/item-type-container';
import NoteContainer from '../components/note-container';
import TrackerTitle from '../components/tracker-title';
import '../styles/globals.css';
import { FF4ItemFormat, FF4Note } from '../types/ff4-types';
import { Dimension } from '../types/generic';
import FF4Border from '../assets/ff4-border.png';
import adjustLowFontsFonts from '../utility/adjust-low-fonts';

export default function FF4FEShopClicker(): ReactElement {
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

  useEffect(() => {
    console.log('noteList', noteList);
  }, [noteList]);

  return (
    <div className="bg-gradient-to-b from-gradient-gray-light to-gradient-gray-dark w-[screen] h-screen flex p-2 gap-2 flex-wrap items-start min-w-[395px] min-h-[700px]">
      <TrackerTitle />
      <NoteContainer noteList={noteList} editNoteList={setNoteList} />
      <div className="flex-1 max-w-[450px] flex flex-col items-center gap-6 mt-6">
        <ItemTypeContainer
          setItemType={setCurrentItemType}
          openItemList={() => setIsItemListOpen(true)}
          setItemListPosition={setItemListPosition}
        />
        <div
          style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
          className="bg-ff4-blue text-4xl text-white rounded border-4 border-gray-50 py-1 px-2 w-min cursor-pointer"
          onClick={() => setNoteList([])}
        >
          <p className={adjustLowFontsFonts('lg')}>Reset</p>
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
    </div>
  );
}

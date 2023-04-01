/* eslint-disable max-len */
import React, { ReactElement, useEffect, useState } from 'react';
import ItemList from '../components/item-selector/item-list';
import ItemTypeContainer from '../components/item-selector/item-type-container';
import NoteContainer from '../components/note-list/note-container';
import TrackerTitle from '../components/tracker-title';
import '../styles/globals.css';
import { FF4ItemFormat, FF4Note } from '../types/ff4-types';
import { Dimension } from '../types/generic';
import SettingsButton from '../components/buttons/settings-button';

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
    <div className="bg-gradient-to-b from-gradient-gray-light to-gradient-gray-dark w-[screen] h-screen flex p-2 gap-2 flex-wrap items-start">
      <div className="flex gap-2 items-center">
        <TrackerTitle />
        <SettingsButton editNoteList={setNoteList} />
      </div>

      <NoteContainer noteList={noteList} editNoteList={setNoteList} />
      <div className="flex-1 max-w-[470px] flex flex-col items-center gap-6 h-5/6">
        <ItemTypeContainer
          setItemType={setCurrentItemType}
          openItemList={() => setIsItemListOpen(true)}
          setItemListPosition={setItemListPosition}
        />
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

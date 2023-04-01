/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable max-len */
import React, { ReactElement } from 'react';
import { FF4Note } from '../../types/ff4-types';
import short from 'short-uuid';
import adjustLowFontsFonts from '../../utility/adjust-low-fonts';
import TrashNoteButton from '../buttons/trash-note-button';

type Props = {
  shop: { name: string; color: string };
  filteredNoteList: FF4Note[];
  removeItem(noteId: string): void;
};

export default function ShopAccordion(props: Props): ReactElement {
  const { shop, filteredNoteList, removeItem } = props;

  return (
    <ul>
      <li
        className={`text-2xl px-1 bg-[rgba(0,0,0,0.3)]  leading-[0.65] ${
          shop.color
        } ${adjustLowFontsFonts('sm')}`}
      >
        {shop.name}
      </li>
      {filteredNoteList.map((note) => (
        <li
          key={short.generate()}
          className="text-3xl flex gap-2 px-3 justify-between leading-[0.75] relative group select-none"
        >
          <div className="flex gap-2 items-center">
            <img className="w-3 h-3" src={note.icon} />
            <span className={adjustLowFontsFonts('sm')}>{note.name}</span>
          </div>
          <TrashNoteButton noteId={note.id} onClick={removeItem} />
        </li>
      ))}
    </ul>
  );
}

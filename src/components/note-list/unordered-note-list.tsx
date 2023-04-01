/* eslint-disable max-len */
import React, { ReactElement } from 'react';
import { FF4Note } from '../../types/ff4-types';
import short from 'short-uuid';
import adjustLowFontsFonts from '../../utility/adjust-low-fonts';
import TrashNoteButton from '../buttons/trash-note-button';

type Props = {
  noteList: FF4Note[];
  editNoteList(noteList: FF4Note[]): void;
};

export default function UnorderedNoteList(props: Props): ReactElement {
  const { noteList, editNoteList } = props;

  function removeItem(noteId: string): void {
    editNoteList(noteList.filter((note) => note.id !== noteId));
  }

  return (
    <ul className="pt-2">
      {noteList.map((note) => (
        <li
          key={short.generate()}
          className="text-3xl px-3 flex gap-2 justify-between leading-[0.85] relative group select-none"
        >
          <div className="flex gap-2 items-center">
            <img className="w-3 h-3" src={note.icon} />
            <span className={adjustLowFontsFonts('sm')}>{note.name}</span>
          </div>
          <span className={`${note.shop.color} ${adjustLowFontsFonts('sm')}`}>
            {note.shop.name}
          </span>
          <TrashNoteButton noteId={note.id} onClick={removeItem} />
        </li>
      ))}
    </ul>
  );
}

import React, { ReactElement } from 'react';
import { FF4Note } from '../types/ff4-types';
import short from 'short-uuid';
import { TrashBinIcon } from '../icons/icons';
import FF4Border from '../assets/ff4-border.png';
import adjustMacOsFonts from '../utility/adjustMacOs';

type Props = {
  noteList: FF4Note[];
  editNoteList(noteList: FF4Note[]): void;
};

export default function NoteContainer(props: Props): ReactElement {
  const { noteList, editNoteList } = props;

  function removeItem(noteId: string): void {
    editNoteList(noteList.filter((note) => note.id !== noteId));
  }

  return (
    <div
      style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
      className="bg-ff4-blue text-white rounded border-4 border-gray-50 py-1 px-2 w-56 h-5/6"
    >
      <ul>
        {noteList.map((note) => (
          <li
            key={short.generate()}
            className="text-3xl flex gap-2 justify-between leading-[0.85] relative group select-none"
          >
            <div className="flex gap-2 items-center">
              <img className="w-3 h-3" src={note.icon} />
              <span className={adjustMacOsFonts('sm')}>{note.name}</span>
            </div>
            <span className={`${note.shop.color} ${adjustMacOsFonts('sm')}`}>{note.shop.name}</span>
            <div
              onClick={() => removeItem(note.id)}
              className="absolute top-1/2 -translate-y-[60%] -left-6 w-7 h-7 cursor-pointer"
            >
              <img
                className="w-full opacity-0 transition-opacity group-hover:opacity-100"
                src={TrashBinIcon}
              />
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

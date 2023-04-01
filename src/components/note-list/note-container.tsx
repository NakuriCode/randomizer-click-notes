/* eslint-disable max-len */
import React, { ReactElement } from 'react';
import { FF4Note } from '../../types/ff4-types';
import FF4Border from '../../assets/ff4-border.png';
import UnorderedNoteList from './unordered-note-list';
import OrderedNoteList from './ordered-note-list';

type Props = {
  noteList: FF4Note[];
  editNoteList(noteList: FF4Note[]): void;
};

export default function NoteContainer(props: Props): ReactElement {
  const { noteList, editNoteList } = props;

  const isThinMode = localStorage.getItem('thinmode') === 'true';

  return (
    <div
      style={{ overflow: 'overlay', borderImage: `url(${FF4Border}) 30 stretch` }}
      className={`bg-ff4-blue scrollbar-thin scrollbar-thumb-[rgba(0,0,0,0.5)] text-white rounded border-4 border-gray-50 ${
        isThinMode ? 'w-36' : 'w-60'
      } h-5/6`}
    >
      {isThinMode ? (
        <OrderedNoteList noteList={noteList} editNoteList={editNoteList} />
      ) : (
        <UnorderedNoteList noteList={noteList} editNoteList={editNoteList} />
      )}
    </div>
  );
}

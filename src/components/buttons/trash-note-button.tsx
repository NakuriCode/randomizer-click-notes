/* eslint-disable max-len */
import React, { ReactElement } from 'react';
import { TrashBinIcon } from '../../icons/icons';

type Props = {
  noteId: string;
  onClick(id: string): void;
};

export default function TrashNoteButton(props: Props): ReactElement {
  const { noteId, onClick } = props;

  return (
    <div
      onClick={() => onClick(noteId)}
      className="absolute top-1/2 -translate-y-[60%] left-[6px] w-6 h-6 cursor-pointer"
    >
      <img
        className="w-full opacity-0 transition-opacity group-hover:opacity-100"
        src={TrashBinIcon}
      />
    </div>
  );
}

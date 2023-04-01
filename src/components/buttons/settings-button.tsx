/* eslint-disable max-len */
import React, { ReactElement, useState } from 'react';
import FF4Border from '../../assets/ff4-border.gif';
import { SettingsIcon } from '../../icons/icons';
import SettingsMenu from '../settings-menu';
import { FF4Note } from '../../types/ff4-types';

type Props = {
  editNoteList(noteList: FF4Note[]): void;
};

export default function SettingsButton(props: Props): ReactElement {
  const { editNoteList } = props;
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  function openSettings(): void {
    setIsSettingsOpen(true);
  }

  return (
    <>
      <div
        style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
        className="bg-ff4-blue text-white rounded border-4 border-gray-50 p-2 cursor-pointer flex-[1_1_3rem] flex items-center"
        onClick={() => openSettings()}
      >
        <img className="w-5 h-5" src={SettingsIcon} />
      </div>
      {isSettingsOpen && (
        <SettingsMenu editNoteList={editNoteList} setIsSettingsOpen={setIsSettingsOpen} />
      )}
    </>
  );
}

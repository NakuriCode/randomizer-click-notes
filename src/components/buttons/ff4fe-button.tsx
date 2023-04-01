/* eslint-disable max-len */
import React, { ReactElement } from 'react';
import NakuriFF4Inactive from '../../assets/nakuri_i.png';
import NakuriFF4Active from '../../assets/nakuri_t.png';
import FF4Border from '../../assets/ff4-border.gif';
import adjustLowFontsFonts from '../../utility/adjust-low-fonts';

type Props = {
  setIsNoteClickerOpen(open: boolean): void;
};

export default function FF4FEButton(props: Props): ReactElement {
  const { setIsNoteClickerOpen } = props;

  function handleClick(): void {
    setIsNoteClickerOpen(true);
  }

  return (
    <div className="w-full flex gap-3 justify-center items-center group">
      <img src={NakuriFF4Inactive} className="w-10 opacity-50 group-hover:hidden" />
      <img src={NakuriFF4Active} className="w-10 hidden group-hover:block" />

      <div
        style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
        onClick={() => handleClick()}
        className="bg-ff4-blue transition-colors text-white rounded border-[5px] border-gray-50 p-1 cursor-pointer max-[375px]:text-3xl text-4xl uppercase text-center group-hover:bg-ff4-blue-light"
      >
        <p className={adjustLowFontsFonts('sm')}>FF4FE Shop Note Clicker</p>
      </div>
    </div>
  );
}

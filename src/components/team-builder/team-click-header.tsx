/* eslint-disable max-len */
import React, { ReactElement } from 'react';
import FF4Border from '../../assets/ff4-border.png';
import TeamBuildingLogo from '../../assets/team-building-logo.png';
import adjustLowFontsFonts from '../../utility/adjust-low-fonts';

type Props = {
  resetParty(): void;
};

export default function TeamClickHeader(props: Props): ReactElement {
  const { resetParty } = props;

  return (
    <div className="flex justify-between items-center">
      <img className="w-32" src={TeamBuildingLogo} />
      <span
        className={`${adjustLowFontsFonts(
          'lg'
        )} absolute -bottom-[26px] left-0 mx-1 text-2xl text-green-800 uppercase`}
      >
        v1.0 By Nakuri
      </span>
      <div
        style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
        className="bg-ff4-blue text-white border-4 border-solid border-transparent text-3xl px-3 cursor-pointer"
        onClick={() => resetParty()}
      >
        Reset
      </div>
    </div>
  );
}

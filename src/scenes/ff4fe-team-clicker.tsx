/* eslint-disable max-len */
import React, { ReactElement, useEffect, useState } from 'react';
import '../styles/globals.css';

import { FF4Party } from '../types/ff4-types';
import PartyDisplay from '../components/team-builder/party-display';
import SelectableCharacters from '../components/team-builder/selectable-characters';
import TeamClickHeader from '../components/team-builder/team-click-header';

export default function FF4FETeamClicker(): ReactElement {
  const [currentParty, setCurrentParty] = useState<FF4Party>([]);
  const [currentTotalValue, setCurrentTotalValue] = useState(0);

  useEffect(() => {
    const totalValue = currentParty.reduce(
      (total, character) => total + Number(character.value),
      0
    );
    setCurrentTotalValue(totalValue);
  }, [currentParty, setCurrentTotalValue]);

  return (
    <div className="bg-black p-2 w-screen h-screen">
      <TeamClickHeader resetParty={() => setCurrentParty([])} />
      <PartyDisplay party={currentParty} editParty={setCurrentParty} />
      <SelectableCharacters
        party={currentParty}
        editParty={setCurrentParty}
        totalValue={currentTotalValue}
      />
    </div>
  );
}

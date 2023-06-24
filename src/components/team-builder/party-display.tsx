import React, { ReactElement } from 'react';
import FF4Border from '../../assets/ff4-border.png';
import { FF4Party } from '../../types/ff4-types';
import { uuid } from 'short-uuid';
import * as Sprites from '../../icons/characters';

type Props = {
  party: FF4Party;
  editParty(character: FF4Party): void;
};

export default function PartyDisplay(props: Props): ReactElement {
  const { party, editParty } = props;

  function countValue(): number {
    if (party.length === 0) {
      return 0;
    } else {
      const totalValue = party.reduce((total, character) => total + Number(character.value), 0);
      return totalValue;
    }
  }

  function removeCharacter(id: string): void {
    editParty(party.filter((character) => character.id !== id));
  }

  function renderCharacters(): ReactElement[] {
    const characters = [];
    for (let i = 0; i < 5; i++) {
      if (i < party.length) {
        characters.push(
          <div
            key={uuid()}
            className="h-16 w-10 mx-2 cursor-pointer"
            onClick={() => removeCharacter(party[i].id)}
          >
            <img className="w-full" src={party[i].sprite} />
          </div>
        );
      } else {
        characters.push(
          <div key={uuid()} className="h-16 w-10 mx-2">
            <img
              className={`${countValue() > 34 ? 'opacity-0' : 'opacity-70'} w-full`}
              src={Sprites.UnknownSprite}
            />
          </div>
        );
      }
    }

    return characters;
  }

  return (
    <div
      style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
      className="bg-ff4-blue w-full flex items-center justify-between border-4 border-solid border-transparent mb-3"
    >
      <div className="flex">{renderCharacters()}</div>
      <p className="text-8xl text-white">{`${countValue()}/40`}</p>
    </div>
  );
}

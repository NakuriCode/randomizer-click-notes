import React, { ReactElement, useEffect } from 'react';
import FF4Border from '../../assets/ff4-border.png';
import { FF4Party } from '../../types/ff4-types';
import { FF4Characters } from '../../data/ff4-characters';
import { uuid } from 'short-uuid';

type Props = {
  party: FF4Party;
  editParty(character: FF4Party): void;
  totalValue: number;
};

export default function SelectableCharacters(props: Props): ReactElement {
  const { party, editParty, totalValue } = props;

  useEffect(() => {
    console.log(editParty);
    console.log(totalValue);
  });

  return (
    <div
      style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
      className="bg-ff4-blue flex justify-center border-4 border-solid border-transparent py-3"
    >
      {FF4Characters.map((character) => (
        <div
          className={`w-8 h-12 mx-1 mb-2 relative ${
            totalValue + character.value > 40 || party.length === 5
              ? 'opacity-30 pointer-events-none'
              : 'opacity-100'
          }`}
          onClick={() =>
            editParty([
              ...party,
              {
                id: uuid(),
                name: character.name,
                sprite: character.sprite,
                value: character.value
              }
            ])
          }
        >
          <img
            className="w-full opacity-80 hover:opacity-100 cursor-pointer"
            src={character.sprite}
          />
          <p className="text-white text-4xl absolute -bottom-7 left-1/2 ml-[2px] -translate-x-1/2 pointer-events-none">
            {character.value}
          </p>
        </div>
      ))}
    </div>
  );
}

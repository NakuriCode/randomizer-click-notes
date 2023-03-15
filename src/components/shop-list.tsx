import React, { ReactElement } from 'react';
import { FF4ShopEntries } from '../data/ff4-shops';
import { FF4Note } from '../types/ff4-types';
import short from 'short-uuid';
import FF4Border from '../assets/ff4-border.png';
import adjustMacOsFonts from '../utility/adjustMacOs';

type Props = {
  submitNoteEntry(newEntry: FF4Note): void;
  currentItem: { name: string; icon: string };
  closeShopList(): void;
  closeItemList(): void;
  position: { x: number; y: number };
};

export default function ShopList(props: Props): ReactElement {
  const { submitNoteEntry, currentItem, closeShopList, closeItemList, position } = props;

  const windowHeight = window.innerHeight;

  const positionLeft = `${position.x}px`;
  const positionTop = position.y < windowHeight / 2 ? `${position.y}px` : 'auto';
  const positionBottom = position.y > windowHeight / 2 ? `${windowHeight - position.y}px` : 'auto';

  function addEntry(newEntry: FF4Note): void {
    submitNoteEntry(newEntry);
    closeShopList();
    closeItemList();
  }

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"
        onClick={closeShopList}
      />
      <div
        style={{
          top: position.y > 350 ? 'auto' : positionTop,
          left: positionLeft,
          bottom: positionBottom,
          borderImage: `url(${FF4Border}) 30 stretch`
        }}
        className={`fixed bg-ff4-blue text-gray-500 rounded border-4 border-gray-50 py-1 px-2 -translate-x-1/2 w-32`}
      >
        <ul>
          {FF4ShopEntries.map((shop) => (
            <li
              key={short.generate()}
              onClick={() =>
                addEntry({
                  id: short.generate(),
                  icon: currentItem.icon,
                  name: currentItem.name,
                  shop: { name: shop.name, color: shop.color }
                })
              }
              className="flex items-center gap-2 cursor-pointer hover:text-white"
            >
              <p className={`${adjustMacOsFonts('lg')} text-3xl leading-[0.85]`}>{shop.name}</p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

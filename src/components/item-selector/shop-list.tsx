import React, { ReactElement } from 'react';
import { FF4ShopEntries } from '../../data/ff4-shops';
import { FF4Note } from '../../types/ff4-types';
import short from 'short-uuid';
import FF4Border from '../../assets/ff4-border.png';
import adjustLowFontsFonts from '../../utility/adjust-low-fonts';

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
  const windowWidth = window.innerWidth;

  const positionLeft = position.x < windowWidth / 2 ? `${position.x}px` : 'auto';
  const positionRight = position.x > windowWidth / 2 ? `${windowWidth - position.x}px` : 'auto';
  const positionTop = position.y < windowHeight / 2 ? `${position.y}px` : 'auto';
  const positionBottom = position.y > windowHeight / 2 ? `${windowHeight - position.y}px` : 'auto';

  const horizontalTransform = position.x < windowWidth / 2 ? '-translate-x-10' : 'translate-x-10';

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
          top: positionTop,
          left: positionLeft,
          right: positionRight,
          bottom: positionBottom,
          borderImage: `url(${FF4Border}) 30 stretch`
        }}
        className={`fixed bg-ff4-blue text-gray-500 rounded border-4 border-gray-50 ${horizontalTransform} py-1 px-2 w-48`}
      >
        <ul className="flex flex-wrap">
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
              className="flex items-center gap-2 cursor-pointer hover:text-white flex-[1_1_50%]"
            >
              <p
                className={`${adjustLowFontsFonts('lg')} text-3xl leading-[0.85] ${
                  shop.color
                } hover:text-white`}
              >
                {shop.name}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

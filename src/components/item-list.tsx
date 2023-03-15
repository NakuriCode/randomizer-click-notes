import React, { ReactElement, useState } from 'react';
import { FF4ItemFormat, FF4Note } from '../types/ff4-types';
import { Dimension } from '../types/generic';
import ShopList from './shop-list';
import short from 'short-uuid';
import FF4Border from '../assets/ff4-border.png';
import adjustMacOsFonts from '../utility/adjustMacOs';

type Props = {
  itemType: FF4ItemFormat;
  closeItemList(): void;
  position: { x: number; y: number };
  submitNoteEntry(newEntry: FF4Note): void;
};

export default function ItemList(props: Props): ReactElement {
  const { itemType, closeItemList, position, submitNoteEntry } = props;

  const [showShopList, setShowShopList] = useState(false);
  const [currentItemName, setCurrentItemName] = useState('');
  const [shopListPosition, setShopListPosition] = useState<Dimension>({
    x: 0,
    y: 0
  });

  const windowHeight = window.innerHeight;

  const positionLeft = `${position.x}px`;
  const positionTop = position.y < windowHeight / 2 ? `${position.y}px` : 'auto';
  const positionBottom = position.y > windowHeight / 2 ? `${windowHeight - position.y}px` : 'auto';

  function openShopList(itemName: string, event: React.MouseEvent): void {
    setShopListPosition({ x: event.clientX, y: event.clientY });
    setShowShopList(true);
    setCurrentItemName(itemName);
  }

  return (
    <div className="absolute top-0 left-0 right-0 bottom-0">
      <div
        className="absolute top-0 left-0 right-0 bottom-0 bg-black opacity-50"
        onClick={closeItemList}
      />
      <div
        style={{
          top: positionTop,
          left: positionLeft,
          bottom: positionBottom,
          borderImage: `url(${FF4Border}) 30 stretch`
        }}
        className={`fixed bg-ff4-blue text-gray-500 rounded border-4 border-gray-50 py-1 px-2 -translate-x-full w-32`}
      >
        <ul>
          {itemType &&
            itemType.items.map((item) => (
              <li
                key={short.generate()}
                onClick={(e) => openShopList(item.name, e)}
                className="flex items-center gap-2 cursor-pointer hover:text-white"
              >
                <img className="w-3" src={itemType.icon} />
                <p className={`${adjustMacOsFonts('lg')} text-3xl leading-[0.85]`}>{item.name}</p>
              </li>
            ))}
        </ul>
      </div>
      {showShopList && (
        <ShopList
          currentItem={{ name: currentItemName, icon: itemType?.icon }}
          position={shopListPosition}
          closeShopList={() => setShowShopList(false)}
          closeItemList={() => closeItemList()}
          submitNoteEntry={submitNoteEntry}
        />
      )}
    </div>
  );
}

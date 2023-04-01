import React, { ReactElement } from 'react';
import { FF4ItemData } from '../../data/ff4-item-data';
import { FF4ItemFormat } from '../../types/ff4-types';
import FF4Border from '../../assets/ff4-border.png';
import { ItemCategory } from '../../types/enum/item-category';

type Props = {
  setItemType(itemtype: FF4ItemFormat): void;
  openItemList(): void;
  setItemListPosition(position: { x: number; y: number }): void;
};

export default function ItemTypeContainer(props: Props): ReactElement {
  const { setItemType, openItemList, setItemListPosition } = props;

  function initItemList(itemtype: FF4ItemFormat, event: React.MouseEvent): void {
    console.log('x', event.clientX);
    setItemListPosition({ x: event.clientX, y: event.clientY });
    setItemType(itemtype);
    openItemList();
  }

  return (
    <>
      <p className="text-3xl text-white leading-[0.7] px-0.5">Items</p>
      <div className="flex flex-wrap gap-2 justify-start mb-2">
        {FF4ItemData.filter((item) => item.category === ItemCategory.ITEM).map((itemtype) => (
          <div
            style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
            className="bg-ff4-blue text-white rounded border-4 border-gray-50 flex items-center justify-center p-2 cursor-pointer"
            onClick={(e) => initItemList(itemtype, e)}
            title={itemtype.name}
          >
            <img className="w-4" src={itemtype.icon} />
          </div>
        ))}
      </div>
      <p className="text-3xl text-white leading-[0.7] px-0.5">Weapons</p>
      <div className="flex flex-wrap gap-2 justify-start mb-2 ">
        {FF4ItemData.filter((item) => item.category === ItemCategory.WEAPON).map((itemtype) => (
          <div
            style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
            className="bg-ff4-blue text-white rounded border-4 border-gray-50 flex items-center justify-center p-2 cursor-pointer"
            onClick={(e) => initItemList(itemtype, e)}
            title={itemtype.name}
          >
            <img className="w-4" src={itemtype.icon} />
          </div>
        ))}
      </div>
      <p className="text-3xl text-white leading-[0.7] px-0.5">Armor</p>
      <div className="flex flex-wrap gap-2 justify-start mb-2">
        {FF4ItemData.filter((item) => item.category === ItemCategory.ARMOR).map((itemtype) => (
          <div
            style={{ borderImage: `url(${FF4Border}) 30 stretch` }}
            className="bg-ff4-blue text-white rounded border-4 border-gray-50 flex items-center justify-center p-2 cursor-pointer"
            onClick={(e) => initItemList(itemtype, e)}
            title={itemtype.name}
          >
            <img className="w-4" src={itemtype.icon} />
          </div>
        ))}
      </div>
    </>
  );
}

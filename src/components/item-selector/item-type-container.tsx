import React, { ReactElement } from 'react';
import { FF4ItemData } from '../../data/ff4-item-data';
import { FF4ItemFormat } from '../../types/ff4-types';
import { ItemCategory } from '../../types/enum/item-category';
import ItemCategorySection from './item-category-section';

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
      <ItemCategorySection
        categoryName="Items"
        itemCategory={ItemCategory.ITEM}
        initItemList={initItemList}
        itemData={FF4ItemData}
      />
      <ItemCategorySection
        categoryName="Weapons"
        itemCategory={ItemCategory.WEAPON}
        initItemList={initItemList}
        itemData={FF4ItemData}
      />
      <ItemCategorySection
        categoryName="Armor"
        itemCategory={ItemCategory.ARMOR}
        initItemList={initItemList}
        itemData={FF4ItemData}
      />
    </>
  );
}

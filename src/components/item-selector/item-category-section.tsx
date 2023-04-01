import React, { ReactElement } from 'react';
import { FF4ItemFormat } from '../../types/ff4-types';
import FF4Border from '../../assets/ff4-border.png';
import { ItemCategory } from '../../types/enum/item-category';

type Props = {
  categoryName: string;
  itemCategory: ItemCategory;
  itemData: FF4ItemFormat[];
  initItemList(itemtype: FF4ItemFormat, event: React.MouseEvent): void;
};

export default function ItemCategorySection(props: Props): ReactElement {
  const { categoryName, itemCategory, itemData, initItemList } = props;

  const isJItemDisabled = localStorage.getItem('isJItemDisabled') === 'true';

  const jItemFilteredData = isJItemDisabled
    ? itemData.filter((item) => !item.flags.includes('j-item'))
    : itemData;

  return (
    <>
      <p className="text-3xl text-white leading-[0.7] px-0.5">{categoryName}</p>
      <div className="flex flex-wrap gap-2 justify-start mb-2">
        {jItemFilteredData
          .filter((item) => item.category === itemCategory)
          .map((itemtype) => (
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

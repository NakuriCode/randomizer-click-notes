/* eslint-disable max-len */
import React, { ReactElement } from 'react';
import { FF4Note } from '../../types/ff4-types';
import { FF4ShopEntries } from '../../data/ff4-shops';
import ShopAccordion from './shop-accordion';

type Props = {
  noteList: FF4Note[];
  editNoteList(noteList: FF4Note[]): void;
};

export default function OrderedNoteList(props: Props): ReactElement {
  const { noteList, editNoteList } = props;

  function removeItem(noteId: string): void {
    editNoteList(noteList.filter((note) => note.id !== noteId));
  }

  function getNotesPerShop(shopname: string): FF4Note[] {
    return noteList.filter((note) => note.shop.name === shopname);
  }

  function isShopCategoryVisible(shopname: string): boolean {
    return noteList.some((note) => note.shop.name === shopname);
  }

  return (
    <ul>
      {FF4ShopEntries.map(
        (shop) =>
          isShopCategoryVisible(shop.name) && (
            <ShopAccordion
              shop={shop}
              filteredNoteList={getNotesPerShop(shop.name)}
              removeItem={removeItem}
            />
          )
      )}
    </ul>
  );
}

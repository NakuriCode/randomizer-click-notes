import React, { ReactElement, useState } from 'react';
import NewWindow from 'react-new-window';
import IntroText from '../components/intro-text';
import FF4FEButton from '../components/buttons/ff4fe-button';
import FooterBanner from '../components/footer-banner';

export default function StartPage(): ReactElement {
  const [isNoteClickerOpen, setIsNoteClickerOpen] = useState(false);

  const isThinMode = localStorage.getItem('thinmode');

  return (
    <div className="bg-gradient-to-b from-gradient-gray-light to-gradient-gray-dark w-full h-full flex p-4 sm:p-20 items-center justify-center flex-col">
      <div className="w-full sm:max-w-[475px] flex flex-col items-center">
        <IntroText />
        <FF4FEButton setIsNoteClickerOpen={setIsNoteClickerOpen} />
        <FooterBanner />
      </div>

      {isNoteClickerOpen && (
        <NewWindow
          url="/ff4fe-shop-clicker"
          title="FF4FE Shop Clicker"
          features={{ width: isThinMode === 'true' ? 320 : 400, height: 730 }}
          copyStyles
          onUnload={() => setIsNoteClickerOpen(false)}
        />
      )}
    </div>
  );
}

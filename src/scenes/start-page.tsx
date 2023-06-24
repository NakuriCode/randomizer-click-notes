import React, { ReactElement, useState } from 'react';
import NewWindow from 'react-new-window';
import IntroText from '../components/intro-text';
import FF4FEShopButton from '../components/buttons/ff4fe-shop-button';
import FooterBanner from '../components/footer-banner';
import FF4FETeamButton from '../components/buttons/ff4fe-team-button';

export default function StartPage(): ReactElement {
  const [isShopNoteClickerOpen, setIsShopNoteClickerOpen] = useState(false);
  const [isTeamNoteClickerOpen, setIsTeamNoteClickerOpen] = useState(false);

  const isThinMode = localStorage.getItem('thinmode');

  return (
    <div className="bg-gradient-to-b from-gradient-gray-light to-gradient-gray-dark w-full h-full flex p-4 sm:p-20 items-center justify-center flex-col">
      <div className="w-full sm:max-w-[475px] flex flex-col items-center">
        <IntroText />
        <FF4FEShopButton setIsNoteClickerOpen={setIsShopNoteClickerOpen} />
        <FF4FETeamButton setIsNoteClickerOpen={setIsTeamNoteClickerOpen} />
        <FooterBanner />
      </div>

      {isShopNoteClickerOpen && (
        <NewWindow
          url="/ff4fe-shop-clicker"
          title="FF4FE Shop Clicker"
          features={{ width: isThinMode === 'true' ? 320 : 400, height: 730 }}
          copyStyles
          onUnload={() => setIsShopNoteClickerOpen(false)}
        />
      )}

      {isTeamNoteClickerOpen && (
        <NewWindow
          url="/ff4fe-team-clicker"
          title="FF4FE Team Building Clicker"
          features={{ width: 500, height: 260 }}
          copyStyles
          onUnload={() => setIsTeamNoteClickerOpen(false)}
        />
      )}
    </div>
  );
}

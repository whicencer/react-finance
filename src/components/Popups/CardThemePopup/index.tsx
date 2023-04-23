import React, { useEffect, useState } from 'react';
import { IPopupStates } from '@typings/IPopupStates';
import Flex from '@shared/ui/Flex';
import { InvisibleButton, Preview, Image } from './cardThemePopup.styles';
import Popup from '@shared/ui/Popup';
import Button from '@shared/ui/Button';

import theme1 from '@assets/card_theme_1.png';
import theme2 from '@assets/card_theme_2.png';
import theme3 from '@assets/card_theme_3.png';
import { useChangeCardTheme } from './cardThemePopup.hooks';

export const CardThemePopup: React.FC<{popupState: IPopupStates, id: string}> = ({ popupState, id }) => {
  const [themeId, setThemeId] = useState(1);
  const [themeImage, setThemeImage] = useState();

  const changeTheme = useChangeCardTheme(id);

  useEffect(() => {
    import(`../../../assets/card_theme_${themeId}.png`).then(image => {
      setThemeImage(image.default);
    });
  }, [themeId]);
  useEffect(() => { return; }, [themeId]);

  const changeThemeHandler = () => {
    changeTheme(themeId);
  };

  return (
    <Popup isActive={popupState.isActive} setActive={popupState.setActive}>
      <Flex direction='column' justifyContent='center' alignItems='center'>
        <h2 style={{ marginBottom: '20px' }}>Choose your card theme</h2>
        <Preview src={themeImage} alt="current-theme" />
        <Flex style={{ margin: '20px', overflowX: 'auto', width: '100%' }} alignItems='center'>
          <InvisibleButton onClick={() => setThemeId(1)}>
            <Image src={theme1} alt="theme_1" />
          </InvisibleButton>
          <InvisibleButton onClick={() => setThemeId(2)}>
            <Image src={theme2} alt="theme_2" />
          </InvisibleButton>
          <InvisibleButton onClick={() => setThemeId(3)}>
            <Image src={theme3} alt="theme_3" />
          </InvisibleButton>
        </Flex>
        <Button style={{ width: '60%' }} onClick={changeThemeHandler}>Change theme</Button>
      </Flex>
    </Popup>
  );
};
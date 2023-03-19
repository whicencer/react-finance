import React, { useEffect, useState } from 'react';
import { IPopupStates } from '@typings/IPopupStates';
import Flex from '@shared/ui/Flex';
import { InvisibleButton, Preview, Image } from './cardThemePopup.styles';
import Popup from '@shared/ui/Popup';
import Button from '@shared/ui/Button';

import { useDispatch } from 'react-redux';
import { changeCardTheme } from '@store/slices/creditCards';
import { changeTheme } from './cardThemePopup.service';

import { toast } from 'react-toastify';
import { getRandomEmoji } from '@utils/getRandomEmoji';

import theme1 from '@assets/card_theme_1.png';
import theme2 from '@assets/card_theme_2.png';
import theme3 from '@assets/card_theme_3.png';

export const CardThemePopup: React.FC<{popupState: IPopupStates, id: string}> = ({ popupState, id }) => {
  const [themeId, setThemeId] = useState(1);
  const [themeImage, setThemeImage] = useState(null);

  useEffect(() => {
    import(`../../../assets/card_theme_${themeId}.png`).then(image => {
      setThemeImage(image.default);
    });
  }, [themeId]);
  useEffect(() => { return; }, [themeId]);

  const dispatch = useDispatch();

  const changeThemeHandler = () => {
    changeTheme(id, themeId).then(() => {
      dispatch(changeCardTheme({ id, themeId }));
      popupState.setActive(false);
      toast.success(`${getRandomEmoji()} Theme was successfully changed!`);
    });
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
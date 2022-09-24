import React, { useEffect, useState } from 'react';
import { IPopupStates } from '../../app/typings/IPopupStates';
import Flex from '../Flex';
import { InvisibleButton } from './cardThemePopup.styles';
import Popup from '../ui/Popup';
import { Image } from './cardThemePopup.styles';
import Button from '../ui/Button';

import { useDispatch } from 'react-redux';
import { changeCardTheme } from '../../store/slices/creditCards';
import { changeTheme } from './cardThemePopup.service';

export const CardThemePopup: React.FC<{popupState: IPopupStates, id: string}> = ({ popupState, id }) => {
  const [themeId, setThemeId] = useState(1);
  useEffect(() => { return; }, [themeId]);
  
  const dispatch = useDispatch();
  
  const changeThemeHandler = () => {
    changeTheme(id, themeId).then(() => {
      dispatch(changeCardTheme({ id, themeId }));
      popupState.setActive(false);
    });
  };

  return (
    <Popup isActive={popupState.isActive} setActive={popupState.setActive}>
      <Flex direction='column' justifyContent='center' alignItems='center'>
        <h2 style={{ marginBottom: '20px' }}>Choose your card theme</h2>
        <Image data-testid={'preview'} style={{ width: '300px' }} src={require(`../../assets/card_theme_${themeId}.png`)} alt="current-theme" />
        <Flex data-testid={'change-images'} style={{ margin: '20px', overflowX: 'auto', maxWidth: '45vw' }} justifyContent='space-between' alignItems='center'>
          <InvisibleButton onClick={() => setThemeId(1)}>
            <Image src={require('../../assets/card_theme_1.png')} alt="theme_1" />
          </InvisibleButton>
          <InvisibleButton onClick={() => setThemeId(2)}>
            <Image src={require('../../assets/card_theme_2.png')} alt="theme_2" />
          </InvisibleButton>
          <InvisibleButton onClick={() => setThemeId(3)}>
            <Image src={require('../../assets/card_theme_3.png')} alt="theme_3" />
          </InvisibleButton>
        </Flex>
        <Button data-testid={'change-theme'} style={{ width: '60%' }} onClick={changeThemeHandler}>Change theme</Button>
      </Flex>
    </Popup>
  );
};
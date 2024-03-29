/* eslint-disable @typescript-eslint/no-var-requires */
import React, { useState } from 'react';
import { useTypedSelector } from '@hooks/useTypedSelector';
import { ITransaction } from '@typings/ITransaction';
import Flex from '@shared/ui/Flex';
import Popup from '@shared/ui/Popup';
import { firstBigLetter } from '@utils/firstBigLetter';
import { formatNumber } from '@utils/formatNumber';

export const CategoryExpensesPopup: React.FC<{ isActive: boolean, setActive: React.Dispatch<React.SetStateAction<boolean>>, transactions: ITransaction[], category: string, categorySum: string }> = ({ isActive, categorySum, category, setActive, transactions }) => {
  const {symbol} = useTypedSelector(state => state.currencies.currentCurrency);
  const formattedCategory = firstBigLetter(category);
  const [currentImage, setCurrentImage] = useState();
  
  return (
    <Popup isActive={isActive} setActive={setActive}>
      <div>
        <h2>{firstBigLetter(formattedCategory)}</h2>
        <span style={{ color: 'red' }}>{symbol+categorySum}</span>
        <Flex direction='column' margin='15px 0'>
          {
            transactions.length === 0
            ? `You have any transactions at category ${formattedCategory}`
            : transactions.map(transaction => {
              import(`../../../assets/${transaction.category}.svg`).then(image => {
                setCurrentImage(image.default);
              });
              return (
                <Flex style={{ margin: '10px 0' }} key={transaction.id} alignItems='center'>
                  <img src={currentImage} alt={transaction.category} />
                  <Flex style={{ marginLeft: 15 }} direction='column'>
                    <h4>{transaction.note || transaction.status}</h4>
                    <p style={{ color: '#5d5d6a', marginTop: 5 }}>{symbol+formatNumber(transaction.sum)}</p>
                  </Flex>
                </Flex>
              );
            })
          }
        </Flex>
      </div>
    </Popup>
  );
};

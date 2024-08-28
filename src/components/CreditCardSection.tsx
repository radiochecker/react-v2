import React, {FC} from 'react';
import {CreditCardInfoState, CardInfo, CardValidInfo} from "../model";
import {SECTION_TYPE} from "../types"
import * as styles from "./style.module.scss"
interface CreditCardSectionProps {
  onQuit: (s:string) => void;
  onUpdate: (key:string, v:string) => void;
  onValid: (key:string) => void;
  creditCardInfo: CreditCardInfoState;
}

/**
 * credit card input form component.
 * submit function not implemented
 * no card name input
 */
const CreditCardSection: FC<CreditCardSectionProps> = props => {

  const cardInfo:CardInfo = props.creditCardInfo.cardInfo;
  const validInfo:CardValidInfo = props.creditCardInfo.cardValidInfo;

  const validInput:boolean = validInfo.cardNumber && validInfo.cvc && validInfo.expiredDate 
    && cardInfo.cardNumber.length > 0 && cardInfo.cvc.length > 0 && cardInfo.expiredDate.length > 0

  return (
    <div className={styles.form}>
      <div className={styles.heading}>
        <img src={'./assets/burger.jpg'} onClick={()=>{props.onQuit(SECTION_TYPE.CREDIT_CARD)}}/>
        <h1>Register card form</h1>
      </div>
      <div className={styles.cardPage}>

          <div className={styles.description}>
            <p>Welcome &#123; User.FirstName &#125;</p>
          </div>
          <div className={styles.row}>
            <input value={cardInfo.cardNumber} 
              onBlur={e=>{props.onValid("cardNumber")}}
              placeholder='Credit card number'
              onChange={e=>{props.onUpdate("cardNumber",e.target.value)}}
            />
            {!validInfo.cardNumber && (
              <div className={styles.warning}>invalid Card Number please input 16 digits</div>
            )}
          </div>
              <div className={styles.rowsub}>
                <div className={styles.space}></div>
                <div className={styles.subsection}>
                  <input value={cardInfo.cvc} 
                    onBlur={e=>{props.onValid("cvc")}}
                    placeholder='CVC'
                    onChange={e=>{props.onUpdate("cvc",e.target.value)}}
                  />
                  {!validInfo.cvc && (
                    <div className={styles.warning}>invalid cvc</div>
                  )}
                </div>
                <div className={styles.subsection}>
                  <input value={cardInfo.expiredDate} 
                    onBlur={e=>{props.onValid("expiredDate")}}
                    placeholder='expiry'
                    onChange={e=>{props.onUpdate("expiredDate",e.target.value)}}
                  />
                  {!validInfo.expiredDate && (
                    <div className={styles.warning}>invalid expired date use mm/yy</div>
                  )}
                </div>
              </div>
              <div className={styles.row}>
                <button disabled={!validInput} onClick={()=>console.log(JSON.stringify(cardInfo))}>Submit</button>
              </div>
            </div>
    </div>
  );
  }

  export default CreditCardSection
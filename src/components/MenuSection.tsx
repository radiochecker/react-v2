import React, {FC} from 'react';
import {SECTION_TYPE} from "../types"
import * as styles from "./style.module.scss"

interface MenuSectionProps {
  onQuit: (s:string) => void;
}

/**
 * menu component.
 * no function implemented here
 */
const MenuSection:FC<MenuSectionProps> = props => {
    return (
      <div className={styles.form}>
        <div className={styles.heading}>
          <img src={'./assets/back.png'} onClick={()=>{props.onQuit(SECTION_TYPE.MENU)}}/>
          <h1>Menu</h1>
        </div>
        <div className={styles.menuPage}>
            <div className={styles.description}>
              <p>This is menu content</p>
            </div>
        </div>
      </div>
    );
  }

  export default MenuSection
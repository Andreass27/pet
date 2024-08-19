import { useState } from 'react';
import { QRCodeSVG } from 'qrcode.react';
import styles from './QrCodeGeneretor.module.css';
import {GENERATE_DATA} from '../constans';

export const QrCodeGeneretor = () =>{
    const [value, setValue] = useState('')
    const [result, setresult] = useState('')
    
    


    function onClickHandler  () {
        setresult(value);
        setValue('')
        JSON.parse (localStorage.getItem(GENERATE_DATA) || '[]');
        localStorage.setItem(GENERATE_DATA, JSON.stringify(value));
    };

    function onChange (e){
        setValue (e.target.value)
        setresult('')
    }
  

    return(
<div className={styles.container}>
  <input type='text'
    placeholder='Введите Текст...' 
    value={value}
    onChange={onChange} 
    className={styles.input}>
    </input>
  <button className={styles.button} 
    type='button'
    onClick={onClickHandler}>Сгенирировать QR Code
    </button>
  {result !== '' && <QRCodeSVG value={result} size="230px" />}
</div>
    );
}


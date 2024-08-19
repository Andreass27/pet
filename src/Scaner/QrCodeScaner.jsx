import { Scanner } from '@yudiel/react-qr-scanner';
import styles from './QrCodeScaner.module.css'
import { useState } from 'react';
import {SCAN_DATA} from '../constans';


 
export const QrCodeScaner = () =>{
    const [scan, setScan] = useState(null) 
    const scanHandler = (result) =>{
        setScan(result[0].rawValue);
        JSON.parse (localStorage.getItem(SCAN_DATA) || '[]');
        localStorage.setItem(SCAN_DATA, JSON.stringify([result[0].rawValue]));
    };

    

    return(
        <div className={styles.container}>
            <Scanner 
            onScan={scanHandler}
            styles={{
                container:{width: '250px'}
        }}
             />
             <p className={styles.scanResult}>{scan}</p>
        </div>
    )
} 
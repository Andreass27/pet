import { QrCodeGeneretor } from './Generetor/QrCodeGeneretor';
import{ QrCodeScaner } from './Scaner/QrCodeScaner'
import { Navigation } from './Navigation/Navigation'
import { Route, Routes} from 'react-router-dom';
import { ScanHistory } from './Scaner/ScanHistory';
import { GenerateHistory } from './Generetor/GenerateHistory';

export const Layout = () =>{
    return (
        <div>
            <Navigation/>
            <Routes>
                <Route path='/generate' element={<QrCodeGeneretor/>}/>
                <Route path='/scan' element={<QrCodeScaner/>}/>
                <Route path='/generateHistory' element={<GenerateHistory/>}/>
                <Route path='/scanHistory' element={<ScanHistory/>}/>
            </Routes>
        </div>
        
        
    );
}


import React, { useState, useRef } from 'react';
import Styles from '../../styles/SerchBox.module.css'
import SerchResults from './SerchResults';
import { FaSearch } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

import { serchShips } from '../../Redux/Ships/ShipActions';
import { stopSerchingShips } from '../../Redux/Ships/ShipActions';
import { useDispatch ,useSelector } from 'react-redux';

export default function SerchBox({loading}) { 

    const inputRef = useRef(null);
    
    const [visible , setVisible ] = useState(false);
    const [icon , setIcon ] = useState(false);

    const dispatch = useDispatch();
    const serchedShips = useSelector(state => state.serchedShips);
    const noResults = useSelector(state => state.noResults);
    const shipSLength = useSelector(state => state.shipSLength);



    const hideResults = () =>{
        setVisible(false);
    }  

    const Close = () =>{
        if(icon){
            inputRef.current.value = '';
            setIcon(false);
        }
    }

    const toogleResults = ( value ) => {
        
        if(value !== ''){
            setIcon(true);
            
        }else{
            setIcon(false);
        }
      }  

    return (
        <div className='Container'>
            <div className={Styles.SerchBox}>
                <div>
                    <p>SERCH FOR A SHIP</p>
                    <input placeholder='Enter a model' 
                           ref={inputRef} 
                           onChange={() => {
                               dispatch(serchShips(inputRef.current.value));
                               toogleResults(inputRef.current.value );
                            }} 
                           disabled={loading}>
                    </input>
                </div>

                <div className={`${Styles.LoopIcon} ${icon && Styles.Green}`} onClick={() => {
                    Close()
                    if(icon) dispatch(stopSerchingShips())
                    }}>
                    {icon ? <IoMdClose/>  : <FaSearch/>}
                </div>
                <div className={`${Styles.ResultList} ${shipSLength  && Styles.ResultListVisible}`}>
                    {!noResults && <SerchResults ships={serchedShips} hideResults={hideResults}/> }
                </div>
            </div>
        </div>
    );
}

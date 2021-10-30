import React, { useState, useRef } from 'react';
import Styles from '../../styles/SerchBox.module.css'
import SerchResults from './SerchResults';
import { FaSearch } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

import { serchShips } from '../../Redux/Ships/ShipActions';
import { stopSerchingShips } from '../../Redux/Ships/ShipActions';
import { useDispatch ,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';


export default function SerchBox({loading , paginate}) { 

    const inputRef = useRef(null);
    
    const [visible , setVisible ] = useState(false);
    const [icon , setIcon ] = useState(false);
    const [to , setTo] = useState({
        pathname:'/',
        state:{home:true}
        });

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
    
    const setLinkToPaaram = () => {
        if(inputRef.current.value == ''){
            setTo({
                pathname:'/',
                state:{home:true}
                });
        }else{
            setTo({});
        }
    }  

    return (
        <div className={`Container ${noResults && Styles.NoResults}`}>
            <div className={Styles.SerchBox}>
                <div>
                    <p>SERCH FOR A SHIP</p>
                    <Link to={to}
                          onClick={setLinkToPaaram} 
                          style={{textDecoration:'none'}}>

                        <input placeholder='Enter a model' 
                           ref={inputRef} 
                           onChange={() => {
                               dispatch(serchShips(inputRef.current.value));
                               toogleResults(inputRef.current.value );
                            }} 
                           disabled={loading}>
                        </input>
                    </Link>
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

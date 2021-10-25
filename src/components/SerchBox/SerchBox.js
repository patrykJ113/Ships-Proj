import React, { useState, useRef ,useContext } from 'react';
import Styles from '../../styles/SerchBox.module.css'
import { ShipContext } from '../../App';
import SerchResults from './SerchResults';
import { FaSearch } from 'react-icons/fa';
import { IoMdClose } from "react-icons/io";

export default function SerchBox({serchedShipsFunc , loading}) { 

    const inputRef = useRef(null);
    const serchedShips = [];
    const [x , setX] = useState();
    const [visible , setVisible ] = useState(false);
    const [icon , setIcon ] = useState(false);

    const ships = useContext(ShipContext);

    const serchShips = value => {

        if(value !== ''){
            setIcon(true);
            ships.forEach(ship =>{
                if(ship.mission_name.toUpperCase().includes(value.toUpperCase())){
    
                    serchedShips.push(ship);
                }
            })
        }else{
            setIcon(false);
            serchedShipsFunc(null,true,value);
        }

        if(serchedShips.length > 0){
            setX(serchedShips);
            serchedShipsFunc(serchedShips,false,value);
            setVisible(true);
        }else{
            setVisible(false);
            serchedShipsFunc(null,false,value)
        }
      }  

    const hideResults = () =>{
        setVisible(false);
    }  

    const Close = () =>{
        if(icon){
            setVisible(false);
            inputRef.current.value = '';
            setIcon(false);
            serchedShipsFunc(ships,false,null);
        }
    }

    return (
        <div className='Container'>
            <div className={Styles.SerchBox}>
                <div>
                    <p>SERCH FOR A SHIP</p>
                    <input placeholder='Enter a model' ref={inputRef} onChange={() => serchShips(inputRef.current.value)} disabled={!loading}></input>
                </div>

                <div className={`${Styles.LoopIcon} ${icon && Styles.Green}`} onClick={Close}>
                    {icon ? <IoMdClose/>  : <FaSearch/>}
                </div>
                <div className={`${Styles.ResultList} ${visible ? Styles.ResultListVisible : ''}`}>
                    {x ? <SerchResults ships={x} hideResults={hideResults}/> : "NO results"}
                </div>
            </div>
        </div>
    );
}

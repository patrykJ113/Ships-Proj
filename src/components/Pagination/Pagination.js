import React, {useEffect} from 'react';
import { Link , useParams , useLocation} from 'react-router-dom';
import Styles from '../../styles/Pagination.module.css';

import { IoChevronForwardSharp } from "react-icons/io5";

export default function Pagination({ postsPerPage, totalPosts, paginate , pageNumber , loading}) {

    const pageNumbers = [];
    const { id } = useParams();
    let location = useLocation();
    useEffect(()=>{
        if(id) {
            paginate(id);
           
        }
        if(location.state){
            if('home' in location.state){
                paginate(1);
            }
        }
    },[id]);

    const totalNumberOfPageItems = Math.ceil(totalPosts / postsPerPage);
    if(3 > totalNumberOfPageItems){
        for(let i = 1 ; i <= totalNumberOfPageItems ; i++){
            pageNumbers.push(i);
        }
    }
    else if(pageNumber < 3 ){
        for(let i = 1 ; i <= 3 ; i++){
            pageNumbers.push(i);
        }
    }    
    else if (pageNumber > totalNumberOfPageItems - 2){
        for(let i = totalNumberOfPageItems - 2 ; i <= totalNumberOfPageItems ; i++){
            pageNumbers.push(i);
        } 
    }else {
        let x = parseInt(pageNumber) + 1;
        let i = parseInt(pageNumber) - 1;

        for(i ; i<=x ; i++){
            if(i <= totalNumberOfPageItems){
                pageNumbers.push(i);
            }
        }
    }

    return (
        <nav className={`${Styles.Container} ${!loading ? '' : Styles.Display }`}>
            <div className={Styles.Arow}>
                <Link to={`/page/${totalNumberOfPageItems}`} onClick={() => paginate(totalNumberOfPageItems)}>
                    <IoChevronForwardSharp />
                </Link>
            </div>
            <ul className={Styles.Pagination}>
                {pageNumbers.map(number => (
                    <li key={number} className={`${Styles.PaginationItem} ${(id == number || number === pageNumber)? Styles.Checked : ''}`} >
                        <Link to={`/page/${number}`} onClick={() => paginate(number)}>{number}</Link>
                    </li>
                ))}
            </ul>
            <div className={Styles.Arow}>
                <Link to={`/page/${1}`} onClick={() => paginate(1)}>
                    <IoChevronForwardSharp />
                </Link>
            </div>
        </nav>
    );
}

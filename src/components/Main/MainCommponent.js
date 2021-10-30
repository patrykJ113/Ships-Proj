import React from 'react';

import NoResults from '../NoResults/NoResults';
import Pagination from '../Pagination/Pagination';
import Header from '../Heder';
import CardContainer from '../Cards/CardContainer';

export default function MainCommponent({noResults , 
                                       currentShips , 
                                       loading , 
                                       shipsPerPage , 
                                       shipsLength , 
                                       paginate , 
                                       currentPage , 
                                       }) {
  return (
    <>
        {noResults ? <NoResults/>  : <CardContainer ships={currentShips} loading={loading}/>}
                        {noResults ? '' :<Pagination
                        postsPerPage={shipsPerPage}
                        totalPosts={shipsLength}
                        paginate={paginate}
                        pageNumber={currentPage}
                        loading={loading}
                        />}
                        <Header Margin={noResults} loading={loading} paginate={paginate}/> 
    </>
  );
}

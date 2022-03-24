import React from 'react';


//pass in current page and page limit from parent
//display current page, display number of pages
//display the total words in the glossary
//have a next button and a previous button but only if on page >=2, and shouldn't have a next page button if on the last page
//should also display the current limit and allow the user to change the limit
//showing XX items of XX

//is first page variable
//is last page variable
//would just compare the current page and the max page value

const GlossaryNavigation = () => {
  //temporary values
  let glossaryTotal = 10;
  let currentPage = 1;
  let maxPages = 2;

  let isFirstPage = currentPage === 1;
  let isLastPage = currentPage === maxPages;

  return(
    <div className="nav-bar">
      <div>
        <span>There are <span className="text-accent">{glossaryTotal}</span> words in the glossary.</span>
      </div>
      <div className="page-info-container">
        <p>You are on page <span className="text-accent">{currentPage}</span> of <span className="text-accent">{maxPages}</span>.</p>
        <div className="nav-button-container">
          {isFirstPage ? null : <button>Previous</button>}
          {isLastPage ? null : <button>Next</button>}
        </div>
      </div>
    </div>
  )
}


export default GlossaryNavigation;
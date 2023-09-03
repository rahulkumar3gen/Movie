import React from 'react'
import { useGlobalContext } from './Context'

const Search = () => {
  const{query,setQuery,isError}= useGlobalContext();
  return (
 <>
<nav className="navbar navbar-light bg-dark">
  <div className="container-fluid">
    <a className="navbar-brand text-danger"><b>MOVIE HUB</b></a>
    <form className="d-flex" action='#' onSubmit={(e)=>{e.preventDefault()}}>
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" value={query} onChange={(e)=>setQuery(e.target.value)}/>
    </form>
  </div>
</nav>
<div>
  <p>{isError.show && isError.msg}</p>
</div>
 </>
  )
}

export default Search
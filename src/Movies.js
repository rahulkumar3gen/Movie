import React from 'react'
import { useGlobalContext } from './Context'
import { NavLink } from 'react-router-dom';

const Movies = () => {
  const {movie}= useGlobalContext();
  console.log(movie);
  return (
 <>
      <div>
        <div className="container py-5">
          <div className="row">
            <div className="col-12 text-center">
              <h1>MOVIES</h1>
              <hr />
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row justify-content-around">
          {movie.map((curMovie) => {
            const{imbdID,Title, Poster, Type, Year}= curMovie;
            return (
              <div className="col-md-4 mb-5" key={imbdID}>
                <div
                  className="card h-80 my-5 py-4"
                  style={{ width: "18rem" }}
                >
                  <img
                    src={Poster}
                    className="card-img-top"
                    alt={imbdID}
                    height="300px"
                  />
                  <div className="card-body text-center">
                    <h3 className="card-title">
                      {Title}
                    </h3>
                    <h5 className="card-title">Year-{Year}</h5>
                    <h5 className="card-title">Type-{Type}</h5>
                  
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>


 </>
  )
}

export default Movies
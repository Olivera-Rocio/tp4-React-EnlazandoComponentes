import React from 'react';
import ContentRowMovies from './ContentRowMovies';
import LastMovieInDb from './LastMovieInDb';
import GenresInDb from './GenresInDb';
import Chart from './Chart';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom';
import error from '../assets/images/error-404.gif';


function ContentRowTop() {
	return (
		<React.Fragment>

			<div className="container-fluid">
				<div className="d-sm-flex aligns-items-center justify-content-between mb-4">
					<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
				</div>

				<Routes>
					<Route path="/" element={<ContentRowMovies />} />
					<Route path="/lastmovies" element={<LastMovieInDb />} />
					<Route path="/genres" element={<GenresInDb />} />
					<Route path="/movies" element={<Chart />} />
					<Route path="*" element={
						<div className="card-body">
							<div className="text-center">
								<h2>Error!</h2>
								<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{ width: 40 + 'rem' }} src={error} alt=" Error " />
							</div>
							<div className="text-center">
								<p>"Lo siento, página no encontrada"</p>
								<Link className="btn btn-info" to="/">Volver al Inicio</Link>
							</div>
						</div>
					} />
				</Routes>

			</div>


		</React.Fragment>
	)

}
export default ContentRowTop;
// import React, { useState, ChangeEvent } from 'react';
// import { searchMovies } from '../utilities/serach';
// // import { searchMovies, Movie } from '../../utilities/search';

// const Navbar: React.FC = () => {
//   const [searchValue, setSearchValue] = useState('');
//   const [searchResults, setSearchResults] = useState<Movie[]>([]);

//   const handleInput = (event: ChangeEvent<HTMLInputElement>) => {
//     setSearchValue(event.target.value);
//   };

//   const handleSearch = async () => {
//     const results = await searchMovies(searchValue);
//     setSearchResults(results.results);
//   };

//   return (
//     <div className="Nav">
//       <nav className="flex items-center justify-between px-4 py-2 bg-gray-800">
//         <h1 className="text-xl font-semibold text-white">
//           M<span className="text-red-500">oo</span>vie
//         </h1>
//         <div className="flex items-center space-x-4">
//           <form className="relative" action="#">
//             <input
//               className="px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               value={searchValue}
//               onChange={handleInput}
//               type="text"
//               placeholder="Search"
//               name="movie"
//             />
//             <button
//               className="absolute top-1/2 right-2 transform -translate-y-1/2 px-4 py-2 text-white bg-blue-500 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//               onClick={handleSearch}
//             >
//               Search
//             </button>
//           </form>
//           <li className="text-white">Home</li>
//           <li className="text-white">My list</li>
//           <button className="px-4 py-2 text-white bg-blue-500 rounded-md">
//             Sign in
//           </button>
//         </div>
//       </nav>
//       {searchResults.length > 0 && (
//         <div className="results">
//           {searchResults.map((movie: Movie) => (
//             <div key={movie.id} className="result">
//               <img
//                 className="w-40 h-auto"
//                 src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//                 alt={movie.title}
//               />
//               <h2 className="text-lg font-semibold">{movie.title}</h2>
//             </div>
//           ))}
//         </div>
//       )}
//     </div>
//   );
// };

// export default Navbar;
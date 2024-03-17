import axios from "axios";
import { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";

export default function ListAnime() {
   const [lists, setLists] = useState([]);
   const [visibleMovies, setVisibleMovies] = useState(8);

   useEffect(() => {
      async function getLists() {
         try {
            const response = await axios.get("https://api.jikan.moe/v4/top/anime");
            setLists(response.data.data);
         } catch (error) {
            console.error("Something went wrong!");
         }
      }

      getLists();
   }, []);

   const handleShowMore = () => {
      setVisibleMovies(prevCount => prevCount + 4);
   };

   return (
      <section>
        <div className="list-container">
        <h2 id="release" className="text-2xl font-semibold tracking-wide ">All Anime Movie</h2>
         <div className="grid grid-cols-4  gap-3 md:gap-6">
            {lists.slice(0, visibleMovies).map((data) => {
               return (
                  <div key={data.mal_id}>
                     <CardMovie to={`/detail/${data.mal_id}`} src={data.images.webp.image_url} episode={`Episode ${data.episodes}`} title={data.title} />
                  </div>
               );
            })}
         </div>
         <div id="button-more">
         {visibleMovies < lists.length && (
            <button className="mt-4 bg-red-500 hover:bg-red-700 text-white font-bold py-3 px-5 rounded" onClick={handleShowMore}>See More</button>
         )}
         </div>
        </div>
         
      </section>
   );
}

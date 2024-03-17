import axios from "axios";
import { useEffect, useState } from "react";
import CardMovie from "../CardMovie";

export default function List() {
   const [lists, setLists] = useState();

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
   return (
      <section>
         <h2 id="release" className="text-2xl font-semibold tracking-wide mb-6">New Release</h2>
         <div className="grid grid-cols-5 gap-3 md:gap-6">
            {lists &&
               lists.slice(0, 10).map((data) => {
                  return (
                     <div key={data.mal_id}>
                        <CardMovie to={`/detail/${data.mal_id}`} src={data.images.webp.image_url} episode={`Episode ${data.episodes}`} title={data.title} />
                     </div>
                  );
               })}
         </div>
      </section>
   );
}

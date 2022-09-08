import { useState } from "react";
import { useEffect } from "react";
import AnimesList from "./Animeslist";
import useFetch from "./useFetch";

const Wishlist = () => {
    let {data : animes , error , pending } = useFetch("https://api.jikan.moe/v4/anime");
    const[wishlistAnimes,setWishlistAnimes]= useState(null);
    const [wish,setWish] = useState(null);
    
    useEffect(()=>{
        
        var wish = localStorage.getItem("wish");
        wish = JSON.parse(wish);
        setWish(wish);
       

    },[])
    return ( 
        <div>
        
        {pending && <h1><div class="spinner-border text-danger" role="status">
        <span class="visually-hidden">Loading...</span>
        </div></h1>}
        {animes && <AnimesList animes={animes.filter((anime)=>{return wish.includes(anime.mal_id)})}/>}
        
        </div>
     );
}
 
export default Wishlist;
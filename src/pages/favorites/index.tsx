import { useEffect, useState } from "react";
import { Layout } from "@/components/layouts";
import { Favorites, NoFavorites } from "@/components/ui";
import localFavorites from "../../../utils/localFavorites";

const FavoritesPage = () => {

  const [favoritesPokemons, setFavoritesPokemons] = useState<number[]>([]);

  useEffect(() => {
    setFavoritesPokemons( localFavorites.pokemons );
  }, []);
  

  return (
    <Layout title="Favorites Pokemons">
      {
        favoritesPokemons.length === 0
          ? <NoFavorites />
          : <Favorites pokemons={ favoritesPokemons }/>
      }
    </Layout>
  )
}

export default FavoritesPage;
import * as S from "./styles";
import RestaurantCard from "../../components/RestaurantCard";
import { restaurants } from "../../services/data";

export default function Home() {
  return (
    <>
      <S.Hero>
        <div className="container">
          <h1>Descubra restaurantes incríveis</h1>
          <p>Peça seus pratos favoritos e receba em casa</p>
        </div>
      </S.Hero>

      <S.Section>
        <div className="container">
          <h2>Restaurantes</h2>
          <S.Grid>
            {restaurants.map((r) => (
              <RestaurantCard key={r.id} item={r} />
            ))}
          </S.Grid>
        </div>
      </S.Section>
    </>
  );
}

import * as S from "./styles";
import RestaurantCard from "../../components/RestaurantCard";
import { restaurants } from "../../services/data";

export default function Home() {
  return (
    <>
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

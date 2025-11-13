import { useParams } from "react-router-dom";
import * as S from "./styles";
import { restaurants } from "../../services/data";

export default function Restaurant() {
  const { id } = useParams();
  const restaurant = restaurants.find((r) => r.id === Number(id));

  if (!restaurant) return <h2>Restaurante não encontrado</h2>;

  return (
    <>
      <S.Banner bg={restaurant.banner}>
        <div className="container">
          <h1>{restaurant.name}</h1>
          <p>{restaurant.category} • ⭐ {restaurant.rating}</p>
        </div>
      </S.Banner>

      <S.Section>
        <div className="container">
          <h2>Cardápio</h2>

          <S.Grid>
            {restaurant.menu.map((dish) => (
              <S.DishCard key={dish.id}>
                <img src={dish.img} alt={dish.name} />
                <h3>{dish.name}</h3>
                <p>{dish.desc}</p>
                <span>{dish.price}</span>
              </S.DishCard>
            ))}
          </S.Grid>

        </div>
      </S.Section>
    </>
  );
}

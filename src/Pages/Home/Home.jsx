import React from "react";
import stylesHome from "./Home.module.scss";
function Home() {
  return (
    <div className={stylesHome.homeContainer}>
      <div className={stylesHome.homeWelcomeContainer}>
        <div className={stylesHome.homeWelcomeContainerInner}>
          <h1 className={stylesHome.homeTitle}>Производная</h1>
          <p className={stylesHome.homeText}>
            Функции достаточно часто встречаются при решении задач. Они могут
            быть как составными частями какого-то задания, так и отдельным
            номером. Разумеется, встречаются не только простые функции. Если
            открыть банк заданий, то мы удивимся, насколько сложными они бывают.
            Так что делать с такими сложными и непонятными функциями?{" "}
          </p>
        </div>
      </div>
    </div>
  );
}

export default Home;

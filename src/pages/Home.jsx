import { useState } from "react";
import styled from "styled-components";

const HomeStyled = styled.main`
  .president {
    img {
      width: 250px
    }
  }
  .day {
    margin: 10px auto;
    width: 50px;
    background-color: #555;
    padding: 5px;
    border-radius: 5px;
  }
`;

const Home = () => {
  const [numDay, setNumDay] = useState(1);
  const [day, setDay] = useState("L");
  const [cityStats, setCityStats] = useState({
    economy: 100,
    health: 100,
    population: 100,
    corruption: 0,
  });

  const days = ["L", "M", "X", "J", "V", "S", "D"];
  const houses = ["Antonio", "Roberto", "Orlando"];

  const changeDay = () => {
    if (numDay === 6) {
      setNumDay(0);
    } else {
      setNumDay(numDay + 1);
    }
    setDay(days[numDay]);
  };

  const makeDecision = (decision) => {
    let updatedStats = { ...cityStats };
    changeDay()
    switch (decision) {
      case "hacerEstructuras":
        updatedStats.economy += 10;
        updatedStats.population += 10;
        updatedStats.corruption += 5;
        break;
      case "pedirPlata":
        updatedStats.economy += 20;
        updatedStats.corruption += 10;
        break;
      case "repartirPlanes":
        updatedStats.health += 10;
        updatedStats.corruption += 5;
        break;
      case "venderSoja":
        updatedStats.economy += 30;
        updatedStats.health -= 10;
        break;
      case "imponerImpuestos":
        updatedStats.economy += 15;
        break;
      default:
        break;
    }

    setCityStats(updatedStats);
  };

  const showHouse = (e) => {
    console.log(e);
  };

  return (
    <HomeStyled>
      <p className="day">{day}</p>

      <section className="president">
        <p>El Papu</p>
        <img src="./elPapu.webp" alt="El presidente" />
        <p>Soy el presidente de esta ciudad</p>
        <div>
          <button onClick={() => makeDecision("hacerEstructuras")}>
            Hacer estructuras
          </button>
          <button onClick={() => makeDecision("pedirPlata")}>
            Pedir plata al FMI
          </button>
          <button onClick={() => makeDecision("repartirPlanes")}>
            Repartir planes sociales
          </button>
          <button onClick={() => makeDecision("venderSoja")}>
            Vender soja
          </button>
          <button onClick={() => makeDecision("imponerImpuestos")}>
            Imponer impuestos
          </button>
        </div>
      </section>

      <section className="houses">
        <p>Ciudad:</p>
        {houses.map((elem, i) => (
          <div onClick={() => showHouse(elem)} key={i}>
            🏰
          </div>
        ))}
      </section>

      <section className="statistics">
        <p>Economía: {cityStats.economy}</p>
        <p>Salud: {cityStats.health}</p>
        <p>Habitantes: {cityStats.population}</p>
        <p>Corrupción: {cityStats.corruption}</p>
      </section>
    </HomeStyled>
  );
};

export default Home;
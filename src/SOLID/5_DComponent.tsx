interface Player {
  id: number;
  nick: string;
}

interface Knight extends Player {
  armorClass: number;
}

interface Rogue extends Player {
  arrows: number;
}

const HireKnight = ({ knight }: { knight: Knight }) => {
  return <p>You hired player: {knight.nick}</p>;
};

const HireRogue = ({ rogue }: { rogue: Rogue }) => {
  return <p>You hired player: {rogue.nick}</p>;
};

export const DComponent = () => {
  const player1: Knight = {
    id: 1410,
    nick: 'Ulrich von Jungingen',
    armorClass: 20,
  };
  const player2: Rogue = {
    id: 1237,
    nick: 'Robin Hood',
    arrows: 23,
  };

  return (
    <>
      <HireKnight knight={player1} />
      <HireRogue rogue={player2} />
    </>
  );
};

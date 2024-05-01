import { Dispatch, SetStateAction, createContext, useState } from 'react';

const CountContext = createContext<
  | {
      count: number;
      setCount: Dispatch<SetStateAction<number>>;
    }
  | undefined
>(undefined);

export const ContextConsumer = () => {
  const [count, setCount] = useState(0);

  return (
    <CountContext.Provider value={{ count, setCount }}>
      <Child1 />
    </CountContext.Provider>
  );
};

const Child1 = () => {
  return (
    <>
      <h1>Child1</h1>
      <Child2 />
    </>
  );
};

const Child2 = () => {
  return (
    <>
      <h2>Child2</h2>
      <Child3 />
    </>
  );
};

const Child3 = () => {
  return (
    <CountContext.Consumer>
      {(value) => {
        if (!value) throw new Error('CountContext used out of context');

        return (
          <>
            <h3>Child3: {value.count}</h3>
            <button onClick={() => value.setCount((count) => count + 1)}>Increment</button>
          </>
        );
      }}
    </CountContext.Consumer>
  );
};

// function Content() {
//   return (
//     <ThemeContext.Consumer>
//       {theme => (
//         <UserContext.Consumer>
//           {user => (
//             <ProfilePage user={user} theme={theme} />
//           )}
//         </UserContext.Consumer>
//       )}
//     </ThemeContext.Consumer>
//   );
// }
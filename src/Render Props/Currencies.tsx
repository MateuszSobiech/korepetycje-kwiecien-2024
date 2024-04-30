import { useState } from 'react';

interface RenderInputProps {
  children: (value: number) => JSX.Element;
}

const RenderInput = ({ children }: RenderInputProps) => {
  const [value, setValue] = useState(1);

  return (
    <>
      <h2>Currency Rate</h2>
      <input type='number' value={value} onChange={(e) => setValue(e.target.valueAsNumber)} />{' '}
      <label>PLN</label>
      {children(value)}
    </>
  );
};

export const Currencies = () => {
  return (
    <>
      <RenderInput>
        {(value) => (
          <>
            <CurrencyUSD value={value} />
            <CurrencyEUR value={value} />
          </>
        )}
      </RenderInput>
    </>
  );
};

const CurrencyUSD = ({ value }: { value: number }) => {
  return <p>{(value * 0.25).toFixed(4)} USD</p>;
};

const CurrencyEUR = ({ value }: { value: number }) => {
  return <p>{(value * 0.23).toFixed(4)} EUR</p>;
};

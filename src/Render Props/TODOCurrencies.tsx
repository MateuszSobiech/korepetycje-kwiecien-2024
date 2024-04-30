const RenderInput = () => {
  return (
    <>
      <h2>Currency Rate</h2>
      <input type='text' /> <label>PLN</label>
    </>
  );
};

export const TODOCurrencies = () => {
  return (
    <>
      <RenderInput>
        {/* <CurrencyUSD />
            <CurrencyEUR  /> */}
      </RenderInput>
    </>
  );
};

const CurrencyUSD = ({ value = 0 }: { value: number }) => {
  return <p>{(value * 0.25).toFixed(4)} USD</p>;
};

const CurrencyEUR = ({ value = 0 }: { value: number }) => {
  return <p>{(value * 0.23).toFixed(4)} EUR</p>;
};

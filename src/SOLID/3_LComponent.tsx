interface SuperInputProps {
  superName: string;
}

const SuperInput = ({ superName }: SuperInputProps) => {
  return (
    <>
      <h1>{superName}</h1>
      <input className='mt-10' type='text' />
    </>
  );
};

export const LComponent = () => {
  const type = 'date';
  const value = '2024-05-15';

  return (
    <>
      <SuperInput superName="I'M SUPER INPUT" />
    </>
  );
};

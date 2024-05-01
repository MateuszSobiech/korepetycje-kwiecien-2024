interface UserWithSalaryProps {
  id: number;
  name: string;
  age: number;
  salary: number;
}

const UserWithSalary = ({ id, name, age, salary }: UserWithSalaryProps) => {
  return (
    <div>
      <h3>
        #{id} {name}
      </h3>
      <p>Age: {age}</p>
      <p>Salary: {salary}</p>
    </div>
  );
};

interface UserWithPetsProps {
  id: number;
  name: string;
  age: number;
  pets: string[];
}

const UserWithPets = ({ id, name, age, pets }: UserWithPetsProps) => {
  return (
    <div>
      <h3>
        #{id} {name}
      </h3>
      <p>Age: {age}</p>
      <p>Pets: {pets.join(', ')}</p>
    </div>
  );
};

export const IComponent = () => {
  const user = {
    name: 'Arek',
    age: 30,
    id: 1,
  };

  return (
    <div className='flex gap-60'>
      <UserWithSalary {...user} salary={3000} />
      <UserWithPets {...user} pets={['Lama', 'Horse']} />
    </div>
  );
};

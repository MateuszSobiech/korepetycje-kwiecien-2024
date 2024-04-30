let initialUsers = [
  {
    name: 'Arek',
    age: 30,
    id: 1,
  },
  {
    name: 'Bartek',
    age: 40,
    id: 2,
  },
  {
    name: 'Marek',
    age: 50,
    id: 3,
  },
];

export type User = (typeof initialUsers)[number];

export const getUsers = async (): Promise<User[]> => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('GET');
      resolve(initialUsers);
    }, 1500);
  });
};

export const putUserAge = async (userId: number) => {
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log('PUT');

      initialUsers = initialUsers.map((user) => {
        if (user.id !== userId) return user;

        return { ...user, age: user.age + 1 };
      })

      resolve(null);
    }, 3000);
  });
};

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

// eslint-disable-next-line @typescript-eslint/ban-ts-comment
//@ts-expect-error
window.users = initialUsers;

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

      initialUsers.find((user) => user.id === userId)!.age += 1;

      initialUsers = [...initialUsers];

      resolve(null);
    }, 3000);
  });
};

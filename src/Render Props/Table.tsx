interface User {
  name: string;
  age: number;
}

interface TableProps {
  renderHeader: (data: string[]) => JSX.Element;
  renderBody: (data: User[]) => JSX.Element;
  renderFooter: (data: string) => JSX.Element;
}

const RenderTable = ({ renderHeader, renderBody, renderFooter }: TableProps) => {
  const header = ['Name', 'Age'];
  const users: User[] = [
    { name: 'Arek', age: 39 },
    { name: 'Ada', age: 33 },
  ];
  const footer = 'Users Table';

  return (
    <table border={1}>
      {renderHeader(header)}
      {renderBody(users)}
      {renderFooter(footer)}
    </table>
  );
};

export const Table = () => {
  return (
    <RenderTable
      renderHeader={(data) => (
        <thead>
          <tr>
            {data.map((name, index) => (
              <th key={index}>{name}</th>
            ))}
          </tr>
        </thead>
      )}
      renderBody={(data) => (
        <tbody>
          {data.map((user) => (
            <tr key={user.name}>
              <td>{user.name}</td>
              <td>{user.age}</td>
            </tr>
          ))}
        </tbody>
      )}
      renderFooter={(data) => (
        <tfoot>
          <tr>
            <td colSpan={2}>{data}</td>
          </tr>
        </tfoot>
      )}
    />
  );
};

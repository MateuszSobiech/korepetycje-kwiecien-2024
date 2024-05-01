import { Component, ReactNode } from 'react';

function callUpdateSalary<T extends { salary: number }>(this: T, rise: number) {
  this.salary = this.salary + rise;
}

// function applyUpdateSalary<T extends { salary: number }>(this: T, ...arr: number[]) {
//   this.salary = this.salary + arr[0];
// }

export class CallApplyComponent extends Component {
  state: Readonly<{ users: { name: string; salary: number }[] }> = {
    users: [
      { name: 'John', salary: 3000 },
      { name: 'Anna', salary: 4000 },
    ],
  };

  handleClick = () => {
    this.setState({
      users: this.state.users.map((user) => {
        callUpdateSalary.call(user, 500);
        // applyUpdateSalary.apply(user, [500]);
        return user;
      }),
    });
  };

  render(): ReactNode {
    return (
      <>
        <pre style={{ textAlign: 'left' }}>{JSON.stringify(this.state.users, null, 2)}</pre>
        <br />
        <br />
        <button onClick={this.handleClick}>Update salary</button>
      </>
    );
  }
}

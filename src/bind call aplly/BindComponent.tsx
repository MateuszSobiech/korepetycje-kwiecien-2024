import { Component, ReactNode } from 'react';

interface BindProps {}

export class BindComponent extends Component<BindProps, { count: number }> {
  state = {
    count: 0,
  };

  constructor(props: BindProps) {
    super(props);
  }

  increment() {
    this.setState({ count: this.state.count + 1 });
  }

  render(): ReactNode {
    return (
      <>
        {this.state.count}
        <br />
        <button onClick={this.increment}>Increment</button>
      </>
    );
  }
}

// 1. bind
// 2. bind + constructor
// 3. arrow
// 4. arrow in JSX
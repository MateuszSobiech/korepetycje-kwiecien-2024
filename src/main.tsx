import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './index.css';
import { Hoc, HocHook } from './HOC/HOC';
import { RenderProps } from './Render Props/RenderProps';
import { Optimistic } from './Optimistic ADD/Optimistic';
import { TODOOptimistic } from './Optimistic ADD/TODOOptimistic';
import { BindCallApply } from './bind call aplly/BindCallApply';
import { ContextConsumer } from './HOC/ContextConsumer';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    <Hoc name={'LIST'} />
    {/* <HocHook name={'LIST'} /> */}
    {/* <ContextConsumer /> */}

    {/* <RenderProps /> */}

    {/* <Optimistic /> */}
    {/* <TODOOptimistic /> */}

    {/* <BindCallApply /> */}
  </>
);

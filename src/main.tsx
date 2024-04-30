import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './index.css';
import { Hoc, HocHook } from './HOC/HOC';
import { RenderProps } from './Render Props/RenderProps';
import { Optimistic } from './Optimistic ADD/Optimistic';
import { TODOOptimistic } from './Optimistic ADD/TODOOptimistic';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    {/* <Hoc name={'LIST'} /> */}

    {/* <RenderProps /> */}

    {/* <Optimistic /> */}
    {/* <TODOOptimistic /> */}

    {/* <Application /> */}
  </>
);

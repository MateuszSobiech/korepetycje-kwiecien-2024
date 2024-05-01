import React from 'react';
import ReactDOM from 'react-dom/client';
import './App.css';
import './index.css';
import { Hoc, HocHook } from './HOC/HOC';
import { RenderProps } from './Render Props/RenderProps';
import { Optimistic } from './Optimistic ADD/Optimistic';
import { TODOOptimistic } from './Optimistic ADD/TODOOptimistic';
import { BindComponent } from './bind call aplly/BindComponent';
import { ContextConsumer } from './Render Props/ContextConsumer';
import { CallApplyComponent } from './bind call aplly/CallApplyComponent';
import { SComponent } from './SOLID/1_SComponent';
import { OComponent } from './SOLID/2_OComponent';
import { LComponent } from './SOLID/3_LComponent';
import { IComponent } from './SOLID/4_IComponent';
import { DComponent } from './SOLID/5_DComponent';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <>
    {/* <Hoc name={'LIST'} /> */}
    {/* <HocHook name={'LIST'} /> */}
    {/* <ContextConsumer /> */}

    {/* <RenderProps /> */}

    <Optimistic />
    {/* <TODOOptimistic /> */}

    {/* <BindComponent /> */}
    {/* <CallApplyComponent /> */}

    {/* === SOLID === */}
    {/* <SComponent /> */}
    {/* <OComponent /> */}
    {/* <LComponent /> */}
    {/* <IComponent /> */}
    {/* <DComponent /> */}
  </>
);

import type { Component } from 'solid-js';
import { Route, Routes } from '@solidjs/router';

import { Home } from '@/pages/home';
import { Blog } from '@/pages/blog/index';

export const App: Component = () => {
  return (
    <>
      <Routes>
        <Route path="/" component={Home} />
        <Route path="/blog" component={Blog} />
      </Routes>
    </>
  );
};

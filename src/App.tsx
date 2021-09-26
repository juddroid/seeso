import React, { useEffect } from 'react';
import init from './Seeso/init';
import resolveCrossOrigin from './Seeso/resolveCrossOrigin';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  useEffect(() => {
    resolveCrossOrigin();
    init();
  }, []);

  return (
    <>
      <GlobalStyles />
      <div>test</div>
    </>
  );
};

export default App;

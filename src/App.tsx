import React, { useEffect } from 'react';
import init from './Seeso/init';
import GlobalStyles from './styles/GlobalStyles';

const App = () => {
  useEffect(() => {
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

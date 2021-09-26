import EasySeeSo from 'seeso/easy-seeso';
import 'regenerator-runtime/runtime';

const init = () => {
  (async () => {
    const seeso = new EasySeeSo();
    await seeso.init(
      process.env.REACT_APP_SEESO,
      afterInitialized,
      afterFailed
    );
  })();

  function afterInitialized() {
    console.log('sdk init success!');
  }

  function afterFailed() {
    console.log('sdk init fail!');
  }
};

export default init;

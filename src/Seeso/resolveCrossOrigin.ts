const resolveCrossOrigin = () => {
  const meta = document.createElement('meta');
  meta.httpEquiv = 'origin-trial';
  meta.content = `${process.env.REACT_APP_SHARED}`;
  document.getElementsByTagName('head')[0].appendChild(meta);
};

export default resolveCrossOrigin;

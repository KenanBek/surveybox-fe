import proxy from 'http-proxy-middleware';

export default (app) => {
  if (process.env.NODE_ENV === 'production') {
    app.use(proxy('/be', { target: process.env.REACT_APP_BE_URL }));
  }
};

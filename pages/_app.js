import { grommet, Grommet } from 'grommet';

function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={grommet}>
      <Component {...pageProps} />
    </Grommet>
  );
}

export default MyApp;

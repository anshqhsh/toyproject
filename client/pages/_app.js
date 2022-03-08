import { useRef } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { Hydrate } from 'react-query/hydration'; // 서버사이드에서 받아온 Pops을 html에 부어준다
import './index.scss';
// 쿼리를 위한 초기화 작업
const App = ({ Component, pageProps }) => {
  // 처음 실행시 한번 실행
  const clientRef = useRef(null);
  const getClient = () => {
    if (!clientRef.current) {
      clientRef.current = new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnWindowFocus: false, // 서버값을 불러오는 옵션 React-query
          },
        },
      });
      return clientRef.current;
    }
  };
  return (
    <QueryClientProvider client={getClient()}>
      <Hydrate state={pageProps.dehydrateState}>
        <Component {...pageProps} />
      </Hydrate>
    </QueryClientProvider>
  );
};

App.getInitialProps = async ({ ctx, Component }) => {
  const pageProps = await Component.getInitialProps?.(ctx);
  return { pageProps };
};

export default App;

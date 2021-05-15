//import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.min.css';

import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo-client";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <ApolloProvider client={apolloClient}>
      <div style={{ margin: "20px" }}>
        <Component {...pageProps} />
      </div>
    </ApolloProvider>
  );
};
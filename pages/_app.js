import '../styles/globals.css'
import 'bootstrap/dist/css/bootstrap.css';

import Head from "next/head"
import { ApolloProvider } from "@apollo/client";
import { useApollo } from "../lib/apollo-client";

export default function App({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);
  return (
    <>
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <ApolloProvider client={apolloClient}>
        <Component {...pageProps} />
      </ApolloProvider>
    </>
  );
};

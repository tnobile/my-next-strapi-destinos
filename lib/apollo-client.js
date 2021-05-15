import { useMemo } from 'react'
import { ApolloClient } from "@apollo/client";
import { cache } from './cache'
import { typeDefs } from './query'

let apolloClient;

function createApolloClient() {
    return new ApolloClient({
        ssrMode: typeof window === "undefined", // set to true for SSR
        uri: process.env.CMS_API_URL, // HttpLink
        connectToDevTools: true,
        cache: cache,
        //typeDefs,
    });
}

// https://www.apollographql.com/blog/building-a-next-js-app-with-apollo-client-slash-graphql/
export function initializeApollo(initialState = null) {
    const _apolloClient = apolloClient ?? createApolloClient();

    // If your page has Next.js data fetching methods that use Apollo Client,
    // the initial state gets hydrated here
    if (initialState) {
        console.log("hydrating initial state (filling object with data)...")
        // Get existing cache, loaded during client side data fetching
        const existingCache = _apolloClient.extract();

        // Restore the cache using the data passed from
        // getStaticProps/getServerSideProps combined with the existing cached data
        _apolloClient.cache.restore({ ...existingCache, ...initialState });
    }

    // For SSG and SSR always create a new Apollo Client
    //if (typeof window === "undefined") return _apolloClient;

    // Create the Apollo Client once in the client
    if (!apolloClient) apolloClient = _apolloClient;
    return _apolloClient;
}

export function useApollo(initialState) {
    const store = useMemo(() => initializeApollo(initialState), [initialState]);
    return store;
}
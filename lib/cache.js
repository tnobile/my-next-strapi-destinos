import { InMemoryCache } from "@apollo/client";
import { makeVar } from "@apollo/client";

export const cache = new InMemoryCache({
    typePolicies: {
        Query: {
            fields: {
                categories: {
                    read() {
                        return categoriesVar();
                    }
                }
            }
        }
    }
})

export const categoriesVar = makeVar([])
import { InMemoryCache } from "@apollo/client";
import { categoriesVar } from "./storage"

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

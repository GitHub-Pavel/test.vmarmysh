import {FC} from "react";
import {QueryClientProvider} from "./providers/query-client.provider";
import {Navigate} from "./navigate/Navigate";

export const App: FC = () => {
    return (
        <QueryClientProvider>
            <Navigate />
        </QueryClientProvider>
    )
}
import {FC, PropsWithChildren} from "react";
import {QueryClient, QueryClientProvider as Provider} from "react-query";

const queryClient = new QueryClient()

export const QueryClientProvider: FC<PropsWithChildren> = ({children}) => {
    return (
        <Provider client={queryClient}>{children}</Provider>
    )
}
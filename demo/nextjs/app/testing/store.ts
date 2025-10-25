import { createAuthClient } from "better-auth/react";
import { atom, useAtom } from "jotai";
import { createContext, createElement } from "react";

const clientContext = createContext(createAuthClient())

export const optionsAtom = atom({
	fetchOptions: {},
	plugins: [],
	baseURL: "http://localhost:3000",
	basePath: "/api/auth",
	disableDefaultFetchPlugins: false 
})

export const TestClientProvider = ({children}: {children: React.ReactNode}) => {
  const options = useAtom(optionsAtom);
  return createElement(clientContext.Provider, {
    value: createAuthClient(options),
    children
  })
}

export function useTestClient() {
  return useContext(clientContext)
}

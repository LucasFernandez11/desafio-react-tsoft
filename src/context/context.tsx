import { useContext, createContext, type Dispatch, type SetStateAction, type JSX, useState } from "react";

interface PublicServicesContext {
  searchQuery: string | null,
  setSearchQuery: Dispatch<SetStateAction<string | null>>,
}

interface ServiceProviderProps {
  children: JSX.Element[] | JSX.Element | React.ReactNode;
}

const PublicServiceContext = createContext<PublicServicesContext>({
  searchQuery: null,
  setSearchQuery: (): void => {},
});

export const PublicServiceProvider = ({ children }: ServiceProviderProps) => {
  const [searchQuery, setSearchQuery] = useState<string | null>(null);
  return (
    <PublicServiceContext.Provider
      value={{
        searchQuery,
        setSearchQuery
      }}
    >
      {children}
    </PublicServiceContext.Provider>
  );
};

export const usePublicContext = () => useContext(PublicServiceContext);

import { useDisclosure } from '@chakra-ui/hooks';
import { createContext, ReactNode } from 'react';
import { useContext } from 'react';

type SidebarDrawerContextData = ReturnType<typeof useDisclosure>;

const sidebarDrawerContext = createContext({} as SidebarDrawerContextData);

export function SidebarDrawerContextWrapper({ children }: { children: ReactNode }) {
  const disclosure = useDisclosure();

  return (
    <sidebarDrawerContext.Provider value={disclosure}>
      {children}
    </sidebarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = () => useContext(sidebarDrawerContext);

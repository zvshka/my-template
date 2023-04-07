import { AppShell } from '@mantine/core';

export const Layout = ({ children }: { children: any }) => {
  return <AppShell>
    {children}
  </AppShell>
}
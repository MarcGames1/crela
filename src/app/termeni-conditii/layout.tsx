import React, { PropsWithChildren } from 'react'


export const metadata = {
  title: 'Termene si Conditii - Tomotiv ',
  description: 'Desriere Meta',
  robots: 'noindex, folow',
};
const layout = ({children}:PropsWithChildren) => {
  return (
    <main>{children}</main>
  )
}

export default layout
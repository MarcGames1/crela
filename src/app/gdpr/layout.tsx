import React, { PropsWithChildren } from 'react'


export const metadata = {
  title: 'Politica privind protectia datelor cu caracter personal - Crela ',
  description: 'Desriere Meta',
  robots: 'noindex, folow',
};
const layout = ({children}:PropsWithChildren) => {
  return (
    <main>{children}</main>
  )
}

export default layout
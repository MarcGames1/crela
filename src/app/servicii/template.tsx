import PageComponent from "@/components/Page";
import { ReactNode } from "react";




export default function ServiciiTemplate({children}:{children : ReactNode}) {
  return (
    <PageComponent>
      {children}
    </PageComponent>
  );
}

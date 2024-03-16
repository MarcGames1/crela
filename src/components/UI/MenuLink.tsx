import Link, { LinkProps } from "next/link";
import { cva } from "class-variance-authority";

type MenuLinkProps = LinkProps & {
  variant?: "active" | "default";
  href: string;
  children: string;
};

export const MenuItemVariants = cva(
  "hover:text-white hover:bg-accent text-secondary rounded-lg p-3  uppercase transition-colors font-semibold",
  {
    variants: {
      variant: {
        active: "text-accent border-[#DA2128] border-[3px]",
        default: "",
      },
    },
    defaultVariants: { variant: "default" },
  },
);
const MenuLink = ({ variant, ...props }: MenuLinkProps) => {
  return <Link className={MenuItemVariants({ variant })} {...props} />;
};

export default MenuLink;

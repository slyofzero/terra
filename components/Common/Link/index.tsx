import NextLink from "next/link";
import { LinkProps } from "./types";
import { useRouter } from "next/router";
import { classNames } from "@/utils";

export function Link({ children, href, className, ...props }: LinkProps) {
  const { pathname } = useRouter();
  const isOnPage = pathname === href;

  return (
    <NextLink
      className={classNames(
        className || "",
        isOnPage ? "font-bold underline" : ""
      )}
      href={href}
      {...props}
    >
      {children}
    </NextLink>
  );
}

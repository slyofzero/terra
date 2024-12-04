import React, { HTMLAttributeAnchorTarget } from "react";
import { classNames } from "@/utils";
import { orbitron, saira } from "@/pages/_app";
import { ConnectButton } from "../blockchain";
import NextLink from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";
import { useRouter } from "next/router";
import { SiEthereum, SiSolana } from "react-icons/si";

interface ButtonData {
  text: string;
  link: string;
  target?: HTMLAttributeAnchorTarget;
}

interface Props {
  children: React.ReactNode;
  className?: string;
}

const navButtons: ButtonData[] = [
  { link: "/", text: "Algo Creator" },
  {
    link: "https://useterra.gitbook.io/terra/terra-ecosystem/terra-algo-hosting",
    text: "Documentation",
    target: "_blank",
  },
];

const hamburgerButtons: ButtonData[] = [
  { link: "#", text: "🤖" },
  { link: "#", text: "💡" },
  { link: "#", text: "💻" },
  { link: "#", text: "📊" },
];

export function MainLayout({ children, className }: Props) {
  const router = useRouter();

  return (
    <main
      className={classNames(
        "min-h-screen w-screen flex flex-col bg-black",
        saira.className,
        className || ""
      )}
    >
      <header
        className={
          "flex items-center justify-between py-2 border-b-[1px] border-gray-500 px-4"
        }
      >
        <div className="flex items-center gap-4">
          <GiHamburgerMenu className="text-2xl" />

          <NextLink
            className={classNames(
              "text-3xl font-semibold uppercase",
              orbitron.className
            )}
            href={"/"}
          >
            {/* <Image src={"/banner.png"} alt="banner" className="w-32 lg:w-48" /> */}
            <span>Terra</span>
          </NextLink>
        </div>

        <div className="flex flex-col lg:flex-row items-center gap-4">
          <ConnectButton />
        </div>
      </header>

      <div className="flex flex-grow">
        <div className="flex flex-col gap-12 items-center py-8 w-16 border-r-[1px] border-gray-500">
          {hamburgerButtons.map((button, key) => (
            <NextLink className="text-2xl" key={key} href={button.link}>
              {button.text}
            </NextLink>
          ))}
        </div>

        <div className="flex flex-col gap-4 w-full">
          <div className="flex justify-between px-4 w-full h-fit border-b-[1px] border-gray-500">
            <div className="flex gap-4">
              {navButtons.map(({ link, text }, key) => (
                <NextLink
                  key={key}
                  className={classNames(
                    "bg-black text-white p-2 w-fit text-center lg:w-32",
                    router.pathname === link
                      ? "border-b-2 border-white font-bold"
                      : ""
                  )}
                  href={link}
                >
                  {text}
                </NextLink>
              ))}
            </div>

            <div className="hidden md:flex gap-8 items-center">
              <div className="flex items-center gap-2 text-sm">
                <span className="bg-white rounded-full p-1">
                  <SiEthereum className="text-xl text-black" />
                </span>{" "}
                <span className="text-green-400">3505$</span>
              </div>

              <div className="flex items-center gap-2 text-sm">
                <span className="bg-white rounded-full p-1">
                  <SiSolana className="text-xl text-black" />
                </span>{" "}
                <span className="text-red-400">241$</span>
              </div>
            </div>
          </div>

          <div className="px-4 pb-4 flex-grow [&>*]:h-full">{children}</div>
        </div>
      </div>
    </main>
  );
}

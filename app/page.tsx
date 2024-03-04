import { Link } from "@nextui-org/link";
import { Snippet } from "@nextui-org/snippet";
import { Code } from "@nextui-org/code";
import { button as buttonStyles } from "@nextui-org/theme";
import { siteConfig } from "@/config/site";
import { title, subtitle } from "@/components/primitives";
import { GithubIcon } from "@/components/icons";

export default function Home() {
  return (
    <section className="flex flex-col items-center justify-center gap-4 py-8 md:py-[13rem]">
      <div className="inline-block max-w-lg text-center justify-center">
        <h1 className={title()}>Unleash&nbsp;</h1>
        <h1 className={title({ color: "blue" })}>Imagination&nbsp;</h1>
        <br />
        <h1 className={title()}>Seal with InkersMNL</h1>
        <h2 className={subtitle({ class: "mt-4" })}>
          Your Trusted Partner for Precision Printing, Vibrant Designs, and
          Unparalleled Quality
        </h2>
      </div>

      <div className="flex gap-3">
        <Link
          isExternal
          href={siteConfig.links.docs}
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Contact us
        </Link>
        <Link
          className={buttonStyles({ variant: "bordered", radius: "full" })}
          href="/projects"
        >
          Our works
        </Link>
      </div>
    </section>
  );
}

import { cn } from "@/lib/utils";
import { Reveal } from "./Reveal";

export function SectionHeading({
  eyebrow,
  title,
  desc,
  align = "left",
  light = false,
}: {
  eyebrow?: string;
  title: string;
  desc?: string;
  align?: "left" | "center";
  light?: boolean;
}) {
  return (
    <Reveal
      className={cn(
        "max-w-2xl",
        align === "center" && "mx-auto text-center",
      )}
    >
      {eyebrow && (
        <span
          className={cn(
            "inline-block text-xs font-semibold uppercase tracking-[0.2em]",
            light ? "text-white" : "text-garnet",
          )}
        >
          {eyebrow}
        </span>
      )}
      <h2
        className={cn(
          "mt-3 text-3xl sm:text-4xl md:text-[2.6rem]",
          light ? "text-white" : "text-ink",
        )}
      >
        {title}
      </h2>
      {desc && (
        <p
          className={cn(
            "mt-4 text-base leading-relaxed md:text-lg",
            light ? "text-white/75" : "text-muted",
          )}
        >
          {desc}
        </p>
      )}
    </Reveal>
  );
}

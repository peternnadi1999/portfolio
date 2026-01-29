import Image from "next/image";
import ThemeToggle from "./theme-toggle";

export default function Header() {
  return (
    <header className="fixed top-6 left-1/2 z-50 -translate-x-1/2">
      <nav
        className="
          relative
          flex items-center justify-between gap-6
          px-6 py-3
          rounded-full
          bg-background/70 backdrop-blur-xl
          border border-border
          shadow-[0_8px_30px_rgba(0,0,0,0.35)]
          ring-1 ring-white/10
          min-w-[320px] max-w-[90vw]
          before:content-['']
          before:absolute
          before:inset-0
          before:rounded-full
          before:shadow-[inset_0_1px_2px_rgba(255,255,255,0.25)]
          before:pointer-events-none
          after:content-['']
          after:absolute
          after:inset-0
          after:rounded-full
          after:shadow-[inset_0_-6px_12px_rgba(0,0,0,0.35)]
          after:pointer-events-none
        "
      >
        {/* Left: Avatar + Name */}
        <div className="flex items-center gap-3">
          <div className="relative">
            <Image
              src="/peter.png"
              alt="Profile"
              width={36}
              height={36}
              className="rounded-full object-cover"
            />
            {/* Online indicator */}
            <span className="absolute -bottom-0.5 -right-0.5 h-3 w-3 rounded-full bg-green-500 ring-2 ring-background" />
          </div>

          <span className="text-sm font-medium text-foreground whitespace-nowrap">
            Nnadi Peter E
          </span>
        </div>

        <ThemeToggle />
      </nav>
    </header>
  );
}

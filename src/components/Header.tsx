import ScrambleHover from "@/components/ScambleHover";
import { Button } from "@/components/ui/button";
import { Languages, Menu } from "lucide-react";
import ModeSwitcher from "@/components/ModeSwitcher";

export default function Header() {
  return (
    <header className="flex items-center justify-between gap-x-6 py-4 w-full max-w-2xl mx-auto px-5 lg:px-6 text-2xl">
      <a href="/" className="no-underline">
        <ScrambleHover text=">_" maxIterations={7} />
      </a>
      <nav className="flex gap-x-2">
        <Button size="icon" variant="icon">
          <Languages className="!size-5 min-w-6" />
        </Button>

        <ModeSwitcher />

        <Button size="icon" variant="icon">
          <Menu className="!size-5 min-w-6" />
        </Button>
      </nav>
    </header>
  );
}

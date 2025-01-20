import * as React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";

type Mode = "light" | "dark";

export default function ModeSwitcher() {
  const theme = (): Mode => {
    const localStorageTheme = localStorage?.getItem("theme") ?? "";
    if (["dark", "light"].includes(localStorageTheme)) {
      return localStorageTheme as Mode;
    }
    if (window.matchMedia("(prefers-color-scheme: reduce)").matches) {
      return "dark";
    }
    return "light";
  };

  const [mode, setMode] = React.useState<Mode>(theme);
  const toggleMode = () => setMode(mode === "light" ? "dark" : "light");

  React.useEffect(() => {
    document.documentElement.setAttribute("class", mode);

    window.localStorage.setItem("theme", mode);
  }, [mode]);

  return (
    <Button onClick={toggleMode} size="icon" variant="icon">
      {mode === "dark" ? (
        <Sun className="!size-5 min-w-6" />
      ) : (
        <Moon className="!size-5 min-w-6" />
      )}
    </Button>
  );
}

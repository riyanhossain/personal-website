import * as React from "react";
import { Button } from "@/components/ui/button";
import { Moon, Sun } from "lucide-react";
import { useStore } from "@nanostores/react";
import { isDark } from "@/store/global";

export default function ModeSwitcher() {
  const theme = (): boolean => {
    const localStorageTheme = localStorage?.getItem("isDark") ?? "";
    if (["true", "false"].includes(localStorageTheme)) {
      return JSON.parse(localStorageTheme);
    }
    if (window.matchMedia("(prefers-color-scheme: reduce)").matches) {
      return true;
    }
    return false;
  };

  const $isDark = useStore(isDark);
  const toggleMode = () => isDark.set(!$isDark);

  React.useEffect(() => {
    isDark.set(theme());
  }, []);

  React.useEffect(() => {
    document.documentElement.setAttribute("class", $isDark ? "dark" : "");
    window.localStorage.setItem("isDark", $isDark ? "true" : "false");
  }, [$isDark]);

  const Comp = $isDark === true ? Moon : Sun;

  return (
    <Button onClick={toggleMode} size="icon" variant="icon">
      <Comp className="!size-5 min-w-5" />
    </Button>
  );
}

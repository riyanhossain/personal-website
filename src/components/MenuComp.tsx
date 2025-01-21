import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { isOpen } from "@/store/global";
import { useStore } from "@nanostores/react";

export default function MenuComp() {
  const $isOpen = useStore(isOpen);

  const toggleMenu = () => isOpen.set(!$isOpen);

  const Comp = $isOpen ? X : Menu;

  return (
    <Button size="icon" variant="icon" onClick={toggleMenu}>
      <Comp className="!size-5 min-w-6" />
    </Button>
  );
}

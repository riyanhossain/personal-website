import { HeaderItems } from "@/config";
import CenterUnderline from "@/components/AnimateUnerline";
import { useStore } from "@nanostores/react";
import { isOpen } from "@/store/global";
import * as motion from "motion/react-client";

export default function Navigation() {
  const $isOpen = useStore(isOpen);

  const variants = {
    initial: { opacity: 0, y: -10, height: 0 },
    animate: { opacity: 1, y: 0, height: "auto" },
    exit: { opacity: 0, y: -10, height: 0 },
  };

  const handleClick = (link: string) => {
    isOpen.set(false);
  };

  return (
    <motion.div
      variants={variants}
      initial="initial"
      animate={$isOpen ? "animate" : "exit"}
      className={`w-full flex items-center justify-center`}
    >
      <section className="w-full max-w-2xl mx-auto grid grid-cols-2 sm:grid-cols-1">
        {HeaderItems.map((item, index) => (
          <div key={index} className="border-y even:border-l sm:border-none">
            <div className="text-center py-4 tranistion-colors">
              <a href={item.link} onClick={() => handleClick(item.link)}>
                <CenterUnderline label={item.title} />
              </a>
            </div>
          </div>
        ))}
      </section>
    </motion.div>
  );
}

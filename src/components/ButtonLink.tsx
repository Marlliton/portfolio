import { motion } from "framer-motion";
import React from "react";

interface ButtonLinkProps {
  variants?: any;
  duration?: number;
  hover?: string;
  url: string;
  buttonLabel: string;
  color?: string; // classe da cor
}
export function ButtonLink(props: ButtonLinkProps) {
  return (
    // TODO O botão tem que ser clicável em qualquer lugar - link só funciona clicando no nome.
    <motion.button
      className={`
        text-lg
        bg-gradient-to-r from-violet-900/40 to-[#100f1d] rounded-md ring-2
        ring-violet-900/25 shadow-md shadow-violet-900/70
        my-6 transition-all ${props?.color && props.color}
      `}
      variants={props.variants}
      transition={{ duration: props?.duration ?? 0.2 }}
      whileHover={props?.hover}
    >
      <a className="block py-3 px-9 md:px-14 h-full w-full" href={props.url} target="_blank" rel="noreferrer">
        {props.buttonLabel}
      </a>
    </motion.button>
  );
}

import { useEffect, useState } from "react";
import { createPortal } from "react-dom";

export const Portal = ({ children, className = "root-portal", el = "div" }) => {
  const [container] = useState(document.createElement(el));

  container.classList.add(className);

  useEffect(() => {
    document.body.appendChild(container);
    return () => {
      document.body.removeChild(container);
    };
  }, [container]);

  return createPortal(children, container);
};

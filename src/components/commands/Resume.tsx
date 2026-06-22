import { useContext, useEffect } from "react";
import _ from "lodash";
import { termContext } from "../Terminal";

const Resume: React.FC = () => {
  const { history, rerender } = useContext(termContext);

  /* ===== get current command ===== */
  const currentCommand = _.split(history[0], " ");

  /* ===== check current command makes redirect ===== */
  useEffect(() => {
    /* ===== check current command triggers download ===== */
    if (rerender && currentCommand[0] === "resume") {
      const link = document.createElement("a");
      link.href = "/CV.pdf"; // Path to your file
      link.download = "CV.pdf"; // Name for the downloaded file
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    }
  }, [rerender, currentCommand]);

  return <span></span>;
};

export default Resume;

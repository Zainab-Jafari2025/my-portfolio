import { useEffect, useState } from "react";

function TypingText() {
  const text = "Frontend Developer | React Specialist";
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => prev + 1);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  return (
    <h2 className="text-2xl font-semibold text-violet-600">
      {text.slice(0, index)}
    </h2>
  );
}

export default TypingText;
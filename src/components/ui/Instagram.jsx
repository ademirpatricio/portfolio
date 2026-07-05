import { useEffect } from "react";

function Instagram() {
  useEffect(() => {
    // Evita adicionar o script duas vezes
    if (!document.querySelector('script[src="https://w.behold.so/widget.js"]')) {
      const script = document.createElement("script");
      script.type = "module";
      script.src = "https://w.behold.so/widget.js";
      document.head.appendChild(script);
    }
  }, []);

  return (
    <section>
      <behold-widget feed-id="GvHcq56Cvzwi7AYywfPB"></behold-widget>
    </section>
  );
}

export default Instagram;
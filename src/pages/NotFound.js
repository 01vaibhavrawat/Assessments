import { useEffect } from "react";
const Notfound = () => {
  useEffect(() => {
    window.scroll(0, 0);
  }, []);
  return (
    <div>
      <p>404 not found</p>
    </div>
  );
};

export default Notfound;

import { useLottie } from "lottie-react";
import gif from "../Gif.json";

const Lottie = () => {
  const options = {
    animationData: gif,
    loop: true,
    autoplay: true,
  };

  const { View } = useLottie(options);

  return View;
};

export default Lottie;

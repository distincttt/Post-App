import { useSelector } from "react-redux";
import Loader from "react-loader-spinner";

const Spin = () => {
   const spinner = useSelector((state) => state.appReducer.loading);
   return (
      <Loader
         type="TailSpin"
         color="#00BFFF"
         height={100}
         width={100}
         timeout={3000}
         visible={spinner}
      />
   );
};

export default Spin;

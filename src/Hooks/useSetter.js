import { useContext } from "react";
import { Context } from "../Context";

export const useSetter = (isSetter = false) => {
  const { state, dispatch } = useContext(Context);
  return isSetter ? [dispatch] : [state, dispatch];
};

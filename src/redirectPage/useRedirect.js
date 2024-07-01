import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { SET_LOGIN } from "../redux/features/auth/authSlice";
import { loginStatus } from "../services/authService";
import { toast } from "react-toastify";

const useRedirect = (path) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  //Navigate when login status is false
  useEffect(() => {
    const redirectToHome = async () => {
      const isLoggedIn = await loginStatus();
      dispatch(SET_LOGIN(isLoggedIn));

      if (!isLoggedIn) {
        toast.info("Time out, plaese log in again.");
        navigate(path);
        return;
      }
    };
    redirectToHome();
  }, [navigate, path, dispatch]);
};

export default useRedirect;
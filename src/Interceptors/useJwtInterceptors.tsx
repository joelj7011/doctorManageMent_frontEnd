import { axiosPrivate } from "../Api/Axios.Api";
import { refresh } from "../Redux/slices/signup_login.";
import { useAppDispatch, useAppSelector } from "../Redux/Store/Store";
import axios from "axios";

const useJwtInterceptors = () => {
  const {
    pat_accessToken,
    pat_refreshToken,
    doc_accessToken,
    doc_refreshToken,
    role,
  } = useAppSelector((state) => state?.states);
  const dispatch = useAppDispatch();
  const accessToken = role === "patient" ? pat_accessToken : doc_accessToken;
  const refreshToken = role === "patient" ? pat_refreshToken : doc_refreshToken;
  axiosPrivate?.interceptors?.request?.use(async (config) => {
    if (!config?.headers?.Authorization && accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  });

  axiosPrivate?.interceptors?.response?.use(
    (response) => {
      return response;
    },
    async (error) => {
      const preventRequest = error?.config;
      if (
        error?.response?.status === 403 ||
        preventRequest?.headers?.Authorization === `Bearer undefined`
      ) {
        try {
          dispatch(refresh());
          preventRequest.headers.Authorization = `Bearer ${accessToken}`;
          return axios(preventRequest);
        } catch (refresherror) {
          return Promise.reject(refreshToken);
        }
      } else {
        return Promise.reject(error);
      }
    }
  );
};

export default useJwtInterceptors;

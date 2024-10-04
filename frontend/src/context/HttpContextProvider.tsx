import { createContext, useCallback, useContext, useState } from "react";
import axios, { isAxiosError } from "axios";

const api = axios.create({
  baseURL: "https://magure-figma.onrender.com",
  headers: {
    "Content-Type": "application/json",
  },
});

interface ApiResponseData {
  success: boolean;
  erroMsg: string;
  response: object | Array<object>;
}

const createApiErrorResponse = (err: unknown): ApiResponseData => {
  let erroMsg = "Something went wrong";

  if (err instanceof String) {
    erroMsg = err.toString();
  } else if (err instanceof Error) {
    if (isAxiosError(err)) {
      if (err.response && err.response.data && err.response.data.error) {
        erroMsg = err?.response.data.error;
      } else {
        erroMsg = err.message;
      }
    } else {
      erroMsg = err.message;
    }
  }

  return { success: false, erroMsg: erroMsg, response: [] };
};

interface HttpContextType {
  showLoading: boolean;
  showError: boolean;
  get: (endpoint: string, showLoader?: boolean) => Promise<ApiResponseData>;
  post: (
    endpoint: string,
    data: object | Array<object>,
    showLoader?: boolean
  ) => Promise<ApiResponseData>;
  patch: (
    endpoint: string,
    data: object | Array<object>,
    showLoader?: boolean
  ) => Promise<ApiResponseData>;
  deleteMe: (
    endpoint: string,
    showLoader?: boolean
  ) => Promise<ApiResponseData>;
}

export const HttpMethodContext = createContext<HttpContextType | null>(null);

const HttpMethodProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [showLoading, setShowLoading] = useState(true);
  const [showError, setShowError] = useState(false);

  const get = useCallback(
    async (endpoint: string, showLoader = true): Promise<ApiResponseData> => {
      setShowLoading(showLoader);
      setShowError(true);

      return api
        .get(endpoint)
        .then((res) => {
          return {
            success: true,
            erroMsg: "",
            response: res.data.data,
          };
        })
        .catch((err) => {
          return createApiErrorResponse(err);
        })
        .finally(() => {
          setShowLoading(false);
        });
    },
    [setShowLoading]
  );

  const post = useCallback(
    async (
      endpoint: string,
      data: object | Array<object>,
      showLoader = true
    ): Promise<ApiResponseData> => {
      setShowLoading(showLoader);
      setShowError(true);

      return api
        .post(endpoint, data)
        .then((res) => {
          return {
            success: true,
            erroMsg: "",
            response: res.data.data,
          };
        })
        .catch((err) => {
          return createApiErrorResponse(err);
        })
        .finally(() => setShowLoading(false));
    },
    [setShowLoading]
  );

  const patch = useCallback(
    async (
      endpoint: string,
      data: object | Array<object>,
      showLoader = true
    ): Promise<ApiResponseData> => {
      setShowLoading(showLoader);
      setShowError(true);

      return api
        .patch(endpoint, data)
        .then((res) => {
          return {
            success: true,
            erroMsg: "",
            response: res.data,
          };
        })
        .catch((err) => {
          return createApiErrorResponse(err);
        })
        .finally(() => {
          setShowLoading(false);
        });
    },
    [setShowLoading]
  );

  const deleteMe = useCallback(
    async (endpoint: string, showLoader = true): Promise<ApiResponseData> => {
      setShowLoading(showLoader);
      setShowError(true);

      return api
        .delete(endpoint)
        .then((res) => {
          return {
            success: true,
            erroMsg: "",
            response: res.data,
          };
        })
        .catch((err) => {
          return createApiErrorResponse(err);
        })
        .finally(() => {
          setShowLoading(false);
        });
    },
    [setShowLoading]
  );

  const value: HttpContextType = {
    showLoading,
    showError,
    get,
    post,
    deleteMe,
    patch,
  };

  return (
    <HttpMethodContext.Provider value={value}>
      {children}
    </HttpMethodContext.Provider>
  );
};

export const useHttpMethodContext = () => {
  const context = useContext(HttpMethodContext);

  if (!context) {
    throw new Error(`useHttpMethodContext must be use within a useProvider`);
  }

  return context;
};

export default HttpMethodProvider;

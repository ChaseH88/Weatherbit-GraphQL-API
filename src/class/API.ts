import axios, { AxiosInstance } from "axios";

interface APIResponse {
  success: boolean,
  data?: any
  error?: string,
  token?: string
}

interface AxiosResponse {
  config: {
    method: string,
    timeout: number,
    baseURL: string,
    url: string
  },
  request: XMLHttpRequest,
  response: {
    data: APIResponse,
    headers: object
    status: number
    statusText: string
  },
  isAxiosError: boolean,
  toJSON: Function,
  data: APIResponse
}

class API {

  protected Axios: null | AxiosInstance = null;

  constructor(baseURL: string) {
    this.Axios = axios.create({
      baseURL: baseURL,
      timeout: 10000,
      headers: {
        'Access-Control-Allow-Origin': '*'
      }
    });
  }

  /**
   * This is the API's main get method.
   * @method GET
   * @param endpoint - The API endpoint
   * @returns An object containing success and the data
   */
  public async get(endpoint: string): Promise<APIResponse> {
    try {
      return (
        this.handleSuccess(
          await this.Axios?.get(endpoint) as AxiosResponse
        )
      );
    }
    catch (err) {
      return this.handleError(err);
    }
  }

  /**
   * Handle the API Success
   * @param response - The Axios response
   */
  protected handleSuccess(res: AxiosResponse): APIResponse {
    return res.data
  }

  /**
   * Handle the error
   * @param error - the error that was caught
   */
  protected handleError(err: any): APIResponse {
    const error: AxiosResponse = { ...err }
    return error.response.data;
  }
}

export { API }

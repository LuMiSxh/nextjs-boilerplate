interface IResponse<T = any | undefined> {
  status: { error: boolean; message?: any };
  data?: T;
}

export default IResponse;

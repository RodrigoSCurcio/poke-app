interface IError {
  response: {
    status: number;
    data: {};
  };
}

export const ErrorNoResponse = (err: IError) => {
  if (err instanceof Error) {
    let data;
    const responseError = err;
    if (responseError.response) {
      data = {
        status: responseError.response.status,
      };
    } else {
      data = { data: "Error during request", status: 500 };
    }
    return data;
  }
};

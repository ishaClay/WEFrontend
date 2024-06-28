import api from "./api";

export const fetchChatUserList = (id: string) => {
  const url = `api/v1/message/list/${id}`;
  return api({ url });
};

export const fetchChat = (
  userId1: string | number,
  userId2: string | number
) => {
  const url = `api/v1/message/get?userId1=${userId1}&userId2=${userId2}`;
  return api({ url });
};

export const sendMessage = (data: any) => {
  const url = `api/v1/message/send`;
  return api({ url, method: "post", data });
};

export const updateMessage = (data: any) => {
  const url = `api/v1/message/update`,
    method = "put";

  return api({ url, method, data });
};

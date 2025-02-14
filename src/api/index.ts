import axios, { AxiosResponse } from 'axios';
import { IResponsePostList, TAG } from './types';
// import { IPostWithAd, IResponsePostList, TAG } from './types';

const instance = axios.create({
  headers: {
    'Content-Type': 'application/json',
  },
  baseURL: 'https://silco.verte.kr',
});

// todo (6) api 작성

export const getPostList = (): Promise<AxiosResponse<IResponsePostList>> => {
  return instance.get('/posts');
};

export const createPost = (title: string, contents: string, tag: string) => {
  return instance.post('/posts', { title, contents, tag });
};

export const getPostById = (id: string | undefined) => {
  return instance.get(`/posts/${id}`);
};

export const updatePostById = (id: string, title: string, content: string, tag: TAG) => {
  return instance.patch(`/posts/${id}`, { title, content, tag });
};

export const deletePostById = (id: string | undefined) => {
  return instance.delete(`/posts/${id}`);
};

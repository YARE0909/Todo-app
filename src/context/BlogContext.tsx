import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';

const blogReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'edit_blogpost':
      return state.map((blogPost: any) => {
        return blogPost.id === action.payload.id
          ? {
              id: action.payload.id,
              title: action.payload.title,
              content: action.payload.content,
              date: blogPost.date,
            }
          : blogPost;
      });
    case 'delete_blogpost':
      return state.filter((blogPost: any) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const getBlogPosts = (dispatch: any) => {
  return async () => {
    const response = await jsonServer.get('/blogposts');
    dispatch({type: 'get_blogposts', payload: response.data});
  };
};

const addBlogPost = (dispatch: any) => {
  return async (title: any, content: any, callback: any) => {
    if (title !== '') {
      const date = new Date().toLocaleString();
      await jsonServer.post('/blogposts', {title, content, date});
      callback ? callback() : null;
    }
  };
};
const editBlogPost = (dispatch: any) => {
  return async (id: any, title: any, content: any, callback: any) => {
    const response = await jsonServer.get(`/blogposts/${id}`);
    const date = response.data.date;
    await jsonServer.put(`/blogposts/${id}`, {title, content, date});
    dispatch({
      type: 'edit_blogpost',
      payload: {id, title, content, date}
    })

    callback ? callback() : null;
  };
};

const deleteBlogPost = (dispatch: any) => {
  return async (id: any) => {
    await jsonServer.delete(`/blogposts/${id}`);
    dispatch({type: 'delete_blogpost', payload: id});
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost, getBlogPosts},
  [],
);

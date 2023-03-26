import createDataContext from './createDataContext';

const blogReducer = (state: any, action: any) => {
  switch (action.type) {
    case 'add_blogpost':
      return [
        ...state,
        {
          id: Math.floor(Math.random() * 99999),
          title: action.payload.title,
          content: action.payload.content,
        },
      ];
    case 'edit_blogpost':
      return state.map((blogPost: any) => {
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });
    case 'delete_blogpost':
      return state.filter((blogPost: any) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch: any) => {
  return (title: any, content: any, callback: any) => {
    dispatch({type: 'add_blogpost', payload: {title, content}});
    callback ? callback() : null;
  };
};
const editBlogPost = (dispatch: any) => {
  return (id: any, title: any, content: any, callback: any) => {
    dispatch({type: 'edit_blogpost', payload: {id, title, content}});
    callback ? callback() : null;
  };
};

const deleteBlogPost = (dispatch: any) => {
  return (id: any) => {
    dispatch({type: 'delete_blogpost', payload: id});
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost, editBlogPost},
  [],
);

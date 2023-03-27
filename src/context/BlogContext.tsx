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
          date: action.payload.date,
        },
      ];
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

const addBlogPost = (dispatch: any) => {
  return (title: any, content: any, callback: any) => {
    if (title !== '') {
      const date = new Date().toLocaleString();
      dispatch({type: 'add_blogpost', payload: {title, content, date}});
      callback ? callback() : null;
    }
  };
};
const editBlogPost = (dispatch: any) => {
  return (id: any, title: any, content: any, callback: any, date: any) => {
    date = dispatch({
      type: 'edit_blogpost',
      payload: {id, title, content, date},
    });
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

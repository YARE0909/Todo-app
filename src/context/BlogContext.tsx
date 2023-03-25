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
    case 'delete_blogpost':
      return state.filter((blogPost: any) => blogPost.id !== action.payload);
    default:
      return state;
  }
};

const addBlogPost = (dispatch: any) => {
  return (title: any, content: any) => {
    console.log(title);
    dispatch({type: 'add_blogpost', payload: {title, content}});
  };
};

const deleteBlogPost = (dispatch: any) => {
  return (id: any) => {
    dispatch({type: 'delete_blogpost', payload: id});
  };
};

export const {Context, Provider} = createDataContext(
  blogReducer,
  {addBlogPost, deleteBlogPost},
  [],
);

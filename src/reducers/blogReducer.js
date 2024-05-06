import constants from '../constants/actionTypes'

let initialState = {
      blogPosts: [],
      selectedBlogPost: null
}

const blogReducer = (state = initialState, action) => {
      let updated = Object.assign({}, state);

      switch(action.type) {
            case constants.FETCH_BLOG_POSTS:
                  updated['blogPosts'] = action.blogPosts;
                  updated['selectedBlogPost'] = action.blogPosts[0];
                  return updated;
            case constants.SET_BLOG_POST:
                  updated['selectedBlogPost'] = action.selectedBlogPost;
                  return updated;
            case constants.FETCH_BLOG_POST:
                  updated['selectedBlogPost'] = action.selectedBlogPost;
                  return updated;
            default:
                  return state;
      }
}

export default blogReducer; 
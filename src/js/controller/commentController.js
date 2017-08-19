import action from '../action/index'
import { 
  FETCH_COMMENTS,
} from '../model/index'

const {
  MODIFY_INNERSTATE
} = action

class CommentController {
  updateCacheDetailComments(commentUrl) {
    FETCH_COMMENTS(commentUrl)
      .then(response => response.json())
      .then(json => {
        MODIFY_INNERSTATE('cacheDetailComments', json)
      })
  }
}

export default new CommentController()
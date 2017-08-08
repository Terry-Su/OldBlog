let self


const blogModel = {
  title: null,
  content: null,
  createTime: null,
  tags: null,
  repostNotice: null
}


const initialState =  {
  storeName: `ts_blog`,

  blogModel,


  init() {

  }
}

self = initialState
initialState.init()

export default initialState
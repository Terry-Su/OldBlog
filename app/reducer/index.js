import { getLocalStore } from '../util/localStore'


const localStore = getLocalStore('rudiment')

const blog = (state = localStore, action) => {
  switch (action.type) {
    case 'SING': 
      return {
        doing: action.result
      }
    case 'DANCE': 
      return {
        doing: action.result
      }
  }
}

export default blog
const SING = 'SING'
const DANCE = 'DANCE'

export const sing = () => {
  return {
    type: SING,
    result: 'It is singing!'  
  }
}

export const dance = () => {
  return {
    type: DANCE,
    result: 'It is dancing!'  
  }
}
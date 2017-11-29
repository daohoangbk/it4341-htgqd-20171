var defaultState = {
  hobby: [],
  group: [],
  school: [],
  area: [
    {
      id: '1',
      area: 'Bắc'
    },
    {
      id: '2',
      area: 'Trung'
    },
    {
      id: '3',
      area: 'Nam'
    }
  ]
}

export default ( state = defaultState, actions = {}) => {
  switch (actions.type) {
    case 'FETCH_DATA': {
      return {
        ...state,
        hobby: actions.hobby,
        school: actions.school,
        group: actions.group
      }
    }
    default:
    return state
  }
}

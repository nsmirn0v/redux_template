export const ACTION_NAME = 'action/name'

export const actionName = (payload) => {
  return {
    type: ACTION_NAME,
    payload,
  }
}

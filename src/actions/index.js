import * as c from './ActionTypes';

export const deleteTicket = id => ({
  type: c.DELETE_ENTRY,
  id
});

export const toggleForm = () => ({
  type: c.TOGGLE_FORM
});
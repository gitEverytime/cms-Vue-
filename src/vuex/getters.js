import {state} from "./state";

export const getters = {
  getIsActive(state){
    return state.isActive;
  },
  getTitle(title){
    return state.title;
  },
  getStep1Backfill(state){
    return state.step1Backfill;
  },
  getStep2Backfill(state){
    return state.step2Backfill;
  },
  getActive(state){
    return state.active;
  },
  getUserList(state){
    return state.userList;
  },
  getSteps(state){
    return state.steps
  },
  getIds(state){
    return state.ids
  }
}

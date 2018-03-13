export const mutations = {
  SET_ISACTIVE(state,isActive){
    state.isActive = isActive
  },
  SET_TITLE(state,title){
    state.title = title
  },
  SET_STEP1BACKFILL(state,step1Backfill){
    state.step1Backfill = step1Backfill
  },
  SET_STEP2BACKFILL(state,step2Backfill){
    state.step2Backfill = step2Backfill
  },
  SET_ACTIVE(state,active){
    state.active = active
  },
  SET_USERLIST(state,userList){
    state.userList = userList
  },
  SET_AVATARIMG(state,avatarImg){  //avatarImg
    state.userList.avatarImg = avatarImg
  },
  SET_STEPS(state,steps){
    state.steps = steps
  },
  SET_IDS(state,ids){
    state.ids = ids
  }
}

export const actions = {
  setIsActive({commit},isActive){
    commit('SET_ISACTIVE',isActive);
  },
  setTitle({commit},title){
    commit('SET_TITLE',title);
  },
  setStep1Backfill({commit},step1Backfill){
    commit('SET_STEP1BACKFILL',step1Backfill);
  },
  setStep2Backfill({commit},step2Backfill){
    commit('SET_STEP2BACKFILL',step2Backfill);
  },
  setActive({commit},active){
    commit('SET_ACTIVE',active); //commit触发你要mutations里面的函数
  },
  setUserList({commit},userList){
    commit('SET_USERLIST',userList);
  },
  setAvatarImg({commit},avatarImg){      //avatarImg
    commit('SET_AVATARIMG',avatarImg);
  },
  setSteps({commit},steps){
    commit('SET_STEPS',steps);
  },
  setIds({commit},ids){
    commit('SET_IDS',ids);
  }
}

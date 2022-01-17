const user={
    state:{
        user:{
            userName:'',
        }
    },
    gettters:{
        getUser(state)
        {
            return state.user;
        }
    },
    mutations:{
        updateUser(state,user)
        {
            state.user=user;
        }
    },
    actions:{
        asynUpdateUser(context,user)
        {
            context.commit("updateUser",user)
        }
    },
}
export default user;
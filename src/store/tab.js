export default {
    state: {
        menu: [],
        currentMenu: null,
        currentSubMenu: null
    },
    mutations: {
        selectMenu(state,val){
            // state.currentMenu = val;要对首页进行筛选
            val.name === 'home' ? state.currentMenu = null : state.currentMenu = val;
        },
    },
    actions: {
    }
}
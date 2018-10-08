import Vue from 'vue'
import Vuex from 'vuex'
import api from './api'

Vue.use(Vuex)

const store = new Vuex.Store({

    state: {
        form1: 'No', // yes or no
        form2: [],
        form3: [],
        form4: 5,    // default value
        form5: [],
    },
    mutations:{
        addForm1(state, ans) {
            state.form1 = ans
            console.log('Added Answer to Form1')
        },
        addForm3(state, ans) {
            state.form3.push(ans)
            console.log('Added Answer to Form3')
        },
        addForm5(state, ans) {
            state.form5.push(ans)
            console.log('Added Answer to Form5')
        },
    },
    actions:{
        async addForm3({ commit } , answer){
            console.log('Action')
            if(!answer || !answer.title){
                console.error('Empty')
                return
            }
            const result = await api.addForm3(answer)
            if(result === true ) commit('addForm3', answer)
            else
            console.error('Error')
        },
        async addForm5({ commit } , answer){
            console.log('Action')
            if(!answer || !answer.title){
                console.error('Empty')
                return
            }
            const result = await api.addForm3(answer)
            if(result === true ) commit('addForm5', answer)
            else
            console.error('Error')
        },
    },
    getters:{
        getForm1(state){
            return state.form1
        },
        getForm2(state){
            return state.form2
        },
        getForm3(state){
            return state.form3
        },
        getForm4(state){
            return state.form4
        },
        getForm5(state){
            return state.form5
        },
    },
})

export default store
import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export default new Vuex.Store({
    state: {
        name: "",
        desc: "",

        email: "",
        phone: "",
        adress: "",
        github: "",

        experinceList: [],

        educationList: [],

        skillsList: [],

        about: "",
    },
    mutations: {
        setName(state, value) {
            state.name = value;
        },
        setDesc(state, value) {
            state.desc = value;
        },

        setEmail(state, value) {
            state.email = value;
        },
        setPhone(state, value) {
            state.phone = value;
        },
        setAdress(state, value) {
            state.adress = value;
        },
        setGitHub(state, value) {
            state.github = value;
        },

        setExperience(state, value) {
            state.experinceList.push(value);
        },

        setEducation(state, value) {
            state.educationList.push(value);
        },

        setSkills(state, value) {
            state.skillsList.push(value);
        },

        setAbout(state, value) {
            state.about = value;
        },
    },
    actions: {
        setExperience(vuexContext, experienceData) {
            vuexContext.commit("setExperience", experienceData);
        },

        setEducation(vuexContext, educationData) {
            vuexContext.commit("setEducation", educationData);
        },

        setSkills(vuexContext, skillData) {
            vuexContext.commit("setSkills", skillData);
        },
    },
    modules: {},
});
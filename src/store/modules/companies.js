import axios from 'axios'

export default {
    actions: {
        getCompanies({commit}){
            return axios(`https://my-json-server.typicode.com/OlgaKlymas/poseidon/companies`, {
                method: "GET"
            }).then((companies)=>{
                commit("setCompanies", companies.data);
                return companies
            }).catch((error)=>{
                console.log(error)
                return error
            })
        },
        getCompany( {commit}, id){
            return axios(`https://my-json-server.typicode.com/OlgaKlymas/poseidon/companies/${id}`, {
                method: "GET"
            }).then((company)=>{
                commit("setCompany", company.data);
                return company
            }).catch((error)=>{
                console.log(error)
                return error
            })
        }
    },
    mutations: {
        setCompanies: (state, companies) => {
            state.companies = companies
        },
        setCompany: (state, company) => {
            state.company = company
        }
    },
    state: {
        companies: [],
        company: {}
    },
    getters: {
        allCompanies(state){
            return state.companies
        },
        company(state){
            return state.company
        }
    }
}

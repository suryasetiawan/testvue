import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        isLoading: false,
        listPerusahaan: [
            { nama: 'Pertamina', pengeluaran: 'Rp.10.000.000.000', notes:'Bidang Perminyakan' },
            { nama: 'Garuda', pengeluaran: 'Rp.20.000.000.000', notes:'Bidang Penerbangan' },
            { nama: 'Telkom', pengeluaran: 'Rp.30.000.000.000', notes:'Bidang Telekomunikasi' }
        ]
    },
    mutations: {
        KONFIRMASI_PERUSAHAAN: (state, perusahaan) => {
            state.listPerusahaan.push(perusahaan)
        }
    },
    actions: {
        simpanPerusahaan({ commit, state }, perusahaan) {
            state.isLoading = true
            setTimeout(() => {
                commit('KONFIRMASI_PERUSAHAAN', perusahaan)
                state.isLoading = false
            }, 100)
        }
    }
})

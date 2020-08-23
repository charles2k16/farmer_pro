const state = {
  farmers: [],
  newFarmers: [],
  editedFarmers: [],
  internetStatus: true
}

const getters = {
  getFarmers: (state) => state.farmers,
  getNewFarmers: (state) => state.newFarmers,
  getEditedFarmers: (state) => state.editedFarmers,
  internetStatus: (state) => state.internetStatus
}

const actions = {
  getFarmerData({ commit }, farmers) {
    commit('SET_FARMERS', farmers)
  },
  addFarmerOffline({ commit }, farmer) {
    commit('ADD_FARMER', farmer)
  },
  emptyFarmerData({ commit }) {
    commit('SET_FARMER_DATA_EMPTY')
  },
  update_internet_status({ commit }, status) {
    commit('UPDATE_INTERNET_STATUS', status)
  }
}

const mutations = {
  SET_FARMERS: (state, farmers) => {
    state.farmers = farmers;
  },
  ADD_FARMER: (state, farmer) => {
    state.newFarmers.push(farmer);
    state.farmers.push(farmer);
  },
  SET_FARMER_DATA_EMPTY: (state) => {
    state.farmers = [],
      state.newFarmers = []
  },
  UPDATE_INTERNET_STATUS: (state, status) => {
    state.internetStatus = status;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
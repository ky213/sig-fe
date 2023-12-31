export const state = () => ({
    schemas: [],
    layerGroups: []
})

export const mutations = {
    add(state, payload) {
        state.schemas = payload
    },
    addNewSchema(state, payload) {
        state.schemas.push(payload)
    },
    updateSchema(state, payload) {
        const newSchemas = state.schemas.filter(({ _id }) => _id != payload._id)

        newSchemas.push(payload)
        state.schemas = newSchemas
    }
    ,
    deleteSchema(state, id) {
        state.schemas = state.schemas.filter(schema => schema._id !== id)
    }
    ,
    addLayerGroup(state, payload) {
        state.layerGroups.push(payload)
    }
}


export const getters = {
    names(state) {
        return state.schemas.map(({ name }) => name)
    }
}
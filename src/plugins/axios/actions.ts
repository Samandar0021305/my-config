import dynamicApi from './dynamicApi'
export const actions = (param:string) => {
    return {
        get: dynamicApi(param)[`get${param}`],
        getById: dynamicApi(param)[`getbyid${param}`],
        post: dynamicApi(param)[`post${param}`],
        put: dynamicApi(param)[`put${param}`],
        remove: dynamicApi(param)[`delete${param}`],
    }
}
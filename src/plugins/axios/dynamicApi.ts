import request from "./axios";
import { camelize } from "./camelize";

function CRUD(param: any) {
    return {
        [camelize(`get${param}`)]: async (payload: any) => {
            try {
                const resonse = await request({
                    url: "/" + param,
                    method: "GET",
                    params:
                        {...payload,
                        } ?? undefined,
                });
                return resonse;
            } catch (err) {
                return err;
            }
        },
        [camelize(`getbyid${param}`)]: async (payload: any) => {
            try {
                const response = await request({
                    url: `${param}/${payload.id}`,
                    method: "GET",
                });
                return response;
            } catch (err) {
                return err;
            }
        },

        [camelize(`post${param}`)]: async (payload: any) => {
            try {
                const response = await request({
                    url: "/" + param + "/" + "create",
                    method: "POST",
                    data: {
                        ...payload,
                    },
                });
                if (response.status === 201) {
                    //   toast.success("Successfully created!");
                }
                return response;
            } catch (error) {
                // toast.error("Error occured !");
                return error;
            }
        },
        [camelize(`put${param}`)]: async (payload: any) => {
            const { id, data } = payload;
            try {
                const response = await request({
                    url: "/" + param + "/update/" + id,
                    method: "PATCH",
                    data: {
                        ...data,
                    },
                });

                if (response.status === 200) {
                    //   toast.success("Successfully updated !");
                }

                return response;
            } catch (error) {
                // toast.error("Error occured !");
                return error;
            }
        },
        [camelize(`delete${param}`)]: async (payload: any) => {
            try {
                const respones = await request({
                    url: "/" + param + "/delete/" + payload,
                    method: "DELETE",
                });
                if (respones.status === 200) {
                    //   toast.success("Successfully deleted !");
                }
                return respones;
            } catch (error) {
                // toast.error("Error occured !");
                return error;
            }
        },
    };
}

export default (param: any) => new CRUD(param);
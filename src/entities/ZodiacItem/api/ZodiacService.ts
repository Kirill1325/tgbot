import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { ZodiacQueryType } from "../model/types";

export const ZodiacApi = createApi({
    reducerPath: "ZodiacApi",
    baseQuery: fetchBaseQuery({ baseUrl: 'https://poker247tech.ru/get_horoscope/' }),
    endpoints: (build) => ({
        getDescriptionBySign: build.mutation<ZodiacQueryType, Omit<ZodiacQueryType, 'horoscope'>>({
            query(body) {
                return {
                    url: '/',
                    method: 'POST',
                    body,
                    // headers: {
                    //     'Content-type': 'application/json; charset=UTF-8',
                    // },
                }
            },
            // transformResponse: (response: { data: ZodiacQueryType }, meta, arg) => response.data,
        })
    })
})
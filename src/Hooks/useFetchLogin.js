import {useCallback, useEffect, useState} from "react";
import axios from "axios";
import useLocalStorage from "./useLocalStorage";

export default (url) => {

    const baseURL = 'https://conduit.productionready.io/api/';

    const [isLoading, setIsLoading] = useState(false);
    const [response, setResponse] = useState(null);
    const [error, setError] = useState(null);
    const [options, setOptions] = useState({});
    const [token] = useLocalStorage('token');

    const doFetch = useCallback((options = {}) => {
        setOptions(options);
        setIsLoading(true);
    }, []);
    useEffect(() => {

        if (!isLoading) {
            return
        }
        axios(baseURL + url,  {
            method: 'post',
            data: {
                user: {
                    email: '1595159@mail.ru',
                    password: '1595159slava'
                }
            }
        }).then(res => {
            setIsLoading(false);
            setResponse(res.data)
        }).catch(error => {
            setIsLoading(false);
            setError(error.response.data)
        })
    }, [isLoading, url, options, token]);
        return [{isLoading, response, error}, doFetch]

}
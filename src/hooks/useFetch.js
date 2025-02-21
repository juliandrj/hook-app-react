import { useEffect, useState } from "react";

const localCache = {};
const initalState = {
    data: null,
    isLoading: true,
    hasError: false,
    error: null
};

export const useFetch = (url) => {
    const [state, setState] = useState(initalState);
    const setLoadingState = () => {
        setState(initalState);
    };
    const getFetch = async() => {
        setLoadingState();
        if (localCache[url]) {
            setState({
                data: localCache[url],
                isLoading: false,
                hasError: false,
                error: null
            });
            return;
        }
        const resp = await fetch(url);
        if (!resp.ok) {
            setState({
                data: null,
                isLoading: false,
                hasError: true,
                error: {
                    code: resp.status,
                    message: resp.statusText
                }
            });
            return;
        }
        await new Promise(resolve => setTimeout(resolve, 1500));
        const data = await resp.json();
        setState({
            data,
            isLoading: false,
            hasError: false,
            error: null
        });
        localCache[url] = data;
    };
    
    useEffect(() => {
        getFetch();
    }, [url]);
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError
    };
}

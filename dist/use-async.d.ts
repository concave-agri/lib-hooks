declare function useAsync(initialState: any): {
    isIdle: boolean;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    setData: any;
    setError: any;
    error: any;
    status: any;
    data: any;
    run: any;
    reset: any;
};
export { useAsync };

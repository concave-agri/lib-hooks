declare function useAsync(initialState: any): {
    isIdle: boolean;
    isLoading: boolean;
    isError: boolean;
    isSuccess: boolean;
    setData: (data: any) => any;
    setError: (error: any) => any;
    error: any;
    status: any;
    data: any;
    run: (promise: any) => any;
    reset: () => any;
};
export { useAsync };

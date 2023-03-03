declare type RootState = ReturnType<typeof import('../store').store.getState>;
declare type AppThunk<ReturnType = void> = import('redux-thunk').ThunkAction<
    ReturnType,
    RootState,
    unknown,
    import('redux').AnyAction
>;

declare type AppDispatch = typeof import('./index').store.dispatch;
// eslint-disable-next-line @typescript-eslint/no-explicit-any
declare type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;

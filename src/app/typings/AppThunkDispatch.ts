import { ThunkDispatch } from "@reduxjs/toolkit";
import { AnyAction } from "redux";
 
// eslint-disable-next-line @typescript-eslint/no-explicit-any
export type AppThunkDispatch = ThunkDispatch<RootState, any, AnyAction>;
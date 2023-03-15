import { ActionReducerMap, ActionReducer, MetaReducer } from '@ngrx/store';
import { BookingState, bookingReducer } from './booking.reducer';

export interface AppState {
    booking: BookingState;
}

export const reducers: ActionReducerMap<AppState> = {
    booking: bookingReducer
}

export function debug(reducer: ActionReducer<any>): ActionReducer<any> {
    return function (state, action) {
        console.log('previous state:', state);
        console.log('action: ', action);
        const nextState = reducer(state, action);
        console.log('current state: ', state);
        return nextState;
    }
}
export const metaReducers: MetaReducer<any>[] = [debug];
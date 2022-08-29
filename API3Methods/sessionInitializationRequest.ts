import axios from "axios";
import * as variables from '../util/variables';

export interface SessionInitializationBody {
    correlationId: string,
    sessionId: string,
    casinoId: string,
    licenseeSessionId: string,
    licenseePlayerId: string,
    currency: string,
    channel: {
        type: string,
        wrapped: boolean,
        os: string
    }
}

export const sessionInitialization = (body: object) => {
    return axios.put(`http://${variables.rbowHost}/onewallet/api3/start_session_initialization`, {...body})
};

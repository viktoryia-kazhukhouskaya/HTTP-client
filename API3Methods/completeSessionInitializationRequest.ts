import axios from "axios";
import * as variables from '../util/variables';

export interface CompleteSessionInitializationBody {
    correlationId: string,
    sessionId: string,
    playerId: string
}

export const сompleteSessionInitialization = (body: object) => {
    return axios.put(`http://${variables.rbowHost}/onewallet/api3/complete_session_initialization`, {...body})
};
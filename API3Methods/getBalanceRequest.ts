import axios from "axios";
import * as variables from '../util/variables';

export interface GetBalanceBody {
    correlationId: string;
    sessionId: string;
    balanceId: string;
    table?: {
        tableId: string;
        virtualTableId: string|null;
    },
    gameType?: string;
}

export const getBalance = (body: object) => {
    return axios.post(`http://${variables.rbowHost}/onewallet/api3/get_balance`, {...body})
};


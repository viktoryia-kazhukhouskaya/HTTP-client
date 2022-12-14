import axios from "axios";
import * as variables from "../util/variables";

export interface PlayerWithdrawalBody {
    correlationId: string,
    playerGameId: string,
    gameRoundId: string,
    gameStartTime: string,
    sessionId: string,
    txId: string,
    gameType: string,
    table: {
        tableId: string,
        virtualTableId: string|null
    };
    [bets: string]: any,
    placeTime: string,
    balanceId: string
};

export const playerWithdrawal = (body: object): any => {
    return axios.put(`http://${variables.rbowHost}/onewallet/api3/player_withdrawal`, {...body})
};

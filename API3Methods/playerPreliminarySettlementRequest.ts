import axios from "axios";
import * as variables from '../util/variables';

export interface PlayerPreliminarySettlementBody {
    correlationId: string;
    playerId: string;
    playerGameId: string;
    gameRoundId: string;
    cancelledTransactionIds: string[]
    [finishedTransactions: string]: any;
}

export const playerPreliminarySettlement = (body: object): any => {
   return axios.put(`http://${variables.rbowHost}/onewallet/api3/player_preliminary_settlement`, {...body})
};

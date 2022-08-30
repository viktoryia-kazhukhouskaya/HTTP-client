import axios from "axios";
import * as variables from '../util/variables';

export interface PlayerFinalSettlementBody {
    correlationId: string,
    playerId: string,
    playerGameId: string,
    gameRoundId: string,
    [reason: string]: any
}

export const playerFinalSettlement = (body: object) => {
    return axios.put(`http://${variables.rbowHost}/onewallet/api3/player_final_settlement`, {...body})
};

import * as variables from '../util/variables';
import { generateString } from "../util/randomGenerator";
import { PlayerPreliminarySettlementBody } from '../API3Methods/playerPreliminarySettlementRequest';

export const playerPreliminarySettlementBody: PlayerPreliminarySettlementBody = {
    correlationId: generateString(32),
    playerId: variables.playerId,
    playerGameId: variables.playerGameId,
    gameRoundId: variables.gameRoundId,
    gameStartTime: variables.timestamp,
    cancelledTransactionIds: [variables.txId1],
    finishedTransactions: []
};

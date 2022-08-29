import * as variables from '../util/variables';
import { generateString } from "../util/randomGenerator";
import { PlayerWithdrawalBody } from '../API3Methods/playerWithdrawalRequest';

export const playerWithdrawalBody2: PlayerWithdrawalBody = {
    correlationId: generateString(32),
    playerGameId: variables.playerGameId,
    gameRoundId: variables.gameRoundId,
    gameStartTime: variables.timestamp,
    sessionId: variables.sessionId,
    txId: variables.txId1,
    gameType: variables.gameTypeForJackpot,
    table: {
        tableId: variables.tableIdForJackpot,
        virtualTableId: variables.virtualTableId
    },
    bets: [
        {
            betId: variables.betId1,
            code: variables.betCodeForJackpot2,
            amount: variables.betAmountForJackpot2
        }
    ],
    placeTime: variables.timestamp,
    balanceId: variables.balanceId
};
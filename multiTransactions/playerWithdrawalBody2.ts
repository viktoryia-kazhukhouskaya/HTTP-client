import * as variables from "../util/variables";
import { generateString } from "../util/randomGenerator";
import { PlayerWithdrawalBody } from "../API3Methods/playerWithdrawalRequest";

export const playerWithdrawalBody2: PlayerWithdrawalBody = {
    correlationId: generateString(32),
    playerGameId: variables.playerGameId,
    gameRoundId: variables.gameRoundId,
    gameStartTime: variables.timestamp,
    sessionId: variables.sessionId,
    txId: variables.txId1,
    gameType: variables.gameType,
    table: {
        tableId: variables.tableId,
        virtualTableId: variables.virtualTableId
    },
    bets: [
        {
            betId: variables.betId1,
            code: variables.betCode1,
            amount: variables.bet
        }
    ],
    placeTime: new Date().toJSON(),
    balanceId: variables.balanceId
};
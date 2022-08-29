import * as variables from '../util/variables';
import { generateString } from "../util/randomGenerator";
import { PlayerWithdrawalBody } from '../API3Methods/playerWithdrawalRequest';

export const playerWithdrawalBody: PlayerWithdrawalBody = {
    correlationId: generateString(32),
    playerGameId: variables.playerGameId,
    gameRoundId: variables.gameRoundId,
    gameStartTime: variables.timestamp,
    sessionId: variables.sessionId,
    txId: variables.txId,
    gameType: variables.gameType,
    table: {
        tableId: variables.tableId,
        virtualTableId: variables.virtualTableId
    },
    bets: [
        {
            betId: variables.betId,
            code: variables.betCode,
            amount: variables.bet
        }
    ],
    placeTime: variables.timestamp,
    balanceId: variables.balanceId
};

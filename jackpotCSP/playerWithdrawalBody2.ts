import * as globalVariables from '../util/globalVariables';
import { randomGenerator } from "../util/randomGenerator";
import { PlayerWithdrawalBody } from '../API3Methods/playerWithdrawalRequest';
import {betAmountForJackpot2, betCodeForJackpot2} from "../util/globalVariables";

export const playerWithdrawalBody2: PlayerWithdrawalBody = {
    correlationId: randomGenerator.getRandomId(32),
    playerGameId: globalVariables.playerGameId,
    gameRoundId: globalVariables.gameRoundId,
    gameStartTime: globalVariables.timestamp,
    sessionId: globalVariables.sessionId,
    txId: globalVariables.txId1,
    gameType: globalVariables.gameTypeForJackpot,
    table: {
        tableId: globalVariables.tableIdForJackpot,
        virtualTableId: globalVariables.virtualTableId
    },
    bets: [
        {
            betId: globalVariables.betId1,
            code: globalVariables.betCodeForJackpot2,
            amount: globalVariables.betAmountForJackpot2
        }
    ],
    placeTime: globalVariables.timestamp,
    balanceId: globalVariables.balanceId
};
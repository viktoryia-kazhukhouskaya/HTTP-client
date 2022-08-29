import * as globalVariables from '../util/globalVariables';
import { randomGenerator } from "../util/randomGenerator";
import { PlayerWithdrawalBody } from '../API3Methods/playerWithdrawalRequest';

export const playerWithdrawalBody: PlayerWithdrawalBody = {
    correlationId: randomGenerator.getRandomId(32),
    playerGameId: globalVariables.playerGameId,
    gameRoundId: globalVariables.gameRoundId,
    gameStartTime: globalVariables.timestamp,
    sessionId: globalVariables.sessionId,
    txId: globalVariables.txId,
    gameType: globalVariables.gameTypeForJackpot,
    table: {
        tableId: globalVariables.tableIdForJackpot,
        virtualTableId: globalVariables.virtualTableId
    },
    bets: [
        {
            betId: globalVariables.betId,
            code: globalVariables.betCodeForJackpot,
            amount: globalVariables.betAmountForJackpot
        },
        {
            betId: globalVariables.betId1,
            code: globalVariables.betCodeForJackpot1,
            amount: globalVariables.betAmountForJackpot1,
            jackpotContributions: [
                {
                    jackpotId: globalVariables.jackpotId,
                    amount: globalVariables.jackpotIdAmount,
                    pots: [
                        {
                            Top: {
                                potId: globalVariables.topPostId,
                                amount: globalVariables.topAmount,
                                amountInEur: globalVariables.topAmountInEur
                            },
                            Reserve: {
                                potId: globalVariables.reservePostId,
                                amount: globalVariables.reserveAmount,
                                amountInEur: globalVariables.reserveAmountInEur
                            },
                            Fixed: {
                                amount: globalVariables.fixedAmount,
                                amountInEur: globalVariables.fixedAmountInEur
                            }
                        }
                    ]
                }
            ]
        }
    ],
    placeTime: globalVariables.timestamp,
    balanceId: globalVariables.balanceId
};

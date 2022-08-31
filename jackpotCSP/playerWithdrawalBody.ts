import * as variables from '../util/variables';
import { generateString } from "../util/randomGenerator";
import { PlayerWithdrawalBody } from '../API3Methods/playerWithdrawalRequest';
import {topPotId} from "../util/variables";

export const playerWithdrawalBody: PlayerWithdrawalBody = {
    correlationId: generateString(32),
    playerGameId: variables.playerGameId,
    gameRoundId: variables.gameRoundId,
    gameStartTime: variables.timestamp,
    sessionId: variables.sessionId,
    txId: variables.txId,
    gameType: variables.gameTypeForJackpot,
    table: {
        tableId: variables.tableIdForJackpot,
        virtualTableId: variables.virtualTableId
    },
    bets: [
        {
            betId: variables.betId,
            code: variables.betCodeForJackpot,
            amount: variables.betAmountForJackpot
        },
        {
            betId: variables.betId1,
            code: variables.betCodeForJackpot1,
            amount: variables.betAmountForJackpot1,
            jackpotContributions: [
                {
                    jackpotId: variables.jackpotId,
                    amount: variables.jackpotIdAmount,
                    pots: [
                        {
                            Top: {
                                potId: variables.topPotId,
                                amount: variables.topAmount,
                                amountInEur: variables.topAmountInEur
                            },
                            Reserve: {
                                potId: variables.reservePotId,
                                amount: variables.reserveAmount,
                                amountInEur: variables.reserveAmountInEur
                            },
                            Fixed: {
                                amount: variables.fixedAmount,
                                amountInEur: variables.fixedAmountInEur
                            }
                        }
                    ]
                }
            ]
        }
    ],
    placeTime: new Date().toJSON(),
    balanceId: variables.balanceId
};

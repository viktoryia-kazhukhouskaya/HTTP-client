import * as variables from '../util/variables';
import { generateString } from "../util/randomGenerator";
import { PlayerFinalSettlementBody } from "../API3Methods/playerFinalSettlementRequest";

export const playerFinalSettlementBody: PlayerFinalSettlementBody = {
    correlationId: generateString(32),
    playerId: variables.playerId,
    playerGameId: variables.playerGameId,
    gameRoundId: variables.gameRoundId,
    reason: {
        type: variables.settlementType,
        finishedTransactions: [
            {
                txId: variables.txId,
                payoffs: [
                    {
                        betId: variables.betId,
                        amount: variables.payoffAmountForJackpot1,
                        jackpotPayoffDetails: null
                    },
                    {
                        betId: variables.betId1,
                        amount: variables.payoffAmountForJackpot,
                        jackpotPayoffDetails: [
                            {
                                jackpotId: variables.jackpotId,
                                amount: variables.payoffAmountForJackpot,
                                amountInBaseCurrency: null,
                                pot: {
                                    Top: {
                                        potId: variables.topPotId,
                                        amountInEur: variables.payoffAmountForJackpot,
                                        totalAmountOfWinningsEur: variables.payoffAmountForJackpot
                                    }
                                }
                            }
                        ]
                    }
                ]
            },
            {
                txId: variables.txId1,
                payoffs: [
                    {
                        betId: variables.betId1,
                        amount: variables.payoffAmountForJackpot1,
                        jackpotPayoffDetails: null
                    }
                ]
            }
        ]
    }
};

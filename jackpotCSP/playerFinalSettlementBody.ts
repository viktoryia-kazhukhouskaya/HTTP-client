import * as globalVariables from '../util/globalVariables';
import {randomGenerator} from "../util/randomGenerator";
import { PlayerFinalSettlementBody } from '../API3Methods/playerFinalSettlementRequest';
import {betAmountForJackpot2, payoffAmountForJackpot, topPostId} from "../util/globalVariables";

export const playerFinalSettlementBody: PlayerFinalSettlementBody = {
    correlationId: randomGenerator.getRandomId(32),
    playerId: globalVariables.playerId,
    playerGameId: globalVariables.playerGameId,
    gameRoundId: globalVariables.gameRoundId,
    reason: {
        type: globalVariables.settlementType,
        finishedTransactions: [
            {
                txId: globalVariables.txId,
                payoffs: [
                    {
                        betId: globalVariables.betId,
                        amount: globalVariables.betAmountForJackpot2,
                        jackpotPayoffDetails: null
                    },
                    {
                        betId: globalVariables.betId1,
                        amount: globalVariables.payoffAmountForJackpot,
                        jackpotPayoffDetails: [
                            {
                                jackpotId: globalVariables.jackpotId,
                                amount: globalVariables.payoffAmountForJackpot,
                                Top: {
                                    potId: globalVariables.topPostId,
                                    amountInEur: globalVariables.payoffAmountForJackpot,
                                    totalAmountOfWinningsEur: globalVariables.payoffAmountForJackpot
                                }
                            }
                        ]
                    }
                ]
            }
        ]
    }
};


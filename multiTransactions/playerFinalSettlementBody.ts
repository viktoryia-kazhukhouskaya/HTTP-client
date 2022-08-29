import * as variables from '../util/variables';
import { generateString } from "../util/randomGenerator";
import { PlayerFinalSettlementBody } from '../API3Methods/playerFinalSettlementRequest';

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
                        amount: variables.payoff
                    }
                ]
            }
        ]
    }
};

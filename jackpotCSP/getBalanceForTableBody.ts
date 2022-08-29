import * as variables from '../util/variables';
import { generateString } from "../util/randomGenerator";
import { GetBalanceBody } from '../API3Methods/getBalanceRequest';

export const getBalanceForTableBody: GetBalanceBody = {
    correlationId: generateString(32),
    sessionId: variables.sessionId,
    table: {
        tableId: variables.tableIdForJackpot,
        virtualTableId: variables.virtualTableId
    },
    gameType: variables.gameTypeForJackpot,
    balanceId: variables.balanceId
};
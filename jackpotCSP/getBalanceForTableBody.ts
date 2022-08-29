import * as globalVariables from '../util/globalVariables';
import { randomGenerator } from "../util/randomGenerator";
import { GetBalanceBody } from '../API3Methods/getBalanceRequest';

export const getBalanceForTableBody: GetBalanceBody = {
    correlationId: randomGenerator.getRandomId(32),
    sessionId: globalVariables.sessionId,
    table: {
        tableId: globalVariables.tableId,
        virtualTableId: globalVariables.virtualTableId
    },
    gameType: globalVariables.gameType,
    balanceId: globalVariables.balanceId
};
import * as globalVariables from '../util/globalVariables';
import { randomGenerator } from "../util/randomGenerator";
import { GetBalanceBody } from '../API3Methods/getBalanceRequest';

export const getBalanceBody: GetBalanceBody = {
    correlationId: randomGenerator.getRandomId(32),
    sessionId: globalVariables.sessionId,
    balanceId: globalVariables.balanceId
};
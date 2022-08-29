import * as variables from '../util/variables';
import { generateString } from "../util/randomGenerator";
import { GetBalanceBody } from '../API3Methods/getBalanceRequest';

export const getBalanceBody: GetBalanceBody = {
    correlationId: generateString(32),
    sessionId: variables.sessionId,
    balanceId: variables.balanceId
};

import * as globalVariables from '../util/globalVariables';
import { SessionInitializationBody } from '../API3Methods/sessionInitializationRequest';
import {randomGenerator} from "../util/randomGenerator";

export const sessionInitializationBody: SessionInitializationBody = {
    correlationId: randomGenerator.getRandomId(32),
    sessionId: globalVariables.sessionId,
    casinoId: globalVariables.casinoId,
    licenseeSessionId: globalVariables.licenseeSessionId,
    licenseePlayerId: globalVariables.licenseePlayerId,
    currency: globalVariables.currency,
    channel: {
        type: globalVariables.channelType,
        wrapped: globalVariables.channelWrapped,
        os: globalVariables.channelOs
    }
};
import { playerFinalSettlement } from '../API3Methods/playerFinalSettlementRequest';
import { sessionInitialization } from '../API3Methods/sessionInitializationRequest';
import { сompleteSessionInitialization } from '../API3Methods/completeSessionInitializationRequest';
import { getBalance } from "../API3Methods/getBalanceRequest";
import { playerWithdrawal } from "../API3Methods/playerWithdrawalRequest";
import { completeSessionInitializationBody } from '../jackpotCSP/completeSessionInitializationBody';
import { getBalanceBody } from "../jackpotCSP/getBalanceBody";
import { getBalanceForTableBody } from "../jackpotCSP/getBalanceForTableBody";
import { playerFinalSettlementBody } from "../jackpotCSP/playerFinalSettlementBody";
import { playerWithdrawalBody } from "../jackpotCSP/playerWithdrawalBody";
import { playerWithdrawalBody2 } from "../jackpotCSP/playerWithdrawalBody2";
import { sessionInitializationBody } from "../jackpotCSP/sessionInitializationBody";
import { betAmountForJackpot, betAmountForJackpot1, betAmountForJackpot2, decimal, payoffAmountForJackpot, payoffAmountForJackpot1 } from "../util/variables";
import { statusCodeOk, statusCodeCreated, statusCodeAccepted } from "../util/expectedStatusCodes";

let initialBalance: number;
let currentBalance: number;
let expectedBalance: number;
let previousBalance: number;

describe("Jackpot CSP - top level scenario", () => {
    test("Start session initialization", async () => {
        const response = await sessionInitialization(sessionInitializationBody);
        expect(response.data.currency).toEqual(sessionInitializationBody.currency);
        expect(response.data.licenseePlayerId).toEqual(sessionInitializationBody.licenseePlayerId);
        expect(response.data.licenseeSessionId).not.toBeNull();
        expect(response.status).toEqual(statusCodeOk);
        console.log(`status_code: ${response.status}`);
        console.log(`start_session_initialization_request: ${response.config.data}`);
        console.log(`start_session_initialization_response: ${JSON.stringify(response.data)}`);
        console.log(`status_code: ${response.status}`);
    });
    test("Complete session initialization", async () => {
        const response = await сompleteSessionInitialization(completeSessionInitializationBody);
        expect(response.status).toEqual(statusCodeCreated);
        console.log(`complete_session_initialization_request: ${response.config.data}`);
        console.log(`status_code: ${response.status}`);
    });
    test("Get balance", async () => {
        const response = await getBalance(getBalanceBody);
        initialBalance = response.data.balances[0].amount;
        expect(response.status).toEqual(statusCodeOk);
        console.log(`initial_balance: ${initialBalance}`);
        console.log(`get_balance_request: ${response.config.data}`);
        console.log(`get_balance_response: ${JSON.stringify(response.data)}`);
    });
    test("Get balance for table", async () => {
        const response = await getBalance(getBalanceForTableBody);
        currentBalance = response.data.balances[0].amount;
        expect(initialBalance).toEqual(currentBalance);
        expect(response.status).toEqual(statusCodeOk);
        console.log(`initial_balance_for_table: ${initialBalance}`);
        console.log(`current_balance_for_table: ${currentBalance}`);
        console.log(`get_balance_request_for_table: ${response.config.data}`);
        console.log(`get_balance_request_for_table: ${JSON.stringify(response.data)}`);
    });
    test("Withdrawal 1", async () => {
        const response = await playerWithdrawal(playerWithdrawalBody);
        previousBalance = currentBalance;
        currentBalance = response.data.balances[0].amount;
        expectedBalance = previousBalance - (betAmountForJackpot + betAmountForJackpot1);
        expect(currentBalance.toFixed(decimal)).toEqual(expectedBalance.toFixed(decimal));
        expect(response.status).toEqual(statusCodeOk);
        console.log(`previous_balance: ${previousBalance}`);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`expected_balance: ${expectedBalance}`);
        console.log(`withdrawal_request: ${response.config.data}`);
        console.log(`withdrawal_response: ${JSON.stringify(response.data)}`);
    });
    test("Withdrawal 2", async () => {
        const response = await playerWithdrawal(playerWithdrawalBody2);
        previousBalance = currentBalance;
        currentBalance = response.data.balances[0].amount;
        expectedBalance = previousBalance - betAmountForJackpot2;
        expect(currentBalance.toFixed(decimal)).toEqual(expectedBalance.toFixed(decimal));
        expect(response.status).toEqual(statusCodeOk);
        console.log(`previous_balance: ${previousBalance}`);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`expected_balance: ${expectedBalance}`);
        console.log(`withdrawal_request: ${response.config.data}`);
        console.log(`withdrawal_response: ${JSON.stringify(response.data)}`);
    });
    test("Final settlement", async () => {
        const response = await playerFinalSettlement(playerFinalSettlementBody);
        expect(response.status).toEqual(statusCodeAccepted);
        console.log(`payoff: ${payoffAmountForJackpot + payoffAmountForJackpot1*2}`);
        console.log(`final_settlement_request: ${response.config.data}`);
    });
    test("Get final balance", async () => {
        const response = await getBalance(getBalanceBody);
        previousBalance = currentBalance;
        currentBalance = response.data.balances[0].amount;
        expectedBalance = previousBalance + payoffAmountForJackpot + payoffAmountForJackpot1*2;
        expect(currentBalance.toFixed(decimal)).toEqual(expectedBalance.toFixed(decimal));
        expect(response.status).toEqual(statusCodeOk);
        console.log(`previous_balance: ${previousBalance}`);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`expected_balance: ${expectedBalance}`);
        console.log(`get_balance_request: ${response.config.data}`);
        console.log(`get_balance_response: ${JSON.stringify(response.data)}`);
    });
});
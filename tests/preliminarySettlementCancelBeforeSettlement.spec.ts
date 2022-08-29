import { getBalance } from '../API3Methods/getBalanceRequest';
import { playerWithdrawal } from '../API3Methods/playerWithdrawalRequest';
import { playerPreliminarySettlement } from '../API3Methods/playerPreliminarySettlementRequest'
import { playerFinalSettlement } from '../API3Methods/playerFinalSettlementRequest';
import { sessionInitialization } from '../API3Methods/sessionInitializationRequest';
import { сompleteSessionInitialization } from '../API3Methods/completeSessionInitializationRequest';
import { completeSessionInitializationBody } from '../multiTransactions/completeSessionInitializationBody';
import { getBalanceBody } from "../multiTransactions/getBalanceBody";
import { getBalanceForTableBody } from "../multiTransactions/getBalanceForTableBody";
import { playerFinalSettlementBody } from "../multiTransactions/playerFinalSettlementBody";
import { playerPreliminarySettlementBody } from "../multiTransactions/playerPreliminarySettlementBody";
import { playerWithdrawalBody } from "../multiTransactions/playerWithdrawalBody";
import { playerWithdrawalBody2 } from "../multiTransactions/playerWithdrawalBody2";
import { sessionInitializationBody } from "../multiTransactions/sessionInitializationBody";
import { bet, betAmountForJackpot, betAmountForJackpot1, decimal, payoff, payoffAmountForJackpot, payoffAmountForJackpot1 } from "../util/variables";
import {statusCodeOk, statusCodeCreated, statusCodeAccepted} from "../util/expectedStatusCodes";
import { errorValue } from "../util/expectedTextValue";

let initialBalance: number;
let currentBalance: number;
let previousBalance: number;
let expectedBalance: number;

describe("Preliminary settlement - cancel before the settlement scenario", () => {
    test("Start session initialization", async () => {
        const response = await sessionInitialization(sessionInitializationBody);
        expect(response.status).toEqual(statusCodeOk);
        expect(response.statusText).not.toEqual(errorValue);
        console.log(`start_session_initialization: ${response.config.data}`);
        console.log(`status_code: ${response.status}`);
    });
    test("Complete session initialization", async () => {
        const response = await сompleteSessionInitialization(completeSessionInitializationBody);
        expect(response.status).toEqual(statusCodeCreated);
        expect(response.statusText).not.toEqual(errorValue);
        console.log(`complete_session_initialization: ${response.config.data}`);
        console.log(`status_code: ${response.status}`);
    });
    test("Get balance", async () => {
        const response = await getBalance(getBalanceBody);
        initialBalance = response.data.balances[0].amount;
        currentBalance = response.data.balances[0].amount;
        expect(initialBalance).toBe(currentBalance);
        expect(response.status).toEqual(statusCodeOk);
        expect(currentBalance).not.toContain(errorValue);
        console.log(`initial_balance: ${initialBalance}`);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`get_balance_request: ${response.config.data}`);
        console.log(`get_balance_response: ${JSON.stringify(response.data)}`);
    });
    test("Get balance for table", async () => {
        const response = await getBalance(getBalanceForTableBody);
        currentBalance = response.data.balances[0].amount;
        expect(initialBalance).toBe(currentBalance);
        expect(response.status).toEqual(statusCodeOk);
        expect(currentBalance).not.toContain(errorValue);
        console.log(`initial_balance_for_table: ${initialBalance}`);
        console.log(`current balance_for_table: ${currentBalance}`);
        console.log(`get_balance_request_for_table: ${response.config.data}`);
        console.log(`get_balance_request_for_table: ${JSON.stringify(response.data)}`);
    });
    test("Withdrawal 1", async () => {
        const response = await playerWithdrawal(playerWithdrawalBody);
        currentBalance = response.data.balances[0].amount;
        previousBalance = currentBalance + bet;
        expectedBalance = previousBalance - bet;
        expect(currentBalance.toFixed(decimal).toString()).toBe(expectedBalance.toFixed(decimal));
        expect(response.status).toEqual(statusCodeOk);
        expect(currentBalance).not.toContain(errorValue);
        console.log(`previous_balance: ${previousBalance}`);
        console.log(`bet_amount: ${bet}`);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`expected_balance: ${expectedBalance}`);
        console.log(`withdrawal_request: ${response.config.data}`);
        console.log(`withdrawal_response: ${JSON.stringify(response.data)}`);
    });
    test("Withdrawal 2", async () => {
        const response = await playerWithdrawal(playerWithdrawalBody2);
        currentBalance = response.data.balances[0].amount;
        previousBalance = currentBalance + bet;
        expectedBalance = previousBalance - bet;
        expect(currentBalance.toFixed(decimal).toString()).toBe(expectedBalance.toFixed(decimal));
        expect(response.status).toEqual(statusCodeOk);
        expect(currentBalance).not.toContain(errorValue);
        console.log(`previous_balance: ${previousBalance}`);
        console.log(`bet_amount: ${bet}`);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`expected_balance: ${expectedBalance}`);
        console.log(`withdrawal_request: ${response.config.data}`);
        console.log(`withdrawal_response: ${JSON.stringify(response.data)}`);
    });
    test("Preliminary settlement - cancel", async () => {
        const response = await playerPreliminarySettlement(playerPreliminarySettlementBody);
        expect(response.status).toEqual(statusCodeAccepted);
        expect(response.statusText).not.toContain(errorValue);
        console.log(`preliminary_settlement_request: ${response.config.data}`);
        });
    test("Get balance after preliminary settlement", async () => {
        const response = await getBalance(getBalanceForTableBody);
        currentBalance = response.data.balances[0].amount;
        expectedBalance = initialBalance - bet;
        expect(currentBalance.toFixed(decimal).toString()).toBe(expectedBalance.toFixed(decimal));
        expect(response.status).toEqual(statusCodeOk);
        expect(currentBalance).not.toContain(errorValue);
        console.log(`initial_balance: ${initialBalance}`);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`expected_balance: ${expectedBalance}`);
        console.log(`get_balance_request_for_table: ${response.config.data}`);
        console.log(`get_balance_response: ${JSON.stringify(response.data)}`);
    });
    test("Final settlement", async () => {
        const response = await playerFinalSettlement(playerFinalSettlementBody);
        expect(response.status).toEqual(statusCodeAccepted);
        expect(response.statusText).not.toContain(errorValue);
        console.log(`payoff: ${payoff}`);
        console.log(`final_settlement_request: ${response.config.data}`);
    });
    test("Get final balance", async () => {
        const response = await getBalance(getBalanceBody);
        currentBalance = response.data.balances[0].amount;
        expectedBalance = initialBalance - bet + payoff;
        expect(currentBalance.toFixed(decimal).toString()).toBe(expectedBalance.toFixed(decimal));
        expect(response.status).toEqual(statusCodeOk);
        expect(currentBalance).not.toContain(errorValue);
        console.log(`initial_balance: ${initialBalance}`);
        console.log(`current_balance: ${currentBalance}`);
        console.log(`expected_balance: ${expectedBalance}`);
        console.log(`get_balance_request: ${response.config.data}`);
        console.log(`get_balance_response: ${JSON.stringify(response.data)}`);
    });
});

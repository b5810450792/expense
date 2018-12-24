$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("feature/Acc.feature");
formatter.feature({
  "comments": [
    {
      "line": 1,
      "value": "# new feature"
    },
    {
      "line": 2,
      "value": "# Tags: optional"
    }
  ],
  "line": 4,
  "name": "login",
  "description": "  As a user\r\n  I can add and view income and expense\r\n  so that I know how much money I have",
  "id": "login",
  "keyword": "Feature"
});
formatter.before({
  "duration": 1313855,
  "status": "passed"
});
formatter.scenario({
  "line": 9,
  "name": "Add income",
  "description": "",
  "id": "login;add-income",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 10,
  "name": "a user has 1000 for income",
  "keyword": "Given "
});
formatter.step({
  "line": 11,
  "name": "I add income amount 100",
  "keyword": "When "
});
formatter.step({
  "line": 12,
  "name": "I have income amount 1100",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 11
    }
  ],
  "location": "StepDefAcc.a_user_has_for_income(double)"
});
formatter.result({
  "duration": 86431496,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "100",
      "offset": 20
    }
  ],
  "location": "StepDefAcc.i_add_income_amount(double)"
});
formatter.result({
  "duration": 64927,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1100",
      "offset": 21
    }
  ],
  "location": "StepDefAcc.i_have_income_amount(double)"
});
formatter.result({
  "duration": 38054011,
  "status": "passed"
});
formatter.before({
  "duration": 18551,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Pay a money less than income",
  "description": "",
  "id": "login;pay-a-money-less-than-income",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 15,
  "name": "a user has 1000 for income",
  "keyword": "Given "
});
formatter.step({
  "line": 16,
  "name": "I pay a money amount 200",
  "keyword": "When "
});
formatter.step({
  "line": 17,
  "name": "I have income amount 800",
  "keyword": "Then "
});
formatter.step({
  "line": 18,
  "name": "my expense is 200",
  "keyword": "And "
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 11
    }
  ],
  "location": "StepDefAcc.a_user_has_for_income(double)"
});
formatter.result({
  "duration": 92290,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "StepDefAcc.i_pay_a_money_amount(double)"
});
formatter.result({
  "duration": 61217,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "800",
      "offset": 21
    }
  ],
  "location": "StepDefAcc.i_have_income_amount(double)"
});
formatter.result({
  "duration": 49160,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 14
    }
  ],
  "location": "StepDefAcc.my_expense_is(double)"
});
formatter.result({
  "duration": 72811,
  "status": "passed"
});
formatter.before({
  "duration": 17624,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Check current income",
  "description": "",
  "id": "login;check-current-income",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 21,
  "name": "a user has 1000 for income",
  "keyword": "Given "
});
formatter.step({
  "line": 22,
  "name": "I want to check my current income that is 1000",
  "keyword": "When "
});
formatter.step({
  "line": 23,
  "name": "system shows my current income amount 1000",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 11
    }
  ],
  "location": "StepDefAcc.a_user_has_for_income(double)"
});
formatter.result({
  "duration": 202667,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 42
    }
  ],
  "location": "StepDefAcc.i_want_to_check_my_current_income_that_is(double)"
});
formatter.result({
  "duration": 175304,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 38
    }
  ],
  "location": "StepDefAcc.system_shows_my_current_income_amount(double)"
});
formatter.result({
  "duration": 161855,
  "status": "passed"
});
formatter.before({
  "duration": 24580,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Check current expense",
  "description": "",
  "id": "login;check-current-expense",
  "type": "scenario",
  "keyword": "Scenario"
});
formatter.step({
  "line": 26,
  "name": "a user has 1000 for income",
  "keyword": "Given "
});
formatter.step({
  "line": 27,
  "name": "I pay a money amount 200",
  "keyword": "When "
});
formatter.step({
  "line": 28,
  "name": "system shows my current expense amount 200",
  "keyword": "Then "
});
formatter.match({
  "arguments": [
    {
      "val": "1000",
      "offset": 11
    }
  ],
  "location": "StepDefAcc.a_user_has_for_income(double)"
});
formatter.result({
  "duration": 104811,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 21
    }
  ],
  "location": "StepDefAcc.i_pay_a_money_amount(double)"
});
formatter.result({
  "duration": 76522,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "200",
      "offset": 39
    }
  ],
  "location": "StepDefAcc.system_shows_my_current_expense_amount(double)"
});
formatter.result({
  "duration": 103884,
  "status": "passed"
});
});
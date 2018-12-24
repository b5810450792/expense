package csku.Account;

import Controller.ControllerAcc;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;

import static org.junit.jupiter.api.Assertions.assertEquals;

public class TestControllerAcc {
    ControllerAcc controllerAcc;

    @BeforeEach
    void init() {
        controllerAcc = new ControllerAcc(100.0, 20.0);
    }

    @Test
    public void testCurrentIncome() {
        assertEquals(100, controllerAcc.getIncome());
    }

    @Test
    public void testCurrentExpense() {
        assertEquals(20, controllerAcc.getExpense());
    }

    @Test
    public void testPayMoneyLessThanIncomeMethod() {
        controllerAcc.payExpense(20);
        assertEquals(60, controllerAcc.getMoney());
    }

    @Test
    public void testAddIncomeMethod() {
        controllerAcc.addIncome(40);
        assertEquals(120, controllerAcc.getMoney());
    }


}

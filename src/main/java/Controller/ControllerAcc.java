package Controller;

public class ControllerAcc {
    private double money;
    private double income;
    private double expense;

    public ControllerAcc(double income, double expense) {
        this.income = income;
        this.money = income - expense;
        this.expense = expense;
    }

    public void payExpense(double expense) {
        this.expense += expense;
        this.money -= expense;
    }

    public void addIncome(double income) {
        this.income += income;
        this.money += income;
    }

    public double getMoney() {
        return money;
    }

    public double getIncome() {
        return income;
    }

    public double getExpense() {
        return expense;
    }
}

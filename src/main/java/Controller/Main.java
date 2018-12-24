package Controller;

public class Main {
    public static void main(String[] args) {
        ControllerAcc controllerAcc = new ControllerAcc(100,20) ;
        System.out.println(controllerAcc.getIncome());
        System.out.println(controllerAcc.getExpense());
        System.out.println("Current money : "+controllerAcc.getMoney());
    }

}

package io.UnderwritingAppMain;

/**
 * Created by syoung on 10.19.15.
 */
public class Client {
    private String name;
    private int age;
    private String phone;
    private int income;
    private int debt;
    private int home;
    private int car;
    private int savings;
    private String last4name;
    private String last4phone;
    private String clientID;

    public Client(){

    }

    public Client(String _name, int _age, String _phone, int _income, int _debt, int _home, int _car, int _savings){
        this.name = _name;
        this.age = _age;
        this.phone = _phone;
        this.income = _income;
        this.debt = _debt;
        this.home = _home;
        this.car = _car;
        this.savings = _savings;

        if (this.name == null || this.name.length() < 4){
            this.last4name = this.name;
        } else {
            this.last4name = this.name.substring(this.name.length() - 4);
        }
        this.last4phone = this.phone.substring(this.phone.length() -4);
        this.clientID = this.last4name.toUpperCase() + "-" + this.age + "-" + this.last4phone;

    }

    public String getName() {
        return name;
    }

    public int getAge() {
        return age;
    }

    public String getPhone() {
        return phone;
    }

    public int getIncome() {
        return income;
    }

    public int getDebt() {
        return debt;
    }

    public int getHome() {
        return home;
    }

    public int getCar() {
        return car;
    }

    public int getSavings() {
        return savings;
    }

    public String getClientID(){
        return clientID;
    }
}

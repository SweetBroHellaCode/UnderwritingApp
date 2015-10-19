package io.UnderwritingAppMain;


import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

/**
 * Created by syoung on 10/15/15.
 */

@RestController
public class CtrlClient {

    @RequestMapping("/")
    public Client homepage(){

        return new Client();
    }

//    @RequestMapping("/custom")
//    public Client custom(){
//        return new Client("Craig", 27);
//    }

    @RequestMapping("/apply")
    public Client createClient(@RequestParam(value="name", defaultValue = "ChongLi")String name,
                               @RequestParam(value="age", defaultValue = "28")Integer age,
                               @RequestParam(value="phone", defaultValue = "302-444-5555")String phone,
                               @RequestParam(value="income", defaultValue = "50000")Integer income,
                               @RequestParam(value="debt", defaultValue = "10000")Integer debt,
                               @RequestParam(value="home", defaultValue = "200000")Integer home,
                               @RequestParam(value="car", defaultValue = "5000")Integer car,
                               @RequestParam(value="savings", defaultValue = "2000")Integer savings){
        return new Client(name, age, phone, income, debt, home, car, savings);
    }
}
var Bankaccount = /** @class */ (function () {
    function Bankaccount(accountbalance) {
        this.accountbalance = accountbalance;
    }
    Bankaccount.prototype.credit = function (amount) {
        if (amount > 0) {
            this.accountbalance += amount;
            console.log("credit finallygot into your new account and you balance is:" + this.accountbalance);
        }
        else {
            console.log("credit unsuccessful!");
        }
    };
    Bankaccount.prototype.debit = function (amount) {
        if (amount > 0 && amount < this.accountbalance) {
            this.accountbalance -= amount;
            console.log("debit successfuly shared in bank account:" + this.accountbalance);
        }
        else {
            console.log("debit unsuccessful!");
        }
    };
    return Bankaccount;
}());
var Customer = /** @class */ (function () {
    function Customer(person, age, gender, mobile_number, bankaccount) {
        this.person = person;
        this.age = age;
        this.gender = gender;
        this.mobile_number = mobile_number;
        this.bankaccount = bankaccount;
    }
    Customer.prototype.display = function () {
        console.log("Name: " + this.person.firstname + "" + this.person.lastname);
        console.log("Age: " + this.age);
        console.log("Gender: " + this.gender);
        console.log("Mobile number: " + this.mobile_number);
        console.log("Amount in Bank: " + this.bankaccount.accountbalance);
        console.log();
    };
    return Customer;
}());
var a1 = new Bankaccount(800);
var c1 = new Customer({ firstname: "anabia", lastname: "asma" }, 15, "female", 32872735280284, a1);
c1.display();
c1.bankaccount.debit(500);
console.log();
var a2 = new Bankaccount(500);
var c2 = new Customer({ firstname: "ana", lastname: "bia" }, 20, "male", 33756302874032, a2);
c2.display();
c2.bankaccount.debit(200);
console.log();

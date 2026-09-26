const priceOfIceCream = 5.30;
let paymentRecieved =(prompt("How much money did you give me?"));
let isPaymentSufficient = paymentRecieved >= priceOfIceCream;
if (isPaymentSufficient) {
    print("yayyy you can have your ice cream!!!!!!!!!!!!!!!");
} else {
    print("soryyy not enough money awwwww");
}
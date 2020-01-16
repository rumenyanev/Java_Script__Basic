function club(input) {

    let profit = +input.shift();
    let nameCocktail = input.shift();
    let income = 0.0;

    while ("Party!" !== nameCocktail) {
        let quantity = +input.shift();

        let priceCocktail = quantity * nameCocktail.length;
        let totalPrice = priceCocktail;
        if (priceCocktail % 2 != 0) {
            totalPrice *= 0.75;
        }
        income += totalPrice;
        profit -= totalPrice;
        if (profit <= 0) {
            break;
        }

        nameCocktail = input.shift();
    }

    if ("Party!" == nameCocktail) {
        console.log(`We need ${profit.toFixed(2)} leva more.`);
    } else {
        console.log("Target acquired.");
    }

    console.log(`Club income - ${income.toFixed(2)} leva.`);
}


club([500, "Bellini", 6, "Bamboo", 7, "Party!"]);
club([100, "Sidecar", 7, "Mojito", 5, "White Russian", 10]);

/*Задача 4. Клуб
Времето се затопля и клубовете пускат обещаващи промоции.
Напише програма, която да изчислява приходите на един клуб за вечерта
и дали е достигната желаната печалба, като знаете следните условия:

цената на един коктейл е дължината неговото име.
Ако цената на една поръчка е нечетно число, има 25% отстъпка от цената на поръчката.
Вход
От конзолата се четат:
    • На първия ред – желаната печалба на клуба - реално число в интервала [1.00... 15000.00]
Поредица от два реда до получаване на командата "Party!" или до достигане на желаната печалба:
        ◦ Име на коктейла – текст
        ◦ Брой на коктейлите за поръчката – цяло число в интервала [1… 50]
Изход
На конзолата първо да се отпечата един ред:
    • При получена команда "Party!":
 "We need {недостигаща сума} leva more."
    • При достигане на желаната печалба:
	"Target acquired."
След това да се отпечата:
	"Club income - {приходи от клуба} leva."
Парите да бъдат форматирани до втората цифра след десетичния знак.
Примерен вход и изход
Вход
500
Bellini
6
Bamboo
7
Party!

Изход
We need 416.00 leva more.
Club income - 84.00 leva.

Обяснения
Целта на клуба е да събере 500 лв.
Първата поръчка е за 6 коктейла Bellini. Цената на коктейла е неговата дължина на името 0 -> 7.
 6 коктейла по 7 лева -> 42, последната цифра е 2, следователно няма отстъпка,
Следващата поръчка е за 7 коктейла Bamboo, цената му е 6 лв. 6 * 7 -> 42, отново няма отстъпка.
Получаваме командата Party! Програмата приключва работа.
Клуба е събрал 42 + 42 = 84 лв. като целта е 500. 500 – 84 = 416 лв. не достигат.

Вход
100
Sidecar
7
Mojito
5
White Russian
10

Изход
Target acquired.
Club income - 196.75 leva.


Обяснения
Целта на клуба е да събере 100 лв.
Първата поръчка е за 7 коктейла Sidecar. 7 * 7 = 49, последната цифра е нечетно число, следователно има 25% от цената на поръчката.
49 – 25% е 36.75 лв.
Следващата поръчка е 5 бр. Mojito, общо 30 лв.
Следващата поръчка е 10 бр. White Russian, общо 130 лв.
До тук клуба е събрал 36.75 + 30 + 130 = 196.75
Целта от 100 лева е изпълнена и програма приключва изпълнение


*/
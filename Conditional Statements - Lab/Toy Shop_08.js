function toyShop(input){
    let priceTrip = Number(input.shift());
    let numPuzzles = Number(input.shift());
    let numTalkingDolls = Number(input.shift());
    let numTeddyBears = Number(input.shift());
    let numMignons = Number(input.shift());
    let numTrucks = Number(input.shift());

    let pricePuzzles = 2.60;
    let priceTallkingDolls = 3.00;
    let priceTeddyBears = 4.10;
    let priceMignons = 8.20;
    let priceTrucks = 2.00;

    let numsToys = numPuzzles + numTalkingDolls + numTeddyBears + numMignons + numTrucks;

    let sumPriceToys = (numPuzzles*pricePuzzles)+(priceTallkingDolls * numTalkingDolls)+
    (priceTeddyBears * numTeddyBears)+ (priceMignons * numMignons)+(priceTrucks * numTrucks);

    if(numsToys >=50){
        sumPriceToys -= sumPriceToys * 0.25;
    }
    let finalProfit = sumPriceToys - sumPriceToys * 0.10;
if(finalProfit >= priceTrip){
    let moneyLeft = finalProfit - priceTrip;
    console.log(`Yes! ${moneyLeft.toFixed(2)} lv left.`)
}else{
    let moneyNeeded = priceTrip - finalProfit;
    console.log(`Not enough money! ${moneyNeeded.toFixed(2)} lv needed.`)
}

}
toyShop([40.8,20,25,30,50,10]);
toyShop([320,8,2,5,5,1]);

/*Магазин за детски играчки
Петя има магазин за детски играчки. Тя получава голяма поръчка, която трябва да изпълни. С парите, които
ще спечели иска да отиде на екскурзия. Да се напише програма, която пресмята печалбата от поръчката.
Цени на играчките:
 Пъзел - 2.60 лв.
 Говореща кукла - 3 лв.
 Плюшено мече - 4.10 лв.
 Миньон - 8.20 лв.
 Камионче - 2 лв.
Ако поръчаните играчки са 50 или повече магазинът прави отстъпка 25% от общата цена. От спечелените
пари Петя трябва да даде 10% за наема на магазина. Да се пресметне, дали парите ще ѝ стигнат да отиде на
екскурзия.
Вход
От конзолата се четат 6 реда:
1. Цена на екскурзията - реално число в интервала [1.00 … 10000.00]
2. Брой пъзели - цяло число в интервала [0… 1000]
3. Брой говорещи кукли - цяло число в интервала [0 … 1000]
4. Брой плюшени мечета - цяло число в интервала [0 … 1000]
5. Брой миньони - цяло число в интервала [0 … 1000]
6. Брой камиончета - цяло число в интервала [0 … 1000]
Изход
На конзолата се отпечатва:
 Ако парите са достатъчни се отпечатва:
o "Yes! {оставащите пари} lv left."
 Ако парите НЕ са достатъчни се отпечатва:
o "Not enough money! {недостигащите пари} lv needed."
Резултатът трябва да се форматира до втория знак след десетичната запетая.
Примерен вход и изход
Вход  
40.8
20
25
30
50
10

Изход
Yes! 418.20 lv left. 

Обяснения
Сума: 20 * 2.60 + 25 * 3 + 30 * 4.10 + 50 * 8.20 + 10 * 2 = 680 лв.
Брой на играчките: 20 + 25 + 30 + 50 + 10 = 135
135 < 50 => 25% отстъпка; 25% от 680 = 170 лв.
отстъпка
Крайна цена: 680 – 170 = 510 лв.
Наем: 10% от 510 лв. = 51 лв.
Печалба: 510 – 51 = 459 лв.
459 < 40.8 => 459 – 40.8 = 418.20 лв. остават

Вход  
320
8
2
5
5
1

Изход
Not enough money! 238.73 lv needed. 

Обяснения
Сума: 90.3 лв.
Брой на играчките: 21
21 < 50 => няма отстъпка
Наем: 10% от 90.3 = 9.03 лв.
Печалба: 90.3 – 9.03 = 81.27 лв.
81.27 < 320 => 320 – 81.27 = 238.73 лв. не достигат

*/
// // 1. გვაქვს name; age; დაბეჭდე "მე ვარ" (name) "წლის ... (age)"
let name = 'მე ვარ';
let age = ' 39 წლის';
// console.log(name + age);

// // 2. მოცემულია რადიუსი 10, გამოვთვალოთ სფეროს  მოცემულობა. ფორმულა 4/3*პი*რადიუსის კუბზე
let r = 10;
let volumeSphere = 4/3*Math.PI*Math.pow(r, 3);
// console.log(volumeSphere);

// //3. რას დაბეჭდავს მოცემული ცვლადი: 
let x = 5;
{
    let x = 10;
    {
        x = x + 2;
        // console.log(x);
    }
} 
// console.log(x);
// // 12 da 5

// // 4. მოცემულია საქონლის ფასი, 
// // თუ საქონლის ფასი 100-ზე მეტია, უნდა შევამციროდ 20 % ით, 
// // თუ ლუწია, შევამციროთ 10 % ით,
// // თუ ორივეა, შევამციროთ 15 % ით
let price = 101;
if(price > 100 && price%2 == 0){
    price = price * 0.85;
}else{
    if(price > 100 && price%2 !== 0){
        price = price * 0.8;
    }else{
        if(price%2 == 0){
            price = price * 0.9;
        }
    }
}
// console.log(price);

// // 5. რისი ტოლია მოცემული გამოსახულება:
// // 5 > 2 && 7 < 3 || 2 > 1   - true
// // 5 < 2 && 7 < 3 || 2 > 1  -  false
// // 5 < 2 && (7 < 3 || 2 > 1) - false
// // 5 > 2 && (7 < 3 || 2 > 1) - true
// // 5 > -2 < -1  -    false -----------
// // !!!!!(5 > -2 < -1) - true ------

// //6. რომელი მნიშვნელობები არის false ტოლფასი?
// // -2, 0, 1, 5, "", "0", "1", null
// // -2, 1, 5, "0", "1"  -  true
// // "", null, 0 - false

//7. რას შვრება typeof?  -  რა ტიპის მნიშვნელობა არის
// რას დაბეჭდავს შემდეგი კოდი: typeof typeof [];  -  string
// რას დაბეჭდავს შემდეგი კოდი:
if(k<5){
    // console.log('yes');  //-  error
}else{
    // console.log('no');  //-  error
}
// რას დაბეჭდავს შემდეგი კოდი:
if(typeof k !=='undefined' && k > 5){ //- error-ის დროს კოდი არ ჩერდება?
    // console.log('yes');
}else{
    // console.log('no');  //- იბეჭდება no. ???
}

// //8. დაბეჭდე 1 დან 6 მდე ჯამი for loop - ციკლი
let i;
let sum = 0;
for(i=1; i<7; i++){
    sum = sum + i;
}
// console.log(sum);

// //9. დაბეჭდე 6 ზე ნაკლები ფიბონაჩის რიცხვები
// // 0, 1, 1, 2, 3, 5, 8, 13, 21, 34, 55, 89, 144
let fibonach = [0, 1];
// console.log(fibonach[0]);
// console.log(fibonach[1]);
while(fibonach[fibonach.length-1] < 6){
    let x = fibonach[fibonach.length-1]+fibonach[fibonach.length-2];
    fibonach.push(x);  
    if(x < 6){        
        // console.log(x);
    }    
}
// console.log(fibonach); 

// //10. დაბეჭდე მე-n-ე წევრი

let a1 = 0;
let a2 = 1;
let nn = 10;
let an = 2;
while(an < nn){
    let a3 = a1 + a2;
    a1 = a2;
    a2 = a3;
    an++;
}
// console.log(a2);

// //11. მასივის კენტ რიცხვთა ჯამი
let g = [1, 8, 0, 6, 12, 11, 7];
let kenti = 0;
for(let i = 0; i < g.length; i++){
    if(g[i]%2){
        kenti = kenti + g[i];
    }    
}
// console.log(kenti);

//12. ორი მასივის თანაკვეთა
// let arr1 = [2, 7, 6, 4, 12];
// let arr2 = [1, 8, 5, 4, 6, 2, 23, 17];
// let arrIntersection = [];
// for(let i=0; i<arr1.length; i++){
//     for(let j=0; j<arr2.length; j++){
//         if(arr1[i] == arr2[j]){
//             arrIntersection.push(arr1[i]);
//         }
//     }
// }
// // console.log(arrIntersection);

// let arrIntersection = arr2.filter(function(el){
//     return el == 2;   
// })
// console.log(arrIntersection);

// 13
let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9] ]
// console.log(matrix);
let sumMatrix = 0;
for(let i = 0; i < matrix.length; i++){
    for(let j = 0; j < matrix[i].length; j++){
        sumMatrix = sumMatrix + matrix[i][j]; 
    }
}
// console.log(sumMatrix);

// 14.  დაწერეთ ფუნქცია, რომელსაც არგუმენტად გადაეცემა c ფუნქცია.
//ამ ფუნქციამ რენდომად უნდა აიღოს 1-დან 10-მდე მთელი რიცხი და გადასცეს c ფუნქციას და გამოიძახოს იგი

function test(c){
    let x = Math.floor(Math.random() * 10);
    c(x);
    // console.log(x);
}

//15.  დაწერეთ ფუქცია, რომელიც გამოთვლის n-ის ფაქტორიალს

function faqtorial (number){
    let n = 1;
    for(let i = 1; i<=number; i++){
        n = n * i;
    }
    // console.log(n);
}

//16. 14 და 15 ამოცანების საშუალებით გამოთვალეთ რენდომ რიცხვის ფაქტორიალი
test(faqtorial);

//17. //რას დაბეჭდავს:
function a(c1, c2, t){ // b, k, 10
    // console.log(1);
    c1(c2, t);
}

function b(c1, p) { // k, 10
    // console.log(2);
    c1(p);
}

function k(n) { // 10
    // console.log(3);
    // conole.log(n * n);
}

a(b, k, 10);
// 1, 2, 3, 100
//19.
leptops = [
    {brand: 'samsung', price: 1200, series: ['a-10', 'a-12', 'a-18']},
    {brand: 'lg', price: 900, series: ['b-15', 'b-19']}, 
    {brand: 'hp', price: 1100, series: ['c-20', 'c-23', 'c-17', 'c-10']}, 
];

//დაწერეთ ფუნქცია, რომელიც დააბრუნებს ყველა იმ ელემენტს, რომლის ფასიც რაღაც  price რიცხვზე მეტია

function expensive (arr, price){
    // let x = arr.filter(function(leptop){
    //     if(leptop.price>price){
    //         return true;
    //     }
    //     return false;
    // });
    // return x;
    return arr.filter(leptop => leptop.price > price);
}
// console.log(expensive(leptops, 1000));

//20. დაწერეთ ფუნქცია, რომელიც დააბრუნებს ელემენტების ბრენდების მასივს
function getNames(arr){
    return arr.map(leptop => leptop.brand);
}
// console.log(getNames(leptops));

//21.
function getTitle(arr){
    return arr.map(leptop => `${leptop.brand} costs ${leptop.price}$`);
}
// console.log(getTitle(leptops));

//22. დაწერეთ ფუნქცია, რომელიც დააბრუნებს ახალი ელემენტების მასივს, 
//სადაც ყველა ელემენტის ფასი percent პროცენტით არის გაზრდილი
function changePrice(arr, percent){
    // return arr.map(leptop => {
    //     return  {
    //         price: Math.round(leptop.price*(percent/100+1)),
    //         brand: leptop.brand,
    //         series: leptop.series
    //     }
    // });
    return arr.map(element => ({ ...element, price: element.price * (percent/100+1) }));
}

// console.log(changePrice(leptops, 10));

// დაალაგეთ ელემენტების ფასის კლებადობის მიხედვით

// leptops.sort(function(a, b){
//     if(b > a){
//         return 1;
//     }
//     return -1;
// })


// leptops.sort((a,b) => compare(a.price, b.price));
leptops.sort((a,b) => a.series.length - b.series.length);

// console.log(leptops);

// დაწერეთ ფუნქცია, რომელიც დააბრუნებს ყველა ელემენტების სერიების გაერთიანებას მასივის სახით.

// let arrSeries = [];

// leptops.forEach(element => {
//     element.series.forEach(el => {
//         arrSeries.push(el);
//     })
// });
// console.log(arrSeries);

function getSeries(array) {
    const series = [];
    array.forEach(leptop => {
        series.push(...leptop.series); //მასივს მოაშორებს კვადრატულ ფრჩხილებს და მოაწვდის ციდრებს მძიმეებით გამოყოფილს
    });

    return series;
}

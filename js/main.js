
let intro = "Assalomu Aleykum"
alert (intro + " R'oyxatdan O'ting !")
let name = prompt ("Ismingizni kiriting", )
let surename = prompt ("Familyangizni kiriting", )
let year2 =prompt ("Tugilgan yilingizni kiriting", )
let year1 = 2022
let year3 = year1 - year2;
alert ('Ismingiz: ' + name + '\n' + 'Familyangiz: ' + surename + '\n' + 'Yoshingiz: ' + useryear)
let age = 18
if (year3 >= age) {
    alert('Siz armiyaga borasiz');
}
else if(year3 <= age) {
    alert('Siz armiyaga borishga yoshlik qilasiz');
}
const booksList = document.querySelectorAll(".book");
const mainBody = document.querySelector("body");
const linksInsideBook = document.querySelectorAll("div > h2 > a");
const ad = document.querySelector(".adv");
const linksInsideList = document.querySelectorAll("div > ul > li");
const lists = document.querySelectorAll("div > ul");

//1
booksList[0].before(booksList[1]);
booksList[5].after(booksList[2]);
booksList[3].before(booksList[4]);

//2
mainBody.style.backgroundImage = "url(./image/you-dont-know-js.jpg)";

//3
linksInsideBook[4].textContent = "Книга 3. this и Прототипы Объектов";

// 4
ad.remove();

//5
linksInsideList[3].after(linksInsideList[6]);
linksInsideList[4].before(linksInsideList[8]);
linksInsideList[47].after(linksInsideList[55]);
linksInsideList[51].after(linksInsideList[48]);
linksInsideList[54].before(linksInsideList[51]);

//6
const newChapterBook6 = linksInsideList[0].cloneNode();
newChapterBook6.innerHTML = "Глава 8: За пределами ES6";
lists[2].append(newChapterBook6);
const linksInsideListNew = document.querySelectorAll("div > ul > li");
linksInsideListNew[55].after(linksInsideListNew[57]);

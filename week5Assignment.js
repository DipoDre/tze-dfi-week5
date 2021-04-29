const showShoppingList = function() {
    // Task #1
    let myList = [
        ["Bag", 4],
        ["Shoes", 5],
        ["Keys", 6],
        ["Phones", 2],
        ["Shirts", 3]
    ];

    console.log("Solution #1:");
    console.log(myList);



    // Task #2 ***************************
    let arrayWithFirstLast = [];

    arrayWithFirstLast.push(myList.shift());

    arrayWithFirstLast.push(myList.pop());

    console.log("Solution #2:");
    console.log(arrayWithFirstLast);



    // Task #3 ***************************
    myList.splice(2, 1, ["Orange Juice", 17]);

    console.log("Solution #3:")
    console.log(myList);



    // Task #4 ***************************
    let myListObject = {};
    for(item of myList) {
        myListObject[item[0]] = item[1];
    }

    console.log("Solution #4:")
    console.log(myListObject);

};


showShoppingList();


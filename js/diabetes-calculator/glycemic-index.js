var banana = getElement("banana_dd_Id")
var chocolate = getElement("choco_dd_Id")
var apple = getElement("apple_dd_Id")
var bagel = getElement("bagel_dd_Id")
var baked = getElement("baked_dd_Id")
var juice = getElement("juice_dd_Id")
var calcBtn = getElement("calculate_btn")

const getScript = document.currentScript;
const permaLink = getScript.dataset.permalink;

var queryParams = [
    { name: "sweet&snacks", values: banana },
    { name: "diary&alternatives", values: chocolate },
    { name: "fruits", values: apple },
    { name: "Cereal", values: bagel },
    { name: "Vegetables", values: baked },
    { name: "Beverages", values: juice },
];

var banUnit = [
    {
        name: "Banana cake with sugar",
        value: 47,
    },
    {
        name: "Blueberry muffin",
        value: 50,
    },
    {
        name: "Cereal bar",
        value: 33,
    },
    {
        name: "Chocolate hazelnut spread",
        value: 25,
    },
    {
        name: "Chocolate, plain",
        value: 49,
    },
    {
        name: "Croissant",
        value: 67,
    },
    {
        name: "Custard, low-fat",
        value: 29,
    },
    {
        name: "Digestives",
        value: 59,
    },
    {
        name: "fructose",
        value: 103,
    },
    {
        name: "glucose",
        value: 103,
    },
    {
        name: "honey",
        value: 58,
    },
    {
        name: "ice cream(vanilla and chocolate)",
        value: 57,
    },
    {
        name: "jelly beans",
        value: 80,
    },
    {
        name: "Maltmeal Wafer",
        value: 50,
    },
    {
        name: "Mars bar",
        value: 68,
    },
    {
        name: "Oatmeal cookies",
        value: 54,
    },
    {
        name: "Pancakes, Homemade",
        value: 66,
    },
    {
        name: "pastry",
        value: 59,
    },
    {
        name: "popcorn",
        value: 55,
    },
    {
        name: "Potato crisps",
        value: 60,
    },
    {
        name: "Rice cake",
        value: 82,
    },
    {
        name: "Rich Tea Cookies",
        value: 55,
    },
    {
        name: "Snickers bar",
        value: 68,
    },
    {
        name: "Sponge Cake,Plain",
        value: 46,
    },
    {
        name: "Sucrose",
        value: 65,
    },
    {
        name: "Vanilla frozen yogurt",
        value: 46,
    },
    {
        name: "Water cracker",
        value: 78,
    },
];
var chocoUnit = [
    {
        name: "Chocolate pudding",
        value: 47,
    },
    {
        name: "Fat-free natural yogurt",
        value: 19,
    },
    {
        name: "Fermented cow's milk",
        value: 11,
    },
    {
        name: "Milk, Condesed",
        value: 61,
    },
    {
        name: "Milk, full fat",
        value: 41,
    },
    {
        name: "Milk,skim",
        value: 32,
    },
    {
        name: "Oat milk",
        value: 69,
    },
    {
        name: "Probiotic yogurt drink",
        value: 34,
    },
    {
        name: "Rice milk",
        value: 92,
    },
    {
        name: "soy yogurt, mango",
        value: 50,
    },
    {
        name: "yogurt, greek style, honey topped",
        value: 36,
    },
    {
        name: "yogurt, low fat, natural",
        value: 35,
    },
    {
        name: "yogurt strawberry",
        value: 30,
    },
    {
        name: "yogurt fruit",
        value: 41,
    },
];

var appleUnit = [
    {
        name: "Apple raw",
        value: 40,
    },
    {
        name: "Apricots, dried",
        value: 31,
    },
    {
        name: "Apricots, raw",
        value: 56,
    },
    {
        name: "Banana, raw",
        value: 51,
    },
    {
        name: "Black grapes, raw",
        value: 59,
    },
    {
        name: "Blue berries, raw",
        value: 53,
    },
    {
        name: "Cherries, raw",
        value: 63,
    },
    {
        name: "Dates, dried",
        value: 62,
    },
    {
        name: "Figs, dried",
        value: 61,
    },
    {
        name: "Ginger marmalade",
        value: 50,
    },
    {
        name: "Kiwi, raw",
        value: 58,
    },
    {
        name: "Mixed fruit, dried",
        value: 60,
    },
    {
        name: "Orange, raw",
        value: 40,
    },
    {
        name: "Peach, raw",
        value: 56,
    },
    {
        name: "Peaches, canned",
        value: 43,
    },
    {
        name: "Pear, raw",
        value: 42,
    },
    {
        name: "Pineapple, raw",
        value: 66,
    },
    {
        name: "Plum, raw",
        value: 53,
    },
    {
        name: "Raisins",
        value: 64,
    },
    {
        name: "popcorn",
        value: 55,
    },
    {
        name: "Strawberries, raw",
        value: 40,
    },
    {
        name: "Strawberry, jam",
        value: 51,
    },
    {
        name: "Watermelon, raw",
        value: 80,
    },
];

var bagUnit = [
    {
        name: "Bagel, White",
        value: 69,
    },
    {
        name: "barely",
        value: 27,
    },
    {
        name: "Bran flakes",
        value: 74,
    },
    {
        name: "Brown rice, boiled",
        value: 62,
    },
    {
        name: "chapatti",
        value: 59,
    },
    {
        name: "corn tortilla",
        value: 49,
    },
    {
        name: "cornflakes",
        value: 77,
    },
    {
        name: "Couscous",
        value: 65,
    },
    {
        name: "fruit and fiber",
        value: 67,
    },
    {
        name: "instant oat porridge",
        value: 69,
    },
    {
        name: "Millet porridge",
        value: 62,
    },
    {
        name: "Muesli, fruit",
        value: 67,
    },
    {
        name: "Noodles, rice",
        value: 61,
    },
    {
        name: "Noodles, udon",
        value: 62,
    },
    {
        name: "Quinoa",
        value: 53,
    },
    {
        name: "Rice porridge",
        value: 88,
    },
    {
        name: "Spaghetti, white",
        value: 45,
    },
    {
        name: "Spaghetti, Whole meal",
        value: 42,
    },
    {
        name: "Wheat flake biscuits",
        value: 69,
    },
    {
        name: "Wheat roti",
        value: 59,
    },
    {
        name: "White rice, boiled",
        value: 89,
    },
    {
        name: "White Wheat bread",
        value: 75,
    },
    {
        name: "Whole Wheat bread",
        value: 74,
    },
];

var bakedUnit = [
    {
        name: "Baked beans",
        value: 40,
    },
    {
        name: "Beetroot",
        value: 64,
    },
    {
        name: "Blackeyed peas",
        value: 52,
    },
    {
        name: "Butter beans",
        value: 36,
    },
    {
        name: "carrot soup",
        value: 35,
    },
    {
        name: "Carrots boiled",
        value: 33,
    },
    {
        name: "Carrots, raw",
        value: 16,
    },
    {
        name: "Chickpeas",
        value: 36,
    },
    {
        name: "green peas",
        value: 51,
    },
    {
        name: "kidney beans",
        value: 29,
    },
    {
        name: "lentil soup",
        value: 44,
    },
    {
        name: "lentils",
        value: 29,
    },
    {
        name: "New potato",
        value: 70,
    },
    {
        name: "parsnips, boiled",
        value: 52,
    },
    {
        name: "Plantain",
        value: 68,
    },
    {
        name: "Potato, boiled",
        value: 76,
    },
    {
        name: "Potato, french fries",
        value: 64,
    },
    {
        name: "Potato, instant mash",
        value: 88,
    },
    {
        name: "Pumpkin, boiled",
        value: 51,
    },
    {
        name: "Soya beans",
        value: 20,
    },
    {
        name: "Sweet corn",
        value: 55,
    },
    {
        name: "Sweet potato, boiled",
        value: 77,
    },
    {
        name: "Taro, boiled",
        value: 54,
    },
    {
        name: "Tomato soup",
        value: 38,
    },
    {
        name: "Vegetable soup",
        value: 60,
    },
    {
        name: "yam",
        value: 54,
    },
];

var juiceUnit = [
    {
        name: "Apple juice",
        value: 41,
    },
    {
        name: "Beer, Toohey's New",
        value: 66,
    },
    {
        name: "Coconut water",
        value: 55,
    },
    {
        name: "Fresh carrot juice",
        value: 43,
    },
    {
        name: "grapefruit juice",
        value: 48,
    },
    {
        name: "Orange juice",
        value: 46,
    },
    {
        name: "Prune juice",
        value: 43,
    },
    {
        name: "Soft drink/soda",
        value: 68,
    },
    {
        name: "Tomato juice",
        value: 33,
    },
    
];


function init() {
    createDropDown(banUnit, banana)
    createDropDown(chocoUnit, chocolate)
    createDropDown(appleUnit, apple)
    createDropDown(bagUnit, bagel)
    createDropDown(bakedUnit, baked)
    createDropDown(juiceUnit, juice)
}

init()


function getExact() {
    var sweet = (getSelectedValue(banana))
    var diary = (getSelectedValue(chocolate))
    var fruit = (getSelectedValue(apple))
    var careal = (getSelectedValue(bagel))
    var Vegetable = (getSelectedValue(baked))
    var ju = (getSelectedValue(juice))

    var low, mid, high = 0;

    if (low <= 55 ) {
        
    }



    

    console.log(result);
    return math.bignumber(result)
}


function showResult() {
    resultPage2(queryParams);
    var result = Number(getExact());

    var div1 = document.createElement("div");
    var div2 = document.createElement("div");

    output.innerHTML = "";
    

    output.append(div1);
    output.append(div2);
};


calcBtn.addEventListener('click', showResult)

window.onload = function () {
    var url = window.location.href;
    if (url.includes("?")) {
        setParamValues(queryParams);
        showResult();
    }
};
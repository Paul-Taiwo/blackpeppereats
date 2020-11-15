import Jollof from "assets/images/food1.jpeg";
import JollofChicken from "assets/images/food2.jpeg";
import Spaghetti from "assets/images/food3.jpeg";
import ChineseRice from "assets/images/food4.jpeg";
import BreakFast from "assets/images/cat1.jpeg";
import FastFood from "assets/images/cat2.jpeg";
import Pizzas from "assets/images/cat3.jpeg";
import Offer1 from "assets/images/offer1.jpeg";
import Offer2 from "assets/images/offer2.jpeg";
import Offer3 from "assets/images/offer3.jpeg";

const popularFoods = [
	{
		name: "Jollof Rice & Beef",
		description:
			"Same as our regular Jollof rice but Meatier.  Perfect for a large party. ",
		price: 4670,
		image: Jollof,
	},
	{
		name: "Jollof Rice & Chicken-in-Stew",
		description:
			"Same as our regular Jollof rice but Meatier.  Perfect for a large party. ",
		price: 5670,
		image: JollofChicken,
	},
	{
		name: "Spaghetti & Barbeque chicken",
		description:
			"Same as our regular Jollof rice but Meatier.  Perfect for a large party. ",
		price: 6670,
		image: Spaghetti,
	},
	{
		name: "Chinese Rice & Beef",
		description:
			"Same as our regular Jollof rice but Meatier.  Perfect for a large party. ",
		price: 7670,
		image: ChineseRice,
	},
	{
		name: "Jollof Rice & Chicken-in-Stew",
		description:
			"Same as our regular Jollof rice but Meatier.  Perfect for a large party. ",
		price: 5670,
		image: JollofChicken,
	},
	{
		name: "Jollof Rice & Beef",
		description:
			"Same as our regular Jollof rice but Meatier.  Perfect for a large party. ",
		price: 4670,
		image: Jollof,
	},
	{
		name: "Spaghetti & Barbeque chicken",
		description:
			"Same as our regular Jollof rice but Meatier.  Perfect for a large party. ",
		price: 6670,
		image: Spaghetti,
	},
];

const categories = [
	{
		name: "Breakfast Foods",
		image: BreakFast,
	},
	{
		name: "Fast Foods",
		image: FastFood,
	},
	{
		name: "Pizzas",
		image: Pizzas,
	},
	{
		name: "Beef Soups",
		image: Jollof,
	},
];

const offers = [
	{
		name: "Get 50% off a scheduled order from Tuesday!",
		image: Offer1,
	},
	{
		name: "Get 20% off a scheduled order from Monday!",
		image: Offer2,
	},
	{
		name: "Get 60% off when you order two days before!",
		image: Offer3,
	},
	{
		name: "Get 50% off a scheduled order from Tuesday!",
		image: Offer1,
	},
];

export { popularFoods, categories, offers };

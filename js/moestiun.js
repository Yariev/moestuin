// from http://javascriptissexy.com/javascript-objects-in-detail/

//Constructor Pattern for Creating Objects

	function Fruit (theColor, theSweetness, theFruitName, theNativeToLand) {
	​
	    this.color = theColor;
	    this.sweetness = theSweetness;
	    this.fruitName = theFruitName;
	    this.nativeToLand = theNativeToLand;
	​
	    this.showName = function () {
	        console.log("This is a " + this.fruitName);
	    }
	​
	    this.nativeTo = function () {
	    this.nativeToLand.forEach(function (eachCountry)  {
	       console.log("Grown in:" + eachCountry);
	        });
	    }
	​
	​
	}

//With this pattern in place, it is very easy to create all sorts of fruits. Thus:

	var mangoFruit = new Fruit ("Yellow", 8, "Mango", ["South America", "Central America", "West Africa"]);
	mangoFruit.showName(); // This is a Mango.​
	mangoFruit.nativeTo();
	​//Grown in:South America​
	​// Grown in:Central America​
	​// Grown in:West Africa​
	​
	​var pineappleFruit = new Fruit ("Brown", 5, "Pineapple", ["United States"]);
	pineappleFruit.showName(); // This is a Pineapple.
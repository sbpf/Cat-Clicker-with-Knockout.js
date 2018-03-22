var catsData = [
    {
    catName : "Pretty Cat",
    clickCount : 0,
    imgSrc : "img/prettyCat.jpeg",
    nickNames : ["pretty", "sweety"]
    },

    {
    catName : "Kitten",
    clickCount : 0,
    imgSrc : "img/kitten.jpg",
    nickNames : ["kitty", "kit"]
    },

    {
    catName : "Yawning Cat",
    clickCount : 0,
    imgSrc : "img/catYawn.jpg",
    nickNames : ["yawny", "sleepy"]
    },  

    {
    catName : "Sleeping Cat",
    clickCount : 0,
    imgSrc : "img/sleepingCat.jpg",
    nickNames : ["sleep sleepy sleep", "goodie"]
    },

    {
    catName : "Two Cats",
    clickCount : 0,
    imgSrc : "img/twoCats.jpg",
    nickNames : ["twins", "teeny weenie"]
    }
]

var Cat = function(data){
    this.catName = ko.observable(data.catName);
    this.clickCount = ko.observable(data.clickCount);
    this.imgSrc = ko.observable(data.imgSrc);
    this.nickNames = ko.observable(data.nickNames);
    
    this.catLevel = ko.computed(function(){
        if(this.clickCount()<10)
            return "infant";
        else if(this.clickCount() < 20)
            return "toddler";
        else if(this.clickCount() < 30)
            return "teen";
        else
        return "adult";
    },this);
}

var ViewModel = function(){
    self = this;

    this.catList = ko.observableArray([]);
    catsData.forEach(function(cat){
        self.catList.push(new Cat(cat));
    });

    self.currentCat = ko.observable(this.catList()[0]);
    
    this.handleImageClick = function(){
        this.clickCount(this.clickCount()+1);
    }

    self.handleListSelection = function(selectedCat){
      // self.currentCat = ko.observable(catList.find(this.catName));
        self.currentCat(selectedCat);
    }
}
ko.applyBindings(new ViewModel());

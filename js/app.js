var Cat = function(){
    this.name = ko.observable("percy");
    this.clickCount = ko.observable(0);
    this.imgSrc = ko.observable('img/sleep.jpg');
    this.nickNames = ko.observable(["kitty", "pussy", "cat"]);    
    
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
    this.currentCat = ko.observable(new Cat());    
    this.incrementCounter = function(){
        this.clickCount(this.clickCount()+1);
    };    
}

ko.applyBindings(new ViewModel());

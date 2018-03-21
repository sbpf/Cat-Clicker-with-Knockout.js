var ViewModel = function(){
    this.name = ko.observable("percy");
    this.clickCount = ko.observable(0);
    this.imgSrc = ko.observable('img/sleep.jpg');
    
    this.incrementCounter = function(){
        this.clickCount(this.clickCount()+1);
    };

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

    this.nickNames = ["kitty", "pussy", "cat"];
    
}

ko.applyBindings(new ViewModel());

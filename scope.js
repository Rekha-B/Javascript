this.color = 'orange';
var myCar = {
    color: "Blue",
    logColor: function() {
        var self = this;
        console.log("In logColor - this.color: " + this.color); //Blue
        console.log("In logColor - self.color: " + self.color); //Blue
        (function() {
            console.log("In IIFE - this.color: " + this.color); //undefined
            console.log("In IIFE - self.color: " + self.color); //Blue
        })();
    }
};
 
myCar.logColor();
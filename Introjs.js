function greetuser(){
            alert("Hello User");
        }


function cab(name, type){
    this.name = name;
    this.type = type;
    this.details = function(){
        return `${this.name} is a +${this.type} cab`;
    }

}
const cab1 = new cab("Uber", "Sedan");
cab.prototype.start = function(){
    return `${this.name} cab has started`;
} 
cab.prototype.stop = function(){
    return `${this.name} cab has stopped`;
}
cab.prototype.move = function(){
    return `${this.name} cab is moving`;
}     
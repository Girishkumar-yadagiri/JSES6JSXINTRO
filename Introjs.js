function greetuser(){
            alert("Hello User");
        }

function cab(name, type) {
            this.name = name;
            this.type = type;
            this.details = function () {
                return `${this.name} is a +${this.type} cab`;
            }

        }
        const cab1 = new cab("Uber", "Sedan");
        cab.prototype.start = function () {
            return `${this.name} cab has started`;
        }
        cab.prototype.stop = function () {
            return `${this.name} cab has stopped`;
        }
        cab.prototype.move = function () {
            return `${this.name} cab is moving`;
        }
        console.log(cab1.details());  
        console.log(cab1.start());
        console.log(cab1.stop());
        console.log(cab1.move()); 
        const name1 = prompt("Enter your name");
        const greet = (name1) => `Hello ${name1}`;
        console.log(greet(name1));
        const city = "Bangalore";
        console.log(`I live in ${city}`);
        const base = {a:3};
        const ext ={...base, b:4};
        console.log(ext);   
        const roles = new Map();
        roles.set('admin', 'Admin User','editor');
        const tags = new Set(['js', 'nodejs', 'reactjs']);
        console.log(roles);
        console.log(tags);
        const fetchData = async () => {
            const response = await fetch('https://jsonplaceholder.typicode.com/todos/1');
            const data = await response.json();
            console.log(data);
        }
        console.log("Before fetching data");
        fetchData();
        console.log("After fetching data"); 
        const arr = [1, 2, 3, 4, 5];
        const squaredArr = arr.map(num => num * num);
        console.log(squaredArr);    
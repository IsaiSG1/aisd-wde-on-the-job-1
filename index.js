//Store Name: Pure Elegance
const storeName = "Pure Elegance";

//Store Type
const storeType = "Beauty Salon";

//services offered
const service1= "Facial";
const service2 = "Full Body Waxing";
const service3 = "Lash Extensions";
const service4 = "Tooth Gem";
const service5 = "Microblading";
const service6 = "Body Contouring";

//service prices
const service1Price = 50;
const service2Price = 70;  
const service3Price = 100;
const service4Price = 25;
const service5Price = 150;
const service6Price = 200;

//Store Hours
const storeHours = "Monday/Wednesday/Thursday/Friday (10am - 7pm), Tuesday (Closed), Saturday (10am - 4pm), Sunday (Closed)"; 

/*/Output: Console log all the variables
console.log(storeName, storeType);
console.log(service1, service1Price);
console.log(service2, service2Price);
console.log(service3, service3Price);
console.log(service4, service4Price);
console.log(service5, service5Price);
console.log(service6, service6Price);
console.log(storeHours);*/

console.log("Welcome to ${storeName}! We are the best ${storeType} in town");
console.log("Here are the services we currently offer:");
let services = [service1, service2, service3, service4, service5, service6];
let prices = [service1Price, service3Price, service3Price, service4Price, service5Price, service6Price];
console.log("Services:", services);
console.log("Prices:", prices);
// added push new service and price to the arrays
services.push("Manicure");
prices.push(25);
console.log("We've added a New Service:", services);
console.log("Updated Prices:", prices);
//removed the last service and price from the arrays
services.pop();
prices.pop();
console.log("Unofortunately we no longer offer Microblading. Here are our updated services and prices:", services);
console.log("Updated Prices:", prices);
//created a new array with the first three services, selected featured services from the array
let featuredServices = services.slice(0, 3);
console.log("This week our Featured Services are:", featuredServices);
//added new services and prices to the stores services and prices
let newServices = ["Haircut", "Massage"];
let newPrices = [30, 50];
services = services.concat(newServices);
prices = prices.concat(newPrices);

console.log("We are excited to announce that we now offer Haircuts and Massages! Here are our updated services", services);
console.log("Updated Prices", prices);

console.log("Thanks for visiting ${storeName}! We hope to see you soon!");
console.log("Our hours are for reference:", storeHours);
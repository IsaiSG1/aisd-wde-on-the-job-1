// Store Name: Pure Elegance
const storeName = "Pure Elegance";

// Store Type
const storeType = "Beauty Salon";

// Services Offered and Prices
const services = ["Facial", "Full Body Waxing", "Lash Extensions", "Tooth Gem", "Microblading", "Body Contouring"];
const prices = [50, 70, 100, 25, 150, 200];

// Store Hours
const storeHours = "Monday/Wednesday/Thursday/Friday (10am - 7pm), Tuesday (Closed), Saturday (10am - 4pm), Sunday (Closed)";

// Reusable logging function
const logMessage = (message) => {
  console.log(message);
};

// Function to display store info
const displayStoreInfo = (storeName, storeType) => {
  logMessage(`Welcome to ${storeName}! We are the best ${storeType} in town.`);
};

// Function to display services and prices
const displayInventory = (services, prices) => {
  logMessage("Here are the services we currently offer:");
  services.forEach((service, index) => {
    logMessage(`${service}: $${prices[index]}`);
  });
};

// Function to add a service
const addService = (services, prices, newService, newPrice) => {
  services.push(newService);
  prices.push(newPrice);
  logMessage(`We've added a new service: ${newService} for $${newPrice}`);
  displayInventory(services, prices);
};

// Function to remove the last service
const removeLastService = (services, prices) => {
  const removedService = services.pop();
  const removedPrice = prices.pop();
  logMessage(`Unfortunately, ${removedService} is no longer offered.`);
  displayInventory(services, prices);
};

// Function to display featured services (sorted alphabetically)
const displayFeaturedServices = (services, numberOfFeatured) => {
  const sortedServices = [...services].sort(); // Sort alphabetically
  const featuredServices = sortedServices.slice(0, numberOfFeatured);
  logMessage("This week, our featured services are:");
  featuredServices.forEach((service) => logMessage(service));
};

// Function to sort services by price (low to high)
const sortInventoryByPrice = (services, prices) => {
  const sortedPairs = prices
    .map((price, i) => [i, price]) // Create pairs of [index, price]
    .sort((a, b) => a[1] - b[1]); // Sort pairs by price

  logMessage("Services sorted by price (low to high):");
  sortedPairs.forEach(([i]) => {
    logMessage(`${services[i]}: $${prices[i]}`);
  });
};

// Test the functions
displayStoreInfo(storeName, storeType);
displayInventory(services, prices);
addService(services, prices, "Hair Styling", 80);
removeLastService(services, prices);
displayFeaturedServices(services, 3);
sortInventoryByPrice(services, prices);

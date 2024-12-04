// Store Name: Pure Elegance
const storeName = "Pure Elegance";

// Store Type
const storeType = "Beauty Salon";

// Services Offered
const services = [
  { name: "Facial", price: 50, description: "Rejuvenating facial treatment for glowing skin." },
  { name: "Full Body Waxing", price: 70, description: "Smooth and hair-free skin from head to toe." },
  { name: "Lash Extensions", price: 100, description: "Enhance your eyes with natural-looking lashes." },
  { name: "Tooth Gem", price: 25, description: "Add a sparkle to your smile with a tooth gem." },
  { name: "Microblading", price: 150, description: "Achieve perfect brows with semi-permanent microblading." },
  { name: "Body Contouring", price: 200, description: "Non-invasive treatment to shape and tone your body." },
];

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

// Function to display services
const displayInventory = (services) => {
  logMessage("Here are the services we currently offer:");
  services.forEach(({ name, price, description }) => {
    logMessage(`${name}: $${price} - ${description}`);
  });
};

// Function to add a service
const addService = (services, name, price, description) => {
  services.push({ name, price, description });
  logMessage(`We've added a new service: ${name} for $${price}`);
  displayInventory(services);
};

// Function to remove the last service
const removeLastService = (services) => {
  const removedService = services.pop();
  logMessage(`Unfortunately, ${removedService.name} is no longer offered.`);
  displayInventory(services);
};

// Function to display featured services (sorted alphabetically by name)
const displayFeaturedServices = (services, numberOfFeatured) => {
  const sortedServices = [...services].sort((a, b) => a.name.localeCompare(b.name));
  const featuredServices = sortedServices.slice(0, numberOfFeatured);

  logMessage("This week, our featured services are:");
  featuredServices.forEach(({ name }) => logMessage(name));
};

// Function to sort services by price (low to high)
const sortInventoryByPrice = (services) => {
  const sortedServices = [...services].sort((a, b) => a.price - b.price);

  logMessage("Services sorted by price (low to high):");
  sortedServices.forEach(({ name, price }) => {
    logMessage(`${name}: $${price}`);
  });
};

// Test the functions
displayStoreInfo(storeName, storeType);
displayInventory(services);
addService(services, "Hair Styling", 80, "Expert styling for any occasion.");
removeLastService(services);
displayFeaturedServices(services, 3);
sortInventoryByPrice(services);

logMessage(`Thanks for visiting ${storeName}!`);
logMessage(`Our store hours are: ${storeHours}`);
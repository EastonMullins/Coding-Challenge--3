let prices = [10, 20, 30, 40, 50];
console.log("Prices: ", prices);

prices.push (60); //Added 60 as price
console.log("Added Price: ", prices)

prices.shift (); //Removes first value from array
console.log("Removed First Price: ", prices)
//Task 1 - Product Price Management


let orders = [14, 22, 30, 41, 53];
console.log("Orders: ", orders);

orders[2] += 5; //Adds 5 to 30 = 35
console.log("Orders Adjusted: ", orders);

let totalOrders = orders.reduce((sum, total)=> sum + total, 0);
console.log("Total Orders: ", totalOrders);
//Task 2 - Modifying Customer Orders


let employee = {
    name: "Alice Clark",
    role: "Cat Sitter",
    performanceScore: 87,
    isActive: true
}; //Employee Properties

employee.performanceScore = 98; // Updated Performace Score to 98

employee.promotionEligible = true; // Added Promotion Eligibility

let employeeUpdated = employee;
console.log("Updated Employee Information: ", employee);
//Task 3 - Employee Performace Tracking


let feedback = [
    {customerName: "Megumi Fushiguro", feedbackText: "Great service and loved the product", rating: 10},
    {customerName: "Calcifer Clark", feedbackText: "Very hotheaded", rating: 3},
    {customerName: "Chihiro Ogino", feedbackText: "Trouble with website, but product was good", rating: 6}
]; //Array of customer feedback
console.log(feedback);

feedback.push({customerName: "Saturo Gojo", feedbackText: "Goes great with my shades", rating: 9}); //Added new feedback to array
console.log("Customer Feedback: ", feedback);
//Task 4 - Customer Feedback Records
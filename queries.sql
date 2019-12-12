-- Multi-Table Query Practice

-- Display the ProductName and CategoryName for all products in the database. Shows 77 records.

SELECT ProductName, CategoryName FROM Product
LEFT JOIN Category
ON Product.CategoryId = Category.Id;

-- Display the order Id and shipper CompanyName for all orders placed before August 9 2012. Shows 429 records.

SELECT o.Id, o.ShipName
FROM [Order] as o
where o.OrderDate < "2012-08-09"

-- Display the name and quantity of the products ordered in order with Id 10251. Sort by ProductName. Shows 3 records.

SELECT Product.ProductName, Product.QuantityPerUnit 
FROM OrderDetail
JOIN Product
ON OrderDetail.ProductId = Product.Id
WHERE OrderDetail.OrderId = 10251
ORDER BY ProductName;

-- select productName & QPU from Product Table
-- saying from OrderDetail and JOINING Product (because that is where ProductName and QPU is) and then saying ON - because that's where the tables interact with eachother
-- Specifying WHERE the OrderId is 10251
-- then add sorting constraint


-- Display the OrderID, Customer's Company Name and the employee's LastName for every order. All columns should be labeled clearly. Displays 16,789 records.

SELECT [Order].Id, Customer.CompanyName, Employee.LastName
FROM [Order]
JOIN Customer
ON [Order].CustomerId = Customer.Id
JOIN Employee
ON [Order].EmployeeId = Employee.Id;

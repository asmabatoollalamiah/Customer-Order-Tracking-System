# Customer-Order-Tracking-System

Customer Order tracking system is an application through which User can perform the below tasks.


1)Customer Order tracking will display all the customers on the UI

Backend API called to display all the customer details:http://localhost:8080/customers/


2)Using this application User can view the particular Customer full details.

Backend API called to display the customer full details:http://localhost:8080/customers/{customerId}

example: http://localhost:8080/customers/101

3)Using this application User can view all the orders related to that particular customer.


Backend API called to display all the orders of the particular customer full details:
http://localhost:8080/customers/{customerId}/orders

example: http://localhost:8080/customers/101/orders


4)Using this application User can view the particular order full details along with the items that he/she has ordered by that particular customer.

Backend API called to display the the particular order full details along with the items that he/she has ordered by that particular customer:

http://localhost:8080/customers/{customer Id}/orders/{order Id}


example: http://localhost:8080/customers/101/orders/1

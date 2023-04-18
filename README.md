# E-Commerce-Website

This is an E-Commerce website built using Node.js for the server-side scripting. The website provides a platform for customers to purchase products online and for admin to sell their products to a wider audience.

<h2>Features</h2>
The website has the following features:

<ul>
  <li>User authentication system for secure logins</li>
  <li>Product browsing and searching functionality</li>
  <li>Product details for each item</li>
  <li>Shopping cart to add and remove items before checkout</li>
  <li>Admin dashboard for managing products, orders etc</li>
  <li>Seller dashboard for managing their products and orders</li>
</ul>

<h2>Installation</h2>
To run this e-commerce website locally, follow these steps:

<ul>
  <li>Clone the repository to your local machine</li>
  <li>Install <b>Node.js</b> on your machine if not already installed</li>
  <li>Open a terminal or command prompt in the project directory</li>
  <li>Run <b>npm install</b> to install all the required dependencies</li>
  <li>Run <b>npm start</b> to start the server</li>
  <li>The website should now be accessible at <b>http://localhost:3000</b>.</li>
 </ul>

<h2>Dependencies</h2>
The website uses the following Node.js packages:
<ul>
  <li>Express.js</li>
  <li>Bcryptjs</li>
  <li>http-status-codes</li>
  <li>jsonwebtoken</li>
  <li>mysql2</li>
  <li>sequelize</li>
 </ul>

<h2>Database</h2>
The website uses mysql as the database. The database connection details are stored in a .env file which should be created in the root directory of the project. The file should contain the following:

  <li>DATABASE_NAME = 'databasename'</li>
  <li>USER_NAME = 'username'</li>
  <li>PASSWORD = ''</li>
  <li>HOST = 'localhost'</li>
  <li>DIALECT = 'mysql'</li>

<h2>Credits</h2>
This website was built by <b>Moghees Ahmad</b> and <b>Saad Malik</b> as a project for Web Programming Course. It uses various open-source technologies and packages, without which the website would not have been possible.

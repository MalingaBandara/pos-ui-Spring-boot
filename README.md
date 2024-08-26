
# POS-UI Spring Boot

## Project Overview

This repository contains the front-end of a Point-of-Sale (POS) system built using HTML, CSS, and JavaScript. The UI is designed to work with a Spring Boot backend. The project showcases my understanding of front-end development, with a focus on creating a responsive and intuitive interface for managing a retail POS system.

## Key Features

- User-friendly interface for managing customers and orders.
- Integration-ready with a Spring Boot backend.
- Clean and maintainable code structure with modular JavaScript for various functionalities.

## Technologies Used

- **HTML**: Structure of the UI.
- **CSS**: Styling and layout.
- **JavaScript**: Dynamic interactions and logic.

## Project Structure and Code Explanation

1. **HTML Pages**:
   - The project consists of key pages like `index.html` and `customer.html`, which form the core of the POS interface.
   
   ```html
   <button id="btnAddCustomer">Add Customer</button>
   ```

   The HTML files are well-structured to accommodate both static content and dynamically generated elements.

2. **JavaScript Files**:
   - JavaScript code is modularized to handle different parts of the application, such as adding customers or processing orders.

   ```javascript
   document.getElementById("btnAddCustomer").addEventListener("click", function() {
       // Logic to add a customer
   });
   ```

   The script files handle form submissions, validations, and data manipulation seamlessly.

3. **CSS Styling**:
   - The `css` folder contains stylesheets that give the application a clean and modern look while ensuring responsiveness.

   ```css
   .customer-form {
       margin: 20px;
       padding: 10px;
   }
   ```

   The styling is designed to provide a consistent user experience across devices.

## Commits and Project Evolution

1. **Initial Setup**: Created the basic HTML structure and linked initial JavaScript and CSS files.
2. **Customer Management UI**: Implemented customer form with validation and dynamic table rendering.
3. **Styling and Optimization**: Improved CSS for a more polished user experience and refactored JavaScript for better maintainability.

## How to Run the Project

1. Clone the repository:
   ```bash
   git clone https://github.com/MalingaBandara/pos-ui-Spring-boot.git
   ```
2. Open the `index.html` file in your preferred browser to view the front-end interface.

## Purpose and Future Enhancements

This project serves as a demonstration of front-end skills in building a POS system UI. Future enhancements could include integrating it with a Spring Boot backend, adding more advanced features like inventory management, and implementing role-based access control.

## License

This project is licensed under the MIT License.

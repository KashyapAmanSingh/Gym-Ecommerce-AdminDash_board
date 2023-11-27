# Gym E-Commerce Shopping - Admin Dashboard


## Overview
My Shopping App Admin Dashboard provides a comprehensive view of customer orders. It includes an organized list of ordered items, featuring tables with product details, prices, titles, customer information, and addresses. Recharts are utilized to display profit and loss insights for enhanced analysis.

# Technologies Used
## Frontend:

React 18.2.0
Next.js 13.4.19
Bootstrap 5.3.1
React Icons 4.11.0
React Loader Spinner 5.4.5
Recharts 2.9.0

## Backend:
Node.js with Express 4.18.2
MongoDB with Mongoose 7.5.0
Kinder Auth for Next.js 1.8.23
Axios 1.5.1 for making HTTP requests
Cloudinary for image management

## Others:
EmailJS Browser 3.11.0 for email functionality
Dotenv 16.3.1 for environment variables

## Live Deployment Link click to view live
   https://nextjsrgsform-7e5o.vercel.app/


Getting Started
Install Dependencies:
```bash
npm install
```


Run Development Server:
```bash
npm run dev
```


# Features
## Order Details:

View organized lists of ordered items.
Tables display product details, prices, titles, and customer information.
Analytics:

Utilize Recharts to visualize profit and loss insights for better analysis.
Authentication:

Implement secure user authentication with Kinder Auth for Next.js.
How to Use
Run the Development Server:
npm run dev

Note- Use Your Own Envs for the Kinde Authentications etc...


## Access the Dashboard:
Navigate to the dashboard by opening your web browser and visiting http://localhost:3000, for local machine

Explore Orders:
Browse through the organized lists of ordered items and analyze profit and loss insights.

Authentication:
Securely access the dashboard with user authentication through Kinder Auth.

 ## The Ui Section Of the DashBoard:





![Screenshot 2023-11-15 172852](https://github.com/KashyapAmanSingh/Nextjsrgsform/assets/119684617/4eb01086-582d-4434-a748-7c2c7b0a9280)






## Sale Performance
![Sale_Performance](https://github.com/KashyapAmanSingh/Nextjsrgsform/assets/119684617/36533787-10d1-4729-8ba8-436b2b134d2e)



## Monthly sales Analysis
![Screenshot 2023-11-15 172932](https://github.com/KashyapAmanSingh/Nextjsrgsform/assets/119684617/b329f2e1-6430-44fa-832d-fd7865de73dd)

## Category Wise Sales
![Screenshot 2023-11-15 172953](https://github.com/KashyapAmanSingh/Nextjsrgsform/assets/119684617/5e77df50-885c-4929-b502-4686ff529fa7)

## Product Inventory
 ![Product_Inventory](https://github.com/KashyapAmanSingh/Nextjsrgsform/assets/119684617/acb13c6b-947c-409a-8931-d14a1eb2b210)


## Revenue Section
![Revenue_Section](https://github.com/KashyapAmanSingh/Nextjsrgsform/assets/119684617/08d30682-d436-4c87-ac67-6fa03dca30d0)







# Application Code Structure
```
├───public
└───src
    ├───app
    │   ├───addProducts
    │   ├───api
    │   │   ├───adminOrder
    │   │   ├───auth
    │   │   │   └───[kindeAuth]
    │   │   ├───changing
    │   │   ├───kindeSession
    │   │   └───products
    │   │       └───[id]
    │   ├───dashboard
    │   ├───editProduct
    │   │   └───[id]
    │   ├───Inventory
    │   ├───login
    │   ├───mainChart
    │   ├───NvBr
    │   ├───PresentProducts
    │   ├───Profile
    │   └───revenue
    └───utlility
```








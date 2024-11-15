
# Printability:

**Printability** is a comprehensive, real-time print management system that simplifies the printing process, tracks printer activity, and delivers a seamless user experience. Developed using a **Node.js** backend and a **React.js** frontend, it integrates real-time communication with WebSockets and uses MongoDB for flexible data storage.

---

## 🌟 Key Features

- ⚙️ **Real-Time Print Job Processing**: Efficiently manage print jobs with asynchronous operations and streams.
- 🏢 **Company-Based Printer Management**: Track each company's total printers, print jobs, and income.
- 💸 **Dynamic Pricing**: Users can adjusts the pricing for color and black-and-white prints.
- 🔐 **Role-Based Access Control (RBAC)**: Secure your data with robust access policies.
- 📱 **Responsive Design**: Optimized for mobile and desktop experiences.
- 💳 **Stripe Integration**: Easy payment processing for print jobs.
- 🔄 **CI/CD Integration**: Continuous deployment ensures smooth, automated releases.

---

## 🛠️ Tech Stack & Tools

| Backend       | Frontend       | Tools/Integrations | Agent               |
| ------------- | -------------- | ------------------ | ------------------- |
| Node.js       | React.js       | Stripe API         | Python (Printing Agent) |
| Express.js    | Bootstrap      | WebSockets         | WebSocket connection for real-time job handling |
| MongoDB       | Material UI    | CI/CD Pipelines    | Async job processing for print jobs |



## 🔧 How to Use

### For Admins:
- 🖥 **Dashboard**: Manage printers, track jobs, and view income.

### For Users:
- 🖨 **Submit Print Jobs**: Easily send print jobs and track them.
- 💸 **Payments**: Securely handle payments using **Stripe**.

---

## 📊 Analytics & Metrics

The admin dashboard displays key metrics:
- **Total Printers**: Get a list of all assigned printers.
- **Print Jobs Over Time**: Track print trends and activities.
- **Income**: View total revenue from completed jobs.

---

## 🏗️ Architecture Overview

- **microservice-inspired architecture** separates functionality between:
- **Frontend (React.js)**: Handles user interaction and UI.
- **Backend (Node.js/Express)**: Manages API requests and WebSocket connections.
- **Database (MongoDB)**: Stores printer, company, and job data.
- **Print Agent(python)**: Retrieves job details via WebSocket from the server and sends them directly to the printer.
---

## 🏆 Achievements

Received a Certificate of Excellence from The Academic College of Tel Aviv-Yafo for outstanding work on the Printability project.

![Certificate](https://printabillty-file-uploads.s3.eu-north-1.amazonaws.com/assets/certificate.png)



## 🙌 Acknowledgments

Special recognition to my project collaborators and mentors!

## 🖼️ Screenshots

![Sign up](https://printabillty-file-uploads.s3.eu-north-1.amazonaws.com/assets/sign+up+page.png)
*Sign up page.*


![Admin Dashboard](https://printabillty-file-uploads.s3.eu-north-1.amazonaws.com/assets/dashboard.png)
*Admin dashboard showing printer and print job analytics.*


![Upload file](https://printabillty-file-uploads.s3.eu-north-1.amazonaws.com/assets/print.png)
*End user uploads file page.*

---




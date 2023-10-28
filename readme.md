# Lifeline: Your Blood Bank Locator in Maharashtra

Lifeline is a comprehensive web application designed to assist users in locating blood banks across Maharashtra, India. Built with a user-friendly interface, the application integrates with Google Maps for interactive navigation and offers detailed information about each blood bank.

## Key Features

- **Interactive Map Visualization**: Utilizes Google Maps API for an engaging and interactive display of blood bank locations across Maharashtra.
- **Advanced Search and Filter**: Allows users to refine their search results and find the most relevant blood banks.
- **Detailed Information**: Provides comprehensive details about each blood bank, including contact information.
- **Ease of Navigation**: Designed with a user-friendly interface for seamless navigation.

## Technology Stack

- **React**: A JavaScript library utilized for crafting an intuitive user interface.
- **Node.js**: A JavaScript runtime environment employed for constructing the server-side application.
- **Express**: A robust web application framework used in conjunction with Node.js.
- **Google Maps JavaScript API**: Facilitates map visualization and user interaction.
- **MongoDB**: A flexible NoSQL database used for storing information related to blood banks.

## Installation Guide

To set up the Lifeline project on your local machine, follow the steps below:

### Prerequisites

Ensure that you have Node.js and npm installed on your machine, and MongoDB is set up and running.

### Steps

1. Clone the repository:

```bash
git clone https://github.com/yourusername/lifeline.git
cd lifeline
```

2. Install dependencies for both the client and server:

```bash
cd client
npm install
cd ../server
npm install
```

3. Configure Environment Variables:

   - Client: In the client directory, create a .env file (if it doesn't exist) and add the following line, replacing YOUR_API_KEY with your Google Maps API key:
   
```bash
REACT_APP_GOOGLE_MAPS_API_KEY=YOUR_API_KEY
```

   - Server: In the server directory, create a .env file (if it doesn't exist) and configure your database connection along with other necessary variables.

4. Start the server and client:

```bash
# Start the server
cd ../server
npm start

# Start the client
cd ../client
npm start
```

5. Access Lifeline: Open your web browser and visit http://localhost:3000 to access the Lifeline application. Enjoy exploring!

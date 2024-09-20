# Zone Manager Client
This is the client-side application for managing zones through an easy-to-use visualization window, including creating, deleting and fetching zones. The client communicates with the Django-based server API.

## Table of Contents
- Installation
- Usage
- API Endpoints

## Installation
1. **Clone the repository**:
`git clone https://github.com/eyalh15/zones-client.git`

2. **Change directory**:
`cd zones-client`

3. **Install dependencies**:
Make sure you have Node.js and npm installed. Then run:
`npm install`

4. **Start the development server**:
`npm start`

This will start the client application and serve it on `http://localhost:4200/`.

## Usage
- **Creating a Zone**: In the window interface, draw a polygon by connecting points. When you have created polygon with 4 points then it will be added to the zones list.
- **Fetching Zones**: The zones will automatically be fetched and displayed when the page loads.
- **Deleting Zones**: Right Click on a zone area and select "Delete" to remove it.


## API Endpoints
The client communicates with the following server API endpoints:

1. **Fetch Zones** (GET):
`/api/zones/`
Retrieves a list of zones.

2. **Create Zone** (POST):
`/api/zones/`
Sends a new zone to the server.

3. **Delete Zone** (DELETE):
`/api/zones/<zone_id>/`
Deletes the specified zone by its ID.
# Blood Donation Donor Registration API

Simple Donor Registration API for a Blood Donation Platform

Overview
--------

This is a simple backend service that implements a Donor Registration API for a blood donation platform. It provides endpoints to register donors and fetch the list of registered donors. The app uses Node.js, Express, and MongoDB (via Mongoose).


Quick Start
-----------

1. Install dependencies

```powershell
npm install
```

2. Create `.env` at project root with:

```
MONGODB_URI=<your-mongodb-connection-string>
PORT=3000
NODE_ENV=development
```

3. Run in development

```powershell
npm run dev
```

API Endpoints
-------------

- POST /api/donors
	- Request JSON body (example):

		```json
		{
			"fullName": "Jane Doe",
			"bloodGroup": "A+",
			"age": 28,
			"city": "CityName",
			"contactNumber": "+911234567890",
			"lastDonationDate": "2025-12-01"
		}
		```

	- Responses:
		- 201 Created: donor saved
		- 400 Bad Request: validation errors
		- 409 Conflict: contact number already exists

- GET /api/donors
	- Query params supported: `bloodGroup`, `city`, `page`, `limit`
	- 200 OK: returns list of donors

Project Structure
-----------------

- package.json
- README.md
- src/
	- server.js
	- config/database.js
	- controllers/donorController.js
	- models/Donor.js
	- routes/donorRoutes.js
	- utils/validators.js


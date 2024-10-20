# Robin-Song-UC4

This project is a bird identification and information web application. It consists of two parts:
- **Frontend**: Built using React, allows users to input bird-related questions and receive responses.
- **Backend**: Built using Express.js, integrates with OpenAI to provide responses to bird-related queries.

## Prerequisites

Ensure that the following are installed on your system:

- [Node.js](https://nodejs.org/) (v16+)
- [npm](https://www.npmjs.com/)
- [SQLite3](https://sqlite.org/) (since you are using SQLite for storage)

You can verify if you have these installed by running:

```bash
node -v
npm -v
```

If either is missing, install them from their official websites.

## Setting Up the Project

### 1. Clone the Repository

First, clone the repository to your local machine:

```bash
git clone https://github.com/your-username/Robin-Song-UC4.git
cd Robin-Song-UC4
```

### 2. Install Dependencies

Since no `node_modules` are installed initially, you will need to install dependencies for both the frontend and backend.

#### Backend Setup

1. Navigate to the `backend` folder:

    ```bash
    cd backend
    ```

2. Install the required Node.js modules:

    ```bash
    npm install
    ```

3. Create a `.env` file in the `backend` folder and add your OpenAI API key:

    ```bash
    touch .env
    ```

    Add the following content to `.env`:

    ```env
    OPENAI_API_KEY=your_openai_api_key_here
    ```

4. Start the backend server:

    ```bash
    npm start
    ```

    The backend server will run at `http://localhost:5000`.

#### Frontend Setup

1. Open a new terminal window and navigate to the `frontend` folder:

    ```bash
    cd ../frontend
    ```

2. Install the required Node.js modules:

    ```bash
    npm install
    ```

3. Start the frontend React application:

    ```bash
    npm start
    ```

    The frontend will run at `http://localhost:3000`.

### 3. Running the Application

Now that both the frontend and backend are running, you can open your browser and visit:

- **Frontend**: `http://localhost:3000` — Interact with the web app here.
- **Backend**: `http://localhost:5000` — The backend handles API requests and OpenAI interactions.

### 4. Interaction Flow

- Ask questions about birds in the frontend interface, which will send requests to the backend server.
- The backend will process the questions and forward them to OpenAI for responses.
- The frontend will display the bird-specific answers.

### Troubleshooting

- If the frontend or backend does not start, ensure Node.js and npm are installed correctly, and all dependencies have been installed using `npm install`.
- If you encounter OpenAI API issues, ensure your API key is valid and you have not exceeded your quota.

## Notes

- The frontend interacts with the backend via API calls to `http://localhost:5000/api/birds/identify`.
- Make sure the backend server is running while using the frontend to avoid API connection issues.
- The backend uses the OpenAI API to process bird-related queries, so ensure your OpenAI API key is correctly set in the `.env` file in the backend folder.
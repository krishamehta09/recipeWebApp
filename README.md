# Food Recipe Web App

This project is built using React for the frontend and Django for the backend. It allows users to search for recipes via the Edamam Recipe API and manage custom recipes with the ability to add and delete them.

## Features

- **Recipe Search**: Utilize the Edamam Recipe API to find various recipes.
- **Custom Recipes**: Add your own recipes with images and manage them.

## Getting Started

These instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

- npm
- Python
- Django

### Installing

#### Frontend

1. Navigate to the `src` folder:
    ```bash
    cd src
    ```
2. Install all the necessary packages:
    ```bash
    npm install
    ```
3. Start the frontend server:
    ```bash
    npm start
    ```

#### Backend

1. Open a new terminal and navigate to the `myproject` folder:
    ```bash
    cd myproject
    ```
2. Apply migrations to your database:
    ```bash
    python manage.py migrate
    ```
3. Start the backend server:
    ```bash
    python manage.py runserver
    ```

## Usage

After starting both the frontend and backend, visit `http://localhost:3000` in your browser to start using the application.
To view and enter the recipe details from the backend, you can visit 'http://127.0.0.1:8000/api/recipes'.

## Contributing

Feel free to fork this repository and submit pull requests to contribute to this project.

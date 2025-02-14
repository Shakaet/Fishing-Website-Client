# Fishing Project Management

## Project Description
Fishing Project Management is a web application that allows users to add, manage, and track fish farming projects. Users can input data such as project number, pH3, NH3, morning and evening feed up/down (kg), date, and month. The application provides features to filter projects by project number, view detailed records for each month, edit or delete records, and calculate the total feed up/down.

## Live Link
[Live Demo](https://verdant-profiterole-16ef11.netlify.app/) 

## Features

- Add new fishing projects with details.
- View, edit, and delete project records.
- Filter projects by project number.
- Calculate total feed up and down.
- Display project details categorized by month.
- Responsive UI with intuitive navigation.



1. Clone the repository:
   ```sh
   git clone https://github.com/yourusername/fishing-project-management.git
   ```
2. Navigate to the project directory:
   ```sh
   cd fishing-project-management
   ```
3. Install dependencies:
   ```sh
   npm install
   ```
4. Start the development server:
   ```sh
   npm run dev
   ```

## Tech Stack
- **Frontend:** React.js, Tailwind CSS
- **Backend:** Express.js, MongoDB
- **Authentication:** Firebase (if applicable)
- **State Management:** React Query (@tanstack/react-query)
- **Notifications:** SweetAlert2
- **Routing:** React Router
- **HTTP Requests:** Axios

## API Endpoints
| Method | Endpoint                     | Description                  |
|--------|------------------------------|------------------------------|
| GET    | `/januaryProject`            | Fetch all projects          |
| POST   | `/januaryProject`            | Add a new project           |
| PUT    | `/januaryProject/:id`        | Update project details      |
| DELETE | `/januaryProject/:id`        | Delete a project            |

## Dependencies
```json
{
  "@tanstack/react-query": "latest",
  "axios": "latest",
  "react": "latest",
  "react-dom": "latest",
  "react-router-dom": "latest",
  "sweetalert2": "latest",
  "tailwindcss": "latest"
}



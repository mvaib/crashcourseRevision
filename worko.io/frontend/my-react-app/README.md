# CRD (Candidate Referral Dashboard)

A modern, full-stack web application for managing candidate referrals. Built with React (Vite), Node.js, Express, and MongoDB.

## Features

- **User Authentication:** Register and login securely (JWT-based).
- **Candidate Management:**
  - Add, view, update, and delete candidates (with resume upload).
  - Each user sees only their own candidates.
- **Dashboard:**
  - Quick stats (total candidates).
  - Search and filter candidates by job title or status.
  - Responsive candidate cards.
- **Modern UI:**
  - Responsive design for desktop, tablet, and mobile.
  - Light/Dark theme toggle.
  - Clean, accessible, and aesthetic interface.

## Tech Stack

- **Frontend:** React (Vite), Context API, Custom CSS (modular, themeable, responsive)
- **Backend:** Node.js, Express, MongoDB, JWT Auth, Multer (for file uploads)

## Getting Started

### Prerequisites
- Node.js (v16+ recommended)
- MongoDB (local or Atlas)

### Backend Setup
1. `cd worko.io/backend`
2. `npm install`
3. Create a `.env` file with:
   ```env
   PORT=8000
   MONGO_URL=your_mongodb_connection_string
   SECRET_KEY=your_jwt_secret
   SALT_ROUNDS=10
   ```
4. `npm start`

### Frontend Setup
1. `cd worko.io/frontend/my-react-app`
2. `npm install`
3. `npm run dev`
4. Open [http://localhost:5173](http://localhost:5173) in your browser

### Usage
- Register a new user or login.
- Add candidates (with PDF resume upload).
- View, search, filter, update status, and delete your candidates.
- Use the theme toggle (top right) to switch between light and dark mode.
- Fully responsive: works great on mobile, tablet, and desktop.

## Customization
- **Theme:** Edit `src/theme.css` to adjust colors, shadows, and breakpoints.
- **UI:** All styles are modular (per component/page) and use CSS variables for easy theming.
- **Backend:** All user data is secure and scoped per user (no global data leaks).

## Folder Structure
```
worko.io/
  backend/         # Express + MongoDB backend
  frontend/
    my-react-app/  # Vite + React frontend
```

## License
MIT

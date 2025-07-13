# Employee Directory App

A modern, responsive React application for managing employee information with a beautiful UI and full CRUD functionality.

## 🚀 Features

### Core Functionality
- **Employee Management**: Add, edit, delete, and view employee records
- **Search & Filter**: Real-time search across employee data with debounced input
- **Sorting**: Sort employees by first name or department
- **Pagination**: Navigate through employee records with customizable page sizes
- **Responsive Design**: Works seamlessly on desktop, tablet, and mobile devices

### User Interface
- **Modern Design**: Clean, professional interface with gradient backgrounds and smooth animations
- **Modal Forms**: Overlay forms for adding and editing employees
- **Card Layout**: Employee information displayed in attractive cards
- **Interactive Elements**: Hover effects, transitions, and visual feedback

### Data Management
- **JSON Server**: RESTful API backend for data persistence
- **Context API**: Global state management using React Context
- **Debounced Search**: Optimized search with 500ms delay to prevent excessive API calls

## 🛠️ Tech Stack

- **Frontend**: React 19.1.0, Vite 7.0.4
- **Styling**: CSS3 with modern features (Grid, Flexbox, Gradients)
- **State Management**: React Context API
- **Backend**: JSON Server (REST API)
- **Development**: ESLint, React Hooks

## 📁 Project Structure

```
src/
├── components/
│   ├── Card/           # Employee card component with edit/delete
│   ├── Footer/         # Application footer
│   ├── Form/           # Add/Edit employee modal form
│   └── Header/         # Search, filter, and navigation
├── context/
│   └── contextApi.jsx  # Global state management
├── hooks/
│   └── debounce/       # Custom debounce hook
├── pages/
│   └── Dashboard/      # Main dashboard with employee grid
└── assets/             # Static assets
```

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd Employee_Directory/my-react-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the JSON Server (Backend)**
   ```bash
   npm run json-server
   ```
   This will start the backend server on `http://localhost:3001`

4. **Start the React Development Server**
   ```bash
   npm run dev
   ```
   This will start the frontend on `http://localhost:5173`

## 📊 Data Structure

Each employee record contains:
```json
{
  "id": "unique-id",
  "firstName": "Employee's first name",
  "lastName": "Employee's last name", 
  "email": "employee@email.com",
  "department": "hr|it|finance",
  "role": "developer|analyst|manager|admin|other"
}
```

## 🎯 Key Features Explained

### Search & Filter
- **Real-time Search**: Search across first name, last name, and email
- **Filter Options**: Filter by first name, department, or role
- **Debounced Input**: 500ms delay to optimize performance

### Employee Management
- **Add Employee**: Modal form with validation
- **Edit Employee**: Inline editing with save/cancel options
- **Delete Employee**: Confirmation-based deletion
- **View Details**: Clean card layout showing all employee information

### Pagination
- **Customizable Page Size**: 5, 10, or 15 items per page
- **Navigation**: Previous/Next buttons with current page indicator
- **Responsive**: Adapts to different screen sizes

## 🎨 UI/UX Features

### Design System
- **Color Palette**: Professional grays and whites with accent colors
- **Typography**: System fonts for optimal readability
- **Spacing**: Consistent padding and margins throughout
- **Shadows**: Subtle shadows for depth and hierarchy

### Animations
- **Smooth Transitions**: All interactive elements have smooth animations
- **Hover Effects**: Visual feedback on buttons and cards
- **Loading States**: Smooth entrance animations for components

### Responsive Design
- **Mobile First**: Optimized for mobile devices
- **Grid Layout**: Responsive grid that adapts to screen size
- **Touch Friendly**: Large touch targets for mobile users

## 🔧 Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint
- `npm run json-server` - Start JSON Server backend

## 🌟 Future Enhancements

- [ ] User authentication and authorization
- [ ] Advanced filtering and sorting options
- [ ] Export functionality (PDF, CSV)
- [ ] Bulk operations (delete multiple, bulk import)
- [ ] Employee photo upload
- [ ] Department and role management
- [ ] Activity logging and audit trail

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request



## 👨‍💻 Author

**Vibhu**
- Built with React and modern web technologies
- Focus on clean code and user experience
- Single developer project showcasing full-stack React skills

---

**Note**: Make sure to start both the JSON Server and React development server for the application to work properly.

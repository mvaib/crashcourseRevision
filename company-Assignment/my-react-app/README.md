# Smart Photo Gallery

A React-based web application that demonstrates the use of multiple browser APIs to create a location-aware photo gallery with real-time network monitoring and lazy loading capabilities.

## 🌟 Features

### Core Functionality
- **Location-Based Image Gallery**: Automatically fetches and displays images relevant to your current location
- **Real-Time Network Monitoring**: Shows your network status and connection type
- **Lazy Loading**: Images load only when they come into view for better performance
- **Client-Side Pagination**: Navigate through images with Next/Previous buttons
- **Responsive Design**: Works seamlessly on desktop and mobile devices

### Browser APIs Used
1. **Geolocation API**: Gets user's current location coordinates
2. **Network Information API**: Monitors network status and connection type
3. **Intersection Observer API**: Implements lazy loading for images
4. **Fetch API**: Handles all external API calls (no Axios dependency)

## 🚀 Technologies Used

- **React 18** - Frontend framework
- **Vite** - Build tool and development server
- **Unsplash API** - Location-based image search
- **OpenStreetMap Nominatim** - Reverse geocoding for location names
- **CSS Grid** - Responsive layout
- **Modern JavaScript (ES6+)** - Async/await, destructuring, etc.

## 📋 Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager
- Unsplash API access key (free tier available)

## 🛠️ Installation & Setup

### 1. Clone or Download the Project
```bash
# If you have the project files, navigate to the project directory
cd my-react-app
```

### 2. Install Dependencies
```bash
npm install
# or
yarn install
```

### 3. Configure API Keys
Update the `src/config.js` file with your Unsplash API credentials:
```javascript
export const UNSPLASH_ACCESS_KEY = 'your_access_key_here';
export const UNSPLASH_SECRET_KEY = 'your_secret_key_here';
```

**To get Unsplash API keys:**
1. Visit [Unsplash Developers](https://unsplash.com/developers)
2. Create a free account
3. Create a new application
4. Copy your Access Key and Secret Key

### 4. Start the Development Server
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:5173`

## 🎯 How It Works

### 1. Location Detection
- Uses the Geolocation API to get user's coordinates
- Converts coordinates to readable location name using OpenStreetMap
- Extracts just the city name for cleaner display

### 2. Network Monitoring
- Continuously monitors network status (online/offline)
- Detects connection type (4G, WiFi, etc.)
- Updates in real-time when network changes

### 3. Image Fetching
- Searches Unsplash for images related to user's location
- Uses the city name as search query
- Handles API rate limits and errors gracefully

### 4. Lazy Loading
- Uses Intersection Observer API to detect when images enter viewport
- Only loads images when they're about to be visible
- Improves performance and reduces bandwidth usage

### 5. Pagination
- Displays 4 images per page
- Client-side pagination (no additional API calls)
- Smooth navigation between pages

## 📱 Browser Compatibility

This application uses modern browser APIs and requires:
- **Geolocation API**: Supported in all modern browsers
- **Network Information API**: Supported in Chrome, Edge, and some mobile browsers
- **Intersection Observer API**: Supported in all modern browsers
- **Fetch API**: Supported in all modern browsers

## 🔧 Project Structure

```
src/
├── App.jsx              # Main application component
├── NetworkStatus.jsx    # Network monitoring component
├── Location.jsx         # Geolocation and reverse geocoding
├── Gallery.jsx          # Image fetching and pagination
├── LazyImage.jsx        # Lazy loading image component
└── config.js           # API configuration
```

## 🎨 Customization

### Changing Images Per Page
Edit the `IMAGES_PER_PAGE` constant in `Gallery.jsx`:
```javascript
const IMAGES_PER_PAGE = 6; 
```

### Modifying Location Display
Update the location extraction logic in `Location.jsx` to show different address components.

### Styling
All styling is done inline for simplicity. You can extract styles to CSS files for better organization.

## 🐛 Troubleshooting

### Location Not Working
- Ensure your browser allows location access
- Check if you're using HTTPS (required for geolocation in some browsers)
- Verify that location services are enabled on your device

### Images Not Loading
- Check your Unsplash API key in `config.js`
- Verify your internet connection
- Check browser console for API error messages

### Network Status Not Showing
- The Network Information API is not supported in all browsers
- The app will gracefully fall back to basic online/offline detection

## 📄 License

This project is for educational purposes. Please respect Unsplash's API terms of service.

## 🤝 Contributing

Feel free to submit issues and enhancement requests!

---

**Note**: This application demonstrates real-world usage of multiple browser APIs in a single React application. It's designed to be educational and showcase modern web development techniques.

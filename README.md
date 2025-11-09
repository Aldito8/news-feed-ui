# News Feed UI

A modern, responsive frontend application for a social media feed platform built with React and TypeScript. This UI provides an intuitive interface for users to view feeds, manage followers, create posts, and authenticate securely.

## Features

- **Authentication**: Secure login and registration system with session management.
- **Feed Management**: Infinite scrolling feed to view posts from followed users.
- **Follow System**: View and manage followers and followees with follow/unfollow functionality.
- **Post Creation**: Create new posts through a modal dialog.
- **Responsive Design**: Optimized for desktop and mobile devices with a collapsible sidebar.

## Tech Stack

- **Frontend Framework**: React with TypeScript
- **Build Tool**: Vite
- **Styling**: Tailwind CSS with custom theme and shadcn/ui components
- **HTTP Client**: Axios with cookie-based authentication
- **Routing**: React Router DOM
- **Date Handling**: date-fns
- **Icons**: Lucide React
- **Infinite Scrolling**: react-infinite-scroll-component
- **Containerization**: Docker

## Installation

### Prerequisites

- Node.js (version 20 or higher)
- npm or yarn
- Docker (optional, for containerized setup)

### Local Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/Aldito8/news-feed-ui.git
   cd ui
   git checkout dev
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory with the following variables:
   ```
   VITE_API_URL= <backendurl>
   ```
   Adjust the API URL to match your backend server.

4. Start the development server:
   ```bash
   npm run dev
   ```
   The app will be available at `http://localhost:5173`.

5. backend repository
   ```bash
   https://github.com/Aldito8/news-feed-api.git
   ```
   
## Usage

1. **Authentication**: Navigate to `/auth` to login or register.
2. **Feed**: View your personalized feed at `/home` with infinite scrolling.
3. **Follow**: Manage your network at `/follow`, switching between followers and followees.
4. **Create Post**: Use the "CreatePost" button in the sidebar to add new content.
5. **Navigation**: Use the collapsible sidebar to navigate between sections.

## API Integration

The application communicates with a backend API for data operations. Key endpoints include:

- `POST /api/login` - User authentication
- `POST /api/register` - User registration
- `GET /api/me` - Fetch current user data
- `GET /api/feed` - Retrieve feed posts (with pagination)
- `POST /api/posts` - Create new posts
- `GET /api/follower` - Get followers
- `GET /api/followee` - Get followees
- `POST /api/follow/{userId}` - Follow a user
- `DELETE /api/follow/{userId}` - Unfollow a user

Ensure the backend server is running and accessible via the `VITE_API_URL` environment variable.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production

# React-Tube
**Live Demo**:  https://reactttube.netlify.app

This is a YouTube clone application built with ReactJS and integrated with RapidAPI to fetch video data. The app mimics core YouTube functionalities, including video search, video listing, and video playback.

## Features

- Search for YouTube videos
- Display video details such as title,views and likes
- Video player for seamless playback
- Responsive design for mobile and desktop

## Tech Stack

- **ReactJS**: Frontend framework for building the UI
- **RapidAPI**: API platform used to fetch YouTube data

## Installation

### Steps

1. Clone the repository:

   ```bash
   git clone https://github.com/Ekansh3503/React-Tube.git
   cd React-Tube
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

   or

   ```bash
   yarn install
   ```

3. Create a `.env` file in the root directory and add your **RapidAPI Key**:

   ```plaintext
   REACT_APP_RAPID_API_KEY=your_rapidapi_key
   ```

4. Start the development server:

   ```bash
   npm start
   ```

   or

   ```bash
   yarn start
   ```

5. Open the app in your browser:

   ```
   http://localhost:3000
   ```

## API Integration

The application fetches video data using the [RapidAPI YouTube API](https://youtube-v31.p.rapidapi.com). Ensure you have a valid RapidAPI key to interact with the API.

## How it Works

- **Search Functionality**: Users can search for videos using the search bar. The query is sent to RapidAPI's YouTube endpoint, and the results are displayed as video cards.
- **Video Playback**: Clicking on a video card takes the user to a detailed page where the video plays along with additional information like description, related videos, etc.

## Screenshots

![Home Page](screenshots/home-page.png)
*Home page of the YouTube clone showing search results*

![Video Page](screenshots/video-page.png)
*Video playback and details view*

## Future Enhancements

- Add comments section
- Like and dislike functionality
- Save videos to a playlist

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.

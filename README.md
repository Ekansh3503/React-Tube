# React-Tube
This is a YouTube clone application built with ReactJS, Material-UI (MUI) 6 and integrated with RapidAPI to fetch video data. The app mimics core YouTube functionalities, including video search, video listing, and video playback.

**Click here to see the live project**: [**Deployed Project Link**](https://reactttube.netlify.app)

## Features

- Search for YouTube videos
- Display video details such as title,views and likes
- Video player for seamless playback
- Responsive design for mobile and desktop
- Styled components using Material-UI 6 for consistent design

## Tech Stack

- **ReactJS**: Frontend framework for building the UI
- **Material-UI (MUI)**: UI component library for design and layout
- **RapidAPI**: API platform used to fetch YouTube data, api used is Youtube v3

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

## UI Screenshots
![hommescreen](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20002445.png?raw=true)
![hommescreen](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20002651.png?raw=true)
![hommescreen](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20002821.png?raw=true)
![productpage](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20002956.png?raw=true)
![cartview](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20003147.png?raw=true)
![aboutus](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20003239.png?raw=true)
![contactus](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20003333.png?raw=true)
![paymentpage](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20003429.png?raw=true)
![successfullyordered](https://github.com/Ekansh3503/ecommerce_sanity/blob/main/UI%20ss/Screenshot%202024-10-19%20003620.png?raw=true)

## Future Enhancements

- Add comments section
- Like and dislike functionality
- Save videos to a playlist

## Contributing

Feel free to fork the repository and submit pull requests. For major changes, please open an issue first to discuss what you would like to change.

## License

This project is licensed under the MIT License.


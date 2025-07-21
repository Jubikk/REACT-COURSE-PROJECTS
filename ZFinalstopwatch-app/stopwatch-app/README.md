# Stopwatch App (Final Project)

This is the final project for the React course: a fully functional Stopwatch app built with React hooks.

## Features

- Start, stop, and reset the stopwatch
- Accurate time tracking using `useRef` and `useEffect`
- Millisecond precision
- Clean and modern UI

## How It Works

- Uses `useState` to manage running state and elapsed time
- Uses `useRef` to store interval and start time references
- `useEffect` handles the timer interval and cleanup
- Time is formatted for easy reading (HH:MM:SS:MS)

## Usage

1. Install dependencies:
   ```sh
   npm install
   ```
2. Start the app:
   ```sh
   npm run dev
   ```
3. Use the Start, Stop, and Reset buttons to control the stopwatch.

## File Structure

- `src/StopWatch.jsx` — Main stopwatch component
- `src/App.jsx` — App entry point
- `src/index.css` — Styles

## Learning Highlights

- Advanced use of React hooks (`useRef`, `useEffect`, `useState`)
- Managing intervals and side effects
- Building a real-world interactive app

---

Feel free to customize and enhance the app further!

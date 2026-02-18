## Time Tracking Dashboard
A fully responsive, type-safe dashboard built with **React**, **TypeScript**, and **Tailwind CSS**.

This project goes beyond a simple UI implementation by simulating real-world application constraints, including asynchronous data fetching, loading states, and scalable component architecture.

# Key Features
- **Responsive Layout:** Mobile-first design using CSS Grid that    seamlessly adapts to a "Bento Grid" style on desktop.

- **Smooth Animations:** Powered by Framer Motion, numbers slide and fade gracefully when switching timeframes.

- **Real-World Data Simulation:** A custom hook (useDashboardData) mimics API latency.

- **Skeleton Loading State:** Prevents layout shifts (CLS) by showing a shimmering skeleton UI while data loads.

- **Scalable Architecture:** Strict separation of "Smart" Containers (Logic) and "Dumb" UI components (Presentation).

## Tech Stack
- **Framework:** React 18 (Vite)

- **Language:** TypeScript 

- **Styling:** Tailwind CSS

- **Animation:** Framer Motion

## Architecture & Design Patterns
I deliberately avoided "magic strings" and messy if/else chains by implementing robust patterns:

1. **The Configuration Map Pattern**
Instead of hardcoding colors and icons inside components, I used a centralized config object. This makes adding new categories (like "Gaming" or "Coding") as simple as adding one line to a file.

2. **Custom Hooks & Skeleton UI**
I abstracted the data fetching logic into useDashboardData. This hook manages the loading, error, and data states. While loading, the UI renders **Skeleton Cards** that match the exact dimensions of the real content, ensuring a smooth user experience.

3. **Component Composition**
- **DashboardLayout.tsx (Smart):** Handles state (daily/weekly/monthly), data fetching, and grid logic.

- **TrackingCard.tsx (Dumb):** Purely presentational. It receives data via props and uses framer-motion to handle the enter/exit animations.

**Author:** Zikmang
**Challenge by:** Frontend Mentor
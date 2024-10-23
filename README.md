# Benjamin Rice- React Developer Portfolio

Welcome to my developer portfolio! This single page application was built with **React** to showcase my skills, experience and recent projects. It's designed to provide visitors with a user-friendly interface to learn more about, my proficiencies, and the projects I've worked on.

## Table of Contents

-   [Live Demo](#live-demo)
-   [Features](#features)
-   [Technologies](#technologies)
-   [Installation](#installation)
-   [Usage](#usage)
-   [License](#license)
-   [Contact](#contact)

## Live Demo

You can view the live demo of the portfolio [here](https://challenge20-reactportfolio.onrender.com)

## Features

-   **About Me Section**: A short bio about my journey as a full-stack developer, the technologies I've mastered, and what inspires me.
-   **Portfolio Section**: A collection of my top 6 projects with live app links, GitHub repositories, project descriptions, and screenshots.
-   **Contact Me Section**: A simple contact form to send messages directly to my inbox, connected via Google Forms.
-   **Resume Section**: A downloadable resume, along with a detailed list of my proficiencies presented in an engaging format.
-   **Responsive Design**: The portfolio is optimized for desktop and mobile devices, ensuring a seamless user experience across all screen sizes.

## Technologies

-   **React**: Frontend JavaScript library used to build the user interface.
-   **Tailwind CSS**: Utility-first CSS framework for fast, responsive styling.
-   **React Router**: For single-page navigation without page reloads.
-   **Google Forms**: Integrated for collecting form submissions.
-   **Node.js & Express**: Used for backend development in some of my projects.

## Installation

1. Clone and navigate to the repository:

```bash
git clone https://github.com/BenJR546/challenge20-reactPortfolio
cd challenge20-reactPortfolio/my-portfolio
```

2. Install the required dependencies:

```bash
npm install
```

3. Start the development server:

```bash
npm start
```

4. Open your browser and navigate to `http://localhost:3000` to view the portfolio.

## Usage

### Project Structure

The app follows a simple, component-based structure:

-   `src/components`: Contains all reusable components like `AboutMe`, `Portfolio`, `Contact`, and `Resume`.
-   `public/`: Contains static assets like my Resume PDF and project images.
-   `src/App.js`: Main file that renders and routes the different sections of the app.

## Customization

Feel free to adjust the contents of the `AboutMe`, `Portfolio`, `Contact`, and `Resume` components to suit your needs. You can also modify the styling in `src/index.css` to match your preferences.

## Contact Form Integration

The contact form is integrated with **Google Forms**. To modify it:

-   Change the **Google Form URL** found in `src/components/Contact.js` to match your own form link.
-   Ensure that the correct Google Form field IDs are mapped in the `handleSubmit` function.

## License

This project is not intended for commercial use. It is unlicensed.

## Contact

If you'd like to connect or discuss potential opportunities, feel free to reach out to me:

-   By [email](mailto:benjrice546@gmail.com)
-   On [LinkedIn](https://www.linkedin.com/in/benjrice546/)
-   On [GitHub](https://github.com/BenJR546)
-   On [Stack Overflow](https://stackoverflow.com/users/27921700/benjr546)
-   Via the contact form on the [portfolio](https://challenge20-reactportfolio.onrender.com/contact)

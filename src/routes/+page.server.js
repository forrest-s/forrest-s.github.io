import { base } from '$app/paths'

export function load() {
  const photos = {
    test: ''
  }

  const features = [
    {
      title: "Innovative Solutions",
      content: "As a web developer with a vast range of experience, I bring a unique perspective to the table. My background includes roles such as a Military Aviation Mechanic, a Warehouse General Mechanic, a Warehouse Production Worker, a Shipping/Receiving Coordinator, and a Construction Project Manager. Through these roles, I've honed my problem-solving skills, attention to detail, and ability to work efficiently in fast-paced environments. This diverse background has given me the ability to adapt quickly to new challenges and has shaped me into a well-rounded developer.",
      color: "yellow",
      mobileImg: "https://images.unsplash.com/photo-1577209299418-485f60c0d4de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1069&q=80",
      desktopImg: "https://images.unsplash.com/photo-1577209299418-485f60c0d4de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1069&q=80",
      id: "1",
    },
    {
      title: "Experienced Leadership",
      content: "My path to tech was not a straight line, but I believe this has given me a well-rounded perspective and a strong work ethic. I understand the importance of clear communication, setting expectations, and meeting deadlines. My experience in project management has also taught me to be proactive and anticipate problems before they occur. I am always looking for ways to improve my skills and stay up-to-date with the latest technologies, which ensures that my clients always receive the best possible service.",
      color: "red",
      mobileImg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      desktopImg: "https://images.unsplash.com/photo-1441974231531-c6227db76b6e?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      id: "2",
    },
  ];

  const services = [
    {
      title: "Front End",
      content:
        "Front End technologies",
      colorTheme: "green",
      mobileImg: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      desktopImg: "https://images.unsplash.com/photo-1421789665209-c9b2a435e3dc?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1171&q=80",
      id: "1",
    },
    {
      title: "Back End",
      content:
        "Back End technologies",
      colorTheme: "green",
      mobileImg: "https://images.unsplash.com/photo-1616683955867-4049d9b78977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      desktopImg: "https://images.unsplash.com/photo-1616683955867-4049d9b78977?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80",
      id: "2",
    },
  ];

  const projects = [
    {
      image: `${base}/images/lotr-app.png`,
      url: 'https://charactersoflordoftherings.surge.sh/',
      content:
        "This full-stack application connects to The-One-API to retrieve character information from the Lord of the Rings franchise. Each card displays detailed character information and, if available, famous movie quotes. The front-end is built using React, while the back-end is powered by Node.js and Express.",
      title: "Characters of the Lord of the Rings",
      technologies: ['React', 'Surge'],
      id: 1,
    },
    {
      image: `${base}/images/bounty-hunter-app.png`,
      url: '',
      content:
        "This is a full-stack application that utilizes a database for storing bounties. Users can add bounties to the database and track their progress. The front-end is built using React, while the back-end is powered by Node.js and Express. The database is managed using MongoDB and Mongoose, which facilitates schema creation.",
      title: "Bounty Hunter",
      technologies: ['React', 'Express.js', 'Node.js', 'Heroku'],
      id: 2,
    },
    {
      image: `${base}/images/books-weve-read.png`,
      url: '',
      content:
        "This web application serves as a book database, allowing users to add books along with their respective authors and genres. Users can either add a new book or explore existing books, genres, and authors. The front-end of the application is built using the React library, with react-router facilitating the routing of different views. The back-end is powered by the Express/Node.js framework, with MongoDB as the database for book storage. The Mongoose library is used for schema creation and object-document mapping. The application also features authentication via token-based encryption. The application is live on the Heroku platform.",
      title: "Books We've Read Database",
      technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Heroku'],
      id: 3,
    },
    {
      image: `${base}/images/exercise-tracker.png`,
      url: '',
      content:
        "The Exercise Tracker application incorporates authentication and login features to enable users to securely track their workouts and participate in the forum. The front-end of the application is built with React, utilizing react-router for effective routing, while the back-end is powered by Node.js and Express. MongoDB serves as the database, with Mongoose supporting schema creation and object-document mapping. The app ensures security through token-based authentication and encryption. Additionally, the application is hosted live on Heroku for easy access.",
      title: "Exercise Tracker/Forum",
      technologies: ['React', 'Express.js', 'Node.js', 'MongoDB', 'Heroku'],
      id: 4,
    },
    {
      image: `${base}/images/pokemon.png`,
      url: 'https://pokemon-fresh.deno.dev',
      content:
        'This pokemon viewing website is created using newer web technologies, deno and fresh. The pokemon site has a pokedex for viewing your favorite pokemon and their stats/moves. This site also gathers the pokemon informatin from a third party api call. This site is deployed using deno deploy.',
      title: "Pokedex",
      technologies: ['Deno', 'Fresh', 'Deno Deploy'],
      id: 5,
    },
    {
      image: `${base}/images/lotrSvelte.png`,
      url: 'https://lotr-svelte.vercel.app',
      content:
        'This is another lord of the rings character viewing website. Instead, I tried diffferent technologies and improved on the design. This lotr character site uses svelte as a compiler and sveltekit as a metaframework deployed on  vercel.',
      title: "Lotr Characters",
      technologies: ['Svelte', 'Sveltekit', 'Vercel'],
      id: 6,
    }    
  ];

  const gallery = [
    {
      desktopImagePath: 'https://images.unsplash.com/photo-1673766791276-5f46fd720021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=885&q=80',
      mobileImagePath: 'https://images.unsplash.com/photo-1673766791276-5f46fd720021?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=885&q=80',
      alt: 'Milk bottles',
      id: 1,
    },
    {
      desktopImagePath: 'https://images.unsplash.com/photo-1673560199041-21c35ef9dac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      mobileImagePath: 'https://images.unsplash.com/photo-1673560199041-21c35ef9dac1?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80',
      alt: 'Orange',
      id: 2,
    },
    {
      desktopImagePath: 'https://images.unsplash.com/photo-1673412425052-054cac55e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      mobileImagePath: 'https://images.unsplash.com/photo-1673412425052-054cac55e735?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHx0b3BpYy1mZWVkfDY1fDZzTVZqVExTa2VRfHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60',
      alt: 'Cone',
      id: 3,
    },
    {
      desktopImagePath: 'https://images.unsplash.com/photo-1672738575910-821e3289f334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
      mobileImagePath: 'https://images.unsplash.com/photo-1672738575910-821e3289f334?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80g',
      alt: 'Sugar cubes',
      id: 4,
    },
  ];

  return {
    photos,
    features,
    services,
    projects,
    gallery,
  };
}

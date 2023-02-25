import { base } from '$app/paths'

export function load() {
  const photos = {
    test: ''
  }

  const features = [
    {
      title: "Innovative Solutions",
      content:
        "Unlock the power of innovation with a software engineer who brings a unique combination of compassion and problem-solving to the table. With a wealth of experience and a proven track record of managing time, projects, and people. I excel at collaborating with teams to deliver cutting-edge solutions that achieve mission-critical objectives with precision and accuracy. Let me help you drive your technology projects to success.",
      color: "yellow",
      mobileImg: "https://images.unsplash.com/photo-1577209299418-485f60c0d4de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1069&q=80",
      desktopImg: "https://images.unsplash.com/photo-1577209299418-485f60c0d4de?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1069&q=80",
      id: "1",
    },
    {
      title: "Experienced Leadership",
      content:
        "Using a collaborative formula of designers, researchers, photographers, videographers, and copywriters, we'll build and extend your brand in digitial places.",
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
      content:
        "We put our trust in Sunnyside and they delivered, making sure our needs were met and deadlines were always hit.",
      title: "Characters of the Lord of the Rings",
      technologies: ['React'],
      id: 1,
    },
    {
      image: `${base}/images/bounty-hunter-app.png`,
      content:
        "Exercise tracker app with authentication and login. Log in and start tracking workouts and ask questions on the forum. App utilizes React for the front-end, with react-router helping with the different routes, and Node.js/Express as the backend. MongoDB is used for the database and Mongoose helps with the schema creation and object-document mapper. Authentication is handled using tokens and encryption. App is live with heroku.",
      title: "Bounty Hunter",
      technologies: ['React', 'Express.js', 'Node.js'],
      id: 2,
    },
    {
      image: `${base}/images/books-weve-read.png`,
      content:
        "Incredible end result! Oour sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      title: "Books We've Read Database",
      technologies: ['React', 'Express.js', 'Node.js', 'MongoDB'],
      id: 3,
    },
    {
      image: `${base}/images/exercise-tracker.png`,
      content:
        "Incredible end result! Oour sales increased over 400% when we worked with Sunnyside. Highly recommended!",
      title: "Exercise Tracker/Forum",
      technologies: ['React', 'Express.js', 'Node.js', 'MongoDB'],
      id: 4,
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

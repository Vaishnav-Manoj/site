export const meta = {
  title: 'Vaishnav',
  description: 'Hey, I\'m Vaishnav. I do stuff',
  author: 'Vaishnav',
  colour: '#e8e4c9',
  image: '/static/profile.gif'
}

export const hero = {
  title: "Hey there! I'm Vaishnav.",
  desc: "Constantly pushing the boundaries of what I know to create weird and wonderful projects."
};


export const projects = {
  title: 'past projects',
  desc: "smth about projects here",
  projects: [
    {
      title: 'This website',
      description: 'The website that you\'re on right now!',
      link: 'google.com',
      github: '',
      image: "/static/profile.gif",
      stack: ["NextJS", "TailwindCSS", "MySQL"]
    },
    {
      title: 'Kciw',
      description: 'A bot that used to manage my daily needs',
      stack: ["Javascript", "MongoDB"]
    },
    {
      title: 'password manager',
      description: 'this project randomly generated passwords for me',
      github: '',
      stack: ["Python", "MySQL"]
    }
  ]
};

export const stack = {
  title: 'My Stack',
  stack: [
    'HTML',
    'CSS',
    'JavaScript',
    'Typescript',
    'React',
    'NextJS',
    'TailwindCSS',
    'Firebase',
    'Git',
    'aws',
    'azure',
    'gcp',
    'flutter',
    'java',
    'vue',
    'php',
    'laravel',
    'kubernetes',
    'docker',
    'vim',
    'c',
    'workers',
    'v',
    'unreal',
    'unity',
    'tailwind',
    'swift',
    'svg',
    'stackoverflow'
  ]
};

export const contact = {
  title: 'Contact Me',
  mail: 'biggestnonceevah@gmail.com',
  github: '#',
  twitter: '#',
  linkedin: '#'
};

export const resume = {
  english: {
    name: "Vaishnav",
    description: "Motivated and independent software developer with significant experience in web development and deploying applications. Likes to build cool stuff and learn new things.",
    info: [{
      url: "google.com",
      title: "google"
    }, {
      url: "google.com",
      title: "google"
    }, {
      url: "google.com",
      title: "google"
    }, {
      url: "google.com",
      title: "google"
    }],
    languages: [{
      lang: "English",
      proficient: 3
    }, {
      lang: "German",
      proficient: 5
    }],
    stack: ["rust", "go", "py"],
    experience: [{
      title: "balls business",
      duration: "2018 - Present",
      stuff: ["taught myself to do stuff"]
    }],
    education: [{
      title: "class",
      duration: "2018 - Present",
      explain: [{
        title: "abitur",
        stuff: ["focussed on doing stuff"]
      }]
    }, {
      title: "apprentice",
      duration: "2018",
      explain: [{
        title: "balls",
        stuff: ["Basic computer components and logic gates", "Networking"]
      }]
    }],
    projects: projects
  }
}
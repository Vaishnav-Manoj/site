export const meta = {
  title: 'Nance - Portfolio',
  description: 'Hey, I\'m Nance. I\'ve a knack for programming and meme-ing everything',
  author: 'Nance#1234',
  colour: '#e8e4c9',
  image: '/static/profile.gif'
}

export const hero = {
  title: "Hey there! I'm Nance.",
  desc: "I write code and sometimes it works!"
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
      stack: ["NextJS", "TailwindCSS"]
    },
    {
      title: 'Kciw',
      description: 'A discord bot for the support server of one the biggest moderation bots on discord lorem ipsum your mom gay!',
      link: 'google.com',
      github: 'github.com/nance',
      stack: ["Typescript", "Detritus", "MongoDB"]
    },
    {
      title: 'Hospital management',
      description: 'fucked your hospital lmfao',
      github: 'github.com/#',
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
    name: "Nance",
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
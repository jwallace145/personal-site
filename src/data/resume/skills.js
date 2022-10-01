// categories
const LANGUAGES = 'Languages';
const API_DEVELOPMENT = 'API Development';
const CLOUD_COMPUTING = 'Cloud Computing';
const PYTHON = 'Python';
const JAVA = 'Java';
const GO = 'GO';
const WEB_DEVELOPMENT = 'Web Development';

const skills = [
  // python and related skills
  {
    title: PYTHON,
    competency: 5,
    category: [LANGUAGES, PYTHON],
    link: 'https://www.python.org/',
  },
  {
    title: 'Boto3',
    competency: 5,
    category: [CLOUD_COMPUTING, PYTHON],
    link: 'https://aws.amazon.com/sdk-for-python/',
  },
  {
    title: 'FastAPI',
    competency: 4,
    category: [API_DEVELOPMENT, PYTHON],
    link: 'https://fastapi.tiangolo.com/',
  },
  {
    title: 'Flask',
    competency: 2,
    category: [API_DEVELOPMENT, PYTHON],
    link: 'https://flask.palletsprojects.com/en/2.2.x/',
  },
  {
    title: 'Django',
    competency: 1,
    category: [PYTHON, WEB_DEVELOPMENT],
    link: 'https://www.djangoproject.com/',
  },
  {
    title: 'PyTorch',
    competency: 1,
    category: [PYTHON],
    link: 'https://pytorch.org/',
  },

  // java and related skills
  {
    title: JAVA,
    competency: 4,
    category: [JAVA, LANGUAGES],
    link: 'https://www.java.com/en/',
  },
  {
    title: 'Spring',
    competency: 3,
    category: [API_DEVELOPMENT, JAVA],
    link: 'https://spring.io/',
  },

  // go and related skills
  {
    title: 'Go',
    competency: 4,
    category: [GO, LANGUAGES],
    link: 'https://go.dev/',
  },
  {
    title: 'Gin',
    competency: 4,
    category: [API_DEVELOPMENT, GO],
    link: 'https://gin-gonic.com/',
  },

  // other languages
  {
    title: 'Javascript',
    competency: 3,
    category: [LANGUAGES, WEB_DEVELOPMENT],
    link: 'https://www.javascript.com/',
  },
  {
    title: 'Typescript',
    competency: 3,
    category: [LANGUAGES, WEB_DEVELOPMENT],
    link: 'https://www.typescriptlang.org/',
  },
  {
    title: 'Bash',
    competency: 2,
    category: [LANGUAGES],
    link: '',
  },
  {
    title: 'C++',
    competency: 1,
    category: [LANGUAGES],
    link: 'https://cplusplus.com/',
  },
  {
    title: 'C',
    competency: 1,
    category: [LANGUAGES],
    link: 'https://en.wikipedia.org/wiki/C_(programming_language)',
  },

  // amazon web services
  {
    title: 'Amazon Web Services',
    competency: 5,
    category: ['Cloud Computing'],
    link: 'https://aws.amazon.com/',
  },
  {
    title: 'CloudFormation',
    competency: 4,
    category: ['Cloud Computing'],
    link: 'https://aws.amazon.com/cloudformation/',
  },
  {
    title: 'DynamoDB',
    competency: 3,
    category: ['Cloud Computing'],
    link: 'https://aws.amazon.com/dynamodb/',
  },

  // frameworks and tools
  {
    title: 'Docker',
    competency: 3,
    category: ['API Development'],
    link: 'https://www.docker.com/',
  },
  {
    title: 'React',
    competency: 3,
    category: ['Web Development'],
    link: 'https://reactjs.org/',
  },
  {
    title: 'Terraform',
    competency: 3,
    category: ['Cloud Computing'],
    link: 'https://www.terraform.io/',
  },
  {
    title: 'Angular',
    competency: 1,
    category: ['Web Development'],
    link: 'https://angular.io/',
  },
].map((skill) => ({ ...skill, category: skill.category.sort() }));

// this is a list of colors that I like. The length should be == to the
// number of categories. Re-arrange this list until you find a pattern you like.
const colors = [
  '#6968b3',
  '#37b1f5',
  '#40494e',
  '#515dd4',
  '#e47272',
  '#cc7b94',
  '#3896e2',
  '#c3423f',
  '#d75858',
  '#747fff',
  '#64cb7b',
];

const categories = [
  ...new Set(skills.reduce((acc, { category }) => acc.concat(category), [])),
]
  .sort()
  .map((category, index) => ({
    name: category,
    color: colors[index],
  }));

export { categories, skills };

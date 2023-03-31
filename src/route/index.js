// Підключаємо технологію express для back-end сервера
const express = require('express')
// Cтворюємо роутер - місце, куди ми підключаємо ендпоїнти
const router = express.Router()

//================================================================

var header = {
  name: {
    firstname: 'Ivan',
    lastname: 'Ivanov',
  },
  position: 'Junior Fullstack JS Developer',
  salary: '600$ в місяць',
  address: 'Kyiv, Ukraine',
}

var footer = {
  social: {
    email: {
      text: 'dmytro@mail.com',
      href: 'mailto:dmytro@mail.com',
    },
    phone: {
      text: '+380670000123',
      href: 'tel:+380670000123',
    },
    linkedin: {
      text: 'LinkedIn',
      href: 'https://www.linkedin.com/in/dmytro-test',
    },
  },
}

// ================================================================

// router.get Створює нам один ентпоїнт

//           ↙ тут вводимо шлях (PATH) до сторінки
router.get('/', function (req, res) {
  // res.render генерує нам HTML сторінку

  //            ↙ cюди вводимо назву файлу з сontainer
  res.render('index', {})
  //                  ↑↑ сюди вводимо JSON дані
})

// ================================================================

//
router.get('/summary', function (req, res) {
  res.render('summary', {
    page: {
      title: 'Resume | Summary',
    },

    header,

    main: {
      summary: {
        title: 'Summary',
        text: `Open-minded for new technologies, with 1 years of
				experience in development. Whenever I start to
				work on a new project I learn the domain and try
				to understand the idea of the project. Good team
				player, every colleague is a friend to me.`,
      },

      experience: {
        title: 'Other experience',
        text: `Pet project for parsing sport betting data from
				different platforms ( odds ) and sport statistics
				( tournament position, goals etc), analyzing by
				simple mathematics models and preparing
				probability for such events like: money line -
				first win / draw / second win, totals etc.`,
      },
    },

    footer,
  })
})

router.get('/skills', function (req, res) {
  res.render('skills', {
    page: {
      title: 'Resume | Skills',
    },

    header,

    main: {
      skills: [
        {
          name: 'HTML',
          point: 10,
          isTop: true,
        },
        {
          name: 'Handlebars',
          point: 7,
          isTop: false,
        },
        {
          name: 'VS Code & NPM',
          point: 10,
          isTop: true,
        },
        {
          name: 'Git & Terminal',
          point: 5,
        },
        {
          name: 'React.js',
          point: 0,
        },
        {
          name: 'PHP',
          point: null,
        },
      ],

      hobbies: [
        {
          name: 'Reading',
          isMain: true,
        },
        {
          name: 'Airsoft',
          isMain: false,
        },
        {
          name: 'Camping',
          isMain: false,
        },
      ],
    },

    footer,
  })
})

router.get('/education', function (req, res) {
  res.render('education', {
    page: {
      title: 'Resume | Education',
    },

    header,

    main: {
      educations: [
        {
          name: 'School',
          isEnd: true,
        },
        {
          name: 'College',
          isEnd: true,
        },
        {
          name: 'University',
          isEnd: false,
        },
      ],

      certificates: [
        {
          name: 'Certificate A',
          id: 45674,
        },
        {
          name: 'Certificate B',
          id: 78654,
        },
        {
          name: 'Certificate C',
          id: 95468,
        },
      ],
    },

    footer,
  })
})

router.get('/work', function (req, res) {
  res.render('work', {
    layout: 'big',
    page: {
      title: 'Resume | Work',
    },

    header,

    main: {
      works: [
        {
          position: 'Junior Fullstack Developer',

          company: {
            name: 'IT Brains',
            url: 'https://it-brains.com.ua/',
          },

          duration: {
            from: '23.01.2023',
            to: null,
          },

          projectAmount: 5,

          projects: [
            {
              name: 'Resume',
              url: 'https://it-brains.com.ua/',
              about:
                'A formal document that a job applicant creates to itemize their qualifications for a position',

              stackAmount: 3,

              stacks: [
                {
                  name: 'React.js',
                },
                {
                  name: 'HTML/CSS',
                },
                {
                  name: 'Nodejs',
                },
              ],

              awardAmount: 2,

              awards: [
                {
                  name: 'A resume is usually accompanied by a customized cover letter',
                },
                {
                  name: 'A resume is almost always required for applicants to office jobs',
                },
              ],
            },
          ],
        },
      ],
    },

    footer,
  })
})

// ================================================================

// Підключаємо роутер до бек-енду
module.exports = router

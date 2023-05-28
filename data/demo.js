const user = {
   isActive: true,

   payments: [
      {
         date: 'May 28, 2022',
         transactionType: 'Card',
         refNo: 'TRFSEUI0908',
         amount: '5000',
         status: true,
      },
      {
         date: 'May 28, 2022',
         transactionType: 'Card',
         refNo: 'TRFSEUI0908',
         amount: '5000',
         status: true,
      },
      {
         date: 'May 28, 2022',
         transactionType: 'Card',
         refNo: 'TRFSEUI0908',
         amount: '5000',
         status: true,
      },
      {
         date: 'May 28, 2022',
         transactionType: 'Card',
         refNo: 'TRFSEUI0908',
         amount: '5000',
         status: true,
      },
      {
         date: 'May 28, 2022',
         transactionType: 'Card',
         refNo: 'TRFSEUI0908',
         amount: '5000',
         status: true,
      },
      {
         date: 'May 28, 2022',
         transactionType: 'Card',
         refNo: 'TRFSEUI0908',
         amount: '5000',
         status: true,
      },
      {
         date: 'May 28, 2022',
         transactionType: 'Card',
         refNo: 'TRFSEUI0908',
         amount: '5000',
         status: true,
      },
      {
         date: 'May 28, 2022',
         transactionType: 'Card',
         refNo: 'TRFSEUI0908',
         amount: '5000',
         status: true,
      },
      {
         date: 'May 28, 2022',
         transactionType: 'Card',
         refNo: 'TRFSEUI0908',
         amount: '5000',
         status: true,
      },
      {
         date: 'May 28, 2022',
         transactionType: 'Card',
         refNo: 'TRFSEUI0908',
         amount: '5000',
         status: true,
      },
      {
         date: 'May 28, 2022',
         transactionType: 'Card',
         refNo: 'TRFSEUI0908',
         amount: '5000',
         status: true,
      },
   ]
}

const users = [];

const coldCourses = [

   {
      id: 1,
      price: 5000,
      slug: 'Introduction-To-Basic-Food-Preparation-And-Culinary',
      title: 'Introduction to Basic Food Preparation and Culinary',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At praesent faucibus odio enim, tortor mauris viverra quis. Semper quis mi enim volutpat nisi libero. Tellus placerat tortor vitae nunc. Auctor vel, pharetra euismod nam tempor duis risus. Velit morbi pellentesque urna, eget diam dignissim sollicitudin. Id vitae urna varius egestas purus faucibus odio ultrices. Urna amet erat nisi, bibendum sit ut amet. Vestibulum feugiat a.',
      users: 500,
      thumbnailData: {
         folder: 'courses',
         fileName: 'thumbnail',
         format: 'png'
      },

      modules: [
         {
            title: 'Introduction',
            duration: '10'
         },

         {
            title: 'What is UX Design',
            duration: '10'
         },

         {
            title: 'Usability Testing',
            duration: '10'
         },

         {
            title: 'Create Usability Test',
            duration: '30'
         },

         {
            title: 'How to Implement',
            duration: '30'
         },

      ],

      reviews: [
         {
            author: 'Jason Smith',
            writing: 'This course definitely brings me more values than I expect. Thank you so much both of you guys!',
            stars: 4,
            date: '20 Feb 2022'
         },

         {
            author: 'Wilson Armela',
            writing: "Super helpful class! I'm on my way to create a Digital Marketing Agency and I have found plenty of value inside this course. Highly recommend!",
            stars: 5,
            date: '20 Feb 2022'
         },

         {
            author: 'Ajax Simpson',
            writing: 'This class exceeded my expectations!',
            stars: 3,
            date: '20 Feb 2022'
         }
      ],

      duration: {
         hours: 1,
         minutes: 30
      }
   },

   {
      id: 2,
      price: 5000,
      slug: 'Creating-Websites-With-HTML-&-CSS',
      title: 'Creating Websites With HTML & CSS',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At praesent faucibus odio enim, tortor mauris viverra quis. Semper quis mi enim volutpat nisi libero. Tellus placerat tortor vitae nunc. Auctor vel, pharetra euismod nam tempor duis risus. Velit morbi pellentesque urna, eget diam dignissim sollicitudin. Id vitae urna varius egestas purus faucibus odio ultrices. Urna amet erat nisi, bibendum sit ut amet. Vestibulum feugiat a.',
      users: 500,
      thumbnailData: {
         folder: 'courses',
         fileName: 'thumbnail',
         format: 'png'
      },

      modules: [
         {
            title: 'Introduction',
            duration: '10'
         },

         {
            title: 'What is UX Design',
            duration: '10'
         },

         {
            title: 'Usability Testing',
            duration: '10'
         },

         {
            title: 'Create Usability Test',
            duration: '30'
         },

         {
            title: 'How to Implement',
            duration: '30'
         },

      ],

      reviews: [
         {
            author: 'Jason Smith',
            writing: 'This course definitely brings me more values than I expect. Thank you so much both of you guys!',
            stars: 4,
            date: '20 Feb 2022'
         },

         {
            author: 'Wilson Armela',
            writing: "Super helpful class! I'm on my way to create a Digital Marketing Agency and I have found plenty of value inside this course. Highly recommend!",
            stars: 5,
            date: '20 Feb 2022'
         },

         {
            author: 'Ajax Simpson',
            writing: 'This class exceeded my expectations!',
            stars: 3,
            date: '20 Feb 2022'
         }
      ],

      duration: {
         hours: 1,
         minutes: 30
      }
   },

   {
      id: 3,
      price: 5000,
      slug: 'How-To-Prepare-Amala-&-Ewedu-Fritata',
      title: 'How To Prepare Amala & Ewedu-Fritata',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At praesent faucibus odio enim, tortor mauris viverra quis. Semper quis mi enim volutpat nisi libero. Tellus placerat tortor vitae nunc. Auctor vel, pharetra euismod nam tempor duis risus. Velit morbi pellentesque urna, eget diam dignissim sollicitudin. Id vitae urna varius egestas purus faucibus odio ultrices. Urna amet erat nisi, bibendum sit ut amet. Vestibulum feugiat a.',
      users: 500,
      thumbnailData: {
         folder: 'courses',
         fileName: 'thumbnail',
         format: 'png'
      },

      modules: [
         {
            title: 'Introduction',
            duration: '10'
         },

         {
            title: 'What is UX Design',
            duration: '10'
         },

         {
            title: 'Usability Testing',
            duration: '10'
         },

         {
            title: 'Create Usability Test',
            duration: '30'
         },

         {
            title: 'How to Implement',
            duration: '30'
         },

      ],

      reviews: [
         {
            author: 'Jason Smith',
            writing: 'This course definitely brings me more values than I expect. Thank you so much both of you guys!',
            stars: 4,
            date: '20 Feb 2022'
         },

         {
            author: 'Wilson Armela',
            writing: "Super helpful class! I'm on my way to create a Digital Marketing Agency and I have found plenty of value inside this course. Highly recommend!",
            stars: 5,
            date: '20 Feb 2022'
         },

         {
            author: 'Ajax Simpson',
            writing: 'This class exceeded my expectations!',
            stars: 3,
            date: '20 Feb 2022'
         }
      ],

      duration: {
         hours: 1,
         minutes: 30
      }
   },

   {
      id: 4,
      price: 5000,
      slug: 'Oriential-Foods',
      title: 'Oriential Foods',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At praesent faucibus odio enim, tortor mauris viverra quis. Semper quis mi enim volutpat nisi libero. Tellus placerat tortor vitae nunc. Auctor vel, pharetra euismod nam tempor duis risus. Velit morbi pellentesque urna, eget diam dignissim sollicitudin. Id vitae urna varius egestas purus faucibus odio ultrices. Urna amet erat nisi, bibendum sit ut amet. Vestibulum feugiat a.',
      users: 500,
      thumbnailData: {
         folder: 'courses',
         fileName: 'thumbnail',
         format: 'png'
      },

      modules: [
         {
            title: 'Introduction',
            duration: '10'
         },

         {
            title: 'What is UX Design',
            duration: '10'
         },

         {
            title: 'Usability Testing',
            duration: '10'
         },

         {
            title: 'Create Usability Test',
            duration: '30'
         },

         {
            title: 'How to Implement',
            duration: '30'
         },

      ],

      reviews: [
         {
            author: 'Jason Smith',
            writing: 'This course definitely brings me more values than I expect. Thank you so much both of you guys!',
            stars: 4,
            date: '20 Feb 2022'
         },

         {
            author: 'Wilson Armela',
            writing: "Super helpful class! I'm on my way to create a Digital Marketing Agency and I have found plenty of value inside this course. Highly recommend!",
            stars: 5,
            date: '20 Feb 2022'
         },

         {
            author: 'Ajax Simpson',
            writing: 'This class exceeded my expectations!',
            stars: 3,
            date: '20 Feb 2022'
         }
      ],

      duration: {
         hours: 1,
         minutes: 30
      }
   },

   {
      id: 1,
      price: 5000,
      slug: 'Introduction-To-Basic-Food-Preparation-And-Culinary',
      title: 'Introduction to Basic Food Preparation and Culinary',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At praesent faucibus odio enim, tortor mauris viverra quis. Semper quis mi enim volutpat nisi libero. Tellus placerat tortor vitae nunc. Auctor vel, pharetra euismod nam tempor duis risus. Velit morbi pellentesque urna, eget diam dignissim sollicitudin. Id vitae urna varius egestas purus faucibus odio ultrices. Urna amet erat nisi, bibendum sit ut amet. Vestibulum feugiat a.',
      users: 500,
      thumbnailData: {
         folder: 'courses',
         fileName: 'thumbnail',
         format: 'png'
      },

      modules: [
         {
            title: 'Introduction',
            duration: '10'
         },

         {
            title: 'What is UX Design',
            duration: '10'
         },

         {
            title: 'Usability Testing',
            duration: '10'
         },

         {
            title: 'Create Usability Test',
            duration: '30'
         },

         {
            title: 'How to Implement',
            duration: '30'
         },

      ],

      reviews: [
         {
            author: 'Jason Smith',
            writing: 'This course definitely brings me more values than I expect. Thank you so much both of you guys!',
            stars: 4,
            date: '20 Feb 2022'
         },

         {
            author: 'Wilson Armela',
            writing: "Super helpful class! I'm on my way to create a Digital Marketing Agency and I have found plenty of value inside this course. Highly recommend!",
            stars: 5,
            date: '20 Feb 2022'
         },

         {
            author: 'Ajax Simpson',
            writing: 'This class exceeded my expectations!',
            stars: 3,
            date: '20 Feb 2022'
         }
      ],

      duration: {
         hours: 1,
         minutes: 30
      }
   },

   {
      id: 2,
      price: 5000,
      slug: 'Creating-Websites-With-HTML-&-CSS',
      title: 'Creating Websites With HTML & CSS',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At praesent faucibus odio enim, tortor mauris viverra quis. Semper quis mi enim volutpat nisi libero. Tellus placerat tortor vitae nunc. Auctor vel, pharetra euismod nam tempor duis risus. Velit morbi pellentesque urna, eget diam dignissim sollicitudin. Id vitae urna varius egestas purus faucibus odio ultrices. Urna amet erat nisi, bibendum sit ut amet. Vestibulum feugiat a.',
      users: 500,
      thumbnailData: {
         folder: 'courses',
         fileName: 'thumbnail',
         format: 'png'
      },

      modules: [
         {
            title: 'Introduction',
            duration: '10'
         },

         {
            title: 'What is UX Design',
            duration: '10'
         },

         {
            title: 'Usability Testing',
            duration: '10'
         },

         {
            title: 'Create Usability Test',
            duration: '30'
         },

         {
            title: 'How to Implement',
            duration: '30'
         },

      ],

      reviews: [
         {
            author: 'Jason Smith',
            writing: 'This course definitely brings me more values than I expect. Thank you so much both of you guys!',
            stars: 4,
            date: '20 Feb 2022'
         },

         {
            author: 'Wilson Armela',
            writing: "Super helpful class! I'm on my way to create a Digital Marketing Agency and I have found plenty of value inside this course. Highly recommend!",
            stars: 5,
            date: '20 Feb 2022'
         },

         {
            author: 'Ajax Simpson',
            writing: 'This class exceeded my expectations!',
            stars: 3,
            date: '20 Feb 2022'
         }
      ],

      duration: {
         hours: 1,
         minutes: 30
      }
   },

   {
      id: 3,
      price: 5000,
      slug: 'How-To-Prepare-Amala-&-Ewedu-Fritata',
      title: 'How To Prepare Amala & Ewedu-Fritata',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At praesent faucibus odio enim, tortor mauris viverra quis. Semper quis mi enim volutpat nisi libero. Tellus placerat tortor vitae nunc. Auctor vel, pharetra euismod nam tempor duis risus. Velit morbi pellentesque urna, eget diam dignissim sollicitudin. Id vitae urna varius egestas purus faucibus odio ultrices. Urna amet erat nisi, bibendum sit ut amet. Vestibulum feugiat a.',
      users: 500,
      thumbnailData: {
         folder: 'courses',
         fileName: 'thumbnail',
         format: 'png'
      },

      modules: [
         {
            title: 'Introduction',
            duration: '10'
         },

         {
            title: 'What is UX Design',
            duration: '10'
         },

         {
            title: 'Usability Testing',
            duration: '10'
         },

         {
            title: 'Create Usability Test',
            duration: '30'
         },

         {
            title: 'How to Implement',
            duration: '30'
         },

      ],

      reviews: [
         {
            author: 'Jason Smith',
            writing: 'This course definitely brings me more values than I expect. Thank you so much both of you guys!',
            stars: 4,
            date: '20 Feb 2022'
         },

         {
            author: 'Wilson Armela',
            writing: "Super helpful class! I'm on my way to create a Digital Marketing Agency and I have found plenty of value inside this course. Highly recommend!",
            stars: 5,
            date: '20 Feb 2022'
         },

         {
            author: 'Ajax Simpson',
            writing: 'This class exceeded my expectations!',
            stars: 3,
            date: '20 Feb 2022'
         }
      ],

      duration: {
         hours: 1,
         minutes: 30
      }
   },

   {
      id: 4,
      price: 5000,
      slug: 'Oriential-Foods',
      title: 'Oriential Foods',
      about: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. At praesent faucibus odio enim, tortor mauris viverra quis. Semper quis mi enim volutpat nisi libero. Tellus placerat tortor vitae nunc. Auctor vel, pharetra euismod nam tempor duis risus. Velit morbi pellentesque urna, eget diam dignissim sollicitudin. Id vitae urna varius egestas purus faucibus odio ultrices. Urna amet erat nisi, bibendum sit ut amet. Vestibulum feugiat a.',
      users: 500,
      thumbnailData: {
         folder: 'courses',
         fileName: 'thumbnail',
         format: 'png'
      },

      modules: [
         {
            title: 'Introduction',
            duration: '10'
         },

         {
            title: 'What is UX Design',
            duration: '10'
         },

         {
            title: 'Usability Testing',
            duration: '10'
         },

         {
            title: 'Create Usability Test',
            duration: '30'
         },

         {
            title: 'How to Implement',
            duration: '30'
         },

      ],

      reviews: [
         {
            author: 'Jason Smith',
            writing: 'This course definitely brings me more values than I expect. Thank you so much both of you guys!',
            stars: 4,
            date: '20 Feb 2022'
         },

         {
            author: 'Wilson Armela',
            writing: "Super helpful class! I'm on my way to create a Digital Marketing Agency and I have found plenty of value inside this course. Highly recommend!",
            stars: 5,
            date: '20 Feb 2022'
         },

         {
            author: 'Ajax Simpson',
            writing: 'This class exceeded my expectations!',
            stars: 3,
            date: '20 Feb 2022'
         }
      ],

      duration: {
         hours: 1,
         minutes: 30
      }
   },

]

const currentCourses = [
   {
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/dulcet-order-370109.appspot.com/o/images%2FCulinary%20Disrupt.?alt=media&token=bc17fb09-a9d1-4093-a8c0-df3da83def2d",
      "Modules": [
         {
            "moduleDescription": "Intro to culinary disrupt",
            "moduleTitle": "Introduction to Culinary Disruption",
            "videoUrl": "https://firebasestorage.googleapis.com/v0/b/dulcet-order-370109.appspot.com/o/videos%2FIntroduction%20to%20Culinary%20Disruption?alt=media&token=90008c00-28e8-40f4-a4f7-28d801f01833",
            "Duration": 9.12,
            "createdOn": "Thu Dec 29 2022 11:54:20 GMT+0100 (West Africa Standard Time)"
         }
      ],
      "tutorBio": "Chef Havardson Bae",
      "price": 12000,
      "author": "Chef Havardson",
      "name": "Culinary Disrupt.",
      "description": "Culinary Arts of Disreupt",
      "students": 0,
      "authorId": "oNDdddjzSFYvnR4Cb9oBziKDjpR2",
      "courseId": "Culinary Disrupt.1672311260475",
      "createdOn": "Thu Dec 29 2022 11:54:20 GMT+0100 (West Africa Standard Time)"
   },
   {
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/dulcet-order-370109.appspot.com/o/images%2FGenerating%20Ai%20contents%20in%20software%20developments?alt=media&token=df2452cc-9708-49ba-b13f-25230de44796",
      "price": 8000,
      "author": "harvey ana",
      "Modules": [
         {
            "moduleDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co",
            "moduleTitle": "introduction to Artificial intelligence",
            "videoUrl": "https://firebasestorage.googleapis.com/v0/b/dulcet-order-370109.appspot.com/o/videos%2Fintroduction%20to%20Artificial%20intelligence?alt=media&token=b0c88ced-f9a8-44b5-b9ce-13250b22a0ba",
            "Duration": 65.665,
            "createdOn": "Thu Dec 29 2022 11:32:12 GMT+0100 (West Africa Standard Time)"
         }
      ],
      "tutorBio": "Harvey is a renowned sofware engineer and a great you know just get out",
      "name": "Generating Ai contents in software developments",
      "students": 0,
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co",
      "authorId": "V0AVmtw1FSWvyn4oQBxszyAsbie2",
      "courseId": "Generating Ai contents in software developments1672309932357",
      "createdOn": "Thu Dec 29 2022 11:32:12 GMT+0100 (West Africa Standard Time)"
   },
   {
      "thumbnail": "https://firebasestorage.googleapis.com/v0/b/dulcet-order-370109.appspot.com/o/images%2Fthe%20verge%2C%20upper%20house%20gathering?alt=media&token=7170557b-cc19-44a2-a8ca-e8e816c802bd",
      "tutorBio": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
      "Modules": [
         {
            "moduleDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
            "videoUrl": "https://firebasestorage.googleapis.com/v0/b/dulcet-order-370109.appspot.com/o/videos%2FThe%20verge%20part%20one?alt=media&token=b3dbad25-6adc-48a6-9682-b9fb57123d01",
            "moduleTitle": "The verge part one",
            "Duration": 74.775,
            "createdOn": "Fri Dec 30 2022 21:38:57 GMT+0100 (West Africa Standard Time)"
         }
      ],
      "author": "Harvey ana",
      "price": 9000,
      "name": "the verge, upper house gathering",
      "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
      "students": 0,
      "authorId": "V0AVmtw1FSWvyn4oQBxszyAsbie2",
      "createdOn": "Fri Dec 30 2022 21:38:57 GMT+0100 (West Africa Standard Time)",
      "courseId": "the verge, upper house gathering1672432737435"
   }
]

const userCourses = [
   [{ "id": "How to bake1671545117124" }, { "id": "Generating Ai contents in software developments1672309932357", "thumbnail": "https://firebasestorage.googleapis.com/v0/b/dulcet-order-370109.appspot.com/o/images%2FGenerating%20Ai%20contents%20in%20software%20developments?alt=media&token=df2452cc-9708-49ba-b13f-25230de44796", "price": 8000, "author": "harvey ana", "Modules": [{ "moduleDescription": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co", "moduleTitle": "introduction to Artificial intelligence", "videoUrl": "https://firebasestorage.googleapis.com/v0/b/dulcet-order-370109.appspot.com/o/videos%2Fintroduction%20to%20Artificial%20intelligence?alt=media&token=b0c88ced-f9a8-44b5-b9ce-13250b22a0ba", "Duration": 65.665, "createdOn": "Thu Dec 29 2022 11:32:12 GMT+0100 (West Africa Standard Time)" }], "tutorBio": "Harvey is a renowned sofware engineer and a great you know just get out", "name": "Generating Ai contents in software developments", "students": 0, "description": "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets co", "authorId": "V0AVmtw1FSWvyn4oQBxszyAsbie2", "courseId": "Generating Ai contents in software developments1672309932357", "createdOn": "Thu Dec 29 2022 11:32:12 GMT+0100 (West Africa Standard Time)" }]
]
let articlesData = [
  {
    id: 1, // generate uuidv4()
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam?`,
    shortDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. Asperiores, consequuntur! Minima doloribus expedita similique suscipit ipsam, repellatad debitis ea dolorum unde obcaecati quod accusamus laborum excepturi quaerat modi dolor fugit dignissimos repellendus!`,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, amet voluptas! Qui iusto quis dolorum voluptate dolor necessitatibus natus voluptatem molestias nisi aliquid optio repellendus aperiam hic corporis beatae, dignissimos illo ea officia, culpa expedita sed! Dolore aspernatur temporibus reiciendis nostrum consectetur praesentium fugit, accusamus ullam. Ex ab fugiat exercitationem autem dolore maiores suscipit, beatae minima quaerat quia amet sed quod at porro nostrum laudantium nisi necessitatibus alias iure ullam ducimus ut. Rem inventore omnis eum ea dignissimos soluta nobis in repudiandae cupiditate modi, alias dolor praesentium quae quidem tempore officiis dolorum. Blanditiis, omnis sed atque quam totam sint mollitia?`,
    imgSrc: 'images/articles-img/arsenal.jpeg',
    status: 'hot', // ['normal', 'high', 'hot']
    public: true,
    createdAt: 'August 21, 2021 14:45',
    // lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
    comments: [
      {
        id: "4354354-5423543",
        ownerId: "gfdo5h43524v5-424vfr2vt4t",
        ownerEmail: "123@tut.by",
        ownerName: "Dzmitry Hlushak",
        photoUrl: "",
        text: "Greate work, Dzmitry!",
        createdAt: '17.10.2021, 10:00:08',
        lastUpdate: '17.10.2021, 10:00:08'
      },
      {
        id: "4354354-542fdsafds3543",
        ownerId: "gfdo5h43fdasfdsafds524v5-424vfr2vt4t",
        ownerEmail: "1fdsafdsfds23@tut.by",
        ownerName: "John Doe",
        photoUrl: "",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        createdAt: '17.10.2021, 11:32:08',
        lastUpdate: '17.10.2021, 11:32:08'
      }
    ],
    displayComments: true,
    articleAuthor: 'Some author',
    photoBy: 'Dzmitry Hlushak'
  },
  {
    id: 2, // generate uuidv4(),
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam?`,
    shortDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Asperiores, consequuntur! Minima doloribus expedita similique suscipit ipsam, repellat
                ad debitis ea dolorum unde obcaecati quod accusamus laborum excepturi quaerat modi dolor fugit dignissimos repellendus!`,desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, amet voluptas! Qui iusto quis dolorum voluptate dolor necessitatibus natus voluptatem molestias nisi aliquid optio repellendus aperiam hic corporis beatae, dignissimos illo ea officia, culpa expedita sed! Dolore aspernatur temporibus reiciendis nostrum consectetur praesentium fugit, accusamus ullam. Ex ab fugiat exercitationem autem dolore maiores suscipit, beatae minima quaerat quia amet sed quod at porro nostrum laudantium nisi necessitatibus alias iure ullam ducimus ut. Rem inventore omnis eum ea dignissimos soluta nobis in repudiandae cupiditate modi, alias dolor praesentium quae quidem tempore officiis dolorum. Blanditiis, omnis sed atque quam totam sint mollitia?`,
    imgSrc: 'images/articles-img/pl.jpg',
    status: 'high', // ['normal', 'high', 'hot']
    public: true,
    createdAt: 'August 21, 2021 13:20',
    // lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
    comments: [],
    displayComments: false,
    articleAuthor: 'Some author',
    photoBy: 'Dzmitry Hlushak'
  },
  {
    id: 3, // generate uuidv4(),
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam?`,
    shortDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Asperiores, consequuntur! Minima doloribus expedita similique suscipit ipsam, repellat
                ad debitis ea dolorum unde obcaecati quod accusamus laborum excepturi quaerat modi dolor fugit dignissimos repellendus!`,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, 
            amet voluptas! Qui iusto quis dolorum voluptate dolor necessitatibus natus 
            voluptatem molestias nisi aliquid optio repellendus aperiam hic corporis 
            beatae, dignissimos illo ea officia, culpa expedita sed! Dolore 
            aspernatur temporibus reiciendis nostrum consectetur praesentium fugit, 
            accusamus ullam. Ex ab fugiat exercitationem autem dolore maiores suscipit, 
            beatae minima quaerat quia amet sed quod at porro nostrum laudantium nisi 
            necessitatibus alias iure ullam ducimus ut. Rem inventore omnis eum ea 
            dignissimos soluta nobis in repudiandae cupiditate modi, alias dolor 
            praesentium quae quidem tempore officiis dolorum. Blanditiis, omnis sed atque quam totam sint mollitia?`,
    imgSrc: 'images/articles-img/ars-team.jpg',
    status: 'hot', // ['normal', 'high', 'hot']
    public: true,
    createdAt: 'August 21, 2021 12:00',
    // lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
    comments: [],
    displayComments: false,
    articleAuthor: 'Some author',
    photoBy: 'Dzmitry Hlushak'
  },
  {
    id: 4, // generate uuidv4()
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam?`,
    shortDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Asperiores, consequuntur! Minima doloribus expedita similique suscipit ipsam, repellat
                ad debitis ea dolorum unde obcaecati quod accusamus laborum excepturi quaerat modi dolor fugit dignissimos repellendus!`,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, amet voluptas! Qui iusto quis dolorum voluptate dolor necessitatibus natus voluptatem molestias nisi aliquid optio repellendus aperiam hic corporis beatae, dignissimos illo ea officia, culpa expedita sed! Dolore aspernatur temporibus reiciendis nostrum consectetur praesentium fugit, accusamus ullam. Ex ab fugiat exercitationem autem dolore maiores suscipit, beatae minima quaerat quia amet sed quod at porro nostrum laudantium nisi necessitatibus alias iure ullam ducimus ut. Rem inventore omnis eum ea dignissimos soluta nobis in repudiandae cupiditate modi, alias dolor praesentium quae quidem tempore officiis dolorum. Blanditiis, omnis sed atque quam totam sint mollitia?`,
    imgSrc: 'images/articles-img/spain.jpg',
    status: 'normal', // ['normal', 'high', 'hot']
    public: true,
    createdAt: 'August 21, 2021 10:46',
    // lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
    comments: [
      {
        id: "4354354-5423543",
        ownerId: "gfdo5h43524v5-424vfr2vt4t",
        ownerEmail: "123@tut.by",
        ownerName: "Dzmitry Hlushak",
        photoUrl: "",
        text: "Greate work, Dzmitry!",
        createdAt: '17.10.2021, 10:00:08',
        lastUpdate: '17.10.2021, 10:00:08'
      },
      {
        id: "4354354-542fdsafds3543",
        ownerId: "gfdo5h43fdasfdsafds524v5-424vfr2vt4t",
        ownerEmail: "1fdsafdsfds23@tut.by",
        ownerName: "John Doe",
        photoUrl: "",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. \n\n Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
        createdAt: '17.10.2021, 11:32:08',
        lastUpdate: '17.10.2021, 11:32:08'
      }
    ],
    displayComments: true,
    articleAuthor: 'Some author',
    photoBy: 'Dzmitry Hlushak'
  },
  {
    id: 5, // generate uuidv4()
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam?`,
    shortDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Asperiores, consequuntur! Minima doloribus expedita similique suscipit ipsam, repellat
                ad debitis ea dolorum unde obcaecati quod accusamus laborum excepturi quaerat modi dolor fugit dignissimos repellendus!`,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, 
            amet voluptas! Qui iusto quis dolorum voluptate dolor necessitatibus natus 
            voluptatem molestias nisi aliquid optio repellendus aperiam hic corporis 
            beatae, dignissimos illo ea officia, culpa expedita sed! Dolore 
            aspernatur temporibus reiciendis nostrum consectetur praesentium fugit, 
            accusamus ullam. Ex ab fugiat exercitationem autem dolore maiores suscipit, 
            beatae minima quaerat quia amet sed quod at porro nostrum laudantium nisi 
            necessitatibus alias iure ullam ducimus ut. Rem inventore omnis eum ea 
            dignissimos soluta nobis in repudiandae cupiditate modi, alias dolor 
            praesentium quae quidem tempore officiis dolorum. Blanditiis, omnis sed atque quam totam sint mollitia?`,
    imgSrc: 'images/articles-img/arsenal.jpeg',
    status: 'normal', // ['normal', 'high', 'hot']
    public: true,
    createdAt: 'August 21, 2021 14:45',
    // lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
    comments: [],
    displayComments: true,
    articleAuthor: 'Some author',
    photoBy: 'Dzmitry Hlushak'
  },
  {
    id: 6, // generate uuidv4(),
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam?`,
    shortDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Asperiores, consequuntur! Minima doloribus expedita similique suscipit ipsam, repellat
                ad debitis ea dolorum unde obcaecati quod accusamus laborum excepturi quaerat modi dolor fugit dignissimos repellendus!`,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, 
            amet voluptas! Qui iusto quis dolorum voluptate dolor necessitatibus natus 
            voluptatem molestias nisi aliquid optio repellendus aperiam hic corporis 
            beatae, dignissimos illo ea officia, culpa expedita sed! Dolore 
            aspernatur temporibus reiciendis nostrum consectetur praesentium fugit, 
            accusamus ullam. Ex ab fugiat exercitationem autem dolore maiores suscipit, 
            beatae minima quaerat quia amet sed quod at porro nostrum laudantium nisi 
            necessitatibus alias iure ullam ducimus ut. Rem inventore omnis eum ea 
            dignissimos soluta nobis in repudiandae cupiditate modi, alias dolor 
            praesentium quae quidem tempore officiis dolorum. Blanditiis, omnis sed atque quam totam sint mollitia?`,
    imgSrc: 'images/articles-img/pl.jpg',
    status: 'high', // ['normal', 'high', 'hot']
    public: true,
    createdAt: 'August 21, 2021 13:20',
    // lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
    comments: [],
    displayComments: false,
    articleAuthor: 'Some author',
    photoBy: 'Dzmitry Hlushak'
  },
  {
    id: 7, // generate uuidv4(),
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam?`,
    shortDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Asperiores, consequuntur! Minima doloribus expedita similique suscipit ipsam, repellat
                ad debitis ea dolorum unde obcaecati quod accusamus laborum excepturi quaerat modi dolor fugit dignissimos repellendus!`,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, 
            amet voluptas! Qui iusto quis dolorum voluptate dolor necessitatibus natus 
            voluptatem molestias nisi aliquid optio repellendus aperiam hic corporis 
            beatae, dignissimos illo ea officia, culpa expedita sed! Dolore 
            aspernatur temporibus reiciendis nostrum consectetur praesentium fugit, 
            accusamus ullam. Ex ab fugiat exercitationem autem dolore maiores suscipit, 
            beatae minima quaerat quia amet sed quod at porro nostrum laudantium nisi 
            necessitatibus alias iure ullam ducimus ut. Rem inventore omnis eum ea 
            dignissimos soluta nobis in repudiandae cupiditate modi, alias dolor 
            praesentium quae quidem tempore officiis dolorum. Blanditiis, omnis sed atque quam totam sint mollitia?`,
    imgSrc: 'images/articles-img/ars-team.jpg',
    status: 'hot', // ['normal', 'high', 'hot']
    public: true,
    createdAt: 'August 21, 2021 12:00',
    // lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
    comments: [],
    displayComments: false,
    articleAuthor: 'Some author',
    photoBy: 'Dzmitry Hlushak'
  },
  {
    id: 8, // generate uuidv4()
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam? Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam?`,
    shortDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Asperiores, consequuntur! Minima doloribus expedita similique suscipit ipsam, repellat
                ad debitis ea dolorum unde obcaecati quod accusamus laborum excepturi quaerat modi dolor fugit dignissimos repellendus!`,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, 
            amet voluptas! Qui iusto quis dolorum voluptate dolor necessitatibus natus 
            voluptatem molestias nisi aliquid optio repellendus aperiam hic corporis 
            beatae, dignissimos illo ea officia, culpa expedita sed! Dolore 
            aspernatur temporibus reiciendis nostrum consectetur praesentium fugit, 
            accusamus ullam. Ex ab fugiat exercitationem autem dolore maiores suscipit, 
            beatae minima quaerat quia amet sed quod at porro nostrum laudantium nisi 
            necessitatibus alias iure ullam ducimus ut. Rem inventore omnis eum ea 
            dignissimos soluta nobis in repudiandae cupiditate modi, alias dolor 
            praesentium quae quidem tempore officiis dolorum. Blanditiis, omnis sed atque quam totam sint mollitia?`,
    imgSrc: 'images/articles-img/spain.jpg',
    status: 'normal', // ['normal', 'high', 'hot']
    public: true,
    createdAt: 'August 21, 2021 10:46',
    // lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
    comments: [],
    displayComments: true,
    articleAuthor: 'Some author',
    photoBy: 'Dzmitry Hlushak'
  },
  {
    id: 9, // generate uuidv4()
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam?`,
    shortDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Asperiores, consequuntur! Minima doloribus expedita similique suscipit ipsam, repellat
                ad debitis ea dolorum unde obcaecati quod accusamus laborum excepturi quaerat modi dolor fugit dignissimos repellendus!`,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, 
            amet voluptas! Qui iusto quis dolorum voluptate dolor necessitatibus natus 
            voluptatem molestias nisi aliquid optio repellendus aperiam hic corporis 
            beatae, dignissimos illo ea officia, culpa expedita sed! Dolore 
            aspernatur temporibus reiciendis nostrum consectetur praesentium fugit, 
            accusamus ullam. Ex ab fugiat exercitationem autem dolore maiores suscipit, 
            beatae minima quaerat quia amet sed quod at porro nostrum laudantium nisi 
            necessitatibus alias iure ullam ducimus ut. Rem inventore omnis eum ea 
            dignissimos soluta nobis in repudiandae cupiditate modi, alias dolor 
            praesentium quae quidem tempore officiis dolorum. Blanditiis, omnis sed atque quam totam sint mollitia?`,
    imgSrc: 'images/articles-img/arsenal.jpeg',
    status: 'normal', // ['normal', 'high', 'hot']
    public: true,
    createdAt: 'August 21, 2021 14:45',
    // lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
    comments: [],
    displayComments: true,
    articleAuthor: 'Some author',
    photoBy: 'Dzmitry Hlushak'
  },
  {
    id: 10, // generate uuidv4(),
    title: `Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor, magnam?`,
    shortDesc: `Lorem ipsum dolor sit amet consectetur, adipisicing elit. 
                Asperiores, consequuntur! Minima doloribus expedita similique suscipit ipsam, repellat
                ad debitis ea dolorum unde obcaecati quod accusamus laborum excepturi quaerat modi dolor fugit dignissimos repellendus!`,
    desc: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non, 
            amet voluptas! Qui iusto quis dolorum voluptate dolor necessitatibus natus 
            voluptatem molestias nisi aliquid optio repellendus aperiam hic corporis 
            beatae, dignissimos illo ea officia, culpa expedita sed! Dolore 
            aspernatur temporibus reiciendis nostrum consectetur praesentium fugit, 
            accusamus ullam. Ex ab fugiat exercitationem autem dolore maiores suscipit, 
            beatae minima quaerat quia amet sed quod at porro nostrum laudantium nisi 
            necessitatibus alias iure ullam ducimus ut. Rem inventore omnis eum ea 
            dignissimos soluta nobis in repudiandae cupiditate modi, alias dolor 
            praesentium quae quidem tempore officiis dolorum. Blanditiis, omnis sed atque quam totam sint mollitia?`,
    imgSrc: 'images/articles-img/pl.jpg',
    status: 'high', // ['normal', 'high', 'hot']
    public: true,
    createdAt: 'August 21, 2021 13:20',
    // lastUpdated: firebase.firestore.FieldValue.serverTimestamp(),
    comments: [],
    displayComments: false,
    articleAuthor: 'Some author',
    photoBy: 'Dzmitry Hlushak'
  },
];

export default articlesData;
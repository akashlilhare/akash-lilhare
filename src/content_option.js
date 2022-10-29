const logotext = "Avinash";
const meta = {
  title: "Avinash Shukla",
  description:
    "I’m Avinash Shukla Developer _ Full stack devloper,currently working in India",
};

const introdata = {
  title: "I’m Avinash Shukla",
  animated: {
    first: "I love coding",
    second: "I code cool websites",
    third: "I develop mobile apps",
  },
  description: `
    I am progressive minded and in tune with new developments in my field.
    I enjoy collective brainstorming sessions which allow me to coordinate activities to achieve a common goal.
  `,
  your_img_url:
    "https://scontent.frpr1-1.fna.fbcdn.net/v/t1.18169-9/26908030_161449951153087_5788582153468324546_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=09cbfe&_nc_ohc=coO19tWPW7kAX-LFkNw&_nc_ht=scontent.frpr1-1.fna&oh=00_AfDNlLmltBK5nbgbH6eSVn5pyn7QUA_rW0yrDcitRXFNZg&oe=6381BD28",
};

const dataabout = {
  title: "A bit about my self",
  aboutme: `I Love to work with "MERN" Stack. I have solved over 800 questions on leetcode and have also participated in many coding contests on codechef, codeforces. 
    I am Rank 1 in Geek for geeks College Ranking. I also have Intership Experience on building React Apps`,
};
const worktimeline = [
  {
    jobtitle: "ReactJs Intern",
    where: "MobileFirst Applications",
    date: "Sep - Present",
  },
  {
    jobtitle: "Full Stack Web Developer",
    where: "River House Technology",
    date: "July - Oct 2021",
  },
];

const skills = [
  {
    name: "C++",
    value: 80,
  },
  {
    name: "HTML/CSS",
    value: 85,
  },
  {
    name: "React-Native",
    value: 60,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "React",
    value: 60,
  },

  {
    name: "Node and Express",
    value: 60,
  },
];

const services = [
  {
    title: "Wordpress Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
  {
    title: "Mobile Apps",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed at nisl euismod urna bibendum sollicitudin.",
  },
];

const dataportfolio = [
  {
    img: "https://www.netsolutions.com/insights/wp-content/uploads/2021/11/why-your-business-needs-a-mobile-eCommerce-app.jpg",
    desctiption:
      "Build a custom eCommerce platform with React, Redux, Node, Express and MongoDB",
    link: "http://e-commerse-2000-mern.herokuapp.com/",
  },
  {
    img: "https://blog.alexdevero.com/wp-content/uploads/2015/10/masonry-gallery-example-e1512649711262.png",
    desctiption: "Build a Pinterest Clone with React, and Sanity",
    link: "https://social-mediaclone.netlify.app/",
  },
  {
    img: "https://www.passionateinmarketing.com/wp-content/uploads/2022/01/Cred.jpg",
    desctiption: "CRED UI Clone Sample",
    link: "https://singular-kleicha-7a4227.netlify.app/",
  },
  {
    img: "data:image/png;base64,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",
    desctiption: "Front-End Metro Profile",
    link: "https://www.frontendmentor.io/profile/Luci04/solutions",
  },

  {
    img: "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAVUAAACUCAMAAAAUEUq5AAAAP1BMVEUthcXfppPhSzLDNyY8qe5hve6l0+vi4uLcblUuhMcwis88qO44p/BFru18xu2i0u3F2+bhvrPfqZbdfWbgUTlQ/0w6AAABFklEQVR4nO3QyRGDMAAEMAfCmXDTf62U4P0yI5WgUuqmMn/rfv+lS6x9YNuHxPEJnNeYuJtEGwlSrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVq1atWqVatWrVp98eoD99Rf5jCojzMAAAAASUVORK5CYII=",
    desctiption: "Color Palette Build with React",
    link: "https://luci04.github.io/Color-Palette/",
  },
  {
    img: "https://github.com/Luci04/Sorting-Visualizer/raw/master/Sorting.gif",
    desctiption:
      "React Based Application Where You Can see what happen Over an Array when a Sorting Algo. is Applied",
    link: "https://luci04.github.io/Sorting-Visualizer/",
  },

  // {
  //   img: "https://picsum.photos/400/300/?grayscale",
  //   desctiption:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
  // {
  //   img: "https://picsum.photos/400/700/?grayscale",
  //   desctiption:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },

  // {
  //   img: "https://picsum.photos/400/600/?grayscale",
  //   desctiption:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
  // {
  //   img: "https://picsum.photos/400/300/?grayscale",
  //   desctiption:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
  // {
  //   img: "https://picsum.photos/400/?grayscale",
  //   desctiption:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
  // {
  //   img: "https://picsum.photos/400/550/?grayscale",
  //   desctiption:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
  // {
  //   img: "https://picsum.photos/400/?grayscale",
  //   desctiption:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
  // {
  //   img: "https://picsum.photos/400/700/?grayscale",
  //   desctiption:
  //     "The wisdom of life consists in the elimination of non-essentials.",
  //   link: "#",
  // },
];

const contactConfig = {
  YOUR_EMAIL: "avinashukla2000@gmail.com",
  YOUR_FONE: "+91-8827040821",
  // creat an emailjs.com account
  // check out this tutorial https://www.emailjs.com/docs/examples/reactjs/
  YOUR_SERVICE_ID: "service_whqqvgn",
  YOUR_TEMPLATE_ID: "template_g3lvh2q",
  YOUR_USER_ID: "_N_YVow0XZ97Jlxps",
};

const socialprofils = {
  whatsapp: "https://api.whatsapp.com/send?phone=918827040821",
  github: "https://github.com/luci04",
  linkedin: "https://linkedin.com/in/avinashukla",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};

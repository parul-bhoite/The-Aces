// Options the user could type in
const prompts = [
  ["hi", "hey", "hello", "good morning", "good afternoon"],
  ["how are you", "how is life", "how are things"],
  ["what are you doing", "what is going on", "what is up"],
  ["how old are you"],
  ["who are you", "are you human", "are you bot", "are you human or bot"],
  ["who created you", "who made you"],
  [
    "your name please",
    "your name",
    "may i know your name",
    "what is your name",
    "what call yourself",
  ],
  ["i love you"],
  ["happy", "good", "fun", "wonderful", "fantastic", "cool"],
  ["bad", "bored", "tired"],
  ["help me", "tell me story", "tell me joke"],
  ["ah", "yes", "ok", "okay", "nice"],
  ["bye", "good bye", "goodbye", "see you later"],
  ["what should i eat today"],
  ["bro"],
  ["what", "why", "how", "where", "when"],
  ["no", "not sure", "maybe", "no thanks"],
  [""],
  ["haha", "ha", "lol", "hehe", "funny", "joke"],
  [
    "who is my reporting manager",
    "reporting manager",
    "who is reporting manager",
  ],
  ["how many leaves", "number of leaves", "i want leave"],
  [
    "what is your life insurance policy",
    "life insurance policy",
    "death policy",
  ],
  [
    "what is the procedure for getting help from the it department in case of any technical help",
    "it team help",
    "technical help",
  ],
  [
    "tell me the core values of xebia",
    "core values",
    "foundation values of xebia",
  ],
  ["what help can you offer", "help", "help me", "guide me"],
  [
    "tell me something about your ceo",
    "who is your ceo",
    "who heads the global xebia",
  ],
  ["departments of xebia", "domains of xebia", "service lines of xebia", ""],
  ["what is the checkin and checkout process for employees"],
  ["what are the usage and access policies in xebia"],
  ["what are the core bussiness working hours here", "business hours"],
  [
    "what are the transportation facilities provided for the employees",
    "transport facilities",
    "commute options",
  ],
  ["tell me about the company", "about xebia", "xebia", "company"],
  [
    "working of xebia",
    "what is working roadmap of xebia?",
    "working of xebia?",
  ],
  [
    "what is the referral policy in xebia",
    "referral policy",
    "how to make a referral",
  ],
  [
    "what are the future scope and plans of the company",
    "future plans",
    "upcoming business strategy",
  ],
  ["what are some of the acquisitions made by xebia?", "acquisitions of xebia"],
];

// Possible responses, in corresponding order

const replies = [
  ["Hello!", "Hi!", "Hey!", "Hi there!", "Howdy"],
  [
    "Fine... how are you?",
    "Pretty well, how are you?",
    "Fantastic, how are you?",
  ],
  [
    "Nothing much",
    "About to go to sleep",
    "Can you guess?",
    "I don't know actually",
  ],
  ["I am infinite"],
  ["I am just a bot", "I am a bot. What are you?"],
  ["The one true God, JavaScript"],
  ["I am nameless", "I don't have a name"],
  ["I love you too", "Me too"],
  ["Have you ever felt bad?", "Glad to hear it"],
  ["Why?", "Why? You shouldn't!", "Try watching TV"],
  ["What about?", "Once upon a time..."],
  ["Tell me a story", "Tell me a joke", "Tell me about yourself"],
  ["Bye", "Goodbye", "See you later"],
  ["Sushi", "Pizza"],
  ["Bro!"],
  ["Great question"],
  ["That's ok", "I understand", "What do you want to talk about?"],
  ["Please say something :("],
  ["Haha!", "Good one!"],
  ["The People's experience team is headed globally by Glory Nelson"],

  ["An employee is applicable for pertaining a single leave per month"],

  [
    "There are 2 types of Life Insurance policies that we offer for our employees.\n \n1. Employee Insurance - covers employees and their spouse and child \n\n2. Family Insurance - covers parents of the employee but either their own or their in-laws and no combinations can be formed. ",
  ],
  [
    "Procedure for getting in touch with IT department if quite simple, in some few easy steps:\n \n1. Open the Xenie app for Android or the Xenie web portal in case IOS/Laptops/Workstations.\n\n2. Login with your Xebia Email address and OTP over email.\n\n3. Go to the ticket section and create a new ticket based on your issue or the help required.\n4. The call will be raised, and a technical expert will be assigned for the task, the expert will connect to you in solving the issue/help required.\n This whole procedure is normally completed in a single working day.",
  ],
  [
    "Xebia is built upon 4 core values: \n\nPeople First, Sharing Knowledge, Customer Intimacy, Quality Without Compromise",
  ],
  [
    "Hello! I can offer help in the following areas: policies, admin, IT, onboarding, payroll, project assignment, manager etc.",
  ],
  [
    "Our current global CEO is Mr. Anand Sahay.\n\n Based in Delhi, Sahay joined Xebia in 2014 as CEO (a title shared by colleagues Andrew de la Haije and Wojtek Gurgul) to drive the firms international expansion. Prior to joining Xebia, Sahay was a vice president at Interglobe and a general manager at HCL Technologies. He began his career as a software programmer at Tata Consultancy Services. Sahay has an MBA from Duke University and a bachelors degree in electronics engineering from the Birla Institute of Technology, India.",
  ],
  [
    "Here at Xebia, we are organized as follows:\n\nTransformations\nData and AI\nCloud Solutions\nSoftware Technology\nLow Code\nMicrosoft Solutions ",
  ],
  [
    "Our employees are required to check-in every workday on the Zoho people portal for our employees.\n\nWe have 45 hours (about 2 days) per week policy, so you must work 9 hour per day in office  ",
  ],
  [
    "we have some restrictions here on use of the internet, you cant use xebia intranet or Wi-Fi on your phones.\n there are restrictions on using social media and unlicensed unauthorized software without due permission from the IT team. ",
  ],
  ["10 A.M. to 4 P.M"],
  [
    "Employees are provided with a transportation facility from the office building to the nearest rapid metro station I.e., Sector 55-56 rapid metro station.\n\nOther than that, if in case a female employee must stay in office for meeting project deadline or any other work-related issue, she can contact the admin office for arranging a form a transportation to safely reach their home. ",
  ],
  [
    "Founded in 2001, Xebia was the first organization to embrace the Agile way of working, with gurus like Jeff Sutherland. Since then, we have grown from a Java company into a full-service digital consulting company working on a worldwide ambition. ",
  ],
  [
    "We are organized in complementary chapters\n\n teams with a tremendous amount of knowledge and experience within a particular field, such as Agile, DevOps, Data and AI, Cloud, Software Technology, Low Code, and Microsoft.\n\n We help the world’s top 250 companies and category leaders overcome digital challenges, embrace innovation, adopt new technology, and implement new business models. In addition to high-quality consulting, we also provide offshoring and nearshoring services ",
  ],
  [
    " An Xebian can start referring talented individuals into Xebia as soon as the employee is at the position of a Junior Consultant and based on the position for which the referral was for the employee will be given a referral bonus between 10K to 75K in partly payments, first at the joining of the referred employee and secondly when the employee completes 6 months in the organization. ",
  ],
  [
    "To acquire more companies in the US, UK and Continental Europe. Expand our working expertise and domain knowledge by joining hands and opening offices in the middle East, Australia etc. To make the company a billion-dollar company in the upcoming years. ",
  ],
  [
    "Netlink Digital Solutions, 47 Degrees, Appcino Technologies, SwissQ Consulting AG, coMakeIT, GoData Driven ",
  ],
];

// Random for any other user input

const alternative = [
  "Same",
  "Go on...",
  "Bro...",
  "Try again",
  "I'm listening...",
  "I don't understand :/",
];

// Whatever else you want :)

const coronavirus = [
  "Please stay home",
  "Wear a mask",
  "Fortunately, I don't have COVID",
  "These are uncertain times",
];

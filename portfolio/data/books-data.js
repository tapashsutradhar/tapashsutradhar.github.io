/* ═══════════════════════════════════════════════════════════════
   TAPASH SUTRADHAR — BOOKS DATABASE
   File: data/books-data.js

   HOW TO ADD A NEW BOOK:
   Copy one book object from the array below, paste it at the top
   (or bottom), fill in your details, and save. That's it.
   The page rebuilds automatically.

   FIELDS:
   id         — unique number, increment by 1 each time
   title      — full book title
   author     — author name(s)
   cover      — path to cover image  e.g. "images/books/clean-code.jpg"
                 (leave "" to show a styled placeholder)
   genre      — one of: "Technical" | "Self-Help" | "Business" | "Data Science"
                          | "Leadership" | "Psychology" | "Finance" | "Design"
   rating     — 1 to 5  (your personal rating)
   dateRead   — "YYYY-MM" format  e.g. "2024-03"
   pages      — number of pages (optional, use 0 if unknown)
   amazon     — amazon/goodreads link (or "" to hide)
   summary    — 2–3 sentence overview of what the book is about
   keyLearnings — array of strings, each one lesson you took away
   whoShouldRead — one sentence on who benefits most from this book
   myTake     — your personal honest opinion in 1–2 sentences
═══════════════════════════════════════════════════════════════ */

const BOOKS = [

  {
    id: 1,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    cover: "../images/books/clean-code.jpg",
    genre: "Technical",
    rating: 5,
    dateRead: "2024-06",
    pages: 431,
    amazon: "https://www.amazon.com/Clean-Code-Handbook-Software-Craftsmanship/dp/0132350882",
    summary: "A definitive guide on writing readable, maintainable, and professional-grade code. Martin explains that writing clean code is not just about making it work — it is about making it easy for other humans to understand, modify, and extend. The book covers naming, functions, error handling, unit testing, and refactoring with real Java code examples.",
    keyLearnings: [
      "Good names are the foundation — a well-named variable or function removes the need for a comment",
      "Functions should do ONE thing only — if you can describe what it does without using 'and', it is clean",
      "Comments are often a failure to express intent in code — write self-documenting code instead",
      "The Boy Scout Rule: always leave the code cleaner than you found it",
      "Unit tests are not optional — they enable fearless refactoring and confident changes",
      "Error handling with exceptions is far cleaner than returning error codes",
      "Classes should have a single responsibility — this makes testing and maintenance much easier"
    ],
    whoShouldRead: "Every software engineer, regardless of experience level — essential reading before joining a professional team.",
    myTake: "This book completely changed how I write code at Seap Infotech. I now review every function I write against the principles here. The difference in readability of my pull requests was noticed within weeks."
  },

  {
    id: 2,
    title: "The Pragmatic Programmer: Your Journey to Mastery",
    author: "David Thomas & Andrew Hunt",
    cover: "../images/books/the-pragmatic-programmer.jpg",
    genre: "Technical",
    rating: 5,
    dateRead: "2024-09",
    pages: 352,
    amazon: "https://www.amazon.com/Pragmatic-Programmer-journey-mastery-Anniversary/dp/0135957052",
    summary: "A collection of career and technical wisdom that helps developers think beyond just writing code. The authors guide you to be a craftsman who takes ownership of your career, your tools, and your output. It covers everything from DRY principles and orthogonality to career development and communication.",
    keyLearnings: [
      "DRY — Don't Repeat Yourself: every piece of knowledge should have one authoritative source",
      "Orthogonality: changes in one component should not affect unrelated components",
      "Fix broken windows immediately — neglected code invites more neglect",
      "Tracer bullet development: build thin end-to-end slices first to validate architecture early",
      "Invest regularly in your knowledge portfolio just like a financial portfolio",
      "Write code that is easy to test — if it is hard to test, the design is probably wrong",
      "Automate everything that can be automated — manual steps are a source of errors"
    ],
    whoShouldRead: "Mid-level developers who want to level up from writing code to thinking like a senior engineer.",
    myTake: "The 'broken windows' concept alone was worth reading the entire book. I applied it directly to legacy test scripts at work — small cleanups compounded into much more maintainable automation suites."
  },

  {
    id: 3,
    title: "Designing Data-Intensive Applications",
    author: "Martin Kleppmann",
    cover: "../images/books/designing-data-intensive-applications.jpg",
    genre: "Data Science",
    rating: 5,
    dateRead: "2025-01",
    pages: 616,
    amazon: "https://www.amazon.com/Designing-Data-Intensive-Applications-Reliable-Maintainable/dp/1449373321",
    summary: "The most comprehensive book on how modern data systems are built, from databases and caching to stream processing and distributed systems. Kleppmann explains the trade-offs behind every architectural decision with exceptional clarity. This is the definitive guide to understanding why systems behave the way they do under load and failure.",
    keyLearnings: [
      "Reliability, scalability, and maintainability are the three core pillars of data systems",
      "Understanding the difference between OLTP and OLAP workloads changes how you design schemas",
      "Replication lag is unavoidable in distributed systems — your application must handle eventual consistency",
      "The CAP theorem: a distributed system can only guarantee two of Consistency, Availability, Partition tolerance",
      "Batch processing (MapReduce) vs stream processing (Kafka) serve fundamentally different use cases",
      "Indexes are a trade-off — they speed up reads but slow down writes and use storage",
      "Transactions are not magic — understanding isolation levels prevents subtle data bugs"
    ],
    whoShouldRead: "Data engineers, backend engineers, and anyone building systems that store or process significant data at scale.",
    myTake: "This book directly helped me at WBSETCL when designing our ETL pipeline. Understanding trade-offs between batch and stream processing meant I could justify architectural decisions to the team with confidence."
  },

  {
    id: 4,
    title: "Atomic Habits",
    author: "James Clear",
    cover: "../images/books/atomic-habits.jpg",
    genre: "Self-Help",
    rating: 5,
    dateRead: "2023-11",
    pages: 320,
    amazon: "https://www.amazon.com/Atomic-Habits-Proven-Build-Break/dp/0735211299",
    summary: "A practical framework for building good habits and breaking bad ones by making tiny 1% improvements that compound over time. Clear argues that goals are less important than systems, and that identity-based habits — deciding who you want to be — are more sustainable than outcome-based ones. Every concept is backed by psychology and real examples.",
    keyLearnings: [
      "Forget about goals — focus on systems. Goals are good for setting direction, systems are good for making progress",
      "Identity-based habits: every action is a vote for the type of person you want to become",
      "The habit loop: Cue → Craving → Response → Reward — change any step to change the habit",
      "Make good habits obvious, attractive, easy, and satisfying; make bad habits invisible, unattractive, hard, and unsatisfying",
      "The 2-minute rule: make any new habit take less than 2 minutes to start",
      "Environment design matters more than motivation — design your environment to make good choices easier",
      "Never miss twice — one missed day is an accident, two is the start of a new (bad) habit"
    ],
    whoShouldRead: "Anyone who struggles with consistency — engineers, students, professionals who want to build disciplined learning and work habits.",
    myTake: "I applied the environment design principle to my daily learning routine. Moving my programming books to my desk (instead of a shelf) increased my reading time substantially. Simple but powerful."
  },

  {
    id: 5,
    title: "The Phoenix Project",
    author: "Gene Kim, Kevin Behr & George Spafford",
    cover: "../images/books/the-phoenix-project.jpg",
    genre: "Business",
    rating: 4,
    dateRead: "2024-03",
    pages: 345,
    amazon: "https://www.amazon.com/Phoenix-Project-DevOps-Helping-Business/dp/1942788290",
    summary: "A novel about an IT manager thrown into a failing IT project and how DevOps thinking saves the company. Written as fiction, it brilliantly illustrates why traditional IT workflows fail and how applying manufacturing principles (The Three Ways) to software delivery transforms teams. It makes abstract concepts like WIP limits and flow visible through story.",
    keyLearnings: [
      "The Three Ways: Flow (fast delivery), Feedback (quick error detection), Continual Learning (experimentation culture)",
      "Work in progress is the silent killer — the more WIP, the slower everything moves",
      "Every IT system has four work types: Business projects, Internal projects, Changes, and Unplanned work",
      "Unplanned work is the most dangerous — it destroys predictability and planned work's throughput",
      "Constraints (bottlenecks) control the throughput of the entire system — find and protect them",
      "DevOps is not a tool — it is a cultural shift in how Dev and Ops collaborate",
      "Small batch sizes and frequent deployments reduce risk, not increase it"
    ],
    whoShouldRead: "Software engineers and team leads who want to understand DevOps culture in an engaging, story-driven format.",
    myTake: "Reading this while setting up CI/CD pipelines at work gave me the 'why' behind every Jenkins and GitHub Actions decision. I recommended it to my entire team."
  },

  {
    id: 6,
    title: "Python for Data Analysis",
    author: "Wes McKinney",
    cover: "../images/books/python-for-data-analysis.jpg",
    genre: "Data Science",
    rating: 4,
    dateRead: "2024-01",
    pages: 579,
    amazon: "https://www.amazon.com/Python-Data-Analysis-Wrangling-IPython/dp/1491957662",
    summary: "The definitive guide to data wrangling with Python, written by the creator of pandas itself. McKinney walks through NumPy, pandas, matplotlib, and real data cleaning workflows with practical examples. This is less a theory book and more a hands-on reference you use while actually doing data work.",
    keyLearnings: [
      "Vectorized operations in NumPy and pandas are orders of magnitude faster than Python loops",
      "Data cleaning is 80% of the job — pandas gives you the tools, but judgment comes from practice",
      "GroupBy is one of the most powerful patterns in data analysis — master split-apply-combine",
      "Time series data requires special handling — timezone awareness prevents silent bugs in production",
      "Merging dataframes is like SQL joins — understanding left/right/inner/outer prevents data loss",
      "Missing data is not an error — it is information; handle it explicitly, never assume",
      "Method chaining makes data pipelines readable and testable as a single expression"
    ],
    whoShouldRead: "Data analysts and data engineers who use Python daily and want to write faster, cleaner data transformation code.",
    myTake: "This was my reference while building the Power BI ETL pipelines at WBSETCL. I still open it when working with complex time-series aggregations."
  },

  {
    id: 7,
    title: "Accelerate: The Science of Lean Software and DevOps",
    author: "Nicole Forsgren, Jez Humble, Gene Kim",
    cover: "../images/books/accelerate.jpg",
    genre: "Technical",
    rating: 5,
    dateRead: "2026-04",
    pages: 288,
    amazon: "https://www.amazon.in/Accelerate-Software-Performing-Technology-Organizations/dp/1942788339",
    summary: "This book presents research-backed insights into what makes high-performing technology teams successful. It connects DevOps practices to measurable business outcomes like speed, stability, and productivity.",
    keyLearnings: [
      "High performance comes from continuous delivery and fast feedback loops",
      "DevOps practices directly impact business success",
      "Small batch sizes reduce risk and improve quality",
      "Culture and leadership are as important as tools"
    ],
    whoShouldRead: "Software engineers, DevOps practitioners, and tech leaders aiming to improve delivery performance",
    myTake: "Very practical and data-driven—one of the most credible books on DevOps. It changed how I think about engineering performance."
  },

  {
  id: 8,
  title: "The Unicorn Project",
  author: "Gene Kim",
  cover: "../images/books/the-unicorn-project.jpg",
  genre: "Technical",
  rating: 4,
  dateRead: "2026-04",
  pages: 352,
  amazon: "",
  summary: "A novel that follows a developer navigating a dysfunctional organization while trying to improve systems and processes. It highlights the importance of developer experience, flow, and modern engineering practices.",
  keyLearnings: [
    "Developer productivity depends heavily on system design and tooling",
    "Technical debt slows down innovation significantly",
    "Empowered teams create better outcomes",
    "Flow and fast feedback are critical for modern development"
  ],
  whoShouldRead: "Developers and engineering leaders dealing with legacy systems or organizational inefficiencies",
  myTake: "Engaging story format that makes technical concepts easy to grasp. Slightly idealistic at times, but very insightful."
},

{
  id: 9,
  title: "The Culture Map",
  author: "Erin Meyer",
  cover: "../images/books/the-culture-map.jpg",
  genre: "Business",
  rating: 4,
  dateRead: "2026-04",
  pages: 288,
  amazon: "",
  summary: "This book explores how cultural differences impact communication, leadership, and teamwork across global organizations. It provides practical frameworks to navigate and bridge these differences effectively.",
  keyLearnings: [
    "Communication styles vary widely across cultures",
    "Direct vs indirect feedback can cause misunderstandings",
    "Trust is built differently in different cultures",
    "Leadership and decision-making styles are culturally influenced"
  ],
  whoShouldRead: "Professionals working in global teams or cross-cultural environments",
  myTake: "Very practical for real-world work situations. It makes you more aware of subtle cultural differences that often go unnoticed."
},

{
  id: 10,
  title: "Thinking, Fast and Slow",
  author: "Daniel Kahneman",
  cover: "../images/books/thinking-fast-and-slow.jpg",
  genre: "Psychology",
  rating: 5,
  dateRead: "2026-04",
  pages: 499,
  amazon: "",
  summary: "This book explores how humans think using two systems: fast, intuitive thinking and slow, logical reasoning. It reveals common cognitive biases that affect decisions.",
  keyLearnings: [
    "System 1 is fast but error-prone",
    "System 2 is slow but logical",
    "Biases influence everyday decisions",
    "Awareness can improve judgment"
  ],
  whoShouldRead: "Anyone interested in decision-making, psychology, or behavioral science",
  myTake: "Dense but extremely insightful. It changes how you see your own thinking."
},

{
  id: 11,
  title: "The Lean Startup",
  author: "Eric Ries",
  cover: "../images/books/the-lean-startup.jpg",
  genre: "Business",
  rating: 4,
  dateRead: "2026-04",
  pages: 336,
  amazon: "",
  summary: "This book introduces a methodology for building startups through validated learning and rapid experimentation. It emphasizes building products based on customer feedback.",
  keyLearnings: [
    "Build-Measure-Learn is the core loop",
    "Start with a minimum viable product (MVP)",
    "Validated learning reduces wasted effort",
    "Pivot when assumptions are wrong"
  ],
  whoShouldRead: "Entrepreneurs and product builders looking to launch efficiently",
  myTake: "Very influential for startups. Some concepts feel obvious now, but still foundational."
},

{
  id: 12,
  title: "Deep Work: Rules for Focused Success in a Distracted World",
  author: "Cal Newport",
  cover: "../images/books/deep-work.jpg",
  genre: "Self-Help",
  rating: 4,
  dateRead: "2026-04",
  pages: 304,
  amazon: "",
  summary: "This book argues that the ability to focus deeply is becoming rare and valuable. It provides strategies to cultivate deep work and eliminate distractions.",
  keyLearnings: [
    "Deep focus produces higher-quality output",
    "Distractions reduce cognitive performance",
    "Schedule focused work intentionally",
    "Limit shallow work to maximize impact"
  ],
  whoShouldRead: "Students, professionals, and creators who struggle with focus and productivity",
  myTake: "Strong ideas, though slightly repetitive. Still very useful in today's distraction-heavy world."
},

{
  id: 13,
  title: "The Personal MBA: Master the Art of Business",
  author: "Josh Kaufman",
  cover: "../images/books/the-personal-mba.jpg",
  genre: "Business",
  rating: 4,
  dateRead: "2026-04",
  pages: 416,
  amazon: "",
  summary: "This book breaks down core business concepts into simple, practical lessons without requiring a formal MBA. It covers areas like value creation, marketing, sales, finance, and systems thinking.",
  keyLearnings: [
    "Business is about creating and delivering value",
    "Understanding systems helps in better decision-making",
    "Sales and marketing are essential for success",
    "Financial literacy is crucial for any professional"
  ],
  whoShouldRead: "Anyone who wants to understand business fundamentals without going to business school",
  myTake: "A solid alternative to an MBA for self-learners. Broad coverage, though not very deep in each topic."
},

{
  id: 14,
  title: "HBR's 10 Must Reads",
  author: "Harvard Business Review",
  cover: "../images/books/hbr-10-must-reads.jpg",
  genre: "Business",
  rating: 5,
  dateRead: "2026-04",
  pages: 2656,
  amazon: "",
  summary: "This collection brings together some of the most influential articles from Harvard Business Review on topics like leadership, strategy, innovation, and management. Each piece is written by experts and provides practical insights for real-world business challenges.",
  keyLearnings: [
    "Effective leadership requires both vision and execution",
    "Strategy is about making clear choices and trade-offs",
    "Innovation comes from understanding customer needs deeply",
    "Managing people is as important as managing processes"
  ],
  whoShouldRead: "Managers, entrepreneurs, and professionals looking to build strong business and leadership skills",
  myTake: "A high-value collection of timeless business insights. Great for quick learning, though depth varies by article."
}

];

/* ═══════════════════════════════════════════════════════════════
   HOW TO ADD YOUR NEXT BOOK — copy this template:

  {
    id: 7,
    title: "Book Title Here",
    author: "Author Name",
    cover: "",
    genre: "Technical",
    rating: 5,
    dateRead: "2025-06",
    pages: 300,
    amazon: "",
    summary: "What this book is about in 2-3 sentences.",
    keyLearnings: [
      "First thing you learned",
      "Second thing you learned",
      "Third thing you learned"
    ],
    whoShouldRead: "One sentence on who benefits most.",
    myTake: "Your honest personal opinion in 1-2 sentences."
  },

═══════════════════════════════════════════════════════════════ */

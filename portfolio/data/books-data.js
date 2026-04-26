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
   fullSummary: a longer, more detailed summary (optional, can be same as summary) // Long — shows in the expanded Summary section (use ## for headings, - for bullets, **bold**)
   keyLearnings — array of strings, each one lesson you took away
   whoShouldRead — one sentence on who benefits most from this book
   myTake     — your personal honest opinion in 1–2 sentences
═══════════════════════════════════════════════════════════════ */

const BOOKS = [







  {
  id: 20,
  title: "Python for Data Analysis",
  author: "Wes McKinney",
  cover: "../images/books/python-for-data-analysis.jpg",
  genre: "Data Science",
  rating: 4,
  dateRead: "2026-04",
  pages: 544,
  amazon: "",
  summary: "A hands-on guide to using Python for data analysis, focusing on libraries like pandas, NumPy, and matplotlib. It teaches how to clean, transform, and analyze real-world datasets.",
  fullSummary: `## The Core Idea: Practical Data Analysis with Python
      The book focuses on real-world data tasks using Python.

      ## Core Libraries
      - pandas (data manipulation)
      - NumPy (numerical computing)
      - matplotlib (visualization)

      ## Data Cleaning
      Real data is messy:

      - Missing values
      - Inconsistent formats
      - Errors

      Cleaning is a major part of analysis.

      ## Data Transformation
      - Filtering
      - Aggregation
      - Group operations

      ## Analysis and Visualization
      Extract insights and present them clearly.

      ## Final Thought
      Data analysis is about turning raw data into meaningful insights.`,
  keyLearnings: [
    "pandas is essential for data manipulation",
    "Data cleaning is critical",
    "Transforming data reveals insights",
    "Visualization helps understanding",
    "Practical skills matter more than theory"
  ],
  whoShouldRead: "Data analysts, developers, and anyone working with data.",
  myTake: "Very practical and hands-on. Best learned by coding along."
},

  {
  id: 19,
  title: "Atomic Habits",
  author: "James Clear",
  cover: "../images/books/atomic-habits.jpg",
  genre: "Self-Help",
  rating: 5,
  dateRead: "2026-04",
  pages: 320,
  amazon: "",
  summary: "A practical guide to building good habits and breaking bad ones through small, consistent changes. It focuses on systems, identity, and environment design.",
  fullSummary: `## The Core Idea: Small Habits, Big Results
      Tiny improvements compound over time.

      ## The Habit Loop
      - Cue → Craving → Response → Reward

      Understanding this loop helps change behavior.

      ## Identity-Based Habits
      Focus on who you want to become:

      - Identity drives behavior
      - Habits reinforce identity

      ## Systems vs Goals
      - Goals set direction
      - Systems drive progress

      ## Environment Design
      Make good habits easy and bad habits hard.

      ## Final Thought
      Consistency beats intensity in long-term growth.`,
  keyLearnings: [
    "Small habits compound over time",
    "Focus on systems, not goals",
    "Identity shapes behavior",
    "Environment influences habits",
    "Consistency is key"
  ],
  whoShouldRead: "Anyone looking to improve habits and productivity.",
  myTake: "Simple, practical, and effective. Easy to apply in daily life."
},

  {
  id: 18,
  title: "HBR's 10 Must Reads",
  author: "Harvard Business Review",
  cover: "../images/books/hbr-10-must-reads.jpg",
  genre: "Business",
  rating: 5,
  dateRead: "2026-04",
  pages: 2656,
  amazon: "",
  summary: "A curated collection of the most influential Harvard Business Review articles covering leadership, strategy, innovation, and management.",
  fullSummary: `## The Core Idea: Timeless Business Insights
      This book compiles key ideas from top thinkers.

      ## Leadership
      - Effective leaders combine vision and execution
      - Emotional intelligence matters

      ## Strategy
      - Strategy is about making choices
      - Trade-offs are necessary

      ## Innovation
      - Understand customer needs deeply
      - Adapt to change

      ## Management
      - People management is critical
      - Culture drives performance

      ## Final Thought
      Strong leadership and clear strategy drive business success.`,
  keyLearnings: [
    "Leadership requires both vision and execution",
    "Strategy involves trade-offs",
    "Innovation comes from customer understanding",
    "People management is essential",
    "Culture impacts performance"
  ],
  whoShouldRead: "MBA students, Professionals who want to understand the business, Entrepreneurs, leaders, and business professionals who want to build strong business and leadership skills.",
  myTake: "High-value insights in a short format. Great for quick learning."
},

  {
  id: 17,
  title: "The Personal MBA: Master the Art of Business",
  author: "Josh Kaufman",
  cover: "../images/books/the-personal-mba.jpg",
  genre: "Business",
  rating: 4,
  dateRead: "2026-04",
  pages: 416,
  amazon: "",
  summary: "A comprehensive overview of essential business concepts without requiring a formal MBA. It covers value creation, marketing, sales, finance, and systems thinking.",
  fullSummary: `## The Core Idea: Learn Business Without an MBA
      The book breaks down business into simple, practical concepts.

      ## Five Parts of Every Business
      - Value creation
      - Marketing
      - Sales
      - Value delivery
      - Finance

      ## Systems Thinking
      Businesses are systems:

      - Inputs → Processes → Outputs
      - Understanding systems improves decisions

      ## Marketing and Sales
      - Marketing attracts attention
      - Sales converts interest into revenue

      ## Financial Basics
      - Profit = revenue - cost
      - Cash flow is critical

      ## Final Thought
      Business success comes from understanding core principles, not degrees.`,
  keyLearnings: [
    "Business is about creating and delivering value",
    "Systems thinking improves decision-making",
    "Sales and marketing are essential",
    "Financial literacy is important",
    "Simple concepts drive success"
  ],
  whoShouldRead: "Anyone who wants to understand business fundamentals.",
  myTake: "Broad and practical. Great starting point for business knowledge."
},

  {
  id: 16,
  title: "Deep Work: Rules for Focused Success in a Distracted World",
  author: "Cal Newport",
  cover: "../images/books/deep-work.jpg",
  genre: "Self-Help",
  rating: 4,
  dateRead: "2026-04",
  pages: 304,
  amazon: "",
  summary: "A guide to developing the ability to focus deeply on meaningful work in a world full of distractions. It explains how deep focus leads to higher productivity and better results.",
  fullSummary: `## The Core Idea: Deep Work is a Superpower
      Deep work is the ability to focus without distraction on cognitively demanding tasks.

      It is becoming rare but increasingly valuable.

      ## Shallow Work vs Deep Work
      - <b>Shallow Work:</b> Emails, meetings, low-value tasks
      - <b>Deep Work:</b> High-focus, high-value creation

      Success depends on prioritizing deep work.

      ## Focus and Distraction
      Constant distractions reduce productivity:

      - Social media
      - Notifications
      - Multitasking

      Focus must be trained deliberately.

      ## Work Strategies
      Techniques include:

      - Time blocking
      - Eliminating distractions
      - Scheduling deep work sessions

      ## Skill Development
      Deep work improves:

      - Learning speed
      - Problem-solving ability
      - Output quality

      ## Final Thought
      The ability to focus deeply is one of the most valuable skills in modern work.`,
  keyLearnings: [
    "Deep work produces high-quality output",
    "Distractions reduce performance",
    "Focus must be trained",
    "Schedule time for deep work",
    "Shallow work should be minimized"
  ],
  whoShouldRead: "Students, developers, and professionals seeking better focus.",
  myTake: "Very practical. Helps you take control of your attention in a distracted world."
},

  {
  id: 15,
  title: "Thinking, Fast and Slow",
  author: "Daniel Kahneman",
  cover: "../images/books/thinking-fast-and-slow.jpg",
  genre: "Psychology",
  rating: 5,
  dateRead: "2026-04",
  pages: 499,
  amazon: "",
  summary: "A deep exploration of how humans think and make decisions, introducing two systems of thought: fast, intuitive thinking and slow, analytical reasoning. It reveals the biases and errors that influence everyday judgment.",
  fullSummary: `## The Core Idea: Two Systems of Thinking
      The human mind operates using two systems:

      - <b>System 1:</b> Fast, automatic, intuitive
      - <b>System 2:</b> Slow, deliberate, logical

      Most decisions are made using System 1, which is efficient but prone to errors.

      ## Cognitive Biases
      The book highlights common biases:

      - Anchoring bias
      - Availability heuristic
      - Overconfidence

      These biases distort judgment.

      ## Heuristics
      Mental shortcuts help us decide quickly but can lead to mistakes.

      ## Prospect Theory
      People fear losses more than they value gains.

      - Losses feel stronger than equivalent gains
      - This affects risk-taking behavior

      ## Decision Making
      Better decisions require:

      - Slowing down thinking
      - Questioning assumptions
      - Using data over intuition

      ## Final Thought
      Understanding how you think helps you make better decisions and avoid predictable errors.`,
  keyLearnings: [
    "System 1 is fast but error-prone",
    "System 2 is slow but more accurate",
    "Biases affect everyday decisions",
    "Losses feel stronger than gains",
    "Awareness improves decision-making"
  ],
  whoShouldRead: "Anyone interested in psychology, decision-making, or behavioral economics.",
  myTake: "Deep and insightful. It changes how you think about your own thinking."
},

  {
  id: 14,
  title: "The Culture Map",
  author: "Erin Meyer",
  cover: "../images/books/the-culture-map.jpg",
  genre: "Business",
  rating: 4,
  dateRead: "2026-04",
  pages: 288,
  amazon: "",
  summary: "A guide to understanding how cultural differences affect communication, leadership, and teamwork in global organizations.",
  fullSummary: `## The Core Idea: Culture Shapes Behavior
      Different cultures communicate and work differently.

      Misunderstandings often come from these differences.

      ## Communication Styles
      - High-context vs low-context communication
      - Direct vs indirect feedback

      ## Trust and Leadership
      - Trust can be task-based or relationship-based
      - Leadership expectations vary across cultures

      ## Decision Making
      - Some cultures are top-down
      - Others are consensus-driven

      ## Final Thought
      Understanding cultural differences improves collaboration.`,
  keyLearnings: [
    "Communication styles differ across cultures",
    "Feedback can be direct or indirect",
    "Trust is built differently worldwide",
    "Leadership expectations vary",
    "Cultural awareness improves teamwork"
  ],
  whoShouldRead: "Professionals working in global teams.",
  myTake: "Very practical for working with international teams."
},

  {
  id: 13,
  title: "The Unicorn Project",
  author: "Gene Kim",
  cover: "../images/books/the-unicorn-project.jpg",
  genre: "Technical",
  rating: 4,
  dateRead: "2026-04",
  pages: 352,
  amazon: "",
  summary: "A novel that explores the challenges developers face in complex organizations and how modern engineering practices improve productivity and innovation.",
  fullSummary: `## The Core Idea: Developer Experience Matters
      The story follows a developer navigating a broken system.

      It highlights:
      - Poor processes
      - Technical debt
      - Lack of empowerment

      ## The Five Ideals
      The book introduces key principles:

      - Locality and simplicity
      - Focus and flow
      - Improvement of daily work
      - Psychological safety
      - Customer focus

      ## System Thinking
      Productivity depends on the system—not just individuals.

      ## Final Thought
      Empowered developers with good systems create better outcomes.`,
  keyLearnings: [
    "Developer productivity depends on systems and tools",
    "Technical debt slows innovation",
    "Empowered teams perform better",
    "Flow and focus are critical",
    "Improvement should be continuous"
  ],
  whoShouldRead: "Developers and engineering leaders.",
  myTake: "Story-based and easy to understand. Great for seeing real-world problems in tech teams."
},

  {
  id: 12,
  title: "Accelerate: The Science of Lean Software and DevOps",
  author: "Nicole Forsgren, Jez Humble, Gene Kim",
  cover: "../images/books/accelerate.jpg",
  genre: "Technical",
  rating: 5,
  dateRead: "2026-04",
  pages: 288,
  amazon: "",
  summary: "A research-based book that shows how high-performing software teams achieve better results through DevOps practices. It links engineering practices directly to business performance.",
  fullSummary: `## The Core Idea: DevOps Drives Performance
      This book uses data to prove that DevOps practices improve:

      - Deployment speed
      - System stability
      - Business outcomes

      ## The Four Key Metrics
      High-performing teams measure:

      - Deployment frequency
      - Lead time for changes
      - Mean time to recovery (MTTR)
      - Change failure rate

      These metrics define performance.

      ## Continuous Delivery
      Frequent, small releases:

      - Reduce risk
      - Improve feedback speed
      - Increase reliability

      ## Culture Matters
      Team culture is critical:

      - Trust and collaboration
      - Shared responsibility
      - Continuous improvement

      ## Automation
      Automating testing and deployment:

      - Reduces errors
      - Speeds up delivery
      - Improves consistency

      ## Final Thought
      High performance comes from combining technical practices with strong culture.`,
  keyLearnings: [
    "Measure performance using key DevOps metrics",
    "Small, frequent releases reduce risk",
    "Automation improves speed and reliability",
    "Culture is as important as tools",
    "DevOps directly impacts business success"
  ],
  whoShouldRead: "Developers, DevOps engineers, and engineering leaders.",
  myTake: "Very credible and data-driven. It validates what actually works in high-performing teams."
},

  {
  id: 11,
  title: "Designing Data-Intensive Applications",
  author: "Martin Kleppmann",
  cover: "../images/books/designing-data-intensive-applications.jpg",
  genre: "Technical",
  rating: 5,
  dateRead: "2026-04",
  pages: 616,
  amazon: "",
  summary: "A deep dive into how modern data systems are designed, covering databases, distributed systems, and scalability. It explains the trade-offs behind reliability, consistency, and performance.",
  fullSummary: `## The Core Idea: Understanding Data Systems
      This book explains how large-scale systems handle data reliably and efficiently.

      It focuses on:
      - Storage systems
      - Distributed systems
      - Data processing

      ## Reliability, Scalability, Maintainability
      These are the three pillars:

      - <b>Reliability:</b> System works correctly even under failure
      - <b>Scalability:</b> Handles growth in users/data
      - <b>Maintainability:</b> Easy to modify and extend

      ## Data Models
      Different systems use different models:

      - Relational (SQL)
      - Document (NoSQL)
      - Graph models

      Each has trade-offs depending on use case.

      ## Distributed Systems Challenges
      When systems scale:

      - Network failures happen
      - Data consistency becomes complex
      - Coordination is difficult

      Concepts like replication and partitioning are critical.

      ## Consistency vs Availability
      Trade-offs must be made:

      - Strong consistency vs eventual consistency
      - CAP theorem influences system design

      ## Data Processing
      Two main approaches:

      - Batch processing (large data sets)
      - Stream processing (real-time data)

      ## Final Thought
      Building scalable systems requires understanding trade-offs—not just choosing tools.`,
  keyLearnings: [
    "Every system design involves trade-offs",
    "Reliability, scalability, and maintainability are core goals",
    "Distributed systems introduce complexity",
    "Consistency vs availability is a key decision",
    "Choose data models based on use case",
    "Understand how data flows through systems"
  ],
  whoShouldRead: "Backend engineers, system designers, and developers working with large-scale data systems.",
  myTake: "Deep and technical. Not a casual read, but incredibly valuable for understanding real-world systems."
},

  {
  id: 10,
  title: "The Pragmatic Programmer: Your Journey to Mastery",
  author: "David Thomas, Andrew Hunt",
  cover: "../images/books/the-pragmatic-programmer.jpg",
  genre: "Technical",
  rating: 5,
  dateRead: "2026-04",
  pages: 352,
  amazon: "",
  summary: "A classic guide to becoming a better software developer by focusing on practical thinking, responsibility, and continuous improvement. It emphasizes writing flexible, maintainable code and developing a professional mindset.",
  fullSummary: `## The Core Idea: Think Like a Pragmatic Developer
      This book is about developing a mindset—not just learning tools or languages.

      A pragmatic programmer:
      - Takes responsibility for their work
      - Continuously learns and improves
      - Focuses on practical solutions over theoretical perfection

      ## Take Responsibility
      Developers should own their code and decisions:

      - Do not blame tools or circumstances
      - Communicate clearly about trade-offs
      - Deliver reliable solutions

      ## DRY Principle (Don't Repeat Yourself)
      Duplication leads to inconsistency and bugs:

      - Every piece of knowledge should have a single source
      - Avoid copying logic across the codebase

      ## Orthogonality
      Components should be independent:

      - Changes in one area should not affect others
      - Leads to flexible and maintainable systems

      ## Automation
      Automate repetitive tasks:

      - Builds, tests, deployments
      - Reduces human error
      - Increases efficiency

      ## Continuous Learning
      Technology evolves quickly:

      - Learn new languages and tools
      - Read code and books
      - Stay curious

      ## Final Thought
      Great developers are not defined by tools—but by how they think, learn, and solve problems.`,
  keyLearnings: [
    "Take responsibility for your code and decisions",
    "Avoid duplication using the DRY principle",
    "Design systems with independent components",
    "Automate repetitive tasks",
    "Continuously learn and improve",
    "Think practically, not dogmatically"
  ],
  whoShouldRead: "Software developers at any stage who want to grow into professional engineers.",
  myTake: "Timeless advice. It’s less about coding tricks and more about thinking like a true engineer."
},

  {
  id: 9,
  title: "Zero to One: Notes on Startups, or How to Build the Future",
  author: "Peter Thiel, Blake Masters",
  cover: "",
  genre: "Business",
  rating: 5,
  dateRead: "2026-04",
  pages: 224,
  amazon: "",
  summary: "This book explores how to build truly innovative companies that create new things rather than competing in existing markets. Peter Thiel argues that real progress comes from going from 'zero to one'—creating something entirely new—rather than copying or improving existing ideas.",
  fullSummary: `## The Core Idea: From Zero to One
      The central concept is simple but powerful:

      - <b>0 → 1:</b> Creating something entirely new (innovation)
      - <b>1 → n:</b> Copying or scaling existing ideas (globalization)

      True value comes from going from zero to one—building something unique.

      ## Competition is for Losers
      Contrary to popular belief, Thiel argues:

      - Competition destroys profits
      - It forces companies into price wars
      - It limits innovation

      The goal is not to compete—but to create a **monopoly through uniqueness**.

      ## Monopoly vs Competition
      Great companies:

      - Dominate a niche market
      - Offer something no one else can
      - Expand from a strong position

      Weak companies:
      - Compete in crowded markets
      - Focus on incremental improvements

      ## Start Small, Then Expand
      Successful startups:

      - Begin with a small, specific market
      - Dominate that niche
      - Gradually expand into larger markets

      This builds a strong foundation.

      ## The Importance of Secrets
      Every great business is built on a “secret”:

      - Something others do not see or believe
      - A unique insight about the world

      Founders must ask:
      - What important truth do few people agree with me on?

      ## Definite Optimism
      Thiel distinguishes between:

      - <b>Definite Optimism:</b> Believing the future can be planned and built
      - <b>Indefinite Optimism:</b> Believing the future will improve without a plan

      Great founders are definite optimists—they actively build the future.

      ## Product and Technology
      Strong technology companies:

      - Have a 10x advantage over competitors
      - Solve problems in a fundamentally better way
      - Create defensible advantages

      ## Founders and Teams
      Key ideas:

      - Strong founding teams are critical
      - Ownership matters (equity alignment)
      - Early decisions shape long-term success

      ## Sales and Distribution
      Even great products fail without distribution:

      - Sales is as important as product
      - You must reach customers effectively
      - Growth requires strong distribution channels

      ## Final Thought
      The future is not something that happens—it is something we build. The most successful companies create new categories instead of competing in existing ones.`,
  keyLearnings: [
    "True innovation comes from creating something new, not copying",
    "Avoid competition by building unique products",
    "Start with a niche and dominate it",
    "Every successful business is based on a unique insight (secret)",
    "Technology should provide a 10x advantage",
    "Sales and distribution are critical for success",
    "The future is built by those who plan and act"
  ],
  whoShouldRead: "Startup founders, entrepreneurs, and anyone interested in innovation and building unique businesses.",
  myTake: "A mindset-shifting book. It challenges conventional thinking and pushes you to think bigger and differently about innovation."
},

{
  id: 8,
  title: "The Hard Thing About Hard Things: Building a Business When There Are No Easy Answers",
  author: "Ben Horowitz",
  cover: "",
  genre: "Business",
  rating: 5,
  dateRead: "2026-04",
  pages: 304,
  amazon: "",
  summary: "A brutally honest look at the challenges of running a startup, focusing on the difficult decisions leaders must make when there are no clear answers. Ben Horowitz shares real experiences about managing crises, layoffs, leadership, and survival.",
  fullSummary: `## The Core Idea: There Are No Easy Answers
      Unlike most business books, this one does not give step-by-step frameworks.

      It focuses on the reality that:
      - Startups are messy
      - Decisions are unclear
      - Leaders often operate without guidance

      The “hard things” are situations where there is **no obvious right answer**.

      ## The Struggle is Normal
      A key concept in the book is “The Struggle”:

      - Feeling like everything is going wrong
      - Constant pressure and uncertainty
      - Doubting your decisions

      This is not failure—it is part of the journey.

      ## CEO Responsibility
      The CEO is responsible for everything:

      - Company success or failure
      - Culture and team performance
      - Making final decisions under pressure

      Even when things go wrong, accountability stays at the top.

      ## Managing Through Crisis
      The book emphasizes:

      - Stay calm under pressure
      - Make decisions with limited information
      - Prioritize survival first

      In tough situations, there are no perfect choices—only trade-offs.

      ## Hiring and Firing
      One of the hardest parts of leadership:

      - Hiring the right people is critical
      - Firing is sometimes necessary
      - Delaying tough decisions makes problems worse

      Good leaders act decisively.

      ## Building Culture
      Culture is not what you say—it is what you do.

      - Actions define values
      - Consistency builds trust
      - Leaders set the tone

      ## Peacetime vs Wartime CEO
      The book introduces two leadership modes:

      - <b>Peacetime CEO:</b> Focuses on growth, culture, and long-term planning
      - <b>Wartime CEO:</b> Focuses on survival, speed, and decisive action

      Great leaders know when to switch between the two.

      ## Communication
      Leaders must communicate clearly:

      - Share bad news honestly
      - Align the team
      - Reduce confusion during uncertainty

      Transparency builds trust.

      ## No Silver Bullets
      There are no shortcuts:

      - No perfect strategy
      - No guaranteed success
      - No easy fixes

      Leadership requires judgment, resilience, and persistence.

      ## Final Thought
      The hardest part of building a company is not strategy or execution—it is making difficult decisions under uncertainty and continuing despite the struggle.`,
  keyLearnings: [
    "Hard problems rarely have clear or easy solutions",
    "The struggle is a normal part of leadership",
    "CEOs must take full responsibility for outcomes",
    "Tough decisions (like firing) should not be delayed",
    "Leadership style must adapt to the situation",
    "Culture is defined by actions, not words",
    "There are no shortcuts in building a company",
    "Learning: The hard thing isn’t setting a big, hairy, audacious goal. The hard thing is laying people off when you miss the big goal.",
    "There are no silver bullets in this world. Only lead bullets.",
    "The hard thing isn’t dreaming big. It’s doing big things.",
    "<br>Quote:</br> There are no shortcuts to knowledge, especially knowledge gained from personal experience.”"
  ],
  whoShouldRead: "Startup founders, leaders, and anyone managing teams in high-pressure environments.",
  myTake: "Very real and unfiltered. It doesn’t give you comfort—it gives you clarity about how hard leadership actually is."
},

{
  id: 7,
  title: "The Phoenix Project",
  author: "Gene Kim, Kevin Behr, George Spafford",
  cover: "../images/books/the-phoenix-project.jpg",
  genre: "Technical",
  rating: 5,
  dateRead: "2026-04",
  pages: 432,
  amazon: "",
  summary: "A business novel that follows an IT manager tasked with rescuing a failing project and dysfunctional organization. Through the story, it introduces DevOps principles, showing how improving flow, collaboration, and feedback can transform technology teams and business outcomes.",
  fullSummary: `## The Core Idea: IT is a Value Stream
      The book tells the story of Bill Palmer, an IT manager thrown into a chaotic organization with failing projects, constant firefighting, and poor communication.

      The key realization is that IT work is not random—it is a **system of interconnected processes (a value stream)** that must be managed and optimized.

      ## The Three Ways of DevOps
      The story introduces the foundational DevOps principles:

      ### 1. Flow (Systems Thinking)
      - Work should move smoothly from development to operations
      - Bottlenecks slow down the entire system
      - Optimize the whole system, not individual parts

      The goal is fast, predictable delivery.

      ### 2. Feedback (Amplify Feedback Loops)
      - Problems should be detected early
      - Fast feedback prevents large failures
      - Teams must communicate continuously

      This reduces risk and improves quality.

      ### 3. Continuous Learning (Culture of Improvement)
      - Encourage experimentation
      - Learn from failures
      - Continuously improve processes

      This builds long-term resilience.

      ## Bottlenecks and Constraints
      One of the biggest lessons:

      - Every system has constraints (bottlenecks)
      - Improving non-bottlenecks does not improve the system
      - You must identify and fix the constraint

      This concept comes from the **Theory of Constraints**.

      ## Work in Progress (WIP)
      Too much work in progress causes:

      - Context switching
      - Delays
      - Increased errors

      Limiting WIP improves flow and productivity.

      ## Technical Debt
      The book highlights how ignoring technical debt leads to:

      - Slower development
      - More outages
      - Increased complexity

      Investing in fixing systems improves long-term speed.

      ## DevOps Culture
      Success requires breaking silos:

      - Developers and operations must collaborate
      - Shared responsibility improves outcomes
      - Blame culture must be eliminated

      ## Automation and Deployment
      Manual processes create errors and delays.

      The solution:
      - Automate deployments
      - Standardize processes
      - Reduce human error

      ## Business Impact
      IT is not just support—it directly impacts:

      - Revenue
      - Customer experience
      - Competitive advantage

      Improving IT performance improves the entire business.

      ## Final Thought
      High-performing organizations treat IT as a system, optimize flow, reduce bottlenecks, and build a culture of continuous improvement.`,
  keyLearnings: [
    "Optimize the entire system, not individual teams",
    "Bottlenecks determine system performance",
    "Limit work in progress to improve flow",
    "Fast feedback reduces failures",
    "Technical debt slows everything down",
    "Collaboration between teams is essential",
    "Automation increases reliability and speed",
    "Quote: Any improvement not made at the constraint is an illusion.",
    "Learning: The goal of DevOps is to increase the flow of value to customers while maintaining stability and reliability."
  ],
  whoShouldRead: "Software engineers, DevOps professionals, and leaders managing technology teams.",
  myTake: "One of the most impactful books for understanding how real-world tech organizations work. The story format makes complex ideas easy to grasp and apply."
},

{
  id: 6,
  title: "The Startup Owner's Manual: The Step-by-Step Guide for Building a Great Company",
  author: "Steve Blank, Bob Dorf",
  cover: "",
  genre: "Business",
  rating: 4,
  dateRead: "2026-04",
  pages: 608,
  amazon: "",
  summary: "A comprehensive manual that provides a detailed, step-by-step process for building startups using the Customer Development methodology. It focuses on testing business assumptions, understanding customers, and building scalable, repeatable business models.",
  fullSummary: `## The Core Idea: Startups Are Not Smaller Versions of Companies
      The book challenges a common misconception:

      Startups are not small versions of large companies—they are **temporary organizations searching for a scalable business model**.

      Because of this, traditional business planning does not work.

      ## Customer Development Model
      The foundation of the book is the **Customer Development process**, which runs alongside product development.

      It has four main stages:

      1. <b>Customer Discovery:</b> Test whether your problem and solution actually matter to customers
      2. <b>Customer Validation:</b> Prove that customers will pay and that your model works
      3. <b>Customer Creation:</b> Generate demand and scale marketing
      4. <b>Company Building:</b> Transition into a structured organization

      You must validate before scaling.

      ## Get Out of the Building
      One of the most famous principles:

      - Founders must talk to real customers
      - Assumptions must be tested in the real world
      - Internal discussions are not validation

      Learning comes from direct customer interaction.

      ## Business Model Hypotheses
      Every startup begins with a set of assumptions:

      - Who are the customers?
      - What problem are you solving?
      - Why is your solution better?
      - How will you make money?

      These are treated as **hypotheses**, not facts.

      ## Iteration and Pivoting
      Startups must iterate continuously:

      - Test assumptions
      - Gather feedback
      - Refine the model

      If assumptions fail, pivot and try again.

      Failure is part of the process—not the end.

      ## Sales and Customer Validation
      A critical milestone is proving:

      - Customers are willing to pay
      - Sales process is repeatable
      - Demand exists beyond early adopters

      Without this, scaling is dangerous.

      ## Scaling Only After Validation
      Many startups fail because they scale too early.

      The book emphasizes:
      - Do not invest heavily in marketing or hiring too soon
      - First validate product-market fit
      - Then scale operations

      ## Organizational Transition
      Once validated:

      - Build structured teams
      - Define roles and processes
      - Focus on execution and growth

      This is when the startup becomes a company.

      ## Final Thought
      Startups succeed by systematically testing assumptions, learning from customers, and building a repeatable business model before scaling.`,
  keyLearnings: [
    "Startups are searching for a business model, not executing one",
    "Customer Development is as important as product development",
    "All initial ideas are hypotheses that must be tested",
    "Talking to real customers is essential",
    "Do not scale before validation",
    "Iteration and pivoting are normal parts of the process",
    "A repeatable sales model is key to growth",
    "Quote: No business plan survives first contact with customers."
  ],
  whoShouldRead: "Serious founders and entrepreneurs building startups from scratch.",
  myTake: "Very detailed and process-heavy. Not an easy read, but extremely valuable if you're building a startup seriously."
},

{
  id: 5,
  title: "The Lean Product Playbook",
  author: "Dan Olsen",
  cover: "",
  genre: "Business",
  rating: 5,
  dateRead: "2026-04",
  pages: 336,
  amazon: "",
  summary: "A step-by-step guide to building successful products using Lean principles. The book explains how to identify target customers, define their needs, create value propositions, and iteratively build and test products to achieve product-market fit.",
  fullSummary: `## The Core Idea: Achieving Product-Market Fit
      The main goal of this book is to help teams systematically achieve **product-market fit**—the point where a product satisfies strong market demand.

      It provides a structured framework instead of vague advice.

      ## The Product-Market Fit Pyramid
      At the center of the book is the **Product-Market Fit Pyramid**, which consists of five layers:

      - <b>Target Customer:</b> Clearly define who you are building for
      - <b>Underserved Needs:</b> Identify important problems that are not well solved
      - <b>Value Proposition:</b> Explain how your product solves those problems better
      - <b>Feature Set:</b> Decide what to build to deliver that value
      - <b>User Experience (UX):</b> Ensure the product is usable and intuitive

      Each layer builds on the one below it. Skipping layers leads to failure.

      ## Step-by-Step Product Process
      The book lays out a clear process:

      1. Identify your target customer
      2. Understand their needs deeply
      3. Define your value proposition
      4. Design your MVP feature set
      5. Create a prototype
      6. Test with real users
      7. Iterate based on feedback

      This process reduces guesswork and increases success probability.

      ## Customer-Centric Approach
      A key emphasis is understanding customers:

      - Conduct interviews
      - Observe behavior
      - Identify pain points
      - Prioritize important unmet needs

      Products fail when teams build based on assumptions instead of real insights.

      ## Minimum Viable Product (MVP)
      The MVP is used to test whether the product meets customer needs:

      - Build only essential features
      - Avoid over-engineering
      - Focus on learning, not completeness

      ## Rapid Iteration
      Product development is iterative:

      - Build → Test → Learn → Improve
      - Use feedback to refine the product
      - Repeat until product-market fit is achieved

      ## UX and Design Matter
      Even if the idea is strong:

      - Poor UX can cause failure
      - Usability is critical for adoption
      - Design should be simple and intuitive

      ## Metrics and Validation
      The book stresses measuring real outcomes:

      - User engagement
      - Retention
      - Satisfaction

      Data should guide decisions—not opinions.

      ## Final Thought
      Successful products are not built by chance. They are the result of a disciplined process that focuses on customers, validates assumptions, and iterates toward product-market fit.`,
  keyLearnings: [
    "Product-market fit is the ultimate goal of product development",
    "The Product-Market Fit Pyramid provides a clear structure",
    "Understanding customer needs is the foundation of success",
    "MVPs should focus on learning, not completeness",
    "Iteration is essential—first versions are rarely correct",
    "UX plays a critical role in product adoption",
    "Data-driven decisions outperform assumptions",
      "<b>Quote:</b> “The key to achieving product-market fit is to create a product that customers love.”"
  ],
  whoShouldRead: "Product managers, startup founders, and teams building user-centric products.",
  myTake: "Highly structured and practical. It connects Lean Startup ideas with a clear execution framework, making it easier to apply in real projects."
},

{
  id: 4,
  title: "Inspired: How to Create Tech Products Customers Love",
  author: "Marty Cagan",
  cover: "",
  genre: "Business",
  rating: 5,
  dateRead: "2026-04",
  pages: 368,
  amazon: "",
  summary: "This book explains how the best tech companies build products that truly solve customer problems. Marty Cagan focuses on product discovery, strong product teams, and creating solutions that are valuable, usable, and feasible before building them.",
  fullSummary: `## The Core Idea: Products Must Solve Real Problems
      *Inspired* is about building products that customers actually love—not just products that get shipped.

      The biggest mistake teams make is building features instead of solving real problems. Great product teams focus on **outcomes, not output**.

      ## The Product Model: Value, Usability, Feasibility, Viability
      Every successful product must satisfy four key dimensions:

      - <b>Value:</b> Do customers want it?
      - <b>Usability:</b> Can users easily use it?
      - <b>Feasibility:</b> Can we build it with our technology?
      - <b>Viability:</b> Does it work for the business?

      If any one of these fails, the product fails.

      ## Product Discovery vs Delivery
      One of the most important concepts:

      - <b>Discovery:</b> Figuring out WHAT to build
      - <b>Delivery:</b> Building it right

      Most teams focus only on delivery and skip discovery—this leads to wasted effort.

      Discovery involves:
      - Testing ideas quickly
      - Prototyping
      - Talking to users
      - Validating assumptions before coding

      ## Strong Product Teams
      Great products come from **strong, empowered teams**, not just good ideas.

      A strong product team includes:
      - Product Manager (problem and strategy)
      - Designer (user experience)
      - Engineers (technical feasibility)

      These teams are:
      - Autonomous
      - Outcome-driven
      - Continuously experimenting

      ## The Role of the Product Manager
      A product manager is not a feature manager.

      Their job is to:
      - Understand customer problems deeply
      - Define product vision
      - Prioritize what matters most
      - Align stakeholders

      They are responsible for **product success**, not just delivery.

      ## Prototyping and Testing
      Instead of building full features:

      - Create quick prototypes (low or high fidelity)
      - Test with real users
      - Learn before investing engineering time

      This reduces risk dramatically.

      ## Avoiding Feature Factories
      Many companies become "feature factories":

      - Constantly shipping features
      - No real impact
      - No validation

      Inspired argues:
      - Stop measuring success by output
      - Start measuring outcomes (user impact)

      ## Continuous Product Discovery
      Product development is ongoing:

      - Always test new ideas
      - Always talk to customers
      - Always refine the product

      This is not a one-time phase—it’s continuous.

      ## Leadership and Culture
      Leadership plays a key role:

      - Empower teams instead of controlling them
      - Encourage experimentation
      - Accept failure as learning

      Great product culture enables innovation.

      ## Final Thought
      Building successful products is not about luck—it is about systematically reducing risk through discovery, empowering teams, and focusing on real customer value.`,
  keyLearnings: [
    "Focus on solving real customer problems, not just building features",
    "Every product must be valuable, usable, feasible, and viable",
    "Product discovery is more important than delivery",
    "Strong product teams outperform rigid processes",
    "Prototyping saves time and reduces risk",
    "Avoid becoming a feature factory",
    "Measure outcomes, not output",
    "<b>Quote:</b> The job of a product manager is to discover a product that is valuable, usable, and feasible."
  ],
  whoShouldRead: "Product managers, startup founders, designers, and engineers involved in building digital products.",
  myTake: "This book changes how you think about product building. It made me realize that building features is easy—building the right product is the real challenge."
},

{
  id: 3,
  title: "Running Lean: Iterate from Plan A to a Plan That Works",
  author: "Ash Maurya",
  cover: "",
  genre: "Business",
  rating: 5,
  dateRead: "2026-04",
  pages: 240,
  amazon: "",
  summary: "A practical guide that shows how to systematically apply Lean Startup principles to build successful products. Ash Maurya focuses on identifying the riskiest assumptions, validating them quickly, and iterating toward a working business model using tools like the Lean Canvas.",
  fullSummary: `## The Core Idea: Systematic Startup Execution
      While *The Lean Startup* gives you the philosophy, *Running Lean* gives you the **step-by-step execution plan**.

      The focus is simple: **find a problem worth solving, then build a solution people will pay for**.

      ## The Lean Canvas
      Ash Maurya introduces the **Lean Canvas**, a one-page business model that replaces long business plans.

      It focuses on the most critical elements:
      - Problem
      - Customer Segments
      - Unique Value Proposition
      - Solution
      - Channels
      - Revenue Streams
      - Cost Structure
      - Key Metrics
      - Unfair Advantage

      This forces clarity and helps identify risky assumptions early.

      ## Focus on the Riskiest Assumptions
      Not all parts of your idea are equally risky.

      - The biggest risk is usually: <b>"Do people really have this problem?"</b>
      - Second: <b>"Will they pay for a solution?"</b>

      Instead of building everything, you should **test the riskiest assumptions first**.

      ## Problem-Solution Fit
      Before building a full product, validate that:

      - The problem is real and painful
      - Customers actively want a solution
      - Your idea actually addresses that problem

      This stage is about **understanding, not scaling**.

      ## Customer Interviews
      One of the most practical parts of the book:

      - Talk to real users early
      - Ask about their problems, not your solution
      - Avoid leading questions
      - Look for patterns, not opinions

      <i>"Get out of the building"</i>—you cannot validate ideas from your desk.

      ## Solution Validation (MVP Stage)
      Once the problem is validated:

      - Build an MVP to test your solution
      - Measure user behavior (not what they say)
      - Iterate quickly based on feedback

      The goal is to move from assumptions to evidence.

      ## Traction and Growth
      After validation:

      - Focus on acquiring early adopters
      - Optimize conversion funnels
      - Improve retention

      Growth comes after validation—not before.

      ## Continuous Iteration
      Startups are not linear:

      - You will revise your canvas multiple times
      - Each iteration reduces uncertainty
      - Progress = reducing risk

      ## Key Principle: Love the Problem, Not the Solution
      Founders often fall in love with their idea.

      The book emphasizes:
      - Stay flexible on solutions
      - Stay obsessed with the problem

      ## Final Thought
      Success comes from systematically eliminating risk. The goal is not to build fast—it is to **learn what works before scaling**.`,
  keyLearnings: [
    "Use the Lean Canvas to break down and test your business model",
    "Always identify and test the riskiest assumptions first",
    "Problem validation is more important than solution building",
    "Customer interviews are essential for real insights",
    "Build MVPs only after validating the problem",
    "Focus on learning, not launching",
    "Fall in love with the problem, not your solution",
    "<b>Quote</b>: Life’s too short to build something nobody wants."
  ],
  whoShouldRead: "Early-stage founders, product builders, and anyone turning an idea into a real business.",
  myTake: "This is where Lean Startup becomes actionable. It gives you a clear playbook to follow instead of just theory. Extremely useful if you're actually building something."
},

  {
  id: 2,
  title: "The Lean Startup",
  author: "Eric Ries",
  cover: "../images/books/the-lean-startup.jpg",
  genre: "Business",
  rating: 5,
  dateRead: "2026-04",
  pages: 336,
  amazon: "",
  summary: "A foundational book that introduces a scientific, experiment-driven approach to building startups. Eric Ries argues that instead of executing rigid plans, startups should focus on rapid iteration, validated learning, and continuous feedback to build products customers actually want.",
  fullSummary: `## The Core Idea: Startups Are Experiments
      The central idea of *The Lean Startup* is that a startup is not just a company—it is a **search process**. You are searching for a sustainable business model under extreme uncertainty.

      Traditional business approaches fail because they assume certainty. Lean Startup replaces this with **experimentation and learning**.

      ## The Build-Measure-Learn Loop
      This is the heart of the book—the feedback loop that drives all startup progress.

      - <b>Build:</b> Create a Minimum Viable Product (MVP) with just enough features to test assumptions.
      - <b>Measure:</b> Collect real user data, not opinions or guesses.
      - <b>Learn:</b> Decide whether to pivot (change direction) or persevere (continue improving).

      The faster you go through this loop, the faster you learn—and learning is the only real progress in a startup.

      ## Minimum Viable Product (MVP)
      The MVP is not about building a cheap product—it is about building the **fastest way to test a hypothesis**.

      - It can be a landing page, prototype, or even a manual service
      - Its goal is to validate assumptions, not impress users
      - Early feedback is more valuable than polished features

      ## Validated Learning
      Progress is not measured by how much you build, but by how much you **learn about customers**.

      - Replace opinions with data
      - Test assumptions systematically
      - Learn what actually creates value

      ## Innovation Accounting
      Startups cannot use traditional metrics like revenue early on. Instead, they need:

      - Actionable metrics (user behavior, retention)
      - Cohort analysis (tracking specific user groups over time)
      - Clear experiments with measurable outcomes

      Avoid <i>"vanity metrics"</i> like downloads or page views that look good but don't guide decisions.

      ## Pivot vs Persevere
      One of the hardest decisions in a startup:

      - <b>Persevere:</b> Continue on the current path if data supports it
      - <b>Pivot:</b> Make a fundamental change when assumptions are proven wrong

      Types of pivots include:
      - Customer segment pivot
      - Problem pivot
      - Solution pivot
      - Technology pivot

      ## Lean Thinking: Eliminate Waste
      Inspired by lean manufacturing, the goal is to eliminate anything that does not create value:

      - Avoid building unnecessary features
      - Reduce time between idea and feedback
      - Focus only on validated outcomes

      ## Culture of Experimentation
      Successful startups build a culture where:

      - Failure is learning, not waste
      - Decisions are data-driven
      - Speed matters more than perfection

      **Final Thought:** A startup succeeds not by building more, but by learning faster than competitors. Every feature, every release, every decision should answer one question: *What did we learn?*`,
  keyLearnings: [
    "Startups are experiments, not execution machines",
    "The Build-Measure-Learn loop is the fastest path to success",
    "MVPs exist to test assumptions, not to impress users",
    "Validated learning is the only meaningful progress",
    "Vanity metrics are dangerous—focus on actionable data",
    "Pivoting is a strategic decision based on evidence",
    "Speed of learning is the ultimate competitive advantage"
    ],
    whoShouldRead: "Startup founders, product managers, and developers building new products in uncertain environments.",
    myTake: "This book completely changes how you approach building products. It shifts your mindset from 'build more' to 'learn faster'. It’s one of the most practical frameworks I’ve applied."
},

  {
    id: 1,
    title: "Clean Code: A Handbook of Agile Software Craftsmanship",
    author: "Robert C. Martin",
    cover: "../images/books/clean-code.jpg",
    genre: "Technical",
    rating: 5,
    dateRead: "2024-06",
    pages: 431,
    amazon: "https://tapashsutradhar.github.io/portfolio/pages/books.html",
    summary: "A definitive guide on writing readable, maintainable, and professional-grade code. Martin explains that writing clean code is not just about making it work — it is about making it easy for other humans to understand, modify, and extend. The book covers naming, functions, error handling, unit testing, and refactoring with real Java code examples.",
    fullSummary: `## The Philosophy: Craftsmanship & Readability
      **Clean Code** is not just a set of rules; it is a professional ethic. It is code that looks like it was written by someone who cares. Clean Code is code that looks like it was written by someone who cares. It is focused, elegant, and efficient. Because we spend a **10:1** ratio reading code versus writing it, readability is the primary driver of development speed.

      - <b>The 10:1 Rule:</b> <i><b>Reading vs. Writing</b></i> We spend a ratio of over <b>10:1</b> reading code versus writing it. Therefore, making code easy to read actually makes it faster to write in the long run because you spend less time trying to understand it. We spend ten times more time reading code than writing it. Therefore, making code easy to read is the primary driver of development speed.
      - <b>The Boy Scout Rule:</b>  <i>"Always leave the code cleaner than you found it"</i>. Small, incremental improvements during every task prevent <i>"code rot"</i>.
      - <b>Code Sense:</b> A craftsman possesses the "code sense" to look at a messy module and recognize the possibilities for refinement and refactoring.

      ## Meaningful Naming
      Naming is the most frequent task in programming and serves as the foundation of communication in your codebase.

      - <b>Intention-Revealing Names:</b> A name should tell you why it exists, what it does, and how it is used. Use \`daysSinceLastUpdate\` instead of a vague variable like \`d\`.
      - <b>Avoid Disinformation:</b> Avoid names that mislead the reader about the data type; do not name a variable \`accountList\` if the structure is actually a \`Map\` or a \`Set\`.
      - <b>Searchable Names:</b> Replace <i>"magic numbers"</i> (e.g., \`86400\`) with named constants (e.g., \`SECONDS_IN_A_DAY\`) to make them easy to locate in a large codebase.
-       <b>Pronounceable & Meaningful:</b> if you cannot discuss a name in a meeting without sounding cryptic, it is likely poorly named.

      ## Functions: The Rule of Two
      Functions are the primary organizational unit of a program and must be strictly managed to remain maintainable.

      - <b>Smallness:</b> A function should be smaller than you think—ideally fewer than **20 lines**.
      - <b>Single Responsibility (Do One Thing):</b> A function should have exactly one responsibility. If you can extract another function from it with a meaningful name, it is doing too much.
      - <b>One Level of Abstraction:</b> Do not mix high-level business logic with low-level details, such as string manipulation, in the same function.
      - <b>Descending Policy:</b> Code should read like a top-down narrative, with high-level logic followed by the sub-functions it calls.



      ## Comments: A Necessary Evil
      <i>"Comments are always failures"</i>. They are often used to compensate for our inability to express ourselves in code.

      - <b>Explain Yourself in Code:</b> Before writing a comment, try to refactor the code to be more expressive, such as extracting a complex conditional into a named function.
      - <b>Good Comments:</b> Necessary legal headers, technical warnings of consequences, or \`TODO\` tags.
      - <b>Bad Comments:</b> Redundant descriptions of obvious logic, vague "mumbling," or commented-out code which should simply be deleted.

      ## Objects, Data Structures, & Formatting
      Clean code respects the professional hallmarks of formatting and the structural difference between data and behavior.

      - <b>Vertical Density:</b> Tightly related lines of code should appear close together vertically so the reader doesn't have to jump around the file for context.
      - <b>The Law of Demeter:</b> A module should not know about the innards of the objects it manipulates. Avoid "train wrecks" like \`user.getProfile().getAddress().getZipCode()\`.
      - <b>Objects vs. Data Structures:</b> - <b>Objects</b> hide data behind abstractions and expose functions. <b>Data Structures</b> expose data and have no meaningful functions. Avoid "hybrids" that attempt to do both.

      ## The SOLID Principles
      To ensure systems are robust and flexible, classes must adhere to these five core principles:

      | Principle | Description |

      **S - Single Responsibility** → A class should have one, and only one, reason to change.
      **O - Open/Closed** → Entities should be open for extension but closed for modification.
      **L - Liskov Substitution** → Subtypes must be substitutable for their base types without breaking the system.
      **I - Interface Segregation** → Do not force clients to depend on methods or interfaces they do not use.
      **D - Dependency Inversion** → Depend on abstractions (interfaces), not on concrete implementations.



      ## Identifying Code Smells (Heuristics)
      <i>"Smells"</i> are subtle indicators that the design is rotting and requires refactoring:

      - <b>Rigidity:</b> The system is hard to change because a single change forces a cascade of updates in other modules.
      - <b>Fragility:</b> The system breaks in unexpected, unrelated places when a change is made.
      - <b>Immobility:</b> Logic is so tangled with its current context that it cannot be extracted or reused in another project.
      - <b>Needless Complexity:</b> The design contains "future-proofing" elements or "over-engineering" that aren't currently useful.

       **Final Thought:** Clean code is achieved through the practice of craftsmanship. It requires constant refactoring and a refusal to accept "good enough".`,

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
  }

];

/* ═══════════════════════════════════════════════════════════════
   HOW TO ADD YOUR NEXT BOOK — copy this template:

  {
    id: 0, // increment by 1
    title: "Book Title Here",
    author: "Author Name",
    cover: "",
    genre: "Technical",
    rating: 5,
    dateRead: "2025-06",
    pages: 300,
    amazon: "",
    summary: "What this book is about in 2-3 sentences.",
    fullSummary: "A longer, more detailed summary (optional, can be same as summary). Use ## for headings, - for bullets, **bold** for emphasis.",
    keyLearnings: [
      "First thing you learned",
      "Second thing you learned",
      "Third thing you learned"
    ],
    whoShouldRead: "One sentence on who benefits most.",
    myTake: "Your honest personal opinion in 1-2 sentences."
  },

═══════════════════════════════════════════════════════════════ */

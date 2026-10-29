// Single place to edit every link and fact on the page.
// Source of truth: IBM-Db2-TechX-Summit-Master-Document (v1.0, 28 Oct 2026).

// Luma event — every Register button opens Luma's checkout popup for this event.
export const LUMA_EVENT_ID = 'evt-rKKaLkPzJFs05n9';
export const LUMA_URL = `https://luma.com/event/${LUMA_EVENT_ID}`;
export const LUMA_EMBED = `https://luma.com/embed/event/${LUMA_EVENT_ID}/simple`;
export const WHATSAPP_URL = 'https://chat.whatsapp.com/L5EwLpFMmqa179MsOgi9fu';
export const MAPS_URL =
  'https://www.google.com/maps/search/?api=1&query=GL+Bajaj+Group+of+Institutions+Mathura';
export const MAPS_EMBED =
  'https://www.google.com/maps?q=GL+Bajaj+Group+of+Institutions,+Akbarpur,+Mathura&output=embed';

// All times in IST (+05:30).
export const MOMENTS = {
  hackStart: new Date('2026-10-28T19:00:00+05:30'),
  // No fixed closing time — it will be announced. Used only to order countdown phases.
  hackEnd: new Date('2026-10-30T15:30:00+05:30'),
  summitStart: new Date('2026-10-30T09:00:00+05:30'),
  summitEnd: new Date('2026-10-30T17:00:00+05:30'),
};

export const EVENT = {
  name: 'IBM Db2 TechX Summit',
  theme: 'A day of IBM Db2 — Data and AI',
  tagline: 'Learn how AI and data are making the future.',
  date: 'Friday, 30 October 2026',
  time: '9:00 AM – 5:00 PM IST',
  venueShort: 'GL Bajaj Group of Institutions, Mathura',
  venue: 'GL Bajaj Group of Institutions, NH-2 Mathura–Delhi Road, Akbarpur, Mathura, Uttar Pradesh 281406',
};

// Section anchors on the home page; `path` entries are separate pages.
export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'db2hack', label: 'Db2Hack' },
  { path: '/submit', label: 'Submit' },
  { path: '/resources', label: 'Resources' },
  { id: 'rewards', label: 'Rewards' },
  { id: 'speakers', label: 'Speakers' },
  { id: 'venue', label: 'Venue' },
  { id: 'faq', label: 'FAQ' },
];

export const PROGRAMME = [
  { code: '01', title: 'Talks by IBM experts', body: 'Hear directly from the engineers who build IBM Db2 — how modern AI applications are built on data.' },
  { code: '02', title: 'Hands-on workshop', body: 'Build real AI use cases on IBM Db2 with popular open-source frameworks.' },
  { code: '03', title: 'Knowledge sharing', body: 'Open conversations with IBM Db2 engineers on data, AI and careers in the field.' },
  { code: '04', title: 'Panel discussion', body: 'AI, data and the road ahead — a live panel with the IBM team.' },
  { code: '05', title: 'Db2Hack finale', body: 'The Top 10 builders pitch their AI use cases on IBM Db2 live to IBM experts.' },
  { code: '06', title: 'Data & AI Quiz', body: 'Databases, vector search, RAG, LLMs and agents — test what you know, live.' },
];

export const STATS = [
  { value: 1, suffix: '', label: 'Day of Db2, data & AI' },
  { value: 7, suffix: '', label: 'IBM Db2 leaders & experts' },
  { value: 24, suffix: 'h', label: 'Db2Hack build sprint' },
  { value: 10, suffix: '', label: 'Finalists pitch live' },
];

export const AUDIENCE = [
  { title: 'Students', body: 'Learn from the people who build IBM Db2 and see how data powers real AI products.' },
  { title: 'Builders & hackers', body: 'Ship an AI use case on IBM Db2 and pitch it live to IBM experts.' },
  { title: 'Data & AI enthusiasts', body: 'Vector search, RAG, agents and data for AI — explained by practitioners.' },
];

// Event flow across all three days. `date` is the IST calendar day; times are 24-hour IST.
export const SCHEDULE_DAYS = [
  {
    date: '2026-10-28',
    label: 'Wed · 28 Oct',
    caption: 'Db2Hack · online',
    items: [
      { start: '19:00', end: '24:00', title: 'Db2Hack begins', detail: 'Submissions open at 7:00 PM IST — start building your AI use case on IBM Db2', highlight: true, tag: 'Kick-off' },
    ],
  },
  {
    date: '2026-10-29',
    label: 'Thu · 29 Oct',
    caption: 'Db2Hack · online',
    items: [
      { start: '00:00', end: '24:00', title: 'Build, share on LinkedIn, submit', detail: 'Keep building, open your pull request and share on LinkedIn. Submissions are not strict and do not close tonight', highlight: true, tag: 'Still open' },
    ],
  },
  {
    date: '2026-10-30',
    label: 'Fri · 30 Oct',
    caption: 'Summit · GL Bajaj, Mathura',
    items: [
      { start: '09:00', end: '10:00', title: 'Reporting', detail: 'Registration and seating' },
      { start: '10:00', end: '10:40', title: 'Inaugural ceremony', detail: 'Welcome, lamp lighting and felicitation of guests' },
      { start: '10:40', end: '13:00', title: 'Technical session & workshop', detail: 'Talks by IBM experts and a hands-on Db2 + AI workshop' },
      { start: '13:00', end: '14:00', title: 'Lunch break', detail: 'Refuel and network' },
      { start: '14:00', end: '15:00', title: 'Panel discussion', detail: 'AI, data and the road ahead' },
      { start: '15:00', end: '16:00', title: 'Build on campus after the workshop', detail: 'Learnt something in the workshop? Build it here and submit your PR — offline participants welcome. Try to submit early so you have time; the closing time will be announced', tag: 'Open', highlight: true },
      { start: '16:00', end: '16:30', title: 'Db2Hack finale', detail: 'Top 10 present their AI use cases on IBM Db2 to IBM experts — Top 10 get Db2 goodies, Top 3 are recognised on stage', highlight: true, tag: 'Finale' },
      { start: '16:30', end: '17:00', title: 'Valedictory', detail: 'Certificates, felicitation and vote of thanks' },
    ],
  },
];

export const HACK_STEPS = [
  { n: '01', title: 'Build', when: 'Open now · start anytime', body: 'Create your AI use case on IBM Db2 with the toolkit packages.' },
  { n: '02', title: 'Share', when: 'While you build', body: 'Post your use case on LinkedIn, explain it clearly and tag the organising team.' },
  { n: '03', title: 'Submit', when: 'Anytime · closing time to be announced', body: 'Open a pull request on the submission GitHub repo, then send the PR link through the Google Form. Not strict — submit early so you have time.' },
  { n: '04', title: 'Pitch', when: '30 Oct · 4:00 – 4:30 PM', body: 'The Top 10 present live to IBM experts at the Summit.' },
];

export const CORE_FRAMEWORKS = ['LangChain', 'Haystack', 'CrewAI', 'LlamaIndex', 'Langflow'];

export const TOOLKIT = [
  { name: 'LangChain', logo: 'langchain-t.png', cmd: 'pip install -U langchain-db2', gives: 'Db2 vector store for RAG and retrieval', url: 'https://docs.langchain.com/oss/python/integrations/vectorstores/db2', core: true },
  { name: 'Langflow', logo: 'langflow.png', cmd: 'pip install lfx-ibm', gives: 'No-code IBM bundle with a Db2 vector store component', url: 'https://pypi.org/project/lfx-ibm/', core: true },
  { name: 'Haystack', logo: 'haystack-icon.png', cmd: 'pip install ibm-db-haystack', gives: 'Db2 document store for pipelines', url: 'https://pypi.org/project/ibm-db-haystack/', core: true },
  { name: 'CrewAI', logo: 'crewai-t.png', cmd: 'pip install crewai-tools ibm_db', gives: 'Db2 vector search tool for agents', url: 'https://docs.crewai.com/edge/en/tools/database-data/db2searchtool', core: true },
  { name: 'LlamaIndex', logo: 'llamaindex.png', cmd: 'pip install llama-index-vector-stores-db2', gives: 'Db2 vector store', url: 'https://developers.llamaindex.ai/python/framework/integrations/vector_stores/db2llamavs/', core: true },
  { name: 'dbt', logo: 'dbt-icon.png', cmd: 'pip install ibm-dbt-db2', gives: 'Db2 adapter for data transformation', url: 'https://pypi.org/p/ibm-dbt-db2' },
  { name: 'SQLGlot', logo: 'sqlglot-icon.png', cmd: 'pip install db2-sqlglot-dialect', gives: 'Db2 SQL dialect', url: 'https://github.com/IBM/db2-sqlglot-plugin' },
  { name: 'Python driver', logo: null, cmd: 'pip install ibm_db', gives: 'Core Python driver for IBM Db2', url: 'https://pypi.org/project/ibm_db/' },
  { name: 'VS Code', logo: 'vscode-db2.png', cmd: 'code --install-extension IBM.db2-for-luw', gives: 'IBM Db2 Developer Extension', url: 'https://marketplace.visualstudio.com/items?itemName=IBM.db2-for-luw' },
];

export const ECOSYSTEM = [
  { name: 'CrewAI', logo: 'crewai-t.png' },
  { name: 'LangChain', logo: 'langchain-t.png' },
  { name: 'LlamaIndex', logo: 'llamaindex.png' },
  { name: 'Haystack', logo: 'haystack-icon.png' },
  { name: 'Langflow', logo: 'langflow.png' },
  { name: 'MS Agent Framework', logo: 'ms-agent-t.png' },
  { name: 'n8n', logo: 'n8n-t.png' },
  { name: 'Apache Airflow', logo: 'airflow-t.png' },
  { name: 'dbt', logo: 'dbt-icon.png' },
  { name: 'SQLMesh', logo: 'sqlmesh.png' },
  { name: 'SQLGlot', logo: 'sqlglot-icon.png' },
  { name: 'Ibis', logo: 'ibis.png' },
  { name: 'Apache Arrow', logo: 'arrow-t.png' },
  { name: 'VS Code', logo: 'vscode-db2.png' },
];

// Top 10 get Db2 goodies, Top 3 are recognised — don't list specific prize items.
export const REWARDS = [
  { who: 'Top 10', what: 'Db2 goodies + live pitch to IBM experts on 30 October' },
  { who: 'Top 3', what: 'Special recognition and appreciation from IBM on stage' },
  { who: 'Everyone', what: 'Open-source contribution to IBM Db2 AI use cases — open for all, with guidance from the IBM team' },
  { who: 'Best posts', what: 'Appreciation from IBM experts on social media' },
  { who: 'All participants', what: 'Certificates' },
];

export const CERTIFICATES = [
  { title: 'Certificate of Excellence', to: 'Db2Hack 1st, 2nd & 3rd' },
  { title: 'Certificate of Merit', to: 'Db2Hack Top 10 finalists' },
  { title: 'Certificate of Achievement', to: 'Data & AI Quiz champion' },
  { title: 'Certificate of Recognition', to: 'Open-source contributors' },
  { title: 'Certificate of Appreciation', to: 'Community engagement' },
  { title: 'Certificate of Participation', to: 'All participants' },
];

export const QUIZ_TOPICS = ['Databases & SQL', 'Vector search', 'RAG', 'LLMs & agents', 'Data for AI'];

export const SPEAKERS = [
  { name: 'Gaurav Saxena', role: 'Program Director, IBM Db2', org: 'IBM', photo: '/speakers/Gaurav-Saxena.png', linkedin: 'https://www.linkedin.com/in/gaurav-saxena-95044594/' },
  { name: 'Daya Nand', role: 'Senior Db2 Development Manager', org: 'IBM Lucknow', photo: '/speakers/Daya-Nand.png', linkedin: 'https://www.linkedin.com/in/2mrdaya/' },
  { name: 'Dhruv Chaturvedi', role: 'Db2 Software Engineer', org: 'IBM Lucknow', photo: '/speakers/Dhruv-Chaturvedi-light-bg.png', tag: 'Event SPOC', linkedin: 'https://www.linkedin.com/in/dhruvinsights/', instagram: 'https://www.instagram.com/dhruv_insights/', youtube: 'https://www.youtube.com/@dhruv_insights' },
  { name: 'Keshav Maheshwari', role: 'Db2 Software Engineer', org: 'IBM Lucknow', photo: '/speakers/Keshav-Maheshwari.png', linkedin: 'https://www.linkedin.com/in/keshav-maheshwari-666738186/' },
  { name: 'Kunal Gola', role: 'Db2 Software Engineer', org: 'IBM Lucknow', photo: '/speakers/Kunal-Gola.png', linkedin: 'https://www.linkedin.com/in/kunal-gola-459030203/' },
  { name: 'Pawan Thakur', role: 'Db2 Software Engineer', org: 'IBM Lucknow', photo: '/speakers/Pawan-Thakur.png', linkedin: 'https://www.linkedin.com/in/pawanthakurindia/' },
  { name: 'Shaik Sadiq', role: 'Db2 Software Engineer', org: 'IBM Lucknow', photo: '/speakers/Shaik-Sadiq.png', linkedin: 'https://www.linkedin.com/in/shaik-sadiq-068a39242/' },
];

export const FAQ = [
  { q: 'Is the Summit free?', a: 'Yes. The IBM Db2 TechX Summit is free and in person. Register on Luma — registrations are reviewed by the organisers, and you get a confirmation once approved.' },
  { q: 'When and where is it?', a: 'Friday, 30 October 2026, 9:00 AM – 5:00 PM IST at GL Bajaj Group of Institutions, NH-2 Mathura–Delhi Road, Akbarpur, Mathura. Reporting starts at 9:00 AM.' },
  { q: 'What is Db2Hack?', a: 'A build challenge to create an AI use case on IBM Db2. It opened on 28 October, 7:00 PM IST and is still open — submissions are not strict and the closing time will be announced. You can also take part offline: learn in the workshop on 30 October, build on campus and submit. The Top 10 present live to IBM experts from 4:00 to 4:30 PM.' },
  { q: 'Who can participate? Can I join as a team?', a: 'Everyone — there are no restrictions. Students, developers and anyone curious can build a solution with IBM Db2, on their own or as a team. List every team member in your submission.' },
  { q: 'I missed the start. Can I still join?', a: 'Yes. Submissions are still open — start now, follow the 6-step quick start on the Submit page, or join the workshop on 30 October and build right after it. Try to submit early so you have time; the closing time will be announced on WhatsApp.' },
  { q: 'How are the Top 10 chosen?', a: 'IBM experts score every submission with the 100-point rubric on the Submit page. To keep it transparent, we share the judging sheet and feedback explaining why a submission was not selected for the Top 10.' },
  { q: 'Which frameworks can I use?', a: 'Every project must use at least one of LangChain, Haystack, CrewAI, LlamaIndex or the no-code Langflow. One is enough; combining several (for example LangChain + CrewAI) is also allowed.' },
  { q: 'Is joining the WhatsApp community mandatory?', a: 'Yes. Every participant must join the IBM Db2 TechX WhatsApp community — all live updates, the Google Form link and any timing changes are shared there first.' },
  { q: 'How do I submit my project?', a: 'Two steps, both mandatory: open a pull request with your project folder on the official submission repo (github.com/KunalGolaIBM/IBM_Db2_TechX_Project_Submission), then paste the PR link into the Google Form. The full walkthrough is on the Submit page. Submissions are not strict — the closing time will be announced, so submit early.' },
  { q: 'Do I need to post on LinkedIn?', a: 'Yes, sharing is part of the challenge: post your use case on LinkedIn, explain it clearly and tag the organising team. The best posts get appreciation from IBM experts.' },
  { q: 'Do I need prior Db2 experience?', a: 'No. The toolkit gives you ready-made Db2 integrations — vector stores, document stores and agent tools — for the frameworks you may already know.' },
  { q: 'Which Db2 should I build on?', a: 'Db2 Community Edition — it is free with full Db2 features (up to 4 cores and 16 GB RAM). The quickest start is the IBM Db2 Developer Extension for VS Code, which can create a Community Edition instance with a sample database. You can also use the Docker image (icr.io/db2_community/db2) or the installer from ibm.com/db2/get-started.' },
  { q: 'What do participants get?', a: 'All participants receive certificates. The Top 10 get Db2 goodies and present live to IBM experts, and the Top 3 are specially recognised on stage. Everyone — not only the Top 10 — has the opportunity to learn and contribute to IBM Db2 AI use cases (open source), with guidance from the IBM team.' },
  { q: 'Can I contribute to IBM Db2 open source?', a: 'Yes — open-source contribution is open for all. The IBM team will share guidance on how it works: where to contribute, how to pick an issue or use case, and how to open your contribution.' },
  { q: 'Where will I get further updates?', a: 'All event and Db2Hack details are emailed to registered participants before the start. Join the WhatsApp community for live updates.' },
];

// Official IBM Product Hub tutorials, one per Db2Hack framework.
export const VIDEOS = [
  { id: 'NRo4ePT2MEE', title: 'Build Enterprise AI Agents in Minutes with Langflow & IBM Db2 Vector Store', tag: 'Langflow' },
  { id: 'T3it5_2JwIw', title: 'Building AI Search & RAG with the New IBM Db2 Vector Store for Haystack', tag: 'Haystack' },
  { id: 'qZnhCnwGttg', title: 'Build Intelligent CrewAI Agents with IBM Db2 Vector Search', tag: 'CrewAI' },
];
export const VIDEO_CHANNEL = 'https://www.youtube.com/@IBMProductHub';

// Optional prerequisites (Hinglish) from Dhruv Insights — Python and agentic AI basics.
export const LEARN_VIDEOS = [
  { id: '9GDvvZPPitI', title: 'Python in One Shot — full course with live coding', tag: 'Python' },
  { id: 'LK_Wz39TbnQ', title: 'Agentic AI explained from beginner to advanced — Episode 01', tag: 'Agentic AI' },
  { id: 'tgiKX3nB-ok', title: 'How Agentic AI really works — a system-level breakdown', tag: 'Agentic AI' },
];
export const LEARN_CHANNEL = 'https://www.youtube.com/@dhruv_insights';

// Every link here was checked to resolve (Oct 2026). `thumb` is the page's own preview
// image (og:image, saved in public/res/); `logo` is used for a branded cover when a page has none.
export const RESOURCE_GROUPS = [
  { id: 'all', label: 'All' },
  { id: 'blog', label: 'Community blogs' },
  { id: 'start', label: 'Get started' },
  { id: 'docs', label: 'Connector docs' },
  { id: 'news', label: 'Announcements' },
];

export const RESOURCES = [
  { group: 'news', src: 'IBM Announcement', title: 'Announcing the Db2 LangChain Connector — enterprise vector storage for Python AI workflows', url: 'https://www.ibm.com/new/announcements/announcing-the-db2-langchain-connector', thumb: '/res/r1.jpg' },
  { group: 'news', src: 'IBM Announcement', title: 'Announcing the IBM Db2 Vector Store integration for LlamaIndex', url: 'https://www.ibm.com/new/announcements/announcing-the-ibm-db2-vector-store-integration-for-llamaindex', thumb: '/res/r2.jpg' },
  { group: 'news', src: 'IBM Announcement', title: 'Announcing the IBM Db2 Developer Extension for VS Code', url: 'https://www.ibm.com/new/announcements/announcing-the-ibm-db2-developer-extension-for-vs-code', thumb: '/res/r3.jpg' },
  { group: 'news', src: 'IBM Announcement', title: 'Get a jumpstart with IBM Db2 Community Edition', url: 'https://www.ibm.com/new/announcements/ibm-db2-developer-community-edition', thumb: '/res/r4.jpg' },
  { group: 'news', src: 'Langflow Blog', title: 'Langflow 1.10 — now with the IBM Db2 component', url: 'https://www.langflow.org/blog/langflow-1-10', thumb: '/res/r5.jpg' },

  { group: 'blog', src: 'IBM Community', title: 'Announcement: IBM Db2 Langflow component', url: 'https://community.ibm.com/community/user/blogs/priyanshu-krishnan/2026/06/10/announcement-ibm-db2-langflow-component', thumb: '/res/r6.jpg' },
  { group: 'blog', src: 'IBM Community', title: 'Langflow just added IBM Db2 — 16 questions I asked', url: 'https://community.ibm.com/community/user/blogs/shaikh-quader/2026/06/10/langflow-just-added-ibm-db2-16-questions-i-asked-b', thumb: '/res/r7.jpg' },
  { group: 'blog', src: 'IBM Community', title: 'Exciting news: Db2 dbt integration is here', url: 'https://community.ibm.com/community/user/blogs/shubham-kapoor/2026/06/17/exciting-news-db2-dbt-integration-is-here', logo: '/fw/dbt-icon.png' },
  { group: 'blog', src: 'IBM Community', title: 'Orchestrating IBM Db2 workflows with Airflow', url: 'https://community.ibm.com/community/user/blogs/shubham-kapoor/2026/09/01/orchestrating-ibm-db2-workflows-with-airflow', thumb: '/res/r9.jpg' },
  { group: 'blog', src: 'IBM Community', title: 'Vector indexes in Db2: an early preview', url: 'https://community.ibm.com/community/user/blogs/christian-garcia-arellano/2025/10/04/vector-indexes-in-db2-an-early-preview', logo: '/logos/db-cyl-blue.svg' },
  { group: 'blog', src: 'IBM Community', title: 'IBM Db2 LUW Pulse — monthly update from the Db2 team', url: 'https://community.ibm.com/community/user/discussion/ibm-db2-luw-pulse-monthly-update-from-the-db2-team-30-june-2026', logo: '/fw/langflow.png' },

  { group: 'docs', src: 'LangChain Docs', title: 'IBM Db2 vector store (langchain-db2)', url: 'https://docs.langchain.com/oss/python/integrations/vectorstores/db2', thumb: '/res/r12.jpg' },
  { group: 'docs', src: 'LlamaIndex Docs', title: 'Db2 vector store for LlamaIndex', url: 'https://developers.llamaindex.ai/python/framework/integrations/vector_stores/db2llamavs/', thumb: '/res/r13.jpg' },
  { group: 'docs', src: 'CrewAI Docs', title: 'Db2 vector search tool for CrewAI agents', url: 'https://docs.crewai.com/edge/en/tools/database-data/db2searchtool', logo: '/fw/crewai-t.png' },
  { group: 'docs', src: 'Langflow Docs', title: 'IBM bundle — Db2 Vector Store component', url: 'https://docs.langflow.org/bundles-ibm', logo: '/fw/haystack-icon.png' },
  { group: 'docs', src: 'PyPI', title: 'ibm-db-haystack — Db2 document store for Haystack', url: 'https://pypi.org/project/ibm-db-haystack/', logo: '/fw/dbt-icon.png' },
  { group: 'docs', src: 'dbt Docs', title: 'IBM Db2 setup for dbt (ibm-dbt-db2)', url: 'https://docs.getdbt.com/docs/local/connect-data-platform/ibm-db2-setup', logo: '/fw/airflow-t.png' },
  { group: 'docs', src: 'GitHub · IBM', title: 'db2-sqlglot-plugin — Db2 SQL dialect for SQLGlot', url: 'https://github.com/IBM/db2-sqlglot-plugin', thumb: '/res/r18.jpg' },
  { group: 'docs', src: 'Apache Airflow', title: 'apache-airflow-providers-ibm-db2', url: 'https://airflow.apache.org/docs/apache-airflow-providers-ibm-db2/stable/index.html', logo: '/fw/langflow.png' },
  { group: 'docs', src: 'PyPI', title: 'lfx-ibm — IBM components for Langflow', url: 'https://pypi.org/project/lfx-ibm/', logo: '/logos/db-cyl-blue.svg' },

  { group: 'start', src: 'IBM', title: 'Get started with IBM Db2 — free Community Edition', url: 'https://www.ibm.com/db2/get-started', thumb: '/res/r21.jpg' },
  { group: 'start', src: 'IBM Docs', title: 'IBM Db2 12.1 documentation', url: 'https://www.ibm.com/docs/en/db2/12.1.x', logo: '/logos/db-cyl-blue.svg' },
  { group: 'start', src: 'IBM Docs', title: 'VECTOR_DISTANCE — vector similarity in Db2 SQL', url: 'https://www.ibm.com/docs/en/db2/12.1.x?topic=functions-vector-distance', logo: '/logos/db-cyl-blue.svg' },
  { group: 'start', src: 'IBM Db2 Extension Docs', title: 'IBM Db2 Developer Extension — complete documentation', url: 'https://ibm.github.io/db2developerextension-about/', logo: '/fw/vscode-db2.png' },
  { group: 'start', src: 'IBM Db2 Extension Docs', title: 'Getting started with the Db2 Developer Extension', url: 'https://ibm.github.io/db2developerextension-about/docs/the-basics/getting-started-extension', logo: '/fw/vscode-db2.png' },
  { group: 'start', src: 'IBM Db2 Extension Docs', title: 'Create a Db2 Community Edition instance from VS Code', url: 'https://ibm.github.io/db2developerextension-about/docs/the-basics/creating-db2-instance', logo: '/logos/db-cyl-blue.svg' },
  { group: 'start', src: 'IBM Db2 Extension Docs', title: 'Troubleshooting Docker and Colima runtime issues', url: 'https://ibm.github.io/db2developerextension-about/docs/troubleshooting/docker-colima-troubleshooting', logo: '/fw/vscode-db2.png' },
  { group: 'start', src: 'VS Code Marketplace', title: 'IBM Db2 Developer Extension for VS Code', url: 'https://marketplace.visualstudio.com/items?itemName=IBM.db2-for-luw', logo: '/fw/vscode-db2.png' },
  { group: 'start', src: 'GitHub · ibmdb', title: 'Db2 VS Code extension wiki', url: 'https://github.com/ibmdb/vscode-extension/wiki', thumb: '/res/r25.jpg' },
  { group: 'start', src: 'GitHub · ibmdb', title: 'python-ibmdb — the ibm_db Python driver', url: 'https://github.com/ibmdb/python-ibmdb', thumb: '/res/r26.jpg' },
  { group: 'start', src: 'IBM', title: 'IBM Db2 product overview', url: 'https://www.ibm.com/products/db2', thumb: '/res/r27.jpg' },
];

// Db2 Community Edition — the free Db2 to build Db2Hack projects on.
export const COMMUNITY_EDITION = {
  facts: ['Free · no credit card', 'Full Db2 features', 'Up to 4 cores · 16 GB RAM', 'Community support'],
  ways: [
    {
      n: '01',
      title: 'VS Code extension',
      body: 'Install the IBM Db2 Developer Extension, click "Create Db2 instance" and get testdb + SAMPLE databases ready to query. Needs VS Code 1.103+, Java 17+, Docker (Colima on macOS, Docker Desktop + WSL 2 on Windows) and 4 GB free RAM.',
      link: 'https://ibm.github.io/db2developerextension-about/docs/the-basics/creating-db2-instance',
      linkLabel: 'Step-by-step guide',
      cmd: 'code --install-extension IBM.db2-for-luw',
      tag: 'Easiest',
    },
    {
      n: '02',
      title: 'Docker',
      body: 'Pull the official Db2 Community Edition image and run it locally on port 50000. First start takes a couple of minutes.',
      cmd: 'docker pull icr.io/db2_community/db2',
    },
    {
      n: '03',
      title: 'Download',
      body: 'Get the Db2 12.1 Community Edition installer for Linux or Windows from IBM — free, no credit card.',
      link: 'https://www.ibm.com/db2/get-started',
      linkLabel: 'ibm.com/db2/get-started',
    },
  ],
};

// Shown at the top of the home page and the Submit page. Keep in sync with the master doc.
export const MANDATORY = [
  { title: 'Register on Luma', body: 'Free, approval-based. Your confirmation email carries every detail.', action: 'register' },
  { title: 'Join the WhatsApp community', body: 'Compulsory for every participant — live updates, the Google Form link and any timing changes land here first.', action: 'whatsapp' },
  { title: 'Get Db2 free on your laptop', body: 'Install the IBM Db2 Developer Extension in VS Code and create a local Db2 Community Edition instance — it takes minutes.', action: 'setup' },
  { title: 'Build on IBM Db2 + 1 framework', body: 'Real Db2 integration in code, using at least one of LangChain, Haystack, CrewAI, LlamaIndex or Langflow.' },
  { title: 'Open a GitHub pull request', body: 'Your project folder on the official submission repo, following the template.', action: 'submit' },
  { title: 'Submit the Google Form + post on LinkedIn', body: 'Paste your PR link in the form — submit early, the closing time will be announced — and share your use case on LinkedIn tagging the organisers.' },
];

// Db2Hack submission guide (/submit) — from the official submission repo README and docs.
export const SUBMISSION_REPO = 'https://github.com/KunalGolaIBM/IBM_Db2_TechX_Project_Submission';
export const SUBMISSION_ISSUES = `${SUBMISSION_REPO}/issues/new/choose`;

export const SUBMIT_DATES = [
  { what: 'Submissions open', when: 'Open now', note: 'Started 28 Oct, 7:00 PM IST. Not strict — start or keep building anytime' },
  { what: 'Build after the workshop', when: '30 Oct · on campus', note: 'Learn in the workshop, build and submit offline. Submit early so you have time — the closing time will be announced' },
  { what: 'Finale · Top 10 present', when: '30 Oct · 4:00 – 4:30 PM IST', note: 'Top 10 get Db2 goodies, Top 3 recognised on stage' },
];

export const SUBMIT_REQUIREMENTS = [
  { title: 'Meaningful IBM Db2 usage', body: 'Your code must actually talk to IBM Db2 — Db2 Community Edition (Docker or the VS Code extension), Db2 on Cloud or watsonx.data. Mentioning Db2 only in the docs is ineligible.' },
  { title: 'At least one Db2Hack framework', body: 'LangChain, Haystack, CrewAI, LlamaIndex or the no-code Langflow. Combining several is allowed. Drivers like ibm_db and SQLAlchemy are welcome on top.' },
  { title: 'Any language, AI optional', body: 'Python, TypeScript, Java, Go, Rust… AI/LLM workflows (RAG, text-to-SQL, agents) with watsonx.ai, OpenAI, Gemini, OpenRouter or Ollama are encouraged, not required.' },
  { title: 'Four required files', body: 'README.md, architecture.md, submission.json and .env.example — all copied from the template and filled in.' },
];

export const SUBMIT_STEPS = [
  {
    title: 'Fork & clone',
    body: 'Fork the submission repo to your GitHub account, then clone your fork.',
    code: 'git clone https://github.com/<your-username>/IBM_Db2_TechX_Project_Submission.git\ncd IBM_Db2_TechX_Project_Submission\ngit remote add upstream https://github.com/KunalGolaIBM/IBM_Db2_TechX_Project_Submission.git',
  },
  {
    title: 'Create your branch',
    body: 'Branch name: submission/<project-slug> — lowercase letters, numbers and hyphens only.',
    code: 'git fetch upstream main\ngit checkout -b submission/<project-slug> upstream/main',
  },
  {
    title: 'Copy the template',
    body: 'Your folder gets README.md, architecture.md, submission.json, .env.example, src/ and docs/screenshots/.',
    code: 'cp -r submissions/_template submissions/<project-slug>',
  },
  {
    title: 'Build, document, validate',
    body: 'Code in src/, fill submission.json, explain setup in README.md and your design in architecture.md, put only dummy keys in .env.example. Then run the validator.',
    code: 'python scripts/validate_submission.py submissions/<project-slug>',
  },
  {
    title: 'Commit & push',
    body: 'Stage only your own project folder.',
    code: 'git add submissions/<project-slug>\ngit commit -m "feat(<project-slug>): add hackathon submission"\ngit push -u origin submission/<project-slug>',
  },
  {
    title: 'Open a pull request',
    body: 'Base: KunalGolaIBM/IBM_Db2_TechX_Project_Submission · main. Title: [Submission] <project-slug>: <Short Project Title>. Complete every checklist in the PR template.',
  },
  {
    title: 'Fill the Google Form',
    body: 'A PR alone does not complete your submission. Paste your PR URL into the official Google Form (link shared on WhatsApp and by email). Submit early — the closing time will be announced.',
  },
  {
    title: 'Post on LinkedIn',
    body: 'Explain your use case clearly and tag the organising team. The best posts get appreciation from IBM experts.',
  },
];

export const SUBMIT_NAMING = [
  { asset: 'Branch', format: 'submission/<project-slug>', example: 'submission/db2-support-rag' },
  { asset: 'Folder', format: 'submissions/<project-slug>/', example: 'submissions/db2-support-rag/' },
  { asset: 'PR title', format: '[Submission] <project-slug>: <Project Title>', example: '[Submission] db2-support-rag: Db2 Support RAG Agent' },
  { asset: 'Commit', format: 'feat(<project-slug>): <message>', example: 'feat(db2-support-rag): implement vector search chain' },
];

export const JUDGING = [
  { name: 'IBM Db2 integration & depth', weight: 30, points: ['Substantive use of Db2: storage, querying, indexing, stored procedures, vector / JSON', 'Correct drivers, connectors or framework integrations', 'Clean schema design, efficient queries, reliable data'] },
  { name: 'Innovation & real-world impact', weight: 25, points: ['Original solution to a real problem', 'Practical for enterprise, developer tooling, analytics or AI automation', 'Clear value for the end user'] },
  { name: 'Technical architecture & AI', weight: 20, points: ['Modular, clean engineering', 'Well-designed RAG / agents / embeddings / prompts, if used', 'Clear, complete architecture.md'] },
  { name: 'Reproducibility & code quality', weight: 15, points: ['Easy setup by following README.md', 'Working .env.example with prerequisites', 'Tests, input validation and error handling'] },
  { name: 'Documentation & presentation', weight: 10, points: ['Templates filled — no placeholders left', 'Screenshots, demo URL or video walkthrough', 'Naming rules followed, zero secrets committed'] },
];

export const PENALTIES = [
  { title: 'Zero Db2 integration', body: 'Db2 mentioned in text but never used in code.' },
  { title: 'Committed secrets', body: 'Real passwords, API keys or tokens pushed to GitHub.' },
  { title: 'Plagiarism', body: 'Copying uncredited third-party repos without real innovation.' },
  { title: 'Tampering', body: "Changing repo root config, scripts or another participant's folder." },
];

// "Compulsory before you build" checklist at the top of /resources.
export const MUST_DO = [
  {
    title: 'Set up IBM Db2 locally with the VS Code extension',
    why: 'Gives you a working Db2 (testdb + SAMPLE) on your laptop in minutes — you need it to build and test your Db2Hack project.',
    links: [
      { label: 'Install extension', url: 'https://marketplace.visualstudio.com/items?itemName=IBM.db2-for-luw' },
      { label: 'Create a Db2 instance — guide', url: 'https://ibm.github.io/db2developerextension-about/docs/the-basics/creating-db2-instance' },
    ],
    cmd: 'code --install-extension IBM.db2-for-luw',
  },
  {
    title: 'Read the IBM Db2 community blogs',
    why: 'Written by the Db2 team: how the Langflow, dbt and Airflow integrations work and what vector indexes can do — the fastest way to a strong idea.',
    links: [{ label: 'Go to community blogs', url: '#community-blogs' }],
  },
  {
    title: 'Watch the IBM tutorial for your framework',
    why: 'Short official walkthroughs of Db2 with Langflow, Haystack and CrewAI — copy the pattern, then add your own idea.',
    links: [{ label: 'Watch tutorials', url: '#tutorials' }],
  },
  {
    title: "Open your framework's Db2 connector doc",
    why: 'Every Db2Hack project must use LangChain, Haystack, CrewAI, LlamaIndex or Langflow — the connector doc shows the exact install and code.',
    links: [{ label: 'Connector docs & toolkit', url: '#toolkit' }],
  },
];

// Who can join, the plan, and why IBM runs Db2Hack — shown on the home page and /submit.
export const ELIGIBILITY = {
  who: 'Open to everyone — no restrictions. Students, developers and anyone curious can build a solution with IBM Db2, solo or as a team.',
  plan: [
    'Submissions are open now and not strict — the closing time will be announced, so submit early',
    'Offline too: learn in the workshop on 30 Oct, then build on campus and submit',
    'IBM experts shortlist the Top 10, who present from 4:00 to 4:30 PM — Top 10 get Db2 goodies, Top 3 are recognised',
    'Fully transparent: we share the judging sheet and feedback on why a submission was not in the Top 10',
    'The IBM team is adding sample submissions to the repo so you have clear references to learn from',
    'Open-source contribution to IBM Db2 AI use cases is open for all — the IBM team will guide you on how',
  ],
  goal: 'Everyone has the opportunity to learn and contribute. The goal is not just to pick winners. IBM wants you to learn AI and Db2, build something meaningful, and stay part of the ecosystem long after the event — walking away with real experience and the confidence to keep building and contributing.',
};

// Quick start on /submit: from idea to pull request.
export const QUICKSTART = [
  { title: 'Pick a real problem', body: 'Something you, your college or a business actually faces — answering questions from notes, finding similar support tickets, searching policies, recommending courses.' },
  { title: 'Design a solution that needs AI + a database', body: 'AI understands and generates; Db2 stores your data and its vector embeddings and finds the most relevant rows. Most strong ideas are RAG apps, AI agents or text-to-SQL.' },
  { title: 'Pick one framework, with Db2 as the database', body: 'LangChain, LlamaIndex, Haystack, CrewAI or no-code Langflow — at least one is required. Db2 is your vector store and data store.' },
  { title: 'Install the Db2 connector for that framework', body: 'These packages connect your AI framework to Db2 — no custom glue code needed.', packages: true },
  { title: 'Build it — free help from IBM Bob', body: 'Start from the example below. IBM Bob, IBM\'s AI-powered development partner, helps you scaffold, debug and document your project — the free trial gives you 50 Bobcoins for 30 days.', bob: true },
  { title: 'Submit your pull request', body: 'Copy the template into the submission repo, fill README.md, architecture.md and submission.json, open the PR and paste its link in the Google Form.' },
];

export const QUICK_PACKAGES = [
  { name: 'LangChain', cmd: 'pip install -U langchain-db2', note: 'DB2VS vector store' },
  { name: 'LlamaIndex', cmd: 'pip install llama-index-vector-stores-db2', note: 'Db2 vector store' },
  { name: 'Haystack', cmd: 'pip install ibm-db-haystack', note: 'Db2 document store' },
];

export const IBM_BOB = {
  trial: 'https://bob.ibm.com/trial',
  download: 'https://bob.ibm.com/download',
  site: 'https://www.ibm.com/products/bob',
  offer: '50 Bobcoins for 30 days',
  uses: [
    { title: 'Scaffold your project', body: 'Describe your idea and let Bob set up the folders, Db2 connection and framework code.' },
    { title: 'Write and fix code', body: 'Bob works right alongside you in your codebase — explain errors, fix bugs, refactor.' },
    { title: 'Document for judging', body: 'Draft README.md and architecture.md so your submission scores well on documentation.' },
  ],
};

// Example: "Ask my notes" — a RAG app with LangChain + Db2 (from the langchain-db2 notebook).
export const QUICK_EXAMPLE = {
  title: 'Example project: "Ask my notes" — RAG with LangChain + Db2',
  steps: [
    'Store your notes in Db2 as vector embeddings',
    'When a student asks a question, find the most similar notes with Db2 vector search',
    'Send those notes plus the question to any LLM to write the answer',
  ],
  install: 'pip install -U langchain-db2 langchain-community sentence-transformers',
  code: `import ibm_db_dbi
from langchain_community.embeddings import HuggingFaceEmbeddings
from langchain_community.vectorstores.utils import DistanceStrategy
from langchain_core.documents import Document
from langchain_db2.db2vs import DB2VS

# 1. Connect to your local Db2 (created with the VS Code extension)
conn = ibm_db_dbi.connect(
    "DATABASE=testdb;HOSTNAME=localhost;PORT=50000;PROTOCOL=TCPIP;"
    "UID=db2inst1;PWD=<your-password>;", "", ""
)

# 2. Turn your notes into documents
notes = [
    Document(page_content="Db2 stores vectors in a VECTOR column.", metadata={"topic": "db2"}),
    Document(page_content="RAG retrieves relevant text before the LLM answers.", metadata={"topic": "ai"}),
]

# 3. Embed them and store them in Db2
embeddings = HuggingFaceEmbeddings(model_name="sentence-transformers/all-mpnet-base-v2")
store = DB2VS.from_documents(
    notes, embeddings, client=conn,
    table_name="MY_NOTES", distance_strategy=DistanceStrategy.COSINE,
)

# 4. Ask a question — Db2 returns the closest notes
for doc in store.similarity_search("How does RAG work?", k=2):
    print(doc.page_content)

# 5. Pass these notes + the question to your LLM (watsonx.ai, OpenAI, Ollama…)`,
};

// Free local Db2 with the VS Code extension.
export const LOCAL_DB2 = [
  { title: 'Download the extension', body: 'In VS Code open Extensions, search "IBM Db2 Developer Extension" and click Install — or run the command below. Needs VS Code 1.103+, Java 17+ and Docker (Colima on macOS, Docker Desktop + WSL 2 on Windows).', cmd: 'code --install-extension IBM.db2-for-luw' },
  { title: 'Create a Db2 instance', body: 'Open the Db2 icon in the Activity Bar → DB2 CONNECTIONS → Create Db2 instance. Enter host (localhost), port (50000), a username and password, and click Create. Free Db2 Community Edition, running on your laptop.' },
  { title: 'Connect locally', body: 'When setup finishes, the extension creates the testdb and SAMPLE databases and connects to them. Browse tables, open the SQL editor, and use the same host, port, user and password in your Python code.' },
];

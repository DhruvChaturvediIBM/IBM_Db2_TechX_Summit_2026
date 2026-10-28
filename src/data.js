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
  hackEnd: new Date('2026-10-29T19:00:00+05:30'),
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

export const NAV = [
  { id: 'about', label: 'About' },
  { id: 'schedule', label: 'Schedule' },
  { id: 'db2hack', label: 'Db2Hack' },
  { id: 'toolkit', label: 'Toolkit' },
  { id: 'resources', label: 'Resources' },
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
  { value: 6, suffix: '', label: 'IBM Db2 leaders & experts' },
  { value: 24, suffix: 'h', label: 'Db2Hack build sprint' },
  { value: 10, suffix: '', label: 'Finalists pitch live' },
];

export const AUDIENCE = [
  { title: 'Students', body: 'Learn from the people who build IBM Db2 and see how data powers real AI products.' },
  { title: 'Builders & hackers', body: 'Ship an AI use case on IBM Db2 in 24 hours and pitch it to IBM experts.' },
  { title: 'Data & AI enthusiasts', body: 'Vector search, RAG, agents and data for AI — explained by practitioners.' },
];

export const SCHEDULE = [
  { start: '09:00', end: '10:00', title: 'Reporting', detail: 'Registration and seating' },
  { start: '10:00', end: '10:40', title: 'Inaugural ceremony', detail: 'Welcome, lamp lighting and felicitation of guests' },
  { start: '10:40', end: '13:00', title: 'Technical session', detail: 'Talks by IBM experts' },
  { start: '13:00', end: '14:00', title: 'Lunch break', detail: 'Refuel and network' },
  { start: '14:00', end: '15:00', title: 'Panel discussion', detail: 'AI, data and the road ahead' },
  { start: '15:00', end: '16:15', title: 'Db2Hack finale', detail: 'Top 10 pitch their AI use cases on IBM Db2 to IBM experts', highlight: true },
  { start: '16:15', end: '17:00', title: 'Valedictory', detail: 'Certificates, felicitation and vote of thanks' },
];

export const HACK_STEPS = [
  { n: '01', title: 'Build', when: '28 Oct · 7:00 PM onwards', body: 'Create your AI use case on IBM Db2 with the toolkit packages.' },
  { n: '02', title: 'Share', when: 'During the 24 hours', body: 'Post your use case on LinkedIn, explain it clearly and tag the organising team.' },
  { n: '03', title: 'Submit', when: 'Before 29 Oct · 7:00 PM', body: 'Submit through the Google Form. Strict deadline — late entries are not accepted.' },
  { n: '04', title: 'Pitch', when: '30 Oct · 3:00 – 4:15 PM', body: 'The Top 10 present live to IBM experts at the Summit.' },
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

// Winners' rewards stay a surprise until the finale — do not list prizes here.
export const REWARDS = [
  { who: 'Top 10', what: 'Live pitch to IBM experts on 30 October' },
  { who: 'Every eligible participant', what: 'Chance to contribute to IBM Db2 AI use cases (open source)' },
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
  { name: 'Gaurav Saxena', role: 'Program Director, IBM Db2', org: 'IBM', photo: '/speakers/Gaurav-Saxena.png' },
  { name: 'Daya Nand', role: 'Senior Db2 Development Manager', org: 'IBM Lucknow', photo: '/speakers/Daya-Nand.png' },
  { name: 'Dhruv Chaturvedi', role: 'Db2 Software Engineer', org: 'IBM Lucknow', photo: '/speakers/Dhruv-Chaturvedi-light-bg.png', tag: 'Event SPOC' },
  { name: 'Keshav Maheshwari', role: 'Db2 Software Engineer', org: 'IBM Lucknow', photo: '/speakers/Keshav-Maheshwari.png' },
  { name: 'Kunal Gola', role: 'Db2 Software Engineer', org: 'IBM Lucknow', photo: '/speakers/Kunal-Gola.png' },
  { name: 'Pawan Thakur', role: 'Db2 Software Engineer', org: 'IBM Lucknow', photo: '/speakers/Pawan-Thakur.png' },
];

export const FAQ = [
  { q: 'Is the Summit free?', a: 'Yes. The IBM Db2 TechX Summit is free and in person. Register on Luma — registrations are reviewed by the organisers, and you get a confirmation once approved.' },
  { q: 'When and where is it?', a: 'Friday, 30 October 2026, 9:00 AM – 5:00 PM IST at GL Bajaj Group of Institutions, NH-2 Mathura–Delhi Road, Akbarpur, Mathura. Reporting starts at 9:00 AM.' },
  { q: 'What is Db2Hack?', a: 'A 24-hour challenge to build an AI use case on IBM Db2. It runs from Wednesday 28 October, 7:00 PM IST to Thursday 29 October, 7:00 PM IST. The Top 10 pitch live to IBM experts at the Summit on 30 October.' },
  { q: 'Can I participate as a team?', a: 'No — Db2Hack is individual participation. Your idea matters most.' },
  { q: 'Which frameworks can I use?', a: 'Every project must use at least one of LangChain, Haystack, CrewAI, LlamaIndex or the no-code Langflow. One is enough; combining several (for example LangChain + CrewAI) is also allowed.' },
  { q: 'How do I submit my project?', a: 'Through a Google Form. The link is shared with registered participants by email before the hack starts. The deadline — 29 October, 7:00 PM IST — is strict; late entries are not accepted.' },
  { q: 'Do I need to post on LinkedIn?', a: 'Yes, sharing is part of the challenge: post your use case on LinkedIn, explain it clearly and tag the organising team. The best posts get appreciation from IBM experts.' },
  { q: 'Do I need prior Db2 experience?', a: 'No. The toolkit gives you ready-made Db2 integrations — vector stores, document stores and agent tools — for the frameworks you may already know.' },
  { q: 'Which Db2 should I build on?', a: 'Db2 Community Edition — it is free with full Db2 features (up to 4 cores and 16 GB RAM). The quickest start is the IBM Db2 Developer Extension for VS Code, which can create a Community Edition instance with a sample database. You can also use the Docker image (icr.io/db2_community/db2) or the installer from ibm.com/db2/get-started.' },
  { q: 'What do participants get?', a: 'All participants receive certificates. The Top 10 pitch live to IBM experts, and every eligible participant gets the chance to contribute to IBM Db2 AI use cases (open source). What the winners take home is revealed on stage at the finale.' },
  { q: 'Where will I get further updates?', a: 'All event and Db2Hack details are emailed to registered participants before the start. Join the WhatsApp community for live updates.' },
];

// Official IBM Product Hub tutorials, one per Db2Hack framework.
export const VIDEOS = [
  { id: 'NRo4ePT2MEE', title: 'Build Enterprise AI Agents in Minutes with Langflow & IBM Db2 Vector Store', tag: 'Langflow' },
  { id: 'T3it5_2JwIw', title: 'Building AI Search & RAG with the New IBM Db2 Vector Store for Haystack', tag: 'Haystack' },
  { id: 'qZnhCnwGttg', title: 'Build Intelligent CrewAI Agents with IBM Db2 Vector Search', tag: 'CrewAI' },
];
export const VIDEO_CHANNEL = 'https://www.youtube.com/@IBMProductHub';

// Every link here was checked to resolve (Oct 2026).
export const RESOURCE_GROUPS = [
  { id: 'all', label: 'All' },
  { id: 'news', label: 'Announcements' },
  { id: 'blog', label: 'Community blogs' },
  { id: 'docs', label: 'Connector docs' },
  { id: 'start', label: 'Get started' },
];

export const RESOURCES = [
  { group: 'news', src: 'IBM Announcement', title: 'Announcing the Db2 LangChain Connector — enterprise vector storage for Python AI workflows', url: 'https://www.ibm.com/new/announcements/announcing-the-db2-langchain-connector' },
  { group: 'news', src: 'IBM Announcement', title: 'Announcing the IBM Db2 Vector Store integration for LlamaIndex', url: 'https://www.ibm.com/new/announcements/announcing-the-ibm-db2-vector-store-integration-for-llamaindex' },
  { group: 'news', src: 'IBM Announcement', title: 'Announcing the IBM Db2 Developer Extension for VS Code', url: 'https://www.ibm.com/new/announcements/announcing-the-ibm-db2-developer-extension-for-vs-code' },
  { group: 'news', src: 'IBM Announcement', title: 'Get a jumpstart with IBM Db2 Community Edition', url: 'https://www.ibm.com/new/announcements/ibm-db2-developer-community-edition' },
  { group: 'news', src: 'Langflow Blog', title: 'Langflow 1.10 — now with the IBM Db2 component', url: 'https://www.langflow.org/blog/langflow-1-10' },

  { group: 'blog', src: 'IBM Community', title: 'Announcement: IBM Db2 Langflow component', url: 'https://community.ibm.com/community/user/blogs/priyanshu-krishnan/2026/06/10/announcement-ibm-db2-langflow-component' },
  { group: 'blog', src: 'IBM Community', title: 'Langflow just added IBM Db2 — 16 questions I asked', url: 'https://community.ibm.com/community/user/blogs/shaikh-quader/2026/06/10/langflow-just-added-ibm-db2-16-questions-i-asked-b' },
  { group: 'blog', src: 'IBM Community', title: 'Exciting news: Db2 dbt integration is here', url: 'https://community.ibm.com/community/user/blogs/shubham-kapoor/2026/06/17/exciting-news-db2-dbt-integration-is-here' },
  { group: 'blog', src: 'IBM Community', title: 'Orchestrating IBM Db2 workflows with Airflow', url: 'https://community.ibm.com/community/user/blogs/shubham-kapoor/2026/09/01/orchestrating-ibm-db2-workflows-with-airflow' },
  { group: 'blog', src: 'IBM Community', title: 'Vector indexes in Db2: an early preview', url: 'https://community.ibm.com/community/user/blogs/christian-garcia-arellano/2025/10/04/vector-indexes-in-db2-an-early-preview' },
  { group: 'blog', src: 'IBM Community', title: 'IBM Db2 LUW Pulse — monthly update from the Db2 team', url: 'https://community.ibm.com/community/user/discussion/ibm-db2-luw-pulse-monthly-update-from-the-db2-team-30-june-2026' },

  { group: 'docs', src: 'LangChain Docs', title: 'IBM Db2 vector store (langchain-db2)', url: 'https://docs.langchain.com/oss/python/integrations/vectorstores/db2' },
  { group: 'docs', src: 'LlamaIndex Docs', title: 'Db2 vector store for LlamaIndex', url: 'https://developers.llamaindex.ai/python/framework/integrations/vector_stores/db2llamavs/' },
  { group: 'docs', src: 'CrewAI Docs', title: 'Db2 vector search tool for CrewAI agents', url: 'https://docs.crewai.com/edge/en/tools/database-data/db2searchtool' },
  { group: 'docs', src: 'Langflow Docs', title: 'IBM bundle — Db2 Vector Store component', url: 'https://docs.langflow.org/bundles-ibm' },
  { group: 'docs', src: 'PyPI', title: 'ibm-db-haystack — Db2 document store for Haystack', url: 'https://pypi.org/project/ibm-db-haystack/' },
  { group: 'docs', src: 'dbt Docs', title: 'IBM Db2 setup for dbt (ibm-dbt-db2)', url: 'https://docs.getdbt.com/docs/local/connect-data-platform/ibm-db2-setup' },
  { group: 'docs', src: 'GitHub · IBM', title: 'db2-sqlglot-plugin — Db2 SQL dialect for SQLGlot', url: 'https://github.com/IBM/db2-sqlglot-plugin' },
  { group: 'docs', src: 'Apache Airflow', title: 'apache-airflow-providers-ibm-db2', url: 'https://airflow.apache.org/docs/apache-airflow-providers-ibm-db2/stable/index.html' },
  { group: 'docs', src: 'PyPI', title: 'lfx-ibm — IBM components for Langflow', url: 'https://pypi.org/project/lfx-ibm/' },

  { group: 'start', src: 'IBM', title: 'Get started with IBM Db2 — free Community Edition', url: 'https://www.ibm.com/db2/get-started' },
  { group: 'start', src: 'IBM Docs', title: 'IBM Db2 12.1 documentation', url: 'https://www.ibm.com/docs/en/db2/12.1.x' },
  { group: 'start', src: 'IBM Docs', title: 'VECTOR_DISTANCE — vector similarity in Db2 SQL', url: 'https://www.ibm.com/docs/en/db2/12.1.x?topic=functions-vector-distance' },
  { group: 'start', src: 'VS Code Marketplace', title: 'IBM Db2 Developer Extension for VS Code', url: 'https://marketplace.visualstudio.com/items?itemName=IBM.db2-for-luw' },
  { group: 'start', src: 'GitHub · ibmdb', title: 'Db2 VS Code extension wiki', url: 'https://github.com/ibmdb/vscode-extension/wiki' },
  { group: 'start', src: 'GitHub · ibmdb', title: 'python-ibmdb — the ibm_db Python driver', url: 'https://github.com/ibmdb/python-ibmdb' },
  { group: 'start', src: 'IBM', title: 'IBM Db2 product overview', url: 'https://www.ibm.com/products/db2' },
];

// Db2 Community Edition — the free Db2 to build Db2Hack projects on.
export const COMMUNITY_EDITION = {
  facts: ['Free · no credit card', 'Full Db2 features', 'Up to 4 cores · 16 GB RAM', 'Community support'],
  ways: [
    {
      n: '01',
      title: 'VS Code extension',
      body: 'Install the IBM Db2 Developer Extension, create a Community Edition instance and query a ready-to-use sample database.',
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

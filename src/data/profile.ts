// Every fact here comes from LinkedIn, Ritesh's résumé, a repo README, or public GitHub data.
// If you add a number, add its source to `sources` at the bottom. (Not rendered; it's the audit trail.)

export const person = {
  name: 'Ritesh Jha',
  email: 'ritesh20.jha@gmail.com',
  github: 'https://github.com/ritesh20jha',
  githubRepos: 'https://github.com/ritesh20jha?tab=repositories',
  linkedin: 'https://www.linkedin.com/in/ritesh20jha',
  role: 'Software Consultant',
  company: 'Oracle',
  city: 'Mumbai',
  since: 'August 2026',
};

export type LayerId = 'interface' | 'service' | 'pipeline' | 'storage';

export interface Layer {
  id: LayerId;
  name: string;
  tags: string[];
  lede: string;
}

export const layers: Layer[] = [
  {
    id: 'interface',
    name: 'Interface',
    tags: ['Next.js', 'Selenium', 'IndexedDB'],
    lede: '2023 to 2025. Where I started: browser automation with Selenium, offline storage in the browser, and Next.js front ends.',
  },
  {
    id: 'service',
    name: 'Service',
    tags: ['Spring Boot', 'Rails', 'Django', 'FastAPI'],
    lede: 'Behind the API, where the job is keeping requests correct when something downstream fails.',
  },
  {
    id: 'pipeline',
    name: 'Pipeline',
    tags: ['Kafka', 'Spring Boot', 'BullMQ'],
    lede: 'Work that happens after the response is sent: events, retries, outboxes. When it goes wrong, money or a release goes wrong with it.',
  },
  {
    id: 'storage',
    name: 'Storage',
    tags: ['Go', 'RESP', 'RDB'],
    lede: 'Bytes in memory, bytes on disk, and the locks between them.',
  },
];

export interface Role {
  org: string;
  title: string;
  kind?: string;
  from: string;
  to: string;
  place: string;
  stack: string[];
  notes?: string[];
}

export const interfaceRoles: Role[] = [
  {
    org: 'WeSee',
    title: 'Software Developer',
    kind: 'Internship',
    from: 'Feb 2025',
    to: 'Mar 2025',
    place: 'Remote',
    stack: ['Next.js', 'TypeScript', 'REST'],
    notes: [
      'Built a full event scheduling system from scratch, a new core feature for the platform.',
      'Built responsive, cross-browser components that improved the mobile experience, resulting in a 40% increase in average session duration.',
      'Designed and integrated a REST API with full CRUD, so administrators manage the event schedule directly from the UI.',
    ],
  },
  {
    org: 'Loomerang',
    title: 'Software Consultant',
    kind: 'Internship',
    from: 'Nov 2024',
    to: 'Feb 2025',
    place: 'Seattle, remote',
    stack: ['Next.js', 'React', 'Redux'],
    notes: [
      'Architected and launched the company’s first mobile workspace, taking the product beyond desktop and increasing mobile user acquisition by 60%.',
      'Built modular Next.js and React components for a fully responsive interface on every mobile device.',
    ],
  },
  {
    org: 'Dinosys Infotech',
    title: 'Software Engineer Intern',
    kind: 'Internship',
    from: 'Dec 2023',
    to: 'Apr 2024',
    place: 'Mumbai, remote',
    stack: ['Python', 'Selenium', 'IndexedDB'],
    notes: [
      'Tripled scraping and testing throughput by running Python and Selenium jobs in parallel across 33 websites and 10 mobile apps.',
      'Built IndexedDB-backed offline storage, so field users kept the full UI without a steady connection and network-dependency failures stopped.',
    ],
  },
];

export const oracle: Role = {
  org: 'Oracle',
  title: 'Software Consultant',
  kind: 'Full-time',
  from: 'Aug 2026',
  to: 'Present',
  place: 'Mumbai, on-site',
  stack: ['Java', 'Spring Boot', 'Microservices'],
  notes: ['Completed training in Java, Spring Boot and microservices.'],
};

export const browserstack: Role = {
  org: 'BrowserStack',
  title: 'Backend Intern',
  kind: 'Internship',
  from: 'Jan 2026',
  to: 'Jul 2026',
  place: 'Mumbai, hybrid',
  stack: ['Ruby on Rails', 'Google BigQuery'],
  notes: [
    'Cut high-severity production alerts by 70% by diagnosing flaky execution paths and hardening error handling in the AI self-healing pipeline.',
    'Fixed a non-deterministic race condition in the AI agent runtime, stabilising test execution across enterprise-scale suites without touching downstream test logic.',
    'Moved AI engine activation from suite level to per test, removing page-load false positives and making reporting more precise across customer accounts.',
    'Automated customer sandbox provisioning end to end, cutting manual onboarding effort by about 90%.',
  ],
};

export interface Project {
  name: string;
  repo: string;
  live?: string;
  stack: string[];
  what: string;
  how?: string[];
  not?: string;
  footnote?: string;
}

export const serviceProjects: Project[] = [
  {
    name: 'T&P Task Automation',
    repo: 'https://github.com/ritesh20jha/t_and_p_task_automation',
    stack: ['Django', 'React', 'Celery', 'MySQL'],
    what: 'The placement and training system for Thakur College of Engineering and Technology, where I studied. One Django + React app serves 8+ user roles.',
    how: [
      'Sorts students into Green, Yellow, Orange and Red bands from configurable academic and training thresholds.',
      'Runs a placement drive end to end: company registration, eligibility filters, consent, applications, offers.',
      'Exports student data and résumés asynchronously through Celery.',
    ],
    not: 'No student-facing portal. Attendance arrives as coordinator spreadsheets, not scraping.',
  },
  {
    name: 'MemMesh',
    repo: 'https://github.com/ritesh20jha/MemMesh',
    stack: ['Python', 'FastAPI', 'LangGraph', 'Weaviate', 'Neo4j'],
    what: 'Multi-agent RAG for document-grounded Q&A, with data isolated per team.',
    how: [
      'A LangGraph pipeline rewrites the query, then routes it to vector search, a knowledge graph, or both.',
      'A corrective-RAG step scores relevance and falls back to web search when context is thin.',
      'Answers come back with numbered citations.',
    ],
    not: 'Not a general chatbot, and not built for single-user local use.',
  },
];

export const fluxpay: Project = {
  name: 'FluxPay',
  repo: 'https://github.com/ritesh20jha/Fluxpay',
  stack: ['Java 17', 'Spring Boot 3.2', 'Oracle', 'Kafka', 'JWT'],
  what: 'A payment backend: wallets with ledger accounting, quotes, payouts, recovery and a timeline API. Events leave through a transactional outbox into Kafka, over eleven explicit topics, one of them a dead-letter topic for payout recovery.',
  how: [
    'Payment requests carry an idempotency key, and reruns check current state instead of paying twice.',
    'The seed script never writes balances or ledger rows directly. All money moves through the authenticated APIs.',
    'The database reset is a dry run unless you pass --execute, and it refuses to touch a remote Oracle.',
  ],
  footnote: 'Team project. I wrote 278 of its 358 commits.',
};

export const emitkit: Project = {
  name: 'EmitKit',
  repo: 'https://github.com/ritesh20jha/Emit-Kit',
  stack: ['TypeScript', 'Bun', 'Hono', 'BullMQ', 'Redis'],
  what: 'Watches OpenAPI specs in your GitHub repos and turns each change into client code.',
  how: [
    'A seven-step BullMQ worker fetches, parses and diffs the spec, then picks the SemVer bump from the diff.',
    'Five generators run in parallel: TypeScript and Python SDKs, a CLI, an MCP server, and docs.',
    'Output is checked with tsc and ruff before it’s committed and opened as a pull request.',
  ],
  not: 'GitHub only. Not an API gateway. Default branch only.',
};

export const recache: Project = {
  name: 'recache',
  repo: 'https://github.com/ritesh20jha/recache',
  stack: ['Go', 'RESP2/3', 'TCP'],
  what: 'A Redis-compatible in-memory server. It speaks RESP, so the stock redis-benchmark runs against it.',
  how: [
    'Lock striping: one RWMutex per data type, so a hash write never blocks a string read.',
    'Lists are a two-slice deque, so push and pop are amortised O(1) at both ends.',
    'WATCH / MULTI / EXEC through per-key version numbers: optimistic concurrency, no global lock.',
    'Background RDB snapshots, master–replica replication with a handshake, lazy TTL expiry, pub/sub and streams.',
  ],
};

export interface BenchRow {
  cmd: string;
  type: string;
  rps: number;
  p50: number;
  p99: number;
}

// redis-benchmark -c 50 -n 50000 -r 1000, from the recache README.
export const bench: BenchRow[] = [
  { cmd: 'LPOP', type: 'list', rps: 90252.7, p50: 0.271, p99: 0.479 },
  { cmd: 'SET', type: 'string', rps: 88339.23, p50: 0.279, p99: 0.463 },
  { cmd: 'GET', type: 'string', rps: 87108.02, p50: 0.279, p99: 0.479 },
  { cmd: 'HSET', type: 'hash', rps: 83333.33, p50: 0.295, p99: 0.671 },
  { cmd: 'ZADD', type: 'sorted set', rps: 82644.62, p50: 0.295, p99: 0.647 },
  { cmd: 'SMEMBERS', type: 'set', rps: 61728.39, p50: 0.423, p99: 1.519 },
  { cmd: 'XRANGE', type: 'stream', rps: 27808.68, p50: 0.863, p99: 5.559 },
];

export const sources = [
  'Role dates: LinkedIn. Role details and figures (BrowserStack, Dinosys, WeSee, Loomerang): supplied by Ritesh, 8 October 2026.',
  'Project details: each repository’s README.',
  'recache benchmarks: the recache README (redis-benchmark, 50 clients, 50,000 requests, 1,000-key space).',
  'FluxPay commit count: GitHub’s contributor list, 8 October 2026.',
];

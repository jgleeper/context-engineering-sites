{
  "title": "CONTEXT_ENGINEERING",
  "description": "Universal guide for using Cursor (and GPT tools) across full-stack, agent-based, or cinematic web projects.",
  "sections": {
    "Project Awareness & Context": [
      "Always read PLANNING.md",
      "Check TASK.md before new tasks",
      "Use consistent naming, structure, and patterns from PLANNING.md",
      "Clarify project type early: Website / Web App / AI Agent / API"
    ],
    "Cursor-Specific Gotchas & Rules": [
      "Use 'use client' in React hook files",
      "Avoid browser APIs in server components",
      "Avoid Math.random/Date.now in SSR",
      "Rename cached static assets (e.g. favicon)",
      "Ensure anchor hrefs match real DOM IDs",
      "Use consistent z-index and spacing",
      "Watch for hydration mismatches"
    ],
    "Code Structure & Modularity": {
      "rules": [
        "Keep files under 500 lines",
        "Organize by feature or function",
        "Use relative imports",
        "Use load_env() or .env.local"
      ],
      "structure": {
        "agents": ["agent.py/.ts", "tools.py/.ts", "prompts.py/.ts"],
        "web": ["/components", "/sections", "/app/layout.tsx", "/app/page.tsx"]
      }
    },
    "Web & Multi-Modal Awareness": [
      "Common tools: Next.js, TailwindCSS, TS, Framer Motion, Node.js",
      "Store assets in /public and use absolute paths",
      "Use next/image when possible",
      "Enable smooth scroll in globals.css",
      "Use vercel.json for rewrites or edge functions"
    ],
    "Testing & Reliability": {
      "test_policy": "Always create unit tests for new logic",
      "coverage": ["1 expected case", "1 edge case", "1 failure case"],
      "structure": "Tests mirror project structure under /tests"
    },
    "Task Completion": [
      "Mark tasks in TASK.md when done",
      "Log unexpected findings under 'Discovered During Work'",
      "Ask where updates belong if unsure"
    ],
    "Style & Conventions": {
      "Python": ["PEP8", "type hints", "black formatter", "pydantic", "FastAPI", "SQLAlchemy/SQLModel"],
      "JS/TS": ["tsx components", "PascalCase for components", "kebab-case for routes", "Use Tailwind"]
    },
    "Documentation & Explainability": [
      "Update README.md on changes",
      "Comment non-obvious code",
      "Use '# Reason:' for complex logic"
    ],
    "AI Behavior & Prompting Rules": [
      "Never assume missing context — ask",
      "Never hallucinate code or packages",
      "Confirm file paths/modules before use",
      "Only delete code if task explicitly calls for it"
    ],
    "Prompt Modularity": {
      "storage": ["prompts.py", "prompts.ts"],
      "format": "triple-quoted system prompt",
      "metadata_example": {"intent": "summarize", "tone": "friendly"}
    },
    "Project Kickoff Checklist": [
      "Read PLANNING.md and TASK.md",
      "Confirm tech stack",
      "Identify output type",
      "Ask for missing context",
      "Setup env, folder, and routing"
    ]
  }
}

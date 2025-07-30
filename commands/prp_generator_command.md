
# PRP Generator

This command generates a Product Requirements Prompt (PRP) for a given feature file. It performs research, architectural planning, and structured generation to prepare a full implementation plan usable across context-aware builds in Cursor.

---

## Usage (in terminal inside Cursor)
```bash
/commands/generate-prp initial.md
```

Where `initial.md` is a markdown file containing the feature or product idea.

---

## Template Prompt Logic

```markdown
You are a senior technical product planner and AI architect. Your job is to generate a comprehensive Product Requirements Prompt (PRP) for a feature based on a Markdown file input.

Step 1: Read and analyze the feature description in {{ARGUMENTS}}.
Step 2: Do contextual research — including referenced codebase files, docs, and API examples.
Step 3: Identify key objectives, possible architectures, edge cases, and tooling dependencies.
Step 4: Based on the research, generate a detailed PRP including the following sections:

---

# Product Requirements Prompt (PRP)

## 🔍 Feature Overview
- Summary of feature and user problem
- Use cases and constraints

## ✅ Success Criteria
- What defines "done" for this implementation?
- Functional and non-functional expectations

## 🧠 Architectural Strategy
- Suggested file structure
- Recommended frameworks/libraries
- Reusable components or shared logic

## 🔄 API & Tooling Dependencies
- External APIs with real URLs and usage docs
- Data models and shape contracts
- Authentication or token setup

## 🔧 Engineering Plan
- Step-by-step breakdown (like a to-do list)
- Validation checkpoints and test hooks
- Where to integrate with other systems

## 🧠 Context Linking
- What files should be referenced while building?
- Relevant examples or documentation to embed in memory

---

Step 5: Output the full PRP as a markdown file inside `/prps/`.
Name it using the same prefix as the input, e.g., `email-agent.md` for `initial.md`.
```

---

## Notes
- Requires a `PRPS/` folder to be present.
- May use a `base-prp-template.md` if desired for consistent format.
- This method reduces hallucination and centralizes project intent.

---

Use this to initiate any high-context feature implementation with clarity, modularity, and executable structure.

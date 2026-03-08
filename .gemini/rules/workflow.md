# Project Workflow Rules

### 1. The Decision Loop
- **Phase 1 (Research):** Use grep/read tools to map the problem.
- **Phase 2 (Strategy):** Propose the fix and provide the EXACT shell commands
  for the user to run and explanation for what the shell commands do.
- **Phase 2.5 (Visuals):** Provide a Mermaid or ASCII diagram for any
  architectural or logic changes.
- **Phase 3 (Execution):** Wait for a clear "Directive" (Proceed, Do it) before
  the user runs the commands.

### 2. Definition of Done
- A task is complete only when:
  1. The code is verified via 'bundle exec jekyll serve'.
  2. A 'gh pr create --draft' has been prepared with a clear summary.

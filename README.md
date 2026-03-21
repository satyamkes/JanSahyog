# JanSahyog

The system collects basic user details and documents through a simple web interface.

Uploaded documents are processed using OCR to extract relevant information such as age, income, and category.

A rule-based eligibility engine compares user data with structured government scheme rules stored in the database.

Only eligible schemes are recommended, along with a clear explanation of why the user qualifies or does not qualify.

Admins can manage schemes and eligibility rules through a dedicated dashboard.

## Suggestions to make this project stronger

- Add a clear setup guide (env vars, database seed data, and service startup order) so new contributors can run the full stack easily.
- Introduce automated tests for the frontend and backend (unit + integration) and wire them into CI for consistent quality checks.
- Provide API documentation (OpenAPI/Swagger for backend + AI service) to make endpoints and payloads discoverable.
- Add role-based access controls and audit logging for admin actions to improve security and traceability.
- Improve accessibility (ARIA labels, keyboard navigation, contrast checks) and add a basic UX review for critical flows.
- Add monitoring/observability (structured logs, health checks, and basic metrics) to help maintain production reliability.

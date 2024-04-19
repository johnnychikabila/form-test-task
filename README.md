# Form Test Task

## Technologies

- ReactJS v18.2.0
- TypeScript v4.9.5

## Description

This project is an enhancement of an existing ReactJS-based onboarding form library. The goal is to dynamically fetch questions via an API using Axios, integrating it into the application and implementing error handling mechanisms.

### Scope

- Integrate Axios into the existing ReactJS application to enable API requests for data fetching.
- Develop a new module within the application to handle API interactions for retrieving onboarding questions.
- Implement error handling mechanisms within the Axios requests to manage potential API call failures or data retrieval issues.
- Adapt the existing onboarding form to utilize the new module for fetching questions dynamically, replacing any static question sets.

### Implementation Details

- Blocks of the form are fetched via API request using Axios.
- Two additional components were created: `apiConfig` for loading data via API and `mockServer` with default data to substitute the API.
- If the API does not return form blocks upon request, blocks from the `mockServer` are loaded instead.
- Due to UI elements rendering faster than data loading into the state, an additional state for the loading status is utilized to suspend UI rendering until all necessary form blocks are loaded into the state.

### API Part

- The package used is [QuillForms](https://github.com/quillforms/quillforms).
- Documentation: [QuillForms React Docs](https://github.com/quillforms/quillforms/blob/master/react-docs).
- Blocks should be fetched by the API module from the endpoint `/api/v1/form/blocks`.
- One GET request should be made to receive data and pass it to the form as a property.
- For now, mock API response can be used.
- App.tsx should be clear, with all logic encapsulated in modules.

### Getting Started

To run the project locally, follow these steps:

1. Clone the repository: `git clone <repository-url>`
2. Install dependencies: `npm install`
3. Run the development server: `npm start`

---

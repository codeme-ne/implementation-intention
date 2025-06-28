\# Implementation Plan: Actionize (Prototyp v0.1)



This plan outlines the step-by-step instructions to build the "Actionize" prototype using the Next.js/TypeScript/Tailwind tech stack from tech-stack.md (not the static HTML/CSS/JS mentioned in PRD). It adheres to the Product Requirements (PRD), the specified Tech Stack, and the provided Cursor Rules.



---



\### Phase 1: Project Initialization \& Setup



\#### Step 1: Initialize Git Repository

\*   \*\*Instruction:\*\* Create a new local directory for the project and initialize a Git repository.

\*   \*\*Test:\*\* Run `git status` in the directory. The output should confirm that you are on the `main` (or `master`) branch and there are no commits yet.



\#### Step 2: Set up the Next.js Project

\*   \*\*Instruction:\*\* Use `create-next-app` to initialize a new Next.js project. Use the flags for TypeScript, Tailwind CSS, and the App Router. Use `pnpm` as the package manager.

&nbsp;   ```bash

&nbsp;   pnpm create next-app@latest actionize-app --typescript --tailwind --eslint --app

&nbsp;   ```

\*   \*\*Test:\*\* Navigate into the new `actionize-app` directory. Run `pnpm dev`. Open `http://localhost:3000` in your browser. You should see the default Next.js starter page.



\#### Step 3: Configure Cursor AI Rules

\*   \*\*Instruction:\*\* The `.mdc` files are already in `.cursor/rules/`. Before generating any code, ALWAYS consult the relevant `.mdc` files. Ignore any `*:Zone.Identifier` files.

\*   \*\*Test:\*\* In your file explorer, verify that the directory `.cursor/rules/` exists and contains the specified `.mdc` and `.md` files.



\#### Step 4: Initial Cleanup, Architecture Documentation and Commit

\*   \*\*Instruction:\*\* 
    1. In `app/page.tsx`, delete all the placeholder content inside the `<main>` tag, leaving only the empty tag.
    2. Create/update `architecture.md` with initial project structure, purpose, and planned data flow.

\*   \*\*Test:\*\* Run `pnpm dev`. The page at `http://localhost:3000` should now be completely blank. Verify `architecture.md` exists with content. Commit all changes to Git with the message "feat: initial project setup".



---



\### Phase 2: Building the User Interface



\#### Step 5: Create the UI Structure

\*   \*\*Instruction:\*\* In `app/page.tsx`, add the necessary HTML elements as defined in the PRD: a heading (`h1`), a text area (`<textarea>`), a button (`<button>`), and a `div` to later hold the output.

\*   \*\*Test:\*\* Refresh `http://localhost:3000`. You should see an unstyled heading, a text input area, a button, and no visible output area.



\#### Step 6: Apply Basic Styling with Tailwind CSS

\*   \*\*Instruction:\*\* Use Tailwind CSS utility classes to style the page following these specifications:
    - Background: `bg-gray-900`
    - Text: `text-gray-200`
    - Container: centered with `max-w-2xl`
    - TextArea/Button: `bg-gray-800 rounded-lg border border-gray-700`
    - Button specific: `bg-blue-600 hover:bg-blue-700`
    - Button text: "Klarheit schaffen"
    - Ensure you follow the conventions from `TAILWIND.mdc`.

\*   \*\*Test:\*\* The page at `http://localhost:3000` should now have a dark theme with properly styled components. Update `architecture.md` with UI structure details.



\#### Step 7: Add the "No Data Saved" Disclaimer

\*   \*\*Instruction:\*\* Add a small text element (`<p>`) below the main components with the text "Deine Eingaben werden nicht gespeichert.", as required by the PRD.

\*   \*\*Test:\*\* Refresh the page. The disclaimer text should be visible on the screen.



---



\### Phase 3: Implementing Frontend Logic



\#### Step 8: Manage Component State

\*   \*\*Instruction:\*\* In `app/page.tsx`, convert the component into a Client Component by adding `'use client'` at the top. Use the `useState` hook to create state variables for the user's input (`userInput`), the AI's output (`aiOutput`), and the loading status (`isLoading`).

\*   \*\*Test:\*\* Use the React Developer Tools extension in your browser to inspect the component. Verify that the three state variables (`userInput`, `aiOutput`, `isLoading`) exist and have their initial values.



\#### Step 9: Create the Backend API Route

\*   \*\*Instruction:\*\* Create a new API route file at `app/api/actionize/route.ts`. In this file, create a `POST` function that accepts a request. For now, make it return a hardcoded JSON success message, like `{ "message": "Success" }`.

\*   \*\*Test:\*\* Use a tool like Postman or the browser's `fetch` console to send a `POST` request to `http://localhost:3000/api/actionize`. You should receive a `200 OK` response with the hardcoded JSON body.



\#### Step 10: Connect UI to the API Route

\*   \*\*Instruction:\*\* Create an `async` function in `app/page.tsx` to handle the button click. This function should:

&nbsp;   1.  Set `isLoading` to `true`.

&nbsp;   2.  Make a `POST` request to `/api/actionize` using `fetch`, sending the `userInput` state in the body.

&nbsp;   3.  Set `aiOutput` to the response from the API.

&nbsp;   4.  Set `isLoading` to `false`.

&nbsp;   5.  Connect this function to the button's `onClick` event.

\*   \*\*Test:\*\* On the web page, type something into the text area and click the button. Check the browser's Network tab in the developer tools. You should see a `POST` request to `/api/actionize`. The output area on the page should display the hardcoded success message.



\#### Step 11: Display Loading State and Error Handling

\*   \*\*Instruction:\*\* 
    1. Modify the component's JSX to conditionally render a loading indicator (e.g., the text "Analysiere...") whenever the `isLoading` state is `true`. The button should also be disabled during this time.
    2. Add basic error handling:
       - Empty text field: Display "Bitte gib zuerst deine Gedanken ein." via `aiOutput` state
       - API errors: Display "Entschuldigung, es ist ein Fehler aufgetreten. Bitte versuche es später erneut." via `aiOutput` state

\*   \*\*Test:\*\* 
    - Click button with empty field: Should see the empty field error message
    - Click button with text: Loading indicator should appear and button becomes disabled
    - Update `architecture.md` with state management details



---



\### Phase 4: AI Integration \& Finalization



\#### Step 12: Securely Store the OpenAI API Key

\*   \*\*Instruction:\*\* Create a `.env.local` file in the project root. Add your OpenAI API key to this file: `OPENAI\_API\_KEY=sk-...`. Add `.env.local` to your `.gitignore` file to ensure the key is never committed.

\*   \*\*Test:\*\* In `app/api/actionize/route.ts`, temporarily add `console.log(process.env.OPENAI\_API\_KEY)`. Run the app and trigger the API call. The key should be printed in the terminal where your Next.js server is running, NOT in the browser console. Remove the `console.log` afterward. Note: Next.js API routes run server-side, so the API key in `process.env` is never sent to the client.



\#### Step 13: Implement the OpenAI API Call

\*   \*\*Instruction:\*\* In `app/api/actionize/route.ts`, replace the hardcoded response:
    1. Install OpenAI SDK: `pnpm add openai`
    2. Import and configure OpenAI client with the API key from `process.env.OPENAI\_API\_KEY`
    3. Use model `gpt-4o` to process the user input
    4. Construct a prompt that instructs the AI to take the user's input and convert it into a list of concrete next actions (each starting with "NÄCHSTER SCHRITT:"), as described in the PRD's user flow
    5. Update `architecture.md` with API integration details

\*   \*\*Test:\*\* Type a sample "brain dump" (e.g., "Steuererklärung, Mama anrufen, Reifen wechseln") into the UI and click the button. The output area should now display a properly formatted action list generated by the AI.



\#### Step 14: Prepare for Deployment

\*   \*\*Instruction:\*\* Push all your committed code to a new repository on GitHub.

\*   \*\*Test:\*\* Verify that all your files, including the `.cursor/rules` directory but excluding `.env.local` and `node\_modules`, are present in the GitHub repository.



\#### Step 15: Deploy to Vercel

\*   \*\*Instruction:\*\* Create a new project on Vercel and connect it to your GitHub repository. Add the `OPENAI\_API\_KEY` as an environment variable in the Vercel project settings. Trigger a deployment. Update `architecture.md` with deployment information.

\*   \*\*Test:\*\* Open the public URL provided by Vercel. The application should be fully functional. Enter some text, click the button, and verify that you receive a valid, AI-generated action plan. The prototype is now live. Final update to `architecture.md` with complete system overview.


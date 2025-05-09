<h1>📘 Dynamic Form Management API (Node.js + Express + MongoDB)</h1>

<p>
  This backend system enables creation, assignment, and tracking of dynamic forms 
  across users and companies. Built using <strong>Node.js</strong>, 
  <strong>Express.js</strong>, and <strong>MongoDB</strong>, it supports:
</p>

<ul>
  <li>Multi-level nested forms (Sections → Subsections → Tasks)</li>
  <li>Form assignment to users per company</li>
  <li>Per-user response submission and tracking</li>
</ul>

<hr />

<h2>Technologies Used</h2>
<ul>
  <li>Node.js + Express.js</li>
  <li>MongoDB + Mongoose</li>
  <li>CORS, dotenv</li>
</ul>

<hr />

<h2>Project Structure</h2>

<pre>
.
├── config/                    # DB connection setup
├── controllers/              # Route logic
│   └── apiControllers/v1Controllers/
├── models/                   # Mongoose schemas
├── routes/api/v1/            # API v1 endpoints
├── index.js                  # Entry point
├── .env                      # Secrets (in .gitignore)
├── .env.example              # Template for environment variables
└── README.md
</pre>

<hr />

<h2>Setup Instructions</h2>

<ol>
  <li>Clone the repository:
    <pre><code>git clone https://github.com/Salman-Irfan/dynamicFormBuilderApi.git</code></pre>
  </li>
  <li>Install dependencies:
    <pre><code>npm install</code></pre>
  </li>
  <li>Create your <code>.env</code> file from the example:
    <pre><code>cp .env.example .env</code></pre>
    Example content:
    <pre><code>PORT=5000
MONGO_URI=mongodb+srv://user:pass@cluster.mongodb.net/db</code></pre>
  </li>
  <li>Start the server:
    <pre><code>npm run dev</code></pre>
  </li>
</ol>

<hr />

<h2>Available API Endpoints</h2>

<h3>Company</h3>
<table border="1" cellpadding="6">
  <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
  <tr><td>POST</td><td>/api/v1/company/create-company</td><td>Create a new company</td></tr>
  <tr><td>GET</td><td>/api/v1/company/get-all-companies</td><td>Get all companies</td></tr>
</table>

<h3>User</h3>
<table border="1" cellpadding="6">
  <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
  <tr><td>POST</td><td>/api/v1/user/create-user</td><td>Create user & assign companies</td></tr>
  <tr><td>GET</td><td>/api/v1/user/get-all-users</td><td>List all users</td></tr>
</table>

<h3>Form</h3>
<table border="1" cellpadding="6">
  <tr><th>Method</th><th>Endpoint</th><th>Description</th></tr>
  <tr><td>POST</td><td>/api/v1/form/create-form</td><td>Create a form with nested sections</td></tr>
  <tr><td>GET</td><td>/api/v1/form/get-all-forms</td><td>Fetch all forms</td></tr>
  <tr><td>POST</td><td>/api/v1/form/submit-response</td><td>Submit form response</td></tr>
  <tr><td>GET</td><td>/api/v1/form/get-all-form-responses</td><td>Get all submitted responses</td></tr>
  <tr><td>GET</td><td>/api/v1/form/:formId/:companyId/pending-users</td><td>List users who haven't responded</td></tr>
</table>

<hr />

<h2>Sample Payloads</h2>

<h4>Form Creation</h4>
<pre><code>{
  "title": "Deployment Checklist",
  "sections": [
    {
      "title": "Stage 1",
      "subsections": [
        {
          "title": "Verification",
          "tasks": [
            {
              "title": "Did tests pass?",
              "answerType": "Dropdown",
              "options": ["Yes", "No"]
            }
          ]
        }
      ]
    }
  ],
  "assignedUsers": ["user_id"],
  "assignedCompanies": ["company_id"]
}
</code></pre>

<h4>Submit Form Response</h4>
<pre><code>{
  "formId": "form_id",
  "userId": "user_id",
  "companyId": "company_id",
  "responses": [
    {
      "sectionTitle": "Stage 1",
      "subsectionTitle": "Verification",
      "taskTitle": "Did tests pass?",
      "answer": "Yes"
    }
  ]
}
</code></pre>

<hr />

<h2>Middleware Explanation</h2>

<pre><code>app.use(express.json());</code></pre>
<p>Parses JSON body from incoming requests</p>

<pre><code>app.use(express.urlencoded({ extended: true }));</code></pre>
<p>Parses URL-encoded data (e.g. from forms, or server file uploads); <code>extended: true</code> allows nested objects</p>

<pre><code>app.use(cors());</code></pre>
<p>Enables cross-origin requests from frontend clients</p>

<hr />

<h2>.env File Template</h2>

<pre><code># .env.example
PORT=5000
MONGO_URI=mongodb+srv://your-user:your-pass@cluster.mongodb.net/db
</code></pre>

<hr />



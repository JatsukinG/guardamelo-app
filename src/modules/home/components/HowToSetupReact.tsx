import { Light as SyntaxHighlighter } from 'react-syntax-highlighter'
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs'

const HowToSetupReact = () => {
  const steps = [
    {
      title: 'Step 1: Install Node.js',
      description: 'Make sure you have Node.js installed. You can download it from [Node.js official site](https://nodejs.org/).',
      command: 'node -v',
    },
    {
      title: 'Step 2: Create a New React App',
      description: 'Use Create React App to quickly start a new project:',
      command: 'npx create-react-app my-app',
    },
    {
      title: 'Step 3: Navigate into the Project',
      description: 'Go to the newly created project folder:',
      command: 'cd my-app',
    },
    {
      title: 'Step 4: Start the Development Server',
      description: 'Run the following command to start your development server:',
      command: 'npm start',
    },
    {
      title: 'Step 5: Install Tailwind CSS',
      description: 'Now let\'s set up Tailwind CSS by installing the necessary dependencies:',
      command: 'npm install -D tailwindcss postcss autoprefixer',
    },
    {
      title: 'Step 6: Configure Tailwind',
      description: 'Generate the Tailwind config file:',
      command: 'npx tailwindcss init',
    },
    {
      title: 'Step 7: Update Tailwind Config',
      description: 'Add the paths to all your templates in the `tailwind.config.js` file:',
      command: `module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {},
  },
  plugins: [],
};`,
    },
    {
      title: 'Step 8: Import Tailwind CSS',
      description: 'Finally, import Tailwind into your CSS file (e.g., `src/index.css`):',
      command: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
    },
  ]

  return (
      <div className="p-4">
        <div className="bg-white rounded-lg p-4 md:p-8">
          <div className="max-w-3xl">
            <h1 className="text-gray-600 text-3xl font-bold mb-8">How to Create a React Project</h1>
            {steps.map((step, index) => (
                <div key={index} className="mb-12">
                  <h2 className="text-gray-500 text-xl font-semibold mb-2">{step.title}</h2>
                  <p className="text-gray-400 mb-2">{step.description}</p>
                  <SyntaxHighlighter language="bash" style={atomOneDark} customStyle={{ borderRadius: '10px' }}>
                    {step.command}
                  </SyntaxHighlighter>
                </div>
            ))}
          </div>
        </div>
      </div>
  )
}

export default HowToSetupReact

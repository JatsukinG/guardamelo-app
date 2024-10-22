import MainCard from '@/components/cards/MainCard'
import CommandCard from '@/modules/projects/components/CommandCard'
import SyntaxCard from '@/modules/projects/components/SyntaxCard'

const HowToSetupReact = () => {
  const steps = [
    {
      title: 'Step 1: Install Node.js',
      description: 'Make sure you have Node.js installed. You can download it from [Node.js official site](https://nodejs.org/).',
      type: 'command',
      syntax: 'node -v',
    },
    {
      title: 'Step 2: Create a New React App',
      description: 'Use Create React App to quickly start a new project:',
      type: 'command',
      syntax: 'npx create-react-app my-app',
    },
    {
      title: 'Step 3: Navigate into the Project',
      description: 'Go to the newly created project folder:',
      type: 'command',
      syntax: 'cd my-app',
    },
    {
      title: 'Step 4: Start the Development Server',
      description: 'Run the following command to start your development server:',
      type: 'command',
      syntax: 'npm start',
    },
    {
      title: 'Step 5: Install Tailwind CSS',
      description: 'Now let\'s set up Tailwind CSS by installing the necessary dependencies:',
      type: 'command',
      syntax: 'npm install -D tailwindcss postcss autoprefixer',
    },
    {
      title: 'Step 6: Configure Tailwind',
      description: 'Generate the Tailwind config file:',
      type: 'command',
      syntax: 'npx tailwindcss init',
    },
    {
      title: 'Step 7: Update Tailwind Config',
      description: 'Add the paths to all your templates in the `tailwind.config.js` file:',
      type: 'file',
      syntax: `module.exports = {
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
      type: 'file',
      syntax: `@tailwind base;
@tailwind components;
@tailwind utilities;`,
    },
  ]

  return (
      <MainCard>
        <div className="max-w-3xl">
          <h1 className="text-gray-600 text-3xl font-bold mb-8">How to Create a React Project</h1>
          {steps.map((step, index) => (
              <div key={index} className="mb-12">
                <h2 className="text-gray-500 text-xl font-semibold mb-2">{step.title}</h2>
                <p className="text-gray-400 mb-2">{step.description}</p>
                {
                    step.type === 'command' &&
                    <CommandCard value={step.syntax}/>
                }
                {
                    step.type === 'file' &&
                    <SyntaxCard value={step.syntax}/>
                }
                {/*<SyntaxHighlighter language="bash" style={atomOneDark} customStyle={{ borderRadius: '10px' }}>*/}
                {/*  {step.command}*/}
                {/*</SyntaxHighlighter>*/}
              </div>
          ))}
        </div>
      </MainCard>
  )
}

export default HowToSetupReact

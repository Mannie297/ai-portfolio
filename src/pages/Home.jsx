import { Link } from 'react-router-dom';
import aiImageGen from '../assets/images/ai-image-gen.jpg';
import nlp from '../assets/images/nlp.jpg';
import mlDashboard from '../assets/images/ml-dashboard.jpg';
import chatbot from '../assets/images/chatbot.jpg';
import cvSystem from '../assets/images/cv-system.jpg';

const projects = [
  {
    id: 'ai-image-generation',
    title: "AI Image Generation",
    description: "A web application that generates images using AI models",
    image: aiImageGen,
    technologies: ["Streamlit", "Python", "Stable Diffusion model","PyTorch", "Transformers"]
  },
  {
    id: 'nlp-text-analysis',
    title: "Natural Language Processing",
    description: "Text analysis and sentiment detection using NLP",
    image: nlp,
    technologies: ["Streamlit", "Python", "BERT", "NER"]
  },
  {
    id: 'ml-dashboard',
    title: "Machine Learning Dashboard",
    description: "Interactive dashboard for ML model visualization",
    image: mlDashboard,
    technologies: ["Streamlit", "Python", "Plotly", "Pandas"]
  },
  {
    id: 'ai-chatbot',
    title: "AI Chatbot",
    description: "Conversational AI assistant with natural language understanding",
    image: chatbot,
    technologies: ['React', 'Tailwind CSS', 'Typescript', 'OpenAI API', 'Axios', 'Node.js']
  },
  {
    id: 'computer-vision',
    title: "Computer Vision System",
    description: "Real-time object detection and recognition",
    image: cvSystem,
    technologies: ['OpenCV', 'Streamlit', 'Ultralytics YOLO']
  }
];

function Home() {
  return (
    <div className="container mx-auto px-4 py-8">
      <header className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">Emmanuel Okelue - AI/ ML Portfolio</h1>
        <p className="text-xl text-gray-600">Showcasing my work in Artificial Intelligence and Machine Learning</p>
      </header>

      <div className="max-w-4xl mx-auto">
        {projects.map((project, index) => (
          <div key={project.id} className="mb-16">
            <div className="bg-white rounded-lg border border-gray-200 shadow-sm">
              <Link
                to={`/project/${project.id}`}
                className="block"
              >
                <div className="flex flex-col md:flex-row">
                  <div className="md:w-1/3">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-48 md:h-full object-cover rounded-t-lg md:rounded-l-lg md:rounded-tr-none"
                    />
                  </div>
                  <div className="p-8 md:w-2/3">
                    <h2 className="text-2xl font-bold text-gray-800 mb-4">
                      {project.title}
                    </h2>
                    <p className="text-gray-600 mb-6">{project.description}</p>
                    <div className="flex flex-wrap gap-2 justify-center">
                      {project.technologies.map((tech, index) => (
                        <span
                          key={index}
                          className="bg-gray-100 text-gray-800 text-sm font-medium px-3 py-1 rounded-full"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </Link>
            </div>
            {index < projects.length - 1 && (
              <div className="mt-16">
                <div className="h-1 bg-gradient-to-r from-blue-400 via-blue-500 to-blue-400 shadow-lg shadow-blue-500/50"></div>
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Home; 
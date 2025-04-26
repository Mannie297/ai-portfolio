import { useParams, Link } from 'react-router-dom';
import demo from '../assets/images/demo.png'
import streamlitApp from '../assets/images/streamlit_app.png'
import dashboard from '../assets/images/dashboard.png'
import chatinterface from '../assets/images/chatinterface.png'
import cvSystem2 from '../assets/images/cvsystem2.png'

const projects = [
  {
    id: 'ai-image-generation',
    title: 'AI Image Generation',
    description: 'Generate unique images using advanced AI models',
    image: demo,
    technologies: ['Streamlit', 'Python', 'Stable Diffusion model', 'PyTorch', 'Transformers'],
    details: 'This project uses state-of-the-art AI models to generate unique images based on text prompts. The application is built with Streamlit and uses PyTorch for model inference.',
    githubLink: 'https://github.com/Mannie297/ai-image-generator',
    demoLink: 'https://github.com/Mannie297/ai-image-generator'
  },
  {
    id: 'nlp-text-analysis',
    title: 'NLP Text Analysis',
    description: 'Analyze and process text using Natural Language Processing',
    image: streamlitApp,
    technologies: ['Streamlit', 'Python', 'BERT', 'NER'],
    details: 'A comprehensive text analysis tool that uses BERT and NER models to extract insights from text data. Built with Streamlit for easy interaction.',
    githubLink: 'https://github.com/Mannie297/advanced-nlp-system',
    demoLink: 'https://github.com/Mannie297/advanced-nlp-system'
  },
  {
    id: 'ml-dashboard',
    title: 'ML Dashboard',
    description: 'Interactive dashboard for machine learning model monitoring',
    image: dashboard,
    technologies: ['Streamlit', 'Python', 'Plotly', 'Pandas'],
    details: 'An interactive dashboard for monitoring machine learning model performance. Features real-time updates and comprehensive visualizations.',
    githubLink: 'https://github.com/Mannie297/machine_learning_dashboard',
    demoLink: 'https://github.com/Mannie297/machine_learning_dashboard'
  },
  {
    id: 'ai-chatbot',
    title: 'AI Chatbot',
    description: 'Intelligent chatbot powered by advanced language models',
    image: chatinterface,
    technologies: ['React', 'Tailwind CSS', 'Typescript', 'OpenAI API', 'Axios', 'Node.js'],
    details: 'A conversational AI assistant that uses advanced language models to provide natural and helpful responses.',
    githubLink: 'https://github.com/Mannie297/ai-chatbot',
    demoLink: 'https://github.com/Mannie297/ai-chatbot'
  },
  {
    id: 'computer-vision',
    title: 'Computer Vision System',
    description: 'Real-time object detection and image classification',
    image: cvSystem2,
    technologies: ['OpenCV', 'Streamlit', 'Ultralytics YOLO'],
    details: 'A real-time computer vision system that can detect and classify objects in images and video streams.',
    githubLink: 'https://github.com/Mannie297/computer-vision',
    demoLink: 'https://github.com/Mannie297/computer-vision'
  }
];

function ProjectDetails() {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);

  if (!project) {
    return (
      <div className="container mx-auto px-4 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-800">Project not found</h1>
        <Link to="/" className="text-blue-600 hover:text-blue-800 mt-4 inline-block">
          Return to Home
        </Link>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <Link
        to="/"
        className="inline-flex items-center text-blue-600 hover:text-blue-800 mb-8"
      >
        <svg
          className="w-5 h-5 mr-2"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        Back to Projects
      </Link>

      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-98 object-cover"
        />
        <div className="p-8">
          <h1 className="text-3xl font-bold text-gray-800 mb-4">
            {project.title}
          </h1>
          <p className="text-gray-600 text-lg mb-6">{project.details}</p>
          
          <div className="mb-8 text-center">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Technologies Used</h2>
            <div className="flex flex-wrap gap-2 justify-center">
              {project.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="bg-blue-100 text-blue-800 text-sm font-medium px-3 py-1 rounded-full"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href={project.githubLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-gray-800 text-white px-6 py-2 rounded-lg hover:bg-gray-700 transition-colors"
            >
              View on GitHub
            </a>
            <a
              href={project.demoLink}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors"
            >
              Live Demo
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProjectDetails; 
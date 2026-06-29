import {
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaReact,
  FaBootstrap,
  FaMobileAlt,
  FaNodeJs,
  FaPython,
  FaGitAlt,
  FaGithub,
  FaNpm,
} from 'react-icons/fa';
import {
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiNetlify,
  SiVercel,
  SiJsonwebtokens,
} from 'react-icons/si';
import { TbApi, TbRoute, TbBrain } from 'react-icons/tb';
import { HiOutlineShieldCheck, HiOutlineCube } from 'react-icons/hi';
import { BiErrorCircle } from 'react-icons/bi';
import { MdSchema } from 'react-icons/md';
import { VscVscode } from 'react-icons/vsc';

export const skillCategories = [
  {
    category: 'Frontend',
    skills: [
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26', proficiency: 90 },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', proficiency: 88 },
      { name: 'JavaScript', icon: FaJsSquare, color: '#F7DF1E', proficiency: 85 },
      { name: 'React.js', icon: FaReact, color: '#61DAFB', proficiency: 88 },
      { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', proficiency: 82 },
      { name: 'Responsive Design', icon: FaMobileAlt, color: '#38BDF8', proficiency: 90 },
    ],
  },
  {
    category: 'Backend',
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933', proficiency: 85 },
      { name: 'Express.js', icon: SiExpress, color: '#FFFFFF', proficiency: 83 },
      { name: 'Python', icon: FaPython, color: '#3776AB', proficiency: 78 },
      { name: 'REST APIs', icon: TbApi, color: '#38BDF8', proficiency: 87 },
      { name: 'JWT Authentication', icon: SiJsonwebtokens, color: '#FB015B', proficiency: 85 },
    ],
  },
  {
    category: 'Database',
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', proficiency: 84 },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', proficiency: 75 },
    ],
  },
  {
    category: 'Tools',
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032', proficiency: 85 },
      { name: 'GitHub', icon: FaGithub, color: '#FFFFFF', proficiency: 88 },
      { name: 'VS Code', icon: VscVscode, color: '#007ACC', proficiency: 92 },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37', proficiency: 82 },
      { name: 'Netlify', icon: SiNetlify, color: '#00C7B7', proficiency: 78 },
      { name: 'Vercel', icon: SiVercel, color: '#FFFFFF', proficiency: 78 },
      { name: 'npm', icon: FaNpm, color: '#CB3837', proficiency: 85 },
    ],
  },
  {
    category: 'Core',
    skills: [
      { name: 'MVC Architecture', icon: HiOutlineCube, color: '#60A5FA', proficiency: 82 },
      { name: 'Protected Routing', icon: TbRoute, color: '#22C55E', proficiency: 85 },
      { name: 'State Management', icon: HiOutlineShieldCheck, color: '#A78BFA', proficiency: 80 },
      { name: 'Schema Design', icon: MdSchema, color: '#F59E0B', proficiency: 78 },
      { name: 'REST API Design', icon: TbApi, color: '#38BDF8', proficiency: 85 },
      { name: 'Error Handling', icon: BiErrorCircle, color: '#EF4444', proficiency: 82 },
      { name: 'Problem Solving', icon: TbBrain, color: '#8B5CF6', proficiency: 90 },
    ],
  },
];

export type Project = {
  title: string;
  description: string;
  stack: string[];
  githubUrl: string;
  featured?: boolean;
};

export const projects: Project[] = [
  {
    title: 'Event Hub Platform',
    description:
    'Cloud-native event discovery platform aggregating local activities into a unified data model.' + 
    'Built with Rust and Angular, the system focuses on data processing, API design, and containerized deployment using AWS, Docker, and Kubernetes.',
    stack: ['Rust', 'Angular', 'Kubernetes', 'AWS', 'Docker'],
    githubUrl: 'https://github.com/alexops-dev/Event-Hub-Platform',
    featured: true,
  },
  {
    title: 'Noise Monitoring System',
    description:
        'Embedded IoT system for real-time environmental noise monitoring using ESP32.' + 
        'Streams sensor data to the cloud for analysis, combining low-level hardware integration with backend processing and connectivity.',  
    stack: ['C++', 'ESP32', 'Real-time', 'Embedded', 'IoT'],
    githubUrl: 'https://github.com/alexops-dev/IoT-Noise-Monitoring-System-ESP32',
    featured: true,
  },
  {
    title: 'RFID Inventory Service',
    description:
        'Web-based system for contactless device tracking using RFID and MIFARE.' + 
        'Designed for managing physical inventory with a backend service and simple user interface for check-in and check-out workflows.',
    stack: ['Python', 'Rest API', 'JavaScript', 'Full-stack'],
    githubUrl: 'https://github.com/alexops-dev/RFID-Inventory-Service',
    featured: true,
  },
  {
    title: '6DOF Tracking System',
    description:
      '6DOF Tracking System is a machine learning-based solution for predicting user motion in virtual reality environments.' +
      'The system was developed in collaboration with the Fraunhofer Institute as part of an applied research project, focusing on optimizing volumetric video streaming over 5G networks. It utilizes a combination of Python and machine learning techniques to achieve accurate tracking and enhance the VR experience.',
    stack: ['Python', 'Machine Learning', 'VR', 'PyTorch'],
    githubUrl: 'https://github.com/alexops-dev/6DOF-Tracking-System',
  },
];
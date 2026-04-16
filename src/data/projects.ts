export type Project = {
  title: string;
  category: string[];
  description: string;
  stack: string[];
  githubUrl: string;
};

export const projects: Project[] = [
  {
    title: 'Event Hub Platform',
    category: ["Cloud-Native Project"],
    description:
    `Cloud-native event discovery platform aggregating local activities into a unified data model.
     Built with Rust and Angular, the system focuses on data processing, API design, and containerized deployment using AWS, Docker, and Kubernetes.`,
    stack: ['Rust', 'Angular', 'Kubernetes', 'AWS', 'Docker'],
    githubUrl: 'https://github.com/alexops-dev/Event-Hub-Platform',
  },
  {
    title: 'Noise Monitoring System',
    category: ["IoT Project"],    
    description:
        `Embedded IoT system for real-time environmental noise monitoring using ESP32.
         Streams sensor data to the cloud for analysis, combining low-level hardware integration with backend processing and connectivity.`,  
    stack: ['C++', 'ESP32', 'Real-time', 'Embedded', 'IoT'],
    githubUrl: 'https://github.com/alexops-dev/IoT-Noise-Monitoring-System-ESP32',
  },
  {
    title: 'RFID Inventory Service',
    category: ["IoT Project"],
    description:
        `Web-based system for contactless device tracking using RFID and MIFARE. 
         Designed for managing physical inventory with a backend service and simple user interface for check-in and check-out workflows.`,
    stack: ['Python', 'Rest API', 'JavaScript', 'Full-stack'],
    githubUrl: 'https://github.com/alexops-dev/RFID-Inventory-Service',
  },
  {
    title: '6DOF Tracking System',
    category: ["AI/ML Project"],
    description: 
        `Machine learning–based system for predicting user motion in virtual reality environments.
        Developed in collaboration with the Fraunhofer Institute as part of an applied research project.
        Focuses on optimizing volumetric video streaming over 5G networks.
        Combines Python and ML techniques.`,
    stack: ['Python', 'Machine Learning', 'VR', 'PyTorch'],
    githubUrl: 'https://github.com/alexops-dev/6DOF-Tracking-System',
  },
{
    title: 'Vending System Simulation',
    category: ["Software Engineering Project"],
    description: `
        C++-based simulation of a coffee vending machine with a graphical interface built in Qt.
        Models real-time system behavior including user interaction, payment flow, and dispensing logic.
        Includes unit, integration, and system-level testing for core components.
        Originally developed as a team project and finalized individually.
       `,
    stack: ['C++', 'Qt', 'GUI', 'PyTorch', 'Testing'],
    githubUrl: 'https://github.com/alexops-dev/Real-Time-Vending-System-Simulation',
  },
];
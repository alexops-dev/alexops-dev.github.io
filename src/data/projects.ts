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
      'Cloud-native platform project focused on scalable architecture, container orchestration, and modern full-stack engineering with Rust, Angular, and Kubernetes.',
    stack: ['Rust', 'Angular', 'Kubernetes'],
    githubUrl: 'https://github.com/alexops-dev/Event-Hub-Platform',
    featured: true,
  },
  {
    title: 'IoT Noise Monitoring System (ESP32)',
    description:
      'Embedded IoT system for real-time environmental noise monitoring, built with ESP32 and designed to collect and stream sound-level data from physical devices.',
    stack: ['C++', 'ESP32', 'FreeRTOS', 'Wi-Fi', 'IoT'],
    githubUrl: 'https://github.com/alexops-dev/IoT-Noise-Monitoring-System-ESP32',
    featured: true,
  },
  {
    title: 'RFID Inventory Service',
    description:
      'Web-based inventory and lending system using RFID and MIFARE technologies to support contactless tracking and return workflows for physical devices.',
    stack: ['Python', 'RFID', 'MIFARE', 'Web App'],
    githubUrl: 'https://github.com/alexops-dev/RFID-Inventory-Service',
  },
  {
    title: '6DOF Tracking System',
    description:
      'Applied machine-learning project for predicting user motion in virtual reality environments, developed in a research-oriented context with a focus on tracking and motion analysis.',
    stack: ['Python', 'Machine Learning', 'VR', 'Tracking'],
    githubUrl: 'https://github.com/alexops-dev/6DOF-Tracking-System',
  },
];
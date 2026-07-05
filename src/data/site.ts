export const site = {
  name: 'Brandon LiWang',
  role: 'Mechanical Engineer · UC Berkeley',
  tagline:
    'I design and build autonomous sensing platforms — the mechanical design, the embedded electronics, and the software in between. My methane-seeking UGV work is accepted for publication in IEEE.',
  email: 'liwang.brandon@gmail.com',
  github: 'https://github.com/B-Dud3',
  linkedin: 'https://www.linkedin.com/in/brandon-liwang-1a8792318',
  skillGroups: [
    {
      label: 'Design & Fabrication',
      items: ['CAD (SolidWorks, Fusion)', 'Composites (fiberglass, carbon fiber)', '3D printing optimization', 'Rapid prototyping', 'Woodshop'],
    },
    {
      label: 'Software',
      items: ['Python', 'MATLAB', 'C++', 'Simulink', 'Linux', 'Git'],
    },
    {
      label: 'Hardware & Embedded',
      items: ['Arduino', 'Raspberry Pi', 'Soldering', 'Sensor & embedded integration'],
    },
    {
      label: 'Other',
      items: ['Machine learning & neural networks', 'Data processing & analysis', 'Drone piloting (Part 107 certified)'],
    },
  ],
  experience: [
    {
      org: 'UC Merced — MESA Lab',
      role: 'Engineering Research Intern',
      period: 'June 2024 – August 2025',
      bullets: [
        'Built an autonomous methane-seeking UGV: modular sensor housings, two-phase waypoint algorithm (area-enclosing sweep → concentration-guided convergence), and full mechanical/electrical/software integration (Raspberry Pi, Pixhawk, sensors).',
        'Used CAD and rapid prototyping to build and refine functional assemblies under tight timelines.',
        'Trained undergraduates and worked alongside graduate and post-doctoral researchers.',
      ],
    },
  ],
  education: {
    school: 'University of California, Berkeley',
    degree: 'B.S. Mechanical Engineering (undergraduate)',
  },
  publication: {
    title:
      'A low-cost autonomous diffusing gas source detection system with a UGV and empirical observability Gramian',
    venue: 'IEEE',
    status: 'Accepted (in press)',
  },
};

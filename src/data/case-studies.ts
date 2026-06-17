export type CaseStudySection = {
  title: string;
  content: string[];
};

export type CaseStudyType = {
  slug: string;
  projectName: string;
  tagline: string;
  liveUrl?: string;
  githubUrl?: string;
  heroImage?: string;
  sections: CaseStudySection[];
  techStack: string[];
};

export const caseStudiesData: Record<string, CaseStudyType> = {
  joyfund: {
    slug: "joyfund",
    projectName: "JoyFund",
    tagline: "A mobile-first healthcare crowdfunding platform for Cameroon.",
    liveUrl: "https://joy-fund.com",
    heroImage: "/joyfund-logo.jpeg",
    sections: [
      {
        title: "The Problem",
        content: [
          "Healthcare funding in Cameroon lacks transparency and secure mechanisms for medical campaigns. Donors have no visibility into how their contributions are used, and campaign organizers struggle with fragmented payment systems and manual tracking.",
          "Existing crowdfunding platforms don't cater to the local market needs — mobile money integration, multiple user portals, and real-time transparency are essential.",
        ],
      },
      {
        title: "My Approach",
        content: [
          "Architected a voucher-based escrow system that ensures funds are only released when predefined milestones are met. This provides donors with full transparency and campaign owners with reliable fund management.",
          "Integrated MTN MoMo and Orange Money via Campay API for seamless mobile payments, which is critical for the Cameroonian market where mobile money dominates.",
          "Built 6 distinct user portals (admin, campaign owner, donor, beneficiary, etc.) each with role-specific dashboards and permissions.",
          "Used Django REST Framework for the backend with PostgreSQL for data persistence, Celery + RabbitMQ for async task processing (receipt generation, notifications), and Redis for caching.",
          "Real-time updates via WebSockets for campaign progress tracking and proportional refund capabilities for unsuccessful campaigns.",
        ],
      },
      {
        title: "Results / Impact",
        content: [
          "Successfully launched a production-ready healthcare crowdfunding platform serving the Cameroonian market.",
          "Enabled transparent, verifiable donation tracking with escrow-based fund release — a first in the local market.",
          "Built a comprehensive multi-portal system supporting all stakeholders in the healthcare funding ecosystem.",
          "Gained deep expertise in fintech integration, escrow mechanisms, and multi-tenant architecture design.",
        ],
      },
    ],
    techStack: ["Django", "Django REST Framework", "Next.js", "Python", "React", "Docker", "PostgreSQL", "GeoDjango", "RabbitMQ", "Redis", "Celery", "WebSockets"],
  },
  trixly: {
    slug: "trixly",
    projectName: "Trixly",
    tagline: "An all-in-one productivity tool for freelancers and teams.",
    liveUrl: "https://trixly.vercel.app",
    heroImage: "/time.png",
    sections: [
      {
        title: "The Problem",
        content: [
          "Freelancers and small teams struggle with bloated, expensive project management tools that have steep learning curves. Existing solutions like Jira and Asana are overkill for independent contractors who need simple time tracking, task management, and client reporting.",
        ],
      },
      {
        title: "My Approach",
        content: [
          "Built a lightweight, focused platform using Next.js with Prisma ORM for database management. The goal was to create something that just works — no unnecessary complexity.",
          "Implemented time tracking with start/stop functionality, project-based organization, and daily reporting that automatically generates client-ready summaries.",
          "Focused on a clean, minimal UI that reduces friction. The platform loads fast and works seamlessly on both desktop and mobile.",
          "Used Next.js API routes for the backend, keeping the entire stack in one framework for rapid development and easy deployment.",
        ],
      },
      {
        title: "Results / Impact",
        content: [
          "Delivered a production-ready SaaS platform that streamlines workflow management for independent contractors.",
          "Proved that a single-developer team can build a competitive productivity tool using modern web technologies.",
          "Received positive feedback from beta users who appreciated the simplicity and focus on core features.",
        ],
      },
    ],
    techStack: ["Next.js", "Prisma", "TypeScript", "Tailwind CSS", "PostgreSQL"],
  },
  "figma-to-react": {
    slug: "figma-to-react",
    projectName: "FigmaToReact",
    tagline: "MDA-based automated Figma-to-React code transformation.",
    liveUrl: undefined,
    githubUrl: "https://github.com/Tomdieu/FigmaToReact",
    heroImage: "/FigmaToReact.png",
    sections: [
      {
        title: "The Problem",
        content: [
          "Manual translation from Figma designs to React components creates a massive bottleneck for frontend teams. Designers and developers spend countless hours converting visual mockups into semantic, responsive code — a process that is repetitive, error-prone, and time-consuming.",
          "Existing design-to-code tools lack semantic understanding and produce bloated, non-semantic markup that requires significant manual cleanup.",
        ],
      },
      {
        title: "My Approach",
        content: [
          "Engineered a robust parser using Model-Driven Architecture (MDA) principles and the Eclipse Modeling Framework (EMF) to create an intermediate representation of Figma design elements.",
          "Developed ATL (ATLAS Transformation Language) model transformations to convert Figma's component model into a React component model, preserving semantic meaning and component hierarchy.",
          "The system extracts design information via Figma's API, parses it through multiple transformation layers, and generates clean, semantic React components with proper props, styling, and responsive behavior.",
          "This research project explored the intersection of software modeling, design systems, and frontend development — bridging the gap between visual design and code.",
        ],
      },
      {
        title: "Results / Impact",
        content: [
          "Successfully demonstrated that MDA principles can be applied to design-to-code transformation, producing more semantically meaningful output than existing approaches.",
          "Published as an academic research project showcasing innovative application of model-driven engineering in frontend development.",
          "Built a foundation for future work in automated UI generation, with potential applications in design system enforcement and accessibility compliance.",
        ],
      },
    ],
    techStack: ["Python", "Java", "ATL", "EMF", "Eclipse Modeling Framework", "Model Transformation", "React", "Figma API"],
  },
};

export const caseStudySlugs = Object.keys(caseStudiesData);

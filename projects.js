window.portfolioProjects = {
  "reader": {
    "title": "General Reader",
    "category": "Document AI",
    "color": "#6D28D9",
    "soft": "#EDE9FE",
    "summary": "OCR and LLM-assisted document discovery with reusable extraction templates.",
    "desc": "A document extraction tool that combines OCR with LLM-assisted discovery. It aligns extracted values with OCR regions to build reusable rules for similar documents. Supported rule types include anchors, bounding boxes, regular expressions and derived fields.",
    "highlights": [
      "Reusable extraction templates for matching document layouts",
      "Visual field selection and editable transformation chains",
      "Ollama and Gemini provider options",
      "MongoDB storage and a FastAPI interface"
    ],
    "tech": [
      "Python",
      "FastAPI",
      "PaddleOCR",
      "MongoDB",
      "Ollama",
      "Gemini"
    ],
    "note": "Development project. Extraction quality depends on document layout, OCR quality and template matching. External processing depends on the configured model provider."
  },
  "vehicle": {
    "title": "Vehicle Vision System",
    "category": "Computer Vision",
    "color": "#0369A1",
    "soft": "#E0F2FE",
    "summary": "YOLO-based vehicle detection and an eight-class vehicle type classifier.",
    "desc": "A computer vision project for detecting vehicles in images and camera feeds, followed by vehicle type classification. The current work focuses on detection and classification, with further vehicle attributes planned for later stages.",
    "highlights": [
      "YOLOv8n detection for cars, motorcycles, buses and trucks",
      "Eight-class vehicle type classification using YOLOv8n-cls",
      "Classifier trained on 13,528 images",
      "96.9% Top-1 accuracy on the 1,688-image validation split"
    ],
    "tech": [
      "Python",
      "YOLOv8",
      "Computer Vision",
      "Image Classification"
    ],
    "note": "The reported score is a classifier validation result, not end-to-end camera accuracy. Real-world false positives and generalization remain active development areas."
  },
  "payroll": {
    "title": "Bordro AI",
    "category": "Full Stack · Document Processing",
    "color": "#047857",
    "soft": "#D1FAE5",
    "summary": "Payroll document import, field mapping and human review with versioned snapshots.",
    "desc": "A payroll document processing and review application. Documents pass through extraction, field mapping and reviewer corrections before versioned snapshots and later validation and materialization steps. Employee views present payroll details and server-provided period comparisons.",
    "github": "https://github.com/Yigit-Ozturk-Ugurkan/bordro-ai",
    "highlights": [
      "General Reader integration for document extraction",
      "Generic staging and controlled payroll field mapping",
      "Correction history and immutable review snapshots",
      "Organization-scoped access and role-based permissions",
      "React interface and PostgreSQL-backed persistence"
    ],
    "tech": [
      "Python",
      "FastAPI",
      "SQLAlchemy",
      "PostgreSQL",
      "React",
      "TypeScript"
    ],
    "note": "Development-stage application. The real payroll document end-to-end flow has not yet been verified with an available sample."
  },
  "support": {
    "title": "Telegram Support Desk",
    "category": "AI · Support Automation",
    "color": "#1D4ED8",
    "soft": "#DBEAFE",
    "summary": "AI-assisted Telegram support with ticket routing, work queues and SLA tracking.",
    "desc": "An IT support system that combines a Telegram bot with a web management interface. AI-assisted troubleshooting and triage support ticket creation, while routing, queues and SLA logic coordinate technician work.",
    "github": "https://github.com/Yigit-Ozturk-Ugurkan/telegram-destek-bot",
    "highlights": [
      "AI-assisted troubleshooting and ticket triage",
      "Technician assignment based on expertise and workload",
      "P1–P4 priorities and FIFO work queues",
      "Business-calendar SLA tracking with pause and resume",
      "Web interface for administrators and technicians"
    ],
    "tech": [
      "Python",
      "Flask",
      "SQLite",
      "Telegram Bot API",
      "Gemini"
    ],
    "note": "Requires configured bot credentials, a model provider and a running queue worker for the corresponding features."
  },
  "monitor": {
    "title": "Website Monitor AI",
    "category": "AI · Monitoring",
    "color": "#B45309",
    "soft": "#FEF3C7",
    "summary": "Scheduled website change detection with AI analysis and email notifications.",
    "desc": "A website monitoring application that stores page snapshots, detects content changes and uses AI to assess their relevance to selected topics. It also includes regulation reference discovery and comparison features.",
    "github": "https://github.com/Yigit-Ozturk-Ugurkan/website-monitor-ai",
    "highlights": [
      "Daily, weekday and weekly monitoring schedules",
      "Full-page, automatic and manual content selection",
      "Snapshot comparison and noise filtering",
      "Topic relevance analysis and email notifications",
      "Regulation reference discovery and comparison"
    ],
    "tech": [
      "Python",
      "FastAPI",
      "React",
      "PostgreSQL",
      "BeautifulSoup",
      "Gemini"
    ],
    "note": "Designed for a controlled environment. The current application has no user authentication, monitors HTML content and does not support PDF monitoring."
  },
  "ztna": {
    "title": "ZTNA Security Platform",
    "category": "Security",
    "color": "#2563EB",
    "soft": "#DCEBFF",
    "summary": "A Zero Trust access project using Keycloak, JWT and role-based authorization.",
    "desc": "A network access project exploring Zero Trust principles through centralized identity management, token-based authentication and role-based access control.",
    "image": "ztna.png",
    "github": "https://github.com/muratenescati/ZTNA-PROJECT",
    "highlights": [
      "Central identity management with Keycloak",
      "JWT-based authentication",
      "Role-based access control",
      "Protected backend API access"
    ],
    "tech": [
      "Keycloak",
      "JWT",
      "RBAC",
      "SSO",
      "API Security"
    ],
    "note": "The repository is currently hosted under a collaborator’s account."
  }
};

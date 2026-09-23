/* NeuroStep AI - Solutions Ecosystem Controller */

document.addEventListener('DOMContentLoaded', () => {
  initSolutionEcosystem();
});

/* 1. Solution Ecosystem Node Interaction */
function initSolutionEcosystem() {
  const ecoNodes = document.querySelectorAll('.eco-node');
  const detailTitle = document.getElementById('eco-detail-title');
  const detailDesc = document.getElementById('eco-detail-desc');
  const detailBadge = document.getElementById('eco-detail-badge');

  if (!ecoNodes.length) return;

  const nodeData = {
    personal: {
      title: "Personal Gait Health Check",
      badge: "Individuals & Families",
      desc: "Comprehensive evaluation of gait timing, stance/swing ratio, left-right balance, and walking symmetry to establish a personalized baseline."
    },
    rehab: {
      title: "Rehabilitation Progress Monitoring",
      badge: "Physical Therapy & Rehab",
      desc: "Quantify post-injury, post-surgery, or musculoskeletal recovery with objective before-and-after mobility comparisons."
    },
    rpm: {
      title: "Remote Patient Monitoring (RPM)",
      badge: "Continuous Outpatient Care",
      desc: "Extends clinical evaluation beyond clinic walls. Securely syncs patient walking metrics to healthcare providers between visits."
    },
    neuro: {
      title: "Parkinson's & Neurorehabilitation",
      badge: "Neurological Mobility Support",
      desc: "Longitudinal tracking of gait rhythm, stride variability, and balance-related metrics for specialized neuro-rehab protocols."
    },
    healthcare: {
      title: "Hospitals & Rehabilitation Centres",
      badge: "Clinical Enterprise",
      desc: "Standardizes patient outcome documentation, repeat mobility assessments, and multi-patient rehabilitation workflow reports."
    },
    research: {
      title: "Wearable Gait Research Platform",
      badge: "Academia & Laboratories",
      desc: "Empowers biomechanics and human movement researchers with synchronized multi-axis IMU and high-density CoP feature datasets."
    }
  };

  ecoNodes.forEach(node => {
    node.addEventListener('click', () => {
      const targetKey = node.getAttribute('data-eco-key');
      const data = nodeData[targetKey];

      if (!data) return;

      // Update Node Highlight Styles
      ecoNodes.forEach(n => {
        n.classList.remove('bg-blue-600', 'text-white', 'scale-110', 'ring-4', 'ring-blue-200');
        n.classList.add('bg-white', 'text-slate-700');
      });

      node.classList.add('bg-blue-600', 'text-white', 'scale-110', 'ring-4', 'ring-blue-200');
      node.classList.remove('bg-white', 'text-slate-700');

      // Update Content Box
      if (detailTitle) detailTitle.textContent = data.title;
      if (detailBadge) detailBadge.textContent = data.badge;
      if (detailDesc) detailDesc.textContent = data.desc;
    });

    node.addEventListener('mouseenter', () => {
      const lineId = node.getAttribute('data-line-id');
      const line = document.getElementById(lineId);
      if (line) {
        line.style.stroke = '#2563EB';
        line.style.strokeWidth = '3';
      }
    });

    node.addEventListener('mouseleave', () => {
      const lineId = node.getAttribute('data-line-id');
      const line = document.getElementById(lineId);
      if (line && !node.classList.contains('scale-110')) {
        line.style.stroke = '#CBD5E1';
        line.style.strokeWidth = '1.5';
      }
    });
  });
}

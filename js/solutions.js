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
    en: {
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
    },
    ko: {
      personal: {
        title: "맞춤형 보행 건강 체크",
        badge: "개인 및 가족",
        desc: "보행 타이밍, 입각기/유각기 비율, 좌우 균형 및 보행 대칭성을 종합적으로 평가하여 개인 맞춤형 베이스라인을 구축합니다."
      },
      rehab: {
        title: "재활 경과 모니터링",
        badge: "물리치료 및 재활",
        desc: "부상 후, 수술 후 또는 근골격계 회복 상태를 전후 정량적 모빌리티 비교를 통해 객관적으로 측정한 데이터로 수치화합니다."
      },
      rpm: {
        title: "원격 환자 모니터링 (RPM)",
        badge: "지속적인 외래 환자 케어",
        desc: "임상 평가를 병원 밖으로 확장합니다. 외래 방문 사이에 환자의 보행 지표를 의료진에게 안전하게 동기화합니다."
      },
      neuro: {
        title: "파킨슨 및 신경 재활",
        badge: "신경계 모빌리티 지원",
        desc: "전문적인 신경 재활 프로토콜을 위해 보행 리듬, 보폭 변동성 및 균형 관련 지표를 종단적으로 추적합니다."
      },
      healthcare: {
        title: "병원 및 재활 센터",
        badge: "클리닉 엔터프라이즈",
        desc: "환자 치료 결과 문서화, 반복적인 모빌리티 평가 및 다수 환자의 재활 워크플로우 리포트를 표준화합니다."
      },
      research: {
        title: "웨어러블 보행 연구 플랫폼",
        badge: "학계 및 연구소",
        desc: "동기화된 다축 IMU 및 고밀도 CoP 특징 데이터셋을 통해 생체역학 및 인간 운동 연구자의 연구를 지원합니다."
      }
    },
    si: {
      personal: {
        title: "පුද්ගලීකරණය කළ ඇවිදීමේ සෞඛ්‍ය පරීක්ෂාව",
        badge: "පුද්ගලයන් සහ පවුල් සඳහා",
        desc: "පුද්ගලීකරණය කළ පදනමක් සකස් කර ගැනීම සඳහා ඇවිදීමේ කාල පරාමිති, Stance/Swing අනුපාතය, වම්-දකුණු සමබරතාවය සහ ඇවිදීමේ සමමිතිය පිළිබඳ සම්පූර්ණ ඇගයීම."
      },
      rehab: {
        title: "පුනරුත්ථාපන ප්‍රගතිය මැනීම",
        badge: "භෞතචිකිත්සාව සහ පුනරුත්ථාපනය",
        desc: "ආබාධයකින්, සැත්කමකින් හෝ පේශි පද්ධතියේ සුවවීම්, පෙර සහ පසු ප්‍රමාණාත්මක චලන දත්ත මගින් සංසන්දනය කර නිශ්චිතව මැන බලන්න."
      },
      rpm: {
        title: "දුරස්ථ රෝගී නිරීක්ෂණය (RPM)",
        badge: "නිරන්තර බාහිර රෝගී සත්කාර",
        desc: "සායනික ඇගයීම සායනයෙන් පිටතටත් ගෙන යයි. සායනික සංචාර අතරතුර රෝගියාගේ ඇවිදීමේ මැනුම් සෞඛ්‍ය සේවා සපයන්නන් වෙත සුරක්ෂිතව යොමු කරයි."
      },
      neuro: {
        title: "පාකින්සන් සහ ස්නායු පුනරුත්ථාපනය",
        badge: "ස්නායු ආශ්‍රිත චලන සහාය",
        desc: "විශේෂිත ස්නායු පුනරුත්ථාපන ක්‍රමවේද සඳහා ඇවිදීමේ තාලය, පියවර වෙනස්වීම් (Stride Variability) සහ සමබරතාවයට අදාළ මැනුම් දීර්ඝකාලීනව නිරීක්ෂණය කිරීම."
      },
      healthcare: {
        title: "රෝහල් සහ පුනරුත්ථාපන මධ්‍යස්ථාන",
        badge: "සායනික පද්ධති",
        desc: "රෝගීන්ගේ ප්‍රතිඵල ලේඛනගත කිරීම, නැවත නැවත සිදුකරන චලන ඇගයීම් සහ බහු-රෝගී පුනරුත්ථාපන වාර්තා සම්මතකරණය කරයි."
      },
      research: {
        title: "පළඳින ඇවිදීමේ පර්යේෂණ පද්ධතිය",
        badge: "අධ්‍යයන සහ පර්යේෂණාගාර",
        desc: "සමකාලීන බහු-අක්ෂ IMU සහ අධි-ඝනත්ව CoP විශේෂාංග දත්ත මගින් ජෛව යාන්ත්‍ර විද්‍යාව සහ මානව චලන පර්යේෂකයන්ට සහාය වේ."
      }
    }
  };

  let activeKey = 'personal';

  function updateDetails() {
    const lang = (window.i18n && window.i18n.currentLang) ? window.i18n.currentLang : 'en';
    const langData = nodeData[lang] || nodeData.en;
    const data = langData[activeKey] || langData.personal;

    if (detailTitle) detailTitle.textContent = data.title;
    if (detailBadge) detailBadge.textContent = data.badge;
    if (detailDesc) detailDesc.textContent = data.desc;
  }

  window.addEventListener('languageChanged', () => {
    updateDetails();
  });

  ecoNodes.forEach(node => {
    node.addEventListener('click', () => {
      const targetKey = node.getAttribute('data-eco-key');
      if (targetKey) {
        activeKey = targetKey;
      }

      // Update Node Highlight Styles
      ecoNodes.forEach(n => {
        n.classList.remove('bg-blue-600', 'text-white', 'scale-110', 'ring-4', 'ring-blue-200');
        n.classList.add('bg-white', 'text-slate-700');
      });

      node.classList.add('bg-blue-600', 'text-white', 'scale-110', 'ring-4', 'ring-blue-200');
      node.classList.remove('bg-white', 'text-slate-700');

      updateDetails();
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

  // Initial call to set correct language text
  updateDetails();
}

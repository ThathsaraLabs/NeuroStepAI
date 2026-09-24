/* NeuroStep AI - Internationalization (i18n) Module */
const translations = {
  en: {
    // Nav
    "nav.home": "Home",
    "nav.product": "Product",
    "nav.solutions": "Solutions",
    "nav.research": "Research",
    "nav.about": "About",
    "nav.contact": "Contact",
    "nav.demo": "Request Demo",
    "nav.pilot": "Join Pilot",

    // Hero Home
    "hero.badge": "Smart Insole & Wearable Gait Intelligence",
    "hero.title": "Discover what your steps reveal about your health.",
    "hero.sub": "Smart insole technology for personalized gait assessment, mobility monitoring, rehabilitation support, and wearable gait research.",
    "hero.cta_primary": "Request a Demo",
    "hero.cta_secondary": "Join Our Pilot Program",
    "hero.cta_video": "Watch Video Demo",
    "hero.live_data": "LIVE GAIT METRICS",

    // Video Showcase
    "video.section": "02 / DEMONSTRATION & TECHNOLOGY",
    "video.title": "See NeuroStep AI in Action",
    "video.sub": "Experience how our smart insoles capture, process, and visualize gait kinetics in real-time during physical movement.",
    "video.feat1_title": "Wearable Sensor Grid",
    "video.feat1_desc": "High-density pressure mapping matrix embedded in ultra-thin biocompatible insoles.",
    "video.feat2_title": "100Hz Real-Time Transmission",
    "video.feat2_desc": "Low-latency wireless signal streaming directly to mobile app & cloud analytics.",
    "video.feat3_title": "Automated Gait Analytics",
    "video.feat3_desc": "Quantitative stance, swing, symmetry, and plantar load progression metrics.",

    // Marquee
    "marquee.item1": "GAIT TIMING",
    "marquee.item2": "LEFT-RIGHT BALANCE",
    "marquee.item3": "PLANTAR PRESSURE",
    "marquee.item4": "MOTION SENSING",
    "marquee.item5": "GAIT SYMMETRY",
    "marquee.item6": "MOBILITY TRENDS",

    // What NeuroStep Measures
    "measures.section": "01 / METRICS PLATFORM",
    "measures.title": "Every Step Contains Data. NeuroStep Makes It Understandable.",
    "measures.sub": "High-density pressure mapping and multi-axis kinetic sensors capture movement dynamics in real time.",
    "measures.m1_title": "Gait Timing & Cadence",
    "measures.m1_desc": "Precise measurement of stance phase, swing phase, double support ratio, and step cycle duration.",
    "measures.m2_title": "Left–Right Plantar Balance",
    "measures.m2_desc": "Continuous comparison of load distribution between left and right feet during gait.",
    "measures.m3_title": "Plantar Pressure Distribution",
    "measures.m3_desc": "Regional pressure monitoring across forefoot, midfoot, and heel contact points.",
    "measures.m4_title": "Gait Symmetry Index",
    "measures.m4_desc": "Quantified bilateral gait symmetry metrics to observe subtle limping or compensation patterns.",
    "measures.m5_title": "Longitudinal Mobility Trends",
    "measures.m5_desc": "Track progress over days, weeks, or months to observe rehabilitation response.",
    "measures.visualizer_title": "Plantar Pressure Map Visualizer",
    "measures.peak": "Peak",
    "measures.mid": "Mid",
    "measures.low": "Low",
    "measures.autocycling": "Auto-Cycling...",
    "measures.visualizer_hint": "Hover or tap metrics on the right to trigger specific foot pressure zones.",

    // Scroll Story
    "story.section": "02 / PRODUCT STORY",
    "story.title": "From a Step to an Insight",
    "story.sub_tag": "Continuous kinetic sensing",
    "story.s1_title": "1. Wear",
    "story.s1_desc": "Slip the ultra-thin NeuroStep smart insole into standard footwear.",
    "story.s1_tag": "Biocompatible Fit",
    "story.s2_title": "2. Walk",
    "story.s2_desc": "Walk naturally while multi-sensory arrays collect gait physics.",
    "story.s2_tag": "Natural Stride",
    "story.s3_title": "3. Measure",
    "story.s3_desc": "Capture stance timing, force vectors, and plantar pressure maps.",
    "story.s3_tag": "100Hz Signal Capture",
    "story.s4_title": "4. Understand",
    "story.s4_desc": "Transform high-frequency raw kinetic signals into clear mobility metrics.",
    "story.s4_tag": "AI Signal Engine",
    "story.s5_title": "5. Track",
    "story.s5_desc": "Follow gait stability, symmetry, and recovery trends over time.",
    "story.s5_tag": "Longitudinal Analytics",

    // Who it helps
    "audience.section": "03 / AUDIENCE & APPLICATIONS",
    "audience.title": "One Platform. Different Mobility Needs.",
    "audience.a1_title": "Individuals & Families",
    "audience.a1_sub": "Know how you really walk.",
    "audience.a1_desc": "Personalized gait health baseline, early mobility change detection, and elderly mobility care.",
    "audience.a2_title": "Physiotherapists & Clinics",
    "audience.a2_sub": "Support clinical expertise with measurable gait data.",
    "audience.a2_desc": "Objective pre/post rehabilitation evaluation, patient progress tracking, and report generation.",
    "audience.a3_title": "Parkinson's & Neurorehabilitation",
    "audience.a3_sub": "Follow gait and mobility changes over time.",
    "audience.a3_desc": "Longitudinal gait rhythm, stride variability, and balance monitoring for neuro-rehab care.",
    "audience.a4_title": "Researchers & Universities",
    "audience.a4_sub": "Turn every step into structured research data.",
    "audience.a4_desc": "High-accuracy IMU & CoP feature analysis for biomechanics and human movement studies.",

    // Why NeuroStep AI
    "why.section": "04 / CAPABILITIES",
    "why.title": "Why NeuroStep AI?",
    "why.f1_title": "Personalized Gait Health Check",
    "why.f1_desc": "Understand gait timing, pressure distribution, left–right balance, and symmetry using objective measurements. Don't guess your walking pattern — measure it.",
    "why.f2_title": "Rehabilitation Progress Monitoring",
    "why.f2_desc": "Don't guess recovery. Measure it with before-and-after quantitative mobility comparisons.",
    "why.f3_title": "Remote Patient Monitoring (RPM)",
    "why.f3_desc": "Rehabilitation doesn't stop outside the clinic. Monitor patient mobility between clinical visits.",
    "why.f4_title": "Longitudinal Neurorehabilitation",
    "why.f4_desc": "Every step can show progress. Track subtle mobility trends for long-term clinical insights.",

    // Research Strip
    "research.strip_title": "Built on Research. Designed for Real-World Mobility.",
    "research.r1_venue": "MITA 2025 • Jeju, South Korea",
    "research.r1_title": "Phase-Specific Gait Characterization and Plantar Load Progression Analysis Using Smart Insoles",
    "research.r2_venue": "KMMS Spring 2025 • Seoul, South Korea",
    "research.r2_title": "Comprehensive Biomechanical Analysis of Gait Through IoMT-Based Combined IMU and COP Feature Analysis",
    "research.r2_award": "BEST PAPER AWARD",
    "research.r3_venue": "Sensors 2025 • MDPI Publication",
    "research.r3_title": "Multi-Domain CoP Feature Analysis of Functional Mobility for Parkinson's Disease Detection Using Wearable Pressure Insoles",
    "research.r3_choice": "EDITOR'S CHOICE",
    "research.view_all": "Explore All Research Publications →",

    // Dynamic Research Counters
    "research.stat_papers": "Peer-Reviewed Papers",
    "research.stat_citations": "Research Citations",
    "research.stat_awards": "Honours and Awards",

    // Pipeline Transformation
    "pipeline.title": "The NeuroStep Data Pipeline",
    "pipeline.step1": "Footstep",
    "pipeline.step2": "Pressure Map",
    "pipeline.step3": "Sensor Signal",
    "pipeline.step4": "Gait Metrics",
    "pipeline.step5": "Personal Insight",
    "pipeline.step6": "Progress Tracking",

    // Final CTA
    "cta.title": "Ready to Understand Movement Differently?",
    "cta.sub": "For individuals, clinicians, researchers, and healthcare partners.",
    "cta.btn_demo": "Request a Demo",
    "cta.btn_pilot": "Join Our Pilot Program",

    // Product Page
    "product.hero_title": "Meet the NeuroStep AI Smart Insole",
    "product.hero_sub": "More than an insole - a smarter way to understand movement.",
    "product.exploded_title": "Precision Multi-Layer Engineering",
    "product.exploded_sub": "Toggle layers to inspect the internal sensing architecture.",
    "product.l_base": "Base Insole Layer",
    "product.l_pressure": "Pressure Sensor Grid",
    "product.l_imu": "Motion Sensing IMU Module",
    "product.l_mcu": "Microcontroller Unit (MCU)",
    "product.l_wireless": "Wireless Data Transceiver",
    "product.size_title": "Available Development Sizes",
    "product.size_sub": "Available in three common size groups during the current pilot stage.",
    "product.specs_title": "Technical Specifications",
    "product.report_title": "Personalized Gait Report Preview",
    "product.report_sub": "We don't just show sensor data. We turn walking data into information people can understand.",

    // Solutions Page
    "solutions.hero_title": "One Smart Insole. Multiple Possibilities.",
    "solutions.hero_sub": "From personal gait insights to rehabilitation, remote monitoring, clinical workflows, and research.",
    "solutions.eco_title": "Interactive Solution Ecosystem",
    "solutions.rpm_title": "Remote Patient Monitoring Workflow",
    "solutions.rpm_step1": "Patient at Home",
    "solutions.rpm_step2": "NeuroStep Insole",
    "solutions.rpm_step3": "Mobile Sync",
    "solutions.rpm_step4": "Clinician Dashboard",
    "solutions.explorer_title": "Research Data Explorer Simulator",

    // Research Page
    "research.hero_badge": "Peer-Reviewed Publications & Scientific Evidence",
    "research.hero_title": "Research Behind NeuroStep AI",
    "research.hero_sub": "Built from wearable gait analysis, plantar-pressure sensing, CoP analytics, and biomedical engineering research.",
    "research.stat_papers": "Peer-Reviewed Papers",
    "research.stat_citations": "Research Citations",
    "research.stat_awards": "Honours and Awards",
    "research.click_inspect": "Click to Inspect First Page",
    "research.key_findings_title": "Key Findings of This Research",

    // Section 01: MDPI Sensors
    "research.p1_tag": "01 / INTERNATIONAL JOURNAL PUBLICATION",
    "research.p1_header": "MDPI Sensors Journal (2025)",
    "research.p1_badge": "Impact Factor: 4.0 • Q1",
    "research.p1_choice": "EDITOR'S CHOICE",
    "research.p1_open": "Open Access",
    "research.p1_title": "Multi-Domain CoP Feature Analysis of Functional Mobility for Parkinson's Disease Detection Using Wearable Pressure Insoles",
    "research.p1_pub_details": "Published in <span class=\"italic font-bold\">Sensors</span>, Volume 25, Issue 18, Article 5859 (September 2025)",
    "research.p1_bullet1": "<strong class=\"text-white\">Center of Pressure (CoP) Feature Extraction:</strong> Extracted 144 CoP features across positional, dynamic, frequency, and stochastic domains including per-foot averages and asymmetry indices.",
    "research.p1_bullet2": "<strong class=\"text-white\">Timed Up and Go (TUG) Protocol:</strong> Evaluated diagnostic utility across 39 Parkinson's disease and 38 control participants during dynamic balance and turn tasks.",
    "research.p1_bullet3": "<strong class=\"text-white\">Machine Learning Diagnostic Performance:</strong> High diagnostic classification accuracy (<strong class=\"text-cyan-300\">ROC-AUC = 0.921</strong>) achieved using a 23-feature WearGait-PD subset.",
    "research.p1_btn": "View Publication on MDPI ↗",

    // Section 02: KMMS Journal
    "research.p2_tag": "02 / NATIONAL RESEARCH FOUNDATION REGISTERED JOURNAL",
    "research.p2_header": "Journal of Korea Multimedia Society (2025)",
    "research.p2_badge": "NRF Registered Journal",
    "research.p2_category": "Multimedia Information Processing and IT Convergence",
    "research.p2_title": "IoMT–Based Smart Insole System for Comprehensive Gait Analysis: Plantar Pressure and Foot Dynamics Assessment",
    "research.p2_pub_details": "Published in <span class=\"italic font-bold text-slate-800\">Journal of Korea Multimedia Society (멀티미디어학회논문지)</span>, Vol. 28, No. 7, July 2025, Page 807.",
    "research.p2_bullet1": "<strong class=\"text-slate-900\">IoMT System Architecture:</strong> Comprehensive Internet of Medical Things (IoMT) hardware-software architecture for real-time plantar pressure collection and foot kinematics assessment.",
    "research.p2_bullet2": "<strong class=\"text-slate-900\">Plantar Dynamics Assessment:</strong> Multi-point force-sensing mapping for precise stance phase load distribution and heel-to-toe progression tracking.",
    "research.p2_btn": "Access Original Paper ↗",

    // Section 03: Springer MITA
    "research.p3_tag": "03 / SPRINGER INTERNATIONAL PUBLICATION",
    "research.p3_header": "Springer Proceedings (MITA 2025)",
    "research.p3_badge": "Springer Publication",
    "research.p3_category": "Springer Lecture Notes in Electrical Engineering • MITA 2025",
    "research.p3_title": "Phase-Specific Gait Characterization and Plantar Load Progression Analysis Using Smart Insoles",
    "research.p3_pub_details": "21st International Conference on Multimedia Information Technology and Applications • Published by Springer Nature Switzerland (Jeju Island, South Korea)",
    "research.p3_findings": "Phase-specific gait characterization reveals distinct plantar load progression curves across four stance sub-phases: <strong>Heel Strike (HES)</strong>, <strong>Foot Flat (FOF)</strong>, <strong>Heel Rise (HER)</strong>, and <strong>Toe Off (TOF)</strong>. Quantitative FSR and IMU signal synchronization enables objective detection of stance load transfer (weight transfer) dynamics and stride instability.",
    "research.p3_img1_title": "MITA 2025 Oral Presentation",
    "research.p3_img1_sub": "Smart Insole Hardware & IMU/CoP Features",
    "research.p3_img2_title": "Gait Phase Annotation Protocol",
    "research.p3_img2_sub": "HES (Heel Strike) → FOF (Foot Flat) → HER (Heel Rise) → TOF (Toe Off)",
    "research.p3_img3_title": "International Technical Session",
    "research.p3_img3_sub": "Jeju Island Conference Hall",
    "research.p3_btn": "View Publication on Springer ↗",

    // Section 04: KMMS Best Paper
    "research.p4_tag": "04 / AWARD-WINNING CONFERENCE RESEARCH",
    "research.p4_header": "KMMS Spring Conference 2025",
    "research.p4_badge": "BEST PAPER AWARD",
    "research.p4_category": "Korea Multimedia Society Spring Conference 2025 • Best Paper Award",
    "research.p4_title": "Comprehensive Biomechanical Analysis of Gait Through IoMT-Based Combined IMU and COP Feature Analysis",
    "research.p4_pub_details": "Korea Multimedia Society Spring Conference 2025 • Chung-Ang University, Seoul, South Korea (May 8–10, 2025)",
    "research.p4_findings": "Synchronized fusion of 6-axis IMU acceleration metrics with 16-point plantar pressure CoP feature extraction provides superior biomechanical gait assessment compared to single-sensor modalities.",
    "research.p4_img1_title": "Best Paper Award Ceremony",
    "research.p4_img1_sub": "KMMS 2025 • Chung-Ang University",
    "research.p4_img2_title": "Oral Session Presentation",
    "research.p4_img2_sub": "Biomechanics & IoMT Research",
    "research.p4_img3_title": "Sensor Placement Methodology",
    "research.p4_img3_sub": "16 Selected Key Pressure Points on Foot",

    // Section 05: Timeline
    "research.timeline_tag": "RESEARCH EVOLUTION",
    "research.timeline_title": "Interactive Research & Evidence Timeline",
    "research.phase1_tag": "Phase 1",
    "research.phase1_title": "Prototype R&D",
    "research.phase1_desc": "Sensor grid calibration and wearable form factor trials.",
    "research.phase2_tag": "Phase 2",
    "research.phase2_title": "Springer MITA",
    "research.phase2_desc": "Phase-specific stance and load progression validation (Springer).",
    "research.phase3_tag": "Phase 3",
    "research.phase3_title": "KMMS 2025",
    "research.phase3_desc": "IoMT integration & combined IMU-CoP feature extraction (Best Paper).",
    "research.phase4_tag": "Phase 4",
    "research.phase4_title": "Sensors & JKMS",
    "research.phase4_desc": "Multi-domain CoP functional mobility publications (MDPI & JKMS).",
    "research.phase5_tag": "Phase 5",
    "research.phase5_title": "NeuroStep AI",
    "research.phase5_desc": "Commercial-grade mobility & gait intelligence startup platform.",
    "research.close_window": "Close Window ✕",

    // About Page
    "about.hero_title": "Engineering Better Mobility Through Wearable Intelligence",
    "about.hero_sub": "To make gait assessment more accessible, measurable, and personalized through intelligent wearable technology.",
    "about.team_title": "Leadership & Core Team",

    // Contact Page
    "contact.hero_title": "Let's Move NeuroStep Forward",
    "contact.hero_sub": "Interested in a gait assessment, clinical pilot, research collaboration, product demonstration, or investment opportunity? Let's talk.",
    "contact.social_title": "Official Social Pages",
    "contact.social_sub": "Connect with us on LinkedIn & Facebook.",
    "contact.form_name": "Full Name",
    "contact.form_email": "Email Address",
    "contact.form_org": "Organization / Institution",
    "contact.form_country": "Country",
    "contact.form_phone": "Phone Number (Optional)",
    "contact.form_interest": "Primary Interest Area",
    "contact.form_msg": "Your Message",
    "contact.form_btn": "Submit Request",
    "contact.success_title": "Thank You for Contacting NeuroStep AI!",
    "contact.success_msg": "Your request has been received. Our team will review your inquiry and reach out shortly.",

    // Footer
    "footer.nav_title": "Navigation",
    "footer.desc": "NeuroStep AI - A research-driven wearable mobility startup transforming everyday steps into meaningful gait insight.",
    "footer.disclaimer_title": "Scientific & Regulatory Disclaimer",
    "footer.disclaimer": "NeuroStep AI is currently in the active research, development, and testing stage and has not yet been launched as a commercial product. The platform is being developed for gait assessment, mobility monitoring, rehabilitation support, and research applications. Information presented on this website is for research, educational, and product-information purposes only and should not be interpreted as a medical diagnosis. For specific details or pilot inquiries, please contact our team.",
    "footer.rights": "© 2026 NeuroStep AI. All rights reserved."
  },

  ko: {
    // Nav
    "nav.home": "홈",
    "nav.product": "제품",
    "nav.solutions": "솔루션",
    "nav.research": "연구",
    "nav.about": "소개",
    "nav.contact": "문의",
    "nav.demo": "데모 요청",
    "nav.pilot": "파일럿 참여",

    // Hero Home
    "hero.badge": "스마트 인솔 기반 웨어러블 보행 분석 기술",
    "hero.title": "당신의 걸음이 건강에 대해 무엇을 말해주는지 알아보세요.",
    "hero.sub": "개인 맞춤형 보행 평가, 이동성 모니터링, 재활 지원 및 웨어러블 보행 연구를 위한 스마트 인솔 기술입니다.",
    "hero.cta_primary": "데모 요청",
    "hero.cta_secondary": "파일럿 프로그램 참여",
    "hero.cta_video": "시연 동영상 보기",
    "hero.live_data": "실시간 보행 지표",

    // Video Showcase
    "video.section": "02 / 기술 시연 동영상",
    "video.title": "NeuroStep AI 작동 모습 보기",
    "video.sub": "스마트 인솔이 보행 역학을 실시간으로 감지, 처리 및 시각화하는 과정을 확인하세요.",
    "video.feat1_title": "착용형 센서 그리드",
    "video.feat1_desc": "초박형 생체 적합성 인솔에 내장된 고밀도 압력 매핑 매트릭스.",
    "video.feat2_title": "100Hz 실시간 신호 전송",
    "video.feat2_desc": "모바일 앱 및 클라우드 분석 엔진으로의 저지연 무선 전송.",
    "video.feat3_title": "자동화된 보행 분석",
    "video.feat3_desc": "입각기, 유각기, 보행 대칭성 및 족저압 이행 지표 정량화.",

    // Marquee
    "marquee.item1": "보행 타이밍",
    "marquee.item2": "좌우 족저압 균형",
    "marquee.item3": "족저압 분포",
    "marquee.item4": "모션 감지",
    "marquee.item5": "보행 대칭성",
    "marquee.item6": "장기 이동성 변화 추세",

    // What NeuroStep Measures
    "measures.section": "01 / 메트릭 플랫폼",
    "measures.title": "모든 걸음에는 데이터가 있습니다. NeuroStep이 이를 명확하게 해석합니다.",
    "measures.sub": "고밀도 압력 매핑과 다축 운동 센서가 실시간으로 움직임의 역학을 포착합니다.",
    "measures.m1_title": "보행 타이밍 및 케이던스",
    "measures.m1_desc": "입각기, 유각기, 이중 지지 비율 및 보행 주기 시간을 정밀하게 측정합니다.",
    "measures.m2_title": "좌우 족저압 균형",
    "measures.m2_desc": "보행 중 양발 간의 하중 분포 실시간 비교.",
    "measures.m3_title": "족저압 분포 매핑",
    "measures.m3_desc": "전족부, 중족부, 후족부 접촉 지점의 영역별 족저압 모니터링.",
    "measures.m4_title": "보행 대칭성 지수",
    "measures.m4_desc": "미세한 절뚝거림이나 보상 패턴을 관찰하기 위한 양측 보행 대칭성 정량화.",
    "measures.m5_title": "장기 이동성 변화 추세",
    "measures.m5_desc": "며칠, 몇 주, 몇 달 동안의 경과를 추적하여 재활 반응을 관찰합니다.",
    "measures.visualizer_title": "족저압 맵 시각화",
    "measures.peak": "최고",
    "measures.mid": "중간",
    "measures.low": "낮음",
    "measures.autocycling": "자동 순환 중...",
    "measures.visualizer_hint": "오른쪽 지표에 마우스를 올리거나 탭하여 특정 족저압 영역을 확인하세요.",

    // Scroll Story
    "story.section": "02 / 제품 스토리",
    "story.title": "걸음에서 인사이트로",
    "story.sub_tag": "연속적인 운동 감지",
    "story.s1_title": "1. 착용 (Wear)",
    "story.s1_desc": "초슬림 NeuroStep 스마트 인솔을 일반 신발에 착용합니다.",
    "story.s1_tag": "생체 적합성 핏",
    "story.s2_title": "2. 보행 (Walk)",
    "story.s2_desc": "자연스럽게 걸으면 다중 센서 어레이가 보행 역학을 수집합니다.",
    "story.s2_tag": "자연스러운 보폭",
    "story.s3_title": "3. 측정 (Measure)",
    "story.s3_desc": "스탠스 타이밍, 힘 벡터, 족저압 맵을 정밀 포착합니다.",
    "story.s3_tag": "100Hz 신호 캡처",
    "story.s4_title": "4. 이해 (Understand)",
    "story.s4_desc": "고주파 원시 운동 신호를 명확한 모빌리티 지표로 변환합니다.",
    "story.s4_tag": "AI 신호 엔진",
    "story.s5_title": "5. 추적 (Track)",
    "story.s5_desc": "시간에 따른 보행 안정성, 대칭성, 회복 트렌드를 지속 추적합니다.",
    "story.s5_tag": "장기 분석",

    // Who it helps
    "audience.section": "03 / 타깃 및 응용 분야",
    "audience.title": "하나의 플랫폼. 다양한 모빌리티 니즈.",
    "audience.a1_title": "개인 및 가족",
    "audience.a1_sub": "자신의 실제 보행 상태를 정확히 파악하세요.",
    "audience.a1_desc": "맞춤형 보행 건강 베이스라인, 초기 모빌리티 변화 감지, 노인 모빌리티 케어.",
    "audience.a2_title": "물리치료사 및 클리닉",
    "audience.a2_sub": "측정 가능한 보행 데이터로 임상 전문성을 뒷받침하세요.",
    "audience.a2_desc": "객관적인 재활 전/후 평가, 환자 경과 추적 및 리포트 생성.",
    "audience.a3_title": "파킨슨 및 신경 재활",
    "audience.a3_sub": "시간에 따른 보행 및 모빌리티 변화를 추적하세요.",
    "audience.a3_desc": "신경 재활 케어를 위한 종단적 보행 리듬, 보폭 변동성 및 균형 모니터링.",
    "audience.a4_title": "연구자 및 대학",
    "audience.a4_sub": "모든 걸음을 체계적인 연구 데이터로 변환하세요.",
    "audience.a4_desc": "생체역학 및 인간 운동 연구를 위한 고정밀 IMU 및 CoP 특징 분석.",

    // Why NeuroStep AI
    "why.section": "04 / 핵심 역량",
    "why.title": "왜 NeuroStep AI인가?",
    "why.f1_title": "맞춤형 보행 건강 체크",
    "why.f1_desc": "객관적인 측정을 통해 보행 타이밍, 족저압 분포, 좌우 균형 및 대칭성을 이해합니다. 보행 패턴을 추측하지 말고 측정하세요.",
    "why.f2_title": "재활 경과 모니터링",
    "why.f2_desc": "회복 상태를 추측하지 마세요. 정량적 전후 모빌리티 비교로 정확하게 측정하세요.",
    "why.f3_title": "원격 환자 모니터링 (RPM)",
    "why.f3_desc": "재활은 병원 밖에서도 멈추지 않습니다. 외래 방문 사이에 환자의 모빌리티를 지속 모니터링합니다.",
    "why.f4_title": "종단적 신경 재활",
    "why.f4_desc": "모든 걸음이 진전을 보여줄 수 있습니다. 장기적인 임상 인사이트를 위해 미세한 모빌리티 트렌드를 추적합니다.",

    // Research Strip
    "research.strip_title": "연구 기반. 실생활 모빌리티를 위한 설계.",
    "research.r1_venue": "MITA 2025 • 대한민국 제주도",
    "research.r1_title": "Phase-Specific Gait Characterization and Plantar Load Progression Analysis Using Smart Insoles",
    "research.r2_venue": "KMMS 춘계 2025 • 대한민국 서울",
    "research.r2_title": "Comprehensive Biomechanical Analysis of Gait Through IoMT-Based Combined IMU and COP Feature Analysis",
    "research.r2_award": "우수 논문상 (BEST PAPER AWARD)",
    "research.r3_venue": "Sensors 2025 • MDPI 게재",
    "research.r3_title": "Multi-Domain CoP Feature Analysis of Functional Mobility for Parkinson's Disease Detection Using Wearable Pressure Insoles",
    "research.r3_choice": "EDITOR'S CHOICE 선정",
    "research.view_all": "모든 연구 논문 둘러보기 →",

    // Dynamic Research Counters
    "research.stat_papers": "동료심사 논문",
    "research.stat_citations": "연구 인용 수",
    "research.stat_awards": "수상 및 표창",

    // Pipeline Transformation
    "pipeline.title": "NeuroStep 데이터 파이프라인",
    "pipeline.step1": "발걸음",
    "pipeline.step2": "족저압 맵",
    "pipeline.step3": "센서 신호",
    "pipeline.step4": "보행 지표",
    "pipeline.step5": "개인 인사이트",
    "pipeline.step6": "경과 추적",

    // Final CTA
    "cta.title": "움직임을 새롭게 이해할 준비가 되셨나요?",
    "cta.sub": "개인, 임상의, 연구자 및 의료 파트너를 위한 솔루션.",
    "cta.btn_demo": "데모 요청",
    "cta.btn_pilot": "파일럿 프로그램 참여",

    // Product Page
    "product.hero_title": "NeuroStep 스마트 인솔을 소개합니다",
    "product.hero_sub": "인솔 그 이상 — 움직임을 이해하는 한 단계 더 스마트한 방법.",
    "product.exploded_title": "정밀 다층 엔지니어링",
    "product.exploded_sub": "레이어를 전환하여 내부 센싱 아키텍처를 확인하세요.",
    "product.l_base": "베이스 인솔 레이어",
    "product.l_pressure": "족저압 센서 그리드",
    "product.l_imu": "모션 감지 IMU 모듈",
    "product.l_mcu": "마이크로컨트롤러 유닛 (MCU)",
    "product.l_wireless": "무선 데이터 트랜시버",
    "product.size_title": "개발 사이즈 라인업",
    "product.size_sub": "현재 파일럿 단계에서는 3가지 주요 사이즈 그룹으로 제공됩니다.",
    "product.specs_title": "기술 사양",
    "product.report_title": "맞춤형 보행 리포트 미리보기",
    "product.report_sub": "우리는 단순한 센서 데이터만을 보여주지 않습니다. 보행 데이터를 누구나 이해할 수 있는 정보로 변환합니다.",

    // Solutions Page
    "solutions.hero_title": "하나의 스마트 인솔. 무한한 가능성.",
    "solutions.hero_sub": "개인 보행 인사이트부터 재활, 원격 모니터링, 임상 워크플로우 및 연구까지.",
    "solutions.eco_title": "인터랙티브 솔루션 생태계",
    "solutions.rpm_title": "원격 환자 모니터링 워크플로우",
    "solutions.rpm_step1": "가정 내 환자",
    "solutions.rpm_step2": "NeuroStep 인솔",
    "solutions.rpm_step3": "모바일 동기화",
    "solutions.rpm_step4": "의료진 대시보드",
    "solutions.explorer_title": "연구 데이터 익스플로러 시뮬레이터",

    // Research Page
    "research.hero_badge": "동료심사 논문 및 과학적 증거",
    "research.hero_title": "NeuroStep AI의 연구 배경",
    "research.hero_sub": "웨어러블 보행 분석, 족저압 센싱, CoP 분석 및 의공학 연구를 바탕으로 제작되었습니다.",
    "research.stat_papers": "동료심사 논문",
    "research.stat_citations": "연구 인용 수",
    "research.stat_awards": "수상 및 표창",
    "research.click_inspect": "첫 페이지 확대 보기",
    "research.key_findings_title": "본 연구의 핵심 주요 결과",

    // Section 01: MDPI Sensors
    "research.p1_tag": "01 / 국제 학술지 게재 논문",
    "research.p1_header": "MDPI Sensors 학술지 (2025)",
    "research.p1_badge": "Impact Factor: 4.0 • Q1",
    "research.p1_choice": "EDITOR'S CHOICE 선정",
    "research.p1_open": "오픈 액세스 (Open Access)",
    "research.p1_title": "Multi-Domain CoP Feature Analysis of Functional Mobility for Parkinson's Disease Detection Using Wearable Pressure Insoles",
    "research.p1_pub_details": "Sensors 학술지 게재, Volume 25, Issue 18, Article 5859 (2025년 9월)",
    "research.p1_bullet1": "<strong class=\"text-white\">압력 중심 (CoP) 특징 추출:</strong> 위치, 역학, 주파수 및 확률적 도메인 전반에 걸쳐 양발 평균 및 대칭성 지수를 포함한 144개의 CoP 특징 추출.",
    "research.p1_bullet2": "<strong class=\"text-white\">TUG (Timed Up and Go) 프로토콜:</strong> 동적 균형 및 회전 과제 수행 중 파킨슨병 환자 39명과 대조군 38명을 대상으로 진단 유용성 평가.",
    "research.p1_bullet3": "<strong class=\"text-white\">머신러닝 진단 성능:</strong> 23개의 핵심 특징으로 구성된 WearGait-PD 서브셋을 사용하여 높은 진단 분류 정확도(<strong class=\"text-cyan-300\">ROC-AUC = 0.921</strong>) 달성.",
    "research.p1_btn": "MDPI 논문 전문 보기 ↗",

    // Section 02: KMMS Journal
    "research.p2_tag": "02 / 한국연구재단(NRF) 등재 학술지",
    "research.p2_header": "멀티미디어학회논문지 (2025)",
    "research.p2_badge": "NRF 등재지",
    "research.p2_category": "멀티미디어 정보처리 및 IT 융합",
    "research.p2_title": "IoMT–Based Smart Insole System for Comprehensive Gait Analysis: Plantar Pressure and Foot Dynamics Assessment",
    "research.p2_pub_details": "멀티미디어학회논문지 게재, 제28권 제7호, 2025년 7월, Page 807.",
    "research.p2_bullet1": "<strong class=\"text-slate-900\">IoMT 시스템 아키텍처:</strong> 실시간 족저압 수집 및 발 운동역학 평가를 위한 종합적 의료사물인터넷(IoMT) 하드웨어-소프트웨어 구조.",
    "research.p2_bullet2": "<strong class=\"text-slate-900\">족저압 운동역학 평가:</strong> 입각기 하중 분포 및 뒤꿈치-앞꿈치 이행 과정을 정밀 추적하기 위한 다점 압력 감지 매핑.",
    "research.p2_btn": "논문 원문 보기 ↗",

    // Section 03: Springer MITA
    "research.p3_tag": "03 / 스프링거(Springer) 국제 논문집 게재",
    "research.p3_header": "Springer Proceedings (MITA 2025)",
    "research.p3_badge": "Springer 게재 논문",
    "research.p3_category": "Springer Lecture Notes in Electrical Engineering • MITA 2025",
    "research.p3_title": "Phase-Specific Gait Characterization and Plantar Load Progression Analysis Using Smart Insoles",
    "research.p3_pub_details": "제21회 멀티미디어 정보기술 및 응용 국제학술대회 (MITA 2025) • Springer Nature Switzerland 출판 (대한민국 제주도)",
    "research.p3_findings": "단계별 보행 분석을 통해 4가지 입각기 세부 단계인 <strong>뒤꿈치 닿기(HES)</strong>, <strong>발바닥 닿기(FOF)</strong>, <strong>뒤꿈치 들기(HER)</strong>, <strong>발가락 떼기(TOF)</strong> 전반에 걸친 명확한 족부 하중 이행 곡선을 규명했습니다. 정량적 FSR 및 IMU 신호 동기화를 통해 체중 이동 역학 및 보행 불안정성을 객관적으로 감지할 수 있습니다.",
    "research.p3_img1_title": "MITA 2025 구두 발표",
    "research.p3_img1_sub": "스마트 인솔 하드웨어 및 IMU/CoP 특징",
    "research.p3_img2_title": "보행 단계 주석 프로토콜",
    "research.p3_img2_sub": "HES (뒤꿈치 닿기) → FOF (발바닥 닿기) → HER (뒤꿈치 들기) → TOF (발가락 떼기)",
    "research.p3_img3_title": "국제 기술 세션 발표",
    "research.p3_img3_sub": "제주도 학술대회장",
    "research.p3_btn": "Springer 논문 보기 ↗",

    // Section 04: KMMS Best Paper
    "research.p4_tag": "04 / 우수 논문상 수상 학술대회 연구",
    "research.p4_header": "한국멀티미디어학회 춘계학술대회 2025",
    "research.p4_badge": "우수 논문상 (BEST PAPER AWARD)",
    "research.p4_category": "한국멀티미디어학회 2025 춘계학술대회 • 우수논문상 수상",
    "research.p4_title": "Comprehensive Biomechanical Analysis of Gait Through IoMT-Based Combined IMU and COP Feature Analysis",
    "research.p4_pub_details": "한국멀티미디어학회 2025 춘계학술대회 • 중앙대학교, 서울 (2025년 5월 8일–10일)",
    "research.p4_findings": "6축 IMU 가속도 지표와 16개 지점 족저압 CoP 특징 추출의 동기화 융합은 단일 센서 방식에 비해 월등히 우수한 생체역학적 보행 평가를 제공합니다.",
    "research.p4_img1_title": "우수 논문상 시상식",
    "research.p4_img1_sub": "KMMS 2025 • 중앙대학교",
    "research.p4_img2_title": "구두 발표 세션",
    "research.p4_img2_sub": "생체역학 및 IoMT 연구",
    "research.p4_img3_title": "센서 배치 방법론",
    "research.p4_img3_sub": "발바닥의 16개 핵심 족저압 지점",

    // Section 05: Timeline
    "research.timeline_tag": "연구 발전 과정",
    "research.timeline_title": "연구 및 과학적 근거 타임라인",
    "research.phase1_tag": "1단계",
    "research.phase1_title": "프로토타입 연구개발",
    "research.phase1_desc": "센서 그리드 캘리브레이션 및 웨어러블 폼팩터 실증.",
    "research.phase2_tag": "2단계",
    "research.phase2_title": "스프링거(Springer) MITA",
    "research.phase2_desc": "단계별 입각기 및 하중 이행 검증 (Springer 게재).",
    "research.phase3_tag": "3단계",
    "research.phase3_title": "KMMS 2025",
    "research.phase3_desc": "IoMT 통합 및 IMU-CoP 결합 특징 추출 (우수논문상 수상).",
    "research.phase4_tag": "4단계",
    "research.phase4_title": "Sensors & 학술지",
    "research.phase4_desc": "다중 도메인 CoP 기능적 모빌리티 논문 게재 (MDPI & JKMS).",
    "research.phase5_tag": "5단계",
    "research.phase5_title": "NeuroStep AI",
    "research.phase5_desc": "상용 수준의 모빌리티 및 보행 지능 스타트업 플랫폼.",
    "research.close_window": "창 닫기 ✕",

    // About Page
    "about.hero_title": "웨어러블 지능을 통한 더 나은 모빌리티 설계",
    "about.hero_sub": "지능형 웨어러블 기술을 통해 보행 평가를 더욱 쉽게 이용할 수 있고, 객관적으로 측정 가능하며, 개인 맞춤형으로 제공합니다.",
    "about.team_title": "리더십 및 핵심 팀원",

    // Contact Page
    "contact.hero_title": "NeuroStep과 함께 미래를 만들어가세요",
    "contact.hero_sub": "보행 평가, 임상 파일럿, 연구 협력, 제품 시연 또는 투자 기회에 관심이 있으신가요? 이야기해 봅시다.",
    "contact.social_title": "공식 소셜 페이지",
    "contact.social_sub": "LinkedIn 및 Facebook에서 NeuroStep을 만나보세요.",
    "contact.form_name": "성함",
    "contact.form_email": "이메일 주소",
    "contact.form_org": "소속 기관 / 기업",
    "contact.form_country": "국가",
    "contact.form_phone": "전화번호 (선택)",
    "contact.form_interest": "주요 관심 분야",
    "contact.form_msg": "문의 내용",
    "contact.form_btn": "문의 보내기",
    "contact.success_title": "NeuroStep AI에 문의해 주셔서 감사합니다!",
    "contact.success_msg": "요청이 정상적으로 접수되었습니다. 검토 후 조속히 연락드리겠습니다.",

    // Footer
    "footer.nav_title": "바로가기",
    "footer.desc": "NeuroStep AI - 일상의 걸음을 의미 있는 보행 인사이트로 변환하는 연구 중심 웨어러블 모빌리티 스타트업.",
    "footer.disclaimer_title": "학술 및 규제 관련 안내",
    "footer.disclaimer": "NeuroStep AI는 현재 활발한 연구, 개발 및 검증 단계에 있으며 아직 상용 제품으로 출시되지 않았습니다. 본 플랫폼은 보행 평가, 모빌리티 모니터링, 재활 지원 및 연구 응용을 목적으로 개발 중입니다. 본 웹사이트의 정보는 연구, 교육 및 제품 안내 용도이며 의학적 진단으로 해석되어서는 안 됩니다. 구체적인 상세 내용이나 파일럿 문의는 당사 팀으로 연락해 주시기 바랍니다.",
    "footer.rights": "© 2026 NeuroStep AI. All rights reserved."
  },

  si: {
    // Nav
    "nav.home": "මුල් පිටුව",
    "nav.product": "නිෂ්පාදනය",
    "nav.solutions": "විසඳුම්",
    "nav.research": "පර්යේෂණ",
    "nav.about": "අප ගැන",
    "nav.contact": "සම්බන්ධ වන්න",
    "nav.demo": "ඩෙමෝ එකක් ඉල්ලන්න",
    "nav.pilot": "පයිලට් වැඩසටහනට එකතු වන්න",

    // Hero Home
    "hero.badge": "ස්මාර්ට් ඉන්සෝල් සහ පැළඳිය හැකි ඇවිදීමේ විශ්ලේෂණ තාක්ෂණය",
    "hero.title": "ඔබේ පියවර ඔබේ සෞඛ්‍යය ගැන කියන්නේ මොනවාදැයි දැනගන්න.",
    "hero.sub": "පුද්ගලීකරණය කළ ඇවිදීමේ රටා තක්සේරුව, චලන නිරීක්ෂණය, පුනරුත්ථාපන සහාය සහ පර්යේෂණ සඳහා වූ ස්මාර්ට් ඉන්සෝල් තාක්ෂණය.",
    "hero.cta_primary": "ඩෙමෝ එකක් ඉල්ලන්න",
    "hero.cta_secondary": "පයිලට් වැඩසටහනට එකතු වන්න",
    "hero.cta_video": "වීඩියෝ නිරූපණය බලන්න",
    "hero.live_data": "සජීවී ඇවිදීමේ මැනුම්",

    // Video Showcase
    "video.section": "02 / තාක්ෂණික නිරූපණය",
    "video.title": "NeuroStep AI ක්‍රියාකාරීත්වය නරඹන්න",
    "video.sub": "අපගේ ස්මාර්ට් ඉන්සෝල් මගින් තත්‍ය කාලීනව ගමන් රටා දත්ත ග්‍රහණය කර ප්‍රස්ථාරගත කරන ආකාරය නරඹන්න.",
    "video.feat1_title": "පැලඳිය හැකි සංවේදක පද්ධතිය",
    "video.feat1_desc": "අතිශය සිහින් ඉන්සෝලය තුළ අඩංගු අධි-ඝනත්ව පීඩන සංවේදක පද්ධතිය.",
    "video.feat2_title": "100Hz සජීවී දත්ත සම්ප්‍රේෂණය",
    "video.feat2_desc": "ජංගම යෙදුම සහ ක්ලවුඩ් පද්ධතිය වෙත රහිත අඩු ප්‍රමාද පණිවුඩ යැවීම.",
    "video.feat3_title": "ස්වයංක්‍රීය ඇවිදීමේ විශ්ලේෂණය",
    "video.feat3_desc": "ඇවිදීමේ කාලසීමා, සමමිතිය සහ යටි පතුල් පීඩන වෙනස්කම් පිළිබඳ නිශ්චිත විශ්ලේෂණ.",

    // Marquee
    "marquee.item1": "ඇවිදීමේ කාල පරාමිති (Gait Timing)",
    "marquee.item2": "වම් සහ දකුණු පාදවල යටි පතුල් පීඩන සමබරතාව",
    "marquee.item3": "යටි පතුල් පීඩනය",
    "marquee.item4": "චලන සංවේදනය",
    "marquee.item5": "ඇවිදීමේ සමමිතිය",
    "marquee.item6": "චලන ප්‍රවණතා",

    // What NeuroStep Measures
    "measures.section": "01 / මැනුම් පද්ධතිය",
    "measures.title": "සෑම පියවරකම දත්ත අඩංගු වේ. NeuroStep එය තේරුම් ගත හැකි පරිදි ඉදිරිපත් කරයි.",
    "measures.sub": "අධි-ඝනත්ව පීඩන සිතියම්කරණය සහ බහු-අක්ෂ සංවේදක මගින් තථ්‍ය කාලීනව චලන ගතිකත්වය ග්‍රහණය කරයි.",
    "measures.m1_title": "ඇවිදීමේ කාල පරාමිති සහ පියවර සංඛ්‍යාතය (Cadence)",
    "measures.m1_desc": "පාදය බිම තබා සිටින අවධිය (Stance Phase), පාදය ඉදිරියට ගෙන යන අවධිය (Swing Phase), දෙපා එකවර බිම ස්පර්ශ වන කාල අනුපාතය සහ පියවර චක්‍ර කාලය නිවැරදිව මැනීම.",
    "measures.m2_title": "වම් සහ දකුණු පාදවල යටි පතුල් පීඩන සමබරතාව",
    "measures.m2_desc": "ඇවිදීමේදී වම් සහ දකුණු පාද අතර බර බෙදී යාම නිරන්තරයෙන් සංසන්දනය කිරීම.",
    "measures.m3_title": "යටි පතුල් පීඩන ව්‍යාප්තිය",
    "measures.m3_desc": "පෙර පාදය, මැද පාදය සහ විලුඹ ස්පර්ශ වන ස්ථානවල යටි පතුල් පීඩනය නිරීක්ෂණය කිරීම.",
    "measures.m4_title": "ඇවිදීමේ සමමිතික දර්ශකය",
    "measures.m4_desc": "කොර ගැසීම් හෝ වෙනත් අසමතුලිතතා හඳුනා ගැනීම සඳහා ප්‍රමාණාත්මක ඇවිදීමේ සමමිතික මැනුම්.",
    "measures.m5_title": "දීර්ඝකාලීන චලන ප්‍රවණතා",
    "measures.m5_desc": "පුනරුත්ථාපන ප්‍රතිචාර නිරීක්ෂණය සඳහා දින, සති හෝ මාස ගණනාවක් පුරා ප්‍රගතිය මැනීම.",
    "measures.visualizer_title": "යටි පතුල් පීඩන සිතියම් නිරූපකය",
    "measures.peak": "ඉහළ",
    "measures.mid": "මධ්‍යම",
    "measures.low": "අඩු",
    "measures.autocycling": "ස්වයංක්‍රීයව මාරු වේ...",
    "measures.visualizer_hint": "විශේෂිත පීඩන කලාප නිරීක්ෂණය කිරීමට දකුණු පස ඇති මැනුම් මත cursor එක තබන්න (Hover) හෝ ස්පර්ශ කරන්න.",

    // Scroll Story
    "story.section": "02 / නිෂ්පාදන කතාව",
    "story.title": "පියවරක සිට ගැඹුරු අවබෝධයක් දක්වා",
    "story.sub_tag": "නිරන්තර චලන සංවේදනය",
    "story.s1_title": "1. පලඳින්න (Wear)",
    "story.s1_desc": "අතිශය සිහින් NeuroStep ස්මාර්ට් ඉන්සෝලය ඔබේ පාවහන් තුළට දමන්න.",
    "story.s1_tag": "ජෛව අනුකූල හැඩගැස්ම",
    "story.s2_title": "2. ඇවිදින්න (Walk)",
    "story.s2_desc": "සාමාන්‍ය පරිදි ඇවිදින අතරතුර සංවේදක මගින් ඇවිදීමේ ගතිකත්වය රැස් කරයි.",
    "story.s2_tag": "ස්වාභාවික ඇවිදීමේ රටාව",
    "story.s3_title": "3. මනින්න (Measure)",
    "story.s3_desc": "යටි පතුල් පීඩන කලාප සහ චලන දත්ත නිවැරදිව ග්‍රහණය කරගනී.",
    "story.s3_tag": "100Hz සංඥා ග්‍රහණය",
    "story.s4_title": "4. තේරුම් ගන්න (Understand)",
    "story.s4_desc": "සංකීර්ණ සංඥා පැහැදිලි චලන මැනුම් බවට පරිවර්තනය කරයි.",
    "story.s4_tag": "AI සංඥා පද්ධතිය",
    "story.s5_title": "5. නිරීක්ෂණය කරන්න (Track)",
    "story.s5_desc": "කාලයත් සමඟ ඇවිදීමේ ස්ථාවරත්වය සහ සුවවීමේ ප්‍රවණතා නිරීක්ෂණය කරන්න.",
    "story.s5_tag": "දීර්ඝකාලීන විශ්ලේෂණය",

    // Who it helps
    "audience.section": "03 / භාවිතයන් සහ ක්ෂේත්‍ර",
    "audience.title": "එක් පද්ධතියක්. විවිධ අවශ්‍යතා.",
    "audience.a1_title": "පුද්ගලයන් සහ පවුල් සඳහා",
    "audience.a1_sub": "ඔබ ඇත්තටම ඇවිදින ආකාරය දැනගන්න.",
    "audience.a1_desc": "පුද්ගලික ඇවිදීමේ සෞඛ්‍ය මට්ටම සහ වැඩිහිටියන්ගේ ඇවිදීමේ වෙනස්කම් කලින් හඳුනා ගැනීම.",
    "audience.a2_title": "භෞතචිකිත්සකයින් සහ සායන සඳහා",
    "audience.a2_sub": "නිශ්චිත දත්ත මගින් සායනික පළපුරුද්ද තහවුරු කරන්න.",
    "audience.a2_desc": "පුනරුත්ථාපනයට පෙර සහ පසු සංසන්දනය, රෝගීන්ගේ ප්‍රගතිය මැනීම.",
    "audience.a3_title": "පාකින්සන් සහ ස්නායු පුනරුත්ථාපනය",
    "audience.a3_sub": "කාලයත් සමඟ සිදුවන වෙනස්කම් නිරීක්ෂණය කරන්න.",
    "audience.a3_desc": "ස්නායු පුනරුත්ථාපනය සඳහා ඇවිදීමේ තාලය සහ සමබරතාවය දීර්ඝකාලීනව නිරීක්ෂණය කිරීම.",
    "audience.a4_title": "පර්යේෂකයන් සහ විශ්වවිද්‍යාල",
    "audience.a4_sub": "සෑම පියවරක්ම පර්යේෂණ දත්ත බවට පත් කරන්න.",
    "audience.a4_desc": "ජෛව යාන්ත්‍ර විද්‍යාව සහ මානව චලන අධ්‍යයන සඳහා ඉහළ නිරවද්‍යතාවයකින් යුත් IMU සහ CoP විශේෂාංග විශ්ලේෂණය.",

    // Why NeuroStep AI
    "why.section": "04 / විශේෂතා",
    "why.title": "ඇයි NeuroStep AI?",
    "why.f1_title": "පුද්ගලීකරණය කළ ඇවිදීමේ සෞඛ්‍ය පරීක්ෂාව",
    "why.f1_desc": "ඔබේ ඇවිදීමේ රටාව අනුමාන නොකර නිශ්චිතව මැන බලන්න.",
    "why.f2_title": "පුනරුත්ථාපන ප්‍රගතිය මැනීම",
    "why.f2_desc": "සුවවීම අනුමාන නොකරන්න. ප්‍රතිකාර වලට පෙර සහ පසු වෙනස්කම් මැන බලන්න.",
    "why.f3_title": "දුරස්ථ රෝගී නිරීක්ෂණය (RPM)",
    "why.f3_desc": "රෝගියා සායනයෙන් පිටතදීත් නිරීක්ෂණය කිරීමේ හැකියාව.",
    "why.f4_title": "දීර්ඝකාලීන ස්නායු පුනරුත්ථාපනය",
    "why.f4_desc": "සෑම පියවරකින්ම ප්‍රගතියක් පෙන්විය හැක. දිගුකාලීන ප්‍රවණතා නිරීක්ෂණය කරන්න.",

    // Research Strip
    "research.strip_title": "පර්යේෂණ මත පදනම් වූ තාක්ෂණය.",
    "research.r1_venue": "MITA 2025 • ජේජු දූපත, දකුණු කොරියාව",
    "research.r1_title": "Phase-Specific Gait Characterization and Plantar Load Progression Analysis Using Smart Insoles",
    "research.r2_venue": "KMMS 2025 • සෝල්, දකුණු කොරියාව",
    "research.r2_title": "Comprehensive Biomechanical Analysis of Gait Through IoMT-Based Combined IMU and COP Feature Analysis",
    "research.r2_award": "හොඳම පර්යේෂණ පත්‍රිකා සම්මානය (BEST PAPER AWARD)",
    "research.r3_venue": "Sensors 2025 • MDPI ප්‍රකාශනය",
    "research.r3_title": "Multi-Domain CoP Feature Analysis of Functional Mobility for Parkinson's Disease Detection Using Wearable Pressure Insoles",
    "research.r3_choice": "EDITOR'S CHOICE තේරීම",
    "research.view_all": "සියලුම පර්යේෂණ පත්‍රිකා නරඹන්න →",

    // Dynamic Research Counters
    "research.stat_papers": "පර්යේෂණ පත්‍රිකා",
    "research.stat_citations": "පර්යේෂණ උපුටා ගැනීම්",
    "research.stat_awards": "සම්මාන සහ ඇගයීම්",

    // Pipeline Transformation
    "pipeline.title": "NeuroStep දත්ත සැකසුම් පද්ධතිය",
    "pipeline.step1": "පියවර",
    "pipeline.step2": "යටි පතුල් පීඩන සිතියම",
    "pipeline.step3": "සංවේදක සංඥා",
    "pipeline.step4": "ඇවිදීමේ මැනුම්",
    "pipeline.step5": "පුද්ගලික අවබෝධය",
    "pipeline.step6": "ප්‍රගති නිරීක්ෂණය",

    // Final CTA
    "cta.title": "චලනය වෙනස් ආකාරයකින් වටහා ගැනීමට සූදානම්ද?",
    "cta.sub": "පුද්ගලයන්, වෛද්‍යවරුන්, පර්යේෂකයන් සහ සෞඛ්‍ය සහකරුවන් සඳහා.",
    "cta.btn_demo": "ඩෙමෝ එකක් ඉල්ලන්න",
    "cta.btn_pilot": "පයිලට් වැඩසටහනට එකතු වන්න",

    // Product Page
    "product.hero_title": "NeuroStep ස්මාර්ට් ඉන්සෝලය හඳුනාගන්න",
    "product.hero_sub": "සාමාන්‍ය ඉන්සෝලයකට වඩා වැඩි යමක් — ඇවිදීම තේරුම් ගැනීමට බුද්ධිමත් මගක්.",
    "product.exploded_title": "බහු-ස්තර ඉංජිනේරු තාක්ෂණය",
    "product.exploded_sub": "අභ්‍යන්තර සංවේදක පද්ධතිය පරීක්ෂා කිරීමට ස්තර මාරු කරන්න.",
    "product.l_base": "පදනම් ඉන්සෝල ස්තරය",
    "product.l_pressure": "යටි පතුල් පීඩන සංවේදක පද්ධතිය",
    "product.l_imu": "චලන සංවේදක IMU මොඩියුලය",
    "product.l_mcu": "ක්ෂුද්‍ර පාලක ඒකකය (MCU)",
    "product.l_wireless": "රැහැන් රහිත දත්ත සම්ප්‍රේෂකය",
    "product.size_title": "පවතින ප්‍රමාණයන්",
    "product.size_sub": "වර්තමාන පරීක්ෂණ අදියරේදී ප්‍රධාන ප්‍රමාණ 3කින් ලබාගත හැක.",
    "product.specs_title": "තාක්ෂණික පිරිවිතර",
    "product.report_title": "පුද්ගලීකරණය කළ ඇවිදීමේ වාර්තා නිරූපණය",
    "product.report_sub": "අප පෙන්වන්නේ දත්ත පමණක් නොවේ. ඇවිදීමේ දත්ත ඔබට තේරුම් ගත හැකි තොරතුරු බවට පරිවර්තනය කරමු.",

    // Solutions Page
    "solutions.hero_title": "එක් ස්මාර්ට් ඉන්සෝලයක්. බොහෝ අවස්ථාවන්.",
    "solutions.hero_sub": "පුද්ගලික ඇවිදීමේ දැනුමේ සිට පුනරුත්ථාපනය, දුරස්ථ නිරීක්ෂණය සහ පර්යේෂණ දක්වා.",
    "solutions.eco_title": "අන්තර්ක්‍රියාකාරී විසඳුම් පද්ධතිය",
    "solutions.rpm_title": "දුරස්ථ රෝගී නිරීක්ෂණ ක්‍රියාවලිය",
    "solutions.rpm_step1": "නිවසේ සිටින රෝගියා",
    "solutions.rpm_step2": "NeuroStep ඉන්සෝලය",
    "solutions.rpm_step3": "දුරකථන සම්බන්ධතාව",
    "solutions.rpm_step4": "සායනික ඩෑෂ්බෝඩය",
    "solutions.explorer_title": "පර්යේෂණ දත්ත පරීක්ෂකය",

    // Research Page
    "research.hero_badge": "සම-විචාරිත පර්යේෂණ ප්‍රකාශන සහ විද්‍යාත්මක සාක්ෂි",
    "research.hero_title": "NeuroStep AI පසුපස ඇති පර්යේෂණ",
    "research.hero_sub": "පළඳින සංවේදක, යටි පතුල් පීඩන මැනුම්, CoP විශ්ලේෂණය සහ ජෛව වෛද්‍ය ඉංජිනේරු පර්යේෂණ ඇසුරින් නිර්මාණය කර ඇත.",
    "research.stat_papers": "පර්යේෂණ පත්‍රිකා",
    "research.stat_citations": "පර්යේෂණ උපුටා ගැනීම්",
    "research.stat_awards": "සම්මාන සහ ඇගයීම්",
    "research.click_inspect": "පළමු පිටුව පරික්ෂා කිරීමට ක්ලික් කරන්න",
    "research.key_findings_title": "මෙම පර්යේෂණයේ ප්‍රධාන සොයාගැනීම්",

    // Section 01: MDPI Sensors
    "research.p1_tag": "01 / ජාත්‍යන්තර පර්යේෂණ සඟරා ප්‍රකාශනය",
    "research.p1_header": "MDPI Sensors පර්යේෂණ සඟරාව (2025)",
    "research.p1_badge": "Impact Factor: 4.0 • Q1",
    "research.p1_choice": "EDITOR'S CHOICE තේරීම",
    "research.p1_open": "විවෘත ප්‍රවේශය (Open Access)",
    "research.p1_title": "Multi-Domain CoP Feature Analysis of Functional Mobility for Parkinson's Disease Detection Using Wearable Pressure Insoles",
    "research.p1_pub_details": "Sensors සඟරාවේ ප්‍රකාශිතයි, වෙළුම 25, කලාපය 18, ලිපිය 5859 (2025 සැප්තැම්බර්)",
    "research.p1_bullet1": "<strong class=\"text-white\">පීඩන මධ්‍යස්ථාන (CoP) විශේෂාංග නිස්සාරණය:</strong> පතුල් දෙකෙහි සාමාන්‍යයන් සහ අසමමිතීන් ඇතුළුව ස්ථානීය, චලන, සංඛ්‍යාත සහ ස්ටෝකැස්ටික් ක්ෂේත්‍ර පුරා CoP විශේෂාංග 144ක් නිස්සාරණය කරන ලදී.",
    "research.p1_bullet2": "<strong class=\"text-white\">TUG (Timed Up and Go) ක්‍රමවේදය:</strong> චලන සමබරතාවය සහ හැරීම් පරීක්ෂාවලදී පාකින්සන් රෝගීන් 39 දෙනෙකු සහ පාලන කණ්ඩායම් 38 දෙනෙකු ආශ්‍රයෙන් රෝග විනිශ්චය කාර්යසාධනය ඇගයීමට ලක් කරන ලදී.",
    "research.p1_bullet3": "<strong class=\"text-white\">යන්ත්‍ර ඉගෙනුම් (Machine Learning) රෝග විනිශ්චය කාර්යසාධනය:</strong> ප්‍රධාන විශේෂාංග 23ක් සහිත WearGait-PD උපකුලකය භාවිතයෙන් ඉහළ රෝග විනිශ්චය නිවැරදිභාවයක් (<strong class=\"text-cyan-300\">ROC-AUC = 0.921</strong>) ලබා ගන්නා ලදී.",
    "research.p1_btn": "MDPI සඟරාවේ ලිපිය බලන්න ↗",

    // Section 02: KMMS Journal
    "research.p2_tag": "02 / කොරියානු ජාතික පර්යේෂණ පදනමේ (NRF) ලියාපදිංචි සඟරාව",
    "research.p2_header": "Journal of Korea Multimedia Society (2025)",
    "research.p2_badge": "NRF ලියාපදිංචි සඟරාව",
    "research.p2_category": "මල්ටිමීඩියා තොරතුරු සැකසුම් සහ IT තාක්ෂණ එකතුව",
    "research.p2_title": "IoMT–Based Smart Insole System for Comprehensive Gait Analysis: Plantar Pressure and Foot Dynamics Assessment",
    "research.p2_pub_details": "Journal of Korea Multimedia Society (멀티미디어학회논문지) සඟරාවේ ප්‍රකාශිතයි, වෙළුම 28, අංක 7, 2025 ජූලි, පිටුව 807.",
    "research.p2_bullet1": "<strong class=\"text-slate-900\">IoMT පද්ධති ව්‍යුහය:</strong> සජීවී යටි පතුල් පීඩන දත්ත රැස්කිරීම සහ ඇවිදීමේ චලන ඇගයීම සඳහා වූ සම්පූර්ණ IoMT හාඩ්වෙයාර් සහ සොෆ්ට්වෙයාර් ව්‍යුහය.",
    "research.p2_bullet2": "<strong class=\"text-slate-900\">යටි පතුල් චලන ඇගයීම:</strong> ඇවිදීමේදී පතුලේ බර බෙදී යාම සහ විලුඹේ සිට ඇඟිලි දක්වා බර මාරුවන ආකාරය නිවැරදිව නිරීක්ෂණය කිරීම සඳහා වූ බහු-ලක්ෂ්‍ය පීඩන සිතියම්කරණය.",
    "research.p2_btn": "මුල් පර්යේෂණ පත්‍රිකාව බලන්න ↗",

    // Section 03: Springer MITA
    "research.p3_tag": "03 / ස්ප්‍රින්ගර් (Springer) ජාත්‍යන්තර ප්‍රකාශනය",
    "research.p3_header": "Springer Proceedings (MITA 2025)",
    "research.p3_badge": "Springer ප්‍රකාශනය",
    "research.p3_category": "Springer Lecture Notes in Electrical Engineering • MITA 2025",
    "research.p3_title": "Phase-Specific Gait Characterization and Plantar Load Progression Analysis Using Smart Insoles",
    "research.p3_pub_details": "21 වන මල්ටිමීඩියා තොරතුරු තාක්ෂණ හා යෙදුම් පිළිබඳ ජාත්‍යන්තර සම්මන්ත්‍රණය • Springer Nature Switzerland මගින් ප්‍රකාශිතයි (ජේජු දූපත, දකුණු කොරියාව)",
    "research.p3_findings": "ඇවිදීමේ අදියර විශ්ලේෂණය මගින් පතුල බිම තබන ප්‍රධාන අදියර 4 පුරා පතුලේ බර මාරුවීමේ රටාවන් පැහැදිලි කරයි: <strong>විලුඹ බිම තැබීම (HES)</strong>, <strong>මුළු පතුලම බිම තැබීම (FOF)</strong>, <strong>විලුඹ එසවීම (HER)</strong>, සහ <strong>ඇඟිලි බිමෙන් ඉවත් කිරීම (TOF)</strong>. FSR සහ IMU සංඥා සමකාලීන කිරීම මගින් බර මාරුවීමේ චලනයන් සහ ඇවිදීමේ අස්ථාවරත්වය නිවැරදිව හඳුනාගත හැක.",
    "research.p3_img1_title": "MITA 2025 වාචික ඉදිරිපත් කිරීම",
    "research.p3_img1_sub": "ස්මාර්ට් ඉන්සෝල් හාඩ්වෙයාර් සහ IMU/CoP විශේෂාංග",
    "research.p3_img2_title": "ඇවිදීමේ අදියර සටහන් කිරීමේ ක්‍රමවේදය",
    "research.p3_img2_sub": "HES (විලුඹ බිම තැබීම) → FOF (මුළු පතුලම බිම තැබීම) → HER (විලුඹ එසවීම) → TOF (ඇඟිලි එසවීම)",
    "research.p3_img3_title": "ජාත්‍යන්තර තාක්ෂණික අංශය",
    "research.p3_img3_sub": "ජේජු දූපත සම්මන්ත්‍රණ ශාලාව",
    "research.p3_btn": "Springer සඟරාවේ ලිපිය බලන්න ↗",

    // Section 04: KMMS Best Paper
    "research.p4_tag": "04 / සම්මානනීය පර්යේෂණ සම්මන්ත්‍රණ ප්‍රකාශනය",
    "research.p4_header": "KMMS වසන්ත සම්මන්ත්‍රණය 2025",
    "research.p4_badge": "හොඳම පර්යේෂණ පත්‍රිකා සම්මානය",
    "research.p4_category": "Korea Multimedia Society 2025 වසන්ත සම්මන්ත්‍රණය • හොඳම පර්යේෂණ පත්‍රිකා සම්මානය",
    "research.p4_title": "Comprehensive Biomechanical Analysis of Gait Through IoMT-Based Combined IMU and COP Feature Analysis",
    "research.p4_pub_details": "Korea Multimedia Society වසන්ත සම්මන්ත්‍රණය 2025 • චුන්ග්-අං විශ්වවිද්‍යාලය, සෝල්, දකුණු කොරියාව (2025 මැයි 8–10)",
    "research.p4_findings": "අක්ෂ 6ක IMU ත්වරණ මැනුම් සහ ලක්ෂ්‍ය 16ක යටි පතුල් CoP විශේෂාංග එක්ව විශ්ලේෂණය කිරීම මගින් තනි සංවේදක ක්‍රමවලට වඩා උසස් ජෛව කාර්මික ඇවිදීමේ තක්සේරුවක් ලබා දේ.",
    "research.p4_img1_title": "හොඳම පර්යේෂණ පත්‍රිකා සම්මාන උළෙල",
    "research.p4_img1_sub": "KMMS 2025 • චුන්ග්-අං විශ්වවිද්‍යාලය",
    "research.p4_img2_title": "වාචික ඉදිරිපත් කිරීමේ අංශය",
    "research.p4_img2_sub": "ජෛව කාර්මික විද්‍යාව සහ IoMT පර්යේෂණ",
    "research.p4_img3_title": "සංවේදක ස්ථානගත කිරීමේ ක්‍රමවේදය",
    "research.p4_img3_sub": "පාදයේ තෝරාගත් ප්‍රධාන පීඩන ලක්ෂ්‍ය 16",

    // Section 05: Timeline
    "research.timeline_tag": "පර්යේෂණ විකාශනය",
    "research.timeline_title": "පර්යේෂණ කාලරාමුව",
    "research.phase1_tag": "1 වන පියවර",
    "research.phase1_title": "මූලාකෘති පර්යේෂණ සහ සංවර්ධනය",
    "research.phase1_desc": "සංවේදක පද්ධති ක්‍රමාංකනය සහ පැළඳිය හැකි පරීක්ෂණ.",
    "research.phase2_tag": "2 වන පියවර",
    "research.phase2_title": "Springer MITA",
    "research.phase2_desc": "ඇවිදීමේ අදියර සහ පතුලේ බර ප්‍රගතිය තහවුරු කිරීම (Springer).",
    "research.phase3_tag": "3 වන පියවර",
    "research.phase3_title": "KMMS 2025",
    "research.phase3_desc": "IoMT සම්බන්ධතාවය සහ IMU-CoP එක්ව විශ්ලේෂණය (හොඳම පත්‍රිකා සම්මානය).",
    "research.phase4_tag": "4 වන පියවර",
    "research.phase4_title": "Sensors සහ JKMS",
    "research.phase4_desc": "බහු-ක්ෂේත්‍ර CoP චලන පර්යේෂණ ප්‍රකාශන (MDPI සහ JKMS).",
    "research.phase5_tag": "5 වන පියවර",
    "research.phase5_title": "NeuroStep AI",
    "research.phase5_desc": "වෙළඳපොළ මට්ටමේ චලන සහ ඇවිදීමේ බුද්ධිමය තාක්ෂණික පද්ධතිය.",
    "research.close_window": "වසා දමන්න ✕",

    // About Page
    "about.hero_title": "තාක්ෂණය මගින් වඩාත් හොඳ චලන හැකියාවක් නිර්මාණය කිරීම",
    "about.hero_sub": "ඇවිදීමේ තක්සේරුව සැමට පහසුවෙන් ලබාගත හැකි සහ නිවැරදි මැනිය හැකි එකක් බවට පත් කිරීම.",
    "about.team_title": "නායකත්වය සහ ප්‍රධාන කණ්ඩායම",

    // Contact Page
    "contact.hero_title": "NeuroStep සමඟ ඉදිරියට යමු",
    "contact.hero_sub": "ඇවිදීමේ පරීක්ෂාවක්, සායනික පරීක්ෂණයක්, පර්යේෂණ සහයෝගීතාවයක් හෝ ආයෝජන අවස්ථාවක් සඳහා අප හා සම්බන්ධ වන්න.",
    "contact.social_title": "නිල සමාජ මාධ්‍ය පිටු",
    "contact.social_sub": "LinkedIn සහ Facebook ඔස්සේ NeuroStep සමඟ සම්බන්ධ වන්න.",
    "contact.form_name": "සම්පූර්ණ නම",
    "contact.form_email": "විද්‍යුත් තැපෑල",
    "contact.form_org": "ආයතනය",
    "contact.form_country": "රට",
    "contact.form_phone": "දුරකථන අංකය (විකල්ප)",
    "contact.form_interest": "ප්‍රධාන උනන්දුව ඇති ක්ෂේත්‍රය",
    "contact.form_msg": "ඔබේ පණිවිඩය",
    "contact.form_btn": "තොරතුරු යොමු කරන්න",
    "contact.success_title": "NeuroStep AI හා සම්බන්ධ වීම ගැන ස්තුතියි!",
    "contact.success_msg": "ඔබේ ඉල්ලීම අප වෙත ලැබුණි. අපගේ කණ්ඩායම ඉක්මනින්ම ඔබ හා සම්බන්ධ වනු ඇත.",

    // Footer
    "footer.nav_title": "පිටු මගපෙන්වීම",
    "footer.desc": "NeuroStep AI - එදිනෙදා පියවරයන් අර්ථවත් ඇවිදීමේ අවබෝධයක් බවට පරිවර්තනය කරන පර්යේෂණ පාදක කරගත් පැළඳිය හැකි චලන තාක්ෂණික ආයතනය.",
    "footer.disclaimer_title": "විද්‍යාත්මක සහ නියාමන නිවේදනය",
    "footer.disclaimer": "NeuroStep AI දැනට සක්‍රීය පර්යේෂණ, සංවර්ධන සහ පරීක්ෂණ අදියරේ පවතින අතර තවමත් වාණිජ නිෂ්පාදනයක් ලෙස වෙළඳපොළට නිකුත් කර නොමැත. මෙම පද්ධතිය ඇවිදීමේ තක්සේරුව, චලන නිරීක්ෂණය, පුනරුත්ථාපන සහාය සහ පර්යේෂණ භාවිතයන් සඳහා සංවර්ධනය කෙරේ. මෙහි ඇති තොරතුරු පර්යේෂණ, අධ්‍යාපනික සහ නිෂ්පාදන තොරතුරු සඳහා පමණක් වන අතර වෛද්‍ය විනිශ්චයක් ලෙස නොසැලකිය යුතුය. නිශ්චිත තොරතුරු හෝ පරීක්ෂණ සබඳතා සඳහා කරුණාකර අපගේ කණ්ඩායම හා සම්බන්ධ වන්න.",
    "footer.rights": "© 2026 NeuroStep AI. සියලුම හිමිකම් ඇවිරිණි."
  }
};

// State Manager for Language
class I18nManager {
  constructor() {
    this.currentLang = localStorage.getItem('neurostep_lang') || 'en';
    this.init();
  }

  init() {
    document.addEventListener('DOMContentLoaded', () => {
      this.applyLanguage(this.currentLang);
      this.bindSwitcherEvents();
    });
  }

  setLanguage(lang) {
    if (!translations[lang]) return;
    this.currentLang = lang;
    localStorage.setItem('neurostep_lang', lang);
    this.applyLanguage(lang);
  }

  applyLanguage(lang) {
    const langData = translations[lang] || translations.en;
    
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (langData[key]) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          el.placeholder = langData[key];
        } else {
          el.innerHTML = langData[key];
        }
      }
    });

    document.querySelectorAll('.lang-btn').forEach(btn => {
      if (btn.getAttribute('data-lang') === lang) {
        btn.classList.add('bg-blue-600', 'text-white', 'font-semibold');
        btn.classList.remove('text-slate-600', 'hover:text-blue-600');
      } else {
        btn.classList.remove('bg-blue-600', 'text-white', 'font-semibold');
        btn.classList.add('text-slate-600', 'hover:text-blue-600');
      }
    });

    document.documentElement.lang = lang;

    // Dispatch custom languageChanged event for dynamic scripts
    window.dispatchEvent(new CustomEvent('languageChanged', { detail: { lang } }));
  }

  bindSwitcherEvents() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = btn.getAttribute('data-lang');
        this.setLanguage(lang);
      });
    });
  }
}

window.i18n = new I18nManager();

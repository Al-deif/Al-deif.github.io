
        const coursesData = { 
            

            matlab: {
    id: "matlab",
    title: "دورة مقدمة في البرمجة والمحاكاة باستخدام MATLAB",
    category: "هندسة وبرمجيات",
    badge: "مبتدئ إلى متقدم",
    duration: "20 ساعة",
    instructor: "أبــوضيـــــــــف",
    bgClass: "bg-gradient-0",
    /* icon: "bi-cpu-fill",*/
    description: "تعد هذه الدورة المدخل الأساسي والشامل لاحتراف بيئة البرمجة الهندسية الأكثر انتشاراً عالمياً MATLAB. ستتعلم في هذه الدورة كيفية التعامل مع المصفوفات، وإجراء العمليات الرياضية المعقدة، وتحليل البيانات، وبناء السكربتات البرمجية الذكية، بالإضافة إلى رسم المنحنيات البيانية ثنائية الأبعاد، وإنشاء الدوال المخصصة، والتعامل مع كفاءة المعالجة الرقمية لتأهيلك لبناء المشاريع والبحوث الهندسية باحترافية.",
    outcomes: [
        "فهم بيئة عمل MATLAB والتحكم الكامل في واجهة البرنامج ونوافذه المختلفة.",
        "القدرة على إنشاء المصفوفات والمتجهات (Arrays & Vectors) بمختلف الأبعاد والتعامل مع عناصرها بكفاءة.",
        "احتراف إجراء العمليات الرياضية الحسابية والجبرية (Element-by-Element) وحل المعادلات المعقدة.",
        "التمكن من معالجة البيانات واستيرادها وتصديرها وإدارتها عبر مساحة العمل (Workspace).",
        "إنشاء الرسومات البيانية ثنائية الأبعاد (2D Plots) وتنسيقها وتخصيصها هندسياً لعرض النتائج.",
        "بناء البرامج المتكاملة باستخدام الجمل الشرطية (if-else) وحلقات التكرار (Loops).",
        "تصميم وبناء الدوال البرمجية المخصصة (User-Defined Functions) لإعادة استخدام الكود بكفاءة.",
        "التعامل مع المتطابقات وكثيرات الحدود (Polynomials) وإجراء عمليات الملاءمة الإحصائية المنحنية (Curve Fitting)."
    ],
    resources: [
                    { name: "Chapter-one", size: "4MB", type: "pdf", icon: "bi-file-pdf" },
                    { name: "Chapter-Two", size: "5MB", type: "zip", icon: "bi-file-pdf" },
                    { name: "Chapter-three", size: "1MB", type: "pdf", icon: "bi-file-pdf" }
                ],
    curriculum: [
        { title: "الفصل الأول: بدء العمل والأساسيات التفاعلية (Starting with MATLAB)", desc: "التعرف على واجهة البرنامج، استخدام نافذة الأوامر كحاسبة ذكية، الدوال الرياضية المدمجة، تعريف المتغيرات القياسية، وإنشاء السكربتات الأساسية." },
        { title: "الفصل الثاني: بناء وهيكلة المصفوفات (Creating Arrays)", desc: "طرق إنشاء المتجهات والمصفوفات ثنائية الأبعاد، استخدام أوامر zeros وones، مصفوفة الوحدة eye، عمليات التدوير (Transpose)، وعنونة وتعديل عناصر المصفوفة." },
        { title: "الفصل الثالث: العمليات الرياضية على المصفوفات (Mathematical Operations with Arrays)", desc: "الجمع والطرح، ضرب وقسمة المصفوفات، العمليات العنصرية (Element-by-Element)، استخدام الدوال الإحصائية لتحليل المصفوفات، وتوليد الأعداد العشوائية." },
        { title: "الفصل الرابع: إدارة البيانات والملفات البرمجية (Script Files & Data Management)", desc: "التحكم في مساحة العمل (Workspace)، أوامر الإدخال والإخراج المتقدمة (disp & fprintf)، حفظ واستعادة البيانات (save & load)، واستيراد وتصدير البيانات الخارجية." },
        { title: "الفصل الخامس: الرسوم والمنحنيات البيانية ثنائية الأبعاد (Two-Dimensional Plots)", desc: "استخدام أمر plot وfplot، دمج عدة رسومات برسم واحد (hold on)، تنسيق المحاور والخطوط، الرسوم اللوغاريتمية والقطبية والمدرجات التكرارية (Histograms)." },
        { title: "الفصل السادس: البرمجة وصناعة القرار في ماتلاب (Programming in MATLAB)", desc: "المعاملات المنطقية وال관계ية، الجمل الشرطية المتفرعة (if-elseif-else)، صياغة الجمل الاختيارية switch-case، وبناء حلقات التكرار المحسوبة والمشروطة (for & while loops)." },
        { title: "الفصل السابع: بناء الدوال البرمجية المخصصة (User-Defined Functions)", desc: "هيكلة ملفات الدوال (Function Files)، معاملات الإدخال والإخراج، المتغيرات المحلية والعامة، الدوال المجهولة (Anonymous Functions)، والدوال الفرعية والمتداخلة." },
        { title: "الفصل الثامن: كثيرات الحدود وملاءمة المنحنيات (Polynomials & Curve Fitting)", desc: "حساب قيم جذور كثيرات الحدود، العمليات الجبرية والتفاضلية عليها، واحتراف عملية ملاءمة المنحنيات (Curve Fitting) باستخدام دالة polyfit والاستكمال الخارجي." }
    ]
},
            /**************************************************************** */
                        Matlab: {
                id: "Matlab",
                title: "An Introduction to Matlab",
                category: "برمجة",
                badge: "مبتدئ",
                duration: "لم يتم التحديد",
                instructor: "أبــوضيـــــــــف",
                bgClass: "bg-gradient-0",
               /* icon: "bi-mortarboard-fill",*/
                description: "السلام عليكم,سوف نتعلم في هذه الدورة التدريبية مبادئ واساسيات التعامل مع برنامج المات لاب.",
                outcomes: [
                    "فهم مبادئ عمل العناصر الإلكترونية الأساسية (المقاومات، المكثفات، الترانزستورات، والدوائر المتكاملة).",
                    "احتراف استخدام برامج تصميم الدوائر المطبوعة ورسم المخططات التخطيطية (Schematic).",
                    "تحويل المخططات التخطيطية إلى لوحات مطبوعة (Layout) متعددة الطبقات بشكل سليم وعلمي.",
                    "مراعاة قواعد هندسة التصميم لضمان الأمان والحد من التشويش الكهرومغناطيسي (EMI).",
                    "توليد وتصدير ملفات التصنيع (Gerber Files) لإرسالها لأي مصنع لوحات مطبوعة حول العالم."
                ],
                resources: [
                    { name: "Chapter-one", size: "4MB", type: "pdf", icon: "bi-file-pdf" },
                    { name: "Chapter-Two", size: "5MB", type: "zip", icon: "bi-file-pdf" },
                    { name: "Chapter-three", size: "1MB", type: "pdf", icon: "bi-file-pdf" }
                ],
                curriculum: [
                    { title: "المقدمة والمفاهيم الأساسية للإلكترونيات", desc: "التعرف على الترانزستورات والمقاومات وأنواع اللوحات المطبوعة." },
                    { title: "التعرف على بيئة برنامج التصميم وإعداد المكتبات", desc: "تثبيت أدوات العمل وكيفية بناء عناصر ثلاثية الأبعاد خاصة بك." },
                    { title: "رسم المخطط الإلكتروني وتوصيل العناصر (Schematic Capture)", desc: "وضع العناصر وتوجيه الإشارات الكهربائية بشكل صحيح." },
                    { title: "تحديد أبعاد اللوحة وترتيب المكونات (PCB Layout)", desc: "توزيع الأجزاء في مساحة مدروسة بدقة وتنسيقها فيزيائياً." },
                    { title: "توصيل المسارات اليدوي والتلقائي (Routing)", desc: "ربط الموصلات النحاسية مع مراعاة قواعد العزل والتشويش الترددي." },
                    { title: "توليد ملفات التصنيع النهائية والطباعة (Gerber Files)", desc: "تحضير الدائرة للشحن لأي مصنع إلكترونيات بشكل احترافي ومتوافق." }
                ]
            },
            pcb: {
                id: "pcb",
                title: "دورة تصميم الدوائر الإلكترونية واللوحات المطبوعة (PCB)",
                category: "إلكترونيات",
                badge: "مبتدئ إلى متوسط",
                duration: "14 ساعة",
                instructor: "أبــوضيـــــــــف",
                bgClass: "bg-gradient-1",
              /*  icon: "bi-mortarboard-fill",*/
                description: "هذه الدورة هي دليلك الشامل للدخول في عالم تصميم الدوائر الإلكترونية وتصنيع اللوحات المطبوعة الاحترافية (PCB). ستتعلم فيها الجانب النظري لكيفية عمل المكونات الإلكترونية ثم ننتقل فوراً للتطبيق العملي لتصميم مخططات احترافية ومحاكاتها وقواعد توجيه المسارات المطبوعة لإنشاء لوحات جاهزة للتصنيع الفعلي بالمصانع.",
                outcomes: [
                    "فهم مبادئ عمل العناصر الإلكترونية الأساسية (المقاومات، المكثفات، الترانزستورات، والدوائر المتكاملة).",
                    "احتراف استخدام برامج تصميم الدوائر المطبوعة ورسم المخططات التخطيطية (Schematic).",
                    "تحويل المخططات التخطيطية إلى لوحات مطبوعة (Layout) متعددة الطبقات بشكل سليم وعلمي.",
                    "مراعاة قواعد هندسة التصميم لضمان الأمان والحد من التشويش الكهرومغناطيسي (EMI).",
                    "توليد وتصدير ملفات التصنيع (Gerber Files) لإرسالها لأي مصنع لوحات مطبوعة حول العالم."
                ],
                resources: [
                    { name: "الدليل الشامل لتصميم الـ PCB (كتاب إلكتروني PDF)", size: "4.8 MB", type: "pdf", icon: "bi-file-pdf" },
                    { name: "مكتبة المكونات الإلكترونية الجاهزة لبرامج التصميم", size: "12.5 MB", type: "zip", icon: "bi-file-pdf" },
                    { name: "مخطط عملي لدائرة منظم جهد متكامل للتدريب والتطبيق", size: "1.2 MB", type: "pdf", icon: "bi-file-pdf" }
                ],
                curriculum: [
                    { title: "المقدمة والمفاهيم الأساسية للإلكترونيات", desc: "التعرف على الترانزستورات والمقاومات وأنواع اللوحات المطبوعة." },
                    { title: "التعرف على بيئة برنامج التصميم وإعداد المكتبات", desc: "تثبيت أدوات العمل وكيفية بناء عناصر ثلاثية الأبعاد خاصة بك." },
                    { title: "رسم المخطط الإلكتروني وتوصيل العناصر (Schematic Capture)", desc: "وضع العناصر وتوجيه الإشارات الكهربائية بشكل صحيح." },
                    { title: "تحديد أبعاد اللوحة وترتيب المكونات (PCB Layout)", desc: "توزيع الأجزاء في مساحة مدروسة بدقة وتنسيقها فيزيائياً." },
                    { title: "توصيل المسارات اليدوي والتلقائي (Routing)", desc: "ربط الموصلات النحاسية مع مراعاة قواعد العزل والتشويش الترددي." },
                    { title: "توليد ملفات التصنيع النهائية والطباعة (Gerber Files)", desc: "تحضير الدائرة للشحن لأي مصنع إلكترونيات بشكل احترافي ومتوافق." }
                ]
            },
            telecom: {
                id: "telecom",
                title: "كورس هندسة الاتصالات اللاسلكية والجيل الخامس 5G",
                category: "اتصالات",
                badge: "متقدم",
                duration: "18 ساعة",
                instructor: "م. أحمد دياب",
                bgClass: "bg-gradient-2",
             /*   icon: "bi-mortarboard-fill",*//*********************************************************************************** */
                description: "كورس هندسة الاتصالات اللاسلكية والجيل الخامس مصمم لتمكين الطلاب والمهندسين من فهم أحدث تقنيات الجيل الخامس (5G NR) بشكل هندسي وعميق. يشمل الكورس شرحاً تفصيلياً لتقنيات التعديل الترددي، معالجة الإشارة الرقمية، بنية الشبكات اللاسلكية الحديثة، وأنواع الهوائيات الذكية وكيفية تخطيط التغطية في المدن.",
                outcomes: [
                    "فهم الاختلافات الجذرية والعملية بين معايير الجيل الرابع (4G LTE) والجيل الخامس (5G).",
                    "استيعاب مفاهيم الهوائيات الذكية وتشكيل الحزم (Beamforming) وتقنية Massive MIMO.",
                    "التعرف على نطاقات التردد الجديدة (mmWave و Sub-6 GHz) ومعوقات انتشارها.",
                    "القدرة على تخطيط وتحليل جودة الشبكة اللاسلكية وحل مشكلات التداخل الإشاري.",
                    "فهم تطبيقات إنترنت الأشياء والسيارات ذاتية القيادة عبر تقنيات الجيل الخامس الفريدة."
                ],
                resources: [
                    { name: "ملخص معايير وتقنيات الـ 5G الفريدة (ملف PDF مفصل)", size: "6.2 MB", type: "pdf", icon: "bi-file-pdf" },
                    { name: "مخطط تدفق البيانات في واجهة الهواء (Air Interface)", size: "2.4 MB", type: "pdf", icon: "bi-file-pdf" },
                    { name: "محاكاة لانتشار موجات الميكروويف في المدن الذكية", size: "18.1 MB", type: "zip", icon: "bi-file-pdf" }
                ],
                curriculum: [
                    { title: "تطور شبكات الاتصالات المحمولة (من 1G إلى 5G)", desc: "مقارنة تاريخية وفهم الاحتياجات التي قادت لتطوير الجيل الخامس." },
                    { title: "واجهة الراديو الجديدة (5G New Radio - NR)", desc: "شرح تفصيلي لتنظيم الإشارات عبر الواجهة الهوائية والتعديلات الرقمية المتطورة." },
                    { title: "تقنيات الهوائيات وتشكيل الشعاع (Beamforming)", desc: "كيفية تركيز الإشارة بدقة في اتجاه المستخدم لزيادة سرعة التنزيل والاتصال." },
                    { title: "معمارية الشبكة ومفهوم تقطيع الشبكة (Network Slicing)", desc: "تقسيم موارد الشبكة الافتراضية لتلبية احتياجات التطبيقات المتنوعة بكفاءة." },
                    { title: "حالات الاستخدام الرئيسية (uRLLC, eMBB, mMTC)", desc: "التطبيقات الصناعية من استجابة فائقة السرعة، اتصالات مكثفة، وسرعات ضخمة." },
                    { title: "أمن وحماية البيانات وتشفيرها في شبكات الجيل الخامس", desc: "آليات التشفير وضمان سلامة الإرسال والحد من عمليات التجسس اللاسلكي." }
                ]
            },
            embedded: {
                id: "embedded",
                title: "برمجة الأنظمة المدمجة ومتحكمات الأردوينو",
                category: "برمجة",
                badge: "متوسط",
                duration: "12 ساعة",
                instructor: "م. أحمد دياب",
                bgClass: "bg-gradient-3",
             /*   icon: "bi-mortarboard-fill",*/
                description: "انطلق في بناء مشاريعك الذكية وتطبيقات إنترنت الأشياء (IoT). ستتعلم في هذا الكورس البرمجة بلغة C++ وكتابة أكواد برمجية نظيفة وخالية من المشاكل للتحكم بالحساسات والمحركات، والربط بالإنترنت عبر متحكمات ESP32 الشهيرة وبناء لوحة تحكم سحابية تفاعلية لمشروعك.",
                outcomes: [
                    "كتابة أكواد خالية من الأخطاء لمتحكمات الأردوينو والـ ESP32 واستخدام بيئات التطوير الاحترافية.",
                    "قراءة البيانات وتصفيتها من الحساسات البيئية والتفاعلية والتحكم بالمخرجات بشكل فوري.",
                    "تطبيق الاتصالات التسلسلية مثل (I2C, SPI, UART) للربط بين العناصر المختلفة بكفاءة.",
                    "بناء تطبيقات ذكية متكاملة متصلة بالإنترنت (IoT Dashboard) للتحكم عن بعد في الأجهزة المنزلية.",
                    "فهم آليات التعامل مع المقاطعات (Interrupts) والمؤقتات البرمجية لتنظيم المهام الحرجة."
                ],
                resources: [
                    { name: "كتاب الأكواد الجاهزة لأكثر من 30 حساس إلكتروني", size: "3.5 MB", type: "pdf", icon: "bi-file-pdf" },
                    { name: "حزمة المخططات التوصيلية وبرامج المحاكاة", size: "14.2 MB", type: "zip", icon: "bi-file-pdf" },
                    { name: "دليل تهيئة برامج التطوير IDE للأنظمة المدمجة", size: "1.9 MB", type: "pdf", icon: "bi-file-pdf" }
                ],
                curriculum: [
                    { title: "مقدمة عن الأنظمة المدمجة والمتحكمات الدقيقة", desc: "فهم بنية المعالجات الصغيرة والفرق بين الميكروبروسيسور والميكروكنترولر." },
                    { title: "أساسيات البرمجة بلغة C++ للمتحكمات الدقيقة", desc: "المتغيرات، الحلقات التكرارية، الجمل الشرطية، وتصميم الدوال المنظمة." },
                    { title: "التعامل مع المنافذ الرقمية والتناظرية (GPIO)", desc: "قراءة الإشارات الرقمية وتوليد إشارات تعديل عرض النبضة (PWM)." },
                    { title: "بروتوكولات الاتصال التسلسلي ونقل البيانات", desc: "ربط الشاشات والحساسات المعقدة بالمتحكم ومشاركتها للبيانات." },
                    { title: "استخدام الحساسات والمحركات في المشاريع العملية", desc: "تطبيقات حركية وبيئية لبناء نموذج روبوت أو ذراع ميكانيكية متجاوبة." },
                    { title: "بناء مشروع إنترنت الأشياء متكامل (IoT Application)", desc: "الاتصال بالشبكة اللاسلكية وإرسال وتلقي البيانات عبر الويب والسحاب." }
                ]
            }
        };

        let currentCategory = "all";
        let searchQuery = "";
/********************************************************************************************** */
/********************************************************************************************** */
        // Virtual Router System
        function navigateTo(viewId, targetElementId = null) {
            // Hide all views
            document.querySelectorAll('.view-section').forEach(view => {
                view.classList.add('hidden');
            });

            // Remove active classes from navigation links
            document.querySelectorAll('nav ul a').forEach(link => {
                link.classList.remove('active-link');
            });

            // Show active view
            const targetView = document.getElementById(`${viewId}-view`);
            if (targetView) {
                targetView.classList.remove('hidden');
            }

            // Set active class on menu
            const activeMenu = document.getElementById(`nav-${viewId}`);
            if (activeMenu) {
                activeMenu.classList.add('active-link');
            }

            // Populate courses if navigating to the standalone catalog view
            if (viewId === 'courses') {
                renderCoursesCatalog();
            }

            // Handle smooth scroll to anchor inside home page if specified
            if (targetElementId) {
                setTimeout(() => {
                    const el = document.getElementById(targetElementId);
                    if (el) {
                        el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                }, 150);
            } else {
                window.scrollTo({ top: 0, behavior: 'smooth' });
            }
        }

        // Render standalone courses page dynamically
        function renderCoursesCatalog() {
            const container = document.getElementById('courses-catalog-flex');
            container.innerHTML = "";

            // Filter data
            const filtered = Object.values(coursesData).filter(course => {
                const matchesCategory = currentCategory === "all" || course.category === currentCategory;
                const matchesSearch = course.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                                      course.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                                      course.instructor.toLowerCase().includes(searchQuery.toLowerCase());
                return matchesCategory && matchesSearch;
            });

            if (filtered.length === 0) {
                container.innerHTML = `<div class="empty-courses-msg"><i class="bi-search-minus" style="font-size:2rem; display:block; margin-bottom:10px;"></i> لا توجد دورات مطابقة للبحث حالياً...</div>`;
                return;
            }
/******************************************************************************************* */
            filtered.forEach(course => {
                const card = document.createElement('div');
                card.className = "course-card";
                card.innerHTML = `
                    <div class="course-img-wrapper ${course.bgClass}">
                        <i class="${course.icon}"></i>
                        <span class="course-badge">${course.badge}</span>
                        <span class="course-duration"><i class="bi-clock"></i> ${course.duration}</span>
                    </div>
                    <div class="course-body">
                        <h3>${course.title}</h3>
                        <p>${course.description.substring(0, 120)}...</p>
                        <div class="course-meta">
                            <span class="course-instructor"><i class="bi-mortarboard-fill"></i> ${course.instructor}</span>
                            <button onclick="openCoursePage('${course.id}')" class="course-btn">عرض الكورس</button>
                        </div>
                    </div>
                `;
                container.appendChild(card);
            });
        }

        // Live Search Handler
        function searchCourses() {
            searchQuery = document.getElementById('course-search-input').value.trim();
            renderCoursesCatalog();
        }

        // Category Filter Handler
        function filterCategory(category, buttonEl) {
            currentCategory = category;
            
            // Set active class to selected filter button
            document.querySelectorAll('.filter-btn').forEach(btn => btn.classList.remove('active'));
            buttonEl.classList.add('active');

            renderCoursesCatalog();
        }

        // Switch to Course View
        function openCoursePage(courseId) {
            const course = coursesData[courseId];
            if (!course) return;

            // Fill Breadcrumb
            document.getElementById('breadcrumb-current-course').innerText = course.title;
    /*****************************************************************************************/
   /***                                                                                   ***/
  /***      //Fill text content ********** html من ملف  IDs هنااحنا خدنا ال            ***/
 /***                                                                                   ***/
/*****************************************************************************************/
          
            document.getElementById('detail-title').innerText = course.title;
            document.getElementById('detail-instructor').innerText = course.instructor;
            document.getElementById('detail-duration').innerText = course.duration;
            document.getElementById('detail-category').innerText = course.category;
            document.getElementById('detail-badge').innerText = course.badge;
            document.getElementById('detail-description').innerText = course.description;

/*****************************************************************************************/
            // Cover Image setup (CSS styling using predefined gradients and icons) قم بالبحث عنه في gemini
            const coverDiv = document.getElementById('detail-cover-img');
            coverDiv.className = `detail-cover ${course.bgClass}`;
         /*   document.getElementById('detail-icon').className = course.icon;
*/
            // Populate Outcomes list
            const outcomesUl = document.getElementById('detail-outcomes');
            outcomesUl.innerHTML = "";
            course.outcomes.forEach(out => {
                const li = document.createElement('li');
                li.innerText = out;
                outcomesUl.appendChild(li);
            });

            // Populate Curriculum timeline
            const curriculumDiv = document.getElementById('detail-curriculum');
            curriculumDiv.innerHTML = "";
            course.curriculum.forEach(curr => {
                const item = document.createElement('div');
                item.className = 'timeline-item';
                item.innerHTML = `
                    <div class="timeline-title">${curr.title}</div>
                    <div class="timeline-desc">${curr.desc}</div>
                `;
                curriculumDiv.appendChild(item);
            });

            // Populate Resources / Downloads List
            const resourcesDiv = document.getElementById('detail-resources');
            resourcesDiv.innerHTML = "";
            course.resources.forEach(res => {
                const link = document.createElement('a');
                link.href = "#"; // Simulated download trigger
                link.className = 'resource-item';
                link.onclick = function(e) {
                    e.preventDefault();
                    triggerDownloadFeedback(res.name);
                };
                link.innerHTML = `
                    <i class="${res.icon} resource-icon"></i>
                    <div class="resource-info">
                        <div class="resource-name">${res.name}</div>
                        <div class="resource-size"><i class="bi-file-pdf"></i> الحجم: ${res.size}</div>
                    </div>
                    <i class="bi-download resource-download-arrow"></i>
                `;
                resourcesDiv.appendChild(link);
            });

            // Switch Views smoothly
            document.querySelectorAll('.view-section').forEach(view => {
                view.classList.add('hidden');
            });
            const detailsView = document.getElementById('course-details-view');
            detailsView.classList.remove('hidden');
            
            // Scroll to the top of the detail page
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        // Return back to Main Home View
        function goBackToHome() {
            navigateTo('home');
        }

        // Custom download feedback notification without using native alert()
        function triggerDownloadFeedback(fileName) {
            // Create a custom notification banner
            const toast = document.createElement('div');
            toast.style.position = 'fixed';
            toast.style.bottom = '30px';
            toast.style.left = '30px';
            toast.style.background = '#2ecc71';
            toast.style.color = '#ffffff';
            toast.style.padding = '15px 25px';
            toast.style.borderRadius = '10px';
            toast.style.boxShadow = '0 10px 20px rgba(0,0,0,0.1)';
            toast.style.zIndex = '9999';
            toast.style.fontSize = '0.95rem';
            toast.style.fontWeight = '700';
            toast.style.direction = 'rtl';
            toast.style.display = 'flex';
            toast.style.alignItems = 'center';
            toast.style.gap = '10px';
            toast.innerHTML = `<i class="bi-check"></i> جاري تحضير ملفك "${fileName}" وبدء التحميل المجاني بنجاح!`;

            document.body.appendChild(toast);
            

        }

        /**************************                        []llllllibbbbbbbb */
        
        // مصفوفة البيانات الأساسية للكتب مع تصنيف فئات الأغلفة وتخصيص التفاصيل
        const engineeringBooks = [
            {
                bgClass: "bg-cover-pcb",
                coverMeta: "المرجع الهندسي",
                coverTitle: "تصميم الدوائر المطبوعة PCB",
                author: "م. أحمد دياب",
                courseBadge: "المرجع الشامل لدورة الـ PCB",
                title: "دليل مهندس الإلكترونيات لتصميم لوحات PCB",
                description: "الكتاب المنهجي الشامل لدراسة رسم المخططات الإلكترونية، وقواعد توجيه المسارات النحاسية (Routing)، وطرق تجنب التشويش الكهروهندسي والمغناطيسي (EMI) لتجهيز الدوائر للشحن والتصنيع الفعلي.",
                pages: "180 صفحة",
                format: "صيغة PDF",
                size: "14.5 MB"
            },
            {
                bgClass: "bg-cover-telecom",
                coverMeta: "المرجع المتقدم",
                coverTitle: "هندسة الـ 5G والشبكات اللاسلكية",
                author: "م. أحمد دياب",
                courseBadge: "المرجع الأساسي لدورة الاتصالات والـ 5G",
                title: "الاتصالات اللاسلكية وتكنولوجيا الجيل الخامس 5G",
                description: "كتاب أكاديمي وتطبيقي متكامل يبسط معايير الـ 3GPP لشبكات الجيل الخامس، ومبادئ عمل الهوائيات الذكية وتشكيل الموجات (Beamforming)، وإدارة وتخطيط طاقة التغطية الترددية في المدن الذكية.",
                pages: "320 صفحة",
                format: "صيغة PDF",
                size: "22.1 MB"
            },
            {
                bgClass: "bg-cover-embedded",
                coverMeta: "البرمجة العملية",
                coverTitle: "الأنظمة المدمجة ومتحكم الأردوينو",
                author: "م. أحمد دياب",
                courseBadge: "كتاب دورة الأنظمة المدمجة والـ IoT",
                title: "دليل البرمجة والأنظمة المدمجة عملياً",
                description: "كتاب برمجي وتطبيقي لتعلم كتابة أكواد C++ نظيفة وفعالة، وتفاصيل التحكم بالمقاطعات (Interrupts) في معالجات AVR، وكيفية ربط الحساسات والمحركات ببوابات إنترنت الأشياء الذكية (IoT).",
                pages: "210 صفحات",
                format: "صيغة PDF",
                size: "11.8 MB"
            },
            {
                bgClass: "bg-cover-ic",
                coverMeta: "أساسيات عامة",
                coverTitle: "أشباه الموصلات والدوائر الإلكترونية",
                author: "م. أحمد دياب",
                courseBadge: "مرجع مساعد لكافة التخصصات",
                title: "فيزياء الترانزستور والدوائر المتكاملة الأساسية",
                description: "فهم عميق لبنية السيلكون وأشباه الموصلات، وتشغيل الترانزستورات بأنواعها (BJT & MOSFET)، وكيفية تصميم مكبرات الإشارة والمفاتيح الإلكترونية التي تمثل حجر الأساس لأي مهندس اتصالات وإلكترونيات.",
                pages: "250 صفحة",
                format: "صيغة PDF",
                size: "9.3 MB"
            }
        ];

        // حقن كروت الكتب داخل الهيكل البرمجي
      /**/  function loadLibrary() {
            const libraryGrid = document.getElementById('libraryGrid');
            if (!libraryGrid) return;

            libraryGrid.innerHTML = ''; // تنظيف الحاوية أولاً

            engineeringBooks.forEach(book => {
                const bookCard = document.createElement('div');
                bookCard.className = 'book-card';

                bookCard.innerHTML = `
                    <!-- جزء الغلاف بالأبعاد والمقاييس الدقيقة ثلاثية الأبعاد -->
                    <div class="book-cover-wrapper">
                        <div class="book-3d-container">
                            <div class="book-cover ${book.bgClass}">
                                <div class="book-spine-effect"></div>
                                <div class="book-cover-meta">${book.coverMeta}</div>
                                <div class="book-cover-title">${book.coverTitle}</div>
                                <div class="book-cover-author">${book.author}</div>
                            </div>
                        </div>
                    </div>

                    <!-- تفاصيل الكتاب ومميزاته بجانبه مباشرة -->
                    <div class="book-details">
                        <div>
                            <span class="book-course-badge">
                                <i class="fas fa-graduation-cap"></i> ${book.courseBadge}
                            </span>
                            <h3>${book.title}</h3>
                            <p class="book-description-text">${book.description}</p>
                        </div>
                        
                        <div class="book-meta-footer">
                            <div class="book-info-badges">
                                <span><i class="fas fa-book-open"></i> ${book.pages}</span>
                                <span><i class="fas fa-file-pdf"></i> ${book.format}</span>
                                <span><i class="fas fa-hdd"></i> ${book.size}</span>
                            </div>
                            <a href="#" class="book-dl-btn" data-title="${book.title}">
                                تحميل المرجع <i class="fas fa-download"></i>
                            </a>
                        </div>
                    </div>
                `;

                libraryGrid.appendChild(bookCard);
            });

            // ربط أحداث الضغط لزر التحميل لعرض تجربة تفاعلية
            document.querySelectorAll('.book-dl-btn').forEach(button => {
                button.addEventListener('click', function(e) {
                    e.preventDefault();
                    const bookTitle = this.getAttribute('data-title');
                    triggerDownloadFeedback(bookTitle);
                });
            });
        }

        // دالة عرض إشعار التحميل التفاعلي والمميز
        function triggerDownloadFeedback(bookTitle) {
            const alertBox = document.getElementById('customAlert');
            const alertMessage = document.getElementById('alertMessage');
            
            alertMessage.innerHTML = `جاري تحضير ملف <strong>"${bookTitle}"</strong> للتحميل المباشر...`;
            alertBox.classList.add('show');

            // إخفاء الإشعار تلقائياً بعد مرور 4 ثوانٍ
            setTimeout(() => {
                alertBox.classList.remove('show');
            }, 4000);
        }

        // تفعيل الكود بعد تحميل الواجهة بالكامل
        document.addEventListener('DOMContentLoaded', loadLibrary);
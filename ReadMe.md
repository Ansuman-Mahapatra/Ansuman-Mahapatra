<!DOCTYPE html>
<html>
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Ansuman Mahapatra | Devil.IO</title>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }

        body {
            background: linear-gradient(135deg, #0f2027, #203a43, #2c5364);
            color: #f0f0f0;
            line-height: 1.6;
            padding: 20px;
            max-width: 1200px;
            margin: 0 auto;
        }

        .container {
            background: rgba(25, 35, 45, 0.85);
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.5);
            border: 1px solid rgba(255, 255, 255, 0.1);
            margin-top: 20px;
        }

        .header {
            text-align: center;
            padding: 30px 0;
            border-bottom: 2px solid rgba(64, 224, 208, 0.3);
            margin-bottom: 30px;
        }

        .header h1 {
            font-size: 2.8rem;
            margin-bottom: 10px;
            background: linear-gradient(90deg, #40e0d0, #ff8c00, #ff0080);
            -webkit-background-clip: text;
            background-clip: text;
            color: transparent;
            display: inline-block;
        }

        .header h3 {
            font-size: 1.4rem;
            font-weight: 400;
            color: #b0b0b0;
            max-width: 800px;
            margin: 0 auto;
        }

        .tagline {
            display: inline-block;
            background: rgba(64, 224, 208, 0.1);
            padding: 8px 20px;
            border-radius: 50px;
            margin-top: 15px;
            font-size: 1rem;
            border: 1px solid rgba(64, 224, 208, 0.3);
        }

        .section {
            margin-bottom: 40px;
        }

        .section-title {
            font-size: 1.8rem;
            margin-bottom: 20px;
            padding-bottom: 10px;
            border-bottom: 1px solid rgba(64, 224, 208, 0.3);
            color: #40e0d0;
            display: flex;
            align-items: center;
        }

        .section-title i {
            margin-right: 15px;
        }

        ul.info-list {
            list-style-type: none;
            padding-left: 0;
        }

        ul.info-list li {
            margin-bottom: 20px;
            padding-left: 30px;
            position: relative;
            font-size: 1.05rem;
        }

        ul.info-list li i {
            position: absolute;
            left: 0;
            top: 5px;
            color: #40e0d0;
        }

        ul.info-list li a {
            color: #40e0d0;
            text-decoration: none;
            transition: all 0.3s;
            border-bottom: 1px dotted rgba(64, 224, 208, 0.3);
        }

        ul.info-list li a:hover {
            color: #ff8c00;
            border-bottom: 1px solid #ff8c00;
        }

        ul.info-list li b {
            color: #ffcc00;
            font-weight: 600;
        }

        .skills-grid {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
            gap: 20px;
            margin-top: 20px;
        }

        .skill-card {
            background: rgba(40, 50, 60, 0.7);
            border-radius: 12px;
            padding: 15px;
            text-align: center;
            transition: all 0.3s ease;
            border: 1px solid rgba(255, 255, 255, 0.05);
        }

        .skill-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 10px 20px rgba(0, 0, 0, 0.3);
            border-color: rgba(64, 224, 208, 0.5);
        }

        .skill-card img {
            width: 50px;
            height: 50px;
            margin-bottom: 10px;
        }

        .skill-card p {
            font-size: 0.9rem;
            color: #d0d0d0;
        }

        .social-links {
            display: flex;
            flex-wrap: wrap;
            gap: 15px;
            margin-top: 15px;
        }

        .social-link {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 50px;
            height: 50px;
            border-radius: 50%;
            background: rgba(40, 50, 60, 0.7);
            color: #40e0d0;
            font-size: 1.5rem;
            transition: all 0.3s ease;
            text-decoration: none;
        }

        .social-link:hover {
            background: #40e0d0;
            color: #0f2027;
            transform: scale(1.1);
        }

        .project-highlight {
            background: rgba(30, 40, 50, 0.7);
            border-radius: 15px;
            padding: 25px;
            margin-top: 20px;
            border-left: 5px solid #40e0d0;
        }

        .project-highlight h4 {
            color: #40e0d0;
            margin-bottom: 10px;
            font-size: 1.3rem;
        }

        .project-highlight p {
            color: #d0d0d0;
            margin-bottom: 15px;
        }

        .tech-stack {
            display: flex;
            flex-wrap: wrap;
            gap: 10px;
            margin-top: 15px;
        }

        .tech-tag {
            background: rgba(64, 224, 208, 0.2);
            color: #a0e8e0;
            padding: 5px 12px;
            border-radius: 20px;
            font-size: 0.85rem;
        }

        .stats {
            display: flex;
            justify-content: space-around;
            flex-wrap: wrap;
            margin-top: 30px;
            text-align: center;
        }

        .stat-item {
            padding: 20px;
            min-width: 150px;
        }

        .stat-number {
            font-size: 2.5rem;
            font-weight: bold;
            color: #40e0d0;
            margin-bottom: 5px;
        }

        .stat-label {
            font-size: 0.9rem;
            color: #b0b0b0;
        }

        footer {
            text-align: center;
            margin-top: 40px;
            padding-top: 20px;
            border-top: 1px solid rgba(255, 255, 255, 0.1);
            color: #888;
            font-size: 0.9rem;
        }

        @media (max-width: 768px) {
            .header h1 {
                font-size: 2.2rem;
            }
            
            .header h3 {
                font-size: 1.2rem;
            }
            
            .skills-grid {
                grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
            }
            
            .social-links {
                justify-content: center;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>Hi 👋, I'm Ansuman Mahapatra</h1>
            <h3>A passionate Software Engineer, Java Backend Developer, and AI Enthusiast from India.</h3>
            <div class="tagline">Building the future with code and intelligence</div>
        </div>

        <div class="section">
            <h2 class="section-title"><i class="fas fa-user-circle"></i> About Me</h2>
            <ul class="info-list">
                <li>
                    <i class="fas fa-code-branch"></i>
                    <strong>Currently working on:</strong> 
                    <a href="https://GitCommitAnalyzer.vercel.com">Smart Git Commit Analyzer</a> - 
                    A desktop application that analyzes Git commit history using Java Spring Boot microservices, Flutter frontend, Git analysis, caching, and machine learning concepts.
                </li>
                <li>
                    <i class="fas fa-graduation-cap"></i>
                    <strong>Currently learning:</strong> 
                    <b>Artificial Intelligence fundamentals, Machine Learning concepts, Spring Boot microservices, backend system design, performance.</b>
                </li>
                <li>
                    <i class="fas fa-handshake"></i>
                    <strong>Looking to collaborate on:</strong> 
                    <a href="https://AI.DevilIO.com">AI-powered applications, Java backend systems, Spring Boot microservices, developer tools, and open-source projects involving data analysis or automation.</a>
                </li>
                <li>
                    <i class="fas fa-question-circle"></i>
                    <strong>Ask me about:</strong> 
                    <b>Java, Spring Boot, backend development, REST APIs, Git and GitHub, AI basics, machine learning workflows, and software project architecture.</b>
                </li>
                <li>
                    <i class="fas fa-envelope"></i>
                    <strong>How to reach me:</strong> 
                    <b>ansumanmahapatra998@gmail.com</b>
                </li>
                <li>
                    <i class="fas fa-file-alt"></i>
                    <strong>Resume:</strong> 
                    <a href="https://ansuman-mahapatra.github.io/Ansuman.dev/Ansuman_Resume.pdf">View my resume</a>
                </li>
                <li>
                    <i class="fas fa-lightbulb"></i>
                    <strong>Fun fact:</strong> 
                    <b>I enjoy combining AI with software engineering to build smart and practical solutions.</b>
                </li>
            </ul>
        </div>

        <div class="section">
            <h2 class="section-title"><i class="fas fa-rocket"></i> Featured Project</h2>
            <div class="project-highlight">
                <h4>Smart Git Commit Analyzer</h4>
                <p>A comprehensive desktop application that analyzes Git commit history using advanced techniques including machine learning, caching, and microservices architecture. The project combines Java Spring Boot backend with Flutter frontend for a seamless developer experience.</p>
                <div class="tech-stack">
                    <span class="tech-tag">Java</span>
                    <span class="tech-tag">Spring Boot</span>
                    <span class="tech-tag">Flutter</span>
                    <span class="tech-tag">Machine Learning</span>
                    <span class="tech-tag">Git Analysis</span>
                    <span class="tech-tag">Microservices</span>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title"><i class="fas fa-tools"></i> Languages & Tools</h2>
            <div class="skills-grid">
                <div class="skill-card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/java/java-original.svg" alt="Java">
                    <p>Java</p>
                </div>
                <div class="skill-card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/spring/spring-original.svg" alt="Spring">
                    <p>Spring Boot</p>
                </div>
                <div class="skill-card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/python/python-original.svg" alt="Python">
                    <p>Python</p>
                </div>
                <div class="skill-card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="JavaScript">
                    <p>JavaScript</p>
                </div>
                <div class="skill-card">
                    <img src="https://www.vectorlogo.zone/logos/flutterio/flutterio-icon.svg" alt="Flutter">
                    <p>Flutter</p>
                </div>
                <div class="skill-card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mysql/mysql-original-wordmark.svg" alt="MySQL">
                    <p>MySQL</p>
                </div>
                <div class="skill-card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB">
                    <p>MongoDB</p>
                </div>
                <div class="skill-card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/docker/docker-original-wordmark.svg" alt="Docker">
                    <p>Docker</p>
                </div>
                <div class="skill-card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/amazonwebservices/amazonwebservices-original-wordmark.svg" alt="AWS">
                    <p>AWS</p>
                </div>
                <div class="skill-card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/git/git-original.svg" alt="Git">
                    <p>Git</p>
                </div>
                <div class="skill-card">
                    <img src="https://www.vectorlogo.zone/logos/tensorflow/tensorflow-icon.svg" alt="TensorFlow">
                    <p>TensorFlow</p>
                </div>
                <div class="skill-card">
                    <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/linux/linux-original.svg" alt="Linux">
                    <p>Linux</p>
                </div>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title"><i class="fas fa-network-wired"></i> Connect With Me</h2>
            <div class="social-links">
                <a href="https://twitter.com/@ansuman___" target="_blank" class="social-link">
                    <i class="fab fa-twitter"></i>
                </a>
                <a href="https://linkedin.com/in/ansumanmahapatra998" target="_blank" class="social-link">
                    <i class="fab fa-linkedin-in"></i>
                </a>
                <a href="https://github.com/ansuman-mahapatra" target="_blank" class="social-link">
                    <i class="fab fa-github"></i>
                </a>
                <a href="https://www.hackerrank.com/ansumanmahapatr2" target="_blank" class="social-link">
                    <i class="fab fa-hackerrank"></i>
                </a>
                <a href="https://www.leetcode.com/ansuman_mahapatra" target="_blank" class="social-link">
                    <i class="fab fa-leetcode"></i>
                </a>
                <a href="https://auth.geeksforgeeks.org/user/ansumanmahapatra998" target="_blank" class="social-link">
                    <i class="fas fa-code"></i>
                </a>
                <a href="https://codesandbox.com/devioio" target="_blank" class="social-link">
                    <i class="fab fa-codepen"></i>
                </a>
                <a href="https://instagram.com/__iconic__ansu__" target="_blank" class="social-link">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
        </div>

        <div class="section">
            <h2 class="section-title"><i class="fas fa-chart-line"></i> GitHub Stats</h2>
            <div class="stats">
                <div class="stat-item">
                    <div class="stat-number">50+</div>
                    <div class="stat-label">Projects</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">5+</div>
                    <div class="stat-label">Years Experience</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">10+</div>
                    <div class="stat-label">Technologies</div>
                </div>
                <div class="stat-item">
                    <div class="stat-number">100%</div>
                    <div class="stat-label">Passionate</div>
                </div>
            </div>
        </div>

        <footer>
            <p>© 2023 Ansuman Mahapatra (Devil.IO) | All Rights Reserved</p>
            <p style="margin-top: 10px; font-size: 0.8rem;">
                <i class="fas fa-globe"></i> Portfolio: 
                <a href="https://ansuman-mahapatra.github.io/Ansuman.dev/" style="color: #40e0d0;">
                    https://ansuman-mahapatra.github.io/Ansuman.dev/
                </a>
            </p>
        </footer>
    </div>

    <script>
        // Simple animation for skill cards on hover
        document.addEventListener('DOMContentLoaded', function() {
            const skillCards = document.querySelectorAll('.skill-card');
            
            skillCards.forEach(card => {
                card.addEventListener('mouseenter', function() {
                    this.style.transform = 'translateY(-5px)';
                });
                
                card.addEventListener('mouseleave', function() {
                    this.style.transform = 'translateY(0)';
                });
            });
            
            // Animate stats counter
            const statNumbers = document.querySelectorAll('.stat-number');
            statNumbers.forEach(stat => {
                const target = parseInt(stat.textContent);
                let current = 0;
                const increment = target / 50;
                const timer = setInterval(() => {
                    current += increment;
                    if (current >= target) {
                        current = target;
                        clearInterval(timer);
                    }
                    stat.textContent = Math.floor(current) + (stat.textContent.includes('%') ? '%' : '+');
                }, 30);
            });
        });
    </script>
</body>
</html>

// AvoidNess - Main JavaScript Module
// Author: Danxz.Sleepy

class AvoidNessApp {
    constructor() {
        this.init();
    }

    init() {
        this.initParticles();
        this.initScrollAnimations();
        this.initMobileMenu();
        this.initCustomCursor();
        this.initSubjectNavigation();
        this.initSmoothScroll();
        this.initGraphVisualization();
        this.initPageNavigation();
    }

    // Particles System
    initParticles() {
        const particlesContainer = document.getElementById('particles-container');
        if (!particlesContainer) return;

        const particleCount = 50;
        
        for (let i = 0; i < particleCount; i++) {
            const particle = document.createElement('div');
            particle.classList.add('particle');
            
            // Random size between 2px and 6px
            const size = Math.random() * 4 + 2;
            particle.style.width = `${size}px`;
            particle.style.height = `${size}px`;
            
            // Random position
            const posX = Math.random() * 100;
            const posY = Math.random() * 100;
            particle.style.left = `${posX}%`;
            particle.style.top = `${posY}%`;
            
            // Random opacity
            const opacity = Math.random() * 0.5 + 0.1;
            particle.style.opacity = opacity;
            
            // Random animation duration
            const duration = Math.random() * 20 + 10;
            particle.style.animation = `floating ${duration}s ease-in-out infinite`;
            particle.style.animationDelay = `${Math.random() * 5}s`;
            
            particlesContainer.appendChild(particle);
        }
    }

    // Scroll Animations
    initScrollAnimations() {
        const fadeElements = document.querySelectorAll('.fade-in');
        const parallaxElements = document.querySelectorAll('.parallax');

        const fadeInOnScroll = () => {
            fadeElements.forEach(element => {
                const elementTop = element.getBoundingClientRect().top;
                const elementVisible = 150;
                const delay = element.dataset.delay || 0;
                
                if (elementTop < window.innerHeight - elementVisible) {
                    setTimeout(() => {
                        element.classList.add('visible');
                    }, delay);
                }
            });
        };

        const parallaxOnScroll = () => {
            parallaxElements.forEach(element => {
                const scrollPosition = window.pageYOffset;
                const speed = element.dataset.speed || 0.5;
                element.style.transform = `translateY(${scrollPosition * speed}px)`;
            });
        };

        // Initial check
        fadeInOnScroll();
        parallaxOnScroll();

        // Add event listeners
        window.addEventListener('scroll', fadeInOnScroll);
        window.addEventListener('scroll', parallaxOnScroll);
    }

    // Mobile Menu
    initMobileMenu() {
        const mobileMenuButton = document.getElementById('mobile-menu-button');
        const mobileMenu = document.getElementById('mobile-menu');
        
        if (mobileMenuButton && mobileMenu) {
            mobileMenuButton.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    }

    // Custom Cursor
    initCustomCursor() {
        const cursor = document.querySelector('.custom-cursor');
        if (!cursor) return;

        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        const animateCursor = () => {
            const dx = mouseX - cursorX;
            const dy = mouseY - cursorY;
            
            cursorX += dx * 0.1;
            cursorY += dy * 0.1;
            
            cursor.style.left = cursorX + 'px';
            cursor.style.top = cursorY + 'px';
            
            requestAnimationFrame(animateCursor);
        };
        
        animateCursor();
    }

    // Subject Navigation (LumenCore section)
    initSubjectNavigation() {
        const subjectButtons = document.querySelectorAll('.subject-btn');
        
        const updateSubjectContent = (subject) => {
            const titles = {
                astronomy: "Explorando o Cosmos",
                physics: "As Leis do Universo",
                programming: "Arte do Código",
                mathematics: "A Linguagem da Lógica",
                philosophy: "Questões de Existência"
            };
            
            const descriptions = {
                astronomy: "Das civilizações antigas que rastreavam corpos celestes à exploração espacial moderna, nossa jornada para compreender o cosmos continua a evoluir com cada nova descoberta.",
                physics: "Descubra as leis fundamentais que governam tudo, desde partículas quânticas até estruturas galácticas.",
                programming: "Aprenda a criar, inovar e resolver problemas através do poder do código.",
                mathematics: "Explore os padrões abstratos e estruturas que sustentam toda a realidade.",
                philosophy: "Contemple as questões mais profundas sobre existência, conhecimento e consciência."
            };
            
            const mainTitle = document.querySelector('#education-content h3');
            const mainDescription = document.querySelector('#education-content p');
            
            if (mainTitle && mainDescription) {
                mainTitle.textContent = titles[subject] || titles.astronomy;
                mainDescription.textContent = descriptions[subject] || descriptions.astronomy;
            }
        };

        subjectButtons.forEach(button => {
            button.addEventListener('click', function() {
                const subject = this.dataset.subject;
                
                // Remove active class from all buttons
                subjectButtons.forEach(btn => {
                    btn.classList.remove('bg-primary', 'text-white');
                    btn.classList.add('text-gray-300');
                });
                
                // Add active class to clicked button
                this.classList.add('bg-primary', 'text-white');
                this.classList.remove('text-gray-300');
                
                // Update content
                updateSubjectContent(subject);
                
                // Add subtle animation
                const contentContainer = document.querySelector('.subject-content');
                if (contentContainer) {
                    contentContainer.style.opacity = '0';
                    setTimeout(() => {
                        contentContainer.style.opacity = '1';
                    }, 300);
                }
            });
        });

        // Initialize with astronomy content
        updateSubjectContent('astronomy');
    }

    // Smooth Scroll
    initSmoothScroll() {
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.getBoundingClientRect().top + window.scrollY - 120,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }

    // Graph Visualization (for VoidDB demo)
    initGraphVisualization() {
        const graphContainer = document.getElementById('graph-visualization');
        if (!graphContainer) return;

        // Simple animated graph visualization
        const canvas = document.createElement('canvas');
        canvas.width = graphContainer.clientWidth;
        canvas.height = graphContainer.clientHeight;
        graphContainer.appendChild(canvas);

        const ctx = canvas.getContext('2d');
        const nodes = [];
        const connections = [];

        // Create nodes
        for (let i = 0; i < 8; i++) {
            nodes.push({
                x: Math.random() * canvas.width,
                y: Math.random() * canvas.height,
                vx: (Math.random() - 0.5) * 2,
                vy: (Math.random() - 0.5) * 2,
                radius: Math.random() * 8 + 4
            });
        }

        // Create connections
        for (let i = 0; i < nodes.length; i++) {
            for (let j = i + 1; j < nodes.length; j++) {
                if (Math.random() < 0.3) {
                    connections.push({ from: i, to: j });
                }
            }
        }

        const animate = () => {
            ctx.clearRect(0, 0, canvas.width, canvas.height);

            // Update and draw connections
            ctx.strokeStyle = 'rgba(168, 85, 247, 0.3)';
            ctx.lineWidth = 1;
            connections.forEach(conn => {
                const nodeA = nodes[conn.from];
                const nodeB = nodes[conn.to];
                ctx.beginPath();
                ctx.moveTo(nodeA.x, nodeA.y);
                ctx.lineTo(nodeB.x, nodeB.y);
                ctx.stroke();
            });

            // Update and draw nodes
            nodes.forEach(node => {
                // Update position
                node.x += node.vx;
                node.y += node.vy;

                // Bounce off walls
                if (node.x < 0 || node.x > canvas.width) node.vx *= -1;
                if (node.y < 0 || node.y > canvas.height) node.vy *= -1;

                // Keep nodes in bounds
                node.x = Math.max(0, Math.min(canvas.width, node.x));
                node.y = Math.max(0, Math.min(canvas.height, node.y));

                // Draw node
                ctx.fillStyle = 'rgba(168, 85, 247, 0.8)';
                ctx.beginPath();
                ctx.arc(node.x, node.y, node.radius, 0, Math.PI * 2);
                ctx.fill();
            });

            requestAnimationFrame(animate);
        };

        animate();
    }

    // Page Navigation Helper
    initPageNavigation() {
        // Add smooth transitions for page navigation
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a[href$=".html"]');
            if (link && !link.hasAttribute('target')) {
                e.preventDefault();
                
                // Add loading effect
                document.body.style.opacity = '0.8';
                
                setTimeout(() => {
                    window.location.href = link.href;
                }, 300);
            }
        });
    }
}

// Initialize when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    new AvoidNessApp();
});

// Export for potential module usage
if (typeof module !== 'undefined' && module.exports) {
    module.exports = AvoidNessApp;
}
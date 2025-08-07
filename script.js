        // Cambiar color de navbar al hacer scroll
        window.addEventListener('scroll', function() {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
                nav.classList.add('bg-white');
                nav.classList.remove('bg-transparent');
            } else {
                nav.classList.remove('shadow-lg');
                nav.classList.add('bg-white');
            }
        });

        // Smooth scrolling para links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function(e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
            });
        });

        // Funciones para las burbujas de chat
        function openWhatsApp() {
            const message = encodeURIComponent("¡Hola! Me interesa conocer más sobre los servicios del equipo Vetel para mi evento.");
            window.open(`https://wa.me/5217221234567?text=${message}`, '_blank');
        }

        function openChatbot() {
            // Aquí se abriría el chatbot
            alert('¡Próximamente nuestro asistente virtual estará disponible para ayudarte!');
        }

        // Mostrar tooltips periódicamente
        function showTooltips() {
            const whatsappTooltip = document.getElementById('whatsapp-tooltip');
            const chatbotTooltip = document.getElementById('chatbot-tooltip');
            
            // Mostrar tooltip de WhatsApp
            setTimeout(() => {
                whatsappTooltip.classList.add('show');
                setTimeout(() => {
                    whatsappTooltip.classList.remove('show');
                }, 3000);
            }, 2000);
            
            // Mostrar tooltip de chatbot
            setTimeout(() => {
                chatbotTooltip.classList.add('show');
                setTimeout(() => {
                    chatbotTooltip.classList.remove('show');
                }, 3000);
            }, 8000);
        }

        // Iniciar tooltips cuando la página carga
        window.addEventListener('load', function() {
            showTooltips();
            // Repetir cada 30 segundos
            setInterval(showTooltips, 30000);
        });

        // Hover effects para las burbujas
        document.querySelectorAll('.chat-bubble').forEach(bubble => {
            bubble.addEventListener('mouseenter', function() {
                const tooltip = this.querySelector('.chat-tooltip');
                tooltip.classList.add('show');
            });
            
            bubble.addEventListener('mouseleave', function() {
                const tooltip = this.querySelector('.chat-tooltip');
                tooltip.classList.remove('show');
            });
        });
import { useEffect, useRef } from "react";

function SpaceParticles() {

    const canvasRef = useRef(null);

    useEffect(() => {

        const canvas = canvasRef.current;

        const ctx = canvas.getContext("2d");

        let particles = [];

        let mouse = {
            x: null,
            y: null
        };

        function resize() {

            canvas.width = window.innerWidth;

            canvas.height = window.innerHeight;
        }

        resize();

        window.addEventListener("resize", resize);

        class Particle {

            constructor(x, y, size, speedX, speedY) {

                this.x = x;
                this.y = y;

                this.size = size;

                this.speedX = speedX;
                this.speedY = speedY;
            }

            update() {

                this.x += this.speedX;
                this.y += this.speedY;

                if (this.x > canvas.width) this.x = 0;
                if (this.x < 0) this.x = canvas.width;

                if (this.y > canvas.height) this.y = 0;
                if (this.y < 0) this.y = canvas.height;

                if (mouse.x && mouse.y) {

                    const dx = this.x - mouse.x;
                    const dy = this.y - mouse.y;

                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 120) {

                        this.x += dx * 0.02;
                        this.y += dy * 0.02;
                    }
                }
            }

            draw() {

                ctx.beginPath();

                ctx.arc(
                    this.x,
                    this.y,
                    this.size,
                    0,
                    Math.PI * 2
                );

                ctx.fillStyle = "rgba(255,255,255,0.8)";

                ctx.fill();
            }
        }

        function init() {

            particles = [];

            for (let i = 0; i < 160; i++) {

                particles.push(

                    new Particle(

                        Math.random() * canvas.width,
                        Math.random() * canvas.height,

                        Math.random() * 2,

                        (Math.random() - 0.5) * 0.2,
                        (Math.random() - 0.5) * 0.2
                    )
                );
            }
        }

        function animate() {

            ctx.clearRect(
                0,
                0,
                canvas.width,
                canvas.height
            );

            particles.forEach((particle) => {

                particle.update();

                particle.draw();
            });

            requestAnimationFrame(animate);
        }

        window.addEventListener("mousemove", (event) => {

            mouse.x = event.clientX;
            mouse.y = event.clientY;
        });

        init();

        animate();

    }, []);

    return (

        <canvas
            ref={canvasRef}
            style={{
                position: "fixed",
                inset: 0,
                zIndex: -1,
                pointerEvents: "none"
            }}
        />

    );
}

export default SpaceParticles;
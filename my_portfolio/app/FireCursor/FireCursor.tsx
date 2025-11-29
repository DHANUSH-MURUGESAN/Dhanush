// "use client";
// import { useEffect, useRef } from "react";

// export default function FireCursor() {
//   const cursorRef = useRef(null);
//   const followerRef = useRef(null);

//   useEffect(() => {
//     if (typeof window === "undefined") return;

//     const cursor = cursorRef.current;
//     const follower = followerRef.current;
//     if (!cursor || !follower) return;

//     // hide on touch devices / reduced motion
//     if (window.matchMedia("(hover: none)").matches || window.matchMedia("(pointer: coarse)").matches) {
//       cursor.style.display = "none";
//       follower.style.display = "none";
//       return;
//     }
//     if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
//       follower.style.display = "none";
//     }

//     let mouseX = window.innerWidth / 2, mouseY = window.innerHeight / 2;
//     let fx = mouseX, fy = mouseY;
//     const lag = 0.16;

//     function onMove(e) {
//       mouseX = e.clientX;
//       mouseY = e.clientY;
//       cursor.style.opacity = "1";
//     }
//     function onDown() {
//       cursor.classList.add("is-active");
//       follower.classList.add("is-active");
//     }
//     function onUp() {
//       cursor.classList.remove("is-active");
//       follower.classList.remove("is-active");
//     }
//     function onEnter() {
//       cursor.style.opacity = "1";
//       follower.style.opacity = "1";
//     }
//     function onLeave() {
//       cursor.style.opacity = "0";
//       follower.style.opacity = "0";
//     }

//     document.addEventListener("mousemove", onMove);
//     document.addEventListener("mousedown", onDown);
//     document.addEventListener("mouseup", onUp);
//     document.addEventListener("mouseenter", onEnter);
//     document.addEventListener("mouseleave", onLeave);

//     const hoverSelector = ['a','button','input','textarea','select','label','[data-cursor="hover"]','.cursor-hover'];

//     document.addEventListener("mouseover", (e) => {
//       if (e.target.closest(hoverSelector.join(','))) {
//         cursor.classList.add("is-hover");
//         follower.classList.add("is-hover");
//       }
//     });
//     document.addEventListener("mouseout", (e) => {
//       if (!e.target.closest(hoverSelector.join(','))) {
//         cursor.classList.remove("is-hover");
//         follower.classList.remove("is-hover");
//       }
//     });

//     let rafId;
//     function loop() {
//       fx += (mouseX - fx) * lag;
//       fy += (mouseY - fy) * lag;
//       cursor.style.left = mouseX + "px";
//       cursor.style.top  = mouseY + "px";
//       follower.style.left = Math.round(fx) + "px";
//       follower.style.top  = Math.round(fy) + "px";
//       rafId = requestAnimationFrame(loop);
//     }
//     rafId = requestAnimationFrame(loop);

//     return () => {
//       document.removeEventListener("mousemove", onMove);
//       document.removeEventListener("mousedown", onDown);
//       document.removeEventListener("mouseup", onUp);
//       document.removeEventListener("mouseenter", onEnter);
//       document.removeEventListener("mouseleave", onLeave);
//       cancelAnimationFrame(rafId);
//     };
//   }, []);

//   return (
//     <>
//       <div ref={followerRef} className="cg-follower" aria-hidden="true" />
//       <div ref={cursorRef} className="cg-cursor" aria-hidden="true" />

//       {/* Styles inline here so component is self-contained; you can move to CSS file */}
//       <style jsx>{`
//         :global(html,body) { cursor: none; }
//         .cg-cursor {
//           position: fixed; left: 0; top: 0;
//           width: 16px; height: 16px; border-radius: 50%;
//           background: var(--cursor-color, #ff6a00);
//           transform: translate(-50%,-50%);
//           pointer-events: none; z-index: 99999;
//           transition: transform .14s cubic-bezier(.2,.9,.3,1), opacity .12s;
//           box-shadow: 0 2px 10px rgba(0,0,0,0.12);
//         }
//         .cg-follower {
//           position: fixed; left:0; top:0;
//           width: 60px; height: 60px; border-radius: 50%;
//           border: 2px solid rgba(255,106,0,0.22);
//           transform: translate(-50%,-50%);
//           pointer-events: none; z-index:99998;
//           transition: transform .28s cubic-bezier(.2,.9,.3,1), opacity .2s;
//           backdrop-filter: blur(2px);
//           background: radial-gradient(circle at 35% 35%, rgba(255,106,0,0.12), transparent 35%);
//           box-shadow: 0 6px 18px rgba(255,106,0,0.12);
//         }
//         .cg-cursor.is-hover { transform: translate(-50%,-50%) scale(.6); opacity:0.95; }
//         .cg-follower.is-hover { transform: translate(-50%,-50%) scale(1.6); opacity:0.98; border-color: rgba(255,106,0,0.38); }
//         .cg-cursor.is-active { transform: translate(-50%,-50%) scale(.45); opacity:.85; }
//         .cg-follower.is-active { transform: translate(-50%,-50%) scale(1.1); opacity:.9; }
//         @media (hover: none), (pointer: coarse) {
//           :global(html, body) { cursor: auto; }
//           .cg-cursor, .cg-follower { display:none !important; }
//         }
//         @media (prefers-reduced-motion: reduce) {
//           .cg-follower { display:none; }
//         }
//       `}</style>
//     </>
//   );
// }
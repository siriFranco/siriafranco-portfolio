# 🎬 Motion System

This project uses a structured motion system to create a clear visual hierarchy and a smooth user experience.

---

## 🧠 Core Principles

- **Primary content appears first** → fast and clear (meta)
- **Secondary content appears after** → contextual (intro)
- **Interactive elements come last** → typing effect

> Motion is not decoration — it’s communication.

---

## ⏱ Animation Sequence

### Timeline

```text
0ms     → Component renders (meta hidden)
50ms    → Meta becomes visible (anim-reveal)
600ms   → Intro starts appearing (anim-delayed)
1100ms  → Intro fully visible
5000ms  → Typing animation starts

## Implementation

See: `src/styles/components/_motion.scss`
Example usage: `home.component.html`
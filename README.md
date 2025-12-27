<!--This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).-->

## 📸 Project Screenshot

![University Admission Platform Screenshot](https://raw.githubusercontent.com/mdtahsinislam/university-admission-platform/9bdd07da3a2953277cbda48d007d4f6558ea3417/Screenshot%202025-12-27%20001244.png)
<!--# 🎯university-admission-platform: https://university-admission-platform.vercel.app/-->
<!--## Getting Started-->

<!--First, run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
# or
bun dev
```-->

<!--Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `app/page.tsx`. The page auto-updates as you edit the file.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.-->

<!--## Learn More

<!--To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!-->

<!--## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.-->










# 🎓 University Admission Platform  
## **Full Stack Developer Assignment – Iniastra Tech**

A modern full-stack web application that helps students discover, compare, and apply to universities based on eligibility criteria such as GPA, IELTS, and tuition fees.

---

## 🚀 Live Demo university-admission-platform
🔗 **Live URL:**   **https://university-admission-platform.vercel.app/**
<!--https://university-admission-platform.vercel.app--> 

---

## 📌 Features

### 1️⃣ High-Conversion Hero Section
- Bold, modern hero design
- Framer Motion animations:
  - Headline slides up
  - Search bar fades in
- Quick Search filters:
  - Country
  - Degree Level

---

### 2️⃣ Real-Time Tuition & Eligibility Filtering
- Tuition Fee Range Slider ($5,000 – $50,000)
- Instant filtering using API + SQL (Supabase)
- GPA & IELTS inputs
- **Automatic “Not Eligible” badge** if requirements are not met

---

### 3️⃣ Side-by-Side University Comparison Tool
- Compare checkbox on university cards
- “Compare Now” button appears when 2–3 universities selected
- Modal/table comparison:
  - Minimum GPA
  - Minimum IELTS
  - Total Tuition Fee

---

### 4️⃣ Quick Apply (SQL Integrated)
- Multi-step application form:
  - Personal Information
  - Academic Information
- Secure backend validation:
  - GPA & IELTS checked against university requirements
- Applications saved to SQL database
- Backend rejects invalid applications

---

## 🛠 Tech Stack

### Frontend
- **Next.js 16 (App Router)**
- **React**
- **TypeScript**
- **Tailwind CSS**
- **Framer Motion**

### Backend
- **Next.js API Routes**
- **Supabase (PostgreSQL)**

### Deployment
- **Vercel**

---

## 🗂 Project Folder Structure

```txt
tripgraphy/
├── app/
│   ├── api/
│   │   ├── apply/
│   │   │   └── route.ts
│   │   └── universities/
│   │       └── route.ts
│   ├── comparison/
│   │   └── page.tsx
│   ├── quick-apply/
│   │   └── page.tsx
│   ├── tution/
│   │   └── page.tsx
│   ├── layout.tsx
│   └── page.tsx
│
├── components/
│   ├── ApplyForm.tsx
│   ├── Footer.tsx
│   ├── Navbar.tsx
│   ├── SearchBar.tsx
│   ├── UniversityCard.tsx
│   └── Hero/
│       └── Hero.tsx
│
├── lib/
│   └── supabase.ts
│
├── sql/
│   └── seed.sql
│
├── public/
│   └── images/
│
├── .env.local
├── package.json
└── README.md
```





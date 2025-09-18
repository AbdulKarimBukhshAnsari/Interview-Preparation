
# 📘 Table of Contents  
Next.js Topics Breakdown  

- Basic to Advanced  
- 100 Next.js Logical/Conceptual Questions  
  - Basic (1–40)  
  - Intermediate (41–70)  
  - Advanced (71–100)  
- Problem-Solving Tasks / Real-World Scenarios  
  - Basic  
  - Intermediate  
  - Advanced  

---

## 1.  Next.js Topics Breakdown (Structured)  

### 🔹 Basic Next.js Topics  
- What is Next.js and why use it?  
- Difference between Next.js and CRA  
- File-based Routing  
- Pages and Components  
- Link component and Navigation  
- Static Assets (public folder)  
- Pre-rendering (SSR vs SSG overview)  
- API Routes (Basics)  
- Environment Variables  
- CSS in Next.js (Global CSS, CSS Modules)  

### 🔹 Intermediate Next.js Topics  
- getStaticProps  
- getServerSideProps  
- getStaticPaths  
- Dynamic Routing  
- API Routes (Advanced usage)  
- Middleware Basics  
- Image Optimization  
- Head component for SEO  
- Custom Document & Custom App  
- Internationalization (i18n)  
- Data Fetching Patterns  
- Layouts in Next.js  
- Deployment (Vercel Basics)  

### 🔹 Advanced Next.js Topics  
- Incremental Static Regeneration (ISR)  
- Middleware Advanced (auth, redirects, rewrites)  
- Next.js + TypeScript  
- Performance Optimization  
- SEO Best Practices (structured data, meta tags)  
- Next.js with Redux / Context  
- Authentication (JWT, OAuth, NextAuth.js)  
- API Caching & Revalidation  
- Streaming and Server Actions (Next.js 13+)  
- App Router vs Pages Router  
- Parallel Routes & Intercepting Routes  
- Edge Functions  
- Custom Server in Next.js  
- Next.js with CI/CD  
- Next.js with Docker  

---

## 2. Next.js Interview Questions  

### 🔸 Basic (1–40)  
1. What is Next.js and why use it instead of React?  
2. Difference between Next.js and Create React App?  
3. What is file-based routing in Next.js?  
4. How do you create a new page in Next.js?  
5. How to navigate between pages in Next.js?  
6. What is the difference between Link and a normal anchor tag?  
7. What are static assets in Next.js?  
8. How to add CSS in Next.js?  
9. Difference between global CSS and CSS modules?  
10. What is pre-rendering in Next.js?  
11. Difference between SSR and SSG?  
12. What is hydration in Next.js?  
13. How to create an API route in Next.js?  
14. Where do you store environment variables in Next.js?  
15. How do you fetch data in Next.js?  
16. What is the use of the `Head` component?  
17. Can you use external CSS libraries in Next.js?  
18. What is the `_app.js` file used for?  
19. What is the `_document.js` file used for?  
20. How does Next.js handle 404 pages?  
21. What is static generation?  
22. When should you use server-side rendering?  
23. How do you set metadata for a page?  
24. How do you redirect a page in Next.js?  
25. What is dynamic routing?  
26. Difference between dynamic and catch-all routes?  
27. What is the purpose of the `public/` folder?  
28. Can we use getStaticProps in dynamic routes?  
29. What is the default port for Next.js?  
30. How do you start a production build in Next.js?  
31. Difference between `npm run dev` and `npm run build`?  
32. How do you create a layout in Next.js?  
33. What is the difference between client-side and server-side navigation?  
34. Can Next.js be used without React?  
35. What is fast refresh in Next.js?  
36. What is the difference between SPA and Next.js app?  
37. How do you add global state in Next.js?  
38. How do you pass props to a page in Next.js?  
39. What is the default behavior of Next.js for data fetching?  
40. How do you handle errors in Next.js?  

---

### 🔸 Intermediate (41–70)  
41. What is getStaticProps?  
42. When would you use getStaticProps?  
43. What is getServerSideProps?  
44. Difference between getStaticProps and getServerSideProps?  
45. What is getStaticPaths?  
46. When is getStaticPaths required?  
47. Can you use getStaticPaths with SSR?  
48. How do you create API routes in Next.js?  
49. Difference between API routes and external APIs?  
50. How do you handle authentication in Next.js?  
51. What is middleware in Next.js?  
52. How does middleware differ from API routes?  
53. How to secure API routes in Next.js?  
54. What is the Image component used for?  
55. How does Next.js optimize images?  
56. What is internationalization (i18n) in Next.js?  
57. How do you configure i18n?  
58. What is the purpose of `_middleware.js`?  
59. How do you add global styles in Next.js?  
60. Can you use SCSS in Next.js?  
61. How do you add Tailwind CSS in Next.js?  
62. How do you configure ESLint in Next.js?  
63. What is a custom server in Next.js?  
64. How do you use Next.js with Express?  
65. Difference between `_app.js` and `_document.js`?  
66. How do you persist state between page navigations?  
67. How does Next.js improve SEO compared to React SPA?  
68. How do you handle 500 errors in Next.js?  
69. How do you deploy Next.js to Vercel?  
70. How do you deploy Next.js to custom servers?  

---

### 🔸 Advanced (71–100)  
71. What is Incremental Static Regeneration (ISR)?  
72. Difference between ISR and SSR?  
73. How does revalidation work in ISR?  
74. What is fallback in getStaticPaths?  
75. Difference between fallback: true, false, and 'blocking'?  
76. How does Next.js 13 App Router differ from Pages Router?  
77. What are server actions in Next.js 13?  
78. How do parallel routes work in Next.js?  
79. What are intercepting routes?  
80. How does streaming work in Next.js?  
81. What is edge rendering in Next.js?  
82. How to use NextAuth.js with Next.js?  
83. How do you secure SSR pages with authentication?  
84. How do you optimize large Next.js apps?  
85. What are common performance pitfalls in Next.js?  
86. How does Next.js handle caching?  
87. Difference between static imports and dynamic imports?  
88. How do you implement lazy loading in Next.js?  
89. What are API revalidation strategies?  
90. What is on-demand ISR?  
91. How do you test Next.js applications?  
92. How do you use Jest with Next.js?  
93. How do you use Cypress with Next.js?  
94. How to implement role-based authentication in Next.js?  
95. What are edge functions and how do they work?  
96. How to configure redirects in Next.js?  
97. How to configure rewrites in Next.js?  
98. How do you handle SEO structured data in Next.js?  
99. How would you migrate from CRA to Next.js?  
100. What’s the most complex problem you solved with Next.js?  

---

## 3. 🧠 Next.js Problem Solving / Code Tasks  

### 🔸 Basic  
- Create a “Hello World” Next.js page  
- Create two pages and navigate between them with `<Link>`  
- Add global CSS and CSS Module in Next.js  
- Create a custom 404 page  

### 🔸 Intermediate  
- Fetch data with getStaticProps and display it  
- Create a dynamic route with getStaticPaths  
- Create a blog with static generation  
- Build a simple API route for users  
- Add Tailwind CSS to a Next.js project  

### 🔸 Advanced  
- Implement ISR with revalidation every 10 seconds  
- Build an authentication system with NextAuth.js  
- Create middleware for protected routes  
- Implement image optimization with the Next.js Image component  
- Use parallel routes to render different dashboards  


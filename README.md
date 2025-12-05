
# 📊 Stock Price Dashboard

A modern and interactive dashboard built with **Next.js 16**, **React 19**, **Tailwind CSS**, and **Radix UI**, designed to visualize and track stock market prices in real time.  
This project provides a clean UI, fast performance, and flexible components for building financial insights and analytics interfaces.

---

## 🚀 Features

- 📈 **Real-time and historical stock price visualization**  
- ⚡ Built with **Next.js 16 App Router** for optimal performance
- 🎨 **Tailwind CSS** + custom UI components using Radix + shadcn style patterns
- 🌓 **Theme support** (light/dark) using `next-themes`
- 📦 Modular architecture for adding tickers, charts, and widgets
- 📊 Interactive charts with **Recharts**
- 🧭 Responsive and accessible UI based on Radix primitives
- 🔐 Form validation with **React Hook Form + Zod**

---

## 🧰 Tech Stack

**Framework:**  
- Next.js 16  
- React 19  
- TypeScript

**UI & Styling:**  
- Tailwind CSS 4  
- Radix UI components  
- Lucide Icons  
- Recharts for charts  
- Vaul & CMDK for UI interactions  
- Tailwind Merge & Tailwindcss Animate

**Forms & Validation:**  
- React Hook Form  
- Zod  
- Hookform Resolvers

**Utilities:**  
- date-fns  
- clsx / cva  
- @vercel/analytics

---

## 📦 Installation

```bash
git clone <your-repo-url>
cd dashboard
pnpm install     # or npm install / yarn install
````

## 🏃‍♂️ Running the Project

### Development

```bash
npm run dev
```

Runs the dashboard in development mode at:

```
http://localhost:3000
```

### Production Build

```bash
npm run build
npm run start
```

---

## 🗂️ Project Structure

```
dashboard/
├─ app/
│  ├─ layout.tsx
│  ├─ page.tsx
│  └─ api/...
├─ components/
│  ├─ ui/
│  ├─ charts/
│  ├─ layout/
│  └─ ...
├─ lib/
├─ styles/
├─ public/
└─ README.md
```

---

## 📡 API Integration (Optional)

The dashboard can fetch price data from:

* Alpha Vantage
* Yahoo Finance
* Finnhub
* Polygon.io

You can configure your API keys in:

```
.env.local
```

Example:

```
NEXT_PUBLIC_STOCK_API_KEY=your_api_key_here
```

---

## 🧪 Linting

```bash
npm run lint
```

---

## 📤 Deployment

Recommended platforms:

* **Vercel** (first-class Next.js support)
* Netlify
* AWS Amplify

Deploy instantly via:

```bash
vercel deploy
```

---

## 🤝 Contributing

Contributions are welcome!
Feel free to open issues or submit pull requests.

---

## 📜 License

MIT License © 2025

---

## 📧 Contact

For questions, suggestions, or improvements:

**Your Name**
Email: [youremail@example.com](mailto:youremail@example.com)
GitHub: [https://github.com/yourprofile](https://github.com/yourprofile)

```

---

If you'd like, I can also add:

🔹 A "Screenshots" section  
🔹 A "Roadmap"  
🔹 Instructions for adding new stock tickers  
🔹 A dark/light mode preview mockup  

Just tell me!
```

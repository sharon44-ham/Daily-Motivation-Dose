# 🌟 Daily Dose: Personalized Motivation Web App

> A simple yet powerful motivation app, built for **me**, and maybe **you** — if you're someone who needs that one right quote to feel seen, heard, or just get through the day. 💬✨


## 🧠 Why I Built This

As a student, developer, and human — I realized I often needed a little boost to stay on track. The internet's full of motivational content, but I wanted something **personal**, fast, and minimal — without distractions.

So I built this:
- A clean website that **greets me by name**
- Gives me a new **motivational quote** on every refresh or button click
- With styling that **feels soft, calming, and positive**

Now it’s my daily go-to — and maybe it can be yours too.
## 🚀 Features

- 💬 Fetches a new motivational quote every time you open the site or click a button
- 🧠 Personalized greeting using your name
- 🌈 Aesthetic UI with soft gradients and clean layout
- 💾 Stores your name in browser localStorage
- ⚡ Simple, fast, and responsive

## 📸 Preview

![Screenshot](https://github.com/user-attachments/assets/17700a7d-75f2-48eb-9314-a9e06591e027)

## 🛠️ Tech Stack

- **HTML5** + **CSS3** (with flexbox, gradients, and shadows)
- **JavaScript** (Async/Await, DOM Manipulation, localStorage)
- **API Used:** [QuoteSlate API](https://quoteslate.vercel.app/api/quotes/random)

## 📂 File Structure

📁 root
├── index.html # Name input page
├── quotes.html # Quotes page after entering name
├── script.js # Fetches quotes and handles personalization
├── script2.js # Stores name and redirects user
├── style.css # Styling for the full site


## 💡 How It Works

1. User lands on `index.html`, enters their name.
2. Name is stored in localStorage.
3. User is redirected to `quotes.html`.
4. On every visit, app greets the user and shows a new quote.

## 🌐 Deployment

This app is live on [Netlify](https://dailymotivationdose.netlify.app/quote.html) — click and get motivated!

To run locally:
```bash
git clone https://github.com/sharon-ham44/Daily-Motivation-Dose.git
cd Daily-Motivation-Dose
open index.html

🔐 Privacy Note

This app stores only your name in localStorage. No data is sent to any server. 100% private & browser-only.

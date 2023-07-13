# <img src="https://github.com/Anmol-Baranwal/WaitSmart/assets/74038190/cfd5e684-36b7-46e6-a028-a280263c5128" alt="icon of todo list" width="35" /> WaitSmart

> :information_source: This web application is constructed with Next.js, a framework you can find at [Next.js](https://nextjs.org/) which is bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

This project aims to facilitate efficient queue management in various settings, such as hospitals or other establishments. Users can wait comfortably from their location and receive notifications when it's their turn. Doctors will have the ability to manage patients.

<hr>

## :fire: Deployed Link ##

This project is hosted on [Vercel Platform](https://vercel.com/). Visit the following link to view the web application.

```
https://wait-smart-chi.vercel.app/
```
<hr>

## 🌐 Setup Local Environment

You need to setup a few API keys for this project to be setup correctly otherwise you won't be able to properly work on this project

- [Firebase Services Key](https://firebase.google.com/)
- [Twilio API Key](https://www.twilio.com/docs/sms/api/message-resource#create-a-message-resource)

For that, you need to create a `.env.local` file in your project, as shown in the [docs](https://nextjs.org/docs/basic-features/environment-variables#loading-environment-variables). The file should look like this:

```
NEXT_PUBLIC_FIREBASE_API_KEY=<WRITE VALUE HERE>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<WRITE VALUE HERE>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<WRITE VALUE HERE>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<WRITE VALUE HERE>
NEXT_PUBLIC_FIREBASE_APP_ID=<WRITE VALUE HERE>
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=<WRITE VALUE HERE>
NEXT_PUBLIC_TWILIO_ACCOUNT_SID=<WRITE VALUE HERE>
NEXT_PUBLIC_TWILIO_AUTH_TOKEN=<WRITE VALUE HERE>
NEXT_PUBLIC_TWILIO_PHONE_NUMBER=<WRITE VALUE HERE>
```

You can retrieve the above environment values by referring to their documentation linked above. Once retrieved, paste them accordingly as mentioned above.

## ✅ Guidelines to run web app locally

- For this app to work, Use these commands to run the application

```bash
# to install dependencies 
npm install

# to run the development server
npm run dev
```

- Open `http://localhost:3000` with your browser to see the application.

<br>

<hr>

## ✨ Features

- The homepage is responsive and adapts to different screen sizes
- Users have the option to submit their data without the need for signing up or logging in
- Doctors can efficiently manage their patients through a dynamic dashboard
- Each doctor has a dedicated route with comprehensive details accessible at `/doctor/:id`
- Server-side rendering is implemented to enhance performance and improve search engine optimization (SEO)
- Firebase integration is utilized for authentication purposes
- Firestore, a NoSQL database provided by Firebase, is employed for fetching and adding data.

<hr>

## <img src="https://user-images.githubusercontent.com/74038190/221857984-5bf77e81-6f65-4502-a7c8-f29a978efb3f.png" alt="bullseye" width="35" /> Frameworks & Tools
<img src="https://img.shields.io/badge/next.js-000000?style=for-the-badge&logo=nextdotjs&logoColor=white" /> <img src="https://img.shields.io/badge/JavaScript-323330?style=for-the-badge&logo=javascript&logoColor=F7DF1E" />
<img src="https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB" />
<img src="https://img.shields.io/badge/firebase-ffca28?style=for-the-badge&logo=firebase&logoColor=black" />
<img src="https://img.shields.io/badge/GitHub-100000?style=for-the-badge&logo=github&logoColor=white" />
<img src="https://img.shields.io/badge/Chakra--UI-319795?style=for-the-badge&logo=chakra-ui&logoColor=white" />
<img src="https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white" />
<img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white" />
<img src="https://img.shields.io/badge/Lighthouse-F44B21?style=for-the-badge&logo=Lighthouse&logoColor=white" />
<img src="https://img.shields.io/badge/Vercel-000000?style=for-the-badge&logo=vercel&logoColor=white" />

<hr>

## 📂 Codebase Structure

A quick look at the structure of the codebase.

```
.
|──node_modules
|──firebase.json
|──firebaseConfig.json
|──firestore.rules
|──next.config.json
|──jsconfig.json
|──.eslintrc.json
|──package-lock.json
|──package.json
|──README.md
└── components
    |───componentName
        |───componentName.js
        └───componentName.module.css
└── data
    └───files.json
└── lib
    └───firebase
        └───auth
            └───signin.js
            └───singup.js
        └───context
            └───AuthContext.js
        └───firestore
            └───addData.js
            └───getData.js
└── pages
    └───api
        └───deletePatient
            └───[patientId].js
        └───createDoctorAppointment.js
        └───createUser.js
        └───patients.js
    └───doctor
        └───[doctorId].js
    └───_app.js
    └───_document.js
    └───appointment.js
    └───homepage.js
    └───index.js
    └───login.js
    └───protected.js
    └───signup.js
└── public
    └───static
        └───Folder
            └───icons.png
        └───Folder
            └───icons.png
└── styles
    └──appointment.module.css
    └──globals.css
    └──auth.module.css
    └──doctor.module.css
    └──Home.module.css
```

## 🗄️ Database Structure

```
|── doctors
    └── identification number
        |── name (Doctor's id same as that from users collection)
        └── patients
            └── <patientId>
                |── firstName
                |── lastName
                |── contactNumber
                └── city
```

<hr>

## 💻 Glimpse of the Web Application

> Landing Page
![WaitSmart](https://github.com/Anmol-Baranwal/WaitSmart/assets/74038190/08e8a406-ba15-4090-8e67-b0bc486119bf)

> Exciting Features
![Exciting Features](https://github.com/Anmol-Baranwal/WaitSmart/assets/74038190/b9e39da9-9421-4da9-aafd-da0895124c80)

> Tech Stack
![Tech Stack](https://github.com/Anmol-Baranwal/WaitSmart/assets/74038190/b65496ab-39c1-4edd-b69d-cbb491e688d9)

> FAQs
![FAQs](https://github.com/Anmol-Baranwal/WaitSmart/assets/74038190/9e496d50-d69e-4a98-a9a9-160dc7980edf)

> Dashboard
![Dashboard](https://github.com/Anmol-Baranwal/WaitSmart/assets/74038190/4f8f2416-7625-4b87-84e8-7f6397746c26)

> Project Management
![Project Management](https://github.com/Anmol-Baranwal/WaitSmart/assets/74038190/50ef3018-8c38-4f0a-ab1b-6714d98245b8)

<hr>
 
## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.

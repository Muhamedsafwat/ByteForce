
# ByteForce Website

A website for ByteForce, A business solutions company that provides essential services for your business's success including digital marketing, media production and website development 


## Run Locally, upload and sync changes 

Clone the project

```bash
  git clone git@github.com:Yousef-Medhat56/ByteForce.git
```

Go to the project directory

```bash
  cd byteforce
```

Install dependencies

```bash
  npm install
```

Start the server

```bash
  npm run dev
```

Add changes before comitting 
```bash
git add *
```

commit changes to push (be careful to avoid conflicts)
```bash 
git commit -m"your-commit-message-here"
```

push your commits to the repository
```bash
git push origin main
```

pull incoming changes from other authors (may ask to merge and fix conflicts)
```bash
git pull
```




## Get started
To get started start by adding pages inside ```/app/[lang]``` directory
#### Components
For reusable components add your components inside ```/app/_components```
#### utils
For reusable functions add it to ```/app/_utils``` for example: ```getLocale.js``` to implement translation and ```getCurrentdate.js``` ,etc...
## Technologies and libraries
All Technologies are built on top of React, TypeScript and nodeJS
#### client side / frontend 
 - [NextJs](https://nextjs.org/)
 - [TailwdinCSS](https://tailwindcss.com/)
 - [Lucide Icons](de.dev/icons/)
 - [Embla Carousel](https://www.embla-carousel.com/)

 #### serverside / backend
 - [PayloadCMS](https://payloadcms.com/)
 - [MongoDB](https://www.mongodb.com/)


import React, { useState } from 'react';
import './App.css';
import './index.css';
import './style.css';
import design1 from './img/vector1614-8tp5.svg';
import design2 from './img/untitleddesign811313-j34u-800h.png';
import design3 from './img/untitleddesign1011515-23im-200h.png';
import design4 from './img/untitleddesign921816-u8te-500w.png';
import design5 from './img/untitleddesign911314-6qsi-300w.png';
import design6 from './img/untitleddesign1112024-i5x-300w.png';
import design7 from './img/vector22025-wks6.svg';
import img1 from './img/leonardokinoxlcomputerdeskminimalistcloseupmessy11113-bgb7-300h.png';
import img2 from './img/picsart241115121146955116-wl6h-400h.png';
import img3 from './img/c2bbda01de714d232ab6f73682e0a1b7113-3ayf-400h.png';
import img4 from './img/picsart241115121358911118-v1z-200w.png';
import img5 from './img/image24ea1234acb63c551891c139002d973e112-0v2-200w.png';
import img6 from './img/f2f4c7eba2c862165330d31e3c60253c115-oiys-200w.png';
import img7 from './img/e3cde152454bb04678491587975bc85a114-g9pd-300h.png';
import img8 from './img/leonardokinoxlwebsitecodeinnotepad11115-g61m-300h.png';


function App() {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

  const formData = {
      name,
      email,
      message
  };

  try {
    // Sending data to backend via POST request
    const response = await fetch('http://localhost:5000/send-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert('Message sent successfully!');
    } else {
      alert('Error sending message!');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error while sending message');
  } finally {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("message").value = "";
  }

};

  return (
    <html lang="english">
  <head>
    <title>exported project</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <meta charset="utf-8" />
    <meta property="twitter:card" content="summary_large_image" />

    <div>
    <style
      dangerouslySetInnerHTML={{
        __html: `
          html { line-height: 1.15; }
          body { margin: 0; }
          * { box-sizing: border-box; border-width: 0; border-style: solid; -webkit-font-smoothing: antialiased; }
          p, li, ul, pre, div, h1, h2, h3, h4, h5, h6, figure, blockquote, figcaption { margin: 0; padding: 0; }
          button { background-color: transparent; }
          button, input, optgroup, select, textarea { font-family: inherit; font-size: 100%; line-height: 1.15; margin: 0; }
          a { color: inherit; text-decoration: inherit; }
          img { display: block; }
        `,
      }}
    />
    <style
      dangerouslySetInnerHTML={{
        __html: `
          html { font-family: Inter; font-size: 16px; }
          body { font-weight: 400; color: var(--dl-color-theme-neutral-dark); background: var(--dl-color-theme-neutral-light); }
        `,
      }}
    />
  </div>
    <link
      rel="stylesheet"
      href="https://unpkg.com/animate.css@4.1.1/animate.css"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Cutive+Mono:wght@400&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Cutive+Mono:wght@400&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Cutive+Mono:wght@400&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Cutive+Mono:wght@400&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Noto+Sans:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=Inter:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=STIX+Two+Text:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800&amp;display=swap"
      data-tag="font"
    />
    <link
      rel="stylesheet"
      href="https://unpkg.com/@teleporthq/teleport-custom-scripts/dist/style.css"
    />
  </head>
  <body>
    <link rel="stylesheet" href="./style.css" />
    <div>
      <link href="./index.css" rel="stylesheet" />
      
      <div class="desktop1-container">
        <div class="desktop1-desktop1">
          <div class="desktop1-frame1">
          <span class="desktop1-text10">ohmcodes</span>
            <div class="desktop1-intro">
              <span class="desktop1-text11">hi, i’m soham tandale</span>
              <img
                alt="Vector1614"
                src={design1}
                class="desktop1-vector1"
              />
              <img
                alt="LeonardoKinoXLcomputerdeskminimalistcloseupmessy11113"
                src={img1}
                class="desktop1-leonardo-kino-x-lcomputerdeskminimalistcloseupmessy11"
              />
              <span class="desktop1-text12">
                i like to craft solid and simple things for web.
              </span>
              <span class="desktop1-text13">your digital architect</span>
            </div>
            <div class="desktop1-about1">
              <img
                alt="Picsart241115121146955116"
                src={img2}
                class="desktop1-picsart2411151211469551"
              />
              <img
                alt="c2bbda01de714d232ab6f73682e0a1b7113"
                src={img3}
                class="desktop1c2bbda01de714d232ab6f73682e0a1b71"
              />
              <span class="desktop1-text14">
                <span>about</span>
                <br />
                <span>me</span>
              </span>
              <img
                alt="Untitleddesign811313"
                src={design2}
                class="desktop1-untitleddesign81"
              />
              <span class="desktop1-text18">
                i’m a passionate web developer dedicated to building
                high-quality, user-centered websites and web applications. with
                a focus on clean code, responsive design, and seamless user
                experiences, i work closely with clients to bring their ideas to
                life.
              </span>
              <span class="desktop1-text19">Build. Innovate. Scale.</span>
            </div>
            <span class="desktop1-text20">designer</span>
            <div class="desktop1-about2">
              <img
                alt="Picsart241115121358911118"
                src={img4}
                class="desktop1-picsart2411151213589111"
              />
              <img
                alt="IMAGE24ea1234acb63c551891c139002d973e112"
                src={img5}
                class="desktop1image24ea1234acb63c551891c139002d973e1"
              />
              <img
                alt="Untitleddesign1011515"
                src={design3}
                class="desktop1-untitleddesign101"
              />
              <span class="desktop1-text21">
                I'm passionate for crafting visually stunning, user-friendly
                websites.
              </span>
              <span class="desktop1-text22">
                i specialize in creating responsive designs that not only look
                great but also provide an intuitive experience for users.with a
                focus on clean, modern design and seamless user experiences, i
                combine creativity with technical expertise to craft digital
                solutions that engage and inspire. from concept to launch, i
                work closely with clients to bring their vision to life with
                responsive, intuitive, and functional web designs.
              </span>
              <span class="desktop1-text23">Empowering Your Web</span>
            </div>
            <div class="desktop1-skills">
              <span class="desktop1-text24">
                My approach combines strong problem-solving skills with a keen
                eye for design, ensuring that every project is both functional
                and visually appealing. I specialize in crafting custom web
                applications that are responsive, intuitive, and optimized for
                performance. Whether building from scratch or enhancing an
                existing site, my goal is to deliver high-quality, tailored
                solutions that meet your business needs and exceed user
                expectations.
              </span>
              <img
                alt="Untitleddesign921816"
                src={design4}
                class="desktop1-untitleddesign92"
              />
              <span class="desktop1-text25">my skillset</span>
              <span class="desktop1-text26">
                <span>html</span>
                <br />
                <span>css</span>
                <br />
                <span>javascript</span>
                <br />
                <span>react</span>
                <br />
                <span>java</span>
                <br />
                <span>spring</span>
                <br />
                <span>springboot</span>
                <br />
                <span>git</span>
                <br />
                <span>github</span>
                <br />
                <span>responsive design</span>
              </span>
              <img
                alt="f2f4c7eba2c862165330d31e3c60253c115"
                src={img6}
                class="desktop1f2f4c7eba2c862165330d31e3c60253c1"
              />
              <img
                alt="e3cde152454bb04678491587975bc85a114"
                src={img7}
                class="desktop1e3cde152454bb04678491587975bc85a1"
              />
            </div>
            <div class="desktop1-about3">
              <span class="desktop1-text46">developer</span>
              <img
                alt="Untitleddesign911314"
                src={design5}
                class="desktop1-untitleddesign91"
              />
              <span class="desktop1-text47">
                i'm a passionate web developer who loves turning ideas into
                interactive, functional websites. with a solid foundation in
                front-end and back-end development, i specialize in building
                responsive, fast-loading, and scalable websites that provide a
                seamless experience for users across all devices. with a focus
                on clean, efficient code and modern development practices, i
                work to transform design concepts into functional, dynamic sites
                that meet both user needs and business goals. whether it's
                building custom solutions or optimizing existing systems, i’m
                committed to delivering high-quality, scalable results.
              </span>
              <span class="desktop1-text48">
                my motto is code with purpose, design with passion, and deliver
                with precision.
              </span>
              <span class="desktop1-text49">
                Building the Web, One Pixel at a Time
              </span>
              <img
                alt="LeonardoKinoXLwebsitecodeinnotepad11115"
                src={img8}
                class="desktop1-leonardo-kino-x-lwebsitecodeinnotepad11"
              />
            </div>
            <span class="desktop1-text50">Web, Perfected Daily</span>
            <div class="desktop1-contact">
              <span class="desktop1-text51">say hi!</span>
              <span class="desktop1-text52">how can i help you today?</span>
              <img
                alt="Untitleddesign1112024"
                src={design6}
                class="desktop1-untitleddesign111"
              />
              <form onSubmit={handleSubmit}>
              <div class="form-column">
                <input class="textbox1" id="name" type="text" placeholder="name" value={name} onChange={(e) => setName(e.target.value)} required/>
                <input class="textbox1" id="email" type="text" placeholder="email" value={email} onChange={(e) => setEmail(e.target.value)} required/>
                <input class="textbox2" id="message" type="text" placeholder="message" value={message} onChange={(e) => setMessage(e.target.value)} required/>
              </div>
              <button class="submit" type="submit">submit</button>
              </form>
            </div>
            <div class="desktop1-thanks">
              <span class="desktop1-text57">thank you!</span>
              <img
                alt="Vector22025"
                src={design7}
                class="desktop1-vector2"
              />
              <span class="desktop1-text58">
                i appreciate your time and interest in my work. i look forward
                to the opportunity to collaborate with you!
              </span>
              <span class="desktop1-text59">handcrafted by me © ohmcodes</span>
              <span class="desktop1-text60">Transforming Ideas into Code</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </body>
</html>

  );
}

export default App;

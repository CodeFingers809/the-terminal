const commands = [
  ">> help/-> you definitely know what it does now",
  ">> about/-> read about me",
  ">> socials/-> my social handles",
  ">> channel/-> my youtube channel",
  ">> email/-> email me",
  ">> banner/-> print banner ascii",
  ">> history/-> see commands history",
  ">> clear/-> clear terminal",
];
const header = [
  `<p class="text-gray-400">Terminal 1.0.0</p>`,
  `<p class="text-gray-400">Copyright (c) Not a corporation</p>`,
  `<br />`,
  `<p>
  <a target="_blank" href="https://github.com/CodeFingers809" class="text-gray-400 underline hover:text-gray-500">
    https://github.com/CodeFingers809
  </a>
  </p>`,
  `<p class="text-gray-400">Start by typing 'help'</p>`,
];
const banner = [
  `<p class="text-emerald-400">&nbsp;&nbsp;&nbsp;______&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;_______&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>`,
  `<p class="text-emerald-400">&nbsp;&nbsp;/&nbsp;____/___&nbsp;&nbsp;____/&nbsp;/__&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/&nbsp;____(_)___&nbsp;&nbsp;____&nbsp;&nbsp;___&nbsp;&nbsp;__________</p>`,
  `<p class="text-emerald-400">&nbsp;/&nbsp;/&nbsp;&nbsp;&nbsp;/&nbsp;__&nbsp;\\/&nbsp;__&nbsp;&nbsp;/&nbsp;_&nbsp;\\&nbsp;&nbsp;&nbsp;/&nbsp;/_&nbsp;&nbsp;/&nbsp;/&nbsp;__&nbsp;\\/&nbsp;__&nbsp;\`/&nbsp;_&nbsp;\\/&nbsp;___/&nbsp;___/</p>`,
  `<p class="text-emerald-400">/&nbsp;/___/&nbsp;/_/&nbsp;/&nbsp;/_/&nbsp;/&nbsp;&nbsp;__/&nbsp;&nbsp;/&nbsp;__/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/&nbsp;/_/&nbsp;/&nbsp;&nbsp;__/&nbsp;/&nbsp;&nbsp;(__&nbsp;&nbsp;)&nbsp;</p>`,
  `<p class="text-emerald-400">\\____/\\____/\\__,_/\\___/&nbsp;&nbsp;/_/&nbsp;&nbsp;&nbsp;/_/_/&nbsp;/_/\\__,&nbsp;/\\___/_/&nbsp;&nbsp;/____/&nbsp;&nbsp;</p>`,
  `<p class="text-emerald-400">&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;/____/&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</p>`,
];
const history = [];
const socials = [
  `Instagram|instagram.com/ayush_bohra_7|https://www.instagram.com/ayush_bohra_7/`,
  `Twitter|twitter.com/AyushBohra15|https://twitter.com/AyushBohra15`,
  `GitHub|github.com/CodeFingers809|https://github.com/CodeFingers809`,
  `StackOverflow|stackoverflow.com/Code Fingers|https://stackoverflow.com/users/16232116/code-fingers`,
  `YouTube|youtube.com/Code Fingers|https://www.youtube.com/channel/UCdrBEMviYBO0qyYCHo5WjSg`,
]
const about = [
`<p class="text-emerald-400">&emsp;Hi! I am <span class="shadow shadow-indigo-400 rounded px-2 text-indigo-400">Ayush Bohra</span></p>`,
`<p class="text-emerald-400">&emsp;I am <span class="underline text-indigo-400">Web Developer</span> and <span class="underline text-indigo-400">Designer</span> who makes interactive websites like this one</p>`,
`<p class="text-emerald-400">&emsp;Currently am a student in Computer Science and am learning new things every day and trying to</p>`,
`<p class="text-emerald-400">&emsp;improve my coding skills day by day. I love to make simple and straightforward websites</p>`,
`<p class="text-emerald-400">&emsp;which are fun to use. I have learnt a number of web technologies so far like <span class="underline text-indigo-400">React, NextJS, <span></p>`,
`<p class="text-emerald-400">&emsp;<span class="underline text-indigo-400">Tailwind, Bootstrap, Axios, MongoDB, ExpressJS, Scss and KaboomJS.</span> I believe that making projects</p>`,
`<p class="text-emerald-400">&emsp;is the best way to improve your application skills and that's the reason why I love making many micro</p>`,
`<p class="text-emerald-400">&emsp;websites to learn to apply certain skills and improve my experience in Web Development.</p>`,
`<p class="text-emerald-400">&emsp;I also do some designing in softwares like Figma to wireframe the design of my websites and</p>`,
`<p class="text-emerald-400">&emsp;inkscape to make vector illustrations. I also run a small YouTube channel in which I teach web</p>`,
`<p class="text-emerald-400">&emsp;development by making micro projects. You can use command <span class='text-indigo-400 rounded shadow shadow-indigo-400'>'channel'</span> to check it out for yourself!</p>`,
]

window.onload = () => {
  header.forEach((line, i) => {
    const node = document.createRange().createContextualFragment(line);
    setTimeout(() => {
      document.querySelector(".history").appendChild(node.cloneNode(true));
      if (i === banner.length - 1) {
        document.querySelector(".editLine").classList.remove("hidden");
      }
    }, (i + 1) * 100);
  });
  banner.forEach((line, i) => {
    const node = document.createRange().createContextualFragment(line);
    setTimeout(() => {
      document.querySelector(".history").appendChild(node.cloneNode(true));
      if (i === banner.length - 1) {
        document.querySelector(".editLine").classList.remove("hidden");
      }
    }, (i + header.length + 1) * 100);
  });
};

window.addEventListener("keydown", (e) => {
  const key = e.key;
  // console.log(key)
  if (key === "Backspace" || key === "Delete") {
    handleDel();
    return;
  }
  if (key === "Enter") {
    handleEnter();
    return;
  }
  const keys = "abcdefghijklmnopqrstuvwxyz1234567890 ";
  if (keys.includes(key)) {
    if (key === " ") {
      document.querySelector(".commandLine").innerHTML += "&nbsp;";
    }
    document.querySelector(".commandLine").innerText += key;
  }
});
const handleDel = () => {
  const value = document.querySelector(".commandLine").innerText;
  if (value.length === 0) return;
  document.querySelector(".commandLine").innerText = value.slice(0, -1);
};
const handleEnter = () => {
  document.querySelector(".editLine").classList.add("hidden");
  const elem = document.createElement("p");
  const value = document.querySelector(".commandLine").innerText.trim();
  elem.innerHTML = `<p><span class="text-orange-300">visitor@code_fingers:~$</span>
<span class="text-indigo-400">${value}</span></p>`;
  document.querySelector(".history").appendChild(elem.cloneNode(true));

  switch (value) {
    case "help":
      commands.forEach((command, i) => {
        setTimeout(() => {
          elem.innerHTML = `<p class="text-indigo-400">${
            command.split("/")[0]
          }</p>
          <p class="text-gray-600 text-sm">${command.split("/")[1]}</p>
          `;
          document.querySelector(".history").appendChild(elem.cloneNode(true));
          window.scrollTo(0, document.body.scrollHeight);
          if (i === commands.length - 1) {
            document.querySelector(".editLine").classList.remove("hidden");
            history.push(`<p class="text-indigo-400">>> ${value}</p>`);
          }
        }, (i + 1) * 100);
      });
      break;
    case "about":
      about.forEach((line, i) => {
        setTimeout(() => {
          elem.innerHTML = line
          document.querySelector(".history").appendChild(elem.cloneNode(true));
          window.scrollTo(0, document.body.scrollHeight);
          if (i === about.length - 1) {
            document.querySelector(".editLine").classList.remove("hidden");
            history.push(`<p class="text-indigo-400">>> ${value}</p>`);
          }
        }, (i + 1) * 100);
      });
      break;
    case "socials":
      socials.forEach((link, i) => {
        setTimeout(() => {
          let spaces = ""
          for(let j=0;j<20-link.split("|")[0].length;j++){
              spaces+="&nbsp;";
            }
          elem.innerHTML = `<span class="text-emerald-400">${
            link.split("|")[0]
          }</span>
          ${spaces}
          <a target="_blank" href="${link.split("|")[2]}" class="text-gray-400 underline hover:text-gray-500">${link.split("|")[1]}</a>
          `;
          
          document.querySelector(".history").appendChild(elem.cloneNode(true));
          window.scrollTo(0, document.body.scrollHeight);
          if (i === socials.length - 1) {
            document.querySelector(".editLine").classList.remove("hidden");
            history.push(`<p class="text-indigo-400">>> ${value}</p>`);
          }
        }, (i + 1) * 100);
      });
      break;
    case "channel":
      document.querySelector(".history").appendChild(document
        .createRange()
        .createContextualFragment(`<p class="text-emerald-400">Opening YT channel...</p>`).cloneNode(true));
        
      setTimeout(() => {
        window.open(
          `https://www.youtube.com/channel/UCdrBEMviYBO0qyYCHo5WjSg`,
          "_blank"
        );
        document.querySelector(".editLine").classList.remove("hidden");
        history.push(`<p class="text-indigo-400">>> ${value}</p>`);
        window.scrollTo(0, document.body.scrollHeight);
      }, 300);
      break;
    case "email":
      document.querySelector(".history").appendChild(document
        .createRange()
        .createContextualFragment(`<p class="text-emerald-400">Opening mail...</p>`).cloneNode(true));
        
      setTimeout(() => {
        const emailTo = "aldbha123@gmail.com";
        const emailSub = "Hello, Ayush!";
        const emailBody = "Say what you want to...";
        window.open(
          `mailto:${emailTo}?subject=${emailSub}&body=${emailBody}`,
          "_blank"
        );
        document.querySelector(".editLine").classList.remove("hidden");
        history.push(`<p class="text-indigo-400">>> ${value}</p>`);
        window.scrollTo(0, document.body.scrollHeight);
      }, 300);
      break;
    case "banner":
      banner.forEach((line, i) => {
        const node = document.createRange().createContextualFragment(line);
        setTimeout(() => {
          document.querySelector(".history").appendChild(node.cloneNode(true));

          if (i === banner.length - 1) {
            document.querySelector(".editLine").classList.remove("hidden");
            history.push(`<p class="text-indigo-400">>> ${value}</p>`);
          }
          window.scrollTo(0, document.body.scrollHeight);
        }, (i + 1) * 100);
      });
      break;
    case "history":
      history.forEach((command, i) => {
        setTimeout(() => {
          elem.innerHTML = command;
          document.querySelector(".history").appendChild(elem.cloneNode(true));
          if (i === history.length - 1) {
            document.querySelector(".editLine").classList.remove("hidden");
            history.push(`<p class="text-indigo-400">>> ${value}</p>`);
          }
          window.scrollTo(0, document.body.scrollHeight);
        }, (i + 1) * 100);
      });
      break;
    case "clear":
      document.querySelector(".history").innerHTML = "";
      document.querySelector(".editLine").classList.remove("hidden");
      history.push(`<p class="text-indigo-400">>> ${value}</p>`);
      window.scrollTo(0, document.body.scrollHeight);
      break;
    default:
      elem.innerHTML = `<p><span class="text-red-400">Can't recognize this command. Type <span class='text-indigo-400 rounded shadow shadow-indigo-400'>'help'</span> to see list of commands</span></p>`;
      document.querySelector(".history").appendChild(elem.cloneNode(true));
      document.querySelector(".editLine").classList.remove("hidden");
      history.push(`<p class="text-indigo-400">>> ${value}</p>`);
      window.scrollTo(0, document.body.scrollHeight);
  }
  document.querySelector(".commandLine").innerText = "";
};

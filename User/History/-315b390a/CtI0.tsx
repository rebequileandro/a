import shooza from '@/assets/projects/shoozaLanding.png';
import pocketFit from '@/assets/projects/pocketFit.webp';
import chat from '@/assets/projects/chatRoom.png';
import weatherApp from '@/assets/projects/weatherApp.png';

const dataPage = {
  home: {
    title: {
      lineOne: 'Full Stack Developer',
      lineTwo: 'Creo experiencias,',
      lineThree: 'Desarrollo tus ideas'
    },
    description: (
      <p>
        Mi nombre es Leandro Rebequi, soy <br />
        desarrollador multiplataforma.
      </p>
    )
  },
  aboutMe: {
    description: (
      <p>
        ¡Hola! Mi nombre es Leandro Rebequi y me apasioná crear cosas desde 0 y
        ver como se trasforman en algo increíble.
        <br />
        <br />
        Mis inicios en el desarrollo web comenzaron a mediados del 2019, comencé
        haciendo simples maquetaciones en HTML y CSS, inspeccionando códigos de
        otras webs y viendo cursos en YouTube. <br />
        Luego por el 2021, comencé a capacitarme más en serio, tome un Bootcamp
        Full Stack, donde adquirí una buena base para crear webs y aplicaciones
        completas, a partir de ese punto comencé a capacitarme por mi cuenta a
        medida que los trabajos o proyectos lo iban requiriendo.
      </p>
    ),
    skills: [
      'JavaScript',
      'TypeScript',
      'React/React Native',
      'Redux',
      'Python'
    ]
  },
  projects: [
    {
      title: 'Shooza',
      description: '',
      image: shooza,
      technologies: 'React, JavaScript, Lax, Redux, Socket.io, Sass',
      type: 'MOBILE'
    },
    {
      title: 'PocketFit',
      description: '',
      image: pocketFit,
      technologies: 'React, React Native, JavaScript, Firebase, Redux',
      type: 'WEB | MOBILE'
    },
    {
      title: 'Chat',
      description: '',
      image: chat,
      technologies: 'React, JavaScript, Firebase',
      type: 'WEB'
    },
    {
      title: 'WeatherApp',
      description: '',
      image: weatherApp,
      technologies: 'React, JavaScript',
      type: 'WEB'
    }
  ]
};
export default dataPage;

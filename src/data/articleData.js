import praticienImg from "../assets/images/naturo2.jpg";
import cabinet1Img from "../assets/images/banner4.jpg";
import reflexImg from "../assets/images/reflexo.jpg";
import natImg from "../assets/images/banner1.jpg";




export const articles = {
  naturopathie: {
    title: "Naturopathie",
    classPrefix: "naturo",
    sections: [
      {
        subtitle: "La naturopathie : votre bien-être au naturel ",
        paragraph: `La naturopathie aide votre corps à rester en forme grâce à des méthodes naturelles : alimentation saine, plantes, sport et gestion du
            stress. Elle prévient les déséquilibres et booste votre qualité de vie.`,
      },
      {
        subtitle: "D'où ça vient ?",
        paragraph: `Elle puise ses racines dans les traditions européennes et asiatiques et a été structurée au XIXᵉ siècle. Son principe : respecter le
            corps, renforcer ses défenses et adopter un mode de vie équilibré.`,
      },
      {
        subtitle: "Les bienfaits pour le quotidien",
        paragraph: `Énergie, digestion, sommeil, stress… la naturopathie soutient tout ! Elle encourage aussi de bonnes habitudes pour un bien-être durable et
            facile à intégrer dans votre quotidien.`,
      },
      {
        subtitle: "Comment se déroule une séance ?",
        paragraph: ` Chaque séance commence par un échange pour comprendre vos besoins et votre mode de vie. Ensuite, le naturopathe propose des conseils
            personnalisés et des techniques naturelles adaptées à votre corps. La séance se termine par un plan simple à suivre chez vous pour
            soutenir votre bien-être.`,
      },
      {
        subtitle: "Suivi et accompagnement",
        paragraph: `Un suivi régulier permet de mesurer vos progrès et d'ajuster les conseils selon vos besoins. L'objectif est de vous aider à maintenir un
            équilibre durable et à intégrer facilement de bonnes habitudes dans votre quotidien.`,
      },
      {
        subtitle: "Contre-indications",
        paragraph: `La naturopathie est douce, mais certaines situations nécessitent un suivi médical strict : maladies graves, troubles aigus ou traitements spécifiques. Il est recommandé de consulter votre médecin avant de commencer un programme naturopathique.`,
      },
    ],
    cta: [
      { text: "Découvrir les prestations", link: "/prestations" },
      { text: "Prendre rendez-vous", link: "/contact" },
    ],
  },

  reflexologie: {
    title: "Réflexologie",
    classPrefix: "reflexo",
    sections: [
      {
        subtitle: "La réflexologie : le bien-être par les pieds et les mains",
        paragraph: `La réflexologie est une pratique douce qui stimule des points précis sur les pieds (ou les mains) pour rééquilibrer le corps et favoriser
            l'auto-guérison. Elle repose sur le principe que chaque zone réflexe correspond à un organe ou une fonction du corps, et que leur
            stimulation peut soulager le stress, améliorer la circulation et soutenir le bien-être général.`,
      },
      {
        subtitle: " D'où ça vient ?",
        paragraph: ` La réflexologie trouve ses racines dans des traditions anciennes, notamment chinoises et égyptiennes, où l'on utilisait les pieds et les
            mains pour soulager les maux du corps. Formalisée au XXᵉ siècle, elle repose sur la cartographie des zones réflexes et sur l'idée que le
            corps possède une capacité naturelle à s'équilibrer et à se régénérer.`,
      },
      {
        subtitle: "Les bienfaits au quotidien",
        paragraph: ` Pratiquer la réflexologie permet de réduire le stress, favoriser la détente, stimuler la circulation sanguine et lymphatique, et améliorer
            le sommeil. Elle aide également à relâcher les tensions musculaires et à soutenir l'énergie vitale, offrant un moment de détente profonde
            et de bien-être durable.`,
      },
      {
        subtitle: "Comment se déroule une séance ?",
        paragraph: `Une séance débute par un temps d'échange pour cerner vos besoins et vos éventuelles tensions. Le praticien stimule ensuite différentes
            zones réflexes des pieds ou des mains par des pressions douces et précises. La séance se termine dans un état de relaxation profonde qui
            favorise l'équilibre naturel du corps.
`,
      },
      {
        subtitle: "Suivi et accompagnement",
        paragraph: `Un suivi régulier permet d'ancrer les bienfaits dans la durée : meilleure gestion du stress, détente durable et soutien global de
            l'organisme. L'accompagnement se construit selon vos besoins pour vous aider à retrouver énergie et harmonie.
`,
      },
      {
        subtitle: "Contre-indications",
        paragraph: `La réflexologie est déconseillée en cas de fractures récentes, infections aiguës, maladies graves ou grossesse sans accord médical. Il est important de prévenir le praticien de toute condition médicale avant la séance.`,
      },
    ],
    cta: [
      { text: "Découvrir les prestations", link: "/prestations" },
      { text: "Prendre rendez-vous", link: "/contact" },
    ],
  },

  about: {
    title: "Portrait",
    classPrefix: "about",
    sections: [
      {
        subtitle: "Qui suis-je ?",
        paragraph: `Je suis naturopathe et réflexologue passionnée par le bien-être naturel. Mon objectif est d'accompagner chacun de mes patients vers un équilibre physique et mental, grâce à des méthodes naturelles et personnalisées.`,
        image: praticienImg,
      },
      {
        subtitle: "Ma philosophie",
        paragraph: `Je crois que chaque corps a une capacité naturelle à se régénérer. Mon rôle est de guider, soutenir et enseigner des pratiques simples pour que le bien-être devienne une habitude quotidienne.`,

        image: cabinet1Img,
      },
      {
        subtitle: "Ma pratique",
        paragraph: `J'utilise la naturopathie pour renforcer le corps et la réflexologie pour harmoniser les tensions et stimuler les fonctions naturelles du corps. Chaque séance est adaptée à vos besoins, dans une approche douce et respectueuse.`,
        image: reflexImg,
      },
      {
        subtitle: "Mon approche globale",
        paragraph: `Je considère la santé comme un équilibre entre le corps, l'esprit et l'environnement. Les conseils que je propose vont au-delà de la séance : alimentation, gestion du stress, relaxation et routines adaptées à chacun.`,
        image: natImg,
      },
    ],
    cta: [
      { text: "Découvrir les prestations", link: "/prestations" },
      { text: "Prendre rendez-vous", link: "/contact" },
    ],
  },
};

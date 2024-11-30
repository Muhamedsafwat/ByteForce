//import logos
//seven
import sevenLogo from '@/public/images/seven/logo.png';
import aboutSeven from '@/public/images/seven/vector.png';
//codex
import codeXLogo from '@/public/images/codex/logo.jpeg';
import aboutCodex from '@/public/images/codex/Rectangle 27.svg';
//graphix
import graphiXLogo from '@/public/images/graphix/logo.png';
import aboutGraphiX from '@/public/images/graphix/aboutGraphix.svg';

//import covers
import sevenCover from '@/public/images/seven/cover.png';
import graphixCover from '@/public/images/graphix/cover.png';

//import technologies
//codex
import codex1 from '@/public/images/codex/tech/css.png';
import codex2 from '@/public/images/codex/tech/express.png';
import codex3 from '@/public/images/codex/tech/html.png';
import codex4 from '@/public/images/codex/tech/js.png';
import codex5 from '@/public/images/codex/tech/nest.webp';
import codex6 from '@/public/images/codex/tech/next.webp';
import codex7 from '@/public/images/codex/tech/node.png';
import codex8 from '@/public/images/codex/tech/react.png';
import codex9 from '@/public/images/codex/tech/tailwind.png';
import codex10 from '@/public/images/codex/tech/typescript.png';
//seven
import seven1 from '@/public/images/seven/tech/adobe.png';
import seven2 from '@/public/images/seven/tech/artlist.jpeg';
import seven3 from '@/public/images/seven/tech/envato.png';
import seven4 from '@/public/images/seven/tech/firefly.png';
import seven5 from '@/public/images/seven/tech/microsoft.png';
import seven6 from '@/public/images/seven/tech/notion.png';
//graphix
import graphix1 from '@/public/images/graphix/tech/ai.png';
import graphix2 from '@/public/images/graphix/tech/id.png';
import graphix3 from '@/public/images/graphix/tech/ps.png';

export const teams = [
  {
    imgSrc: sevenLogo,
    cover: sevenCover,
    title: { en: 'Seven', ar: 'سيفن' },
    subtitle: { en: 'Media production', ar: 'انتاج الميديا' },
    description: {
      en: 'Blending creativity with technology, transforming ideas into vibrant visual stories that come to life. We believe in the power of storytelling and understand how to convey messages in a way that creates a genuine impact. Our experienced team tackles challenges and achieves goals.',
      ar: 'نمزج بين الإبداع والتكنولوجيا، نحول الأفكار إلى قصص بصرية نابضة بالحياة. نحن نؤمن بقوة السرد وندرك كيفية إيصال الرسائل بطريقة تترك أثرًا حقيقيًا. فريقنا المتمرس يواجه التحديات ويحقق الأهداف.',
    },
    aboutImgSrc: aboutSeven,
    approach: ['IDEA', 'SCRIPT', 'DIRECT', 'SHOOT', 'EDIT', 'PUBLISH'],
    technologies: [seven1, seven2, seven3, seven4, seven5, seven6],
  },
  {
    imgSrc: codeXLogo,
    title: { en: 'CodeX', ar: 'كوديكس' },
    subtitle: {
      en: 'Web Development',
      ar: 'تطوير المواقع',
    },
    description: {
      en: '"Bug" does not exist in the Codex teams vocabulary.They excels in creating unique, visually appealing websites that reflect their clients identities and goals. They specialize in modern, scalable web solutions, including full-stack development and e-commerce sites, focusing on performance and user-centered design.',
      ar: 'كلمة "خطأ" لا توجد في قاموس فريق Codex. يتميزون في إنشاء مواقع ويب فريدة وجذابة بصريًا تعكس هوية وأهداف عملائهم. يتخصصون في حلول الويب الحديثة والقابلة للتطوير، بما في ذلك تطوير التطبيقات الكاملة ومواقع التجارة الإلكترونية، مع التركيز على الأداء والتصميم الذي يركز على المستخدم.',
    },
    aboutImgSrc: aboutCodex,
    approach: ['ANALYSE', 'DESIGN', 'CODE', 'TEST'],
    technologies: [
      codex1,
      codex2,
      codex3,
      codex4,
      codex5,
      codex6,
      codex7,
      codex8,
      codex9,
      codex10,
    ],
  },
  {
    imgSrc: graphiXLogo,
    cover: graphixCover,

    title: { en: 'GraphiX', ar: 'جرافيكس' },
    subtitle: { en: 'Branding & Graphic design', ar: 'تصميم الجرافيك' },
    description: {
      en: 'Becoming a famous brand is never easy, but with Graphix team, it will be the easiest thing for us. We build your name from scratch, design your logo, choose your colors, and create everything that makes you stand out in the market among your competitors.',
      ar: 'أن تصبح علامة تجارية مشهورة ليس أمرًا سهلاً أبدًا، ولكن مع فريق Graphix، سيكون الأمر الأسهل بالنسبة لنا. نبني اسمك من الصفر، نصمم شعارك، نختار ألوانك، ونبتكر كل ما يجعلك تبرز في السوق بين منافسيك.',
    },
    aboutImgSrc: aboutGraphiX,
    approach: ['Breif', 'Research', 'Strategy', 'Sketch', 'Design', 'Identity'],
    technologies: [graphix1, graphix2, graphix3, seven4, seven6],
  },
];

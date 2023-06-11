
import {
  HomepageMeta,
  SkillGroup,
  TimelineItem1,
} from './dataDef';

/**
 * Page meta data
 */
export const homePageMeta: HomepageMeta = {
  title: 'React Resume Template',
  description: "Example site built with Tim Baker's react resume template",
};

/**
 * Section definition
 */
export const SectionId = {
  Hero: 'hero',
  About: 'about',
  Contact: 'contact',
  Portfolio: 'portfolio',
  Resume: 'resume',
  Skills: 'skills',
  Stats: 'stats',
  Testimonials: 'testimonials',
} as const;

export type SectionId = typeof SectionId[keyof typeof SectionId];



/**
 * Resume section -- TODO: Standardize resume contact format or offer MDX
 */
export const education: TimelineItem1[] = [
  {
    date: '2018.07 ~ 2019.02',
    location: '한국정보기술연구원 KITRI',
    title: 'BOB(Best Of the Best) 7기 보안제품개발트랙 top 30 수료',
    content: <p>오픈소스 능동형보안관제 솔루션 SecuBot 프로젝트 개발  </p>,
  },
  {
    date: '2018.03 ~',
    location: 'Chungnam National University',
    title: '충남대학 컴퓨터공학과 입학',
    content: <p></p>,
  },
];

export const experience: TimelineItem1[] = [{
  date: '2023.06 - Present',
  location: '루센트블록',
  title: '루센트블록 SW개발 인턴',
  content: (
    <p>
      인턴 예정
    </p>
  ),
},
{
  date: '2023.01 - 2023.04',
  location: 'CNU SW Academy',
  title: '백엔드 트랙 TA',
  content: (
    <p>
      부트캠프 백엔드 및 프론트엔드 교육생의 질의 응답.<br /> git, docker, CI/CD 기술 교육. 프로젝트 멘토링
    </p>
  ),
},
{
  date: '2019.11 - 2021.05',
  location: 'ROK Ministry of National Defense',
  title: 'SW 개발병 복무',
  content: (
    <p>
      지능형 악성코드 수집분석 체계 개발 및 유지보수,<br /> stack based browser exploit 탐지 엔진 개발.<br /> 내부 폐쇄개발망 CI/CD 구축.<br /> ELK 기반 통합로그 수집 및 시각화 체계 개발
    </p>
  ),
},
];


/**
 * Skills section
 */
export const skills: SkillGroup[] = [
  {
    name: 'Infra Engineering',
    skills: [
      {
        name: 'Docker',
        level: 10,
      },
      {
        name: 'Nginx',
        level: 9,
      },
      {
        name: 'Jenkins',
        level: 6,
      },
      {
        name: 'ELK',
        level: 5,
      }
    ],
  },
  {
    name: 'Frontend development',
    skills: [
      {
        name: 'React',
        level: 9,
      },
      {
        name: 'Flutter',
        level: 7,
      }
    ],
  },
  {
    name: 'Backend development',
    skills: [
      {
        name: 'Python',
        level: 9,
      },
      {
        name: 'Golang',
        level: 7,
      },
      {
        name: 'Node.js',
        level: 4,
      },
    ],
  },
  {
    name: 'Mobile development',
    skills: [
      {
        name: 'Flutter',
        level: 6,
      },
      {
        name: 'Android',
        level: 3,
      },
    ],
  },
];
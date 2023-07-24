import { HeadScreen } from '../../Components';
import BestOfMonth from '../../Components/BestOfMonth/BestOfMonth';

const bestPersons = [
  {
    name: 'John Doe',
    position: 1,
    job: 'Software Engineer',
    score: '91%',
    praises: 6,
    email: 'johndoe@gmail.com',
  },
  {
    name: 'John Doe',
    position: 2,
    job: 'Frontend Developer',
    score: '89%',
    praises: 3,
    email: 'johndoe@gmail.com',
  },
  {
    name: 'John Doe',
    position: 3,
    job: 'Backend Developer',
    score: '87%',
    praises: 2,
    email: 'johndoe@gmail.com',
  },
  {
    name: 'John Doe',
    position: 4,
    job: 'Software Engineer',
    score: '91%',
    praises: 6,
    email: 'johndoe@gmail.com',
  },
  {
    name: 'John Doe',
    position: 5,
    job: 'Frontend Developer',
    score: '89%',
    praises: 3,
    email: 'johndoe@gmail.com',
  },
  {
    name: 'John Doe',
    position: 6,
    job: 'Backend Developer',
    score: '87%',
    praises: 2,
    email: 'johndoe@gmail.com',
  },
  {
    name: 'John Doe',
    position: 7,
    job: 'Software Engineer',
    score: '91%',
    praises: 6,
    email: 'johndoe@gmail.com',
  },
  {
    name: 'John Doe',
    position: 8,
    job: 'Frontend Developer',
    score: '89%',

    praises: 3,
    email: 'johndoe@gmail.com',
  },
  {
    name: 'John Doe',
    position: 9,
    job: 'Backend Developer',

    score: '87%',
    praises: 2,
    email: 'johndoe@gmail.com',
  },
  {
    name: 'John Doe',
    position: 10,
    job: 'Software Engineer',
    score: '91%',
    praises: 6,
    email: 'johndoe@gmail.com',
  },
];

const RankingTeam = () => {
  return (
    <>
      <HeadScreen title="Ranking Equipos" />
      <div className="">
        <BestOfMonth bestPersons={bestPersons} />
      </div>
    </>
  );
};

export default RankingTeam;

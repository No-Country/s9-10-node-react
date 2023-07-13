import BestOfMonth from "../../Components/BestOfMonth/BestOfMonth";

const bestPersons = [
  {
    name: "John Doe",
    position: 1,
    job: "Software Engineer",
    score: "91%",
    praises: 6,
  },
  {
    name: "John Doe",
    position: 2,
    job: "Software Engineer",
    score: "89%",
    praises: 3,
  },
  {
    name: "John Doe",
    position: 3,
    job: "Software Engineer",
    score: "87%",
    praises: 2,
  },
  {
    name: "John Doe",
    position: 4,
    job: "Software Engineer",
    score: "85%",
    praises: 2,
  },
  {
    name: "John Doe",
    position: 5,
    job: "Software Engineer",
    score: "83%",
    praises: 2,
  },
  {
    name: "John Doe",
    position: 6,
    job: "Software Engineer",
    score: "81%",
    praises: 2,
  },
  {
    name: "John Doe",
    position: 7,
    job: "Software Engineer",
    score: "79%",
    praises: 2,
  },
  {
    name: "John Doe",
    position: 8,
    job: "Software Engineer",
    score: "77%",
    praises: 2,
  },
  {
    name: "John Doe",
    position: 9,
    job: "Software Engineer",
    score: "75%",
    praises: 2,
  },
  {
    name: "John Doe",
    position: 10,
    job: "Software Engineer",
    score: "73%",
    praises: 2,
  },
];

const RankingGeneral = () => {
  return (
    <div className="">
      <BestOfMonth bestPersons={bestPersons} />
    </div>
  );
};

export default RankingGeneral;

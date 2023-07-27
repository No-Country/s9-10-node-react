import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';

interface ProgressBarProps {
  value: number;
  text: string;
}

const ProgressBar = ({ value, text }: ProgressBarProps) => {
  const percentage = value;
  const textValue = text;
  return (
    <div className='w-40 md:w-52 mx-auto'>
      <CircularProgressbar
        value={percentage}
        text={textValue}
        circleRatio={0.5}
        counterClockwise={false}
        styles={{
          root: {},
          path: {
            stroke: `#73C36F`,
            transition: 'stroke-dashoffset 0.5s ease 0s',
            transform: 'rotate(-0.25turn)',
            transformOrigin: 'center center',
          },
          trail: {
            stroke: '#DCF0DB',
            transform: 'rotate(-0.25turn)',
            transformOrigin: 'center center',
          },
          text: {
            fill: '#000000',
            fontSize: '9px',
            textAlign: 'center',
          },
        }}
      />
    </div>
  );
};

export default ProgressBar;

import { Space, Spin } from 'antd';
import { useScreenSize } from '../../hooks';

const Loader = () => {
  const { width } = useScreenSize();

  return (
    <div className='flex justify-center items-center h-screen w-full'>
      <Space>
        {width < 768 ? (
          <Spin tip='Loading' size='small'>
            <div className='content' />
          </Spin>
        ) : (
          <Spin tip='Loading' size='large'>
            <div className='content' />
          </Spin>
        )}
      </Space>
    </div>
  );
};

export default Loader;

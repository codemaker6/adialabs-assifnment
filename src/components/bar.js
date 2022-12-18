import React from 'react';

const Progress_bar = ({ bgcolor, progress, height }) => {
  const MainDiv = {
    height: height,
    width: '80%',
    backgroundColor: 'whitesmoke',
  };

  const SubDiv = {
    height: '100%',
    width: `${progress}%`,
    backgroundColor: bgcolor,
    textAlign: 'right',
  };

  const progresstext = {
    padding: 10,
    color: 'black',
    fontWeight: 900,
  };

  return (
    <div style={MainDiv}>
      <div style={SubDiv}>
      </div>
    </div>
  );
};

export default Progress_bar;

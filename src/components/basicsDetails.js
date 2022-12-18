import { userInfo } from '../JsonData/profileInfo';
import { useState } from 'react';
import Progress_bar from './bar';
import { CircularProgressbar, buildStyles } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
export const BasicDetails = () => {
  const [data, SetData] = useState(userInfo);
  const percentage = 40;
  return (
    <div className="container">
      {data?.map((user) => {
        return (
          <>
            <div className="left_container">
              <div>
                <div>
                  <img
                    className="image"
                    src={user?.ProfileInfo?.Url}
                    alt="profile"
                  />
                </div>
                <div className="f-36 font-700 color-primary">
                  {user?.ProfileInfo?.name}
                </div>
                <div className="f-16 font-700 color-primary">
                  {user?.ProfileInfo?.occupation}
                </div>
                <div className="f-14 color-black font-700 mt-40">
                  {' '}
                  {user?.ProfileInfo?.AboutMe}
                </div>
                <div className="f-12 color-primary font-600 mt-10 about-info">
                  {user?.ProfileInfo?.About}
                </div>
                <div className="mt-40">
                  <p className="f-14 color-black font-700 ">
                    {user?.Skills[0]}
                  </p>

                  <Progress_bar bgcolor="#ADB7C9" progress="30" height={15} />
                </div>
                <div>
                  <p className="f-14 color-black font-700 ">
                    {user?.Skills[1]}
                  </p>
                  <Progress_bar bgcolor="#ADB7C9" progress="70" height={15} />
                </div>
                <div>
                  <p className="f-14 color-black font-700 ">
                    {user?.Skills[2]}
                  </p>
                  <Progress_bar bgcolor="#ADB7C9" progress="45" height={15} />
                </div>
                <div className="mt-20">
                  <div className="f-16 color-black font-700 ">
                    {user?.Contact?.contact}
                  </div>
                  <div className="f-14 color-primary font-700 mt-10">
                    {user?.Contact?.email}
                  </div>
                  <div
                    className="f-14 color-primary font-700 mt-10"
                    style={{ fontStyle: 'italic' }}
                  >
                    {user?.Contact?.number}
                  </div>
                </div>
              </div>
            </div>
            <div className="right_container">
              <div>
                <div className="f-16 color-black font-700 ">
                  {user?.Education?.education}
                </div>
              </div>
              <div className="mt-20">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div className="f-14 font-700 color-black">
                    {user?.Education?.ugDetails?.degree}
                  </div>
                  <div className="f-14 font-700 color-black">
                    {user?.Education?.ugDetails?.year}
                  </div>
                </div>
                <div className="f-14 font-500 color-primary mt-10 ">
                  {' '}
                  {user?.Education?.ugDetails?.university}
                </div>
              </div>
              <div className="mt-10">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div className="f-14 font-700 color-black">
                    {user?.Education?.pgDetails?.degree}
                  </div>
                  <div className="f-14 font-700 color-black">
                    {user?.Education?.pgDetails?.year}
                  </div>
                </div>
                <div className="f-14 font-500 color-primary mt-10 ">
                  {' '}
                  {user?.Education?.pgDetails?.university}
                </div>
              </div>
              <div className="mt-20">
                <div className="f-16 color-black font-700 ">
                  {user?.Language?.language}
                </div>
                <div className="f-14 color-primary font-500  mt-10">
                  {user?.Language?.text}
                </div>
                <div
                  style={{
                    display: 'flex',
                    justifyContent: 'space-between',
                    marginTop: '20px',
                  }}
                >
                  <div style={{ width: '15%' }}>
                    <CircularProgressbar
                      value={percentage}
                      text={user?.Language?.vocal?.[0]}
                      styles={buildStyles({
                        textColor: 'black',
                        pathColor: '#BBC1D0',
                        trailColor: '#737373',
                      })}
                    />
                  </div>
                  <div style={{ width: '15%' }}>
                    <CircularProgressbar
                      value={percentage}
                      text={user?.Language?.vocal?.[1]}
                      styles={buildStyles({
                        textColor: 'black',
                        pathColor: '#BBC1D0',
                        trailColor: '#737373',
                      })}
                    />
                  </div>
                  <div style={{ width: '15%' }}>
                    <CircularProgressbar
                      value={percentage}
                      text={user?.Language?.vocal?.[2]}
                      styles={buildStyles({
                        textColor: 'black',
                        pathColor: '#BBC1D0',
                        trailColor: '#737373',
                      })}
                    />
                  </div>
                </div>
              </div>
              <div className="mt-30">
                <div className="f-16 color-black font-700 ">
                  {user?.Experience?.[0].experience}
                </div>
              </div>
              <div className="mt-20">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div className="f-14 color-black font-700 ">
                    {user?.Experience?.[0].exp4?.position}
                  </div>
                  <div className="f-14 color-black font-700 ">
                    {user?.Experience?.[0].exp4?.year}
                  </div>
                </div>
                <div className="f-12 about-info font-500 color-primary mt-10">
                  {' '}
                  {user?.Experience?.[0].exp4?.role}
                </div>
              </div>
              <div className="mt-10">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div className="f-14 color-black font-700 ">
                    {user?.Experience?.[0].exp2?.position}
                  </div>
                  <div className="f-14 color-black font-700 ">
                    {user?.Experience?.[0].exp2?.year}
                  </div>
                </div>
                <div className="f-12 about-info font-500 color-primary mt-10">
                  {' '}
                  {user?.Experience?.[0].exp2?.role}
                </div>
              </div>
              <div className="mt-10">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div className="f-14 color-black font-700 ">
                    {user?.Experience?.[0].exp3?.position}
                  </div>
                  <div className="f-14 color-black font-700 ">
                    {user?.Experience?.[0].exp3?.year}
                  </div>
                </div>
                <div className="f-12 about-info font-500 color-primary mt-10">
                  {' '}
                  {user?.Experience?.[0].exp3?.role}
                </div>
              </div>
              <div className="mt-10">
                <div
                  style={{ display: 'flex', justifyContent: 'space-between' }}
                >
                  <div className="f-14 color-black font-700 ">
                    {user?.Experience?.[0].exp1?.position}
                  </div>
                  <div className="f-14 color-black font-700 ">
                    {user?.Experience?.[0].exp1?.year}
                  </div>
                </div>
                <div className="f-12 about-info font-500 color-primary mt-10">
                  {' '}
                  {user?.Experience?.[0].exp1?.role}
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
};

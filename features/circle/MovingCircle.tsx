import { useEffect, useRef, useState } from "react";

interface MovingCircleProps {
  color: string;
}

export default function MovingCircle({ color }: MovingCircleProps) {
  // const [position, setPosition] = useState({ x: 50, y: 50 });
  // const requestRef = useRef<number>();
  // const previousTimeRef = useRef<number>();

  // // 速度と方向をランダムに設定
  // const [velocity, setVelocity] = useState({
  //   vx: (Math.random() - 0.5) * 100,
  //   vy: (Math.random() - 0.5) * 100
  // });

  // const animate = (time: number) => {
  //   if (previousTimeRef.current !== undefined) {
  //     const deltaTime = time - previousTimeRef.current;

  //     // 新しい位置を計算
  //     const newX = position.x + velocity.vx * deltaTime;
  //     const newY = position.y + velocity.vy * deltaTime;

  //     // 画面端で跳ね返るように制御
  //     if (newX > window.innerWidth - 50 || newX < 0) {
  //       setVelocity({ ...velocity, vx: -velocity.vx });
  //     }
  //     if (newY > window.innerHeight - 50 || newY < 0) {
  //       setVelocity({ ...velocity, vy: -velocity.vy });
  //     }

  //     // 位置を更新
  //     setPosition({ x: newX, y: newY });
  //   }
  //   previousTimeRef.current = time;
  //   requestRef.current = requestAnimationFrame(animate);
  // };

  // useEffect(() => {
  //   requestRef.current = requestAnimationFrame(animate);
  //   return () => {
  //     if (requestRef.current) {
  //       cancelAnimationFrame(requestRef.current);
  //     }
  //   };
  // }, [velocity]);

  return (
    <div style={{
      position: 'fixed',
      // left: `${position.x}px`,
      // top: `${position.y}px`,
      width: '560px',
      height: '560px',
      backgroundColor: color,
      backgroundImage: `linear-gradient(${color})`,
      borderRadius: '50%',
      transition: 'top 0.5s, left 0.5s'
    }} />
  );
};

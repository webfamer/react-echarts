import React, { useLayoutEffect, useRef, useEffect } from 'react';
import './index.less';
import { Link, Outlet } from 'umi';

let mounted = true;
// const size = [3440, 1248]
const size = [1920, 1080];
const width = size[0];
const height = size[1];
// const { width, height } = window.screen;
// const width = document.body.clientWidth
// const height = document.body.clientHeight

export default (props: {
  children:
    | boolean
    | React.ReactChild
    | React.ReactFragment
    | React.ReactPortal
    | null
    | undefined;
}) => {
  console.log(props,'props')
  const domRef = useRef<HTMLDivElement | null>(null);
  useLayoutEffect(() => {
    console.log('我先执行')
    if (domRef.current) {
      Object.assign(domRef.current.style, {
        width: `${width}px`,
        height: `${height}px`,
      });
    }
    autoResizeScreen();
  });

  function autoResizeScreen() {
    const { clientWidth, clientHeight } = document.body;
    let left;
    let top;
    let scale;
    // 获取比例  可视化区域的宽高比与 屏幕的宽高比  来进行对应屏幕的缩放
    if (clientWidth / clientHeight > width / height) {
      scale = clientHeight / height;
      top = 0;
      left = (clientWidth - width * scale) / 2;
    } else {
      scale = clientWidth / width;
      left = 0;
      top = (clientHeight - height * scale) / 2;
    }
    localStorage.setItem('scaleSize', scale);
    // 防止组件销毁后还执行设置状态
    if (mounted && domRef.current) {
      Object.assign(domRef.current.style, {
        transform: `scale(${scale})`,
        left: `${left}px`,
        top: `${top}px`,
      });
    }
  }
  useEffect(() => {
    console.log('我后执行')
    mounted = true;
    window.addEventListener('resize', autoResizeScreen);
    return () => {
      mounted = false;
      window.removeEventListener('resize', autoResizeScreen);
    };
  }, [0]);

  return (
    <div id="dv-full-screen-container" ref={domRef}>
      {props.children}
    </div>
  );
};

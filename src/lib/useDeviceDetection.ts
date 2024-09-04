import { useState, useEffect } from "react";

interface DeviceInfo {
  hasMouse: boolean;
  isTouch: boolean;
}

const useDeviceDetection = (): DeviceInfo => {
  const [deviceInfo, setDeviceInfo] = useState<DeviceInfo>({
    hasMouse: false,
    isTouch: false,
  });

  useEffect(() => {
    const checkDevice = () => {
      const hasMouse = window.matchMedia("(pointer: fine)").matches;
      const isTouch = "ontouchstart" in window || navigator.maxTouchPoints > 0;

      setDeviceInfo({ hasMouse, isTouch });
    };

    checkDevice();

    window.addEventListener("resize", checkDevice);
    return () => window.removeEventListener("resize", checkDevice);
  }, []);

  return deviceInfo;
};

export default useDeviceDetection;

import React from "react";
import SvgIcon from "@mui/material/SvgIcon";

const SpeakerIcon = (props) => {
  return (
    <SvgIcon {...props} viewBox="0 0 30 30">
      <path d="M 14 4 A 1 1 0 0 0 13.345703 4.2441406 L 13.337891 4.2539062 A 1 1 0 0 0 13.207031 4.3925781 L 7 11 L 7 15 L 7 19 L 13.208984 25.609375 A 1 1 0 0 0 14 26 A 1 1 0 0 0 15 25 L 15 15 L 15 5 A 1 1 0 0 0 14 4 z M 22.439453 5.4511719 L 21.365234 7.1367188 C 24.126234 8.6757187 26 11.622 26 15 C 26 18.378 24.127187 21.324281 21.367188 22.863281 L 22.439453 24.548828 C 25.755453 22.652828 28 19.086 28 15 C 28 10.914 25.756453 7.3471719 22.439453 5.4511719 z M 20.292969 8.8261719 L 19.203125 10.535156 C 20.852125 11.353156 22 13.038 22 15 C 22 16.962 20.852125 18.646844 19.203125 19.464844 L 20.292969 21.173828 C 22.496969 19.993828 24 17.67 24 15 C 24 12.33 22.496969 10.006172 20.292969 8.8261719 z M 4 11 C 2.895 11 2 11.895 2 13 L 2 17 C 2 18.105 2.895 19 4 19 L 5 19 L 5 11 L 4 11 z M 18.128906 12.224609 L 17 13.996094 L 17 14 C 17.551 14 18 14.448 18 15 C 18 15.552 17.551 16 17 16 L 17 16.003906 L 18.128906 17.775391 C 19.224906 17.329391 20 16.255 20 15 C 20 13.745 19.224906 12.671609 18.128906 12.224609 z" />
    </SvgIcon>
  );
};

export default SpeakerIcon;

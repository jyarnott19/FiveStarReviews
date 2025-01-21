import { Icon } from "@chakra-ui/react";
import React from "react";
import { IconType } from "react-icons";
import { FaFilm, FaScroll, FaTv } from "react-icons/fa";

interface MovieIconProps {
  type: string;
}
const MovieIcon = ({ type }: MovieIconProps) => {
  const iconMap: { [key: string]: IconType } = {
    movie: FaFilm,
    series: FaTv,
    episose: FaScroll,
  };
  return <Icon as={iconMap[type]} />;
};

export default MovieIcon;

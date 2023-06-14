import React, { FC } from "react";
import { VStack,  } from "@chakra-ui/react";
import { SelectBox } from "../NameGenerator/SelectBox";


type Genre= {
  large: string;
  middle: string;
  small: string;
}

type GenreSelectProps= {
  placeholder: string;
  genre: Genre;
  setGenre: (value: Genre) => void;
  bgColor: string;
}

// 新たな GenreSelect コンポーネント
export const GenreSelect:FC<GenreSelectProps> = ({genre, setGenre, bgColor}) => (
  <VStack spacing={2}>
    <SelectBox
      placeholder="大ジャンルを選択"
      onChange={(e) => setGenre({ ...genre, large: e.target.value })}
      bgColor={bgColor}
    >
      {/* 大ジャンルの選択肢 */}
    </SelectBox>
    <SelectBox
      placeholder="中ジャンルを選択"
      onChange={(e) => setGenre({ ...genre, middle: e.target.value })}
      bgColor={bgColor}
    >
      {/* 中ジャンルの選択肢 */}
    </SelectBox>
    <SelectBox
      placeholder="小ジャンルを選択"
      onChange={(e) => setGenre({ ...genre, small: e.target.value })}
      bgColor={bgColor}
    >
      {/* 小ジャンルの選択肢 */}
    </SelectBox>
  </VStack>
);
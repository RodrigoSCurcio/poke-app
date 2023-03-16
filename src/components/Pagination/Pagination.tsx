import { useState, useCallback } from "react";
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { toast } from "react-toastify";
import { IPagination } from "./interface";

import * as S from "./style";

export function Pagination({ handleClick }: IPagination) {
  const [pokeNumber, setPokeNumber] = useState<number>(0);
  const [page, setPage] = useState<number>(1);

  const pagination = useCallback(
    (offset: string) => {
      setPokeNumber(offset === "previous" ? pokeNumber - 9 : pokeNumber + 9);
      setPage(offset === "previous" ? page - 1 : page + 1);
    },
    [page, pokeNumber]
  );

  return (
    <S.PaginationStyle>
      <MdNavigateBefore
        size={20}
        onClick={() => {
          if (page !== 1) {
            handleClick(pokeNumber - 9);
            pagination("previous");
          } else {
            toast.warn("Não é possivel seguir com a ação.");
          }
        }}
      />
      <S.PageInfo>
        <span>
          Página <strong>{page}</strong> de 17
        </span>
      </S.PageInfo>
      <MdNavigateNext
        size={20}
        onClick={() => {
          if (page < 17) {
            handleClick(pokeNumber + 9);
            pagination("next");
          } else {
            toast.warn("Não há mais páginas para acessar.");
          }
        }}
      />
    </S.PaginationStyle>
  );
}

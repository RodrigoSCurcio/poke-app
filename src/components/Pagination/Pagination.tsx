// React
import { useCallback } from "react";
// Libs
import { MdNavigateNext, MdNavigateBefore } from "react-icons/md";
import { toast } from "react-toastify";
// Styles
import * as S from "./style";
// Interface
import { IPagination } from "./interface";

export function Pagination({
  handleClick,
  pagination,
  setPagination,
}: IPagination) {
  const offset = useCallback(
    (offset: string) => {
      setPagination({
        ...pagination,
        pokeNumber:
          offset === "previous"
            ? pagination.pokeNumber - 9
            : pagination.pokeNumber + 9,
        page: offset === "previous" ? pagination.page - 1 : pagination.page + 1,
      });
    },
    [pagination, setPagination]
  );

  return (
    <S.PaginationStyle>
      <MdNavigateBefore
        size={20}
        onClick={() => {
          if (pagination.page !== 1) {
            handleClick(pagination.pokeNumber - 9);
            offset("previous");
          } else {
            toast.warn("Não é possivel seguir com a ação.");
          }
        }}
      />
      <S.PageInfo>
        <span>
          Página <strong>{pagination.page}</strong> de 17
        </span>
      </S.PageInfo>
      <MdNavigateNext
        size={20}
        onClick={() => {
          if (pagination.page < 17) {
            handleClick(pagination.pokeNumber + 9);
            offset("next");
          } else {
            toast.warn("Não há mais páginas para acessar.");
          }
        }}
      />
    </S.PaginationStyle>
  );
}

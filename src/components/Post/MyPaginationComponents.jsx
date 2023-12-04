import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
import { setPage } from "redux/post/postSlice";

const MyPaginationComponents = () => {  
    const dispatch = useDispatch();
    const { totalNum , page } = useSelector((state)=> state.postReducer );
    useEffect(()=>{},[totalNum,page])

    const renderPagination = () => {
        const paginationItems = [];
        for (let i = 0; i < totalNum; i++) {
          paginationItems.push(
            <PaginationItem key={i}>
              <PaginationLink
              style={{
                backgroundColor:page===i?"white":"transparent",
                color:page===i?"black":"white"
            }}
                onClick={() => {
                    dispatch(setPage(i));
                }}
              >
                {i + 1}
              </PaginationLink>
            </PaginationItem>
          );
        }
        return paginationItems;
      };

  return (
    <Pagination className="">
      <PaginationItem>
        <PaginationLink
          onClick={() => {
            if (page !== 0) setPage((prev) => prev - 1);
          }}
        >
          Previous
        </PaginationLink>
      </PaginationItem>
      {renderPagination()}
      <PaginationItem>
        <PaginationLink
          onClick={() => {
            if (page !== totalNum-1)
              setPage((prev) => prev + 1);
          }}
        >
          Next
        </PaginationLink>
      </PaginationItem>
    </Pagination>
  );
};

export default MyPaginationComponents;

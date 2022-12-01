import React, {useState} from "react";
import './Pagination.css';

import arrowOlder from "../../assets/icons/pagination/arrow-older.svg";
import arrowNext from "../../assets/icons/pagination/arrow-next.svg";

export interface PaginationProps {
    onChange: (pageNumber: number) => void
}

export const Pagination = ({onChange} : PaginationProps) => {

    const [currentPage, setCurrentPage] = useState(1);
    const [pageList, setPageList] = useState([1, 2, 3, 4, 5])

    const decreasePage = () => {
        if (currentPage - 1 < pageList[0]) {
            let newList = [currentPage - 1, ...pageList];
            newList.pop();
            setPageList(newList);
        }
        setCurrentPage(currentPage - 1);
        onChange(currentPage);
    }

    const increasePage = () => {
        if (currentPage + 1 > pageList[pageList.length - 1]) {
            let newList = [...pageList];
            newList.push(newList[newList.length - 1] + 1);
            newList.shift();
            setPageList(newList);
        }
        setCurrentPage(currentPage + 1);
        onChange(currentPage);
    }

    return (
        <div className="pagination__wrapper">
            <div className="pagination">
                <button className="pagination__btn pagination__btn_older" disabled={currentPage === 1} onClick={decreasePage}>
                    <img src={arrowOlder} alt="Arrow-older"/>
                    <span>OLDER POST</span>
                </button>
                <ul className="pagination__numbers">
                    { pageList.map(n => <li onClick={_ => onChange(n)} style={{color: n == currentPage ? "#C9A96E" : "black"}}>{n}</li>) }
                </ul>
                <button className="pagination__btn pagination__btn_next" disabled={currentPage === 15} onClick={increasePage}>
                    <span>NEXT POST</span>
                    <img src={arrowNext} alt="Arrow-next"/>
                </button>
            </div>
        </div>
    );
}
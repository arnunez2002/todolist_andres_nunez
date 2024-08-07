import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import AddEditBoardModal from "../modals/AddEditBoardModal";
import Column from "./Column";
import EmptyBoard from "./EmptyBoard";

function Home() {
  const [windowSize, setWindowSize] = useState([
    window.innerWidth,
    window.innerHeight,
  ]);

  useEffect(() => {
    const handleWindowResize = () => {
      setWindowSize([window.innerWidth, window.innerHeight]);
    };

    window.addEventListener("resize", handleWindowResize);

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);

  const [isBoardModalOpen, setIsBoardModalOpen] = useState(false);
  const [filter, setFilter] = useState("");

  const boards = useSelector((state) => state.boards);
  const board = boards.find((board) => board.isActive === true);
  const columns = board.columns;

  return (
    <div className="relative">
      <div className="bg-[#f4f7fd] dark:bg-[#20212c] pt-[80px] relative">
        {/* Filtro */}
        <div className="p-4 w-full max-w-[400px] mx-auto mb-4">
          <input
            type="text"
            value={filter}
            onChange={(e) => setFilter(e.target.value)}
            placeholder="Filtrar columnas o tareas..."
            className="w-full p-2 border rounded focus:outline-none focus:ring-2 focus:ring-[#635FC7] focus:border-transparent"
          />
        </div>
        <div className="bg-[#f4f7fd] scrollbar-hide h-screen flex dark:bg-[#20212c] overflow-x-scroll gap-6">
          {/* Columns Section */}
          {columns.length > 0 ? (
            <>
              {columns.map((col, index) => (
                <Column key={index} colIndex={index} filter={filter} />
              ))}
              <div
                onClick={() => {
                  setIsBoardModalOpen(true);
                }}
                className="h-screen dark:bg-[#2b2c3740] flex justify-center items-center font-bold text-2xl hover:text-[#635FC7] transition duration-300 cursor-pointer bg-[#E9EFFA] scrollbar-hide mb-2 mx-5 pt-[90px] min-w-[280px] text-[#828FA3] mt-[135px] rounded-lg"
              >
                + New Topic
              </div>
            </>
          ) : (
            <>
              <EmptyBoard type="edit" />
            </>
          )}
          {isBoardModalOpen && (
            <AddEditBoardModal
              type="edit"
              setIsBoardModalOpen={setIsBoardModalOpen}
            />
          )}
        </div>
      </div>
    </div>
  );
}

export default Home;

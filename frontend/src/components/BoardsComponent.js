import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchBoards, createBoard, updateBoard, deleteBoard, setBoardActive } from "../redux/boardsSlice";

const BoardsComponent = () => {
  const dispatch = useDispatch();
  const boards = useSelector((state) => state.boards.items);
  const loading = useSelector((state) => state.boards.loading);
  const error = useSelector((state) => state.boards.error);

  useEffect(() => {
    dispatch(fetchBoards());
  }, [dispatch]);

  const handleAddBoard = (newBoard) => {
    dispatch(createBoard(newBoard));
  };

  const handleUpdateBoard = (boardName, updates) => {
    dispatch(updateBoard({ boardName, updates }));
  };

  const handleDeleteBoard = (boardName) => {
    dispatch(deleteBoard(boardName));
  };

  const handleSetBoardActive = (index) => {
    dispatch(setBoardActive({ index }));
  };

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div>
      {boards.map((board, index) => (
        <div key={board.name}>
          <h2>{board.name}</h2>
          <button onClick={() => handleSetBoardActive(index)}>
            {board.isActive ? "Active" : "Set Active"}
          </button>
          <button onClick={() => handleUpdateBoard(board.name, { ...board, name: "Updated Board" })}>
            Update Board
          </button>
          <button onClick={() => handleDeleteBoard(board.name)}>Delete Board</button>
        </div>
      ))}
      <button onClick={() => handleAddBoard({ name: "New Board", columns: [] })}>
        Add Board
      </button>
    </div>
  );
};

export default BoardsComponent;

// src/api/api.js
import axios from 'axios';

const API_URL = "http://localhost:4000"; // URL de tu servidor Express

// Helper function to handle HTTP requests
const fetchJSON = async (url, options) => {
  const response = await axios(url, options);
  if (response.status >= 200 && response.status < 300) {
    return response.data;
  } else {
    throw new Error(`HTTP error! Status: ${response.status}`);
  }
};

// Boards
export const fetchBoards = () =>
  fetchJSON(`${API_URL}/boards`);

export const createBoard = (board) =>
  fetchJSON(`${API_URL}/boards`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(board),
  });

export const updateBoard = (boardName, updates) =>
  fetchJSON(`${API_URL}/boards/${boardName}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(updates),
  });

export const deleteBoard = (boardName) =>
  axios.delete(`${API_URL}/boards/${boardName}`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    });

// Columns
export const fetchColumns = (boardName) =>
  fetchJSON(`${API_URL}/boards/${boardName}/columns`);

export const createColumn = (boardName, column) =>
  fetchJSON(`${API_URL}/boards/${boardName}/columns`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(column),
  });

export const updateColumn = (boardName, columnName, updates) =>
  fetchJSON(`${API_URL}/boards/${boardName}/columns/${columnName}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(updates),
  });

export const deleteColumn = (boardName, columnName) =>
  axios.delete(`${API_URL}/boards/${boardName}/columns/${columnName}`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    });

// Tasks
export const fetchTasks = (boardName, columnName) =>
  fetchJSON(`${API_URL}/boards/${boardName}/columns/${columnName}/tasks`);

export const createTask = (boardName, columnName, task) =>
  fetchJSON(`${API_URL}/boards/${boardName}/columns/${columnName}/tasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(task),
  });

export const updateTask = (boardName, columnName, taskTitle, updates) =>
  fetchJSON(`${API_URL}/boards/${boardName}/columns/${columnName}/tasks/${taskTitle}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(updates),
  });

export const deleteTask = (boardName, columnName, taskTitle) =>
  axios.delete(`${API_URL}/boards/${boardName}/columns/${columnName}/tasks/${taskTitle}`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    });

// Subtasks
export const fetchSubtasks = (boardName, columnName, taskTitle) =>
  fetchJSON(`${API_URL}/boards/${boardName}/columns/${columnName}/tasks/${taskTitle}/subtasks`);

export const createSubtask = (boardName, columnName, taskTitle, subtask) =>
  fetchJSON(`${API_URL}/boards/${boardName}/columns/${columnName}/tasks/${taskTitle}/subtasks`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(subtask),
  });

export const updateSubtask = (boardName, columnName, taskTitle, subtaskTitle, updates) =>
  fetchJSON(`${API_URL}/boards/${boardName}/columns/${columnName}/tasks/${taskTitle}/subtasks/${subtaskTitle}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    data: JSON.stringify(updates),
  });

export const deleteSubtask = (boardName, columnName, taskTitle, subtaskTitle) =>
  axios.delete(`${API_URL}/boards/${boardName}/columns/${columnName}/tasks/${taskTitle}/subtasks/${subtaskTitle}`)
    .then((response) => {
      if (response.status >= 200 && response.status < 300) {
        return;
      } else {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }
    });

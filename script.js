const addBtn = document.querySelector('.add');
const saveBtn = document.querySelector('.save');
const cancelBtn = document.querySelector('.cancel');
const deleteBtn = document.getElementsByClassName('.delete-note');
const deleteAllBtn = document.getElementsByClassName('.delete-all');

const noteArea = document.querySelector('.note-area');
const notePanel = document.querySelector('.note-panel');
const category = document.querySelector('#category');
const textArea = document.querySelector('#text');
const error = document.querySelector('.error');

let selectedValue;

let cardID = 0;

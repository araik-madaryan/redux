// ACTIONS
const addAction = {
   type: 'ADD',
};

const removeAction = {
   type: 'REMOVE',
};

const addAction10 = {
   type: 'ADD10',
};

const removeAction10 = {
   type: 'REMOVE10',
};

const reset0 = {
   type: 'RESET',
};

// REDUCER
const counterReducer = (state = 0, action) => {
   switch (action.type) {
      case 'ADD':
         return state + 1;
      case 'REMOVE':
         return state - 1;
      case 'ADD10':
         return state + 10;
      case 'REMOVE10':
         return state - 10;
      case 'RESET':
         return state = 0;
      default:
         return state;
   }
}

// STORE
const { createStore } = Redux;
const store = createStore(counterReducer);


// MAIN
const renderStore = document.getElementById('render-store');
const render = () => {
   renderStore.innerHTML = store.getState();
}

store.subscribe(render);
render();

const add = document.getElementById('add');
add.addEventListener('click', () => {
   store.dispatch(addAction)
});

const remove = document.getElementById('remove');
remove.addEventListener('click', () => {
   store.dispatch(removeAction)
});

const add10 = document.getElementById('add10');
add10.addEventListener('click', () => {
   store.dispatch(addAction10)
});

const remove10 = document.getElementById('remove10');
remove10.addEventListener('click', () => {
   store.dispatch(removeAction10)
});

const reset = document.getElementById('reset');
reset.addEventListener('click', () => {
   store.dispatch(reset0)
});
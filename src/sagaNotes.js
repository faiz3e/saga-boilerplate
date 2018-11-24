// saga !!!

// understanding saga 

// saga can br stated as watchers and workers


// watchers as reasponsible for any action dispatched to the store and after listning that action the deligate that action 
// to worker saga 
// in worker saga the actually process the code and do all ur action 


// watcher saga are mainly in the root saga which we will export and mount on the store


// *****watcher saga ******

//watcher saga
export function* watchGetProducts () {
    yield takeEvery(actions.GET_ALL_PRODUCTS, getAllProducts)
} 

// worker saga
export function* getAllProducts () {
    const products = yield call(api.getproducts)
    yield put (actions.receiveProducts(products))
}

// 
//? the goal has to be we dispatch an action to which we can listen  with redux saga so that our saga
//? genrator can run once the action is recognized



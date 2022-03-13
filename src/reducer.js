const reducer = (state, action) => {
    if (state === undefined) {
      return {
        amt: 40000,
        name: "Black Forest",
        itemprice:800,
      };
    }
  
    switch (action.type) {
      case "BUY":
        state.amt = state.amt - state.itemprice ;
        console.log("reached reducer");
        break;
     
      default:
        break;
    }
  
    return { ...state };
  };
  
  export default reducer;